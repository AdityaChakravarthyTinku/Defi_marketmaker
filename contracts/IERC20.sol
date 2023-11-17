// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyContract {
    IERC20 public dai;

    constructor(address _daiAddress) {
        // Initialize the DAI token contract
        dai = IERC20(_daiAddress);
    }

    function faucet(address to, uint amount) external {
        // Transfer existing DAI tokens to the specified address
        dai.transfer(to, amount);
    }

    function transferDAI(address to, uint256 amount) public {
        // Transfer DAI using the ERC-20 functions
        dai.transfer(to, amount);
    }

    function getDAIBalance() public view returns (uint256) {
        // Get the contract's DAI balance
        return dai.balanceOf(address(this));
    }
}
