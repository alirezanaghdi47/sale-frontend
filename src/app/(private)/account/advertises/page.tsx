// components

import Advertises from "@/components/widgets/private/advertises/Advertises";

const AdvertisesPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <h1 className="text-dark font-bold text-base">
                آگهی ها
            </h1>

            <Advertises/>

        </main>
    );
}

export default AdvertisesPage;