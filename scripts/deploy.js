// scripts/deploy.js
const hre = require("hardhat");

async function main() {
    const baseTokenURI = "ipfs://QmeWuGuP3NMkK1uUHmtXURTtXXyvpW8eYpxy7jjQiVDfab/";
    const prompts = [
        "create an image of first interaction alien and human",
        "create an image of lighting on a nebula in space",
        "create an image of cars racing on saturn ring",
        "create an image of train running inside water on mars",
        "create an image of dog running on moon wearing 3d glasses",
    ];

    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy(baseTokenURI, prompts, {
    });

    await myNFT.deployed();
    console.log("Contract deployed to:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });