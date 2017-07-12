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

    function claimCheck(string reference_id) constant returns (uint countClaim){
    	if(keccak256(reference_id) == keccak256("Car Accident") || keccak256(reference_id) == keccak256("Home Fire")) countClaim = 1 ;
    	else countClaim = 0 ;

    	return countClaim ;

    }
}

contract BHSI {

	function check(uint premium) constant returns (uint count){
        
        if(premium < 50 ) count = 1 ;
        else count = 0 ;
       
        return count ;
        
    } 

    function claimCheck(string reference_id) constant returns (uint countClaim){
    	if(keccak256(reference_id) == keccak256("Car Accident") || keccak256(reference_id) == keccak256("Office Fire")) countClaim = 1 ;
    	else countClaim = 0 ;

    	return countClaim ;

    }
}

contract LIC {

	function check(uint premium) constant returns (uint count){
        
        if(premium < 40 ) count = 1 ;
        else count = 0 ;
        
        return count ;
        
    } 

    function claimCheck(string reference_id) constant returns (uint countClaim){
    	if(keccak256(reference_id) == keccak256("Office Fire") || keccak256(reference_id) == keccak256("Hit and Run")) countClaim = 1 ;
    	else countClaim = 0 ;

    	return countClaim ;

    }
}

contract test{
	
	policy[] public policies;
	claimstruct[] public claims ;

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
		string claimStatus;
		uint AIG ;
		uint BHSI ;
		uint LIC ;
		uint timeStamp;
		uint premium ; 
		string status ; 
	}

	struct claimstruct{

		uint id;
		address customer;
		string reference_id;
		string carrier ; 
		string claimStatus;
		uint AIG ;
		uint BHSI ;
		uint LIC ;
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
        p.claimStatus = "Not Applied" ;
        p.status = "Policy approved " ;
        p.AIG = 0 ;
        p.BHSI = 0 ; 
        p.LIC = 0 ;
        counterPolicy[policyId] = 0 ;
        
        LOG_PolicyApplied(policyId , this , reference_id , p.premium , p.timeStamp,p.status);
        
        return true ; 
        
       

	}

	function new_claim(uint _policyId) returns(bool){
		policy x = policies[_policyId] ;
		//if(keccak256(x.claimStatus) != keccak256("Applied for claim") && keccak256(x.status) == keccak256("Policy approved")){
				uint claimId = claims.length++;
				customerClaims[this].push(claimId);
				claimstruct y = claims[claimId];

				y.customer = x.customer ;
		        y.id = _policyId ;
		        y.reference_id = x.reference_id ; 
		        y.carrier = x.carrier ; 
		        y.premium = x.premium * 3  ; 
		        y.status = "Claim to be approved " ;
		        y.AIG = 0 ;
		        y.BHSI = 0 ; 
		        y.LIC = 0 ;
		        counterClaim[claimId] = 0 ;
		        x.claimStatus = "Applied for claim" ;
		        statusValidation(claimId);
		        //stringReturn("Claim Added") ;
		        return true;
		// 	//}
		// //else {stringReturn("Already Applied for Claim or Policy not approved") ;}
		// return false ;
	}
	
	function claimChecker (uint _policyId) constant returns(uint){
		policy x = policies[_policyId] ;
		if(keccak256(x.claimStatus) != keccak256("Applied for claim") ) return 1 ; 
		else return 0 ; 
	}
	// function new_claim(address addresss, uint id, uint premium) returns (bool) {

	// 	uint _policyId = claims.length++;
 //        customerClaims[this].push(_policyId);
 //        policy p = claims[_policyId];
        
 //        p.customer = addresss ;
 //        p.timeStamp = now ;
 //        p.id = id ;
 //        p.premium = premium ; 
 //        p.status = "Claim to be approved" ;
 //        counterClaim[_policyId] = 0 ;
        
 //        LOG_ClaimApplied(_policyId ,p.customer,id , p.premium , p.timeStamp,p.status);
        
 //        return true ; 
        
       

	// }
    // uint k  = 100 ;
	function counterPolicys(uint _policyId , string voterId) returns (string) {
		//counterPolicy[_policyId] = counterPolicy[_policyId]+  1; 
		policy x = policies[_policyId] ;
		
		if(keccak256(voterId) == keccak256("AIG") ){
			if(x.AIG != 1 ) {
				counterPolicy[_policyId] = counterPolicy[_policyId]+  1; 
				x.AIG = 1 ;
			}
		}

		if(keccak256(voterId) == keccak256("BHSI") ){
			if(x.BHSI != 1 ) {
				counterPolicy[_policyId] = counterPolicy[_policyId]+  1; 
				x.BHSI = 1 ;
			}
		}

		if(keccak256(voterId) == keccak256("LIC")){
			if(x.LIC != 1 ) {
				counterPolicy[_policyId] = counterPolicy[_policyId]+  1; 
				x.LIC = 1 ;
			}
		}

		if (counterPolicy[_policyId]  > 1 ){
			x.status = "Policy approved";
		} 

		return x.status ;
	}
	
	function counterClaims(uint _claimId , string voterId) returns (string) {

		claimstruct x = claims[_claimId] ;
		
		if(keccak256(voterId) == keccak256("AIG")){
			if(x.AIG != 1 ) {
				counterClaim[_claimId] = counterClaim[_claimId]+  1; 
				x.AIG = 1 ;
			}
		}

		if(keccak256(voterId) == keccak256("BHSI") ){
			if(x.BHSI != 1 ) {
				counterClaim[_claimId] = counterClaim[_claimId]+  1; 
				x.BHSI = 1 ;
			}
		}

		if(keccak256(voterId) == keccak256("LIC") ){
			if(x.LIC != 1 ) {
				counterClaim[_claimId] = counterClaim[_claimId]+  1; 
				x.LIC = 1 ;
			}
		}

		if (counterClaim[_claimId]  > 1 ){
			x.status = "Claim approved";
		} 

		return x.status ;


	}
	// function counterClaims(uint _claimId) returns (string) {
	// 	counterClaim[_claimId] = counterClaim[_claimId]+  1; 
	// 	policy x = claims[_claimId] ;

	// 	if (counterClaim[_claimId]  > 3 ){
	// 		x.status = "Claim approved";
	// 	} 

	// 	return x.status ;
	// }
	
	
	function statusPolicy (uint _policyId) constant returns (string) {
		
		policy x = policies[_policyId] ;
		return x.status ;
	}

	function statusClaim (uint _claimId) constant returns (string) {
		
		claimstruct x = claims[_claimId] ;
		return x.status ;
	}

	function status(/*address AIGContractAddress, address BHSIContractAddress , address LICContractAddress ,*/ uint amount) returns (string ) {
		//uint count = 0 ;
		uint _policyId = policies.length - 1  ;

		policy x = policies[_policyId] ;

		//AIG m = AIG(AIGContractAddress);
		AIG m = new AIG();
		counterPolicy[_policyId] = counterPolicy[_policyId] +  m.check(amount);

		if(m.check(amount) == 1 ) x.AIG = 1 ;

		//BHSI n = BHSI(BHSIContractAddress);
		BHSI n = new BHSI();
		counterPolicy[_policyId] = counterPolicy[_policyId] +  n.check(amount);
		if(n.check(amount) == 1 ) x.BHSI = 1 ;

		//LIC o = LIC(LICContractAddress);
		LIC o = new LIC();
		counterPolicy[_policyId] = counterPolicy[_policyId] +  o.check(amount);
		if(o.check(amount) == 1 ) x.LIC = 1 ;

		if (counterPolicy[_policyId] > 1) x.status = "Policy approved" ;

		return x.status ; 
	}

	function statusValidation(/*address AIGContractAddress, address BHSIContractAddress , address LICContractAddress ,*/ uint _policyId) returns (string) {
		//uint count = 0 ;
	
		claimstruct x = claims[_policyId] ;
		string reference_id = x.reference_id ;

		//AIG m = AIG(AIGContractAddress);
		AIG m = new AIG();
		counterClaim[_policyId] = counterClaim[_policyId] +  m.claimCheck(reference_id);

		if(m.claimCheck(reference_id) == 1 ) x.AIG = 1 ;

		//BHSI n = BHSI(BHSIContractAddress);
		BHSI n = new BHSI();
		counterClaim[_policyId] = counterClaim[_policyId] +  n.claimCheck(reference_id);
		if(n.claimCheck(reference_id) == 1 ) x.BHSI = 1 ;

		//LIC o = LIC(LICContractAddress);
		LIC o = new LIC();
		counterClaim[_policyId] = counterClaim[_policyId] +  o.claimCheck(reference_id);
		if(o.claimCheck(reference_id) == 1 ) x.LIC = 1 ;

		if (counterClaim[_policyId] > 1) x.status = "Claim approved" ;

		return x.status ; 
	}

	function premium(uint _policyId) constant returns (uint) { 

		policy x = policies[_policyId] ; 

		return x.premium ;


	 }
	 
	 function reference_id_policy(uint _policyId) constant returns (string){
	 	policy x = policies[_policyId] ; 

		return x.reference_id ;

	 }
	 function reference_id(uint _claimId) constant returns (string) { 

		claimstruct x = claims[_claimId] ; 

		return x.reference_id ;


	 }

	 function claim_policyID(uint _claimId) constant returns (uint) { 

		claimstruct x = claims[_claimId] ; 

		return x.id ;


	 }

	function policyId() constant returns(uint){

		uint _policyId = policies.length - 1 ;
		return _policyId ;
	}

	function claimId() constant returns(uint){

		uint _claimId = claims.length - 1 ;
		return _claimId ;
	}


	function counterPolicy(uint _policyId) constant returns (uint){

		return counterPolicy[_policyId] ;
	}

	function counterClaim(uint _policyId) constant returns (uint){

		return counterClaim[_policyId] ;
	}

	function stringReturn(string test) constant returns (string){
		return test ;
	}

	function votePolicyInfo(uint policyId) constant returns (uint ,uint , uint){

		policy x = policies[policyId] ; 

		return (x.AIG,x.BHSI,x.LIC) ;
	}

	function voteClaimInfo(uint claimId) constant returns (uint ,uint , uint){

		claimstruct x = claims[claimId] ; 

		return (x.AIG,x.BHSI,x.LIC) ;
	}

}