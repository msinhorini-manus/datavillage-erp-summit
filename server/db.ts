import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users,
  setorNumeros,
  tendencias,
  roiBeneficio,
  biSetor,
  desafiosMercado,
  projecoes,
  palestrantes,
  sessoes,
  agendaEvento,
  expositores,
  passes,
  faq,
  patrocinadores,
  InsertSetorNumeros,
  InsertTendencias,
  InsertRoiBeneficio,
  InsertBiSetor,
  InsertDesafiosMercado,
  InsertProjecoes,
  InsertPalestrantes,
  InsertSessoes,
  InsertAgendaEvento,
  InsertExpositores,
  InsertPasses,
  InsertFaq,
  InsertPatrocinadores
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Setor em Números
export async function getAllSetorNumeros() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(setorNumeros).orderBy(setorNumeros.ordem);
}

export async function getSetorNumerosAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(setorNumeros).where(eq(setorNumeros.ativo, 1)).orderBy(setorNumeros.ordem);
}

export async function createSetorNumeros(data: InsertSetorNumeros) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(setorNumeros).values(data);
}

export async function updateSetorNumeros(id: number, data: Partial<InsertSetorNumeros>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(setorNumeros).set(data).where(eq(setorNumeros.id, id));
}

export async function deleteSetorNumeros(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(setorNumeros).where(eq(setorNumeros.id, id));
}

// Tendências
export async function getAllTendencias() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(tendencias).orderBy(tendencias.ordem);
}

export async function getTendenciasAtivas() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(tendencias).where(eq(tendencias.ativo, 1)).orderBy(tendencias.ordem);
}

export async function createTendencias(data: InsertTendencias) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(tendencias).values(data);
}

export async function updateTendencias(id: number, data: Partial<InsertTendencias>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(tendencias).set(data).where(eq(tendencias.id, id));
}

export async function deleteTendencias(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(tendencias).where(eq(tendencias.id, id));
}

// ROI Benefício
export async function getAllRoiBeneficio() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(roiBeneficio).orderBy(roiBeneficio.ordem);
}

export async function getRoiBeneficioAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(roiBeneficio).where(eq(roiBeneficio.ativo, 1)).orderBy(roiBeneficio.ordem);
}

export async function createRoiBeneficio(data: InsertRoiBeneficio) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(roiBeneficio).values(data);
}

export async function updateRoiBeneficio(id: number, data: Partial<InsertRoiBeneficio>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(roiBeneficio).set(data).where(eq(roiBeneficio.id, id));
}

export async function deleteRoiBeneficio(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(roiBeneficio).where(eq(roiBeneficio.id, id));
}

// BI Setor
export async function getAllBiSetor() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(biSetor).orderBy(biSetor.ordem);
}

export async function getBiSetorAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(biSetor).where(eq(biSetor.ativo, 1)).orderBy(biSetor.ordem);
}

export async function createBiSetor(data: InsertBiSetor) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(biSetor).values(data);
}

export async function updateBiSetor(id: number, data: Partial<InsertBiSetor>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(biSetor).set(data).where(eq(biSetor.id, id));
}

export async function deleteBiSetor(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(biSetor).where(eq(biSetor.id, id));
}

// Desafios Mercado
export async function getAllDesafiosMercado() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(desafiosMercado).orderBy(desafiosMercado.ordem);
}

export async function getDesafiosMercadoAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(desafiosMercado).where(eq(desafiosMercado.ativo, 1)).orderBy(desafiosMercado.ordem);
}

export async function createDesafiosMercado(data: InsertDesafiosMercado) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(desafiosMercado).values(data);
}

export async function updateDesafiosMercado(id: number, data: Partial<InsertDesafiosMercado>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(desafiosMercado).set(data).where(eq(desafiosMercado.id, id));
}

export async function deleteDesafiosMercado(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(desafiosMercado).where(eq(desafiosMercado.id, id));
}

// Projeções
export async function getAllProjecoes() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(projecoes).orderBy(projecoes.ordem);
}

export async function getProjecoesAtivas() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(projecoes).where(eq(projecoes.ativo, 1)).orderBy(projecoes.ordem);
}

export async function createProjecoes(data: InsertProjecoes) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(projecoes).values(data);
}

export async function updateProjecoes(id: number, data: Partial<InsertProjecoes>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(projecoes).set(data).where(eq(projecoes.id, id));
}

export async function deleteProjecoes(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(projecoes).where(eq(projecoes.id, id));
}

// Palestrantes
export async function getAllPalestrantes() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(palestrantes).orderBy(palestrantes.ordem);
}

export async function getPalestrantesAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(palestrantes).where(eq(palestrantes.ativo, 1)).orderBy(palestrantes.ordem);
}

export async function createPalestrantes(data: InsertPalestrantes) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(palestrantes).values(data);
}

export async function updatePalestrantes(id: number, data: Partial<InsertPalestrantes>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(palestrantes).set(data).where(eq(palestrantes.id, id));
}

export async function deletePalestrantes(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(palestrantes).where(eq(palestrantes.id, id));
}

// Sessões
export async function getAllSessoes() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(sessoes).orderBy(sessoes.ordem);
}

export async function getSessoesAtivas() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(sessoes).where(eq(sessoes.ativo, 1)).orderBy(sessoes.ordem);
}

export async function createSessoes(data: InsertSessoes) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(sessoes).values(data);
}

export async function updateSessoes(id: number, data: Partial<InsertSessoes>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(sessoes).set(data).where(eq(sessoes.id, id));
}

export async function deleteSessoes(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(sessoes).where(eq(sessoes.id, id));
}

// Agenda Evento
export async function getAllAgendaEvento() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(agendaEvento).orderBy(agendaEvento.dia, agendaEvento.ordem);
}

export async function getAgendaEventoAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(agendaEvento).where(eq(agendaEvento.ativo, 1)).orderBy(agendaEvento.dia, agendaEvento.ordem);
}

export async function getAgendaEventoPorDia(dia: number) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(agendaEvento).where(eq(agendaEvento.dia, dia)).orderBy(agendaEvento.ordem);
}

export async function createAgendaEvento(data: InsertAgendaEvento) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(agendaEvento).values(data);
}

export async function updateAgendaEvento(id: number, data: Partial<InsertAgendaEvento>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(agendaEvento).set(data).where(eq(agendaEvento.id, id));
}

export async function deleteAgendaEvento(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(agendaEvento).where(eq(agendaEvento.id, id));
}

// Expositores
export async function getAllExpositores() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(expositores).orderBy(expositores.ordem);
}

export async function getExpositoresAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(expositores).where(eq(expositores.ativo, 1)).orderBy(expositores.ordem);
}

export async function createExpositores(data: InsertExpositores) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(expositores).values(data);
}

export async function updateExpositores(id: number, data: Partial<InsertExpositores>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(expositores).set(data).where(eq(expositores.id, id));
}

export async function deleteExpositores(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(expositores).where(eq(expositores.id, id));
}

// Passes
export async function getAllPasses() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(passes).orderBy(passes.ordem);
}

export async function getPassesAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(passes).where(eq(passes.ativo, 1)).orderBy(passes.ordem);
}

export async function createPasses(data: InsertPasses) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(passes).values(data);
}

export async function updatePasses(id: number, data: Partial<InsertPasses>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(passes).set(data).where(eq(passes.id, id));
}

export async function deletePasses(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(passes).where(eq(passes.id, id));
}

// FAQ
export async function getAllFaq() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(faq).orderBy(faq.ordem);
}

export async function getFaqAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(faq).where(eq(faq.ativo, 1)).orderBy(faq.ordem);
}

export async function createFaq(data: InsertFaq) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(faq).values(data);
}

export async function updateFaq(id: number, data: Partial<InsertFaq>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(faq).set(data).where(eq(faq.id, id));
}

export async function deleteFaq(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(faq).where(eq(faq.id, id));
}

// Patrocinadores
export async function getAllPatrocinadores() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(patrocinadores).orderBy(patrocinadores.ordem);
}

export async function getPatrocinadoresAtivos() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(patrocinadores).where(eq(patrocinadores.ativo, 1)).orderBy(patrocinadores.ordem);
}

export async function getPatrocinadoresPorNivel(nivel: "diamond" | "gold" | "silver" | "bronze") {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(patrocinadores).where(eq(patrocinadores.nivel, nivel)).orderBy(patrocinadores.ordem);
}

export async function createPatrocinadores(data: InsertPatrocinadores) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(patrocinadores).values(data);
}

export async function updatePatrocinadores(id: number, data: Partial<InsertPatrocinadores>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(patrocinadores).set(data).where(eq(patrocinadores.id, id));
}

export async function deletePatrocinadores(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(patrocinadores).where(eq(patrocinadores.id, id));
}
