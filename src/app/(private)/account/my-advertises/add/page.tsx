import {AddAdvertise} from "@/components/widgets/AddAdvertise";

export const metadata = {
    title: 'افزودن آگهی',
}

const AddAdvertisePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full md:max-w-[calc(100%_-_240px)] h-full min-h-screen p-4">

            <AddAdvertise/>

        </main>
    );
}

export default AddAdvertisePage;