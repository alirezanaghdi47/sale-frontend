// components
import {Favorites} from "@/components/widgets/Favorites";

export const metadata = {
    title: 'علاقه مندی ها',
}

const FavoritePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Favorites/>

        </main>
    );
}

export default FavoritePage;