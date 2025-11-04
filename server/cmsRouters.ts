import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import * as db from "./db";

// Schema de validação para Setor em Números
const setorNumerosSchema = z.object({
  titulo: z.string(),
  valor: z.string(),
  descricao: z.string(),
  icone: z.string(),
  cor: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Tendências
const tendenciasSchema = z.object({
  titulo: z.string(),
  percentual: z.string(),
  descricao: z.string(),
  icone: z.string(),
  cor: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para ROI Benefício
const roiBeneficioSchema = z.object({
  titulo: z.string(),
  descricao: z.string(),
  icone: z.string(),
  cor: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para BI Setor
const biSetorSchema = z.object({
  nome: z.string(),
  percentual: z.string(),
  descricao: z.string(),
  icone: z.string(),
  cor: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Desafios Mercado
const desafiosMercadoSchema = z.object({
  titulo: z.string(),
  percentual: z.string(),
  descricao: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Projeções
const projecoesSchema = z.object({
  titulo: z.string(),
  valor: z.string(),
  descricao: z.string(),
  cor: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Palestrantes
const palestrantesSchema = z.object({
  nome: z.string(),
  cargo: z.string(),
  empresa: z.string(),
  foto: z.string().optional(),
  bio: z.string().optional(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Sessões
const sessoesSchema = z.object({
  titulo: z.string(),
  categoria: z.string(),
  corCategoria: z.string(),
  descricao: z.string(),
  palestranteId: z.number().optional(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Agenda Evento
const agendaEventoSchema = z.object({
  dia: z.number(),
  horarioInicio: z.string(),
  horarioFim: z.string(),
  titulo: z.string(),
  tipo: z.string(),
  palestrante: z.string().optional(),
  local: z.string(),
  descricao: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Expositores
const expositoresSchema = z.object({
  nome: z.string(),
  categoria: z.string(),
  descricao: z.string(),
  icone: z.string(),
  produtos: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Passes
const passesSchema = z.object({
  nome: z.string(),
  descricao: z.string(),
  preco: z.number(),
  precoOriginal: z.number(),
  beneficios: z.string(),
  destaque: z.number().default(0),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para FAQ
const faqSchema = z.object({
  pergunta: z.string(),
  resposta: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Schema de validação para Patrocinadores
const patrocinadoresSchema = z.object({
  nome: z.string(),
  nivel: z.enum(["diamond", "gold", "silver", "bronze"]),
  logo: z.string().optional(),
  sigla: z.string(),
  ordem: z.number().default(0),
  ativo: z.number().default(1),
});

// Router para Setor em Números
export const setorNumerosRouter = router({
  list: publicProcedure.query(() => db.getSetorNumerosAtivos()),
  listAll: protectedProcedure.query(() => db.getAllSetorNumeros()),
  create: protectedProcedure.input(setorNumerosSchema).mutation(({ input }) => db.createSetorNumeros(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: setorNumerosSchema.partial() }))
    .mutation(({ input }) => db.updateSetorNumeros(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteSetorNumeros(input)),
});

// Router para Tendências
export const tendenciasRouter = router({
  list: publicProcedure.query(() => db.getTendenciasAtivas()),
  listAll: protectedProcedure.query(() => db.getAllTendencias()),
  create: protectedProcedure.input(tendenciasSchema).mutation(({ input }) => db.createTendencias(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: tendenciasSchema.partial() }))
    .mutation(({ input }) => db.updateTendencias(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteTendencias(input)),
});

// Router para ROI Benefício
export const roiBeneficioRouter = router({
  list: publicProcedure.query(() => db.getRoiBeneficioAtivos()),
  listAll: protectedProcedure.query(() => db.getAllRoiBeneficio()),
  create: protectedProcedure.input(roiBeneficioSchema).mutation(({ input }) => db.createRoiBeneficio(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: roiBeneficioSchema.partial() }))
    .mutation(({ input }) => db.updateRoiBeneficio(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteRoiBeneficio(input)),
});

// Router para BI Setor
export const biSetorRouter = router({
  list: publicProcedure.query(() => db.getBiSetorAtivos()),
  listAll: protectedProcedure.query(() => db.getAllBiSetor()),
  create: protectedProcedure.input(biSetorSchema).mutation(({ input }) => db.createBiSetor(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: biSetorSchema.partial() }))
    .mutation(({ input }) => db.updateBiSetor(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteBiSetor(input)),
});

// Router para Desafios Mercado
export const desafiosMercadoRouter = router({
  list: publicProcedure.query(() => db.getDesafiosMercadoAtivos()),
  listAll: protectedProcedure.query(() => db.getAllDesafiosMercado()),
  create: protectedProcedure.input(desafiosMercadoSchema).mutation(({ input }) => db.createDesafiosMercado(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: desafiosMercadoSchema.partial() }))
    .mutation(({ input }) => db.updateDesafiosMercado(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteDesafiosMercado(input)),
});

// Router para Projeções
export const projecoesRouter = router({
  list: publicProcedure.query(() => db.getProjecoesAtivas()),
  listAll: protectedProcedure.query(() => db.getAllProjecoes()),
  create: protectedProcedure.input(projecoesSchema).mutation(({ input }) => db.createProjecoes(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: projecoesSchema.partial() }))
    .mutation(({ input }) => db.updateProjecoes(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteProjecoes(input)),
});

// Router para Palestrantes
export const palestrantesRouter = router({
  list: publicProcedure.query(() => db.getPalestrantesAtivos()),
  listAll: protectedProcedure.query(() => db.getAllPalestrantes()),
  create: protectedProcedure.input(palestrantesSchema).mutation(({ input }) => db.createPalestrantes(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: palestrantesSchema.partial() }))
    .mutation(({ input }) => db.updatePalestrantes(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deletePalestrantes(input)),
});

// Router para Sessões
export const sessoesRouter = router({
  list: publicProcedure.query(() => db.getSessoesAtivas()),
  listAll: protectedProcedure.query(() => db.getAllSessoes()),
  create: protectedProcedure.input(sessoesSchema).mutation(({ input }) => db.createSessoes(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: sessoesSchema.partial() }))
    .mutation(({ input }) => db.updateSessoes(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteSessoes(input)),
});

// Router para Agenda Evento
export const agendaEventoRouter = router({
  list: publicProcedure.query(() => db.getAgendaEventoAtivos()),
  listAll: protectedProcedure.query(() => db.getAllAgendaEvento()),
  byDay: publicProcedure.input(z.number()).query(({ input }) => db.getAgendaEventoPorDia(input)),
  create: protectedProcedure.input(agendaEventoSchema).mutation(({ input }) => db.createAgendaEvento(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: agendaEventoSchema.partial() }))
    .mutation(({ input }) => db.updateAgendaEvento(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteAgendaEvento(input)),
});

// Router para Expositores
export const expositoresRouter = router({
  list: publicProcedure.query(() => db.getExpositoresAtivos()),
  listAll: protectedProcedure.query(() => db.getAllExpositores()),
  create: protectedProcedure.input(expositoresSchema).mutation(({ input }) => db.createExpositores(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: expositoresSchema.partial() }))
    .mutation(({ input }) => db.updateExpositores(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteExpositores(input)),
});

// Router para Passes
export const passesRouter = router({
  list: publicProcedure.query(() => db.getPassesAtivos()),
  listAll: protectedProcedure.query(() => db.getAllPasses()),
  create: protectedProcedure.input(passesSchema).mutation(({ input }) => db.createPasses(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: passesSchema.partial() }))
    .mutation(({ input }) => db.updatePasses(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deletePasses(input)),
});

// Router para FAQ
export const faqRouter = router({
  list: publicProcedure.query(() => db.getFaqAtivos()),
  listAll: protectedProcedure.query(() => db.getAllFaq()),
  create: protectedProcedure.input(faqSchema).mutation(({ input }) => db.createFaq(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: faqSchema.partial() }))
    .mutation(({ input }) => db.updateFaq(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deleteFaq(input)),
});

// Router para Patrocinadores
export const patrocinadoresRouter = router({
  list: publicProcedure.query(() => db.getPatrocinadoresAtivos()),
  listAll: protectedProcedure.query(() => db.getAllPatrocinadores()),
  byLevel: publicProcedure
    .input(z.enum(["diamond", "gold", "silver", "bronze"]))
    .query(({ input }) => db.getPatrocinadoresPorNivel(input)),
  create: protectedProcedure.input(patrocinadoresSchema).mutation(({ input }) => db.createPatrocinadores(input)),
  update: protectedProcedure
    .input(z.object({ id: z.number(), data: patrocinadoresSchema.partial() }))
    .mutation(({ input }) => db.updatePatrocinadores(input.id, input.data)),
  delete: protectedProcedure.input(z.number()).mutation(({ input }) => db.deletePatrocinadores(input)),
});
