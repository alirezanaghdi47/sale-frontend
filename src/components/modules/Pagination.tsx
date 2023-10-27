"use client";

// libraries
import Button from "@/components/modules/Button";

const Pagination = ({pageCount, pageSize, currentPage}) => {

    return (
        <div className="flex justify-center items-center w-full">

            <Button
                variant="contained"
                size="md"
                color="blue"
            >
                موارد دیگر
            </Button>

        </div>
    )
}

export default Pagination;