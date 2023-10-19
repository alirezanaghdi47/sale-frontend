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

export default AdvertisePage;