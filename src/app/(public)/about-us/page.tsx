// components
import Crew from "@/components/widgets/public/Crew";
import Intro from "@/components/widgets/public/Intro";
import Contribute from "@/components/widgets/public/Contribute";

const AboutUsPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <Intro/>

            <Crew/>

            <Contribute/>

        </main>
    );
}

export default AboutUsPage;