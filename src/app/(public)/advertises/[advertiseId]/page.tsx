// components
import {Advertise , RelativeAdvertises} from "@/components/widgets/Advertise";

const AdvertisePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Advertise/>

            <RelativeAdvertises/>

        </main>
    )
}

export async function generateMetadata({ params }) {

    return {
        title: params.advertiseId,
        openGraph: {
            title: 'advertise title',
            description: 'advertise description',
            url: process.env.BASE_URL,
            siteName: 'Next.js',
            images: [
                {
                    url: 'advertise image url',
                    width: 120,
                    height: 120,
                },
            ],
            locale: 'fa_IR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'advertise title',
            description: 'advertise description',
            images: ['advertise image url'],
        },
    }
}

export default AdvertisePage;