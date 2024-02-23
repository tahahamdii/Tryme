"use client"
import { QueryClient } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { PropsWithChildren, ReactNode, useState } from "react"
import { trpc } from "@/app/_trpc/client"
import { Provider as TrpcProvider } from "@trpc/react"
import { createClient } from "@trpc/client";


const Providers = ({children}: {children: ReactNode}) => {
    
    const [queryClient] = useState(() => new QueryClient())
    const Providers = ({children}: {children: ReactNode}) => {

        const [trpcClient] = useState(() =>
            createClient({
                links: [
                    httpBatchLink({
                        url: "https://localhost:3000/api/trpc",
                    }),
                ],
            })
        );
        return(
            <TrpcProvider client={trpcClient} queryClient={queryClient}>
                {children}
            </TrpcProvider>
        )
    }
        
    
    
}

export default Providers