web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"statusValidation","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"test","type":"string"}],"name":"stringReturn","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"counterClaim","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_claimId","type":"uint256"},{"name":"voterId","type":"string"}],"name":"counterClaims","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerPolicies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"policyId","type":"uint256"}],"name":"votePolicyInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"claimChecker","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"claim_policyID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"reference_id_policy","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerClaims","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"claimId","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"counterPolicy","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"reference_id","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"claims","outputs":[{"name":"id","type":"uint256"},{"name":"customer","type":"address"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"claimStatus","type":"string"},{"name":"AIG","type":"uint256"},{"name":"BHSI","type":"uint256"},{"name":"LIC","type":"uint256"},{"name":"timeStamp","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"status","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"premium","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"uint256"},{"name":"customer","type":"address"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"claimStatus","type":"string"},{"name":"AIG","type":"uint256"},{"name":"BHSI","type":"uint256"},{"name":"LIC","type":"uint256"},{"name":"timeStamp","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"status","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"claimId","type":"uint256"}],"name":"voteClaimInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"policyId","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"premium","type":"uint256"}],"name":"new_request","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"statusPolicy","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"new_claim","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"statusClaim","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"referenceId","type":"string"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"},{"indexed":false,"name":"status","type":"string"}],"name":"LOG_PolicyApplied","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"},{"indexed":false,"name":"status","type":"string"}],"name":"LOG_ClaimApplied","type":"event"}]');
VotingContract = web3.eth.contract(abi);
contractInstance = VotingContract.at('0xa6b0b2df0700ced66ccfb3a3d139f728599c5e32');

var AIGContractAddress = "0xe5bb189406972f63f78eb7ebb6b642f3a326f954";
var BHSIContractAddress = "0x4f7879fac25587ea87415919ff793585688ec86e";
var LICContractAddress = "0x3db06be2ee7c51cc6b00b44f4883f5cbce81a6b3";

var txFilterPolicy= contractInstance.LOG_PolicyApplied();
var txFilterClaim = contractInstance.LOG_ClaimApplied();
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

}
	
// function votePolicy(policyId, voterId){
// 	policyId = $('#policyId').val();
// 	voterId = $('#voterId').text();
	
// 	console.log(voterId);
// 	if(policyId != ""){

		
// 				console.log("Voting Started");
// 				contractInstance.counterPolicys(policyId , voterId, {from: web3.eth.accounts[0] , gas :'900000'});
// 				alert("Voted Counted for Policy ID :  " + policyId )
// 				console.log("Voting Ended");
// 				// console.log(validation[0][policyId]);
// 				// validation[0][policyId] = 1 ; 
// 				// console.log(validation[0][policyId]);
			
// 	}
// 	else alert("Empty Credentials");

// 	location.reload();
// }

function voteClaim(claimId, voterId){
	claimId = $('#claimId').val();
	voterId = $('#voterId').text();
	
	console.log(voterId);
	if(claimId != ""){

		
				console.log("Voting Started");
				contractInstance.counterClaims(claimId , voterId, {from: web3.eth.accounts[0] , gas :'900000'});
				alert("Voted Counted for Claim ID :  " + claimId )
				console.log("Voting Ended");
				// console.log(validation[0][policyId]);
				// validation[0][policyId] = 1 ; 
				// console.log(validation[0][policyId]);
			
	}
	else alert("Empty Credentials");

	location.reload();
}

function statusPolicy(policyId1){
	policyId1 = $('#policyId1').val();
	
	alert("Status : " + contractInstance.statusPolicy(policyId1));

}

function newClaim(claimId) {
	//location.reload();
  //  address = $("#address").val();
  // id = $("#id").val();
  // premium = $("#premium1").val();
  claimId = $('#claimId').val();
  var check = contractInstance.claimChecker(claimId).c ;
	if(check == 1 ){
			console.log("Claim started");
			contractInstance.new_claim(claimId, {from: web3.eth.accounts[0] , gas :'900000'})
			alert("Claim Submitted") ;
			console.log("Claim made");
		}

	else alert("Already Applied for Claim or Policy not approved")
			//console.log(contractInstance.new_claim(claimId, {from: web3.eth.accounts[0] , gas :'900000'}));

			//alert("Your Claim ID is : " + contractInstance.claimId().c) ;
			/*, function() {
			    let div_id = candidates[candidateName];
			    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
			  }*/;
			//$('<br><div class = "panel" > <h2> reference id ' + address + "</h2><br> carrier: "+ id +"<br> premium: " + premium +"</div>").appendTo('.claim');
			//$('#table').append('<tr><th text = "ref_id"></th><td>more data</td><td>mosre data</td></tr>');
			// var id =  contractInstance.claimId().c;
			// console.log(contractInstance.claimId().c)
			// contractInstance.statusValidation(id, {from: web3.eth.accounts[0] , gas :'900000'});
			//console.log("Claim made");
			//$('<br><div class = "panel text" > <h2> Claim Details </h2> <br> Address : ' + address + "<br> ID :  "+ id +"<br> Premium : " + premium +"</div>").appendTo('.claim');

			// txFilterClaim.watch(function(err , result){

			// 	if(err) throw err ;

			// 	Jayesh = result.args.status;
			// 	claimID = result.args.policyId;
			// 		if(count == 0) {
			// 		console.log("Status:" + Jayesh);
			// 		alert("Claim no  :  " + claimID +"  Added for Approval ")
			// 		//console.log(polciyID);
			// 		$('<br><div class = "panel text" > <h2> Claim Details </h2> <br> Address : ' + address + "<br> ID :  "+ id +"<br> Premium : " + premium +"<br> Status : " + Jayesh + "<br> Claim ID : "+claimID+"</div>").appendTo('.claim');

			// 		count ++ ;
			// 		}
			// 	})
	//}
	//else { console.log("wrong") }
}

// function voteClaim(claimId, voterId1){

// 	claimId = $('#claimId').val();
// 	voterId = $('#voterId1').val();
// 	if(voterId == "Saurabh" || voterId == "Pankaj" || voterId == "Jayesh" || voterId == "Parmod"){
// 	console.log("Voting started");
// 	contractInstance.counterClaims(claimId , {from: web3.eth.accounts[0] , gas :'900000'});
// 	alert("Voted Counted for Claim ID :  " + claimId )
// 	console.log("Voting ended");
// 	}
// 	else alert("Wrong VoterID");
// }

function statusClaim(claimId){
	claimId1 = $('#claimId1').val();
	// if(contractInstance.statusClaim(claimId1) == "Claim approved") {
	// 	console.log("Status:" + contractInstance.statusClaim(claimId1))

	// 	var address = prompt("Please enter your address", "web3.eth.coinbase");
	// 	//console.log(web3.eth.getBalance(web3.eth.accounts[1]).toNumber(),"ether");
	// 	web3.eth.sendTransaction({from:web3.eth.coinbase, to:address, value: web3.toWei(0.5, "ether")});
	// 	alert("0.5 Ether sent to " + address);
	// 	//console.log(web3.eth.getBalance(web3.eth.accounts[0]).toNumber());
	// }
	 alert(contractInstance.statusClaim(claimId1));
}


$( function() {
    $( "#dialog" ).dialog({
    	minWidth: 500,
    	minHeight: 200 ,
      autoOpen: false,
      show: {
        effect: "blind",

        duration: 100
      },
      hide: {
        
        duration: 100
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

// function tableupdate(){

// 	var table = document.getElementById("someTable");
//     // var row = table.insertRow(0);
//     // var cell1 = row.insertCell(0);
//     // var cell2 = row.insertCell(1);
//     // cell1.innerHTML = "NEW CELL1";
//     // cell2.innerHTML = "NEW CELL2";
// 	var policies = contractInstance.policyId();
// 	var j = policies ;
// 	for (var i = 0; i < policies ; i++) {
		
// 		var status = contractInstance.statusPolicy(i) ;
// 		console.log("Status of polciy id " + i + " is : " + status); 

// 		// var row = table.insertRow(1);
//   //   	var cell1 = row.insertCell(0);
//   //   	var cell2 = row.insertCell(1);
//   //   	var cell3 = row.insertCell(2);
//   //   	var cell4 = row.insertCell(3);
//   //   	cell1.innerHTML = j;
//   //   	cell2.innerHTML = i;
//   //   	cell3.innerHTML = 35;
//   //   	cell4.innerHTML = status;
//   //   	j--;


// 		//$('<tbody><tr><td>'+  j + "</td><td>" + i +"</td><td>" + "Same"  + "</td><td>" + status + "</td></tr></tbody>").appendTo('.tablesome');
// 		//$('<div class = panel > <h2>'+  i + ' </h2 > <br> <h4>' + status + '</h4></div >').appendTo('.test');
// 	}

// }

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
		// if($('#voterId').text() == "AIG") {
		// 	var voted = contractInstance.votePolicyInfo(i)[0].c ;
		// 	if (voted == 1) var votedS = "Yes" ;
		// 	else var votedS = "No"
		// }; 
		// if($('#voterId').text() == "BHSI") {
		// 	var voted = contractInstance.votePolicyInfo(i)[1].c ;
		// 	if (voted == 1) var votedS = "Yes" ;
		// 	else var votedS = "No"
		// };
		// if($('#voterId').text() == "LIC"){
		// 	var voted = contractInstance.votePolicyInfo(i)[2].c ;
		// 	if (voted == 1) var votedS = "Yes" ;
		// 	else var votedS = "No"
		// } ;
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
 $('#someTable > tbody:last-child').prepend('<tr class="success" ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td></tr>') ;
	j--;//$('<tbody><tr><td>'+  j + "</td><td>" + i +"</td><td>" + "Same"  + "</td><td>" + status + "</td></tr></tbody>").appendTo('.tablesome');
	location.reload();	//$('<div class = panel > <h2>'+  i + ' </h2 > <br> <h4>' + status + '</h4></div >').appendTo('.test');
	}

}

function tableupdateclaim(){
	//location.reload();
	var claims = contractInstance.claimId();
	var table = document.getElementById("claimTable");
	var k = claims;
	for (var i = 0 ; i <= claims ; i++) {
		//var j = 1 ;
		var status = contractInstance.statusClaim(i) ;
		var id = contractInstance.claim_policyID(i);
		//var counts = contractInstance.counterClaim(i).c ;
		var ref_id = contractInstance.reference_id(i) ;
		if($('#voterId').text() == "AIG") {
			var voted = contractInstance.voteClaimInfo(i)[0].c ;
			console.log(voted) ;
			if (voted == 1) var votedSC = "Yes" ;
			else var votedSC = "No"
		}; 
		if($('#voterId').text() == "BHSI") {
			var voted = contractInstance.voteClaimInfo(i)[1].c ;
			console.log(voted) ;
			if (voted == 1) var votedSC = "Yes" ;
			else var votedSC = "No"
		};
		if($('#voterId').text() == "LIC"){
			var voted = contractInstance.voteClaimInfo(i)[2].c ;
			console.log(voted) ;
			if (voted == 1) var votedSC = "Yes" ;
			else var votedSC = "No"
		} ;
		//console.log("Status of polciy id " + i + " is : " + status); 

		// var row = table.insertRow(1);
  //   	var cell1 = row.insertCell(0);
  //   	var cell2 = row.insertCell(1);
  //   	var cell3 = row.insertCell(2);
  //   	var cell4 = row.insertCell(3);
  //   	var cell5 = row.insertCell(4);
  //   	var cell6 = row.insertCell(5);
  //   	cell1.innerHTML = j;
  //   	cell2.innerHTML = i;
  //   	cell3.innerHTML = id;
  //   	cell4.innerHTML = ref_id;
  //   	cell5.innerHTML = votedS;
  //   	cell6.innerHTML = status;
  //   	j--;

 if(status == "Claim approved") $('#claimTable > tbody:last-child').prepend('<tr class="success" ><td>' + k + '</td><td>' + i + '</td><td>' + id + '</td><td>' + ref_id + '</td><td>' + votedSC +'</td><td>'+status+'</td></tr>') ;
  else {
  if(votedSC = "Yes") $('#claimTable > tbody:last-child').prepend('<tr class = "info"><td>' + k + '</td><td>' + i + '</td><td>' + id + '</td><td>' + ref_id + '</td><td>' + votedSC +'</td><td>'+status+'</td></tr>') ;		//$('<tbody><tr><td>'+  j + "</td><td>" + i +"</td><td>" + "Same"  + "</td><td>" + status + "</td></tr></tbody>").appendTo('.tablesome');
  else $('#claimTable > tbody:last-child').prepend('<tr class = "danger"><td>' + k + '</td><td>' + i + '</td><td>' + id + '</td><td>' + ref_id + '</td><td>' + votedSC +'</td><td>'+status+'</td></tr>') ;

}	k-- ;	//$('<div class = panel > <h2>'+  i + ' </h2 > <br> <h4>' + status + '</h4></div >').appendTo('.test');
	location.reload();}

}

function login(loginId){
	loginId = $('#loginId').val();

	if(loginId == "User"){
    window.location.href = 'index_user.html';
    return false; 
	}

    if(loginId == "AIG"){
    window.location.href = 'index_AIG.html';
    return false; 
	}

	if(loginId == "BHSI"){
    window.location.href = 'index_BHSI.html';
    return false; 
	}

	if(loginId == "LIC"){
    window.location.href = 'index_LIC.html';
    return false; 
	}
}


// function countersd(_policyId){

// 	_policyId = $("#policyId").val() ;
// 	console.log(contractInstance.counterPolicy(_policyId).c) ;
// }

$(document).ready(function(){

	var policies = contractInstance.policyId();
	var table = document.getElementById("someTable");
	var j = policies ;
	for (var i = 0 ; i <= policies ; i++) {
		//var j = 1 ;
		//var status = contractInstance.statusPolicy(i) ;
		var ref_id = contractInstance.reference_id_policy(i) ;
		//var counts = contractInstance.counterPolicy(i).c ;
		// if($('#voterId').text() == "AIG") {
		// 	var voted = contractInstance.votePolicyInfo(i)[0].c ;
		// 	if (voted == 1) var votedS = "Yes" ;
		// 	else var votedS = "No"
		// }; 
		// if($('#voterId').text() == "BHSI") {
		// 	var voted = contractInstance.votePolicyInfo(i)[1].c ;
		// 	if (voted == 1) var votedS = "Yes" ;
		// 	else var votedS = "No"
		// };
		// if($('#voterId').text() == "LIC"){
		// 	var voted = contractInstance.votePolicyInfo(i)[2].c ;
		// 	if (voted == 1) var votedS = "Yes" ;
		// 	else var votedS = "No"
		// } ;
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
 $('#someTable > tbody:last-child').prepend('<tr class="success" ><td>' + j + '</td><td>' + i + '</td><td>' + ref_id + '</td><td>' + premium + '</td></tr>') ;	
  j--		//$('<tbody><tr><td>'+  j + "</td><td>" + i +"</td><td>" + "Same"  + "</td><td>" + status + "</td></tr></tbody>").appendTo('.tablesome');
		//$('<div class = panel > <h2>'+  i + ' </h2 > <br> <h4>' + status + '</h4></div >').appendTo('.test');
	}

	var claims = contractInstance.claimId();
	var table = document.getElementById("claimTable");
	var k = claims ;
	for (var i = 0 ; i <= claims ; i++) {
		//var j = 1 ;
		var status = contractInstance.statusClaim(i) ;
		var id = contractInstance.claim_policyID(i);
		//var counts = contractInstance.counterClaim(i).c ;
		var ref_id = contractInstance.reference_id(i) ;
		if($('#voterId').text() == "AIG") {
			var voted = contractInstance.voteClaimInfo(i)[0].c ;
			//console.log(voted) ;
			if (voted == 1) var votedSC = "Yes" ;
			else var votedSC = "No"
		}; 
		if($('#voterId').text() == "BHSI") {
			var voted = contractInstance.voteClaimInfo(i)[1].c ;
			//console.log(voted) ;
			if (voted == 1) var votedSC = "Yes" ;
			else var votedSC = "No"
		};
		if($('#voterId').text() == "LIC"){
			var voted = contractInstance.voteClaimInfo(i)[2].c ;
			//console.log(voted) ;
			if (voted == 1) var votedSC = "Yes" ;
			else var votedSC = "No"
		} ;
		//console.log("Status of polciy id " + i + " is : " + status); 

		// var row = table.insertRow(1);
  //   	var cell1 = row.insertCell(0);
  //   	var cell2 = row.insertCell(1);
  //   	var cell3 = row.insertCell(2);
  //   	var cell4 = row.insertCell(3);
  //   	var cell5 = row.insertCell(4);
  //   	var cell6 = row.insertCell(5);
  //   	cell1.innerHTML = j;
  //   	cell2.innerHTML = i;
  //   	cell3.innerHTML = id;
  //   	cell4.innerHTML = ref_id;
  //   	cell5.innerHTML = votedS;
  //   	cell6.innerHTML = status;
  //   	j--;
  console.log(web3.eth.getBlock(31 ));
 if(status == "Claim approved") $('#claimTable > tbody:last-child').prepend('<tr class="success" ><td>' + k + '</td><td>' + i + '</td><td>' + id + '</td><td>' + ref_id + '</td><td>' + votedSC +'</td><td>'+status+'</td></tr>') ;
  else {
  if(votedSC = "Yes") $('#claimTable > tbody:last-child').prepend('<tr class = "info"><td>' + k + '</td><td>' + i + '</td><td>' + id + '</td><td>' + ref_id + '</td><td>' + votedSC +'</td><td>'+status+'</td></tr>') ;		//$('<tbody><tr><td>'+  j + "</td><td>" + i +"</td><td>" + "Same"  + "</td><td>" + status + "</td></tr></tbody>").appendTo('.tablesome');
  else $('#claimTable > tbody:last-child').prepend('<tr class = "danger"><td>' + k + '</td><td>' + i + '</td><td>' + id + '</td><td>' + ref_id + '</td><td>' + votedSC +'</td><td>'+status+'</td></tr>') ;

}	k-- ;	//$('<div class = panel > <h2>'+  i + ' </h2 > <br> <h4>' + status + '</h4></div >').appendTo('.test');
	}

})

// }	)
// $('#somes').click(function () {
//         $.ajax({
//             url: "uploads/" + file.name,
//             async: false,
//             success: function (data){
//                 var k  = data;
//                 console.log(k);
//             }
//         });
//     })