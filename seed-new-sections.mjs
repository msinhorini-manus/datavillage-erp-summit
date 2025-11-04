import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { 
  roiBeneficio,
  biSetor,
  desafiosMercado,
  projecoes,
  sessoes,
  agendaEvento,
  expositores
} from "./drizzle/schema.js";

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

console.log("🌱 Iniciando seed das novas seções...");

// ROI Benefícios
const roiBeneficioData = [
  {
    titulo: "Aumento de 23% na produtividade",
    descricao: "Equipes com acesso a dados em tempo real",
    icone: "⬆️",
    cor: "green",
    ordem: 1,
    ativo: 1,
  },
  {
    titulo: "Decisões 5x mais rápidas",
    descricao: "Com dashboards automatizados",
    icone: "⚡",
    cor: "blue",
    ordem: 2,
    ativo: 1,
  },
  {
    titulo: "ROI médio de 1300%",
    descricao: "Em projetos de BI bem implementados",
    icone: "💰",
    cor: "purple",
    ordem: 3,
    ativo: 1,
  },
];

for (const item of roiBeneficioData) {
  await db.insert(roiBeneficio).values(item);
}
console.log("✅ ROI Benefícios inseridos");

// BI por Setor
const biSetorData = [
  {
    nome: "Financeiro",
    percentual: "95%",
    descricao: "Setor líder em adoção de BI para análise de risco e compliance",
    icone: "💵",
    cor: "green",
    ordem: 1,
    ativo: 1,
  },
  {
    nome: "Varejo",
    percentual: "87%",
    descricao: "Análise de comportamento do consumidor e otimização de estoque",
    icone: "🛒",
    cor: "blue",
    ordem: 2,
    ativo: 1,
  },
  {
    nome: "Manufatura",
    percentual: "82%",
    descricao: "Otimização de processos e manutenção preditiva",
    icone: "🏭",
    cor: "orange",
    ordem: 3,
    ativo: 1,
  },
  {
    nome: "Saúde",
    percentual: "78%",
    descricao: "Análise de dados clínicos e gestão hospitalar",
    icone: "❤️",
    cor: "red",
    ordem: 4,
    ativo: 1,
  },
  {
    nome: "Logística",
    percentual: "74%",
    descricao: "Otimização de rotas e gestão da cadeia de suprimentos",
    icone: "🚚",
    cor: "purple",
    ordem: 5,
    ativo: 1,
  },
  {
    nome: "Imobiliário",
    percentual: "69%",
    descricao: "Análise de mercado e precificação inteligente",
    icone: "🏢",
    cor: "indigo",
    ordem: 6,
    ativo: 1,
  },
];

for (const item of biSetorData) {
  await db.insert(biSetor).values(item);
}
console.log("✅ BI por Setor inserido");

// Desafios do Mercado
const desafiosMercadoData = [
  {
    titulo: "Falta de profissionais qualificados",
    percentual: "73%",
    descricao: "Principal barreira para implementação de BI",
    ordem: 1,
    ativo: 1,
  },
  {
    titulo: "Qualidade dos dados",
    percentual: "68%",
    descricao: "Dados inconsistentes ou incompletos",
    ordem: 2,
    ativo: 1,
  },
  {
    titulo: "Integração de sistemas",
    percentual: "61%",
    descricao: "Dificuldade em conectar diferentes fontes",
    ordem: 3,
    ativo: 1,
  },
  {
    titulo: "Orçamento limitado",
    percentual: "54%",
    descricao: "Recursos insuficientes para projetos de BI",
    ordem: 4,
    ativo: 1,
  },
];

for (const item of desafiosMercadoData) {
  await db.insert(desafiosMercado).values(item);
}
console.log("✅ Desafios do Mercado inseridos");

// Projeções
const projecoesData = [
  {
    titulo: "Mercado de BI",
    valor: "$45Bi",
    descricao: "Valor projetado do mercado global em 2027",
    cor: "blue",
    ordem: 1,
    ativo: 1,
  },
  {
    titulo: "Adoção de IA em BI",
    valor: "92%",
    descricao: "Empresas usando IA em analytics até 2027",
    cor: "purple",
    ordem: 2,
    ativo: 1,
  },
  {
    titulo: "Profissionais de Dados",
    valor: "2.5M+",
    descricao: "Profissionais de dados no Brasil em 2027",
    cor: "green",
    ordem: 3,
    ativo: 1,
  },
];

for (const item of projecoesData) {
  await db.insert(projecoes).values(item);
}
console.log("✅ Projeções inseridas");

// Sessões
const sessoesData = [
  {
    titulo: "Implementando Dashboards Executivos em Escala Enterprise",
    categoria: "BUSINESS INTELLIGENCE",
    corCategoria: "blue",
    descricao: "Aprenda as melhores práticas para criar dashboards executivos que escalam para grandes organizações, com foco em performance e usabilidade.",
    palestranteId: 1,
    ordem: 1,
    ativo: 1,
  },
  {
    titulo: "Machine Learning para Análise Preditiva de Vendas no Varejo",
    categoria: "DATA ANALYTICS",
    corCategoria: "green",
    descricao: "Descubra como aplicar algoritmos de ML para prever tendências de vendas e otimizar seu estoque com precisão.",
    palestranteId: 3,
    ordem: 2,
    ativo: 1,
  },
  {
    titulo: "Data Governance: Construindo uma Cultura de Dados Confiáveis",
    categoria: "BUSINESS INTELLIGENCE",
    corCategoria: "blue",
    descricao: "Estratégias práticas para implementar governança de dados e garantir qualidade, segurança e compliance.",
    palestranteId: 4,
    ordem: 3,
    ativo: 1,
  },
  {
    titulo: "Real-Time Analytics com Streaming de Dados",
    categoria: "DATA ANALYTICS",
    corCategoria: "green",
    descricao: "Explore arquiteturas modernas para processar e analisar dados em tempo real usando tecnologias de streaming.",
    palestranteId: 2,
    ordem: 4,
    ativo: 1,
  },
];

for (const item of sessoesData) {
  await db.insert(sessoes).values(item);
}
console.log("✅ Sessões inseridas");

// Agenda Evento - Dia 1
const agendaDia1 = [
  {
    dia: 1,
    horarioInicio: "08:00",
    horarioFim: "09:00",
    titulo: "Credenciamento e Welcome Coffee",
    tipo: "Networking",
    palestrante: null,
    local: "Hall Principal",
    descricao: "Recepção dos participantes com café da manhã",
    ordem: 1,
    ativo: 1,
  },
  {
    dia: 1,
    horarioInicio: "09:00",
    horarioFim: "09:45",
    titulo: "Keynote: O Futuro dos Dados no Brasil",
    tipo: "Keynote",
    palestrante: "Ana Silva - CEO Data Village",
    local: "Auditório Principal",
    descricao: "Visão estratégica sobre transformação digital e BI",
    ordem: 2,
    ativo: 1,
  },
  {
    dia: 1,
    horarioInicio: "10:00",
    horarioFim: "11:00",
    titulo: "Implementando Dashboards Executivos em Escala",
    tipo: "Palestra",
    palestrante: "Carlos Mendes - VP Analytics",
    local: "Sala A",
    descricao: "Melhores práticas para dashboards enterprise",
    ordem: 3,
    ativo: 1,
  },
  {
    dia: 1,
    horarioInicio: "11:15",
    horarioFim: "12:15",
    titulo: "Machine Learning para Análise Preditiva",
    tipo: "Workshop",
    palestrante: "Maria Santos - Head of Data Science",
    local: "Sala B",
    descricao: "Workshop prático com casos reais de ML aplicado",
    ordem: 4,
    ativo: 1,
  },
  {
    dia: 1,
    horarioInicio: "12:15",
    horarioFim: "13:30",
    titulo: "Almoço e Networking",
    tipo: "Networking",
    palestrante: null,
    local: "Área de Alimentação",
    descricao: "Almoço com oportunidades de networking",
    ordem: 5,
    ativo: 1,
  },
];

for (const item of agendaDia1) {
  await db.insert(agendaEvento).values(item);
}
console.log("✅ Agenda Dia 1 inserida");

// Agenda Evento - Dia 2
const agendaDia2 = [
  {
    dia: 2,
    horarioInicio: "08:30",
    horarioFim: "09:00",
    titulo: "Welcome Coffee",
    tipo: "Networking",
    palestrante: null,
    local: "Hall Principal",
    descricao: "Café da manhã e networking",
    ordem: 1,
    ativo: 1,
  },
  {
    dia: 2,
    horarioInicio: "09:00",
    horarioFim: "10:00",
    titulo: "Data Governance na Prática",
    tipo: "Palestra",
    palestrante: "João Oliveira - Director of BI",
    local: "Auditório Principal",
    descricao: "Como implementar governança de dados efetiva",
    ordem: 2,
    ativo: 1,
  },
  {
    dia: 2,
    horarioInicio: "10:15",
    horarioFim: "11:15",
    titulo: "Real-Time Analytics com Streaming",
    tipo: "Workshop",
    palestrante: "Patricia Costa - Data Architect",
    local: "Sala A",
    descricao: "Arquiteturas para análise de dados em tempo real",
    ordem: 3,
    ativo: 1,
  },
  {
    dia: 2,
    horarioInicio: "11:30",
    horarioFim: "12:30",
    titulo: "Painel: O Futuro do Business Intelligence",
    tipo: "Painel",
    palestrante: "Diversos especialistas",
    local: "Auditório Principal",
    descricao: "Discussão sobre tendências e futuro do BI",
    ordem: 4,
    ativo: 1,
  },
];

for (const item of agendaDia2) {
  await db.insert(agendaEvento).values(item);
}
console.log("✅ Agenda Dia 2 inserida");

// Expositores
const expositoresData = [
  {
    nome: "Microsoft",
    categoria: "Cloud & Analytics",
    descricao: "Soluções Azure para Business Intelligence e Machine Learning",
    icone: "🔷",
    produtos: "Power BI, Azure Synapse, Azure ML",
    ordem: 1,
    ativo: 1,
  },
  {
    nome: "AWS",
    categoria: "Cloud Computing",
    descricao: "Plataforma completa de analytics e data science na nuvem",
    icone: "☁️",
    produtos: "Amazon Redshift, QuickSight, SageMaker",
    ordem: 2,
    ativo: 1,
  },
  {
    nome: "Tableau",
    categoria: "Data Visualization",
    descricao: "Líder mundial em visualização de dados e self-service analytics",
    icone: "📊",
    produtos: "Tableau Desktop, Tableau Server, Tableau Online",
    ordem: 3,
    ativo: 1,
  },
  {
    nome: "Snowflake",
    categoria: "Data Warehouse",
    descricao: "Plataforma de dados na nuvem para analytics",
    icone: "❄️",
    produtos: "Data Cloud, Data Sharing, Snowpark",
    ordem: 4,
    ativo: 1,
  },
  {
    nome: "Databricks",
    categoria: "Data & AI",
    descricao: "Plataforma unificada para dados, analytics e IA",
    icone: "🔶",
    produtos: "Lakehouse, Delta Lake, MLflow",
    ordem: 5,
    ativo: 1,
  },
  {
    nome: "Qlik",
    categoria: "Analytics Platform",
    descricao: "Plataforma de analytics associativa e BI",
    icone: "🟢",
    produtos: "Qlik Sense, QlikView, Qlik Cloud",
    ordem: 6,
    ativo: 1,
  },
];

for (const item of expositoresData) {
  await db.insert(expositores).values(item);
}
console.log("✅ Expositores inseridos");

await connection.end();

console.log("🎉 Seed das novas seções concluído com sucesso!");
