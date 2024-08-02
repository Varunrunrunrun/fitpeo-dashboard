import { customerFeedbackData } from "../constants"
import Icon from "./Icon"
import StarRating from "./StarRating"

const Feedback = () => {
    return (
        <div className="flex flex-col justify-start gap-6 items-start">
            <h1 className='sm:text-3xl text-xl font-semibold '>Customer's Feedback</h1>
            <div className="w-full flex flex-col justify-start items-start gap-4">
                {
                    customerFeedbackData.map((data) => (
                        <div key={data.id} className="w-full py-3 border-b-[1px] last:border-0 border-slate-50 flex flex-col justify-start items-start gap-2">
                            <div className="flex justify-start items-center gap-2">
                                <Icon name="User" className="bg-white text-black h-8 w-8 p-2 rounded-full cursor-pointer" />
                                <p className="text-base font-semibold">{data.name}</p>
                            </div>
                            <StarRating rating={data.rating} />
                            <div className="w-full text-wrap text-sm text-white">
                                {data.review}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Feedback