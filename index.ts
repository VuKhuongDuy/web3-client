var ABI_JSON = require('../abis/erc20.json')
var {Web3} = require('web3')

const send = async () => {
  var web3 = new Web3('wss://ethereum.publicnode.com')
  // var web3 = new Web3('wss://ethereum-goerli.publicnode.com')

  const usdtAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'
  // const usdtAddress = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'

  const usdtContract = new web3.eth.Contract(ABI_JSON, usdtAddress);
  const privateKey = '';
  const gasPrice = await web3.eth.getGasPrice()
  const tx = {
    from: '',
    to: usdtContract._address,
    data: usdtContract.methods.transfer(toAddress, 18276791).encodeABI(),
    value: '0x00',
    gasPrice: gasPrice,
    gasLimit: '0x33450',
  }
  
  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey)
  console.log({signedTx})

  const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

  return result
    
}

const main = async () => {
  const res = await send()
  console.log({res})
}

main()
