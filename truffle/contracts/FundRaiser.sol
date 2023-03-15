// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Funding {

    // handle event

    struct Request {
        address payable owner;
        string name;
        string description;
        string imgHash;
        string imgName;
        uint256 startTime; 
        uint256 deadline;      
        address payable []  contributers;
        uint256[] amoutTocontributers;
        uint256 fundraised;
        uint256 target;
        bool completed;
        bool withdrawn;
    }

    uint[] withdrawRequest;

    Request[] public Requests;
    uint256 totalrequest;

    function createRequest(
        string memory name,
        string memory description,
        string memory imgHash,
        string memory imgName,
        uint256 deadline,      
        uint256 target
        ) public {
        
        // CAN CREATE AN EVENT HERE INDEXED ON ADDRESS FOR 
        // FINDING ALL YOUR CONTRIBUTIONS

        Request memory currentRequest ;
        currentRequest.owner = payable(address(msg.sender));
        currentRequest.name = name;//owner
        currentRequest.description = description;
        currentRequest.imgHash = imgHash;
        currentRequest.imgName = imgName;
        currentRequest.startTime = block.timestamp;
        currentRequest.target = target* (1 ether) ;
        // currentRequest.amoutTocontributers = [];
        currentRequest.deadline = block.timestamp + deadline*(2 minutes) ;
        Requests.push(currentRequest);
        totalrequest += 1;    
             
    }

    function getAllRequests()public view returns( Request[] memory ){
        Request[] memory allreq = Requests;
        return allreq;
    }

    function transferToRequest(uint256 index) payable public {
        Request storage currentRequest = Requests[index];
        // currentRequest[owner].transfer(msg.value); DONT DO THIS HERE
        currentRequest.fundraised += (msg.value );
        currentRequest.contributers.push(payable(address(msg.sender)));
        currentRequest.amoutTocontributers.push(msg.value/(1 ether) );
        payable(address(this)).call{value:(msg.value)}("");
        // call{value: amount}("")
        // address _to = address(this);
        // payable(_to).transfer(msg.value);
    }

    function getContractBalance()public view returns(uint){
        return address(this).balance;
    }

    function withdrawAmount(uint _index) public payable {
        Request storage currentRequest = Requests[_index];
        require(currentRequest.fundraised >= currentRequest.target," Sorry you cannot withdraw your fund due to incompleteness in target amount ");
        require(block.timestamp <= currentRequest.deadline , " Sorry your fund expired ");
        require(currentRequest.withdrawn == false, " You have already withdrawn ");
        currentRequest.withdrawn = true;
        payable(address(currentRequest.owner)).transfer(currentRequest.target);
    }
    // GET REQUEST DATA 
    function getRequestDetails(uint256 _index) public view returns(Request memory){
        Request memory currentRequest = Requests[_index];
        return currentRequest;
    }

}