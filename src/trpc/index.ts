import { publicProcedure, router } from './trpc';
 
export const appRouter = router({
    test: publicProcedure.query(()=>{
        return 69
    })
});
 

export type AppRouter = typeof appRouter;