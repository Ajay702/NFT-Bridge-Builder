// scripts/getbalance.js
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const nftAddress = "0xe912539e575ecad6A0e5D5567934f8f88b116393"; 
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = MyNFT.attach(nftAddress);

    const balance = await myNFT.balanceOf(deployer.address);
    console.log(`NFT balance on Sepolia: ${balance}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
