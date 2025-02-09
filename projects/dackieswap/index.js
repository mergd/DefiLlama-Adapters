const { uniV3Export } = require("../helper/uniswapV3");

module.exports = uniV3Export({
  base: { factory: "0x3D237AC6D2f425D2E890Cc99198818cc1FA48870", fromBlock: 2031627 },
  optimism: { factory: "0xc2BC7A73613B9bD5F373FE10B55C59a69F4D617B", fromBlock: 115172042 },
  arbitrum: { factory: "0xaEdc38bD52b0380b2Af4980948925734fD54FbF4", fromBlock: 180722131 },
  blast: { factory: "0xB9010964301326160173da694c0697a2FcE82F39", fromBlock: 286237 },
});