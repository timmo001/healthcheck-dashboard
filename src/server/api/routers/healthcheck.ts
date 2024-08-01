import { desc } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { healthchecks } from "~/server/db/schema";

export const healthcheckRouter = createTRPCRouter({
  listHealthchecks: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.healthchecks.findMany({
      orderBy: [desc(healthchecks.id)],
    });
  }),
});
