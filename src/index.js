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
  const textArea = createComponent('textarea', 'text-area');
  textArea.style.backgroundColor = 'rgb(153, 170, 181)';
  mainDiv.append(textArea);
}

createWindow();
