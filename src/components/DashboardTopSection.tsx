import { dashboardKPIData, doughnutChartData, doughnutChartOptions } from "../constants"
import Card from "./Card"
import DoughnutChart from "./CircularProgress"
import Icon from "./Icon"

const DashboardTopSection = () => {
    return (
        <div className="w-full flex lg:flex-row flex-col gap-8 justify-between">
            <div className="h-full w-full lg:w-[60%] grid lg:grid-cols-4  grid-cols-2 gap-6">
                {
                    dashboardKPIData.map(data => (
                        <Card key={data.title} className="w-full flex flex-col justify-between items-start gap-8">
                            <div>
                                <Icon name={data.icon} className={`rounded-md bg-opacity-40 p-2 w-12 h-12 ${data.className}`} />
                                <h2 className="text-sm mt-2 text-slate-100">{data.title}</h2>
                            </div>
                            <div className="w-full flex justify-between items-end">
                                <h1 className="text-4xl font-bold">{data.value}</h1>
                                {
                                    data.increase ?
                                        <div className="text-green-500 text-xs flex"><Icon name="ChevronUp" className="w-4 h-4" /><p>{data.change}</p></div>
                                        :
                                        <div className="text-red-500 text-xs flex"><Icon name="ChevronDown" className="w-4 h-4" /><p>{data.change}</p></div>
                                }
                            </div>
                        </Card>
                    ))
                }
            </div>
            <Card className="h-full w-full lg:w-[40%] p-4 flex justify-between items-start">
                <section className="flex h-full flex-col justify-between items-start gap-4">
                    <h1>Net Profit</h1>
                    <h1 className="font-bold text-5xl">$ 6759.25</h1>
                    <div className="text-green-500 text-xs flex"><Icon name="ChevronUp" className="w-4 h-4" /><p>3%</p></div>
                </section>
                <section className="flex flex-col justify-center items-center">
                    <div className="h-32 w-32 relative">
                        <DoughnutChart data={doughnutChartData} options={doughnutChartOptions} />
                        <div className="absolute w-full h-full inset-0 p-8 flex flex-col justify-center items-center gap-1">
                            <h2 className="text-2xl font-semibold">70%</h2>
                            <p className="text-xs text-center">Goal Completed</p>
                        </div>
                    </div>
                    <div className="text-xs mt-2 text-center">*The values here have been rounded off.</div>
                </section>
            </Card>
        </div>
    )
}

export default DashboardTopSection