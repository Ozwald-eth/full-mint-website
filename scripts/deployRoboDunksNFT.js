
const hre = require("hardhat");

async function main() {
 
  const RoboDunksNFT = await hre.ethers.getContractFactory("RoboDunksNFT");
  const roboDunksNFT = await RoboDunksNFT.deploy();

  await roboDunksNFT.deployed();

  console.log("RoboDunksNFT deployed to:", roboDunksNFT.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
