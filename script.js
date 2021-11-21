let invalidMessage = document.getElementById('invalidMessage');
 let statShowSection = document.getElementById('statShowSection');
let searchBtn = ()=>{
    let inputField = document.getElementById('exampleFormControlInput1');
    let inputSearch = inputField.value;
    if(inputSearch==='' || typeof inputSearch !='string'){
        invalidMessage.innerText=`Input Field Cannot be empty`;
        statShowSection.textContent=''
        return;
    }
    let url = `https://coronavirus-19-api.herokuapp.com/countries/${inputSearch}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showData(data))
    inputField.value=''; 
}

let showData = (elem) =>{
     invalidMessage.innerText=''
   
    statShowSection.textContent=''
    let div = document.createElement('div');
    div.innerHTML = `
     <div class="row g-2 text-center text-white">
            <div class="col-6 col-md-4 rounded-3 ">
                <div class="p-3 border  bg-primary bg-gradient">
                Country Name: <h3> ${elem.country} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-danger bg-gradient">Total Cases: <h3>${elem.cases} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-warning bg-gradient">Today's Total Case: <h3>${elem.todayCases} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-dark bg-gradient">Total deaths: <h3> ${elem.deaths} </h3></div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-danger bg-gradient">Today's Total Death: <h3>${elem.todayDeaths} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-success bg-gradient">Total Recovered: <h3> ${elem.recovered} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-info bg-gradient">Total Active Case: <h3>  ${elem.active} </h3></div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-warning  bg-gradient">Critical Cases: <h3> ${elem.critical} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-primary bg-gradient">Cases in Per Million: <h3> ${elem.casesPerOneMillion} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-dark bg-gradient">Deaths Per Million: <h3> ${elem.deathsPerOneMillion} </h3> </div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-success bg-gradient">Total Tests Done: <h3>  ${elem.totalTests} </h3></div>
            </div>
            <div class="col-6 col-md-4 rounded-3">
                <div class="p-3 border bg-info bg-gradient">Test Done in Per MIllion: <h3> ${elem.testsPerOneMillion} </h3> </div>
            </div>
            
        </div>
    ` 
    statShowSection.appendChild(div)
}