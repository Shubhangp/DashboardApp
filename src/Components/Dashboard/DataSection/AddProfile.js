import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleForm } from '../../../Utils/appSlice';

const AddProfile = () => {
  const dispatch = useDispatch();

  const toggleFormHandler = () => {
    dispatch(toogleForm());
  };

  return (
    <div className="lg:w-[48%] md:w-[48%] w-[100%]  bg-[#FFF] rounded-xl drop-shadow-3Xl py-7 px-9 mb-4 flex flex-col items-center justify-center gap-4" onClick={() => toggleFormHandler()}>
        <div className='w-[77px] h-[77px] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M26 10.0049C26.8835 10.0049 27.5997 10.7211 27.5997 11.6046L27.5997 24.7097L40.7048 24.7096C41.5883 24.7096 42.3045 25.4258 42.3045 26.3093C42.3045 27.1927 41.5883 27.9089 40.7048 27.9089L27.5998 27.909L27.5998 41.0139C27.5998 41.8974 26.8836 42.6136 26.0002 42.6136C25.1167 42.6136 24.4005 41.8974 24.4005 41.0139L24.4004 27.909L11.2953 27.9089C10.4119 27.9089 9.69567 27.1927 9.69568 26.3092C9.69568 25.4258 10.4119 24.7096 11.2953 24.7096L24.4004 24.7097L24.4003 11.6046C24.4003 10.7211 25.1165 10.0049 26 10.0049Z" fill="#999CA0"/>
            </svg>
        </div>
        <span className='text-[#858585] text-base font-figtree font-semibold cursor-pointer'>Add Profile</span>
    </div>
  );
}

export default AddProfile;