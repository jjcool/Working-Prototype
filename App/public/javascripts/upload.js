$('.upload-btn').on('click', function (){
    $('#upload-input').click();
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
});


// import { default as Web3} from 'web3';

// Web3 = require("web3");


// var web3 = new web3(new web3.provider.HttpProvider("http://localhost:8545"));

// abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"customerPolicies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"policies","outputs":[{"name":"id","type":"uint256"},{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"doc_url","type":"string"},{"name":"createdAt","type":"uint256"},{"name":"premium","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"reference_id","type":"string"},{"name":"carrier","type":"string"},{"name":"premium","type":"uint256"}],"name":"new_request","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"}]')
// VotingContract = web3.eth.contract(abi);
// // In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
// contractInstance = VotingContract.at('0xe4af9d38e34543ea1d961c98f039e243a81b7c65');
// //candidates = {"Jayesh": "candidate-1", "Pankaj": "candidate-2", "Jose": "candidate-3"}

// function newRequest(ref_id , carrier , premium ) {
//    ref_id = $("#ref_id").val();
//   carrier = $("#carrier").val();
//   premium = $("#premium").val();

//   if(ref_id != "" && carrier != "" && premium != "" ){
 
// console.log("sdsads");
// contractInstance.new_request(ref_id,carrier,premium , {from: web3.eth.accounts[0] , gas :'90000'})/*, function() {
//     let div_id = candidates[candidateName];
//     $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
//   }*/;

// $('<br><div class = "panel" > <h2> reference id ' + ref_id + "</h2><br> carrier: "+ carrier +"<br> premium: " + premium  + "</div>").appendTo('.something')

// //$('#table').append('<tr><th text = "ref_id"></th><td>more data</td><td>mosre data</td></tr>');

// console.log("end");
// }

// else { console.log("wrong") }
// }

// // $('#somes').click(function () {
// //         $.ajax({
// //             url: "uploads/" + file.name,
// //             async: false,
// //             success: function (data){
// //                 var k  = data;
// //                 console.log(k);
// //             }
// //         });
// //     })


$('#upload-input').on('change', function(){

  var files = $(this).get(0).files;

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploads[]', file, file.name);
      alert('fileLocation : uploads/'+file.name);
    
var pageExecute = {

    fileContents:"Null",
    pagePrefix:"Null",
    slides:"Null",

    init: function () {
        $.ajax({
            url: "./uploads/some.txt",
            async: false,
            success: function (data){
                pageExecute.fileContents = data;
            }
        });
    }
};

console.log(pageExecute)
    }


    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.progress-bar').text(percentComplete + '%');
            $('.progress-bar').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              $('.progress-bar').html('Done');
            }

          }

        }, false);

        return xhr;
      }
    });

  }
});
