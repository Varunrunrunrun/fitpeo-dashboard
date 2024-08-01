import React from "react"

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`${className} w-auto h-auto rounded-2xl bg-secondary p-4`}>
            {children}
        </div>
    )
}

export default Card