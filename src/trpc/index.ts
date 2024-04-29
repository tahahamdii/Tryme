import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
 
export const appRouter = router({
    authCallback: publicProcedure.query(() => {
        const { getUser } = getKindeServerSession()
        const user = getUser()

        if(!user.id || !user.email)
            throw new TRPCError({ code: 'UNAUTHORIZED'})

        //checl if user is in the database

        const dbUser = await db.user.findFirst({
            where: {
                id: user.id;
            }
        })

        return { success: true}


        
    })
});


export type AppRouter = typeof appRouter;