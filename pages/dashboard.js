import { getAllBookings } from '@/service/api'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RiRecordCircleFill } from 'react-icons/ri'
import { HiLocationMarker } from 'react-icons/hi'
import { IoMdPricetags } from 'react-icons/io'
import Link from 'next/link'

const Dashboard = () => {

    const [data, setData] = useState([]);

    const { email } = useSelector(state => state.user)

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await getAllBookings({ email })
                setData(res.data.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchBookings();
    }, [email])

    return (
        <div className="flex flex-col justify-center min-h-screen gap-20 max-w-7xl mx-auto px-10">
            <div className='flex justify-between lg:items-center flex-col mt-10 lg:flex-row'>
                <h1 className='text-2xl font-bold'>All Bookings</h1>
                <Link href="/choose">
                    <button className='btn btn-primary mt-4 lg:mt-0'>Book More Cabs</button>
                </Link>
            </div>

            <div className='flex flex-wrap gap-4'>
                {data.length > 0 && data?.map((item, index) => (
                    <div key={index} className='card w-96 bg-base-100 shadow-xl'>
                        <div className="card-body">

                            <div className='flex items-center gap-3'>
                                <RiRecordCircleFill className='text-xl text-primary' />
                                <div>
                                    <p className='text-xs text-gray-400'>Pickup Point</p>
                                    <h1 className='text-xl font-bold'>{item?.pickup}</h1>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <HiLocationMarker className='text-xl' />
                                <div>
                                    <p className='text-xs text-gray-400'>Pickup off Point</p>
                                    <h1 className='text-xl font-bold'>{item?.destination}</h1>
                                </div>
                            </div>
                            <div className='my-2'>
                                <div className='flex items-center gap-1'>
                                    <IoMdPricetags className='text-xl' />
                                    <div>
                                        <h1 className='text-sm '>₹ {item?.price}</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-between items-start my-4'>
                                <div className="flex gap-2">
                                    <div className="w-12 h-12 rounded-full">
                                        <img src={item?.cabId?.avatar} className='rounded-full' />
                                    </div>
                                    <div>
                                        <h2 className="font-bold">{item?.cabId?.driver}</h2>
                                        <p className='text-sm text-gray-400 font-bold'>{item?.cabId?.cab}</p>
                                    </div>
                                </div>
                                <div className="rating flex justify-center items-center">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-primary h-4" checked />
                                    <h2 className='text-sm font-bold'>{item?.cabId?.rating}</h2>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard