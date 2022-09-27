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

  const main = document.getElementById('main')

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
