import React from 'react';
import transactionData from '../../transactionData';
import { images } from '../..';
import { Link } from 'react-router-dom';

const TotalTrans = () => {
  // Accessing the total amount of inTransactions
  const totalInTransactionAmount = transactionData.inTransactions.reduce(
    (total, transaction) => total + transaction.Amount,
    0
  ).toLocaleString(); // Format as money with commas

  const totalOutTransactionAmount = transactionData.outTransactions.reduce(
    (total, transaction) => total + transaction.Amount,
    0
  ).toLocaleString(); // Format as money with commas

  return (
    <div className='mt-4'>
      <h1 className='font-bold text-xl text-center mb-4'>GRAND TOTAL TRANSACTIONS</h1>
      <div className='p-[10px] flex gap-4 justify-center text-center text-[1.5rem] '>
        <Link to="/transactions">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold'>Total Transaction</h1>
            <p className='text-3xl'>{transactionData.totalTransactions}</p>
          </div>
        </Link>
        <Link to="/transactions">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold'>Transactions In</h1>
            <div className='flex items-center justify-center gap-3 text-3xl'>
              <img src={images.NairaLogo} alt="" className='w-[30px]' />
              <div>{totalInTransactionAmount}</div>
            </div>
          </div>
        </Link>
        <Link to="transactions">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold'>Transactions Out</h1>
            <div className='flex items-center justify-center gap-3 text-3xl'>
              <img src={images.NairaLogo} alt="" className='w-[30px]' />
              <div>{totalOutTransactionAmount}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TotalTrans;
