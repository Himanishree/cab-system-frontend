import { bookCab } from '@/service/api';
import { useRouter } from 'next/router';
import React from 'react'
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const CabItems = ({ data }) => {

    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const { totalTime } = useSelector(state => state.data);
    const { email, pickup, destination } = useSelector(state => state.user);
    const { driver, cab, rating, pricePerMinute, avatar, arrivingTime, _id } = data;

    const handleBooking = async () => {
        try {
            const res = await bookCab({
                cabId: _id,
                price: pricePerMinute * totalTime,
                pickup,
                destination,
                email,
            });
            console.log(res.data)
            toast.success(res.data.msg || 'Cab Booked Successfully')
            router.push('/dashboard')
        } catch (err) {
            toast.error(err?.response?.data?.msg || err?.message);
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold'>Arriving</h2>
                    <h2 className='text-sm text-gray-400 font-bold'>{arrivingTime} min</h2>
                </div>
                <div className='flex justify-between items-start my-4'>
                    <div className="flex gap-2">
                        <div className="w-12 h-12 rounded-full">
                            <img src={avatar} className='rounded-full' />
                        </div>
                        <div>
                            <h2 className="font-bold">{driver}</h2>
                            <p className='text-sm text-gray-400 font-bold'>{cab}</p>
                        </div>
                    </div>
                    <div className="rating flex justify-center items-center">
                        <input type="radio" name="rating-1" className="mask mask-star bg-primary h-4" checked />
                        <h2 className='text-sm font-bold'>{rating}</h2>
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                    <h1>Price:</h1>
                    <h2 className='font-bold'>₹ {pricePerMinute}/min</h2>
                </div>
                <div className="card-actions justify-between items-center">
                    <h1 className='font-bold text-xl text-primary'>₹ {pricePerMinute * totalTime}</h1>
                    <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Book Now</button>
                </div>
            </div>

            {
                isModalOpen && <div className="fixed w-full h-screen top-0 left-0 flex justify-center items-center z-50 backdrop-blur-sm">
                    <div className="modal-box ">
                        <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setIsModalOpen(false)}>✕</label>
                        <h3 className="text-lg font-bold">Confirm Your Ride</h3>
                        <div className='flex justify-center items-center'>
                            <img src="/taxi.png" className='w-1/2' />
                        </div>

                        <div className='flex justify-between items-start my-4'>
                            <div className="flex gap-2">
                                <div className="w-12 h-12 rounded-full">
                                    <img src={avatar} className='rounded-full' />
                                </div>
                                <div>
                                    <h2 className="font-bold">{driver}</h2>
                                    <p className='text-sm text-gray-400 font-bold'>{cab}</p>
                                </div>
                            </div>
                            <div className="rating flex justify-center items-center">
                                <input type="radio" name="rating-1" className="mask mask-star bg-primary h-4" checked />
                                <h2 className='text-sm font-bold'>{rating}</h2>
                            </div>
                        </div>

                        <h1 className='font-bold text-xl my-2'>Total Time: {totalTime} min</h1>

                        <div className="card-actions justify-between items-center">
                            <h1 className='font-bold text-2xl text-primary'>₹ {pricePerMinute * totalTime}</h1>
                            <button className="btn btn-primary" onClick={handleBooking}>Confirm Booking</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default CabItems