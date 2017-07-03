// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");
var test= artifacts.require("./test.sol");
var AIG= artifacts.require("./AIG.sol");
var BHSI= artifacts.require("./BHSI.sol");
var LIC= artifacts.require("./LIC.sol");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(test);
  deployer.deploy(AIG);
  deployer.deploy(BHSI);
  deployer.deploy(LIC);

};
