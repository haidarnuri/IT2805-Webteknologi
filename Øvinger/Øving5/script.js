/* Part 2 */
console.log('PART 2')
for(let i=1;i<=20;i++){
  console.log(i);
}
/* Part 3 */
console.log('PART 3')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(let j=0;j<numbers.length;j++){
  let temp = numbers[j];
  if(temp%3===0 && temp%5===0){
    console.log('eplekake');
  }else if(temp%3===0){
    console.log('eple');
  }else if(temp%5===0){
    console.log('kake');
  }else{
    console.log(temp);
  }
}
/* Part 4 */
document.getElementById('title').innerText = "Hello JavaScript";

/* Part 5 */
function changeDisplay () {
  document.getElementById('magic').style.display = "none";
}

function changeVisibility(){
  document.getElementById('magic').style.visibility = "hidden";
  document.getElementById('magic').style.display = "block";
}

function reset () {
  document.getElementById('magic').style.visibility = "visible";
  document.getElementById('magic').style.display = "block";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

let tag = "";
for(let i=0;i<technologies.length;i++){
  tag += `<li>${technologies[i]}</li>`;
}
document.getElementById('tech').innerHTML = tag;
