import OrdersCard from "./OrdersCard";
import OrdersTable from "./OrdersTable";

const RecentOrders = () => {
    return (
        <div className='flex flex-col  justify-start gap-6 items-start'>
            <h1 className='sm:text-3xl text-xl font-semibold'>Activity</h1>
            <OrdersTable />
            <OrdersCard />
        </div>
    );
}

export default RecentOrders;
