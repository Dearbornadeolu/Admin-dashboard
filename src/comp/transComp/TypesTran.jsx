import React, { useState } from 'react';
import transactionData from '../../transactionData';

const TypesTran = () => {
  const [activeTab, setActiveTab] = useState('All-trans'); // Default active tab is 'All-trans'

  // Filter transactions based on the activeTab value
  const filteredTransactions = () => {
    switch (activeTab) {
      case 'Successfultrans':
        return transactionData.inTransactions.filter(
          (transaction) => transaction.Status === 'Made'
        );
      case 'failedTrans':
        return transactionData.failedTransactions;
      case 'ongoing-trans':
        return transactionData.outTransactions.filter(
          (transaction) => transaction.Status === 'Ongoing'
        );
      default:
        return [
          ...transactionData.inTransactions,
          ...transactionData.failedTransactions,
          ...transactionData.outTransactions,
        ];
    }
  };

  return (
    <div>
      <div className='flex gap-4 justify-between border-b-2 border-blue-800 w-[85vw] p-3'>
        <button
          className={`w-1/4 border-r-2 border-blue-800 focus:outline-none ${
            activeTab === 'All-trans' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setActiveTab('All-trans')}
        >
          All Transactions
        </button>
        <button
          className={`w-1/4 border-r-2 border-blue-800 focus:outline-none ${
            activeTab === 'Successfultrans' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setActiveTab('Successfultrans')}
        >
          Successful Transactions
        </button>
        <button
          className={`w-1/4 border-r-2 border-blue-800 focus:outline-none ${
            activeTab === 'failedTrans' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setActiveTab('failedTrans')}
        >
          Failed Transactions
        </button>
        <button
          className={`w-1/4 border-blue-800 focus:outline-none ${
            activeTab === 'ongoing-trans' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setActiveTab('ongoing-trans')}
        >
          Ongoing Transactions
        </button>
      </div>
      <div>
        {/* Render transactions based on the activeTab */}
        <div className='mt-3'>
          <h1 className='font-bold text-xl text-center mb-2'>
            {activeTab === 'All-trans'
              ? 'All Transactions'
              : activeTab === 'Successfultrans'
              ? 'Successful Transactions'
              : activeTab === 'failedTrans'
              ? 'Failed Transactions'
              : 'Ongoing Transactions'}
          </h1>
          <div className='overflow-x-auto'>
            <table className='w-full border-2 border-blue-800'>
              <thead className='bg-blue-100'>
                <tr className='border-2 border-blue-800'>
                  <th className='p-2'>Transaction ID</th>
                  <th className='p-2'>Transaction Date</th>
                  <th className='p-2'>Amount</th>
                  <th className='p-2'>Status</th>
                  <th className='p-2'>Sender</th>
                  <th className='p-2'>Recipient</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {filteredTransactions().map((transaction) => (
                  <tr key={transaction.Transaction_ID} className='border-2 border-blue-800'>
                    <td className='p-2'>{transaction.Transaction_ID}</td>
                    <td className='p-2'>{transaction.Transaction_Date}</td>
                    <td className='p-2'>#{transaction.Amount.toLocaleString()}</td> {/* Format as money with commas */}
                    <td className='p-2'>{transaction.Status}</td>
                    <td className='p-2'>{transaction.Sender}</td>
                    <td className='p-2'>{transaction.Recipient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesTran;
