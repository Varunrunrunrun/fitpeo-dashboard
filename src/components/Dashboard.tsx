import Card from "./Card"


const Dashboard = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-6 bg-primary text-white pt-24">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <div className="w-full flex gap-8 justify-between">
                <div className="h-auto w-[60%] flex justify-start gap-6">
                    <Card className="w-full">Hi</Card>
                    <Card className="w-full">Hi</Card>
                    <Card className="w-full">Hi</Card>
                    <Card className="w-full">Hi</Card>
                </div>
                <Card className="h-auto w-[40%]">Hi</Card>
            </div>
        </div>
    )
}

export default Dashboard