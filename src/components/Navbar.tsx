
import Icon from "./Icon"


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-50 w-full bg-secondary px-6 py-3 text-white">
            <section className="flex justify-start items-center gap-8">
                <img src="/logo.svg" alt="logo" className="cursor-pointer" />
                <div className="h-auto w-auto  relative border-2 border-slate-800 rounded-md">
                    <input type="text" placeholder="Search" className="p-2 pl-9  outline-none boder-none bg-slate-700 h-8 w-72 rounded-md" />
                    <Icon name="Search" className="absolute w-4 h-4 left-2 top-1/2 transform -translate-y-1/2" />
                </div>
            </section>
            <section className="flex justify-end items-center gap-6">
                <div className="flex justify-end gap-4">
                    <Icon name="Mail" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                    <Icon name="Settings" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                    <Icon name="Bell" className="bg-white bg-opacity-60 text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                </div>
                <Icon name="User" className="bg-white text-black h-10 w-10 p-2 rounded-full cursor-pointer" />
            </section>
        </nav>
    )
}

export default Navbar