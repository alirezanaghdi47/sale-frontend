// libraries
import {notFound} from "next/navigation";
import {QueryClient} from "@tanstack/react-query";

// components
import Content from "@/components/widgets/edit-advertise/Content";

// services
import {getMyAdvertiseService} from "@/services/myAdvertiseService";

// types
import {EditMyAdvertisePageType} from "@/types/pages";

export const metadata = {
    title: 'افزودن آگهی',
}

const EditMyAdvertisePage = async (params: EditMyAdvertisePageType) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["myAdvertise" , {advertiseId: params?.advertiseId}],
        queryFn: () => getMyAdvertise(params?.advertiseId as string)
    });

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">
            <Content/>
        </main>
    );
}

export async function getMyAdvertise(id: string) {
    const advertise = await getMyAdvertiseService(id);

    if (advertise?.data) {
        return advertise;
    } else {
        return notFound();
    }
}

export default EditMyAdvertisePage;