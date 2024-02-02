"use client";

// libraries
import {dehydrate, HydrationBoundary, QueryClient, QueryClientProvider} from '@tanstack/react-query';

// types
import {TanstackProviderType} from "@/types/providers";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
});

const TanstackQuery = (props:TanstackProviderType) => {

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {props.children}
            </HydrationBoundary>
        </QueryClientProvider>
    )
}

export default TanstackQuery;
