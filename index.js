

let userChoice = document.querySelectorAll('button');
let score =0;
let btn= document.querySelectorAll('btn');

let intro = document.querySelector('#intro-page');

let cardOne = document.querySelector('#cardOne');

console.log(cardOne);

let introFunction = ()=>{
  window.scrollTo({
    top: 1000,
    behavior: 'smooth'
  });
}
intro.addEventListener('click', introFunction);

userChoice.forEach(item => {
  if (item.id === 'correctChoice') {
    item.addEventListener('click', function() {
      item.style.backgroundColor = 'green';
      userChoice[1].style.backgroundColor = 'red';
        userChoice[2].style.backgroundColor = 'red';
        userChoice[3].style.backgroundColor = 'red';
        score++;

        //adds the answer choice
        let answerChoice = document.createElement('p');
        newGraph.textContent = "That is correct. Biden surged in Michigan."
        cardOne.insertAdjacentElement('afterend', cardOne)

        //scroll functionality
        window.scrollTo({
          bottom: 1000,
          behavior: 'smooth'
        });

    });
  } else {
    item.addEventListener('click', function() {
      userChoice[0].style.backgroundColor = 'green';
      userChoice[1].style.backgroundColor = 'red';
      userChoice[2].style.backgroundColor = 'red';
      userChoice[3].style.backgroundColor = 'red';
    });
  }
});

let userInput = document.querySelector("input");
console.log(userInput);





/*
userChoice.forEach(item => {
    if (item.id === correctChoice) {
      item.addEventListener('click', function() {
        item.style.backgroundColor = 'green';
        userChoice[1].style.backgroundColor = 'red';
        userChoice[2].style.backgroundColor = 'red';
        userChoice[3].style.backgroundColor = 'red';
        userChoice[3].style.backgroundColor = 'red';
        score++;
           
      })
   
    }
  });
*/

















   /*   let p= document.createElement('p');
let newP = document.createTextNode('The Answer is Michigan');
p.appendChild(newP);
let position = document.getElementById('cardOne');
position.appendChild(p) */

/*

let correctChoice = document.getElementById('correctChoice');
let otherChoices = document.getElementsByClassName('btn');
let userScore = 0;









let theCorrectChoice = () => {
    for(let i=0; i<otherChoices.length;i++){
        otherChoices[i].style.backgroundColor = 'red';
        
        }
     
   
     document.body.style.backgroundColor ="black";
    correctChoice.style.backgroundColor ='teal'
     userScore ++;
}


correctChoice.addEventListener('click',theCorrectChoice);


console.log(userScore);




/*
function userChoice(e){
    let type = e.type;
    if(type === 'click'){
        console.log('Something was clicked');
    } 
}


let whatWasClicked = document.querySelectorAll('button');
for (let i =0; i<whatWasClicked.length; i++){
     document.write = "Something was clicked!";

}









/*
whatWasClicked[i].addEventListener('click',userChoice)

/*
function checkUserName(e) {
    var target = e.target;
    console.log(target)
}


var el = document.getElementsByClassName('btn');
el.addEventListener('click',checkUserName);
*/


 










/*
let element = document.getElementById('two');
element.onclick = function(){
document.body.style.backgroundColor ='teal';
}
*/

