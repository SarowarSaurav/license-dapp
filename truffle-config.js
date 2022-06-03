const path = require("path");

const ethwallet = require('ethereumjs-wallet');
const HDWalletProvider = require("truffle-hdwallet-provider");

const wallet = ethwallet.fromPrivateKey(Buffer.from(process.env.ETH_DEPLOYER_KEY = "9b60f08ad0b29591c6c35bd0fad8a3f1a2522565b20b41658493664ac9e88aac", 'hex'));
const address = "0x" + wallet.getAddress().toString("B05dC65A2b4C84f834617CAEdA45E15d9c1612cc");
const provider = new HDWalletProvider(process.env.ETH_DEPLOYER_KEY="WB3482P8PCFNM8S2AU9IRNWGGVCPNEGA2C", process.env.ETH_NODE_URL);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
     gas: 7000000,
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: provider,
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    mainnet: {
      provider: provider,
      network_id: "*",       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "0.5.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
