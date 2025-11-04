import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { 
  setorNumeros, 
  tendencias, 
  palestrantes, 
  passes, 
  faq, 
  patrocinadores 
} from "./drizzle/schema.js";

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

console.log("🌱 Iniciando seed do banco de dados...");

// Setor em Números
const setorNumerosData = [
  {
    titulo: "Crescimento do Mercado de BI",
    valor: "23.1%",
    descricao: "Taxa de crescimento anual composta do mercado global de Business Intelligence",
    icone: "📊",
    cor: "blue",
    ordem: 1,
    ativo: 1,
  },
  {
    titulo: "Investimento em Analytics",
    valor: "US$ 274B",
    descricao: "Investimento global projetado em Analytics e BI até 2026",
    icone: "💰",
    cor: "green",
    ordem: 2,
    ativo: 1,
  },
  {
    titulo: "Empresas Usando BI",
    valor: "89%",
    descricao: "Percentual de empresas Fortune 500 que utilizam soluções de BI",
    icone: "🏢",
    cor: "purple",
    ordem: 3,
    ativo: 1,
  },
  {
    titulo: "Profissionais de Dados",
    valor: "1.3M+",
    descricao: "Profissionais dedicados a dados e analytics no Brasil",
    icone: "👥",
    cor: "orange",
    ordem: 4,
    ativo: 1,
  },
];

for (const item of setorNumerosData) {
  await db.insert(setorNumeros).values(item);
}

console.log("✅ Setor em Números inserido");

// Tendências
const tendenciasData = [
  {
    titulo: "IA Generativa em Analytics",
    percentual: "+156%",
    descricao: "Crescimento na adoção de IA generativa para análise de dados",
    icone: "🤖",
    cor: "blue",
    ordem: 1,
    ativo: 1,
  },
  {
    titulo: "Data Mesh",
    percentual: "+89%",
    descricao: "Empresas adotando arquitetura Data Mesh",
    icone: "🔗",
    cor: "purple",
    ordem: 2,
    ativo: 1,
  },
  {
    titulo: "Real-Time Analytics",
    percentual: "+124%",
    descricao: "Crescimento em soluções de analytics em tempo real",
    icone: "⚡",
    cor: "green",
    ordem: 3,
    ativo: 1,
  },
  {
    titulo: "Cloud BI",
    percentual: "+98%",
    descricao: "Migração de soluções BI para cloud",
    icone: "☁️",
    cor: "orange",
    ordem: 4,
    ativo: 1,
  },
];

for (const item of tendenciasData) {
  await db.insert(tendencias).values(item);
}

console.log("✅ Tendências inseridas");

// Palestrantes
const palestrantesData = [
  {
    nome: "Ana Silva",
    cargo: "Chief Data Officer",
    empresa: "Tech Corp",
    foto: null,
    bio: "Especialista em transformação digital com mais de 15 anos de experiência",
    ordem: 1,
    ativo: 1,
  },
  {
    nome: "Carlos Mendes",
    cargo: "VP de Analytics",
    empresa: "DataCo",
    foto: null,
    bio: "Líder em implementação de soluções de BI em larga escala",
    ordem: 2,
    ativo: 1,
  },
  {
    nome: "Maria Santos",
    cargo: "Head of Data Science",
    empresa: "AI Solutions",
    foto: null,
    bio: "Pioneira em aplicações de IA para business intelligence",
    ordem: 3,
    ativo: 1,
  },
  {
    nome: "João Oliveira",
    cargo: "Director of BI",
    empresa: "Enterprise Inc",
    foto: null,
    bio: "Especialista em governança de dados e compliance",
    ordem: 4,
    ativo: 1,
  },
  {
    nome: "Patricia Costa",
    cargo: "Data Architect",
    empresa: "Cloud Systems",
    foto: null,
    bio: "Arquiteta de dados com foco em soluções cloud",
    ordem: 5,
    ativo: 1,
  },
  {
    nome: "Ricardo Alves",
    cargo: "BI Manager",
    empresa: "Retail Group",
    foto: null,
    bio: "Especialista em BI para varejo e e-commerce",
    ordem: 6,
    ativo: 1,
  },
  {
    nome: "Fernanda Lima",
    cargo: "Analytics Director",
    empresa: "Financial Services",
    foto: null,
    bio: "Líder em analytics para setor financeiro",
    ordem: 7,
    ativo: 1,
  },
  {
    nome: "Bruno Martins",
    cargo: "Chief Analytics Officer",
    empresa: "Manufacturing Co",
    foto: null,
    bio: "Especialista em Industry 4.0 e IoT analytics",
    ordem: 8,
    ativo: 1,
  },
];

for (const item of palestrantesData) {
  await db.insert(palestrantes).values(item);
}

console.log("✅ Palestrantes inseridos");

// Passes
const passesData = [
  {
    nome: "Passe Básico",
    descricao: "Acesso a todas as palestras principais",
    preco: 49900,
    precoOriginal: 79900,
    beneficios: JSON.stringify([
      "Acesso às palestras principais",
      "Material digital do evento",
      "Certificado de participação",
      "Networking coffee breaks"
    ]),
    destaque: 0,
    ordem: 1,
    ativo: 1,
  },
  {
    nome: "Passe Completo",
    descricao: "Acesso total ao evento incluindo workshops",
    preco: 89900,
    precoOriginal: 139900,
    beneficios: JSON.stringify([
      "Tudo do Passe Básico",
      "Acesso a todos os workshops",
      "Sessões de networking VIP",
      "Almoços inclusos",
      "Acesso à área de expositores"
    ]),
    destaque: 1,
    ordem: 2,
    ativo: 1,
  },
  {
    nome: "Passe VIP",
    descricao: "Experiência premium completa",
    preco: 149900,
    precoOriginal: 219900,
    beneficios: JSON.stringify([
      "Tudo do Passe Completo",
      "Meet & Greet com palestrantes",
      "Jantar de gala",
      "Kit premium do evento",
      "Assento reservado nas palestras",
      "Consultoria 1:1 com especialistas"
    ]),
    destaque: 0,
    ordem: 3,
    ativo: 1,
  },
];

for (const item of passesData) {
  await db.insert(passes).values(item);
}

console.log("✅ Passes inseridos");

// FAQ
const faqData = [
  {
    pergunta: "Quando e onde será o evento?",
    resposta: "O Data Village ERP Summit 2026 acontecerá nos dias 17 e 18 de março de 2026, em São Paulo, SP.",
    ordem: 1,
    ativo: 1,
  },
  {
    pergunta: "Como faço para me inscrever?",
    resposta: "Você pode se inscrever clicando no botão 'INSCREVA-SE' no topo da página e escolhendo o passe que melhor atende suas necessidades.",
    ordem: 2,
    ativo: 1,
  },
  {
    pergunta: "Qual a política de cancelamento?",
    resposta: "Cancelamentos feitos até 30 dias antes do evento têm reembolso total. Entre 30 e 15 dias, reembolso de 50%. Menos de 15 dias, sem reembolso.",
    ordem: 3,
    ativo: 1,
  },
  {
    pergunta: "O evento oferece certificado?",
    resposta: "Sim! Todos os participantes recebem certificado digital de participação ao final do evento.",
    ordem: 4,
    ativo: 1,
  },
  {
    pergunta: "Haverá tradução simultânea?",
    resposta: "Sim, todas as palestras principais contarão com tradução simultânea português-inglês.",
    ordem: 5,
    ativo: 1,
  },
  {
    pergunta: "O evento é presencial ou online?",
    resposta: "O evento é 100% presencial em São Paulo, proporcionando experiência completa de networking e aprendizado.",
    ordem: 6,
    ativo: 1,
  },
];

for (const item of faqData) {
  await db.insert(faq).values(item);
}

console.log("✅ FAQ inserido");

// Patrocinadores
const patrocinadoresData = [
  { nome: "Google Cloud", nivel: "gold", logo: null, sigla: "GC", ordem: 1, ativo: 1 },
  { nome: "Snowflake", nivel: "gold", logo: null, sigla: "S", ordem: 2, ativo: 1 },
  { nome: "Tableau", nivel: "silver", logo: null, sigla: "T", ordem: 3, ativo: 1 },
  { nome: "Power BI", nivel: "silver", logo: null, sigla: "PB", ordem: 4, ativo: 1 },
  { nome: "Databricks", nivel: "bronze", logo: null, sigla: "D", ordem: 5, ativo: 1 },
  { nome: "Palantir", nivel: "bronze", logo: null, sigla: "P", ordem: 6, ativo: 1 },
];

for (const item of patrocinadoresData) {
  await db.insert(patrocinadores).values(item);
}

console.log("✅ Patrocinadores inseridos");

await connection.end();

console.log("🎉 Seed concluído com sucesso!");
