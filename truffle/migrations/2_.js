const PrivateBank = artifacts.require("PrivateBank");

module.exports = function (deployer) {
  deployer.deploy(PrivateBank);
};
