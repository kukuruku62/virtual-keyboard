import './index.html';
import './style.scss';

const buttonsEnglishLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

function createComponent(tag, classNam) {
  const element = document.createElement(tag, classNam);
  element.classList.add(classNam);
  return element;
}
// назначение кнопкам доп классов, если их размеры нестадартные
function createKeyboard(keyboardArea) {
  buttonsEnglishLower.forEach((item) => {
    const addBtn = createComponent('div', 'single-key');
    addBtn.innerText = item;
    if (item === 'Tab') {
      addBtn.classList.add('single-key--tab');
    }
    if (item === 'CapsLock' || item === 'Enter' || item === 'Backspace') {
      addBtn.classList.add('single-key--backspace');
    }
    if (item === 'Shift') {
      addBtn.classList.add('single-key--shift');
    }
    if (item === 'ArrowLeft') {
      addBtn.innerText = '<';
    }
    if (item === 'ArrowRight') {
      addBtn.innerText = '>';
    }
    if (item === 'ArrowDown') {
      addBtn.classList.add('single-key--arrow-down');
      addBtn.innerText = '>';
    }
    if (item === 'ArrowUp') {
      addBtn.classList.add('single-key--arrow-up');
      addBtn.innerText = '>';
    }
    if (item === ' ') {
      addBtn.classList.add('single-key--space');
      addBtn.innerText = '';
    }
    keyboardArea.append(addBtn);
  });
  // return keyboardArea;
}

function createWindow() {
  const mainDiv = createComponent('div', 'main-div');
  document.body.append(mainDiv);
  const title = createComponent('h1', 'title');
  title.innerText = 'RSS Virtual keyboard';
  mainDiv.append(title);
  const textArea = createComponent('textarea', 'text-area');
  mainDiv.append(textArea);
  textArea.focus(); // устанавливает автофокус в textearea
  const keyboardArea = createComponent('div', 'keyboard');
  mainDiv.append(keyboardArea);
  createKeyboard(keyboardArea);
}

createWindow();

const key = document.querySelectorAll('.single-key');
// const listButtons = document.querySelector('.keyboard');
// const new = listButtons.querySelectorAll()

document.onkeydown = function addActiveClass(event) {
  // console.log(event.code)
  // console.log(event.key)
  const listButtons = document.querySelector('.keyboard');
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltRight' || event.code === 'AltLeft' || event.code === 'Space' || event.code === 'Delete' || event.code === 'ArrowLeft' || event.code === 'ArrowRight' || event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'ArrowUp' || event.code === 'MetaLeft' || event.code === 'Tab') {
    switch (event.code) {
      case 'ShiftLeft': {
        listButtons.children[42].classList.add('single-key--active');
        break;
      }
      case 'ShiftRight': {
        listButtons.children[53].classList.add('single-key--active');
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
            const textArea = document.querySelector('textarea');
            textArea.setRangeText('    ', textArea.selectionStart, textArea.selectionEnd, 'end');
          }
        }());
        break;
      }
      default:
        break;
    }
  } else {
    key.forEach((item, index) => {
      if (item.innerText === event.key) {
        key[index].classList.add('single-key--active');
      }
    });
  }
};

document.onkeyup = function removeActiveClass() {
  key.forEach((el) => {
    el.classList.remove('single-key--active');
  });
};
