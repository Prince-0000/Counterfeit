var Counterfeit = artifacts.require("./Counterfeit.sol");

module.exports = function(deployer){
    deployer.deploy(Counterfeit);
};
