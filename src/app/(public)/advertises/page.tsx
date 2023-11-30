// libraries
import {QueryClient} from "@tanstack/react-query";

// components
import {Advertises} from "@/components/widgets/Advertises";

// services
import {getAllAdvertiseService} from "@/services/advertiseService";

export const metadata = {
    title: 'آگهی ها',
}

const AdvertisesPage = async ({searchParams}) => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["allAdvertise" , {page: searchParams?.page, sort: searchParams?.sort, search: searchParams?.search, startPrice: searchParams?.startPrice, endPrice: searchParams?.endPrice, city: searchParams?.city, category: searchParams?.category}],
        queryFn: () => getAllAdvertise({page: searchParams?.page, sort: searchParams?.sort, search: searchParams?.search, startPrice: searchParams?.startPrice, endPrice: searchParams?.endPrice, city: searchParams?.city, category: searchParams?.category})
    });

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Advertises/>

        </main>
    );
}

export async function getAllAdvertise() {

    const allAdvertise = await getAllAdvertiseService({});

    return allAdvertise;

}

export default AdvertisesPage;