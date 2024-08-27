// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "ERC721A/contracts/ERC721A.sol";


contract MyNFT is ERC721A, Ownable {
    string public baseTokenURI;
    string[] public prompts;

    constructor(string memory _baseTokenURI, string[] memory _prompts) ERC721A("MyNFTCollection", "MNFT") {
        baseTokenURI = _baseTokenURI;
        prompts = _prompts;
    }

    function promptDescription(uint256 tokenId) external view returns (string memory) {
        require(tokenId < prompts.length, "Invalid tokenId");
        return prompts[tokenId];
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function mintBatch(address to, uint256 amount) external onlyOwner {
        _safeMint(to, amount);
    }
}
