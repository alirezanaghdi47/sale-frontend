// components
import Content from "@/components/widgets/my-advertise/Content";

export const metadata = {
    title: 'آگهی های من',
}

const MyAdvertisesPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">
            <Content/>
        </main>
    );
}

export default MyAdvertisesPage;