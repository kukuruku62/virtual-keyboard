import './index.html';
import './style.scss';

const arrInnerTextBtnsEngLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const arrInnerTextBtnsEngUpper = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const arrInnerTextBtnsSlvkLower = [';', '~', 'ľ', 'š', 'č', 'ť', 'ž', 'ý', 'á', 'í', 'é', '=', '-', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ú', 'ä', 'ň', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ô', '§', 'Enter', 'Shift', 'y', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const arrInnerTextBtnsSlvkUpper = ['°', '+', 'Ľ', 'Š', 'Č', 'Ť', 'Ž', 'Ý', 'Á', 'Í', 'É', '=', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ú', 'Ä', 'Ň', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ô', '!', 'Enter', 'Shift', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', '?', '_', '+', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const eventCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

let lowerLetters = arrInnerTextBtnsEngLower;
let upperLetters = arrInnerTextBtnsEngUpper;
const lowerLettersSlovak = arrInnerTextBtnsSlvkLower;
const upperLettersSlovak = arrInnerTextBtnsSlvkUpper;

const createComponent = function newComponent(tag, classNam) {
  const element = document.createElement(tag, classNam);
  element.classList.add(classNam);
  return element;
};

// create buttons different sizes WITHOUT innerText
const createButtons = function singleBtns(keyboardArea) {
  arrInnerTextBtnsEngLower.forEach((item) => {
    const singleBtn = createComponent('div', 'single-key');
    if (item === 'Tab') {
      singleBtn.classList.add('single-key--tab');
    }
    if (item === 'CapsLock' || item === 'Enter' || item === 'Backspace') {
      singleBtn.classList.add('single-key--backspace');
    }
    if (item === 'Shift') {
      singleBtn.classList.add('single-key--shift');
    }
    if (item === ' ') {
      singleBtn.classList.add('single-key--space');
      singleBtn.innerText = '';
    }
    keyboardArea.append(singleBtn);
  });
};

const createWorkArea = function createWindow() {
  const mainDiv = createComponent('div', 'main-div');
  document.body.append(mainDiv);
  const title = createComponent('h1', 'title');
  title.innerText = 'RSS Virtual keyboard';
  mainDiv.append(title);
  const textArea = createComponent('textarea', 'text-area');
  mainDiv.append(textArea);
  mainDiv.cols = 20;
  textArea.focus(); // set autofocus textarea TODO remove if no necessarity
  const keyboardArea = createComponent('div', 'keyboard');
  mainDiv.append(keyboardArea);
  createButtons(keyboardArea);
  const descriptionText = createComponent('p', 'description');
  descriptionText.innerText = 'The keyboard was created in the Windows OS. Switch language: ShiftLeft + AltLeft';
  mainDiv.append(descriptionText);
};

createWorkArea();

// create innerText into buttons
const addInnerTextToButtons = function addText(arrSymbols) {
  const arrayButtons = document.querySelectorAll('.single-key');
  arrayButtons.forEach((button, index) => {
    const eachBtn = button;
    eachBtn.innerText = arrSymbols[index];
    if (index === 60) {
      eachBtn.classList.add('single-key--arrow-left');
      eachBtn.innerText = '❯';
    }
    if (index === 63) {
      eachBtn.classList.add('single-key--arrow-right');
      eachBtn.innerText = '❯';
    }
    if (index === 62) {
      eachBtn.classList.add('single-key--arrow-down');
      eachBtn.innerText = '❯';
    }
    if (index === 61) {
      eachBtn.classList.add('single-key--arrow-up');
      eachBtn.innerText = '❯';
    }
  });
};

addInnerTextToButtons(arrInnerTextBtnsEngLower);

// set data-attribute each button
(function addDataAttributeToBtns() {
  const arrayButtons = document.querySelectorAll('.single-key');
  arrayButtons.forEach((key, index) => {
    const keyCode = eventCodes[index];
    key.setAttribute('data-key', keyCode);
  });
}());

let counterChangeLanguage = 0;
const addActiveClassButton = function addClass(event) {
  const listButtons = document.querySelector('.keyboard');
  const textarea = document.querySelector('.text-area');
  textarea.focus();

  if (event.shiftKey && (event.altKey && counterChangeLanguage === 0)) {
    [lowerLetters, upperLetters] = [lowerLettersSlovak, upperLettersSlovak];
    counterChangeLanguage += 1;
  } else if (event.shiftKey && (event.altKey && counterChangeLanguage === 1)) {
    [lowerLetters, upperLetters] = [arrInnerTextBtnsEngLower, arrInnerTextBtnsEngUpper];
    counterChangeLanguage = 0;
  }

  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltRight' || event.code === 'AltLeft' || event.code === 'Space' || event.code === 'Delete' || event.code === 'ArrowLeft' || event.code === 'ArrowRight' || event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'ArrowUp' || event.code === 'MetaLeft' || event.code === 'Tab' || event.code === 'CapsLock' || event.code === 'Enter' || event.code === 'Backspace') {
    switch (event.code) {
      case 'ShiftLeft': {
        listButtons.children[42].classList.add('single-key--active');
        if (listButtons.children[29].classList.contains('single-key--active')) {
          addInnerTextToButtons(lowerLetters);
        } else if (!listButtons.children[29].classList.contains('single-key--active')) {
          addInnerTextToButtons(upperLetters);
        }
        break;
      }
      case 'ShiftRight': {
        listButtons.children[53].classList.add('single-key--active');
        if (listButtons.children[29].classList.contains('single-key--active')) {
          addInnerTextToButtons(lowerLetters);
        } else if (!listButtons.children[29].classList.contains('single-key--active')) {
          addInnerTextToButtons(upperLetters);
        }
        break;
      }
      case 'ControlLeft': {
        listButtons.children[54].classList.add('single-key--active');
        break;
      }
      case 'ControlRight': {
        listButtons.children[59].classList.add('single-key--active');
        break;
      }
      case 'AltRight': {
        listButtons.children[58].classList.add('single-key--active');
        (function checkAltRight() {
          if (event.code === 'AltRight') {
            event.preventDefault();
          }
        }());
        break;
      }
      case 'AltLeft': {
        listButtons.children[56].classList.add('single-key--active');
        (function checkAltLeft() {
          if (event.code === 'AltLeft') {
            event.preventDefault();
          }
        }());
        break;
      }
      case 'Space': {
        listButtons.children[57].classList.add('single-key--active');
        break;
      }
      case 'Delete': {
        listButtons.children[28].classList.add('single-key--active');
        break;
      }
      case 'Enter': {
        listButtons.children[41].classList.add('single-key--active');
        break;
      }
      case 'Backspace': {
        listButtons.children[13].classList.add('single-key--active');
        break;
      }
      case 'ArrowLeft': {
        listButtons.children[60].classList.add('single-key--active');
        break;
      }
      case 'ArrowRight': {
        listButtons.children[63].classList.add('single-key--active');
        break;
      }
      case 'ArrowUp': {
        listButtons.children[61].classList.add('single-key--active');
        break;
      }
      case 'ArrowDown': {
        listButtons.children[62].classList.add('single-key--active');
        break;
      }
      case 'MetaLeft': {
        listButtons.children[55].classList.add('single-key--active');
        break;
      }
      case 'Tab': {
        listButtons.children[14].classList.add('single-key--active');
        (function checkTab() { // самовыз-я ф-я, отменяет деф-ое зн-е Tab, вместо этого делает отс-ы
          if (event.code === 'Tab') {
            event.preventDefault();
            textarea.setRangeText('   ', textarea.selectionStart, textarea.selectionEnd, 'end');
          }
        }());
        break;
      }
      case 'CapsLock': {
        if (!listButtons.children[29].classList.contains('single-key--active')) {
          listButtons.children[29].classList.add('single-key--active');
          addInnerTextToButtons(upperLetters);
        } else if (listButtons.children[29].classList.contains('single-key--active')) {
          listButtons.children[29].classList.remove('single-key--active');
          addInnerTextToButtons(lowerLetters);
        }
        break;
      }
      default:
        break;
    }
  } else {
    event.preventDefault();
    const key = document.querySelector(`.single-key[data-key="${event.code}"]`);
    textarea.setRangeText(key.innerText, textarea.selectionStart, textarea.selectionEnd, 'end');
    key.classList.add('single-key--active');
  }
};

const removeActiveClassButton = function delActiveClass(event) {
  const listButtons = document.querySelector('.keyboard');
  const key = document.querySelectorAll('.single-key');

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (listButtons.children[53].classList.contains('single-key--active') || listButtons.children[42].classList.contains('single-key--active'))) {
    listButtons.children[42].classList.remove('single-key--active');
    listButtons.children[53].classList.remove('single-key--active');
  }
  if (event.code === 'ShiftLeft') {
    listButtons.children[42].classList.remove('single-key--active');
    addInnerTextToButtons(lowerLetters);
  }

  if (event.code === 'ShiftRight') {
    listButtons.children[53].classList.remove('single-key--active');
    addInnerTextToButtons(lowerLetters);
  }

  if ((event.code === 'ShiftLeft' && listButtons.children[29].classList.contains('single-key--active')) || (event.code === 'ShiftRight' && listButtons.children[29].classList.contains('single-key--active'))) {
    addInnerTextToButtons(upperLetters);
  }

  if ((event.code !== 'ShiftLeft') && listButtons.children[42].classList.contains('single-key--active')) {
    key.forEach((element) => {
      element.classList.remove('single-key--active');
      listButtons.children[42].classList.add('single-key--active');
    });
  }

  if ((event.code !== 'ShiftRight') && listButtons.children[53].classList.contains('single-key--active')) {
    key.forEach((element) => {
      element.classList.remove('single-key--active');
      listButtons.children[53].classList.add('single-key--active');
    });
  }

  if ((!listButtons.children[53].classList.contains('single-key--active')) && (!listButtons.children[42].classList.contains('single-key--active')) && (event.code !== 'CapsLock') && (listButtons.children[29].classList.contains('single-key--active'))) {
    key.forEach((elem) => {
      elem.classList.remove('single-key--active');
      listButtons.children[29].classList.add('single-key--active');
    });
  }

  if ((!listButtons.children[53].classList.contains('single-key--active')) && (!listButtons.children[42].classList.contains('single-key--active')) && (event.code !== 'CapsLock') && (!listButtons.children[29].classList.contains('single-key--active'))) {
    key.forEach((elem) => {
      elem.classList.remove('single-key--active');
    });
  }
};

document.addEventListener('keydown', addActiveClassButton);
document.addEventListener('keyup', removeActiveClassButton);

// mouse action
const buttons = document.querySelectorAll('.single-key');

buttons.forEach((btn) => {
  const textarea = document.querySelector('.text-area');
  const listButtons = document.querySelector('.keyboard');
  let counterCapsLockSwitch = 0;
  let isShift = false;
  btn.addEventListener('mousedown', (eventDown) => {
    textarea.focus();
    btn.classList.add('single-key--active');
    if (eventDown.target.innerText.length === 1 && eventDown.target.innerText !== '❯') {
      textarea.setRangeText(eventDown.target.innerText, textarea.selectionEnd, textarea.selectionStart, 'end');
    } else if (eventDown.target.innerText === 'Tab') {
      textarea.setRangeText('   ', textarea.selectionStart, textarea.selectionEnd, 'end');
    } else if (eventDown.target.classList.contains('single-key--space')) {
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    } else if (eventDown.target.innerText === 'Backspace' && textarea.value.length > 0) {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
    } else if (eventDown.target.classList.contains('single-key--arrow-right')) {
      textarea.setRangeText('', textarea.selectionStart + 1, textarea.selectionEnd + 1, 'end');
    } else if (eventDown.target.classList.contains('single-key--arrow-left')) {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd - 1, 'end');
    } else if (eventDown.target.classList.contains('single-key--arrow-down')) {
      textarea.setRangeText('', 0, 0, 'end');
    } else if (eventDown.target.className.includes('single-key--arrow-up')) {
      textarea.setRangeText('', textarea.value.length, textarea.value.length, 'end');
    } else if (eventDown.target.innerText === 'CapsLock') {
      if (counterCapsLockSwitch === 0) {
        addInnerTextToButtons(upperLetters);
        counterCapsLockSwitch += 1;
      } else {
        addInnerTextToButtons(lowerLetters);
        counterCapsLockSwitch = 0;
      }
    } else if (eventDown.target.classList.contains('single-key--shift')) {
      if (!listButtons.children[29].classList.contains('single-key--active')) {
        addInnerTextToButtons(upperLetters);
        isShift = false;
      } else if (listButtons.children[29].classList.contains('single-key--active')) {
        addInnerTextToButtons(lowerLetters);
        isShift = true;
      }
    } else if (eventDown.target.innerText === 'Enter') {
      textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
    } else if (eventDown.target.innerText === 'Del' && textarea.value.length > 0) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
    } else if (eventDown.target.classList.contains('single-key')) {
      eventDown.target.classList.add('single-key--active');
    }
  });

  btn.addEventListener('mouseup', (eventUp) => {
    textarea.focus();
    if (eventUp.target.innerText === 'CapsLock' && counterCapsLockSwitch === 1) {
      eventUp.target.classList.add('single-key--active');
    } else if (isShift === false && !listButtons.children[29].classList.contains('single-key--active')) {
      addInnerTextToButtons(lowerLetters);
      eventUp.target.classList.remove('single-key--active');
    } else if (isShift === true) {
      addInnerTextToButtons(upperLetters);
      eventUp.target.classList.remove('single-key--active');
    } else {
      btn.classList.remove('single-key--active');
    }
  });
});
