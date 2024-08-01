import React from 'react';
import { icons } from 'lucide-react';


export type IconName = keyof typeof icons;

interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '' }) => {

    const IconComponent = icons[name];

    if (!IconComponent) {
        return null;
    }

    return (
        <IconComponent
            size={size}
            color={color}
            className={className}
        />
    );
};

export default Icon;
