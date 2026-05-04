"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function CVPreview() {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white">
      {/* Header / Contacto */}
      <header className="border-b-2 border-blue-600 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-slate-800 uppercase tracking-wide mb-3">
          Sérgio Almeida
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <span className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-blue-600" />
            928 212 041 (WhatsApp)
          </span>
          <span className="flex items-center gap-1">
            <Mail className="h-4 w-4 text-blue-600" />
            sergiusalmeida@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-blue-600" />
            Rua de Azevedo n.º 413 R/C, 4300-049 Porto, Portugal
          </span>
        </div>
      </header>

      {/* Perfil */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Perfil
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed text-justify">
          Profissional orientado para a tecnologia, disponível para novos
          desafios e desenvolvimento contínuo. Valorizo o relacionamento
          interpessoal e possuo forte capacidade de liderança, sinergia de
          equipa e sentido crítico apurado.
        </p>
      </section>

      {/* Competências */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Competências
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "C/C++",
            "C#",
            "Java",
            "JavaScript",
            "PHP",
            "Python",
            "Liderança de Equipas",
            "Literacia Informática",
            "Comunicação Eficaz",
            "Gestão de Redes",
            "Sistemas Informáticos",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experiência Profissional */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Experiência Profissional
        </h2>

        <div className="space-y-5">
          <ExperienceItem
            title="Freelancer em Redação e Revisão"
            period="jan. 2022 – jun. 2024"
            company="Trabalho Independente – Porto, Portugal"
            bullets={[
              "Redigir e rever textos técnicos e comerciais",
              "Criar e formatar tabelas em Excel",
              "Transcrever conteúdos e produzir legendas",
              "Gravar locuções e prestar suporte ao cliente",
            ]}
          />

          <ExperienceItem
            title="Assistente Pessoal em Cuidados Domiciliários"
            period="ago. 2019 – dez. 2021"
            company="CAVI-AFUA, APN, AVI – Portugal"
            bullets={[
              "Apoiar pessoas com deficiência física e mental nas atividades diárias",
              "Executar programas de reabilitação e inclusão social",
              "Promover a autonomia e bem-estar dos utentes",
            ]}
          />

          <ExperienceItem
            title="Freelancer Multifuncional"
            period="abr. 2013 – mai. 2019"
            company="Trabalho Independente – Brasil"
            bullets={[
              "Ministrar tutorias de educação básica e académica",
              "Orientar dissertações e monografias",
              "Formar idosos em informática inclusiva",
              "Organizar eventos culturais e gerir atividades comerciais",
            ]}
          />

          <ExperienceItem
            title="Técnico Administrativo e Operacional"
            period="jan. 2000 – mar. 2012"
            company="SESC / SENAC / SEST-SENAT / SEED-GO / AR-X / DF / Carrefour – Brasil"
            bullets={[
              "Operar em loja e prestar serviços gerais",
              "Executar funções de caixa e secretariado",
              "Redigir, editar e rever textos institucionais",
              "Coordenar atividades culturais e sociais",
            ]}
          />
        </div>
      </section>

      {/* Formação */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
          Formação
        </h2>

        <div className="space-y-3">
          <EducationItem
            degree="Especialista em Gestão de Redes e Sistemas Informáticos"
            period="abr. 2024 – out. 2025"
            institution="CINEL – Porto, Portugal"
          />

          <EducationItem
            degree="Formação Técnica em Programação"
            period="ago. 2022 – nov. 2023"
            institution="TECNISIG – Centro de Competências Digitais – Porto, Portugal"
          />

          <EducationItem
            degree="Certificado de Equivalência ao Ensino Secundário"
            period="jun. 2022"
            institution="Portugal"
          />

          <EducationItem
            degree="Pós-Graduação em Metodologia Científica – Língua e Literatura Portuguesa"
            period="jun. 2014 – jul. 2016"
            institution="FAEL – Sociedade Técnica Educacional da Lapa – Paraná, Brasil"
          />

          <EducationItem
            degree="Licenciatura em Língua Portuguesa e Inglesa"
            period="jun. 2003 – ago. 2006"
            institution="Faculdade Michelangelo – Instituto Rui Barbosa – DF, Brasil"
          />
        </div>
      </section>

      {/* Idiomas e Hobbies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
            Idiomas
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Português</span>
              <span className="text-slate-500">Nativo</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Inglês</span>
              <span className="text-slate-500">Intermédio (B1/B2)</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-blue-600 uppercase tracking-wide border-b border-gray-200 pb-1 mb-3">
            Hobbies
          </h2>
          <p className="text-sm text-slate-600">
            Culinária, leitura, cinema, música, guitarra e meditação.
          </p>
        </section>
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  period,
  company,
  bullets,
}: {
  title: string;
  period: string;
  company: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <span className="text-xs text-slate-500 italic whitespace-nowrap ml-4">
          {period}
        </span>
      </div>
      <p className="text-sm text-slate-600 mb-2">{company}</p>
      <ul className="space-y-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-600">
            <span className="text-blue-600">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationItem({
  degree,
  period,
  institution,
}: {
  degree: string;
  period: string;
  institution: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-slate-800 text-sm">{degree}</h3>
        <span className="text-xs text-slate-500 italic whitespace-nowrap ml-4">
          {period}
        </span>
      </div>
      <p className="text-xs text-slate-500">{institution}</p>
    </div>
  );
}
