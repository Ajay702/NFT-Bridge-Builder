require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {  
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    cache: "./cache",
    
  },
  networks: {
    amoy: {
      url: 'https://rpc-amoy.polygon.technology/',
      accounts: ["ed39754c4afe558ddc30e5291f9d6d6af557bd257a77a87ffa49e97796baa1f4"],
    },

    sepolia: {
      url: 'https://rpc.sepolia.org/',
      accounts: ["ed39754c4afe558ddc30e5291f9d6d6af557bd257a77a87ffa49e97796baa1f4"],
    },
  },
}