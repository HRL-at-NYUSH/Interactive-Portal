function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws=ss.getSheetByName("copy_merged_clean");
  const data=ws.getRange("A1").getDataRegion().getValues();
  const headers=data.shift();
  //data array
  const jsonArray=data.map(r => {
    let obj={};
    //iterate through each row
    headers.forEach((h,i) =>{
      obj[h] = r[i];
    });
    console.log(obj);
    return obj; 
  });

  const response=[{ status: 200,data: jsonArray}];
  return sendJSON(response);

}

function doPost(e) {
  let jsonResponse;
  const ss=SpreadsheetApp.getActiveSpreadsheet();
  const ws=ss.getSheetByName("copy_merged_clean");
  const aoaIds = ws.getRange(2,1,ws.getLastRow(),1).getValues();
  const headers=ws.getRange(1,1,1,ws.getLastColumn()).getValues()[0];
  const headersCopy=headers.slice();
  headersCopy.shift();
  //optional
  headers.shift();
  headers.sort();
  const body=e.postData.contents; 
  const bodyJSON=JSON.parse(body);
  const headersPassed=Object.keys(bodyJSON).sort();
  if (!compareTwoArray_(headers,headersPassed)){
    jsonResponse={status:500,message:"Invalid Arguments passed"};
    return sendJSON(jsonResponse);
  }
  const arrayOfData=headersCopy.map(h => bodyJSON[h]);
  const newIdNumber=getMaxFromArrayOfArrays(aoaIds)+1;
  arrayOfData.unshift(newIdNumber);
  ws.appendRow(arrayOfData);

}

function compareTwoArray_(arr1,arr2){
  if(arr1.length !== arr2.length) return false;
  for (let i=0; i< arr1.length;i++){
    if (arr1[i]!==arr2[i]) return false;
  }
  return true;
}

function sendJSON(jsonResponse){
  return ContentService.createTextOutput(JSON.stringify(jsonResponse))
  .setMimeType(ContentService.MimeType.JSON);
}

function getMaxFromArrayOfArrays(aoa){
  let maxID=0;
  aoa.forEach( r => {
    if (r[0]>maxID) maxID=r[0];
  });
  return maxID;
}