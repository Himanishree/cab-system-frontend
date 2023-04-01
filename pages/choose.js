import CabItems from '@/components/CabItems'
import React from 'react'

const ChooseCab = () => {
    return (
        <div className='flex items-center justify-center min-h-screen gap-20 max-w-7xl mx-auto'>
            <div className="w-full p-6 lg:w-1/3 flex flex-col gap-4">
                <CabItems />
                <CabItems />
                <CabItems />
                <CabItems />
                <CabItems />
            </div>
            <div className="hidden lg:block h-full lg:w-2/3">

            </div>
        </div>
    )
}

export default ChooseCab