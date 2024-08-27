// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");
// const fxRootContractABI = require("../fxRootContractABI.json");
// const tokenContractJSON = require("../artifacts/contracts/ERC721A.sol/MyNFT.json");

// const tokenAddress = "0xCd0C267958b3f0a02887C27DAABd2b2D087AF0b3"; 
// const tokenABI = tokenContractJSON.abi;
// const fxERC721ARootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
// const walletAddress = "0xB0274BDacdb5968cEC0e70fc3ceDFD9A78a51772"; 

// async function main() {

//     const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
//     const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721ARootAddress);

//     const approveTx = await tokenContract.approve(fxERC721ARootAddress, 3);
//     await approveTx.wait();

//     console.log('Approval confirmed');

//     try {
//       const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 3, "0x6556");
//       await depositTx.wait();
//       console.log("NFT deposited");
//   } catch (error) {
//       console.error("Deposit failed:", error.reason || error.message);
//   }
  
//   }
  

//   main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
//   });



const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/ERC721A.sol/MyNFT.json");

const tokenAddress = "0xCd0C267958b3f0a02887C27DAABd2b2D087AF0b3";
const tokenABI = tokenContractJSON.abi;
const fxERC721ARootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xB0274BDacdb5968cEC0e70fc3ceDFD9A78a51772";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721ARootAddress);

  console.log("Approving token for transfer...");
  const approveTx = await tokenContract.approve(fxERC721ARootAddress, 3);
  await approveTx.wait();
  console.log('Approval confirmed');

  try {
    console.log("Depositing token to FxPortal Bridge...");
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 3, "0x6556", { gasLimit: 300000 });
    console.log(`Deposit transaction hash: ${depositTx.hash}`);
    await depositTx.wait();
    console.log("NFT deposited");
  } catch (error) {
    console.error("Deposit failed:", error.reason || error.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});