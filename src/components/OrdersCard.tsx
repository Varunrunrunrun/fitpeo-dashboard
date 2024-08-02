import { recentOrders } from '../constants'
import Icon from './Icon'

const OrdersCard = () => {
    return (
        <div className="sm:hidden flex flex-col w-full gap-4">
            {
                recentOrders.map((order) => (
                    <div key={order.orderNo} className="w-full h-auto rounded-lg border-[1px] border-slate-50 px-4 py-3 " >
                        <div className="flex justify-start items-center gap-2  whitespace-nowrap">
                            <Icon name="User" className="bg-white text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                            <p className="text-base whitespace-nowrap">{order.customer}</p>
                        </div>
                        <span className="mt-2 text-xs font-light">Order ID: {order.orderNo}</span>
                        <div className="w-full flex justify-between items-center">
                            <div className=" text-sm font-semibold">${order.amount.toFixed(2)}</div>
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
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default OrdersCard