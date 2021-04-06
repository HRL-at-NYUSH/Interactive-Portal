var jsonOut=localStorage.getItem("output");
var jsonArray=JSON.parse(jsonOut);

//get from local storage
var jsonCheckin=localStorage.getItem("check-in");
var jsonCheckout=localStorage.getItem("check-out");
console.log(jsonCheckout);

//parse the json string array to an actual array
var arrayCheckin=JSON.parse(jsonCheckin);
console.log(arrayCheckin);

var arrayCheckout=JSON.parse(jsonCheckout);
console.log(arrayCheckout);


function outContains(array, key){
  return (array.indexOf(key) > -1);
}


function clear(){

  document.getElementById("app").textContent= "";
}

  function table_populate(){
    var table=document.getElementById('table_results');

    var outnumber=arrayCheckout.length+1; 
    var count=0;
    var table_row = document.createElement('tr');
    n_arr=[];
    n_arr[0]=document.createElement('td');
    n_arr[0].innerHTML="ID";
    table_row.appendChild(n_arr[0]);
    for (j=0;j<outnumber; j++){
      n_arr[j+1]=document.createElement('td');
      n_arr[j+1].innerHTML=arrayCheckout[j];
      table_row.appendChild(n_arr[j]);
    }
    table.appendChild(table_row);
      
     console.log("entered");
      if (table != null) console.log("something living");
      var i,j,r;
      var categ=8; //to be changed based on user
      for (r=0;r<jsonArray.length; r++){
      for (i=0;i<jsonArray[r].length; i++){
        var id, year, dir, address, nation, name;
        var table_row = document.createElement('tr');
        var data=[];
        var data_row=jsonArray[r][i];
        // if (outContains(arrayCheckout, "ID")){
        id=data_row.ID;
        data.push(id);
      // } 
        if (outContains(arrayCheckout, "YR")){
        year=data_row.YR;
        data.push(year);
        }
          if (outContains(arrayCheckout, "DIR")){
        dir=data_row.DIR;
        data.push(dir);
       }
          if (outContains(arrayCheckout, "ADDRESS")){
        address=data_row.street_clean;
        data.push(address);
       }
      if (outContains(arrayCheckout, "NATION")){

        nation=data_row.NATIONALITY;
        data.push(nation);
       }
     
         if (outContains(arrayCheckout, "FNAME")){
        name=data_row.NAME;
        data.push(name);
       }

        
        var arr=[];
        for (j=0;j<outnumber; j++){
          arr[j]=document.createElement('td');
          arr[j].innerHTML=data[j];
          table_row.appendChild(arr[j]);
        }
        table.appendChild(table_row);
      }
    }
    
    }
  
  table_populate();
   localStorage.clear();
