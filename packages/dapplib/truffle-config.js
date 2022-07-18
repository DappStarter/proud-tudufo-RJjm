require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign struggle deny mushroom proud hundred light army ghost'; 
let testAccounts = [
"0xb5062b9bb122d5c7ac106005ff2d71bc7893fd4e68b0ebb29dfad680423658b7",
"0x590159927e1318d09b7f90e9ac9902b3dfb64961252ad9987b261c94387feb72",
"0x8e5e662f66befef688bedd36e76328c2eccc7baacfb2b9bf97d119a4b3c6bf85",
"0x1c618d1b1afdc17ce78c4abec93305295a70c45d75b30c660fb90c5312b867f0",
"0xff6871106adf6b8339dee36921fba28d1c770ae494f61f868efb14b66fb7c917",
"0xf4a6523972c3852f525194ce9f80799a39f33f8cac6c5b2419b98081f95a038d",
"0x925f80b6414a39b611842cc1ea1fd086f6eece6acf8dec5a62b9ad09dc4fd7a7",
"0x02121c7ad8af143aff84e5d617c423449a8088d041af0d6d2e3f545f961f301d",
"0x5eb3f26a9386b7710e009252a3305f503501f3ae84fc21cf4c6e8fbcbc7eea60",
"0xdcced89064747e9168f419068d4dd7901dd0f0032bb3b2c09bebac3d10c16f36"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

