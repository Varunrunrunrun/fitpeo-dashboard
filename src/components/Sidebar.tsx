import { useState } from "react"
import Icon from "./Icon";
import { sideBarIcons } from "../constants";



const Sidebar = () => {
    const [active, setActive] = useState(1);


    return (
        <section className="sticky left-0 top-0 flex min-h-screen bg-secondary flex-col justify-between items-center  pt-20 pb-8 text-white w-20">
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