// components
import Breadcrumb from "@/components/partials/Breadcrumb";
import AdvertiseGallery from "@/components/widgets/public/advertise/AdvertiseGallery";
import AdvertiseContent from "@/components/widgets/public/advertise/AdvertiseContent";
import RelativeAdvertises from "@/components/widgets/public/advertise/RelativeAdvertises";
import AdvertiseSpecification from "@/components/widgets/public/advertise/AdvertiseSpecification";
import AdvertiseAction from "@/components/widgets/public/advertise/AdvertiseAction";

const linkList = [
    {id: 1 , title: "خانه" , href: "/"},
    {id: 2 , title: "ماشین بنز" , href: "/car-benz"},
    {id: 3 , title: "بنز 2006"},
];

const AdvertisePage = () => {

    return (
        <main className="grid grid-cols-12 justify-start items-start gap-4 w-full p-4">

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