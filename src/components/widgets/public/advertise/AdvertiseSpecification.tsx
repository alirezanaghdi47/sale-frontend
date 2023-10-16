'use client';

const Table = () => {

    return (
        <ul className="flex flex-col justify-start items-start gap-y-4 w-full bg-light rounded-lg p-4">

            <li className="flex justify-between items-center gap-x-4 w-full border-b border-solid border-secondary pb-4">

                <span className="text-dark font-bold text-sm line-clamp-1">وضعیت موتور</span>

                <span className="text-gray text-sm line-clamp-1">سالم</span>

            </li>

            <li className="flex justify-between items-center gap-x-4 w-full border-b border-solid border-secondary pb-4">

                <span className="text-dark font-bold text-sm line-clamp-1">وضعیت شاسی‌ها</span>

                <span className="text-gray text-sm line-clamp-1">پلمپ</span>

            </li>

            <li className="flex justify-between items-center gap-x-4 w-full">

                <span className="text-dark font-bold text-sm line-clamp-1">وضعیت بدنه</span>

                <span className="text-gray text-sm line-clamp-1">سالم و بی‌خط و خش</span>

            </li>

        </ul>
    )
}

const AdvertiseSpecification = () => {

    return (
        <section className="order-4 col-span-12 flex flex-col justify-center items-start gap-y-2">

            <h3 className="text-dark font-bold">
                مشخصات
            </h3>

            <Table/>

        </section>
    )
}

export default AdvertiseSpecification;