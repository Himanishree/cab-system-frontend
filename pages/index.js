import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { getCabList } from '@/service/api';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setCabData } from '@/redux/cabSlice';
import { setUserData } from '@/redux/userSlice';

const Home = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.pickup === data.destination) {
      return toast.error("Pickup and Destination can't be same");
    }
    try {
      const res = await getCabList(data);
      dispatch(setCabData(res.data));
      dispatch(setUserData({ email: data.email, pickup: data.pickup, destination: data.destination }))
      router.push('/choose');
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.msg || err?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-20 max-w-7xl mx-auto">
      <div className="w-full p-6 lg:w-1/3">

        <a className="flex flex-col items-center gap-2 mb-6">
          <img
            alt="Logo"
            src="/logo.png"
            className="object-contain w-24 h-12"
          />
          <h1 className="text-3xl font-bold tracking-tight text-center uppercase">
            Book Your <span className="text-primary">RIDE</span>
          </h1>
        </a>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className={`w-full input input-bordered ${errors.email ? 'input-error' : ''
                }`}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && (
              <label className="label">
                <span className="text-red-500 label-text-alt">
                  Enter a valid Email Address!
                </span>
              </label>
            )}
          </div>

          <div className="w-full form-control my-2">
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <select
              className={`w-full select select-bordered ${errors.pickup ? 'select-error' : ''
                }`}
              {...register('pickup', {
                required: true,
              })}
            >
              <option disabled>Pickup Location?</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
            </select>
            {errors.pickup && (
              <label className="label">
                <span className="text-red-500 label-text-alt">
                  Choose!
                </span>
              </label>
            )}
          </div>

          <div className="w-full form-control">
            <label className="label">
              <span className="label-text">Destination</span>
            </label>
            <select
              className={`w-full select select-bordered ${errors.pickup ? 'select-error' : ''
                }`}
              {...register('destination', {
                required: true,
              })}
            >
              <option disabled>Destination?</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
            </select>
            {errors.destination && (
              <label className="label">
                <span className="text-red-500 label-text-alt">
                  Enter a valid Email Address!
                </span>
              </label>
            )}
          </div>
          <button
            className={`w-full mt-6 bg-primary btn btn-ghost hover:opacity-80 hover:bg-primary`}
          >
            Book your Ride{' '}
          </button>
        </form>
      </div>
      <div className="hidden lg:flex h-full lg:w-2/3 justify-center items-center">
        <img
          alt="login"
          src="/taxi.jpg"
          className="z-20 object-cover w-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Home;