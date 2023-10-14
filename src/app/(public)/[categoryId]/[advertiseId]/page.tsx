// components
import Breadcrumb from "@/components/widgets/Breadcrumb";
import AdvertiseGallery from "@/components/widgets/public/AdvertiseGallery";
import AdvertiseContent from "@/components/widgets/public/AdvertiseContent";
import RelativeAdvertises from "@/components/widgets/public/RelativeAdvertises";
import AdvertiseSpecification from "@/components/widgets/public/AdvertiseSpecification";
import AdvertiseAction from "@/components/widgets/public/AdvertiseAction";

const linkList = [
    {id: 1 , title: "خانه" , href: "/"},
    {id: 2 , title: "ماشین بنز" , href: "/car-benz"},
    {id: 3 , title: "بنز 2006"},
];

const AdvertisePage = () => {

    return (
        <main className="grid grid-cols-12 justify-start items-start gap-4 w-full max-w-[1200px] p-4">

            <Breadcrumb linkList={linkList}/>

            <AdvertiseAction/>

            <AdvertiseGallery/>

            <AdvertiseContent/>

            <AdvertiseSpecification/>

            <RelativeAdvertises/>

        </main>
    )
}

export default AdvertisePage;