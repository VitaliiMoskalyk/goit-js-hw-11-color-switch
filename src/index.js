import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('[data-action="start"]');
startBtnRef.addEventListener('click', changerColor);

const stopBtnRef = document.querySelector('[data-action="stop"]');
stopBtnRef.addEventListener('click', changerColor);

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changerColor(event) {
    
  if (event.target.dataset.action === 'start') {
    startBtnRef.disabled=true;
        intervalId=setInterval(()=>event.target.closest('body').style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)], 1000);
        startBtnRef.removeEventListener('click',changerColor);
    };

  if (event.target.dataset.action === 'stop') {
    startBtnRef.disabled=false;
        clearInterval(intervalId);
        startBtnRef.addEventListener('click', changerColor);
    } 
}

