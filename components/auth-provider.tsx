"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { User, SupabaseClient } from "@supabase/supabase-js";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ 
  user: null, 
  loading: true,
  signOut: async () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabaseRef = useRef<SupabaseClient | null>(null);

  useEffect(() => {
    // Skip auth if Supabase is not configured
    if (!isSupabaseConfigured()) {
      console.warn('Supabase is not configured. Auth features are disabled.');
      setLoading(false);
      return;
    }

    // Create supabase client only when needed
    if (!supabaseRef.current) {
      supabaseRef.current = createClient();
    }
    const supabase = supabaseRef.current;

    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Error getting session:', error);
          setUser(null);
        } else {
          // Set user from session
          const currentUser = session?.user ?? null;
          setUser(currentUser);
          if (currentUser) {
            console.log('Initial session loaded for:', currentUser.email);
          }
        }
      } catch (error) {
        console.error('Error in getInitialSession:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setUser(session?.user ?? null);
        setLoading(false);

        // Handle different auth events
        if (event === 'SIGNED_IN') {
          console.log('User signed in:', session?.user?.email);
          router.refresh();
        } else if (event === 'SIGNED_OUT') {
          console.log('User signed out');
          router.push('/');
          router.refresh();
        } else if (event === 'TOKEN_REFRESHED') {
          console.log('Token refreshed for:', session?.user?.email);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  const signOut = async () => {
    if (!supabaseRef.current) return;
    try {
      const { error } = await supabaseRef.current.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      }
    } catch (error) {
      console.error('Error in signOut:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
