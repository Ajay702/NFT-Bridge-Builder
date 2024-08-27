# NFT Bridge Builder

## Overview

The NFT Bridge Builder project demonstrates how to bridge NFTs between two Ethereum-compatible networks. This guide provides step-by-step instructions to deploy smart contracts and manage NFTs across different networks using the NFT Bridge Builder contracts.

## Features

- **Deploy NFT Contracts**: Deploy NFT contracts on the source network.
- **Mint NFTs**: Mint NFTs to your wallet on the source network.
- **Bridge NFTs**: Transfer NFTs from one network to another.
- **Verify NFTs**: Check the status of NFTs on the target network.

## Prerequisites

- Node.js and npm installed
- Hardhat framework installed
- Ethereum-compatible networks configured (e.g., sepolia, amoy)

## Steps for Bridging

1. Run npm i to install dependencies
2. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC721 contract
3. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
4. Run npx hardhat run scripts/mint.js --network sepolia to mint tokens to your wallet
5. Run npx hardhat run scripts/approveDeposit.js --network sepolia to approve and deposit your tokens to polygon
6. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
7. Use this polygon contract address for your getBalance script's tokenAddress
8. Run npx hardhat run scripts/getBalance.js --network amoy to see the new polygon balance

## Author

Ajay Raghav

## License

This project is licensed under the MIT License.
