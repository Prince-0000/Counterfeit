// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Counterfeit {
    
    struct Company {
        string name;
        string registrationNumber;
        address owner;
    }
    
    struct Product {
        string name;
        uint96 productId;
        string description;
    }
    
    mapping (address => Company) companies;
    mapping (string => address) companyAddresses;
    mapping (address => mapping(uint96 => Product)) companyProducts;
    mapping (address => uint96[]) companyProductIds;

     modifier onlyOwner {
        require(msg.sender == companies[msg.sender].owner, "Only the owner of the company can call this function.");
        _;
    }
    
    event CompanyCreated(address indexed owner, string name, string registrationNumber);
    event ProductAdded(address indexed owner, string name, string description, uint96 productId);
    
    function createCompany(string memory _name) public returns (string memory) {
        require(bytes(_name).length > 0, "Company name cannot be empty.");
        bytes32 hash = sha256(abi.encodePacked(msg.sender, _name));
        string memory regNumber = bytes32ToString(hash);
        require(bytes(regNumber).length > 0, "Registration number cannot be empty.");
        require(bytes(companies[msg.sender].name).length == 0, "Company already exists.");
        companies[msg.sender] = Company(_name, regNumber, msg.sender);
        companyAddresses[regNumber] = msg.sender;
        emit CompanyCreated(msg.sender, _name, regNumber);
        return regNumber;
    }
    
    function createProduct(string memory _regNumber, string memory _name, string memory _description) public onlyOwner returns (uint96) {
        require(bytes(_regNumber).length > 0, "Registration number cannot be empty.");
        require(bytes(_name).length > 0, "Product name cannot be empty.");
        require(bytes(_description).length > 0, "Product description cannot be empty.");
        address companyAddress = companyAddresses[_regNumber];
        require(companyAddress != address(0), "Company does not exist.");
        require(companyAddress == msg.sender, "Only the company owner can add products.");
        uint96 productId = uint96(uint256(keccak256(abi.encodePacked(msg.sender, block.timestamp))));
        companyProducts[companyAddress][productId] = Product(_name, productId, _description);
        companyProductIds[companyAddress].push(productId);
        emit ProductAdded(msg.sender, _name, _description, productId);
        return productId;
    }

    function getProductById(uint96 _productId) public view returns (string memory, string memory) {
    require(_productId > 0, "Product ID must be greater than zero.");
    address companyAddress = address(0);
    uint256 len = companyProductIds[msg.sender].length;
    for (uint256 i = 0; i < len; i++) {
        uint96 productId = companyProductIds[msg.sender][i];
        if (productId == _productId) {
            companyAddress = msg.sender;
            break;
        }
    }
    require(companyAddress != address(0), "Product does not exist.");
    Product memory product = companyProducts[companyAddress][_productId];
    return (product.name, product.description);
    }

function bytes32ToString(bytes32 _bytes32) internal pure returns (string memory) {
    uint8 i = 0;
    bytes memory bytesArray = new bytes(64);
    for (i = 0; i < 32; i++) {
        uint8 value = uint8(_bytes32[i]);
        bytesArray[i * 2] = toByte(value / 16);
        bytesArray[(i * 2) + 1] = toByte(value % 16);
    }
    return string(bytesArray);
}

function toByte(uint8 _uint8) internal pure returns (bytes1) {
    if (_uint8 < 10) {
        return bytes1(_uint8 + 48);
    } else {
        return bytes1(_uint8 + 87);
    }
}
}