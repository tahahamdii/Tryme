import { publicProcedure, router } from './trpc';
 
export const appRouter = router({
    test: publicProcedure.query(()=>{
        return 'okay hello'
    })
});
 

export type AppRouter = typeof appRouter;