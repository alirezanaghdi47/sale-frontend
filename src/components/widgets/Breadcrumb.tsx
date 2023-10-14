// libraries
import Link from "next/link";
import {LuChevronLeft} from "react-icons/lu";

const Breadcrumb = ({linkList}) => {

    return (
        <section className="col-span-12 flex justify-start items-center">

            <ul className="flex justify-center items-center">

                {
                    linkList.slice(0,-1).map(linkItem =>
                        <li
                            key={linkItem.title}
                            className="flex justify-center items-center gap-x-2 p-2"
                        >

                            <Link
                                href={linkItem.href}
                                className="text-sm text-gray font-bold"
                            >
                                {linkItem.title}
                            </Link>

                            <LuChevronLeft
                                size={20}
                                className="text-gray"
                            />

                        </li>
                    )
                }

                {
                    linkList.slice(-1).map(linkItem =>
                        <li
                            key={linkItem.title}
                            className="p-2"
                        >
                            <span className="text-sm text-gray font-bold line-clamp-1">
                                {linkItem.title}
                            </span>
                        </li>
                    )
                }

            </ul>

        </section>
    )
}

export default Breadcrumb;