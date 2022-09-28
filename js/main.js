getData('https://catfact.ninja/facts');
let facts = [];
async function getData(url) {
    try {
      const response = await axios.get(url);
      facts = response.data.data
    } catch (error) {
      console.error('error!bad wesite or bad code! (its your code)');
    }
  }

const main = document.getElementById('main');
const zipEnter = document.getElementById('zipEnter');
const ace = document.getElementById('ace');
const card = document.getElementById('cardBody');
const cityContainer = document.getElementById('cityContainer');
const cityTop = document.getElementById('cityTop')
const cityName = document.getElementById('cityName');
const tempContainer = document.getElementById('tempContainer');
const tempTop = document.getElementById('tempTop');
const tempSpan = document.getElementById('tempSpan');
const temp1 = document.getElementById('temp1');
const temp2 = document.getElementById('temp2');
const temp3 = document.getElementById('temp3');
const conditionContainer = document.getElementById('conditionContainer');
const conditionTop = document.getElementById('conditionTop');
const theCondition = document.getElementById('theCondition');
const otherContainer = document.getElementById('otherContainer');
const otherTop = document.getElementById('otherTop');
const other = document.getElementById('other');




  function addEl() {
    const main = document.getElementById('main')
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    main.insertAdjacentElement('beforeend', newDiv);
  };


function createZip() { 
    const zipEnter = document.createElement("input"); //creates input element
    const zipBtn = document.createElement('input');
    zipEnter.setAttribute('id','zipEnter') //this is how you add attributes to elements in JS. this is for an id of zipEnter
    zipBtn.setAttribute('type','submit') // same thing as above line but sets zipBtn to be an actual btn
    zipBtn.setAttribute('value','submit zip code') //setting zipBtn value... see the trend?
    zipBtn.setAttribute('id','zipBtn')
    main.insertAdjacentElement('beforeend', zipEnter); //very helpful js command to choose where you want element to go
    main.insertAdjacentElement('beforeend', zipBtn)  //main is the ID of the one div hardcoded to HTML
};

function createCard() {
  const makeCard = document.createElement('div');
  makeCard.setAttribute('id','ace')
  makeCard.setAttribute('class','card')
  const makeCardBody = document.createElement('div');
  makeCardBody.setAttribute('id','cardBody')
  makeCardBody.setAttribute('class','card-body')
  main.insertAdjacentElement('afterbegin', makeCard)
  main.insertAdjacentElement('afterbegin', makeCardBody)
}
