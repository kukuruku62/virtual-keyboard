import './index.html';
import './style.scss';

function createComponent(tag, classNam) {
  const element = document.createElement(tag, classNam);
  element.classList.add(classNam);
  return element;
}

function createWindow() {
  const mainDiv = createComponent('div', 'main-div');
  document.body.append(mainDiv);
  const title = createComponent('h1', 'title');
  title.innerText = 'RSS Virtual keyboard';
  mainDiv.append(title);
  const textArea = createComponent('textarea', 'text-area');
  textArea.style.backgroundColor = 'rgb(153, 170, 181)';
  mainDiv.append(textArea);
  const keyboardArea = createComponent('div', 'keyboard');
  mainDiv.append(keyboardArea);
}

createWindow();
