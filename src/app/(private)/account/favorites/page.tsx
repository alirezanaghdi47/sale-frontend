// components
import Content from "@/components/widgets/favorites/Content";

export const metadata = {
    title: 'علاقه مندی ها',
}

const FavoritePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">
            <Content/>
        </main>
    );
}

export default FavoritePage;