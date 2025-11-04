import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Setor em Números
export const setorNumeros = mysqlTable("setor_numeros", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  valor: varchar("valor", { length: 100 }).notNull(),
  descricao: text("descricao").notNull(),
  icone: varchar("icone", { length: 50 }).notNull(),
  cor: varchar("cor", { length: 50 }).notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SetorNumeros = typeof setorNumeros.$inferSelect;
export type InsertSetorNumeros = typeof setorNumeros.$inferInsert;

// Tendências
export const tendencias = mysqlTable("tendencias", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  percentual: varchar("percentual", { length: 10 }).notNull(),
  descricao: text("descricao").notNull(),
  icone: varchar("icone", { length: 50 }).notNull(),
  cor: varchar("cor", { length: 50 }).notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Tendencias = typeof tendencias.$inferSelect;
export type InsertTendencias = typeof tendencias.$inferInsert;

// ROI em Business Intelligence
export const roiBeneficio = mysqlTable("roi_beneficio", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  descricao: text("descricao").notNull(),
  icone: varchar("icone", { length: 50 }).notNull(),
  cor: varchar("cor", { length: 50 }).notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RoiBeneficio = typeof roiBeneficio.$inferSelect;
export type InsertRoiBeneficio = typeof roiBeneficio.$inferInsert;

// BI por Setor da Economia
export const biSetor = mysqlTable("bi_setor", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  percentual: varchar("percentual", { length: 10 }).notNull(),
  descricao: text("descricao").notNull(),
  icone: varchar("icone", { length: 50 }).notNull(),
  cor: varchar("cor", { length: 50 }).notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BiSetor = typeof biSetor.$inferSelect;
export type InsertBiSetor = typeof biSetor.$inferInsert;

// Desafios do Mercado
export const desafiosMercado = mysqlTable("desafios_mercado", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  percentual: varchar("percentual", { length: 10 }).notNull(),
  descricao: text("descricao").notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type DesafiosMercado = typeof desafiosMercado.$inferSelect;
export type InsertDesafiosMercado = typeof desafiosMercado.$inferInsert;

// Projeções 2027
export const projecoes = mysqlTable("projecoes", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  valor: varchar("valor", { length: 100 }).notNull(),
  descricao: text("descricao").notNull(),
  cor: varchar("cor", { length: 50 }).notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Projecoes = typeof projecoes.$inferSelect;
export type InsertProjecoes = typeof projecoes.$inferInsert;

// Palestrantes
export const palestrantes = mysqlTable("palestrantes", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  cargo: varchar("cargo", { length: 255 }).notNull(),
  empresa: varchar("empresa", { length: 255 }).notNull(),
  foto: text("foto"),
  bio: text("bio"),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Palestrantes = typeof palestrantes.$inferSelect;
export type InsertPalestrantes = typeof palestrantes.$inferInsert;

// Sessões
export const sessoes = mysqlTable("sessoes", {
  id: int("id").autoincrement().primaryKey(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  categoria: varchar("categoria", { length: 100 }).notNull(),
  corCategoria: varchar("corCategoria", { length: 50 }).notNull(),
  descricao: text("descricao").notNull(),
  palestranteId: int("palestranteId"),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Sessoes = typeof sessoes.$inferSelect;
export type InsertSessoes = typeof sessoes.$inferInsert;

// Agenda do Evento
export const agendaEvento = mysqlTable("agenda_evento", {
  id: int("id").autoincrement().primaryKey(),
  dia: int("dia").notNull(),
  horarioInicio: varchar("horarioInicio", { length: 10 }).notNull(),
  horarioFim: varchar("horarioFim", { length: 10 }).notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  tipo: varchar("tipo", { length: 50 }).notNull(),
  palestrante: varchar("palestrante", { length: 255 }),
  local: varchar("local", { length: 255 }).notNull(),
  descricao: text("descricao").notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AgendaEvento = typeof agendaEvento.$inferSelect;
export type InsertAgendaEvento = typeof agendaEvento.$inferInsert;

// Expositores
export const expositores = mysqlTable("expositores", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  categoria: varchar("categoria", { length: 255 }).notNull(),
  descricao: text("descricao").notNull(),
  icone: varchar("icone", { length: 50 }).notNull(),
  produtos: text("produtos").notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Expositores = typeof expositores.$inferSelect;
export type InsertExpositores = typeof expositores.$inferInsert;

// Passes/Ingressos
export const passes = mysqlTable("passes", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  descricao: text("descricao").notNull(),
  preco: int("preco").notNull(),
  precoOriginal: int("precoOriginal").notNull(),
  beneficios: text("beneficios").notNull(),
  destaque: int("destaque").notNull().default(0),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Passes = typeof passes.$inferSelect;
export type InsertPasses = typeof passes.$inferInsert;

// FAQ
export const faq = mysqlTable("faq", {
  id: int("id").autoincrement().primaryKey(),
  pergunta: text("pergunta").notNull(),
  resposta: text("resposta").notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Faq = typeof faq.$inferSelect;
export type InsertFaq = typeof faq.$inferInsert;

// Patrocinadores
export const patrocinadores = mysqlTable("patrocinadores", {
  id: int("id").autoincrement().primaryKey(),
  nome: varchar("nome", { length: 255 }).notNull(),
  nivel: mysqlEnum("nivel", ["diamond", "gold", "silver", "bronze"]).notNull(),
  logo: text("logo"),
  sigla: varchar("sigla", { length: 10 }).notNull(),
  ordem: int("ordem").notNull().default(0),
  ativo: int("ativo").notNull().default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Patrocinadores = typeof patrocinadores.$inferSelect;
export type InsertPatrocinadores = typeof patrocinadores.$inferInsert;