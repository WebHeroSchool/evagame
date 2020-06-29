const button = document.getElementById('btn');
const body = document.body;
const field = document.querySelector('.wrap');
const gameField = document.createElement('div');
body.appendChild(gameField);


//создание карты
const addCardBox = () => {
		const cardBox = document.createElement('div');
		gameField.appendChild(cardBox);
		cardBox.className = 'card_box';

		const shirt = document.createElement('div');
		shirt.innerHTML="<img src='images/card.png'>";
		cardBox.appendChild(shirt);
		shirt.className = 'shirt';

		const faceCard = document.createElement('div');
		faceCard.className = 'face';
		let rand = Math.floor(Math.random() * 2);
		console.log(rand);
		if (rand = 0) {
			faceCard.innerHTML = "<img src='images/cardBug.png'>";
		} else if (rand =1) {
			faceCard.innerHTML = "<img src='images/cardTheEnd.png'>";
		};
		cardBox.appendChild(faceCard);

		const cardOnClick = () => cardBox.classList.toggle('flip');
		cardBox.addEventListener('click', cardOnClick);
	};


//выбор поля
const startGame = () => {
 	const allLevels = document.getElementsByName('level');
	let selectedLevel;
	for (let level of allLevels) {
    if (level.checked) {
      selectedLevel = level.value;
      break;
    }
  }
  field.style.display = 'none';
	const treeCardsField = [addCardBox(), addCardBox(), addCardBox()]
	const sixCardsField = [...treeCardsField, ...treeCardsField]
	const tenCardsField = ([...sixCardsField, ...treeCardsField, addCardBox()]);
	if (selectedLevel == 'easy') {
		gameField.className = 'game_treecard';
		return treeCardsField;
	} else if (selectedLevel == 'medium') {
		gameField.className = 'game_sixcard';
		return sixCardsField;
	} else if (selectedLevel == 'hard') {
		gameField.className = 'game_tencard';
		return tenCardsField;
	} 

};

button.addEventListener('click', startGame);