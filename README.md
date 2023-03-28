# ERC20 Token Factory and Airdrop
This repository contains a set of Solidity smart contracts for creating ERC20 tokens and conducting airdrops to recipients. It also includes a web3.js-based DApp to interact with the smart contracts.

## Overview
The ERC20TokenFactory contract allows users to create their own ERC20 tokens, with a specified name, symbol, and supply.

The TokenAirdrop contract can then be used to distribute those tokens to a specified list of recipients.

## Getting started

* Clone the repository: 
```
$ git clone https://github.com/VladPAIN/ERC20TokenFactoryAndAirdrop.git
```
* Install the necessary dependencies:
```
$ $npm install
```
* Compile the smart contracts:
```
$ $truffle compile
```
* Deploy the contracts:
```
$ $truffle migrate
```
* Run the DApp:
```
$ $npm run dev
```
* Open your browser to http://localhost:3000/ to use the DApp.

## Usage

### Creating a new ERC20 token
1. Open the DApp at http://localhost:3000/.
2. Enter a name, symbol, and total supply for your new token.
3. Click the "Create Token" button.
4. Confirm the transaction in MetaMask.

### Airdropping tokens
1. Open the DApp at http://localhost:3000/.
2. Enter the recipients and amount of tokens to be airdropped.
3. Click the "Airdrop Tokens" button.
4. Confirm the transaction in MetaMask.

## Troubleshooting

If you encounter any issues, please check that you have:

* Installed all necessary dependencies (npm install)

* Compiled the smart contracts (truffle compile)

* Deployed the contracts (truffle migrate)

* tarted the local development server (npm run dev)

* Connected to the correct network in MetaMask (e.g. localhost:8545)

* Have sufficient funds in your MetaMask account to pay for gas fees
