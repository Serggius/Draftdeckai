"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const CVDocument = dynamic(() => import("./cv-document").then((mod) => mod.CVDocument), {
  ssr: false,
});

const CVPreview = dynamic(() => import("./cv-preview").then((mod) => mod.CVPreview), {
  ssr: false,
});

export default function CVSergioPage() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Currículo - Sérgio Almeida
          </h1>
          <p className="text-gray-600 text-center max-w-2xl">
            CV reorganizado e corrigido para Português de Portugal, com descrições objetivas e verbos de ação.
          </p>
          
          {isClient && (
            <PDFDownloadLink
              document={<CVDocument />}
              fileName="Sergio_Almeida_CV.pdf"
            >
              {({ loading }) => (
                <Button
                  size="lg"
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                  disabled={loading}
                >
                  <Download className="h-5 w-5" />
                  {loading ? "A gerar PDF..." : "Descarregar PDF"}
                </Button>
              )}
            </PDFDownloadLink>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="bg-blue-600 text-white px-6 py-3 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span className="font-medium">Pré-visualização do CV</span>
          </div>
          
          {isClient ? (
            <CVPreview />
          ) : (
            <div className="p-8 text-center text-gray-500">
              A carregar pré-visualização...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
