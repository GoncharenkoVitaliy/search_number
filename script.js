const log = console.log;

// coment
const wrap = (message) => {
	document.getElementById('wrapper').style.backgroundColor = (message)
};

const headerRangeNumberStart = document.getElementById('range__number_start');
const headerRangeNumberEnd = document.getElementById('range__number_end');

const topHiddenNumber = document.getElementById('hidden_number__question_button');

const enterNumberInput = document.getElementById('enter_number__value');
const leftExaminationButton = document.getElementById('left__examination');

// Guessing - угадывать
const startGuessing = (message) => {
	document.getElementById('right__start_enter').textContent = message;
}
const rightPointsNumber = (message) => {
	document.getElementById('points__number').textContent = message;
}
const rightBestResult = (message) =>{
	document.getElementById('best_result__number').textContent = message;
}

let minNumber = +headerRangeNumberStart.value;
let maxNumber = +headerRangeNumberEnd.value;

// random number from min to max inclusive
function randomNumber(min, max) {
	return (
		Math.floor(min + Math.random() * (max + 1 - min))
	)
}

// random number загаданное
let guessedNumber = randomNumber(minNumber, maxNumber);
let count = 20;
rightPointsNumber(count);
let bestCount = 0

leftExaminationButton.addEventListener('click', compaerNumber);
enterNumberInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		compaerNumber();
	};
})

function compaerNumber() {
	const enteredValue = +enterNumberInput.value;
	if (+enteredValue === guessedNumber) {
		wrap('green');
		enterNumberInput.style.border = "solid white 2px";
		topHiddenNumber.textContent = guessedNumber;
		startGuessing('Угадал !!!');

		if (count > bestCount) {
			bestCount = count;
			rightBestResult(bestCount);
		}
	} else {
		if (count < 2) {
			wrap('red');
			startGuessing('Начни сначала');
			rightPointsNumber('0');
			return
		}
		count--;
		rightPointsNumber(count);
		enterNumberInput.style.border = "solid red 2px";
		startGuessing(
			enteredValue > guessedNumber
			? 'Слишком много'
			: 'Слишком мало'
		)
	}
}

const headerStartButton = document.getElementById('header__button');
headerStartButton.addEventListener('click', startButton);

function startButton() {
	minNumber = +headerRangeNumberStart.value;
	maxNumber = +headerRangeNumberEnd.value;
	guessedNumber = randomNumber(minNumber, maxNumber);
	log('guessedNumber:' + guessedNumber);
	wrap('black');
	enterNumberInput.value = '';
	enterNumberInput.style.border = "solid white 2px";
	topHiddenNumber.textContent = '???';
	count = 20;
	rightPointsNumber(count);
}