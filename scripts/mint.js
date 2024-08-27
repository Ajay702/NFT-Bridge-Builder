// scripts/mintBatch.js
const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const contractAddress = "0xe912539e575ecad6A0e5D5567934f8f88b116393";
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


