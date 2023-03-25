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
        uint256 price;
    }
    
    mapping (address => Company) companies;
    mapping (string => address) companyAddresses;
    mapping (address => mapping(uint96 => Product)) companyProducts;
    mapping (address => uint96[]) companyProductIds;
    
    event CompanyCreated(address indexed owner, string name, string registrationNumber);
    event ProductAdded(address indexed owner, string name, uint256 price, uint96 productId);
    
    modifier onlyOwner {
        require(msg.sender == companies[msg.sender].owner, "Only the owner of the company can call this function.");
        _;
    }
    
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
    
    function createProduct(string memory _regNumber, string memory _name, uint256 _price) public onlyOwner returns (uint96) {
        require(bytes(_regNumber).length > 0, "Registration number cannot be empty.");
        require(bytes(_name).length > 0, "Product name cannot be empty.");
        require(_price > 0, "Product price must be greater than zero.");
        address companyAddress = companyAddresses[_regNumber];
        require(companyAddress != address(0), "Company does not exist.");
        require(companyAddress == msg.sender, "Only the company owner can add products.");
        uint96 productId = uint96(uint256(keccak256(abi.encodePacked(msg.sender, block.timestamp))));
        companyProducts[companyAddress][productId] = Product(_name, productId, _price);
        companyProductIds[companyAddress].push(productId);
        emit ProductAdded(msg.sender, _name, _price, productId);
        return productId;
    }
    
    function getProductById(uint96 _productId) public view returns (string memory, uint256) {
        require(_productId > 0, "Product ID must be greater than zero.");
        Product memory product = companyProducts[msg.sender][_productId];
        require(bytes(product.name).length > 0, "Product does not exist.");
        return (product.name, product.price);
    }
    
    function getCompanyProductIds() public view returns (uint96[] memory, string[] memory) {
        address companyAddress = msg.sender;
        require(bytes(companies[companyAddress].name).length > 0, "Company does not exist.");
        
        uint96[] memory productIds = companyProductIds[companyAddress];
        string[] memory productNames = new string[](productIds.length);
    
        for (uint i = 0; i < productIds.length; i++) {
            uint96 productId = productIds[i];
            Product memory product = companyProducts[companyAddress][productId];
            productNames[i] = product.name;
        }
        
        return (productIds, productNames);
    }
    function getProductsByRegNumber(string memory _regNumber) public view returns (Product[] memory) {
    address companyAddress = companyAddresses[_regNumber];
    require(companyAddress != address(0), "Company does not exist.");
    
    uint96[] memory productIds = companyProductIds[companyAddress];
    Product[] memory products = new Product[](productIds.length);
    
    for (uint i = 0; i < productIds.length; i++) {
        uint96 productId = productIds[i];
        Product memory product = companyProducts[companyAddress][productId];
        products[i] = product;
    }
    
    return products;
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