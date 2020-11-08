let tags = ""; //Global variable

/*
Create reservation buttons and calender
*/
const date = new Date();

//Lager knapper(div tagger) til bordbestilling.
const reservationTags = document.getElementById('reservationWrapper');
tags = "";
for (let x = 1; x<=8; x++) {
  tags += `<div class = "reservationButtons" id = button${x} onclick="createCalender(this.id)">${x}</div>`;
}
reservationTags.innerHTML = tags;

/*
Calender manipulations
Lager kalenderen når en av reservasjonstallene trykkes på.
*/
function createCalenderWrapper(){
  reservationTags.style.marginBottom = "10px";
  const calenderWrapperTag = document.querySelector('.calenderWrapper');
  tags = "";
  tags+= `
    <div class="calender">
    <div class="month">

    </div>
    <div class="weekdays">

    </div>
    <div class="days">
    </div>
  </div>`;
  calenderWrapperTag.innerHTML = tags;
}

function titleCalender(){
  const titleTags = document.querySelector('.month');
  tags = "";
  tags+= `<button type="button" onclick="previousMonth()"><</button>
  <div class="date">
    <h1 ></h1>
  </div>
  <button type="button" onclick="nextMonth()">></button>`;
  titleTags.innerHTML = tags;
}

function createWeekDays(){
    const weekdays = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"];
    const weekdayTags = document.querySelector('.weekdays');
    tags= "";
    for(let i = 0;i<weekdays.length;i++){
      tags+= `<div>${weekdays[i]}</div>`;
      weekdayTags.innerHTML = tags;
    }
}

function createCalenderDays(){
  const months = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember"
  ];

  let currenMonth = document.querySelector('.date>h1');
  currenMonth.innerHTML = months[date.getMonth()];

  //Lager antall dager i mnd for hver mnd med stringmanipulering.
  const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); //Henter siste dagen i ønsket mnd.
  date.setDate(1);
  const firstDay = date.getDay(); //Finner føste dagen for første datoen i mnd. 0 -> søndag ...  6->lørdag
  
  /*
  Denne for løkken gjør at man starter på riktig dag for hver mnd.
  Den lagrer tomme div tags før neste for løkke.
  */
 let days = "";
  const monthDays = document.querySelector('.days'); //Starter fra .days klassen.
  for (let j = firstDay; j > 0; j--) {
    days+=`<div>${""}</div>`;
    monthDays.innerHTML = days;
  }

  for(let i=1; i<=lastDay;i++){
    days += `<div class = "reservationDays" id = day${i} onclick="createTimeOptions(this.id)">${i}</div>`;
    monthDays.innerHTML = days;
  }
  
}


function previousMonth(){
  let tempMonth = date.getMonth();
  date.setMonth(tempMonth - 1);
  createCalenderDays();
}

function nextMonth(){
  let tempMonth = date.getMonth();
  date.setMonth(tempMonth + 1);
  createCalenderDays();
}



const headerOnCalender = document.getElementById('headerCalender');
const headerOnReservation = document.getElementById('headerReservation');
const headerOnTime = document.getElementById('headerTime');
const timerWrapperTag = document.querySelector('.timeWrapper');

/*
Denne funksjonen blir aktivert når noen av reservasjonsknappene blir klikka på.
Henter IDen til knappen som argument
*/
function createCalender(idClicked){
  headerOnCalender.style.display = "flex";
  headerOnReservation.style.display = "none";

  reservationTags.style.marginLeft ="25%";
  reservationTags.style.marginRight ="25%";

  document.querySelectorAll('.reservationButtons').forEach(element=>{
    element.style.backgroundColor  = "white";
    element.style.lineHeight = "50px";
    element.style.fontSize="20px";
  });

  document.getElementById(idClicked).style.background="blue";
  document.querySelector('#reservationWrapper').style.marginTop="2%";

  createCalenderWrapper();
  titleCalender();
  createWeekDays();
  createCalenderDays();
}

//Lager tidspunktene på skjema
function createTimeOptions(dayId){
  
  headerOnCalender.style.display = "none";
  
  document.querySelector('.calenderWrapper').style.marginBottom="10px";
  document.querySelectorAll('.reservationDays').forEach(element=>{
    element.style.backgroundColor  = "white";
  });
  document.getElementById(dayId).style.background="blue";
  headerOnTime.style.display = "flex";
  

  tags = "";
  
  tags += `
  <div class = "timeButtons" id = 1 onclick="createForm(this.id)">17:30</div>
  <div class = "timeButtons" id = 2 onclick="createForm(this.id)">18:00</div>
  <div class = "timeButtons" id = 3 onclick="createForm(this.id)">18:30</div>
  <div class = "timeButtons" id = 4 onclick="createForm(this.id)">19:00</div>
  <div class = "timeButtons" id = 5 onclick="createForm(this.id)">19:30</div>
  `;
  timerWrapperTag.innerHTML = tags;
}


//Lager form under kalenderen etter at tid er trykket på
function createForm(timeId){
  headerOnTime.style.display = "none";
  timerWrapperTag.style.marginLeft ="25%";
  timerWrapperTag.style.marginRight ="25%";
  timerWrapperTag.style.marginBottom="10px";

  document.querySelectorAll('.timeButtons').forEach(element=>{
    element.style.backgroundColor  = "white";
    element.style.lineHeight = "30px";
    element.style.fontSize="20px";
  });

  document.getElementById(timeId).style.background="blue";
  document.getElementById('headerForm').style.display = "flex";
  
  validateForm();
}
