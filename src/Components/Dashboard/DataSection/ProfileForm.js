import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { toogleForm } from "../../../Utils/appSlice";
import { profileData } from '../../../Utils/profileSlice';
import { Formik } from 'formik';
import * as Yup from "yup";

const ValidateForm = Yup.object().shape({
    name: Yup.string()
        .required('*Name is required')
        .trim('*Empty spaces are not allowed')
        .matches(/^[0-9a-zA-Z\s]+$/, '*Invalid name')
        .min(2, '*Name is too short'),
    email: Yup.string()
        .required('*Email is required!')
        .email('*Invalid Email')
        .matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, '*Invalid Email'),
    phone: Yup.string()
        .required('*Phone Number is required')
        .matches(/^[0-9\b]+$/, '*Enter number only')
        .min(10, '*Phone Number not less than 10 digits')
        .max(10, '*Phone Number not exceed 10 digits')
});

const ProfileForm = () => {
    const [formValue, setFormValue] = useState({});
    const [fill, setFill] = useState(false);

    const dispatch = useDispatch();

    const toggleFormHandler = () => {
        dispatch(toogleForm());
    }

    return (
        <div tabIndex="-1" className="max-h-full fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0">
            <div className="relative w-full max-w-md max-h-full mx-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className='flex items-center justify-between px-6 py-4'>
                        <h1 className='text-[#231F20] text-xl leading-8 font-figtree font-semibold'>Add New Profile</h1>
                        <button type="button" className="text-[#999CA0]" onClick={() => toggleFormHandler()}>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>
                    <div className='w-full h-[1px] bg-[#F2F2F2]'></div>
                    <div className='p-6 flex flex-col gap-6'>
                        <div className='flex justify-between gap-12'>
                            <div className='w-[50%] text-center'>
                                <h1 className='text-[#231F20] text-base font-figtree font-semibold mb-3'>Basic</h1>
                                <div className={fill ? 'w-[100%] h-1 bg-[#D9D9D9] rounded-[30px]' : 'w-[100%] h-1 bg-[#3F84F8] rounded-[30px]'}></div>
                            </div>
                            <div className='w-[50%] text-center'>
                                <h1 className='text-[#231F20] text-base font-figtree font-semibold mb-3'>Social</h1>
                                <div className={!fill ? 'w-[100%] h-1 bg-[#D9D9D9] rounded-[30px]' : 'w-[100%] h-1 bg-[#3F84F8] rounded-[30px]'}></div>
                            </div>
                        </div>
                        {!fill ?
                            (<Formik
                                initialValues={{ name: "", email: "", phone: "" }}
                                validationSchema ={ValidateForm}
                                onSubmit={(values) => {
                                    setFormValue(values);
                                    setFill(true);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                }) => (
                                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="name" className='text-[#231F20] text-base font-figtree font-normal mb-2'>Enter Name*</label>
                                        <div className='w-full rounded-lg border border-[#F2F2F2]'>
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                placeholder='Eg. John Doe'
                                                className='w-full px-4 py-3 text-[#999CA0] text-base font-figtree font-normal focus:outline-none'
                                            />
                                        </div>
                                        {errors.name && touched.name && <p className='text-[#f53737] text-base font-lato font-normal'>{errors.name}</p>}
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="email" className='text-[#231F20] text-base font-figtree font-normal mb-2'>Enter Email*</label>
                                        <div className='w-full rounded-lg border border-[#F2F2F2]'>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                placeholder='Eg. John Doe'
                                                className='w-full px-4 py-3 text-[#999CA0] text-base font-figtree font-normal focus:outline-none'
                                            />
                                        </div>
                                        {errors.email && touched.email && <p className='text-[#f53737] text-base font-lato font-normal'>{errors.email}</p>}
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="phone" className='text-[#231F20] text-base font-figtree font-normal mb-2'>Enter Phone*</label>
                                        <div className='w-full rounded-lg border border-[#F2F2F2]'>
                                            <input
                                                type="text"
                                                name="phone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                placeholder='Eg. 9123456789'
                                                className='w-full px-4 py-3 text-[#999CA0] text-base font-figtree font-normal focus:outline-none'
                                            />
                                        </div>
                                        {errors.phone && touched.phone && <p className='text-[#f53737] text-base font-lato font-normal'>{errors.phone}</p>}
                                    </div>
                                    <div className='w-full h-[0.5px] bg-[#F2F2F2]'></div>
                                    <div className='text-right'>
                                        <button type="submit" className='w-[18%] bg-[#3E84F8] rounded-[8px] px-4 py-2 text-[#FFF] text-sm font-figtree font-semibold'>
                                            Next
                                        </button>
                                    </div>
                                </form>
                                )}
                            </Formik>)
                            :(<Formik
                                initialValues={{ instagram: "", youtube: "" }}
                                onSubmit={(values) => {
                                    const finalValue = {...formValue, ...values}
                                    dispatch(profileData(finalValue));
                                    dispatch(toogleForm());
                                }}
                            >
                                {({
                                values,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                }) => (
                                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="instagram" className='text-[#231F20] text-base font-figtree font-normal mb-2'>Intagram Link (Optional)</label>
                                        <div className='w-full rounded-lg border border-[#F2F2F2]'>
                                            <input
                                                type="text"
                                                name="instagram"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.instagram}
                                                placeholder='Eg. instagram.com/username'
                                                className='w-full px-4 py-3 text-[#999CA0] text-base font-figtree font-normal focus:outline-none'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="youtube" className='text-[#231F20] text-base font-figtree font-normal mb-2'>Youtube Link (Optional)</label>
                                        <div className='w-full rounded-lg border border-[#F2F2F2]'>
                                            <input
                                                type="text"
                                                name="youtube"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.youtube}
                                                placeholder='Eg. youtube.com/username'
                                                className='w-full px-4 py-3 text-[#999CA0] text-base font-figtree font-normal focus:outline-none'
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className='w-full h-[0.5px] bg-[#F2F2F2]'></div>
                                    <div className='flex justify-end gap-2'>
                                        <div onClick={() => setFill(false)} className='w-[18%] border border-[#999CA0] bg-[#FFF] rounded-[8px] px-4 py-2 text-[#231F20] text-sm font-figtree font-semibold cursor-pointer'>
                                            Back
                                        </div>
                                        <button type="submit" className='w-[18%] bg-[#3E84F8] rounded-[8px] px-4 py-2 text-[#FFF] text-sm font-figtree font-semibold'>
                                            Done
                                        </button>
                                    </div>
                                </form>
                                )}
                            </Formik>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;