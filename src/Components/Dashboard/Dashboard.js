import React from 'react';
import Sidebar from './Sidebar';
import DataSection from './DataSection/DataSection';
import ProfileForm from './DataSection/ProfileForm';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const isFormOpen = useSelector((store) => store.app.isFormOpen);

  const loginData = useSelector((store) => store.login.details);

  if(loginData.length === 0){
    return (
      <div className="max-h-full fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0">
        <div className='w-[30vw] h-[100px] bg-[#FFF] rounded-xl drop-shadow-3Xl flex flex-col items-center justify-center'>
          <div className="text-[#000] text-2xl font-figtree font-bold">Please Login First!!!</div>
          <Link to='/' className='w-[18%] bg-[#3E84F8] rounded-[8px] px-4 py-2 text-[#FFF] text-sm text-center font-figtree font-semibold'>OK</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#F8FAFF] flex gap-14 py-10 lg:pl-[24vw] pl-10 pr-5">
      <Sidebar />
      <DataSection />
      {isFormOpen && <ProfileForm />}
    </div>
  );
}

export default Dashboard;