import React from 'react'
import transactionData from '../transactionData'
import { images } from '..';
import { Link } from 'react-router-dom';


const MainPage = () => {
    // Accessing the total amount of inTransactions
const totalInTransactionAmount = transactionData.inTransactions.reduce(
    (total, transaction) => total + transaction.Amount,
    0
  );
  
  const totalOutTransactionAmount = transactionData.outTransactions.reduce(
    (total, transaction) => total + transaction.Amount,
    0
  );

  
    return (
        <div className=''>
            <div className='p-[10px] flex gap-4 justify-center text-center text-[1.5rem] '>
                <Link to="/transactions">
                <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
                   <h1 className='font-semibold'> Total Transaction</h1>
                    <p>{transactionData.totalTransactions}</p>
                </div>
                </Link>
                <Link to="/intransactions">
                <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
                    <h1 className='font-semibold'>Transactions In</h1>
                    <div className='flex justify-center gap-3'>
                        <img src={images.NairaLogo} alt="" className='w-[30px]'/>
                        <div>{totalInTransactionAmount}</div>
                    </div>
                </div>
                </Link>
                <Link to="outtransactions">
                <div className='bg-slate-200 w-[20rem] h-[10rem] rounded-lg flex flex-col justify-around'>
                   <h1 className='font-semibold'> Transactions Out</h1>
                   <div className='flex justify-center gap-3'>
                        <img src={images.NairaLogo} alt="" className='w-[30px]'/>
                        <div>{totalOutTransactionAmount}</div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default MainPage