const wrap = document.getElementById('wrapper');

const headerStartButton = document.getElementById('header__button');
const headerRangeNumberStart = document.getElementById('range__number_start');
const headerRangeNumberEnd = document.getElementById('range__number_end');

const topHiddenNumber = document.getElementById('hidden_number__question_button');

const enterNumberInput = document.getElementById('enter_number__value');
const leftExaminationButton = document.getElementById('left__examination');

const rightPointsNumber = document.getElementById('points__number');
const rightBestResult = document.getElementById('best_result__number');

let minNumber = 1;
let maxNumber = 20;

headerRangeNumberStart.textContent = minNumber;
headerRangeNumberEnd.textContent = maxNumber;

const log = console.log;

consoleLog('hello');
// random number from min to max inclusive
function randomNumber(min, max) {
	return (
		Math.floor(min + Math.random() * (max + 1 - min))
	)
}

// random number загаданное
let guessedNumber = randomNumber(minNumber, maxNumber);
log(guessedNumber);

let counter = 20;
rightPointsNumber.textContent = counter;

leftExaminationButton.addEventListener('click', compaerNumber);

function compaerNumber() {
	if( +enterNumberInput.value === guessedNumber){
		wrap.style.backgroundColor = 'green';
		topHiddenNumber.textContent = guessedNumber;


		log(rightBestResult.value);

	} else {
		
	}
	// log('click')
}