import React from 'react';
import { icons } from 'lucide-react';
import { IconProps } from '../constants/types';




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
