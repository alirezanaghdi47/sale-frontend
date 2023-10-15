// components
import Breadcrumb from "@/components/widgets/Breadcrumb";
import Filterbar from "@/components/widgets/public/Filterbar";
import Advertises from "@/components/widgets/public/Advertises";

const linkList = [
    {id: 1 , title: "خانه" , href: "/"},
    {id: 2 , title: "ماشین بنز" , href: "/car-benz"},
];

const CategoryPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Breadcrumb linkList={linkList}/>

            <Filterbar/>

            <Advertises/>

        </main>
    )
}

export default CategoryPage;