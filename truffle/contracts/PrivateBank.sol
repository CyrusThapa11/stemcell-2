// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract PrivateBank {
    
    struct client{
        address personid;
        uint starttime;
        uint endtime;
        bool ispresent;
        bool expired;
        string plan;
    }
    
    address verifier;
    uint private basecost;

    mapping (address => address) public DonorToPatient;

    client [100] public patients2;
    uint private  total;
    address public admin;

    constructor(){
        admin = msg.sender;
        basecost = .002 ether;
        total = 0;
    }

    function registerCandidate(address personID) public payable{
        
        require(msg.value > basecost , "You dont have sufficient credits");

        patients2[total].personid = personID;
        patients2[total].starttime = block.timestamp;
        patients2[total].ispresent = true;
        patients2[total].expired = false;
        patients2[total].endtime = block.timestamp + (14400 days);// this is 40 years
        total = total + 1;
    }

    function getMyRemainingTime(address id) public returns (uint){
        client storage curr = patients2[findIndex(id)];
        
        if(block.timestamp >= curr.endtime){
            curr.expired = true;
            return 0;
        }
        return (curr.endtime - block.timestamp);
    }

    function findIndex(address id) private view returns (uint) {
        for(uint i = 0 ;i < total; i++){
            if(patients2[i].personid == id){
                return i;
            }
        }        
        require((1==2) , "You have not registered with us !" );
        return (0);
    }

    function isPresent(address id)public view returns (bool){
        uint pos = findIndex(id);
        client memory curr = patients2[pos] ;
        return  curr.ispresent;
    }

    function expired(address id)public view returns (bool){        
        client storage curr = patients2[findIndex(id)];
        return  curr.expired;
    }
    function getContractBalance()public view returns(uint) {
        return address(this).balance;
    }

    function getAllClients()public returns(client[100] memory ) {
         for(uint i = 0 ;i < total; i++){
            if(patients2[i].starttime == 0){
                break;
            }
            getMyRemainingTime(patients2[i].personid);
        } 
        return patients2;
    }
    
    modifier verify{
        require(msg.sender == verifier,"You are not authorized to do this");
        _;  
    }
    modifier isadmin{
        require(msg.sender == admin,"You are not authorized to do this");
        _;  
    }

    function setVerifier(address verifieraddress)public isadmin {
        verifier = verifieraddress;
    }

    function verification(address id)public verify {
        uint pos = findIndex(id);
        client storage curr = patients2[pos];
        if(curr.ispresent == true){
            curr.ispresent = false;
        }
    }
    function gettimestamp() public view returns(uint) {
        return block.timestamp;
    }
    function transerferToClient2(address payable to)  public payable {        
        to.transfer(1*(10**16));
    }

    function transerferToClient(address payable to)  public payable returns(string memory) {        
        uint transfered = ((basecost)/(1 ether))*(10**16);
        to.transfer(transfered);
    return  "Transfered to the donor";
    }

    function transerferToClient_(address payable to) payable public returns(string memory) {        
        uint transfered = basecost;
        to.transfer(transfered );
    return  "testing transfer";
    }

    function mapDonorToPatient(address payable from ,address payable to)payable public {
        DonorToPatient[from] = to;
    }


  
}
