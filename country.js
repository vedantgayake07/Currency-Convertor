let name1 = document.getElementById("name");
let offname = document.getElementById("offname");
let capital = document.getElementById("capital");
let currname = document.getElementById("currname");
let currsymbol = document.getElementById("currsymbol");
let cntry = document.getElementById("txt");
let img= document.getElementById("img");
let info = document.getElementById("info");
async function search() {

    let response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies");
    let data = await response.json();
    let cname=cntry.value;
    info.classList.add("info1");
    for(let country of data)
    {
    if(country.name.common === cname)
    {
        try{
        let cntycode = countryList[cname];
        img.src =`https://flagsapi.com/${cntycode}/flat/64.png`
        }
        catch(error)
        {
            console.log(error)
        }
        name1.textContent = `Name : ${country.name.common}`;
        offname.textContent = `Official Name : ${country.name.official}`;
        capital.textContent = `Capital  : ${country.capital}`;
        let key = Object.keys(country.currencies)[0];
        currname.textContent = `Currency : ${country.currencies[key].name}`;
        currsymbol.textContent = `Symbol : ${country.currencies[key].symbol}`; 
    }
    }
}

show();




