import { icons } from "lucide-react";

export type IconName = keyof typeof icons;

export interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
    className?: string;
}

export interface SideBarIconInterface {
    id: number;
    name: IconName;
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export interface dashboardKPIDataInterface {
    title: string;
    value: string;
    icon: IconName
    className: string;
    change: string;
    increase: boolean;
}

export interface CircularProgressProps {
    progress: number;
}

export interface DoughnutChartProps {
    data: {
        labels?: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
            borderColor?: string[];
            borderWidth?: number;
        }[];
    };
    options?: object;
    className?: string;
}

export interface DashBoardOptionInterface {
    title: string;
    icon: IconName;
    className: string;
}

export interface customerFeedbackInterface {
    id: number;
    name: string;
    review: string;
    rating: number;
}
export interface StarRatingProps {
    rating: number;
}
