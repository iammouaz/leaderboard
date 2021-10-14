/* eslint-disable linebreak-style */
import './style.css';

const gameID = 'Zl4d7IVkemOTTVg2fUd2';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`;
const Refresh = document.getElementById('refrsh');
const scoreList = document.getElementById('scores');
const AddName = document.getElementById('name');
const AddScore = document.getElementById('score');
const PostToAPI = document.getElementById('submit');

const transformData = (data) => {
  data.forEach((result) => {
    const { user, score } = result;
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdScore = document.createElement('td');
    tdName.scope = 'row';
    tdScore.scope = 'row';

    tdName.innerHTML = user;
    tdScore.innerHTML = score;

    scoreList.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdScore);
  });
};

const GetScoreGame = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const { result } = data;
    transformData(result);
  } catch (error) {
    throw new Error('Please Check the API');
  }
};

const PostRequst = async () => {
  if (AddName.value && AddScore.value) {
    try {
      await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          user: AddName.value,
          score: AddScore.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      AddScore.value = '';
      AddName.value = '';
      window.location.reload();
    } catch (error) {
      throw new Error('Please check POST API Mehtod');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  GetScoreGame();
});

PostToAPI.addEventListener('click', PostRequst);

Refresh.addEventListener('click', () => {
  window.location.reload();
});
