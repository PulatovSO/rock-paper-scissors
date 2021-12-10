

let gameBoard = document.querySelector('.game');
let result = document.querySelector('.choices');
let playBtn = document.querySelector('.play__btn');

let choices = document.querySelectorAll('.choice');
let countMe = 0;
let countBot = 0;

choices.forEach(function (choice) {
  let me = '';
  choice.addEventListener('click', e => {
    me = e.target.alt
    let bot = Math.ceil(Math.random() * 3);
    let myScore = document.querySelector('.my__score')
    let botScore = document.querySelector('.bot__score')
    let myChoiceImg = document.querySelector('.choice__my-img');
    let botChoiceImg = document.querySelector('.choice__bot-img');
    let gameResult = document.querySelector('.winner__pos');

    if (me == 'Rock') myChoiceImg.src = 'img/rock.png';
    if (me == 'Paper') myChoiceImg.src = 'img/paper.png';
    if (me == 'Scissors') myChoiceImg.src = 'img/scissors.png';

    if ((me == 'Paper' && bot == 3) || (me == 'Rock' && bot == 2) || (me == 'Scissors' && bot == 1)) {
      console.log(`You won! bot chose: ${bot}`)
      countMe++
      myScore.textContent = countMe;
      gameBoard.style.display = 'none';
      result.style.display = 'flex';
      bot == 1 ? botChoiceImg.src = 'img/paper.png' : bot == 2 ? botChoiceImg.src = 'img/scissors.png' : botChoiceImg.src = 'img/rock.png';
      gameResult.textContent = 'You Win!';

    }

    if ((me == 'Paper' && bot == 1) || (me == 'Rock' && bot == 3) || (me == 'Scissors' && bot == 2)) {
      console.log(`Draw! bot chose: ${bot}`)
      gameBoard.style.display = 'none';
      result.style.display = 'flex';
      bot == 1 ? botChoiceImg.src = 'img/paper.png' : bot == 2 ? botChoiceImg.src = 'img/scissors.png' : botChoiceImg.src = 'img/rock.png';
      gameResult.textContent = 'Draw';
    }

    if ((me == 'Paper' && bot == 2) || (me == 'Rock' && bot == 1) || (me == 'Scissors' && bot == 3)) {
      console.log(`You lost! bot chose: ${bot}`)
      countBot++;
      botScore.textContent = countBot;
      gameBoard.style.display = 'none';
      result.style.display = 'flex';
      bot == 1 ? botChoiceImg.src = 'img/paper.png' : bot == 2 ? botChoiceImg.src = 'img/scissors.png' : botChoiceImg.src = 'img/rock.png';
      gameResult.textContent = 'You lost!';
    }
    
  })
})

playBtn.addEventListener('click', (e) => {
  gameBoard.style.display = 'flex';
  result.style.display = 'none';
})
