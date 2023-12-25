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
        queryKey: ["myAdvertise" , {advertise: params?.advertise}],
        queryFn: () => getMyAdvertise({advertise: params?.advertise})
    });

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">

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