var express = require('express');
var router = express.Router();

var Q2Contributions = [
{"Party": "Republican", "Candidate":"Bush, Jeb**","Federal Matching Funds":"$0","contributions From individuals":"$10,983,577","Contributions for Cmte’s Minus Refunds":"$57,600","Contri and Loans from the Candidate Minus Repayments":"$388,720","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$11,429,898"},
{"Party": "Republican", "Candidate":"Carson, Benjamin S.*","Federal Matching Funds":"$0","contributions From individuals":"$10,598,542","Contributions for Cmte’s Minus Refunds":"$857","Contri and Loans from the Candidate Minus Repayments":"$25,000","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$10,624,400"},
{"Party": "Republican", "Candidate":"Cruz, Rafael Edward 'Ted'*","Federal Matching Funds":"$0","contributions From individuals":"$14,028,830","Contributions for Cmte’s Minus Refunds":"$20,207","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$250,013","Other Receipts":"$0","Total":"$14,299,051"},
{"Party": "Republican", "Candidate":"Fiorina, Carly**","Federal Matching Funds":"$0","contributions From individuals":"$1,698,627","Contributions for Cmte’s Minus Refunds":"$500","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$1","Total":"$1,699,129"},
{"Party": "Republican", "Candidate":"Graham, Lindsey O.**","Federal Matching Funds":"$0","contributions From individuals":"$2,136,351","Contributions for Cmte’s Minus Refunds":"$36,800","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$1,525,000","Other Receipts":"$2","Total":"$3,698,153"},
{"Party": "Republican", "Candidate":"Huckabee, Mike**","Federal Matching Funds":"$0","contributions From individuals":"$1,979,711","Contributions for Cmte’s Minus Refunds":"$17,500","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$1,997,211"},
{"Party": "Republican", "Candidate":"Jindal, Bobby**","Federal Matching Funds":"$0","contributions From individuals":"$573,759","Contributions for Cmte’s Minus Refunds":"$5,000","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$578,759"},
{"Party": "Republican", "Candidate":"Pataki, George E.**","Federal Matching Funds":"$0","contributions From individuals":"$255,795","Contributions for Cmte’s Minus Refunds":"$0","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$255,795"},
{"Party": "Republican", "Candidate":"Paul, Rand**","Federal Matching Funds":"$0","contributions From individuals":"$5,263,898","Contributions for Cmte’s Minus Refunds":"$31,506","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$1,589,559","Other Receipts":"$4","Total":"$6,884,967"},
{"Party": "Republican", "Candidate":"Perry, James R. (Rick)**","Federal Matching Funds":"$0","contributions From individuals":"$1,078,522","Contributions for Cmte’s Minus Refunds":"$1,000","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$1,079,522"},
{"Party": "Republican", "Candidate":"Rubio, Marco**","Federal Matching Funds":"$0","contributions From individuals":"$8,033,880","Contributions for Cmte’s Minus Refunds":"-$167,940","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$176,061","Other Receipts":"$49","Total":"$8,042,051"},
{"Party": "Republican", "Candidate":"Santorum, Richard J.**","Federal Matching Funds":"$0","contributions From individuals":"$605,936","Contributions for Cmte’s Minus Refunds":"$0","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$17,238","Total":"$623,174"},
{"Party": "Democract", "Candidate":"Clinton, Hillary Rodham**","Federal Matching Funds":"$0","contributions From individuals":"$46,443,507","Contributions for Cmte’s Minus Refunds":"$331,396","Contri and Loans from the Candidate Minus Repayments":"$278,821","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$47,053,724"},
{"Party": "Democract", "Candidate":"O'Malley, Martin Joseph**","Federal Matching Funds":"$0","contributions From individuals":"$1,964,349","Contributions for Cmte’s Minus Refunds":"$21,795","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$0","Other Receipts":"$0","Total":"$1,986,144"},
{"Party": "Democract", "Candidate":"Sanders, Bernard**","Federal Matching Funds":"$0","contributions From individuals":"$13,612,749","Contributions for Cmte’s Minus Refunds":"$0","Contri and Loans from the Candidate Minus Repayments":"$0","Other Loans Minus Repayments":"$0","Transfer From Previous Campaigns":"$1,500,000","Other Receipts":"$1,873","Total":"$15,114,622"}
]

var output = [];
var pushedData = [];
var sortedData = [];
var rawAmt = "";
var amountWithTokens = [];

function createGraphArray (data){
  var nameOutput = "",
      party = "";

  for(var i = 0; i < data.length; i++){

    function trimName (string){
      var arrayName = string.split(",");
          nameOutput = arrayName[0];
    }
    trimName(data[i].Candidate);
    function findTotal (amount){
      rawAmt = parseInt(amount.replace(/[^\w\s]/gi, ''));
      amountWithTokens.push(amount);
    }
    findTotal(data[i].Total)
    // function findParty (string){
    //   party = string;
    // }
    output.push(nameOutput)
    output.push(rawAmt)

  }
  function finalData (data){
    for(var i = 0; i < data.length; i++){
      pushedData.push(data[i]);
    }
    for(var j = 0; j <pushedData.length; j+=2){
      sortedData.push([pushedData[j], pushedData[j+1]])
    }
  }
  finalData(output);
}
createGraphArray(Q2Contributions);

console.log(amountWithTokens);
// console.log(sortedData)
module.exports = sortedData;
