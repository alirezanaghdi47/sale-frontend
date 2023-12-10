// components
import {MyAdvertises} from "@/components/widgets/MyAdvertises";

export const metadata = {
    title: 'آگهی های من',
}

const AdvertisesPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">

            <MyAdvertises/>

        </main>
    );
}

export default AdvertisesPage;