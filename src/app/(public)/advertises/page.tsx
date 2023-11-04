// components
import {Advertises} from "@/components/widgets/Advertises";

export const metadata = {
    title: 'آگهی ها',
}

const AdvertisesPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Advertises/>

        </main>
    );
}

export default AdvertisesPage;