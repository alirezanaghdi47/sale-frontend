// components
import Favorites from "@/components/widgets/private/favorites/Favorites";

const FavoritePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <h1 className="text-dark font-bold text-base">
                علاقه مندی ها
            </h1>

            <Favorites/>

        </main>
    );
}

export default FavoritePage;