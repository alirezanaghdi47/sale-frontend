// libraries
import {notFound} from "next/navigation";
import {QueryClient} from "@tanstack/react-query";

// components
import {Advertise} from "@/components/widgets/Advertise";

// services
import {getAdvertiseService, getRelativeAdvertiseService} from "@/services/advertiseService";

const AdvertisePage = async ({params}) => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["advertise" , {advertise: params?.advertise}],
        queryFn: () => getAdvertise(params?.advertise)
    });

    await queryClient.prefetchQuery({
        queryKey: ["relativeAdvertise" , {advertise: params?.advertiseId}],
        queryFn: () => getRelativeAdvertise(params?.advertiseId)
    });

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Advertise/>

        </main>
    )
}

export async function getAdvertise(id) {

    const advertise = await getAdvertiseService(id);

    if (advertise?.data) {
        return advertise;
    } else {
        return notFound();
    }

}

export async function getRelativeAdvertise(id) {

    const relativeAdvertise = await getRelativeAdvertiseService(id);

    return relativeAdvertise;

}

export async function generateMetadata({ params }) {

    const advertise = await getAdvertise(params.advertiseId);

    return {
        title: advertise?.data?.title,
        description: advertise?.data?.description,
        openGraph: {
            title: advertise?.data?.title,
            description: advertise?.data?.description,
            url: `${process.env.BASE_URL}/advertises/${advertise?.data?._id}`,
            siteName: 'نما گجت',
            images: [
                {
                    url: advertise?.data?.gallery[0],
                    width: 120,
                    height: 120,
                },
            ],
            locale: 'fa_IR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: advertise?.data?.title,
            description: advertise?.data?.description,
            images: [
                {
                    url: advertise?.data?.gallery[0],
                    width: 120,
                    height: 120,
                },
            ],
        },
    }
}

export default AdvertisePage;