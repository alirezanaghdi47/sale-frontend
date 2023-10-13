// components
import Filterbar from "@/components/widgets/public/Filterbar";
import Advertises from "@/components/widgets/public/Advertises";

const HomePage = () => {
    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[1200px] p-4">
            <Filterbar/>
            <Advertises/>
        </main>
    );
}

export default HomePage;