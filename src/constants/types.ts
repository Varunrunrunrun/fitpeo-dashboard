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