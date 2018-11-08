const button = document.querySelector('button');
function createAlert(e) {
	alert('Nappia klikattu');
}

button.addEventListener('click', createAlert);