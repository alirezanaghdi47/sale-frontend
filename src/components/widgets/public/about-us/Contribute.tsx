'use client';

// libraries
import {LuBuilding, LuMapPin, LuPhone} from "react-icons/lu";

const Contribute = () => {

    return (
        <section className="flex flex-col justify-center items-start gap-y-4 w-full">

            <h3 className="text-dark font-bold">
                ارتباط با ما
            </h3>

            <div className="grid grid-cols-12 gap-4 w-full">

                <ul className="col-span-12 md:col-span-6 flex flex-col justify-start items-start gap-y-2 w-full">

                    <li className="flex justify-start items-center gap-x-2">

                        <span className="text-gray">
                            <LuPhone size={20}/>
                        </span>

                        <span className="text-gray text-sm line-clamp-1 leading-8">
                            09195610753
                        </span>

                    </li>

                    <li className="flex justify-start items-center gap-x-2">

                        <span className="text-gray">
                            <LuBuilding size={20}/>
                        </span>

                        <span className="text-gray text-sm line-clamp-1 leading-8">
                            1387937716
                        </span>

                    </li>

                    <li className="flex justify-start items-center gap-x-2">

                        <span className="text-gray">
                            <LuMapPin size={20}/>
                        </span>

                        <span className="text-gray text-sm leading-8">
                             تهرانسر ، بلوار لاله ، خیابان قباد شمالی ، مجتمع هاشمی نژاد ، بلوک A4 ، ورودی شرقی ، واحد 48
                        </span>

                    </li>

                </ul>

                <div className="col-span-12 md:col-span-6 h-[200px]">
                    map
                </div>

            </div>

        </section>
    )
}

export default Contribute;