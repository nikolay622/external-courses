/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
let taskId = 0;
const boardElement = document.getElementById('board');

const data = localStorage.getItem('savedData');

const boardsMocks = data ? JSON.parse(data) : [
  { title: 'Backlog', issues: [] },
  { title: 'Ready', issues: [] },
  { title: 'In-progress', issues: [] },
  { title: 'Finished', issues: [] },
];

const buttons = [];

boardsMocks.forEach((element, index) => {
  const rootElement = document.createElement('div');
  rootElement.className = 'board__column';
  rootElement.id = element.title;

  const titleElement = document.createElement('h4');
  titleElement.className = 'board__title';
  titleElement.innerText = element.title;
  rootElement.append(titleElement);

  const itemsElement = document.createElement('div');
  itemsElement.className = 'board__items';
  rootElement.append(itemsElement);

  function addIssue(id, value) {
    const taskElement = document.createElement('div');
    taskElement.className = 'board__task';
    taskElement.innerText = value;
    taskElement.id = id;

    itemsElement.append(taskElement);
  }

  element.issues.forEach((issue) => {
    addIssue(issue.id, issue.value);
  });

  const fieldElement = document.createElement('input');
  if (index === 0) {
    fieldElement.className = 'board__field';

    fieldElement.onblur = function (e) {
      const { value } = e.target;

      if (!value) {
        return false;
      }
      const id = `taks-${taskId += 1}`;
      addIssue(id, value);
      e.target.value = '';
      fieldElement.classList.remove('active');
      boardsMocks[index].issues.push({ id, value });
      localStorage.setItem('savedData', JSON.stringify(boardsMocks));
      if (buttons[index + 1]) {
        buttons[index + 1].disabled = false;
      }

      return true;
    };

    rootElement.append(fieldElement);
  }

  const buttonElement = document.createElement('button');
  buttonElement.className = 'board_button';
  buttonElement.innerText = '+ Add task';
  buttonElement.disabled = index > 0 && boardsMocks[index - 1].issues.length === 0;
  buttons.push(buttonElement);

  // eslint-disable-next-line no-unused-vars
  buttonElement.onclick = function (e) {
    if (index === 0) {
      fieldElement.classList.add('active');
      return null;
    }

    const tasks = boardsMocks[index - 1].issues;

    console.log(tasks);
    if (tasks) {
      const menuElement = document.createElement('div');
      menuElement.className = 'board__menu';
      tasks.forEach((task, idx) => {
        const menuButtonElement = document.createElement('button');
        menuButtonElement.className = 'board__menu-button';
        menuButtonElement.innerText = task.value;

        menuButtonElement.onclick = function () {
          const el = document.getElementById(task.id);

          itemsElement.append(el);
          rootElement.removeChild(menuElement);

          boardsMocks[index - 1].issues.splice(idx, 1);
          boardsMocks[index].issues.push(task);
          buttonElement.disabled = index > 0 && boardsMocks[index - 1].issues.length === 0;

          if (buttons[index + 1]) {
            buttons[index + 1].disabled = false;
          }
          localStorage.setItem('savedData', JSON.stringify(boardsMocks));
        };

        menuElement.append(menuButtonElement);
      });
      rootElement.append(menuElement);
    }
  };
  rootElement.append(buttonElement);
  boardElement.append(rootElement);
});
