import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import {
  setorNumerosRouter,
  tendenciasRouter,
  roiBeneficioRouter,
  biSetorRouter,
  desafiosMercadoRouter,
  projecoesRouter,
  palestrantesRouter,
  sessoesRouter,
  agendaEventoRouter,
  expositoresRouter,
  passesRouter,
  faqRouter,
  patrocinadoresRouter,
} from "./cmsRouters";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // CMS Routers
  setorNumeros: setorNumerosRouter,
  tendencias: tendenciasRouter,
  roiBeneficio: roiBeneficioRouter,
  biSetor: biSetorRouter,
  desafiosMercado: desafiosMercadoRouter,
  projecoes: projecoesRouter,
  palestrantes: palestrantesRouter,
  sessoes: sessoesRouter,
  agendaEvento: agendaEventoRouter,
  expositores: expositoresRouter,
  passes: passesRouter,
  faq: faqRouter,
  patrocinadores: patrocinadoresRouter,
});

export type AppRouter = typeof appRouter;
