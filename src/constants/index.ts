import { customerFeedbackInterface, dashboardKPIDataInterface, DashBoardOptionInterface, SideBarIconInterface } from "./types";

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

export const recentOrders = [
    {
        customer: 'Wade Warren',
        orderNo: 15478256,
        amount: 124.00,
        status: 'Delivered',
    },
    {
        customer: 'Jane Cooper',
        orderNo: 48965786,
        amount: 365.02,
        status: 'Delivered',
    },
    {
        customer: 'Guy Hawkins',
        orderNo: 78958215,
        amount: 45.88,
        status: 'Cancelled',
    },
    {
        customer: 'Kristin Watson',
        orderNo: 20965732,
        amount: 65.00,
        status: 'Pending',
    },
    {
        customer: 'Cody Fisher',
        orderNo: 95715620,
        amount: 545.00,
        status: 'Delivered',
    },
    {
        customer: 'Savannah Nguyen',
        orderNo: 78514568,
        amount: 128.20,
        status: 'Delivered',
    },
];

export const barChartData = {
    labels: ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27",],
    datasets: [
        {
            label: 'Activity',
            data: [
                11667, 13333, 17667, 3000, 5667, 11000, 18333, 9667,
                7000, 15000, 5000, 7667, 13000, 14333, 8333, 5000,
                7000, 16333, 3667, 10333, 12333, 17000, 6333
            ],
            backgroundColor: 'rgba(100, 149, 237)',
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        },
    ],
};

export const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                lineWidth: 0,
            },
            ticks: {
                stepSize: 4,
            },
        },
        y: {
            grid: {
                color: 'rgba(255, 255, 255, 0.5)',
                lineWidth: 0.5,
            },
            beginAtZero: true,
            ticks: {
                stepSize: 3000,
            },
        },
    },
};

export const doughnutChartData = {
    labels: [],
    datasets: [
        {
            data: [70, 30],
            backgroundColor: [
                '#60a5fa', // First color
                ' #f1f5f9 ', // Second color
            ],
            borderWidth: 0
        },
    ],
};

export const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
};

export const customerFeedbackData: customerFeedbackInterface[] = [
    {
        id: 1,
        name: "Jenny Wilson",
        rating: 5,
        review: "The food was absolutely delicious! The flavors were perfectly balanced, and the presentation was top-notch. Will definitely order again!"
    },
    {
        id: 2,
        name: "Diane Russell",
        rating: 3,
        review: "Great meal with a few minor issues. The steak was cooked to perfection, but the sides were a bit cold. Overall, a satisfying experience."
    },
    {
        id: 3,
        name: "Devon Lane",
        rating: 2,
        review: "The food was decent but lacked the excitement I was hoping for. The dish was okay, but it could use more seasoning and creativity."
    },
    {
        id: 4,
        name: "Guy Hawkins",
        rating: 1,
        review: "Unfortunately, the meal was not up to standard. The flavors were off, and the portion size was smaller than expected. Not the best experience."
    }
];