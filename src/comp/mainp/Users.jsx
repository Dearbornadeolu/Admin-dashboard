import React from 'react';
import transactionData from '../../transactionData';
import { Link } from 'react-router-dom';

const Users = () => {
  // Calculate the total number of users
  const totalUsers = transactionData.userData.length;

  // Calculate the number of active users
  const activeUsers = transactionData.userData.filter(
    (user) => user.Status === 'Active'
  ).length;

  // Calculate the number of inactive users
  const inactiveUsers = transactionData.userData.filter(
    (user) => user.Status === 'Inactive'
  ).length;

  return (
    <div className='mt-5'>
      <h1 className='font-bold text-xl text-center mb-4'>USERS</h1>
      <div className='mt-3 flex gap-4 justify-center'>
        <Link to="/accounts">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold text-xl text-center mb-2'>Total Users</h1>
            <p className='text-center font-semibold text-3xl'>{totalUsers}</p>
          </div>
        </Link>
        <Link to="/accounts">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold text-xl text-center mb-2'>Active Users</h1>
            <p className='text-center font-semibold text-3xl'>{activeUsers}</p>
          </div>
        </Link>
        <Link to="/accounts">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold text-xl text-center mb-2'>Inactive Users</h1>
            <p className='text-center font-semibold text-3xl'>{inactiveUsers}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Users;
