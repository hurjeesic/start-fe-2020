import { render } from './html-render';
import { loadData } from './data-manager';
import formInput from './form-input';
import './todos.css';

const $result = document.querySelector('#result');

const todos = loadData();

$result.addEventListener('click', (event) => {
  const { className } = event.target;
  const { index } = event.target.parentElement.dataset;
  if (className === 'delete') {
    todos.splice(index, 1);
  } else if (className === 'toggle-checked') {
    // todos[index].isDone = !todos[index].isDone;
  }

  render(todos);
});

formInput.init(todos);
render(todos);
