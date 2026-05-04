"use client";

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Helvetica",
  fonts: [
    { src: "https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf" },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    borderBottom: "2pt solid #2563eb",
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e3a5f",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    marginTop: 5,
  },
  contactItem: {
    fontSize: 9,
    color: "#374151",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    borderBottom: "1pt solid #e5e7eb",
    paddingBottom: 4,
  },
  profileText: {
    fontSize: 10,
    color: "#374151",
    textAlign: "justify",
    lineHeight: 1.5,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillTag: {
    backgroundColor: "#eff6ff",
    color: "#1e40af",
    padding: "4 8",
    borderRadius: 3,
    fontSize: 9,
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1e3a5f",
  },
  period: {
    fontSize: 9,
    color: "#6b7280",
    fontStyle: "italic",
  },
  company: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 4,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 10,
  },
  bullet: {
    width: 8,
    fontSize: 9,
    color: "#2563eb",
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: "#374151",
  },
  educationItem: {
    marginBottom: 8,
  },
  degreeTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e3a5f",
  },
  institution: {
    fontSize: 9,
    color: "#4b5563",
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  languageName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e3a5f",
  },
  languageLevel: {
    fontSize: 9,
    color: "#6b7280",
  },
  hobbiesText: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.5,
  },
  twoColumn: {
    flexDirection: "row",
    gap: 20,
  },
  column: {
    flex: 1,
  },
});

export function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* CONTACTO */}
        <View style={styles.header}>
          <Text style={styles.name}>Sérgio Almeida</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>928 212 041 (WhatsApp)</Text>
            <Text style={styles.contactItem}>sergiusalmeida@gmail.com</Text>
            <Text style={styles.contactItem}>
              Rua de Azevedo n.º 413 R/C, 4300-049 Porto, Portugal
            </Text>
          </View>
        </View>

        {/* PERFIL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfil</Text>
          <Text style={styles.profileText}>
            Profissional orientado para a tecnologia, disponível para novos
            desafios e desenvolvimento contínuo. Valorizo o relacionamento
            interpessoal e possuo forte capacidade de liderança, sinergia de
            equipa e sentido crítico apurado.
          </Text>
        </View>

        {/* COMPETÊNCIAS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Competências</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillTag}>C/C++</Text>
            <Text style={styles.skillTag}>C#</Text>
            <Text style={styles.skillTag}>Java</Text>
            <Text style={styles.skillTag}>JavaScript</Text>
            <Text style={styles.skillTag}>PHP</Text>
            <Text style={styles.skillTag}>Python</Text>
            <Text style={styles.skillTag}>Liderança de Equipas</Text>
            <Text style={styles.skillTag}>Literacia Informática</Text>
            <Text style={styles.skillTag}>Comunicação Eficaz</Text>
            <Text style={styles.skillTag}>Gestão de Redes</Text>
            <Text style={styles.skillTag}>Sistemas Informáticos</Text>
          </View>
        </View>

        {/* EXPERIÊNCIA PROFISSIONAL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>

          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.jobTitle}>Freelancer em Redação e Revisão</Text>
              <Text style={styles.period}>jan. 2022 – jun. 2024</Text>
            </View>
            <Text style={styles.company}>Trabalho Independente – Porto, Portugal</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Redigir e rever textos técnicos e comerciais
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Criar e formatar tabelas em Excel
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Transcrever conteúdos e produzir legendas
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Gravar locuções e prestar suporte ao cliente
              </Text>
            </View>
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.jobTitle}>Assistente Pessoal em Cuidados Domiciliários</Text>
              <Text style={styles.period}>ago. 2019 – dez. 2021</Text>
            </View>
            <Text style={styles.company}>CAVI-AFUA, APN, AVI – Portugal</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Apoiar pessoas com deficiência física e mental nas atividades diárias
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Executar programas de reabilitação e inclusão social
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Promover a autonomia e bem-estar dos utentes
              </Text>
            </View>
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.jobTitle}>Freelancer Multifuncional</Text>
              <Text style={styles.period}>abr. 2013 – mai. 2019</Text>
            </View>
            <Text style={styles.company}>Trabalho Independente – Brasil</Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Ministrar tutorias de educação básica e académica
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Orientar dissertações e monografias
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Formar idosos em informática inclusiva
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Organizar eventos culturais e gerir atividades comerciais
              </Text>
            </View>
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.jobTitle}>Técnico Administrativo e Operacional</Text>
              <Text style={styles.period}>jan. 2000 – mar. 2012</Text>
            </View>
            <Text style={styles.company}>
              SESC / SENAC / SEST-SENAT / SEED-GO / AR-X / DF / Carrefour – Brasil
            </Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Operar em loja e prestar serviços gerais
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Executar funções de caixa e secretariado
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Redigir, editar e rever textos institucionais
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                Coordenar atividades culturais e sociais
              </Text>
            </View>
          </View>
        </View>

        {/* FORMAÇÃO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação</Text>

          <View style={styles.educationItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.degreeTitle}>
                Especialista em Gestão de Redes e Sistemas Informáticos
              </Text>
              <Text style={styles.period}>abr. 2024 – out. 2025</Text>
            </View>
            <Text style={styles.institution}>CINEL – Porto, Portugal</Text>
          </View>

          <View style={styles.educationItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.degreeTitle}>Formação Técnica em Programação</Text>
              <Text style={styles.period}>ago. 2022 – nov. 2023</Text>
            </View>
            <Text style={styles.institution}>
              TECNISIG – Centro de Competências Digitais – Porto, Portugal
            </Text>
          </View>

          <View style={styles.educationItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.degreeTitle}>Certificado de Equivalência ao Ensino Secundário</Text>
              <Text style={styles.period}>jun. 2022</Text>
            </View>
            <Text style={styles.institution}>Portugal</Text>
          </View>

          <View style={styles.educationItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.degreeTitle}>
                Pós-Graduação em Metodologia Científica – Língua e Literatura Portuguesa
              </Text>
              <Text style={styles.period}>jun. 2014 – jul. 2016</Text>
            </View>
            <Text style={styles.institution}>
              FAEL – Sociedade Técnica Educacional da Lapa – Paraná, Brasil
            </Text>
          </View>

          <View style={styles.educationItem}>
            <View style={styles.experienceHeader}>
              <Text style={styles.degreeTitle}>
                Licenciatura em Língua Portuguesa e Inglesa
              </Text>
              <Text style={styles.period}>jun. 2003 – ago. 2006</Text>
            </View>
            <Text style={styles.institution}>
              Faculdade Michelangelo – Instituto Rui Barbosa – DF, Brasil
            </Text>
          </View>
        </View>

        {/* IDIOMAS E HOBBIES - Two columns */}
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Idiomas</Text>
              <View style={styles.languageRow}>
                <Text style={styles.languageName}>Português</Text>
                <Text style={styles.languageLevel}>Nativo</Text>
              </View>
              <View style={styles.languageRow}>
                <Text style={styles.languageName}>Inglês</Text>
                <Text style={styles.languageLevel}>Intermédio (B1/B2)</Text>
              </View>
            </View>
          </View>

          <View style={styles.column}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Hobbies</Text>
              <Text style={styles.hobbiesText}>
                Culinária, leitura, cinema, música, guitarra e meditação.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
