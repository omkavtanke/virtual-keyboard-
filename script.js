const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'textarea');
document.getElementById('body').append(textarea);

const div = document.createElement('div');
div.setAttribute('class', 'keyboard');
document.getElementById('body').append(div);

const words = 'К сожалению успел только это ((( ';

document.getElementById('body').append(words);

const lt = ['й', 81, 'ц', 87, 'у', 69, 'к', 82, 'е', 84, 'н', 89, 'г', 85, 'ш', 73, 'щ', 79, 'з', 80, 'х', 219, 'ъ', 221, 'ф', 65, 'ы', 83, 'в', 68, 'а', 70, 'п', 71, 'р', 72, 'о', 74, 'л', 75, 'д', 76, 'ж', 186, 'э', 222, 'я', 90, 'ч', 88, 'с', 67, 'м', 86, 'и', 66, 'т', 78, 'ь', 77, 'б', 188, 'ю', 190];
const keys = [
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 'ShiftLeft',
  90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];
function init() {
  let letters = '';
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i] === 219) {
      letters += `<div class ="key" data = "${keys[i]}">[</div>`;
    } else if (keys[i] === 221) {
      letters += `<div class ="key" data = "${keys[i]}">]</div>`;
    } else if (keys[i] === 186) {
      letters += `<div class ="key" data = "${keys[i]}">;</div>`;
    } else if (keys[i] === 222) {
      letters += `<div class ="key" data = "${keys[i]}">'</div>`;
    } else if (keys[i] === 188) {
      letters += `<div class ="key" data = "${keys[i]}">,</div>`;
    } else if (keys[i] === 190) {
      letters += `<div class ="key" data = "${keys[i]}">.</div>`;
    } else if (keys[i] === 191) {
      letters += `<div class ="key" data = "${keys[i]}">/</div>`;
    } else if (keys[i] === 220) {
      letters += `<div class ="key slash" data = "${keys[i]}"> &#92</div> <br>`;
    } else if (keys[i] === 13) {
      letters += `<div class ="key enter" data = "${keys[i]}">Enter</div> <br>`;
    } else if (keys[i] === 9) {
      letters += `<div class ="key tab" data = "${keys[i]}">Tab</div>`;
    } else if (keys[i] === 20) {
      letters += `<div class ="key caps" data = "${keys[i]}">Caps</div>`;
    } else if (keys[i] === 'ShiftLeft') {
      letters += `<div class ="key shift" data = "${keys[i]}">Shift</div> `;
    } else if (keys[i] === 'ShiftRight') {
      letters += `<div class ="key shift ShiftRight" data = "${keys[i]}">Shift</div> `;
    } else if (keys[i] === 'ArrowUp') {
      letters += `<div class ="key arrow material-icons" data = "${keys[i]}">arrow_upward</div> `;
    } else if (keys[i] === 'ControlLeft') {
      letters += `<div class ="key ctrl" data = "${keys[i]}">Ctrl</div> `;
    } else if (keys[i] === 'ControlRight') {
      letters += `<div class ="key  ctrl" data = "${keys[i]}">Ctrl</div> `;
    } else if (keys[i] === 'MetaLeft') {
      letters += `<div class ="key  win" data = "${keys[i]}"><img class = 'windows' src = "././images/icons8-windows-11-50.png"></div> `;
    } else if (keys[i] === 'AltLeft') {
      letters += `<div class ="key alt" data = "${keys[i]}">Alt</div> `;
    } else if (keys[i] === 'AltRight') {
      letters += `<div class ="key alt" data = "${keys[i]}">Alt</div> `;
    } else if (keys[i] === 'ArrowLeft') {
      letters += `<div class ="key arrow material-icons" data = "${keys[i]}">arrow_back</div> `;
    } else if (keys[i] === 'ArrowDown') {
      letters += `<div class ="key arrow material-icons" data = "${keys[i]}">arrow_downward</div> `;
    } else if (keys[i] === 'ArrowRight') {
      letters += `<div class ="key arrow material-icons" data = "${keys[i]}">east</div> `;
    } else if (keys[i] === 'Space') {
      letters += `<div class ="key space" data = "${keys[i]}">Space</div> `;
    } else {
      letters += `<div class ="key" data = "${keys[i]}">${String.fromCharCode(keys[i])}</div>`;
    }
  }
  document.querySelector('.keyboard').innerHTML = letters;
}
init();
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftRight') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'ShiftLeft') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'ArrowUp') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'ControlLeft') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'ControlRight') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'MetaLeft') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'AltRight') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'AltLeft') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else if (event.code === 'Space') {
    document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.code}"]`).classList.remove('active');
    }, 130);
  } else {
    document.querySelector(`.keyboard .key[data="${event.keyCode}"]`).classList.add('active');
    setTimeout(() => {
      document.querySelector(`.keyboard .key[data="${event.keyCode}"]`).classList.remove('active');
    }, 130);
  }
});
function rusLetter() {
  let letters = '';
  for (let i = 0; i < lt.length; i += 1) {
    if (lt[i] === 'ф') {
      letters += '<br>';
    } else if (lt[i] === 'я') {
      letters += '<br>';
    }
    letters += `<div class ="key"  data = "${lt[i + 1]}">${lt[i]}</div>`;
    i += 1;
  }
  document.querySelector('.keyboard').innerHTML = letters;
}

let flag = false;
document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft') {
    flag = true;
  }
  if (event.code === 'ShiftLeft' && flag) {
    rusLetter();
  }
});

document.querySelectorAll('.keyboard .key').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelectorAll('.keyboard .key').forEach((object) => {
      object.classList.remove('active');
    });
    this.classList.add('active');
  });
});
