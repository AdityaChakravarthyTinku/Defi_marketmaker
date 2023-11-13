const Web3 = require('web3');

// Use your Infura API key
const infuraKey = 'c39bbef13224420aa50af5c214715d49';

// Instantiate web3 with Providers which connects to Infura node
const web3 = new Web3(`https://sepolia.infura.io/v3/${infuraKey}`);

console.log(web3);
