const apiKey = 'fe556d8602371420048f5a78bde5af9a'
const zip = [];  //empty because the entered ZIP will be pushed here
let facts = [];  // empty because the fetched response.data will be set here to be globally accessed
function pageTest() {
getData(`https://api.openweathermap.org/data/2.5/weather?zip=${zip[0]},us&appid=${apiKey}`);

async function getData(url) {
    try { //if fetch is fulfulled it will make response.data global and run the init() function
      const response = await axios.get(url);
      facts = response.data
      console.log(facts);
      init()
    } catch (error) {  // if fetch is not fulfilled console log a mean msg
      console.error('error!bad wesite or bad code! (its your code)');
    }
  }
}

function clear(){  //this function is the same as refreshing a page. attached to a button
  location.reload()
}

function btnPress() {  //ran when zip is submitted. attached to a button (who wouldve guessed)
  subZip()
  pageTest()
}

createZip();  //ran when the page is loaded to show zip field

function init() {
  convertTemp();
  createCard();
  cityAndCond()
  createCity();
  createTemps();
  createCond();
  addImg()
  createOther();    
};
        //querySelectors for inputs. makes them usable in JS
const zipEnt = document.querySelector('.zipEnter')
const zipSub = document.querySelector('.zipBtn') 
const resetBtn = document.querySelector('.resetBtn')


zipSub.addEventListener('click', btnPress)
resetBtn.addEventListener('click', clear);


// submits what youve entered in the text field to the api link
function subZip() {
  const zipEnt = document.querySelector('.zipEnter')
  const zipSub = document.querySelector('.zipBtn') 
  const test = zip.push(zipEnt.value);
  return zip
}
// vars set defaultly empty for global scope
let imgName = '';
let condDesc = '';
let currentCond = '';
let cityN = '';
let K = '';
let F = '';
let C = '';

function convertTemp() {      //does the match so you dont have to!
  K = Math.ceil(facts.main.temp);
  F =  Math.ceil(1.8*(K-273) + 32) + ' F';
  C = Math.ceil(K - 273.15) + ' C';
  K = K + ' K'
  return C, F, K;
}

//takes the icon were given and makes it a relative link

function addImg() {
  imgName = 'img/' + facts.weather[0].icon + '.png';
}

function cityAndCond() {
  cityN = facts.name
  currentCond = facts.weather[0].main
  condDesc = facts.weather[0].description
}

//wall of text time. these functions create elements, gives them attributes, then appends them to the HMTL

function createZip() { 
    const zipEnter = document.createElement("input"); //creates input element
    const zipBtn = document.createElement('input');
    const resetBtn = document.createElement('input');
    resetBtn.setAttribute('id','resetBtn')
    resetBtn.setAttribute('type','submit')
    resetBtn.setAttribute('value','reset')
    resetBtn.setAttribute('class','resetBtn')
    zipEnter.setAttribute('id','zipEnter') //this is how you add attributes to elements in JS. this is for an id of zipEnter
    zipEnter.setAttribute('class','zipEnter')
    zipBtn.setAttribute('type','submit') // same thing as above line but sets zipBtn to be an actual btn
    zipBtn.setAttribute('value','submit zip code') //setting zipBtn value... see the trend?
    zipBtn.setAttribute('class','zipBtn')
    zipBtn.setAttribute('id','zipBtn')
    main.insertAdjacentElement('afterbegin', zipEnter); //very helpful js command to choose where you want element to go
    main.insertAdjacentElement('afterbegin', zipBtn)
    main.insertAdjacentElement('afterbegin', resetBtn)  //main is the ID of the one div hardcoded to HTML
};
function createCard() {
  const makeCard = document.createElement('div');
  makeCard.setAttribute('id','ace')
  makeCard.setAttribute('class','card')
  const makeCardBody = document.createElement('div');
  makeCardBody.setAttribute('id','cardBody');
  makeCardBody.setAttribute('class','card-body');
  const makeCardHeader = document.createElement('div');
  makeCardHeader.setAttribute('id','zipHere')
  makeCardHeader.setAttribute('class','card-header');
  main.insertAdjacentElement('beforeend', makeCard);
  const ace = document.getElementById('ace');
  ace.insertAdjacentElement('afterbegin', makeCardBody);
  ace.insertAdjacentElement('afterbegin', makeCardHeader);
};

function createCity() {
  const makeCityCont = document.createElement('div');
  makeCityCont.setAttribute('id','cityCont')
  makeCityCont.setAttribute('class','container p-2 my-3 border text-center');
  const makeCityTop = document.createElement('div');
  makeCityTop.setAttribute('class','row bg-warning text-center');
  makeCityTop.setAttribute('id','cityTop')
  const makeCityName = document.createElement('div');
  makeCityName.setAttribute('id','cityName')
  makeCityName.setAttribute('class','display-6')
  const makecName = document.createElement('p')
  const cityTitle = document.createElement('p')
  cityTitle.setAttribute('id','cityTitle')
  makecName.setAttribute('id','cName')
  const cName = document.getElementById('cName')
  cardBody.insertAdjacentElement('afterbegin', makeCityCont)
  const cityCont = document.getElementById('cityCont')
  cityCont.insertAdjacentElement('afterbegin', makeCityTop)
  cityCont.insertAdjacentElement('beforeend', makeCityName);
  const cityName = document.getElementById('cityName')
  cityName.insertAdjacentElement('afterbegin', makecName);
  document.getElementById('cName').textContent = cityN;
  const cityTop = document.getElementById('cityTop')
  cityTop.insertAdjacentElement('afterbegin', cityTitle)
  document.getElementById('cityTitle').textContent = 'City'
};

function createTemps() {
  const makeTempCont = document.createElement('div')
  makeTempCont.setAttribute('id','tempCont');
  makeTempCont.setAttribute('class','container p-2 my-3 border text-center');
  const makeTempTop = document.createElement('div');
  makeTempTop.setAttribute('id','tempTop')
  makeTempTop.setAttribute('class','row bg-warning')
  const makeTempTitle = document.createElement('h3')
  makeTempTitle.setAttribute('id','tempTitle')
  const makeTempSpan = document.createElement('div');
  makeTempSpan.setAttribute('id','tempSpan');
  makeTempSpan.setAttribute('class','d-inline-flex display-6');
  const makeTemp1 = document.createElement('div');
  makeTemp1.setAttribute('id','temp1')
  makeTemp1.setAttribute('class','p-2 border')
  const makeTempK = document.createElement('p');
  makeTempK.setAttribute('id','tempK');
  const makeTemp2 = document.createElement('div')
  makeTemp2.setAttribute('id','temp2')
  makeTemp2.setAttribute('class','p-2 border')
  const makeTempF = document.createElement('p');
  makeTempF.setAttribute('id','tempF')
  const makeTemp3 = document.createElement('div')
  makeTemp3.setAttribute('id','temp3')
  makeTemp3.setAttribute('class','p-2 border');
  const makeTempC = document.createElement('p');
  makeTempC.setAttribute('id','tempC')
  cardBody.insertAdjacentElement('beforeend', makeTempCont);
  const tempCont = document.getElementById('tempCont');
  tempCont.insertAdjacentElement('afterbegin', makeTempTop);
  const tempTop = document.getElementById('tempTop');
  tempTop.insertAdjacentElement('afterbegin', makeTempTitle);
  document.getElementById('tempTitle').textContent = 'Temperature';
    tempCont.insertAdjacentElement('beforeend', makeTempSpan)
  const tempSpan = document.getElementById('tempSpan');
  tempSpan.insertAdjacentElement("afterbegin", makeTemp1)
  tempSpan.insertAdjacentElement("afterbegin", makeTemp2)
  tempSpan.insertAdjacentElement("afterbegin", makeTemp3)
  const temp1 = document.getElementById('temp1');
  const temp2 = document.getElementById('temp2');
  const temp3 = document.getElementById('temp3');
  temp1.insertAdjacentElement('afterbegin', makeTempK)
  temp2.insertAdjacentElement('afterbegin', makeTempF)
  temp3.insertAdjacentElement('afterbegin', makeTempC)
  const tempK = document.getElementById('tempK');
  const tempF = document.getElementById('tempF');
  const tempC = document.getElementById('tempC');
  document.getElementById('tempK').textContent = K;
  document.getElementById('tempF').textContent = F;
  document.getElementById('tempC').textContent = C;
}
function createCond() {
  const makeConditionCont = document.createElement('div');
  makeConditionCont.setAttribute('id','conditionCont');
  makeConditionCont.setAttribute('class','container p-2 my-3 border text-center');
  const makeConditionTop = document.createElement('div');
  makeConditionTop.setAttribute('id','conditionTop');
  makeConditionTop.setAttribute('class',"row bg-warning");
  const makeConditionTitle = document.createElement('h3')
  makeConditionTitle.setAttribute('id','conditionTitle')
  const makeTheCondition = document.createElement('div')
  makeTheCondition.setAttribute('id','theCondition')
  makeTheCondition.setAttribute('class','display-6')
  const makeCond = document.createElement('p');
  makeCond.setAttribute('id','cond')
  cardBody.insertAdjacentElement('beforeend', makeConditionCont);
  const conditionCont = document.getElementById('conditionCont');
  conditionCont.insertAdjacentElement('afterbegin', makeConditionTop);
  const conditionTop = document.getElementById('conditionTop');
  conditionTop.insertAdjacentElement('afterbegin', makeConditionTitle);
  const conditionTitle = document.getElementById('conditionTitle')
  document.getElementById('conditionTitle').textContent = 'Condition';
  conditionCont.insertAdjacentElement('beforeend', makeTheCondition);
  const theCondition = document.getElementById('theCondition')
  theCondition.insertAdjacentElement('afterbegin', makeCond);
  const cond = document.getElementById('cond');
  document.getElementById('cond').textContent = currentCond + ', ' + condDesc;
}

function createOther() {
  const createOtherCont = document.createElement('div')
  createOtherCont.setAttribute('id','otherCont')
  createOtherCont.setAttribute('class','container p-2 my-3 border text-center');
  const createOtherTop = document.createElement('div');
  createOtherTop.setAttribute('id','otherTop');
  createOtherTop.setAttribute('class','row bg-warning');
  const createOtherTitle = document.createElement('h3');
  createOtherTitle.setAttribute('id','otherTitle');
  const createOtherImg = document.createElement('img')
  createOtherImg.setAttribute('id','otherImg');
  createOtherImg.setAttribute('src',`${imgName}`);
  cardBody.insertAdjacentElement('beforeend', createOtherCont);
  const otherCont = document.getElementById('otherCont');
  otherCont.insertAdjacentElement('afterbegin', createOtherTop)
  const otherTop = document.getElementById('otherTop')
  otherTop.insertAdjacentElement('afterbegin', createOtherTitle);
  const otherTitle = document.getElementById('otherTitle');
  document.getElementById('otherTitle').textContent = 'Other';
  otherCont.insertAdjacentElement('beforeend', createOtherImg)
  const otherImg = document.getElementById('otherImg')
  document.getElementById('otherImg').textContent = 'a sweet image will go here. im just trying to take up space for appropriate box size';
}

//phew... wont be writing functions like that ever again. Moving forward, ill be smarter about it 