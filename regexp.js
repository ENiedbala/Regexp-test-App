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

const printValue = counterElement => {
	if (counterElement > 0) {
		info.innerText = ` ${counterElement} wyrażenia występujące w tekście spełniają wymagania `;
	} else {
		info.innerText = `W tekście nie ma wyrażenwyrażeń spełniających wymagania`;
	}
};
button.addEventListener('click', e => {
	e.preventDefault();
	const re = regexp.value;
	const reg = re.slice(1, re.length - 1);
	const inputValue = inutTextToFind.value;
	const regMatchAll = [...inputValue.matchAll(reg)];

	regMatchAll.forEach(el => {
		const element = el[0];

		printValue(regMatchAll.length);

		return element;
	});
});

clearBtn.addEventListener('click', () => {
	inputArea.forEach(el => {
		el.value = '';
	});
});
