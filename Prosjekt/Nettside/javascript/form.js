function validateForm(){
const fornavn =document.getElementById('fornavn');
const navn =document.getElementById('navn');
const epost =document.getElementById('epost');
const mobilnr =document.getElementById('mobilnr');

form.addEventListener('submit', (e)=>{
checkInputs();

if(isNameValid(navn)&&isEpostValid(epost)&&isMobilnrValid(mobilnr)&&isFornavnValid(fornavn)){
    success();
}else{
  e.preventDefault();
}
});

function success(){
alert(
  "Takk! Reservasjonen er fullført. Du vil se bookingbekreftelse på epost etter kort tid.");
}

function checkInputs(){
//henter values fra inputsen
const fornavnValue = fornavn.value
const navnValue = navn.value
const epostValue = epost.value
const mobilnrValue = mobilnr.value

//Sjekker om etternavnet er gyldig
if(fornavnValue === ''){
  setErrorFor(fornavn, 'Vennligst skriv inn et fornavn');
}
else if(!isFornavnValid(fornavn)){
  setErrorFor(fornavn, 'Ikke gyldig fornavn')
}
else{
  setSuccessFor(fornavn);
}

if(navnValue === ''){
  setErrorFor(navn, 'Vennligst skriv inn et etternavn');
}
else if(!isNameValid(navn)){
  setErrorFor(navn, 'Ikke gyldig etternavn')
}
else{
  setSuccessFor(navn);
}

//Sjekker om eposten er gyldig
if(epostValue === ''){
  setErrorFor(epost, 'Vennligst skriv inn en epost');
}
else if(!isEpostValid(epost)){
  setErrorFor(epost, 'Ikke gyldig epost');
}
else{
  setSuccessFor(epost);
}

//Sjekker om mobilnummer er gyldig
if(mobilnrValue === ''){
  setErrorFor(mobilnr, 'Vennligst skriv inn et mobilnummer');
}
else if(!isMobilnrValid(mobilnr)){
  setErrorFor(mobilnr, 'Ikke gyldig mobilnummer')
}
else{
  setSuccessFor(mobilnr);
}
}

function setErrorFor(input, message){
const formControl = input.parentElement; //.form-control
const small = formControl.querySelector('small');

//legger til error-melding i errorMessage
small.innerText = message;

//legger til error-klassen
formControl.className = 'form-control error';
}

function setSuccessFor(input){
const formControl = input.parentElement;
formControl.className = 'form-control';
}

//Validering av navn
function isNameValid(navn){
const validNavn = /^[A-Za-zÆØÅæøå]+$/;
if(navn.value.match(validNavn)){
  return true;
}
else{
  return false;
}
}

function isFornavnValid(fornavn){
const validFornavn = /^[A-Za-zÆØÅæøå]+$/;
if(fornavn.value.match(validFornavn)){
  return true;
}
else{
  return false;
}
}

//Validering av epost
function isEpostValid(epost){
const validEpost = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(epost.value.match(validEpost)){
  return true;
}
else{
  return false;
}
}

//Validering av nummer
function isMobilnrValid(mobilnr){
const validMobilnr = /^\d{8}$/;
if(mobilnr.value.match(validMobilnr)){
  return true;
}
else{
  return false;
}
}

}
