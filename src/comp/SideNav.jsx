import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='w-1/5 min-h-screen bg-blue-800 text-white'>
      <ul className='h-full mt-2 p-2'>
        <li className='mb-3'>
          <Link
            to="/dashboard"
            className='block p-2 rounded hover:bg-blue-600 hover:text-white transition duration-300'
          >
            Overview
          </Link>
        </li>
        <li className='mb-3'>
          <Link
            to="/transactions"
            className='block p-2 rounded hover:bg-blue-600 hover:text-white transition duration-300'
          >
            Transactions
          </Link>
        </li>
        <li className='mb-3'>
          <Link
            to="/transactionstatus"
            className='block p-2 rounded hover:bg-blue-600 hover:text-white transition duration-300'
          >
            Recent
          </Link>
        </li>
        <li>
          <Link
            to="/accounts"
            className='block p-2 rounded hover:bg-blue-600 hover:text-white transition duration-300'
          >
            Accounts
          </Link>
        </li>
        <li>
          <Link
            to="/Logout"
            className='block p-2 rounded hover:bg-blue-600 hover:text-white transition duration-300'
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
