// // Fetch the rankings JSON
// const data = Require("./rankings.json");
// const parsed = JSON.parse(data);



// async function init() {
//   const response = await fetch('./rankings.json');
//   const data = await response.json();
//   console.log(data);
//   buildColumn(data);
// }

// function buildColumn(data) {
//     // Get column headers dynamically
//     const headers = Object.keys(data[0]);

//     // Create header row
//     headers.forEach(header => {
//         const th = document.createElement("th");
//         th.textContent = header;
//         tableHead.appendChild(th);
//     });

//     // Generate the column first listing of company rankings
//     let columnList = document.getElementById("column-list");
//     data.array.forEach(company => {
//         document.createElement("li");
//     });
    
//     for (company in data){
//         companyList = document.createElement("li");
//         companyList.textContent = data[company];
//         columnList.appendChild(companyList);
//     }
// }

// init();



async function loadList() {
  const response = await fetch('./rankings.json');
  const data = await response.json();

  // Get all the headers
  let headers = [];
  for (let x in data[0]){
    headers.push(x);
  }
  console.log(headers);
// Generate the column first listing of company rankings
  let columnList = document.getElementById("column-list");
  for(let i =0; i<data.length; i++){
    let app = data[i];
    appName = app[headers[0]]
    companyList = document.createElement("li");
    companyList.textContent = appName;
    subList = document.createElement("ul");
    subList.id = appName;
    for(let j=1; j<headers.length;j++){
      item = document.createElement("li");
      item.textContent = headers[j] + " : " + app[headers[j]]
      subList.appendChild(item);
      console.log(item);
    }
    companyList.appendChild(subList);
    columnList.appendChild(companyList);

  }
  
  // for (company in data){
  //     companyList = document.createElement("li");
  //     companyList.textContent = data[company];
  //     columnList.appendChild(companyList);
  // }


}

loadList();