import React from 'react';
import transactionData from '../../transactionData';
import { Link } from 'react-router-dom';

const DayTotalTrans = () => {
  // Calculate the number of successful transactions
  const successfulTransactions = transactionData.inTransactions.filter(
    (transaction) => transaction.Status === 'Made'
  ).length;

  // Calculate the number of failed transactions
  const failedTransactions = transactionData.failedTransactions.length;

  // Calculate the number of ongoing transactions
  const ongoingTransactions = transactionData.outTransactions.filter(
    (transaction) => transaction.Status === 'Ongoing'
  ).length;

  return (
    <div>
      <h1 className='font-bold text-xl text-center mb-4'>TODAY'S TRANSACTIONS</h1>
      <div className='mt-4 flex gap-5 justify-center'>
        <Link to="/transactionstatus">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold text-xl text-center mb-2'>
              Successful Transactions
            </h1>
            <h1 className='text-center font-semibold text-4xl'>{successfulTransactions}</h1>
          </div>
        </Link>

        <Link to="/transactionstatus">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold text-xl text-center mb-2'>
              Failed Transactions
            </h1>
            <h1 className='text-center font-semibold text-4xl'>{failedTransactions}</h1>
          </div>
        </Link>

        <Link to="/transactionstatus">
          <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
            <h1 className='font-semibold text-xl text-center mb-2'>
              Ongoing Transactions
            </h1>
            <h1 className='text-center font-semibold text-4xl'>{ongoingTransactions}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DayTotalTrans;
