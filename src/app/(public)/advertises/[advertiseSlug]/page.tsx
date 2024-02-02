// libraries
import {notFound} from "next/navigation";
import {QueryClient} from "@tanstack/react-query";

// components
import Content from "@/components/widgets/advertise/Content";

// services
import {getAdvertiseService, getRelativeAdvertiseService} from "@/services/advertiseService";

// types
import {AdvertisePageType} from "@/types/pages";

const AdvertisePage = async ({params}: AdvertisePageType) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["advertise", {advertiseSlug: params?.advertiseSlug}],
        queryFn: () => getAdvertise(params?.advertiseSlug as string)
    });

    await queryClient.prefetchQuery({
        queryKey: ["relativeAdvertise", {advertiseSlug: params?.advertiseSlug}],
        queryFn: (data) => getRelativeAdvertise(params?.advertiseSlug as string)
    });

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">
            <Content/>
        </main>
    )
}

export async function getAdvertise(slug: string) {
    const advertise = await getAdvertiseService(slug);

    if (advertise?.data) {
        return advertise;
    } else {
        return notFound();
    }
}

export async function getRelativeAdvertise(slug: string) {
    const relativeAdvertise = await getRelativeAdvertiseService(slug);
    return relativeAdvertise;
}

export async function generateMetadata({params}: AdvertisePageType) {
    const advertise = await getAdvertise(params.advertiseSlug);

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