import React from 'react'

const CabItems = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold'>Arriving</h2>
                    <h2 className='text-sm text-gray-400 font-bold'>2 min</h2>
                </div>
                <div className='flex justify-between items-start my-4'>
                    <div className="flex gap-2">
                        <div className="w-12 h-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='rounded-full' />
                        </div>
                        <div>
                            <h2 className="font-bold">John Doe</h2>
                            <p className='text-sm text-gray-400 font-bold'>Alto</p>
                        </div>
                    </div>
                    <div className="rating flex justify-center items-center">
                        <input type="radio" name="rating-1" className="mask mask-star bg-primary h-4" checked />
                        <h2 className='text-sm font-bold'>4.3</h2>
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                    <h1>Price:</h1>
                    <h2 className='font-bold'>20 </h2>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default CabItems