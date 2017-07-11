
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"statusValidation","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"test","type":"string"}],"name":"stringReturn","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"counterClaim","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_claimId","type":"uint256"},{"name":"voterId","type":"string"}],"name":"counterClaims","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerPolicies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"policyId","type":"uint256"}],"name":"votePolicyInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"status","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"claimChecker","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"claim_policyID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"reference_id_policy","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerClaims","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"claimId","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"counterPolicy","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"reference_id","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"claims","outputs":[{"name":"id","type":"uint256"},{"name":"customer","type":"address"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"claimStatus","type":"string"},{"name":"AIG","type":"uint256"},{"name":"BHSI","type":"uint256"},{"name":"LIC","type":"uint256"},{"name":"timeStamp","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"status","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"premium","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"uint256"},{"name":"customer","type":"address"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"claimStatus","type":"string"},{"name":"AIG","type":"uint256"},{"name":"BHSI","type":"uint256"},{"name":"LIC","type":"uint256"},{"name":"timeStamp","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"status","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"claimId","type":"uint256"}],"name":"voteClaimInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"policyId","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"premium","type":"uint256"}],"name":"new_request","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"statusPolicy","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"new_claim","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"},{"name":"voterId","type":"string"}],"name":"counterPolicys","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"statusClaim","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"referenceId","type":"string"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"},{"indexed":false,"name":"status","type":"string"}],"name":"LOG_PolicyApplied","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"},{"indexed":false,"name":"status","type":"string"}],"name":"LOG_ClaimApplied","type":"event"}]');
VotingContract = web3.eth.contract(abi);
contractInstance = VotingContract.at('0x356dd665b662d76a69f9075f201f90e0062399ea');

var AIGContractAddress = "0xe5bb189406972f63f78eb7ebb6b642f3a326f954";
var BHSIContractAddress = "0x4f7879fac25587ea87415919ff793585688ec86e";
var LICContractAddress = "0x3db06be2ee7c51cc6b00b44f4883f5cbce81a6b3";

var Jayesh = "SomeString";
var policyID = 0 ;
var count = 0 ;

function newRequest(ref_id , carrier , premium ) {
   ref_id = $("#ref_id").val();
  carrier = $("#carrier").val();
  premium = $("#premium").val();

  if(ref_id != "" && carrier != "" && premium != "" ){
 
console.log("Policy Application started");
contractInstance.new_request(ref_id,carrier,premium , {from: web3.eth.accounts[0] , gas :'900000'})/*, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  }*/;

console.log("Policy application ended");

console.log("check Started") ;
//contractInstance.status(AIGContractAddress, BHSIContractAddress,LICContractAddress , premium , {from: web3.eth.accounts[0] , gas :'900000'})
//contractInstance.status( premium , {from: web3.eth.accounts[0] , gas :'900000'});
console.log("checkDone");

alert("Your Policy ID is : " + contractInstance.policyId().c) ; 
// txFilterPolicy.watch(function(err , result){

// 	if(err) throw err ;

// 	Jayesh = result.args.status;
// 	policyID = result.args.policyId;
// 	if(count == 0) {
// 	console.log("Status:" + Jayesh);
// 	alert("Policy no  :  " + policyID +"  Added for Approval ")
// 	//console.log(polciyID);
// 	$('<br><div class = "panel text" > <h2> Policy Details </h2> <br> Reference ID : ' + ref_id + "<br> carrier: "+ carrier +"<br> premium: " + premium +"<br> Status: " + Jayesh + "<br> policyID: "+policyID+"</div>").appendTo('.policy');

// 	count ++ ;

// }
// })

}

else { alert("Wrong Arguments") }

location.reload();

}
	

function statusPolicy(policyId1){
	policyId1 = $('#policyId1').val();
	
	alert("Status : " + contractInstance.statusPolicy(policyId1));
	location.reload();

}



function tableupdate(){
	//location.reload();
	var policies = contractInstance.policyId();
	var table = document.getElementById("someTable");
	var j = policies ;
	for (var i = 0 ; i <= policies ; i++) {
		//var j = 1 ;
		//var status = contractInstance.statusPolicy(i) ;
		var ref_id = contractInstance.reference_id_policy(i) ;
		//var counts = contractInstance.counterPolicy(i).c ;
		if($('#voterId').text() == "AIG") {
			var voted = contractInstance.votePolicyInfo(i)[0].c ;
			if (voted == 1) var votedS = "Yes" ;
			else var votedS = "No"
		}; 
		if($('#voterId').text() == "BHSI") {
			var voted = contractInstance.votePolicyInfo(i)[1].c ;
			if (voted == 1) var votedS = "Yes" ;
			else var votedS = "No"
		};
		if($('#voterId').text() == "LIC"){
			var voted = contractInstance.votePolicyInfo(i)[2].c ;
			if (voted == 1) var votedS = "Yes" ;
			else var votedS = "No"
		} ;
		// console.log(contractInstance.votePolicyInfo(i)[0].c) ;
		// console.log($('#voterId').text())
		var premium = contractInstance.premium(i) ;
		//var ref_id = contractInstance.reference_id(i) ;
		//console.log("Status of polciy id " + i + " is : " + status); 

		// var row = table.insertRow(1);
  //   	var cell1 = row.insertCell(0);
  //   	var cell2 = row.insertCell(1);
  //   	var cell3 = row.insertCell(2);
  //   	var cell4 = row.insertCell(3);
  //   	var cell5 = row.insertCell(4);
  //   	var cell6 =row.insertCell(5);

  //   	cell1.innerHTML = j;
  //   	cell2.innerHTML = i;
  //   	cell3.innerHTML = ref_id ;
  //   	cell4.innerHTML = premium;
  //   	cell5.innerHTML = votedS;
  //   	cell6.innerHTML = status;

  //   	j--;
 //  if(status == "Policy approved" ) $('#someTable > tbody:last-child').prepend('<tr class="success" ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td><td>' + votedS +'</td><td>'+status+'</td></tr>') ;
 //  else {
 //  	if(votedS == "Yes"){ 
	// $('#someTable > tbody:last-child').prepend('<tr class = "info"><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td><td>' + votedS +'</td><td>'+status+'</td></tr>') ;
 //  	}

 //  	else {
 //  		$('#someTable > tbody:last-child').prepend('<tr class="danger" ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td><td>' + votedS +'</td><td>'+status+'</td></tr>') ;
 //  	}

 //  }	
 	$('#someTable > tbody:last-child').prepend('<tr ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td></tr>') ;
	j--;
		//$('<tbody><tr><td>'+  j + "</td><td>" + i +"</td><td>" + "Same"  + "</td><td>" + status + "</td></tr></tbody>").appendTo('.tablesome');
		//$('<div class = panel > <h2>'+  i + ' </h2 > <br> <h4>' + status + '</h4></div >').appendTo('.test');
	}
	location.reload();

}



$(document).ready(function(){
var policies = contractInstance.policyId();
	var table = document.getElementById("someTable");
	var j = policies ;
	for (var i = 0 ; i <= policies ; i++) {
		//var j = 1 ;
		//var status = contractInstance.statusPolicy(i) ;
		var ref_id = contractInstance.reference_id_policy(i) ;
		//var counts = contractInstance.counterPolicy(i).c ;
		if($('#voterId').text() == "AIG") {
			var voted = contractInstance.votePolicyInfo(i)[0].c ;
			if (voted == 1) var votedS = "Yes" ;
			else var votedS = "No"
		}; 
		if($('#voterId').text() == "BHSI") {
			var voted = contractInstance.votePolicyInfo(i)[1].c ;
			if (voted == 1) var votedS = "Yes" ;
			else var votedS = "No"
		};
		if($('#voterId').text() == "LIC"){
			var voted = contractInstance.votePolicyInfo(i)[2].c ;
			if (voted == 1) var votedS = "Yes" ;
			else var votedS = "No"
		} ;
		// console.log(contractInstance.votePolicyInfo(i)[0].c) ;
		// console.log($('#voterId').text())
		var premium = contractInstance.premium(i) ;
		//var ref_id = contractInstance.reference_id(i) ;
		//console.log("Status of polciy id " + i + " is : " + status); 

		// var row = table.insertRow(1);
  //   	var cell1 = row.insertCell(0);
  //   	var cell2 = row.insertCell(1);
  //   	var cell3 = row.insertCell(2);
  //   	var cell4 = row.insertCell(3);
  //   	var cell5 = row.insertCell(4);
  //   	var cell6 =row.insertCell(5);

  //   	cell1.innerHTML = j;
  //   	cell2.innerHTML = i;
  //   	cell3.innerHTML = ref_id ;
  //   	cell4.innerHTML = premium;
  //   	cell5.innerHTML = votedS;
  //   	cell6.innerHTML = status;

  //   	j--;
 //  if(status == "Policy approved" ) $('#someTable > tbody:last-child').prepend('<tr class="success" ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td><td>' + votedS +'</td><td>'+status+'</td></tr>') ;
 //  else {
 //  	if(votedS == "Yes"){ 
	// $('#someTable > tbody:last-child').prepend('<tr class = "info"><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td><td>' + votedS +'</td><td>'+status+'</td></tr>') ;
 //  	}

 //  	else {
 //  		$('#someTable > tbody:last-child').prepend('<tr class="danger" ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td><td>' + votedS +'</td><td>'+status+'</td></tr>') ;
 //  	}

 //  }	
 	$('#someTable > tbody:last-child').prepend('<tr ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td></tr>') ;
	j--;
		//$('<tbody><tr><td>'+  j + "</td><td>" + i +"</td><td>" + "Same"  + "</td><td>" + status + "</td></tr></tbody>").appendTo('.tablesome');
		//$('<div class = panel > <h2>'+  i + ' </h2 > <br> <h4>' + status + '</h4></div >').appendTo('.test');
	}
	})



