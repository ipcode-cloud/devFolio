// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContactMessage {
    struct Message {
        address sender;
        string name;
        string email;
        string message;
        uint256 timestamp;
    }

    Message[] public messages;
    address public owner;

    event MessageSent(address indexed sender, string name, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function sendMessage(string memory _name, string memory _email, string memory _message) public {
        messages.push(Message({
            sender: msg.sender,
            name: _name,
            email: _email,
            message: _message,
            timestamp: block.timestamp
        }));

        emit MessageSent(msg.sender, _name, block.timestamp);
    }

    function getMessages() public view onlyOwner returns (Message[] memory) {
        return messages;
    }

    function getMessageCount() public view returns (uint256) {
        return messages.length;
    }
}
