// libraries
import {QueryClient} from "@tanstack/react-query";

// components
import Content from "@/components/widgets/advertises/Content";

// services
import {getAllAdvertiseService} from "@/services/advertiseService";

// types
import {AdvertisesPageType} from "@/types/pages";
import {IAdvertiseFilter} from "@/types/global";

export const metadata = {
    title: 'نما گجت',
}

const AdvertisesPage = async ({searchParams}: AdvertisesPageType) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["allAdvertise", {
            page: searchParams?.page,
            sort: searchParams?.sort,
            search: searchParams?.search,
            startPrice: searchParams?.startPrice,
            endPrice: searchParams?.endPrice,
            city: searchParams?.city,
            category: searchParams?.category
        }],
        queryFn: () => getAllAdvertise({
            page: searchParams?.page,
            sort: searchParams?.sort,
            search: searchParams?.search,
            startPrice: searchParams?.startPrice,
            endPrice: searchParams?.endPrice,
            city: searchParams?.city,
            category: searchParams?.category
        })
    });

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">
            <Content/>
        </main>
    );
}

export async function getAllAdvertise(data: IAdvertiseFilter) {
    const allAdvertise = await getAllAdvertiseService(data);
    return allAdvertise;
}

export default AdvertisesPage;