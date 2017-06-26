
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerPolicies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"counter","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"uint256"},{"name":"customer","type":"address"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"doc_url","type":"string"},{"name":"timeStamp","type":"uint256"},{"name":"premium","type":"uint256"},{"name":"status","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"premium","type":"uint256"}],"name":"new_request","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_policyId","type":"uint256"}],"name":"counters","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policyId","type":"uint256"},{"indexed":false,"name":"customer","type":"address"},{"indexed":false,"name":"referenceId","type":"string"},{"indexed":false,"name":"premium","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"},{"indexed":false,"name":"status","type":"string"}],"name":"LOG_PolicyApplied","type":"event"}]')
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x9a0afdb540ecbdb950e773496341bd35be812586');
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
var count = 0 ;

txFilter.watch(function(err , result){

	if(err) throw err ;

	Jayesh = result.args.status;
	
	if(count == 0) {
	console.log(Jayesh);
	$('<br><div class = "panel" > <h2> reference id ' + ref_id + "</h2><br> carrier: "+ carrier +"<br> premium: " + premium +"<br> Status: " + Jayesh + "</div>").appendTo('.something');

	count ++ ;
}
})



}

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