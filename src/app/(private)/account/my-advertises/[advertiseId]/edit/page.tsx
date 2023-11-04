import {AddAdvertise} from "@/components/widgets/AddAdvertise";

const EditAdvertisePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full md:max-w-[calc(100%_-_240px)] p-4">

            <AddAdvertise/>

        </main>
    );
}

export async function generateMetadata({ params }) {

    return {
        title: `${params.advertiseId}ویرایش آگهی `,
    }
}

export default EditAdvertisePage;