// ćwiczenia z regexp
// enter text in the text box
//enter regexp in the regexp box
//click the button to find coded sequence in the text box

const regexp = document.querySelector('#regexp');
const inutTextToFind = document.querySelector('#text');
const button = document.querySelector('.buttonShow');
const clearBtn = document.querySelector('.clearButton');
const info = document.querySelector('.infop');
const infoList = document.querySelector('.infoplist');
const inputArea = [inutTextToFind, regexp];

const printValue = (counterElement, outputElement) => {
	if (counterElement > 0) {
		info.innerText = ` ${counterElement} wyrażenia występujące w tekście spełniają wymagania `;
		infoList.innerText = `Wyrażenia spełniające wymagania to : ${outputElement.flat(
			1
		)}`;
	} else {
		info.innerText = `W tekście nie ma wyrażeń spełniających wymagania`;
		infoList.innerText = ``;
	}
};
const checkSlash = re => {
	let reg = '';

	if (re.charAt(0) == '/' || re.charAt(re.length - 1) == '/') {
		reg = re.slice(1, re.length - 1);
		return reg;
	} else {
		reg = regexp.value;
		return reg;
	}
};

button.addEventListener('click', e => {
	e.preventDefault();
	const re = regexp.value;
	const inputValue = inutTextToFind.value;
	const regMatchAll = [...inputValue.matchAll(checkSlash(re))];
	const tab = regMatchAll.flat(1);
	if (re === '') {
		info.innerText = `Wpisz wyrażenie regularne w pole aby wyszukać`;
		infoList.innerText = ``;
	} else {
		printValue(regMatchAll.length, regMatchAll);
	}
});

clearBtn.addEventListener('click', () => {
	inputArea.forEach(el => {
		el.value = '';
	});
});
