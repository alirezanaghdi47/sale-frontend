// components
import {AddAdvertise} from "@/components/widgets/AddAdvertise";

export const metadata = {
    title: 'افزودن آگهی',
}

const AddAdvertisePage = async () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">

            <AddAdvertise/>

        </main>
    );
}

export default AddAdvertisePage;