const signatureWeb3 = async () => {
    var web3 = new Web3('wss://ethereum-goerli.publicnode.com')
    web3.eth.accounts.wallet.add(`0x${privateKey}`);
    const encoded = web3.utils.soliditySha3(
      {type: 'address', value: '0x0000000000000000000000000000000000000000'},
      {type: 'uint256', value: 1},
      {type: 'address', value: '0x0000000000000000000000000000000000000000'},
      {type: 'uint256', value: 1},
      )
  
    // const hash = web3.utils.(encoded)
    const signatureWeb3 = await web3.eth.sign(encoded, signer.address)
    console.log({signatureWeb3})
  }