// const BASE_URL= "https://api.frankfurter.app/latest?amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}}";
// const dropdowns = document.querySelectorAll(".dropdown select");
// const fromCurr= document.querySelector(".from select");
// const toCurr= document.querySelector(".to select");
// const btn= document.querySelector("form button");
// const msg= document.querySelector(".msg");



// for (let select of dropdowns) {
//     for (currCode in countryList) {
//         let newOption= document.createElement("option");
//         newOption.innerText= currCode;
//         newOption.value= currCode;
//         if (select.name === "from" && currCode === "AED") {
//             newOption.selected= "selected";
//         } else if (select.name === "to" && currCode === "INR") {
//             newOption.selected= "selected";
//         }
//         select.append(newOption);
//     }
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }

// const updateExchangeRate= async () => {
//     let amount= document.querySelector(".amount input");
//     let amtVal= amount.value;;
//     if (amtVal === "" || amtVal < 1) {
//         alert("Please enter a valid amount");
//         amtVal= 1;
//         amount.value= "1";
//     }
//     const URL= `${BASE_URL}${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     let response= await fetch(URL);
//     let data= await response.json();
//     let rate= data[toCurr.value.toLowerCase()];
    
//     let finalAmount= amtVal * rate;
//     msg.innerText= `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src= newSrc;
// };


// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate();
// });

// window.addEventListener("load", () => {
//     updateExchangeRate();
// });


// const BASE_URL = "https://api.frankfurter.app/latest";
// const dropdowns = document.querySelectorAll(".dropdown select");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const btn = document.querySelector("form button");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//     for (currCode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         if (select.name === "from" && currCode === "USD") {
//             newOption.selected = "selected";
//         } else if (select.name === "to" && currCode === "EUR") {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }

// const updateExchangeRate = async () => {
//     try {
//         let amount = document.querySelector(".amount input");
//         let amtVal = amount.value || "1"; // Default to 1 if empty

//         if (amtVal < 1) {
//             alert("Please enter a valid amount");
//             amtVal = 1;
//             amount.value = "1";
//         }

//         const URL = `${BASE_URL}?amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;
//         console.log("Fetching:", URL);

//         let response = await fetch(URL);
//         if (!response.ok) throw new Error("API request failed");

//         let data = await response.json();
//         let rate = data.rates[toCurr.value];

//         msg.innerText = `${amtVal} ${fromCurr.value} = ${(amtVal * rate).toFixed(2)} ${toCurr.value}`;
//     } catch (error) {
//         msg.innerText = "Error fetching exchange rate.";
//         console.error(error);
//     }
// };

// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     if (countryCode) {
//         let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
//         let img = element.parentElement.querySelector("img");
//         if (img) img.src = newSrc;
//     }
// };

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate();
// });

// window.addEventListener("load", () => {
//     updateExchangeRate();
// });


const API_KEY = "83b2badbc5bed759dafc387c";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;
const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "AED") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    try {
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value || "1"; 

        if (amtVal < 1) {
            alert("Please enter a valid amount");
            amtVal = 1;
            amount.value = "1";
        }

        const URL = `${BASE_URL}${fromCurr.value}`;
        console.log("Fetching:", URL);

        let response = await fetch(URL);
        if (!response.ok) throw new Error("API request failed");

        let data = await response.json();
        let rate = data.conversion_rates[toCurr.value];

        msg.innerText = `${amtVal} ${fromCurr.value} = ${(amtVal * rate).toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate.";
        console.error(error);
    }
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    if (countryCode) {
        let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
        let img = element.parentElement.querySelector("img");
        if (img) img.src = newSrc;
    }
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});
