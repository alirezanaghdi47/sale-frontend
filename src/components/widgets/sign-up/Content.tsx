'use client';

// components
import Heading from "@/components/widgets/sign-up/Heading";
import Form from "@/components/widgets/sign-up/Form";
import Actions from "@/components/widgets/sign-up/Actions";

const Content = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">
            <Heading/>
            <Form/>
            <Actions/>
        </div>
    )
}

export default Content;