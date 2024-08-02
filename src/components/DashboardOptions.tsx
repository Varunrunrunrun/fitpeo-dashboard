import { dashboardOption } from '../constants'
import Icon from './Icon'

const DashboardOptions = () => {
    return (
        <div className='w-full h-full p-4 flex flex-col justify-between items-start gap-6'>
            {
                dashboardOption.map(option => (
                    <div key={option.title} className='w-full flex gap-4 justify-between items-center'>
                        <div className='flex justify-start items-center gap-4'>
                            <Icon name={option.icon} className={`${option.className} bg-opacity-40 w-16 h-16 p-3 rounded-full`} />
                            <p>{option.title}</p>
                        </div>
                        <Icon name='ChevronRight' className='w-8 h-8 p-2 text-slate-100 bg-slate-500 rounded-full cursor-pointer' />
                    </div>
                ))
            }
        </div>
    )
}

export default DashboardOptions