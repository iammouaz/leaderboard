import './style.css';

class Score {
  constructor(name, score, index) {
    this.name = name;
    this.score = score;
    this.index = index;
  }

  addtolist() {
    const makelist = document.getElementById('scores');
    const makeul = document.createElement('ul');
    makelist.appendChild(makeul);
    makeul.className = 'ullist';
    makeul.innerHTML += `<li>${this.name} , ${this.score}</li>`;
  }
}
const boardScore1 = new Score('Moaz', 100, 0);
const boardScore2 = new Score('Mike', 90, 1);

boardScore1.addtolist();
boardScore2.addtolist();
