'use client';

// components
import Heading from "@/components/widgets/sign-in/Heading";
import Form from "@/components/widgets/sign-in/Form";
import Links from "@/components/widgets/sign-in/Actions";

const Content = () => {

    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full">
            <Heading/>
            <Form/>
            <Links/>
        </div>
    )
}

export default Content;