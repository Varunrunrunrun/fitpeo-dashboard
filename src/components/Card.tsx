import React from "react"

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`${className} rounded-2xl bg-secondary p-4  min-h-40`}>
            {children}
        </div>
    )
}

export default Card