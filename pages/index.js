import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';

const Home = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    if (data.pickup === data.destination) {
      return toast.error("Pickup and Destination can't be same");
    }
    // try {
    //   const res = await login(data);
    //   router.push('/dashboard');
    // } catch (err) {
    //   // console.log(err);
    //   toast.error(err?.response?.data?.msg || err?.message);
    // }
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
      <div className="hidden lg:block h-full lg:w-2/3">
        <div className="relative flex items-center justify-center h-full overflow-hidden rounded-3xl bg-blue-50">
          <h1 className="absolute z-10 font-black text-yellow-200 uppercase text-9xl top-16">
            Login
          </h1>
          <img
            alt="login"
            src="/taxi.jpg"
            className="z-20 object-cover w-2/3 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;