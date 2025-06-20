"use client"

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react';

const queryClient = new QueryClient();

const Providers = ({ children }: {
    children: ReactNode
}) => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </div>
    )
}

export default Providers