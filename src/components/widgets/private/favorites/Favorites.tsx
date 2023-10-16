'use client';

// components
import FavoriteCard from "@/components/widgets/private/favorites/FavoriteCard";

const FavoriteItem = ({favoriteItem}) => {

    return (
        <li className="col-span-12 lg:col-span-6">
            <FavoriteCard/>
        </li>
    )
}

const FavoritesList = () => {

    return (
        <ul className="grid grid-cols-12 gap-4 w-full">

            {
                Array(3).fill("").map((favoriteItem , index) =>
                    <FavoriteItem
                        key={index}
                        favoriteItem={favoriteItem}
                    />
                )
            }

        </ul>
    )
}

const Favorites = () => {

    return (
        <section className="flex flex-col justify-start items-start gap-y-4 w-full">

            <FavoritesList/>

        </section>
    )
}

export default Favorites;