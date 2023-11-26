// components
import {Favorites} from "@/components/widgets/Favorites";

export const metadata = {
    title: 'علاقه مندی ها',
}

const FavoritePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full md:max-w-[calc(100%_-_240px)] h-full min-h-screen p-4">

            <Favorites/>

        </main>
    );
}

export default FavoritePage;