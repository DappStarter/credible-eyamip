require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain quality gesture hero foster giant'; 
let testAccounts = [
"0xc7841a14c64927fd77ae1dd44f93c0d053a4516de309c7d5f426802ad845da6a",
"0x3d1f93ac4d5e27e3320bca0935987e23c4818818b2121aaa7d5dc2ae383a018b",
"0x467e382207b1681d145b4b85d6566a7064d84bab1ee994577cff20cbdaa369e1",
"0x7a472732440bc41db082a59c4fc879d5f039ddb766375dc6410cb7da653e4614",
"0x801d4b42df81364e01258752dbadb9c8be55aca8fbcf83f7ce9c49c92dfd6a5d",
"0x645e86ed7b60e35375bf8b23c3b3833d3bb93efac29078cb33fc4e02915fbad4",
"0xb6305d99f591c88e8e7d6f62802fadf6a386a915b24fcc2f31676dd60abadda2",
"0x7281b4d6e87b30af22163e55c6d6524e544ad03c88bab8d1ba83f49c2389717c",
"0x0875123e518f7dc23a4a944013a3b419bdb295a8ad39829af397a162d4487ff1",
"0x69a3c41c2354cab8592cd9bbe1d2649167f3b4a3aa65e0638ac38d8300063499"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
