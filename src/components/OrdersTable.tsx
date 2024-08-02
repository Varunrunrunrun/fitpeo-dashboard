import { recentOrders } from '../constants'
import Icon from './Icon'

const OrdersTable = () => {
    return (
        <div className="w-full hidden sm:flex">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b-[1px] border-slate-50">
                        <td className="px-4 py-2 text-left font-semibold whitespace-nowrap">Customer</td>
                        <td className="px-4 py-2 text-left font-semibold whitespace-nowrap">Order No.</td>
                        <td className="px-4 py-2 text-left font-semibold whitespace-nowrap">Amount</td>
                        <td className="px-4 py-2 text-left font-semibold whitespace-nowrap">Status</td>
                    </tr>
                </thead>
                <tbody className="">
                    {recentOrders.map((order) => (
                        <tr key={order.orderNo} className={`hover:bg-gray-100 hover:bg-opacity-40 border-b-[1px] last:border-0 border-slate-50`}>
                            <td className="px-4 py-3 flex justify-start items-center gap-2  whitespace-nowrap">
                                <Icon name="User" className="bg-white text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                                <p className="text-xs whitespace-nowrap">{order.customer}</p>
                            </td>
                            <td className="px-4 py-3 text-xs whitespace-nowrap">{order.orderNo}</td>
                            <td className="px-4 py-3 text-xs whitespace-nowrap">${order.amount.toFixed(2)}</td>
                            <td className="px-4 py-3  whitespace-nowrap">
                                <span
                                    className={`px-4 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered'
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

export default OrdersTable