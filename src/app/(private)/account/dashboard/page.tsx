// components
import {Dashboard} from "@/components/widgets/Dashboard";

export const metadata = {
    title: 'داشبورد',
}
const DashboardPage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full md:max-w-[calc(100%_-_240px)] p-4">

            <Dashboard/>

        </main>
    );
}

export default DashboardPage;