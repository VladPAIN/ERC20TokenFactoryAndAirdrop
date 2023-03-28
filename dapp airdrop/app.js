// Подключение к контракту TokenAirdrop
const factoryAddress = "0xbfDfa1AC5dDA6364bc93EA16837B43215D30d84C";
const factoryABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_supply",
                "type": "uint256"
            }
        ],
        "name": "deployToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            }
        ],
        "name": "TokenDeployed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "getUserToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = "0x7988de14c33A482b045639dfea419CF0F8951Af4"; // Замените на реальный адрес контракта
const tokenAirdropABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "recipients",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "airdrop",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "contract ERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]; // Замените на реальный ABI контракта

const provider = new ethers.providers.Web3Provider(window.ethereum, 97);

let signer;
let tokenAirdrop;
let tokenFactory;

provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0])
        tokenAirdrop = new ethers.Contract(contractAddress, tokenAirdropABI, signer);
        tokenFactory = new ethers.Contract(factoryAddress, factoryABI, signer)
    });

});

async function createToken() {
    const name = document.getElementById("name").value;
    const symbol = document.getElementById("symbol").value;
    const suply = document.getElementById("suply").value;

    await tokenFactory.deployToken(name, symbol, suply).send({ from: ethereum.selectedAddress });
}

async function getAddress() {
    const address = await tokenFactory.getUserToken();
    document.getElementById("result").innerText = address;
}

// Функция для отправки токенов участникам
async function airdrop() {
    const tokenAddress = document.getElementById("tokenAddress").value;
    const amount = document.getElementById("amount").value;
    const recipients = document.getElementById("recipients").value.split(",");

    await tokenAirdrop.airdrop(tokenAddress, recipients, amount).send({ from: ethereum.selectedAddress });

    alert("Tokens sent successfully!");
}