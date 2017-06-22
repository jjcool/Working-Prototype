pragma solidity ^0.4.0 ;

contract test{
	
	policy[] public policies;

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
	 	uint timeStamp
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
	 mapping (uint => uint) public counter ; 


	function new_request(string reference_id, string carrier , uint premium) returns (bool) {

		uint policyId = policies.length++;
        customerPolicies[this].push(policyId);
        policy p = policies[policyId];
        
        p.customer = this ;
        p.timeStamp = now ;
        p.reference_id = reference_id ; 
        p.carrier = carrier ; 
        p.premium = premium ; 
        p.status = "To be approved " ;
        counter[policyId] = 0 ;
        
        LOG_PolicyApplied(policyId , this , reference_id , p.premium , p.timeStamp);
        
        return true ; 
        
       

	}
    // uint k  = 100 ;
	function counters(uint _policyId) returns (string) {

		
		counter[_policyId] = counter[_policyId]+  1; 
		policy x = policies[_policyId] ;

		if (counter[_policyId]  > 3 ){
			x.status = "approved";
		} 

		return x.status ;
	}


}