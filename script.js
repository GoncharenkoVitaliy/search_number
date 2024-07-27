const log = console.log;
const wrap = document.getElementById('wrapper');

const headerStartButton = document.getElementById('header__button');
const headerRangeNumberStart = document.getElementById('range__number_start');
const headerRangeNumberEnd = document.getElementById('range__number_end');

const topHiddenNumber = document.getElementById('hidden_number__question_button');

const enterNumberInput = document.getElementById('enter_number__value');
const leftExaminationButton = document.getElementById('left__examination');

// Guessing - угадывать
const startGuessing = document.getElementById('right__start_enter');
const rightPointsNumber = document.getElementById('points__number');
const rightBestResult = document.getElementById('best_result__number');

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
log('randomNumber:' + guessedNumber);

let count = 20;
rightPointsNumber.textContent = count;

let bestCount = 0

headerStartButton.addEventListener('click', startButton);
leftExaminationButton.addEventListener('click', compaerNumber);
enterNumberInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
			compaerNumber();
	};
})

function compaerNumber() {
	const enteredValue = +enterNumberInput.value;
	if (+enteredValue === guessedNumber) {
		wrap.style.backgroundColor = 'green';
		enterNumberInput.style.border = "solid white 2px";
		topHiddenNumber.textContent = guessedNumber;
		startGuessing.textContent = 'Угадал !!!';

		if (count > bestCount) {
			bestCount = count;
			rightBestResult.textContent = bestCount;
		}
	} else {
		if (count < 2) {
			wrap.style.backgroundColor = 'red';
			startGuessing.textContent = 'Начни сначала';
			rightPointsNumber.textContent = '0';
			return
		}
		count--;
		rightPointsNumber.textContent = count;
		enterNumberInput.style.border = "solid red 2px";
		startGuessing.textContent = enteredValue > guessedNumber
			? 'Слишком много'
			: 'Слишком мало'
	}
}

function startButton() {
	minNumber = +headerRangeNumberStart.value;
	maxNumber = +headerRangeNumberEnd.value;
	guessedNumber = randomNumber(minNumber, maxNumber);
	log('guessedNumber:' + guessedNumber);
	wrap.style.backgroundColor = 'black';
	enterNumberInput.value = '';
	enterNumberInput.style.border = "solid white 2px";
	topHiddenNumber.textContent = '???';
	count = 20;
	rightPointsNumber.textContent = count;
}