// scripts/getbalance.js
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const nftAddress = "0x9846e0ec6b931d71ce3D36C4bb824b99219F2455"; 
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = MyNFT.attach(nftAddress);

    const balance = await myNFT.balanceOf(deployer.address);
    console.log(`NFT balance on Sepolia: ${balance}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});