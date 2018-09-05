// скрыть или показать блок
var show;
function showModal() {
	if(show) {
    document.getElementById('toggle').style.display = 'none';
    show = false;
  } else {
    document.getElementById('toggle').style.display = 'block';
    show = true;
  }
}
// закрыть модальное окно кнопкой
function closeModal() {
	document.getElementById('toggle' ).style.display = 'none';
	show = false;
}

// ввод только цифр
document.getElementsByTagName('input')[0].onkeypress = function(e) {
  e = e || event;

  if (e.ctrlKey || e.altKey || e.metaKey) return;

  var chr = getChar(e);

  if (chr == null) return;

  if (chr < '0' || chr > '9') {
    return false;
  }
}

function getChar(event) {
  if (event.which == null) {
    if (event.keyCode < 32) return null;
    return String.fromCharCode(event.keyCode);
  }

  if (event.which != 0 && event.charCode != 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which);
  }

  return null;
}


// Приветствие по национальности
var writeHello = document.getElementById('helloGender');
	writeHello.innerHTML = 'Привіт!'

function radioClick(radioItem){
	if (radioItem.value == 'Germany') {
		writeHello.innerHTML = 'Hallo!';
	} else if (radioItem.value == 'Poland') {
		writeHello.innerHTML = 'Czesc!';
	} else {
		writeHello.innerHTML = 'Привіт!';
	}
}