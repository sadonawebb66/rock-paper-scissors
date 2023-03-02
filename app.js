const game= ()=>{
    let pScore=0;
    let cScore=0;
    
    
    //Start game
    const startGame=()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match= document.querySelector('.match');
        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });
    };
    //Play match
    const playMatch=()=>{
        const options=document.querySelectorAll('.options button');
        const playerHand=document.querySelector('.player-hand');
        const computerHand=document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');
    
        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation='';
            });
        });
        //computer options
    const computerOptions=['rock','paper','scissors'];
    
    options.forEach(option=>{
    option.addEventListener('click',function(){
        const computerNumber=Math.floor(Math.random()*3);
        const computerChoice= computerOptions[computerNumber];
    setTimeout(()=>{
        //compare hands
        compareHands(this.textContent, computerChoice);
        //Update images
        
        playerHand.src=`./assets/${this.textContent}.png`;
        computerHand.src=`./assets/${computerChoice}.png`;
    },1800);
    
    
        playerHand.style.animation="shakePlayer 2s ease";
        computerHand.style.animation="shakeComputer 2s ease";
    })
    })
    };
    const updateScore=()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;
    }
    
    
    
    const compareHands= (playerChoice, computerChoice)=>{
     //updates text
     const winner=document.querySelector('.winner');  
     //checking for a tie 
     if(playerChoice===computerChoice){
        winner.textContent="It's a tie!";
        return;
     }
     if(playerChoice==='rock'){
        if(computerChoice==='scissors'){
            winner.textContent='You Win!';
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent="You Lost";
            cScore++;
            updateScore();
            return;
        }
     }
     if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
            winner.textContent='You Lost!';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent="You Won!";
            pScore++;
            updateScore();
            return;
        }}
        if(playerChoice==='scissors'){
            if(computerChoice==='rock'){
                winner.textContent='You Lost!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="You Won!";
                pScore++;
                updateScore();
                return;
            }
    
    }
    
    //call all inner functions
    
    };
    startGame();
    playMatch(); 
    };
    game();
    