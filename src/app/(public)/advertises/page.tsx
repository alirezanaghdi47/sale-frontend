// components
import Filterbar from "@/components/partials/public/Filterbar";
import Advertises from "@/components/partials/Advertises";

const AdvertisesPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Filterbar/>

            <Advertises/>

        </main>
    );
}

export default AdvertisesPage;