pragma solidity ^0.4.0;
contract LIC {
    
    function check(uint premium) constant returns (uint count){
        
        if(premium < 50 ) count = 1 ;
        else count = 0 ;
        
        return count ;
        
    }
}