import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  getGreeting: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .output(z.object({ greeting: z.string() }))
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.name}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
