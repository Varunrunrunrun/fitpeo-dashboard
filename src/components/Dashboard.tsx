import BarChart from "./BarChart"
import Card from "./Card"
import DashboardOptions from "./DashboardOptions"
import DashboardTopSection from "./DashboardTopSection"



const Dashboard = () => {

    return (
        <div className="flex flex-1 flex-col gap-8 p-6 bg-primary text-white pt-24">
            <h1 className="text-2xl font-semibold ">Dashboard</h1>
            <DashboardTopSection />
            <div className="w-full flex lg:flex-row flex-col gap-8 justify-between">
                <Card className="h-full w-full lg:w-[60%]">
                    <BarChart />
                </Card>
                <Card className="h-full w-full lg:w-[40%]">
                    <DashboardOptions />
                </Card>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-8 justify-between">
                <Card className="h-full w-full lg:w-[60%]">Hi</Card>
                <Card className="h-full w-full lg:w-[40%]">Hi</Card>
            </div>
        </div>
    )
}

export default Dashboard