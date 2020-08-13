const Web3 = require('web3');
const web3 = new Web3(
         new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/<key>')
);