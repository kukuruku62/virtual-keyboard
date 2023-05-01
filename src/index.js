import './index.html';
import './style.scss';

const buttonsEnglishLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

const buttonsEnglishUpperShiftOn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];
// document.onkeydown = function (event) {
//   buttonsEnglishUpper.push(event.key); //вывод в консоль списка нажатых кнопок, удалить!
//   console.log(buttonsEnglishUpper);
// };

const createComponent = function newComponent(tag, classNam) {
  const element = document.createElement(tag, classNam);
  element.classList.add(classNam);
  return element;
};

// функция отрисовки кнопок и символов в них
const createButtons = function singleBtns(keyboardArea) {
  buttonsEnglishLower.forEach((item) => {
    const singleBtn = createComponent('div', 'single-key');
    // singleBtn.innerText = item; // присваевает кнопке название/innerText из массива
    if (item === 'Tab') {
      singleBtn.classList.add('single-key--tab');
    }
    if (item === 'CapsLock' || item === 'Enter' || item === 'Backspace') {
      singleBtn.classList.add('single-key--backspace');
    }
    if (item === 'Shift') {
      singleBtn.classList.add('single-key--shift');
    }
    // if (item === 'ArrowLeft') {
    //   singleBtn.innerText = '<';
    // }
    // if (item === 'ArrowRight') {
    //   singleBtn.innerText = '>';
    // }
    // if (item === 'ArrowDown') {
    //   singleBtn.classList.add('single-key--arrow-down');
    //   singleBtn.innerText = '>';
    // }
    // if (item === 'ArrowUp') {
    //   singleBtn.classList.add('single-key--arrow-up');
    //   singleBtn.innerText = '>';
    // }
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
  textArea.focus(); // устанавливает автофокус в textearea
  const keyboardArea = createComponent('div', 'keyboard');
  mainDiv.append(keyboardArea);
  createButtons(keyboardArea);
};

createWorkArea();

const addInnerTextToButtons = function addText(arrSymbols) {
  const arrayButtons = document.querySelectorAll('.single-key');
  arrayButtons.forEach((button, index) => {
    const eachBtn = button;
    eachBtn.innerText = arrSymbols[index];
    if (index === 60) {
      eachBtn.innerText = '<';
    }
    if (index === 63) {
      eachBtn.innerText = '>';
    }
    if (index === 62) {
      eachBtn.classList.add('single-key--arrow-down');
      eachBtn.innerText = '>';
    }
    if (index === 61) {
      eachBtn.classList.add('single-key--arrow-up');
      eachBtn.innerText = '>';
    }
  });
};

addInnerTextToButtons(buttonsEnglishLower);

const key = document.querySelectorAll('.single-key');

// function checkPressShift(event) {
//   // if (event.keyShift) {
//     addInnerTextToButtons(buttonsEnglishUpperShiftOn)
//   // }
// }

// window.addEventListener('keydown', checkPressShift);

const addActiveClassButton = function addClass(event) {
  // console.log(event.code)
  // console.log(event.key)
  // console.log(event)
  const listButtons = document.querySelector('.keyboard');

  if (event.shiftKey) {
    addInnerTextToButtons(buttonsEnglishUpperShiftOn);
  }
  if (event.code === 'ShiftRight' || event.code === 'ShiftLeft' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltRight' || event.code === 'AltLeft' || event.code === 'Space' || event.code === 'Delete' || event.code === 'ArrowLeft' || event.code === 'ArrowRight' || event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'ArrowUp' || event.code === 'MetaLeft' || event.code === 'Tab') {
    switch (event.code) {
      case 'ShiftLeft': {
        listButtons.children[42].classList.add('single-key--active');
        // addInnerTextToButtons(buttonsEnglishUpperShiftOn);
        // if (event.repeat || event.shiftKey) {
        //   addInnerTextToButtons(buttonsEnglishUpperShiftOn);
        // }
        break;
      }
      case 'ShiftRight': {
        listButtons.children[53].classList.add('single-key--active');
        // addInnerTextToButtons(buttonsEnglishUpperShiftOn);
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
            textArea.setRangeText('   ', textArea.selectionStart, textArea.selectionEnd, 'end');
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

const removeActiveClassButton = function removeClass(event) {
  const listButtons = document.querySelector('.keyboard');
  addInnerTextToButtons(buttonsEnglishLower)
  key.forEach((el, index) => {
    // console.log(index)
    // console.log(el)

    el.classList.remove('single-key--active');
    // if (event.code === '')
    if (event.shiftKey) {
      listButtons.children[42].classList.add('single-key--active');
      addInnerTextToButtons(buttonsEnglishUpperShiftOn);
    }
    // addInnerTextToButtons(buttonsEnglishLower);
  });
};

document.addEventListener('keydown', addActiveClassButton);
document.addEventListener('keyup', removeActiveClassButton);
// // const keyb = document.querySelector('keyboard');
// // keyb.addEventListener('click', function (ee) {
// //   console.log(ee.innerText);
// // });

// // document.onkeydown = function (e) {
// //   if (e.shiftKey) {
// //     console.log('dfgdgdf')
// //   }
// // };
// // document.onclick = function (event) {
// //   console.log(event.code);
// //   console.log(event);
// // }

// document.onkeydown = function (event) {
//   console.log(event.code);
//   console.log(event.key);
//   console.log(event);
//   console.log(event.shiftKey);
//   console.log(event.repeat);
// };