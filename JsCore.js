
let Tex1=document.querySelector('#tex1');
let Tex2=document.querySelector('#tex2');
let Nr1=document.querySelector('#numar1');
let Email1=document.querySelector('#email1');
let Trimite1=document.querySelector('#trimite1');
let Trimite2=document.querySelector('#trimite2');
let NumeleTau=document.getElementById('tex1');
let EmailTau=document.getElementById('email1');
let Tabel=document.getElementById('Suma1');


Trimite1.addEventListener('click', VerForm2);
Trimite2.addEventListener('click', Renunta);
Trimite3.addEventListener('click', Schimba);
Tabel.addEventListener('click', tabel);


function Renunta() {
	let Confirma=confirm('Esti sigur ca vrei sa renunti?');
	if (Confirma==true) {
		window.location.replace('../index.html');
	}
};
	

function VerForm2() {

let SelectDiv=document.querySelector('#div111')

	let SelectareTot=document.querySelectorAll('.nou');
	for (i=0; SelectareTot.length>i; i++) {
		if (SelectareTot[i].value=='') {
			event.preventDefault();
			focus();
			SelectareTot[i].style.border = '1px solid red';
			SelectareTot[i].style.background = '#F6CECE';
		}
		else if (SelectareTot[i].value.length <5) {
			event.preventDefault();
			focus();
			SelectareTot[i].style.border = '1px solid #DF0101';
			SelectDiv.innerHTML='Verifica campurile obligatorii. minim 5 caractere!';
		}

		else if (SelectareTot[i].value.length >30) {
			event.preventDefault();
			SelectDiv.innerHTML='Adresa de e-mail este  mai mare de 30 de caractere!';
		}

	}

};


function Schimba() {

	let Selectare=document.querySelectorAll('option');
	let SelectareInput=document.getElementById('Suma1');
	let SelectDiv=document.getElementById('Div2');
	let Selection=document.getElementById('Select1').value;

		if (SelectareInput.value =='') {
			SelectDiv.innerHTML="Verifica datele introduse.";
			focus();
			SelectareInput.style.border = '1px solid #DF0101';
			SelectareInput.style.background = '#F6CECE';
			SelectDiv.style.width = '250px';
			SelectDiv.style.background = '#F6CECE';
			SelectDiv.style.border = '1px solid red';
			SelectDiv.style.color = 'black';
			stopImmediatePropagation(); 
		};

		if (SelectareInput.value.length >10) {
			SelectDiv.innerHTML="Suma introdusa este mai mare de 10 cifre.";
			focus();
			SelectareInput.style.border = '1px solid #DF0101';
			SelectareInput.style.background = '#F6CECE';
			stopImmediatePropagation();
		};

		if (isNaN(SelectareInput.value)){
			SelectDiv.innerHTML="Verifica datele introduse.";
			focus();
			SelectareInput.style.border = '1px solid #DF0101';
			SelectareInput.style.background = '#F6CECE';
			stopImmediatePropagation();
		};

	switch (Selection) {
		case 'Euro':
			let RezEuro=(SelectareInput.value*4.6782);
			SelectDiv.innerHTML='<h2>'+RezEuro.toFixed(2)+' Lei </h2>';
			SelectDiv.style.width = '250px';
			SelectDiv.style.background = 'blue';
			SelectDiv.style.border = '1px solid black';
			SelectDiv.style.color = 'yellow';
			focus();
			SelectareInput.style.border = '';
			SelectareInput.style.background = '';
			break;
		case 'Dolar':
			let RezDolar=(SelectareInput.value*4.0586);
			SelectDiv.innerHTML='<h2>'+RezDolar.toFixed(2)+' Lei </h2>';
			SelectDiv.style.width = '250px';
			SelectDiv.style.background = '#A9F5A9';
			SelectDiv.style.border = '1px solid black';
			SelectDiv.style.color = 'black';
			focus();
			SelectareInput.style.border = '';
			SelectareInput.style.background = '';
			break;
		case 'Yen':
			let RezYen=(SelectareInput.value*3.7493);
			SelectDiv.innerHTML='<h2>'+RezYen.toFixed(2)+' Lei </h2>';
			SelectDiv.style.width = '250px';
			SelectDiv.style.background = 'white';
			SelectDiv.style.border = '1px solid black';
			SelectDiv.style.color = 'red';
			focus();
			SelectareInput.style.border = '';
			SelectareInput.style.background = '';
			break;
		case 'Lira':
			let RezLira=(SelectareInput.value*5.1833);
			SelectDiv.innerHTML='<h2>'+RezLira.toFixed(2)+' Lei </h2>';
			SelectDiv.style.width = '250px';
			SelectDiv.style.background = 'blue';
			SelectDiv.style.border = '1px solid black';
			SelectDiv.style.color = 'red';
			focus();
			SelectareInput.style.border = '';
			SelectareInput.style.background = '';
			break;
		default:
			SelectDiv.innerHTML='Selecteaza o valoare!';
			break;
	}

};
