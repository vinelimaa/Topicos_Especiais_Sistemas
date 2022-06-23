var requestURL = 'https://vinelimaa.github.io/teste/dados.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var escola = request.response;

populateTable(escola);
}

function populateTable(jsonObj) {

var table = document.querySelector('.tabela-notas');
var thead = document.querySelector('.headtb');
var tbody = document.querySelector('.corpo-tabela');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('notas').appendChild(table);

var row_1 = document.createElement('tr');
var heading_1 = document.createElement('th');
heading_1.innerHTML = "<b>Aluno</b>";
var heading_2 = document.createElement('th');
heading_2.innerHTML = "<b>Matemática</b>";
var heading_3 = document.createElement('th');
heading_3.innerHTML = "<b>Português</b>";
var heading_4 = document.createElement('th');
heading_4.innerHTML = "<b>História</b>";
var heading_5 = document.createElement('th');
heading_5.innerHTML = "<b>Geografia</b>";
var heading_6 = document.createElement('th');
heading_6.innerHTML = "<b>Inglês</b>";
var heading_7 = document.createElement('th');
heading_7.innerHTML = "<b>Futebol</b>";
var heading_8 = document.createElement('th');
heading_8.innerHTML = "<b>Desenho</b>";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
thead.appendChild(row_1);

var alunos = jsonObj['alunos'];
for (var i = 0; i < alunos.length; i++) {
	var row_2 = document.createElement('tr');
	var heading_1 = document.createElement('td');

	heading_1.textContent = alunos[i].nome;
	row_2.appendChild(heading_1);

	var notas = alunos[i].notas;
	for (var j = 0; j < notas.length; j++) {

		var heading_2 = document.createElement('td');
		var heading_3 = document.createElement('td');
		var heading_4 = document.createElement('td');
		var heading_5 = document.createElement('td');
		var heading_6 = document.createElement('td');
		var heading_7 = document.createElement('td');
		var heading_8 = document.createElement('td');

		heading_2.textContent = notas[j].nota_matematica;
		heading_3.textContent = notas[j].nota_portugues;
		heading_4.textContent = notas[j].nota_historia;
		heading_5.textContent = notas[j].nota_geografia;
		heading_6.textContent = notas[j].nota_ingles;
		heading_7.textContent = notas[j].nota_desenho;
		heading_8.textContent = notas[j].nota_musica;

		row_2.appendChild(heading_2);
		row_2.appendChild(heading_3);
		row_2.appendChild(heading_4);
		row_2.appendChild(heading_5);
		row_2.appendChild(heading_6);
		row_2.appendChild(heading_7);
		row_2.appendChild(heading_8);
		tbody.appendChild(row_2);

		}
	}
}
