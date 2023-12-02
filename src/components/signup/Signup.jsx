import React from 'react'
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)


  return (
    <div className='max-w-md shadow-md mx-auto items-center bg-white w-full flex justify-center my-24 flex-col'>
    
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
            <h3 className="font-bold text-lg">Create A New Account! </h3>
           
           {/* name */}
           <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                {...register("name")}
              />
            </div>


            {/* email */} 
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error text */}

            {/* login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-green text-white "
              />
            </div>

            <p className="text-center my-2">
              Don't Have account{" "}
              <Link
                to="/signup"
                className="underline text-red font-medium ml-1"
              >
                Sign up!
              </Link>{" "}
            </p>
          </form>

          {/* social login btn */}

          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />

            </button>
            <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub  />
            </button>
          </div>
        </div>

  )
}

export default Signup