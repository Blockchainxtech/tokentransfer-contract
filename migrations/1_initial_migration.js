const SCOOBY = artifacts.require("SCOOBY");

module.exports = function (deployer) {
  deployer.deploy(SCOOBY, "1000000000000000000000000000");
};
