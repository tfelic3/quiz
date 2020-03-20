

let userChoice = document.getElementsByTagName('button');
let answerChoice ;

for (let i =0; i<userChoice.length; i++){
    if(userChoice[0]){
        answerChoice = userChoice[i];
    }
}


let correct = () =>{
    document.body.style.backgroundColor ="black";
    
}

answerChoice.addEventListener('click', correct)


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

