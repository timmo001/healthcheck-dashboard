import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { healthcheckRouter } from "~/server/api/routers/healthcheck";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  healthcheck: healthcheckRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.link.all();
 *       ^? Link[]
 */
export const createCaller = createCallerFactory(appRouter);
