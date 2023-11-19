require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    // Goerli: {
      Sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/r6ZtrUnBlgPkdoHci_rQa0204S4Adyr0', 
      accounts: ['51e1db303bc524a0ce40d1b7acf93cb50fe48bdf4ff6e50749a05dacf5c6987a'],
    },
  },
};