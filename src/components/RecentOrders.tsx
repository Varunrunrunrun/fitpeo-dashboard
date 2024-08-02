import { recentOrders } from "../constants"
import Icon from "./Icon"


const RecentOrders = () => {
    return (
        <div className='flex flex-col p-4 justify-start gap-6 items-start'>
            <h1 className='text-3xl font-semibold '>Activity</h1>

            <table className="w-full table-auto">
                <thead>
                    <tr className="border-b-[1px]  border-slate-50">
                        <th className="px-4 py-2 text-left font-semibold">Customer</th>
                        <th className="px-4 py-2 text-left font-semibold">Order No.</th>
                        <th className="px-4 py-2 text-left font-semibold">Amount</th>
                        <th className="px-4 py-2 text-left font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrders.map((order) => (
                        <tr key={order.orderNo} className={`hover:bg-gray-100 hover:bg-opacity-40 border-b-[1px] last:border-0 border-slate-50`}>
                            <td className="px-4 py-3 flex justify-start items-center gap-2">
                                <Icon name="User" className="bg-white text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                                <p className="text-xs">{order.customer}</p>
                            </td>
                            <td className="px-4 py-3 text-xs">{order.orderNo}</td>
                            <td className="px-4 py-3 text-xs">${order.amount.toFixed(2)}</td>
                            <td className="px-4 py-3">
                                <span
                                    className={`px-4 py-1 rounded-full  text-xs font-medium ${order.status === 'Delivered'
                                        ? 'bg-green-500 bg-opacity-40 text-green-500'
                                        : order.status === 'Cancelled'
                                            ? 'bg-red-500 bg-opacity-40 text-red-500'
                                            : order.status === 'Pending'
                                                ? 'bg-yellow-500 bg-opacity-40 text-yellow-500'
                                                : ''
                                        }`}
                                >
                                    {order.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecentOrders