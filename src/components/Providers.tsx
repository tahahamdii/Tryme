'use client'

import { trpc } from '@/app/_trpc/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { PropsWithChildren, useState } from 'react'
import { createTRPCClient } from '@trpc/client';

const Providers = ({ children }: PropsWithChildren) => {

const [queryClient] = useState(() => new QueryClient());
const [trpcClient] = useState(() =>
createTRPCClient({
        links: [
            httpBatchLink({
                url: ("https/localhost:3000/api/trpc"),
            }),
        ],
    })
);
  return (
      <trpc.Provider 
      client={trpcClient}
      queryClient={queryClient}
      >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default Providers