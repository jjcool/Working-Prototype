
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"addresss","type":"address"},{"name":"id","type":"uint256"},{"name":"premium","type":"uint256"}],"name":"new_claim","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"counterClaim","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerPolicies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerClaims","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"counterPolicy","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"counterClaims","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"counterPolicys","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"claims","outputs":[{"name":"id","type":"uint256"},{"name":"customer","type":"address"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"doc_url","type":"string"},{"name":"timeStamp","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"status","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"uint256"},{"name":"customer","type":"address"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"doc_url","type":"string"},{"name":"timeStamp","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"status","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"premium","type":"uint256"}],"name":"new_request","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"statusPolicy","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_claimId","type":"uint256"}],"name":"statusClaim","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"referenceId","type":"string"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"},{"indexed":false,"name":"status","type":"string"}],"name":"LOG_PolicyApplied","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"},{"indexed":false,"name":"status","type":"string"}],"name":"LOG_ClaimApplied","type":"event"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x77599855cf2a375190fbd0c05fef26a417960a25');
//candidates = {"Jayesh": "candidate-1", "Pankaj": "candidate-2", "Jose": "candidate-3"}

var txFilter = contractInstance.LOG_PolicyApplied();

function newRequest(ref_id , carrier , premium ) {
   ref_id = $("#ref_id").val();
  carrier = $("#carrier").val();
  premium = $("#premium").val();

  if(ref_id != "" && carrier != "" && premium != "" ){
 
console.log("sdsads");
contractInstance.new_request(ref_id,carrier,premium , {from: web3.eth.accounts[0] , gas :'900000'})/*, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  }*/;

//$('#table').append('<tr><th text = "ref_id"></th><td>more data</td><td>mosre data</td></tr>');

console.log("end");
}

else { console.log("wrong") }

var Jayesh = "SomeString";
var polciyID = 0 ;
var count = 0 ;

txFilter.watch(function(err , result){

	if(err) throw err ;

	Jayesh = result.args.status;
	polciyID = result.args.policyId;
	if(count == 0) {
	console.log(Jayesh);
	console.log(polciyID);
	$('<br><div class = "panel" > <h2> reference id ' + ref_id + "</h2><br> carrier: "+ carrier +"<br> premium: " + premium +"<br> Status: " + Jayesh + "<br> polciyID: "+polciyID+"</div>").appendTo('.something');

	count ++ ;
}
})
}

function votePolicy(policyId, voterId){
	policyId = $('#policyId').val();
	voterId = $('#voterId').val();
	if(voterId == "Saurabh" || voterId == "Pankaj" || voterId == "Jayesh" || voterId == "Parmod"){
	console.log("started");
	contractInstance.counterPolicys(policyId , {from: web3.eth.accounts[0] , gas :'900000'});
	console.log("ended");
	}
	else alert("Wrong VoterID");
}

function statusPolicy(policyId1){
	policyId1 = $('#policyId1').val();
	
	alert(contractInstance.statusPolicy(policyId1));

}

function newClaim(address , id , premium ) {
   address = $("#address").val();
  id = $("#id").val();
  premium = $("#premium").val();

  //if(address != "" && id != "" && premium != "" ){
 
console.log("Claim started");
contractInstance.new_claim(address,id,premium , {from: web3.eth.accounts[0] , gas :'900000'})/*, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  }*/;

//$('#table').append('<tr><th text = "ref_id"></th><td>more data</td><td>mosre data</td></tr>');

console.log("Claim made");
}

//else { console.log("wrong") }
//}


function voteClaim(claimId, voterId){
	claimId = $('#claimId').val();
	voterId = $('#voterId').val();
	//if(voterId == "Saurabh" || voterId == "Pankaj" || voterId == "Jayesh" || voterId == "Parmod"){
	console.log("started");
	contractInstance.counterClaims(claimId , {from: web3.eth.accounts[0] , gas :'900000'});
	console.log("ended");
	//}
	//else alert("Wrong VoterID");
}

function statusClaim(claimId1){
	claimId1 = $('#claimId1').val();
	if(contractInstance.statusClaim(claimId1) == "approved") {
		console.log(web3.eth.getBalance(web3.eth.accounts[1]).toNumber(),"ether");
		web3.eth.sendTransaction({from:web3.eth.coinbase, to:web3.eth.accounts[1], value: web3.toWei(0.005, "ether")});
		console.log("money sent");
		console.log(web3.eth.getBalance(web3.eth.accounts[0]).toNumber());
	}
	else alert(contractInstance.statusClaim(claimId1));
}

// $(document).ready(function(){

// 	txFilter.watch(function(err , result){

// 	if(err) throw err ;

// 	Jayesh = result.args.status;
// 	polciyID = result.args.policyId;
	
// 	$('<br><div class = "panel" > <h2> reference id ' + ref_id + "</h2><br> carrier: "+ carrier +"<br> premium: " + premium +"<br> Status: " + Jayesh + "<br> polciyID: "+polciyID+"</div>").appendTo('.something');


// })

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