var Counterfeit = artifacts.require("./counterfeit.sol");

module.exports = function(deployer){
    deployer.deploy(Counterfeit);
};
