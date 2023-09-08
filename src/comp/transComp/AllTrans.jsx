import React, { useState } from 'react';
import transactionData from '../../transactionData';

const AllTrans = () => {
  const [searchQueryIn, setSearchQueryIn] = useState('');
  const [searchQueryOut, setSearchQueryOut] = useState('');

  // Accessing the total amount of inTransactions
  const totalInTransactionAmount = transactionData.inTransactions.reduce(
    (total, transaction) => total + transaction.Amount,
    0
  ).toLocaleString(); // Format as money with commas

  const totalOutTransactionAmount = transactionData.outTransactions.reduce(
    (total, transaction) => total + transaction.Amount,
    0
  ).toLocaleString(); // Format as money with commas

  // Filter transactions based on the search query for 'outTransactions'
  const filteredOutTransactions = transactionData.outTransactions.filter(
    (transaction) =>
      transaction.Transaction_ID.includes(searchQueryOut) ||
      transaction.Transaction_Date.includes(searchQueryOut) ||
      transaction.Amount.toString().includes(searchQueryOut)
  );

  const filteredInTransactions = transactionData.inTransactions.filter(
    (transaction) =>
      transaction.Transaction_ID.includes(searchQueryIn) ||
      transaction.Transaction_Date.includes(searchQueryIn) ||
      transaction.Amount.toString().includes(searchQueryIn)
  );

  return (
    <div className='w-full p-4'>
      <div className='mb-4 text-center font-bold text-xl'>
        Total Number of Transactions
      </div>
      <div className='flex justify-between gap-4 mb-4'>
        <div className='flex-1 bg-blue-100 border border-blue-800 rounded-lg p-4 flex flex-col justify-between items-center'>
          <div className='text-center'>
            <h1 className='font-bold text-xl'>IN</h1>
            <h1 className='font-semibold text-2xl'>#{totalInTransactionAmount}</h1>
          </div>
          <input
            type="search"
            name=""
            id="searchIn"
            className='border border-blue-800 rounded-md p-2 w-full'
            placeholder="Search"
            value={searchQueryIn}
            onChange={(e) => setSearchQueryIn(e.target.value)}
          />
        </div>
        <div className='flex-1 bg-blue-100 border border-blue-800 rounded-lg p-4 flex flex-col justify-between align-middle items-center'>
          <div className='text-center'>
            <h1 className='font-bold text-xl'>OUT</h1>
            <h1 className='font-semibold text-2xl'>#{totalOutTransactionAmount}</h1>
          </div>
          <input
            type="search"
            name=""
            id="searchOut"
            className='border border-blue-800 rounded-md p-2 w-full'
            placeholder="Search"
            value={searchQueryOut}
            onChange={(e) => setSearchQueryOut(e.target.value)}
          />
        </div>
      </div>
      <div className='flex gap-4 text-center'>
        <table className='flex-1 border border-blue-800 rounded-lg p-3'>
          <thead>
            <tr className='bg-blue-100'>
              <th>ID</th>
              <th>Transaction Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredInTransactions.map((transaction) => (
              <tr key={transaction.Transaction_ID}>
                <td>{transaction.Transaction_ID}</td>
                <td>{transaction.Transaction_Date}</td>
                <td>{transaction.Amount.toLocaleString()}</td> {/* Format as money with commas */}
              </tr>
            ))}
          </tbody>
        </table>
        <table className='flex-1 border border-blue-800 rounded-lg p-3'>
          <thead>
            <tr className='bg-blue-100'>
              <th>ID</th>
              <th>Transaction Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredOutTransactions.map((transaction) => (
              <tr key={transaction.Transaction_ID}>
                <td>{transaction.Transaction_ID}</td>
                <td>{transaction.Transaction_Date}</td>
                <td>{transaction.Amount.toLocaleString()}</td> {/* Format as money with commas */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTrans;
