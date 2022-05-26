import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';
import useToken from '../../hooks/UseToken';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser)


    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.Password)
        await updateProfile({ displayName: data.name });
    };
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/home')
      }
    let signInError;
    if (error || gError || updateError ) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="mx-auto text-3xl font-bold">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type='email'
                                placeholder='Your Email'
                                class="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email'
                                        }
                                    },
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Your Password'
                                class="input input-bordered w-full max-w-xs"
                                {...register("Password",
                                    {
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 or long'
                                        }
                                    },
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors?.Password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                                {errors?.Password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Register' />
                    </form>
                    <p><small>Already have an account? <Link className='text-primary' to="/login">Please login</Link></small></p>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;