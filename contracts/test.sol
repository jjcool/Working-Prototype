pragma solidity ^0.4.0 ;

// import "contracts/AIG.sol" ;
// import "contracts/BHSI.sol" ; 
// import "contracts/LIC.sol" ;

contract AIG {

	function check(uint premium) constant returns (uint count){
        
        if(premium < 60 ) count = 1 ;
        else count = 0 ;
        
        return count ;
        
    }
}

contract BHSI {

	function check(uint premium) constant returns (uint count){
        
        if(premium < 50 ) count = 1 ;
        else count = 0 ;
        
        return count ;
        
    } 
}

contract LIC {

	function check(uint premium) constant returns (uint count){
        
        if(premium < 40 ) count = 1 ;
        else count = 0 ;
        
        return count ;
        
    } 
}

contract test{
	
	policy[] public policies;
	policy[] public claims ;

	uint constant ShaLength = 40 ; 

	enum ResponseCodes {
		build,
		firm_order,
		quotation ,
		order_complete
	}
	
	event LOG_PolicyApplied(
	    uint policyId,
	 	address customer,
	 	string referenceId,
	 	uint premium,
	 	uint timeStamp,
	 	string status
	    );
	    
	event LOG_ClaimApplied(
	    uint policyId,
	 	address customer,
	 	uint id ,
	 	uint premium,
	 	uint timeStamp,
	 	string status
	    );


	struct policy{
		uint id;
		address customer;
		string reference_id;
		string carrier ; 
		string doc_url;
		uint timeStamp;
		uint premium ; 
		string status ; 
	}
	 mapping (address => uint[]) public customerPolicies;
	 mapping (address => uint[]) public customerClaims;
	 mapping (uint => uint) public counterPolicy ; 
     mapping (uint => uint) public counterClaim ; 



	function new_request(string reference_id, string carrier , uint premium) returns (bool) {

		uint policyId = policies.length++;
        customerPolicies[this].push(policyId);
        policy p = policies[policyId];
        
        p.customer = this ;
        p.timeStamp = now ;
        p.reference_id = reference_id ; 
        p.carrier = carrier ; 
        p.premium = premium ; 
        p.status = "Policy to be approved " ;
        counterPolicy[policyId] = 0 ;
        
        LOG_PolicyApplied(policyId , this , reference_id , p.premium , p.timeStamp,p.status);
        
        return true ; 
        
       

	}
	
	function new_claim(address addresss, uint id, uint premium) returns (bool) {

		uint claimId = claims.length++;
        customerClaims[this].push(claimId);
        policy p = claims[claimId];
        
        p.customer = addresss ;
        p.timeStamp = now ;
        p.id = id ;
        p.premium = premium ; 
        p.status = "Claim to be approved" ;
        counterClaim[claimId] = 0 ;
        
        LOG_ClaimApplied(claimId ,p.customer,id , p.premium , p.timeStamp,p.status);
        
        return true ; 
        
       

	}
    // uint k  = 100 ;
	function counterPolicys(uint _policyId) returns (string) {
		counterPolicy[_policyId] = counterPolicy[_policyId]+  1; 
		policy x = policies[_policyId] ;

		if (counterPolicy[_policyId]  > 2 ){
			x.status = "Policy approved";
		} 

		return x.status ;
	}
	
	function counterClaims(uint _claimId) returns (string) {
		counterClaim[_claimId] = counterClaim[_claimId]+  1; 
		policy x = claims[_claimId] ;

		if (counterClaim[_claimId]  > 3 ){
			x.status = "Claim approved";
		} 

		return x.status ;
	}
	
	
	function statusPolicy (uint _policyId) constant returns (string) {
		
		policy x = policies[_policyId] ;
		return x.status ;
	}

	function statusClaim (uint _claimId) constant returns (string) {
		
		policy x = claims[_claimId] ;
		return x.status ;
	}

	function status(/*address AIGContractAddress, address BHSIContractAddress , address LICContractAddress ,*/ uint amount) returns (string ) {
		//uint count = 0 ;
		uint _policyId = policies.length - 1  ;

		policy x = policies[_policyId] ;

		//AIG m = AIG(AIGContractAddress);
		AIG m = new AIG();
		counterPolicy[_policyId] = counterPolicy[_policyId] +  m.check(amount);

		//BHSI n = BHSI(BHSIContractAddress);
		BHSI n = new BHSI();
		counterPolicy[_policyId] = counterPolicy[_policyId] +  n.check(amount);

		//LIC o = LIC(LICContractAddress);
		LIC o = new LIC();
		counterPolicy[_policyId] = counterPolicy[_policyId] +  o.check(amount);

		if (counterPolicy[_policyId] > 1) x.status = "Policy approved" ;

		return x.status ; 
	}

	function premium(uint _policyId) constant returns (uint) { 

		policy x = policies[_policyId] ; 

		return x.premium ;


	 }

	function policyId() constant returns(uint){

		uint _policyId = policies.length - 1 ;
		return _policyId ;
	}

	function counterPolicy(uint _policyId) constant returns (uint){

		return counterPolicy[_policyId] ;
	}

}