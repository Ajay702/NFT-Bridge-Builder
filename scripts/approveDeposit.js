const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/ERC721A.sol/MyNFT.json");

const tokenAddress = "0xe912539e575ecad6A0e5D5567934f8f88b116393"; 
const tokenABI = tokenContractJSON.abi;
const fxERC20RootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xB0274BDacdb5968cEC0e70fc3ceDFD9A78a51772"; 

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC20RootAddress);

    const approveTx = await tokenContract.approve(fxERC20RootAddress, 1);
    await approveTx.wait();

    console.log('Approval confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 1, "0x6556");
    await depositTx.wait();

    console.log("NFTs deposited");
  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
