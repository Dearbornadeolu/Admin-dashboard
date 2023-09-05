// transactionData.js

const inTransactions = [
    { Transaction_ID: 'TRAN1', Transaction_Date: '2023-09-01', Amount: 22322350 },
    { Transaction_ID: 'TRAN2', Transaction_Date: '2023-09-02', Amount: 243445475 },
    // Add more in transactions as needed
  ];
  
  const outTransactions = [
    { Transaction_ID: 'TRAN3', Transaction_Date: '2023-09-03', Amount: 89134347 },
    { Transaction_ID: 'TRAN4', Transaction_Date: '2023-09-04', Amount: 81376435 },
    // Add more out transactions as needed
  ];
  
  const totalTransactions = inTransactions.length + outTransactions.length;
  
  const transactionData = {
    totalTransactions,
    inTransactions,
    outTransactions,
  };
  
  export default transactionData;
  