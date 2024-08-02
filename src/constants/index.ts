import { dashboardKPIDataInterface, DashBoardOptionInterface, SideBarIconInterface } from "./types";

export const sideBarIcons: SideBarIconInterface[] = [
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

export const dashboardKPIData: dashboardKPIDataInterface[] = [
    {
        title: "Total Orders",
        value: "75",
        icon: "ShoppingBasket",
        className: "text-blue-500 bg-blue-500",
        change: "3%",
        increase: true,
    },
    {
        title: "Total Delivered",
        value: "70",
        icon: "CircleCheckBig",
        className: "text-green-500 bg-green-500",
        change: "3%",
        increase: false,
    },
    {
        title: "Total Cancelled",
        value: "05",
        icon: "CircleOff",
        className: "text-red-500 bg-red-500",
        change: "3%",
        increase: true,
    },
    {
        title: "Total Revenue",
        value: "$12K",
        icon: "CircleDollarSign",
        className: "text-pink-500 bg-pink-500",
        change: "3%",
        increase: false,
    },
]

export const dashboardOption: DashBoardOptionInterface[] = [
    {
        title: "Goals",
        icon: "Crosshair",
        className: "text-red-500 bg-red-500"
    },
    {
        title: "Popualar Dishes",
        icon: "Pizza",
        className: "text-blue-700 bg-blue-700"
    },
    {
        title: "Menu",
        icon: "HandPlatter",
        className: "text-cyan-500 bg-cyan-500"
    },
]