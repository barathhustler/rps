function generateCat(){
    let image =document.createElement('img');
    let div =document.getElementById('cat-flexer');
    image.src="https://cdn2.thecatapi.com/images/ap9.gif";
    div.appendChild(image); 
    
}
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    // manChoice =numberToChoice(humanChoice);
    // console.log('your choice is '+ manChoice);
    botChoice =numberToChoice(randToRpsInt());
    console.log('botChoice is '+botChoice);
    result = decideWinner(humanChoice,botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);
    rpsFrontend(yourChoice.id,botChoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,botChoice){
    var rpsDatabase ={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'scissor':0,'rock':1,'paper':0.5},
        'scissor':{'scissor':0.5,'rock':0,'paper':1}
    }
    var yourScore=rpsDatabase[yourChoice][botChoice];
    console.log('yourChoice is '+yourChoice);
    console.log('yourScore is '+yourScore);
    var computerScore=rpsDatabase[botChoice][yourChoice];
    console.log('choice of computer is '+ botChoice);
    console.log('computerScore is '+ computerScore);
    return [yourScore, computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return {'message':'You Lost :(','color':'red'};
    }else if (yourScore === 0.5){
        return {'message':'Drawn!!!','color':'yellow'};
    }else{
        return{'message':'You Won :)','color':'green'};
    }
}

function rpsFrontend(humanImageChoice, botImageChoice, finalMessage){
    console.log('humanimage choice is '+ humanImageChoice);
    console.log('computerimage choice is '+ botImageChoice);
    var imageDatabase= {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();    

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML ="<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 1px 7px 54px 12px rgba(0,250,8,1)'>"
    botDiv.innerHTML ="<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style ='box-shadow: -5px 3px 56px 1px rgba(252,8,57,1)'>"
    messageDiv.innerHTML ="<h1 style='color: " +finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" +finalMessage['message']+"</h1>"

    document.getElementById('flex-box-rps').appendChild(humanDiv);     
    document.getElementById('flex-box-rps').appendChild(botDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);



}