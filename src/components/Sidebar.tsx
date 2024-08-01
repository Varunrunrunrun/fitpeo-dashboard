import { ClipboardCheck, FileChartColumn, House, LogOut, ShoppingBag, Wallet } from "lucide-react"
import { useState } from "react"


const Sidebar = () => {
    const [active, setActive] = useState("home")
    return (
        <section className="sticky left-0 top-0 flex h-screen bg-secondary flex-col justify-between items-center  pt-20 pb-8 text-white w-20">
            <section className="w-full flex flex-col gap-6">
                <div className={`w-full flex justify-center items-center  p-2 ${active === "home" ? 'border-l-2 border-blue-500' : ''}`}>
                    <House onClick={() => { setActive("home") }} className={`cursor-pointer ${active === "home" ? ' text-blue-500' : ''} hover:text-blue-100 `} />
                </div>
                <div className={`w-full flex justify-center items-center  p-2 ${active === "analytics" ? 'border-l-2 border-blue-500' : ''}`}>
                    <FileChartColumn onClick={() => { setActive("analytics") }} className={`cursor-pointer ${active === "analytics" ? ' text-blue-500' : ''} hover:text-blue-100`} />
                </div>
                <div className={`w-full flex justify-center items-center  p-2 ${active === "checklist" ? 'border-l-2 border-blue-500' : ''}`}>
                    <ClipboardCheck onClick={() => { setActive("checklist") }} className={`cursor-pointer ${active === "checklist" ? ' text-blue-500' : ''} hover:text-blue-100`} />
                </div>
                <div className={`w-full flex justify-center items-center  p-2 ${active === "wallet" ? 'border-l-2 border-blue-500' : ''}`}>
                    <Wallet onClick={() => { setActive("wallet") }} className={`cursor-pointer ${active === "wallet" ? ' text-blue-500' : ''} hover:text-blue-100`} />
                </div>
                <div className={`w-full flex justify-center items-center  p-2 ${active === "cart" ? 'border-l-2 border-blue-500' : ''}`}>
                    <ShoppingBag onClick={() => { setActive("cart") }} className={`cursor-pointer ${active === "cart" ? ' text-blue-500' : ''} hover:text-blue-100`} />
                </div>
            </section>
            <LogOut className="hover:text-red-500 cursor-point" />
        </section>
    )
}

export default Sidebar