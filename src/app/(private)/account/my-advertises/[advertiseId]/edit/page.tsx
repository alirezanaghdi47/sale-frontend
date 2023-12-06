// libraries
import {notFound} from "next/navigation";
import {QueryClient} from "@tanstack/react-query";

// components
import {EditAdvertise} from "@/components/widgets/EditAdvertise";

// services
import {getMyAdvertiseService} from "@/services/myAdvertiseService";

export const metadata = {
    title: 'افزودن آگهی',
}

const EditAdvertisePage = async (params) => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["myAdvertise" , {advertiseId: params?.advertiseId}],
        queryFn: () => getMyAdvertise({advertiseId: params?.advertiseId})
    });

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full md:max-w-[calc(100%_-_240px)] h-full min-h-screen p-4">

            <EditAdvertise/>

        </main>
    );
}

export async function getMyAdvertise(id) {

    const advertise = await getMyAdvertiseService(id);

    if (advertise?.data) {
        return advertise;
    } else {
        return notFound();
    }

}

export default EditAdvertisePage;