// scripts/mintBatch.js
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const contractAddress = "0xCd0C267958b3f0a02887C27DAABd2b2D087AF0b3";
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = MyNFT.attach(contractAddress);

    const tx = await myNFT.mintBatch(deployer.address, 5);
    await tx.wait();

    console.log("Batch minting complete");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


