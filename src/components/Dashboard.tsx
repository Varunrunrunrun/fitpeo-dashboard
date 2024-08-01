import Card from "./Card"


const Dashboard = () => {
    return (
        <div className="flex flex-1 flex-col gap-8 p-6 bg-primary text-white pt-24">
            <h1 className="text-2xl font-semibold ">Dashboard</h1>
            <div className="w-full flex lg:flex-row flex-col gap-8 justify-between">
                <div className="h-full w-full lg:w-[60%] grid lg:grid-cols-4  grid-cols-2 gap-6">
                    <Card className="w-full">Hi</Card>
                    <Card className="w-full">Hi</Card>
                    <Card className="w-full">Hi</Card>
                    <Card className="w-full">Hi</Card>
                </div>
                <Card className="h-full w-full lg:w-[40%]">Hi</Card>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-8 justify-between">
                <Card className="h-full w-full lg:w-[60%]">Hi</Card>
                <Card className="h-full w-full lg:w-[40%]">Hi</Card>
            </div>
            <div className="w-full flex lg:flex-row flex-col gap-8 justify-between">
                <Card className="h-full w-full lg:w-[60%]">Hi</Card>
                <Card className="h-full w-full lg:w-[40%]">Hi</Card>
            </div>
        </div>
    )
}

export default Dashboard