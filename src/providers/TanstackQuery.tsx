"use client";

// libraries
import {dehydrate, HydrationBoundary, QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
});

const TanstackQuery = ({children}) => {

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {children}
            </HydrationBoundary>
        </QueryClientProvider>
    )
}

export default TanstackQuery;
