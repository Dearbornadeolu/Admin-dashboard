const userData = [
  { UserID: 1, Username: 'sender1', Password: 'password1', Name: 'Sender 1', Status: 'Active', Verified: true, Admin: false },
  { UserID: 2, Username: 'sender2', Password: 'password2', Name: 'Sender 2', Status: 'Active', Verified: true, Admin: false },
  { UserID: 3, Username: 'recipient1', Password: 'password3', Name: 'Recipient 1', Status: 'Active', Verified: true, Admin: false },
  { UserID: 4, Username: 'recipient2', Password: 'password4', Name: 'Recipient 2', Status: 'Active', Verified: true, Admin: false },
  // Add more user data as needed
];


const senderRecipientData = [
  { Transaction_ID: '#sender1', Name: 'Sender 1' },
  { Transaction_ID: '#sender2', Name: 'Sender 2' },
  { Transaction_ID: '#recipient1', Name: 'Recipient 1' },
  { Transaction_ID: '#recipient2', Name: 'Recipient 2' },
  // Add more sender and recipient data as needed
];

const inTransactions = [
  {
    Transaction_ID: '#wjsxxx',
    Transaction_Date: '2023-09-01',
    Amount: 22322350,
    Status: 'Made',
    Sender: 'Sender 1', // Replace with the actual sender's name
    Recipient: 'Recipient 1', // Replace with the actual recipient's name
  },
  {
    Transaction_ID: '#1iuwhs',
    Transaction_Date: '2023-09-02',
    Amount: 243445475,
    Status: 'Made',
    Sender: 'Sender 2', // Replace with the actual sender's name
    Recipient: 'Recipient 2', // Replace with the actual recipient's name
  },
  // Add more in transactions as needed
];

const outTransactions = [
  {
    Transaction_ID: '#jsHXXW',
    Transaction_Date: '2023-09-03',
    Amount: 89134347,
    Status: 'Ongoing',
    Sender: 'Sender 1', // Replace with the actual sender's name
    Recipient: 'Recipient 2', // Replace with the actual recipient's name
  },
  {
    Transaction_ID: '#JSJSJJ',
    Transaction_Date: '2023-09-04',
    Amount: 81376435,
    Status: 'Ongoing',
    Sender: 'Sender 2', // Replace with the actual sender's name
    Recipient: 'Recipient 1', // Replace with the actual recipient's name
  },
  // Add more out transactions as needed
];

const failedTransactions = [
  {
    Transaction_ID: '#xyz123',
    Transaction_Date: '2023-09-05',
    Amount: 50000,
    Status: 'Failed',
    Sender: 'Sender 1', // Replace with the actual sender's name
    Recipient: 'Recipient 1', // Replace with the actual recipient's name
  },
  {
    Transaction_ID: '#abc456',
    Transaction_Date: '2023-09-06',
    Amount: 75000,
    Status: 'Failed',
    Sender: 'Sender 2', // Replace with the actual sender's name
    Recipient: 'Recipient 2', // Replace with the actual recipient's name
  },
  // Add more failed transactions as needed
];

const totalTransactions =
  inTransactions.length + outTransactions.length + failedTransactions.length;

const transactionData = {
  userData,
  totalTransactions,
  inTransactions,
  outTransactions,
  failedTransactions,
};

export default transactionData;
