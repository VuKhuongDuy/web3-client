const main = () => {
  const usdtContract = new web3.eth.Contract(ABI_JSON, usdtAddress);

  return new Promise((resolve, reject) => {
    web3.eth.getGasPrice()
        .then(gasPrice => {
            web3.eth.sendTransaction({
                from: from,
                to: usdtContract._address,
                data: usdtContract.methods.transfer(to, web3.utils.toWei(amount, 'ether')).encodeABI(),
            value: '0x00',
            gasPrice: gasPrice,
            gasLimit: '0x33450',
        })
        .then((receipt) => {
            resolve(receipt)
        })
        .catch(e => reject(e))
    })
    .catch(e => reject(e))

  }) 
}

main()