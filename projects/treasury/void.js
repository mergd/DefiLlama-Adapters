const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0xf0a793024Ac47e421EB8c4673212dfCcE42f4a97";

module.exports = treasuryExports({
  fantom: {
    owner: [treasury],
    ownTokens: [
      "0x80F2B8CdbC470c4DB4452Cc7e4a62F5277Db7061", // VOID
    ],
    tokens: [
      nullAddress,
      "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", // DAI
      "0xfC66Ac63D414d3CF3dcdDa9e60742F6E789205e3", // SpookySwap VOID-DAI LP
    ],
  },
});