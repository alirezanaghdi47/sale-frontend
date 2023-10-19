// libraries
import Link from "next/link";
import {LuChevronLeft} from "react-icons/lu";

const Breadcrumb = ({linkList}) => {

    return (
        <ul className="flex justify-center items-center gap-x-2">

            {
                linkList.map(linkItem =>
                    <li
                        key={linkItem.title}
                        className="flex justify-center items-center gap-x-2"
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

        </ul>
    )
}

export default Breadcrumb;