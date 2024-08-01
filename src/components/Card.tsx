import { CardProps } from "../constants/types"
const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`${className} rounded-2xl bg-secondary p-4  min-h-40`}>
            {children}
        </div>
    )
}

export default Card