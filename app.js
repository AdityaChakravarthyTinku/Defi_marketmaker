
const Web3 = require('web3');

// Replace '8db957bd556142d2b373a47b5b331c2a' with your actual Infura API key
const infuraApiKey = 'c39bbef13224420aa50af5c214715d49';
const infuraEndpoint = `https://sepolia.infura.io/v3/${infuraApiKey}`;

// Create a new instance of Web3 using the Infura endpoint
const web3 = new Web3(infuraEndpoint);

// Now 'web3' is connected to the Ethereum blockchain via Infura

// Example: Get the latest block number
web3.eth.getBlockNumber()
  .then((blockNumber) => {
    console.log('Latest Block Number:', blockNumber);
  })
  .catch((error) => {
    console.error('Error getting block number:', error);
  });

  
