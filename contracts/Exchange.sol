//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "./Registry.sol";
import "./ERC20.sol";


contract Exchange {
    address public owner;
    address public tokenAddress;
    uint256 public totalSupply;
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;

    constructor(address _token) {
        owner = msg.sender;
        tokenAddress = _token;
        totalSupply = 0;
    }

    function addLiquidity(uint256 _tokenAmount) public payable returns (uint256) {
        require(_tokenAmount > 0, "Invalid token amount");
        require(msg.value > 0, "Invalid ETH amount");

        uint256 ethReserve = address(this).balance - msg.value;
        uint256 tokenReserve = IERC20(tokenAddress).balanceOf(address(this));

        uint256 ethInput = msg.value;
        uint256 tokenInput = _tokenAmount;

        uint256 liquidityadded = (ethInput * totalSupply) / ethReserve;

        require(liquidityadded > 0, "Insufficient liquidity minted");

        totalSupply += liquidityadded;
        balances[msg.sender] += liquidityadded;

        // Transfer tokens and ETH to the contract
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), tokenInput);
        payable(address(this)).transfer(ethInput);


        return liquidityadded;
    }

    function removeLiquidity(uint256 _amount) public returns (uint256, uint256) {
        require(_amount > 0, "Invalid liquidity amount");

        uint256 ethReserve = address(this).balance;
        uint256 tokenReserve = IERC20(tokenAddress).balanceOf(address(this));

        uint256 ethAmount = (_amount * ethReserve) / totalSupply;
        uint256 tokenAmount = (_amount * tokenReserve) / totalSupply;

        require(ethAmount > 0 && tokenAmount > 0, "Insufficient liquidity");

        totalSupply -= _amount;
        balances[msg.sender] -= _amount;

        // Transfer tokens and ETH back to the user
        IERC20(tokenAddress).transfer(msg.sender, tokenAmount);
        payable(msg.sender).transfer(ethAmount);

        // Emit an event or perform other actions if needed

        return (ethAmount, tokenAmount);
    }

    function ethToTokenSwap(uint256 _minTokens) public payable {
        require(msg.value > 0, "Invalid ETH amount");

        uint256 inputEthAmount = msg.value;
        uint256 outputTokenAmount = getTokenAmount(inputEthAmount);

        require(outputTokenAmount >= _minTokens, "Insufficient output amount");

        IERC20(tokenAddress).transfer(msg.sender, outputTokenAmount);
    }

    function tokenToEthSwap(uint256 _tokensSold, uint256 _minEth) public {
        require(_tokensSold > 0, "Invalid token amount");

        uint256 inputTokenAmount = _tokensSold;
        uint256 outputEthAmount = getEthAmount(inputTokenAmount);

        require(outputEthAmount >= _minEth, "Insufficient output amount");

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), inputTokenAmount);
        payable(msg.sender).transfer(outputEthAmount);
    }

    function tokenToTokenSwap(uint256 _tokensSold, uint256 _minTokensBought, address _tokenAddress) public {
        require(_tokensSold > 0, "Invalid token amount");

        uint256 inputTokenAmount = _tokensSold;
        uint256 outputTokenAmount = getTokenToTokenAmount(inputTokenAmount, _tokenAddress);

        require(outputTokenAmount >= _minTokensBought, "Insufficient output amount");

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), inputTokenAmount);
        IERC20(_tokenAddress).transfer(msg.sender, outputTokenAmount);
    }

    function getEthAmount(uint256 _tokenSold) public view returns (uint256) {
        uint256 ethReserve = address(this).balance;
        uint256 tokenReserve = IERC20(tokenAddress).balanceOf(address(this));
        return (ethReserve * _tokenSold) / tokenReserve;
    }

    function getTokenAmount(uint256 _ethSold) public view returns (uint256) {
        uint256 ethReserve = address(this).balance;
        uint256 tokenReserve = IERC20(tokenAddress).balanceOf(address(this));
        return (tokenReserve * _ethSold) / ethReserve;
    }

    function getTokenToTokenAmount(uint256 _tokenSold, address _tokenAddress) public view returns (uint256) {
        uint256 tokenReserve = IERC20(_tokenAddress).balanceOf(address(this));
        return (tokenReserve * _tokenSold) / IERC20(tokenAddress).balanceOf(address(this));
    }
}
