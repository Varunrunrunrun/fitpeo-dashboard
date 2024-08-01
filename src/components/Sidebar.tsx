import { useState } from "react"
import Icon, { IconName } from "./Icon";

interface SideBarIconInterface {
    id: number;
    name: IconName;
}

const Sidebar = () => {
    const [active, setActive] = useState(1);
    const sideBarIcons: SideBarIconInterface[] = [
        {
            id: 1,
            name: "House"
        },
        {
            id: 2,
            name: "FileChartColumn"
        },
        {
            id: 3,
            name: "ClipboardCheck"
        },
        {
            id: 4,
            name: "Wallet"
        },
        {
            id: 5,
            name: "ShoppingBag"
        }
    ];

    return (
        <section className="sticky left-0 top-0 flex h-screen bg-secondary flex-col justify-between items-center  pt-20 pb-8 text-white w-20">
            <section className="w-full flex flex-col gap-6">
                {
                    sideBarIcons.map(icon => (
                        <div onClick={() => { setActive(icon.id) }} key={icon.id} className={`w-full flex justify-center items-center  p-2 ${active === icon.id ? 'border-l-2 border-blue-500' : ''}`}>
                            <Icon name={icon.name} className={`cursor-pointer ${active === icon.id ? ' text-blue-500' : ''} hover:text-blue-100 `} />
                        </div>
                    ))
                }
            </section>
            <Icon name="LogOut" className="hover:text-red-500 cursor-point" />
        </section>
    )
}

export default Sidebar