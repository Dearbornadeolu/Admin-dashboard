import React, { useState } from 'react';
import transactionData from '../../transactionData';

const GetUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(transactionData.userData);
  const [selectedUser, setSelectedUser] = useState(null); // To track the selected user for the modal
  const [showTransactions, setShowTransactions] = useState(false);

  const handleButtonClick = (user) => {
    setSelectedUser(user);
  };

  const handleSearch = () => {
    const filtered = transactionData.userData.filter(
      (user) =>
        user.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.UserID.toString().includes(searchTerm)
    );

    setFilteredUsers(filtered);
  };

  const closeUserDetailsModal = () => {
    setSelectedUser(null); // Close the modal by clearing selectedUser
  };

  return (
    <div className='w-[100%]'>
      <h1 className='font-bold text-xl text-center mb-4'>Users</h1>
      <div className='mb-4 flex items-center justify-center'>
        <input
          type='text'
          placeholder='Search by Name or ID'
          className='border-2 border-blue-800 p-2 rounded-l-md focus:outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className='bg-blue-500 text-white p-2 rounded-r-md focus:outline-none'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <table className='w-full border-2 border-blue-800'>
        <thead className='bg-blue-200'>
          <tr className='border-2 border-blue-800'>
            <th>User ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Status</th>
            <th>Verified</th>
            <th>Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.UserID} className='text-center border-2 border-blue-800'>
              <td>{user.UserID}</td>
              <td>{user.Username}</td>
              <td>{user.Name}</td>
              <td>{user.Status}</td>
              <td>{user.Verified ? 'Yes' : 'No'}</td>
              <td>{user.Admin ? 'Yes' : 'No'}</td>
              <td className='bg-blue-500'>
                <button onClick={() => handleButtonClick(user)} className='text-white p-2 focus:outline-none'>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render UserDetailsModal when a user is selected */}
      {selectedUser && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-lg w-[400px]'>
            <h2 className='text-xl font-bold mb-4'>{selectedUser.Name} Details</h2>
            <p>User ID: {selectedUser.UserID}</p>
            <p>Username: {selectedUser.Username}</p>
            <p>Status: {selectedUser.Status}</p>
            <p>Verified: {selectedUser.Verified ? 'Yes' : 'No'}</p>
            <p>Admin: {selectedUser.Admin ? 'Yes' : 'No'}</p>
            <button
              className='bg-blue-500 text-white px-2 py-1 rounded-md mt-2 focus:outline-none'
              onClick={() => setShowTransactions(!showTransactions)}
            >
              {showTransactions ? 'Hide Transactions' : 'Show Transactions'}
            </button>
            {showTransactions && (
              <div>
                <h3 className='text-lg font-semibold mt-4'>Transactions:</h3>
                {/* Display user's transactions here */}
                {/* You can map through user's transactions and display them */}
              </div>
            )}
            <div className='flex justify-end mt-4'>
              <button
                className='bg-red-500 text-white px-2 py-1 rounded-md focus:outline-none'
                onClick={closeUserDetailsModal}
              >
                Delete User
              </button>
              <button
                className='bg-yellow-500 text-white px-2 py-1 rounded-md ml-2 focus:outline-none'
                onClick={closeUserDetailsModal}
              >
                Edit User
              </button>
              <button
                className='bg-gray-500 text-white px-2 py-1 rounded-md ml-2 focus:outline-none'
                onClick={closeUserDetailsModal}
              >
                Ban User
              </button>
              <button
                className='bg-gray-500 text-white px-2 py-1 rounded-md ml-2 focus:outline-none'
                onClick={closeUserDetailsModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetUsers;
