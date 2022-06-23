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

	var tableA = document.querySelector('.tabela-A');
	var theadA = document.querySelector('.headtb-A');
	var tbodyA = document.querySelector('.corpo-tabela-A');

	var tableB = document.querySelector('.tabela-B');
	var theadB = document.querySelector('.headtb-B');
	var tbodyB = document.querySelector('.corpo-tabela-B');

	var tableC = document.querySelector('.tabela-C');
	var theadC = document.querySelector('.headtb-C');
	var tbodyC = document.querySelector('.corpo-tabela-C');

	tableA.appendChild(theadA);
	tableA.appendChild(tbodyA);

	tableB.appendChild(theadB);
	tableB.appendChild(tbodyB);

	tableC.appendChild(theadC);
	tableC.appendChild(tbodyC);


	document.getElementById('tabela-A').appendChild(tableA);
	document.getElementById('tabela-B').appendChild(tableB);
	document.getElementById('tabela-C').appendChild(tableC);

	
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

	var alunos = jsonObj['alunos'];
	for (var i = 0; i < alunos.length; i++) {
		if(alunos[i].turma=="7A"){
		var row_2 = document.createElement('tr');
		var heading_1 = document.createElement('td');

		heading_1.textContent = alunos[i].nome;
		row_2.appendChild(heading_1);

		var frequencia = alunos[i].frequencia;
		for (var j = 0; j < frequencia.length; j++) {

			var heading_2 = document.createElement('td');
			var heading_3 = document.createElement('td');
			var heading_4 = document.createElement('td');
			var heading_5 = document.createElement('td');
			var heading_6 = document.createElement('td');
			var heading_7 = document.createElement('td');
			var heading_8 = document.createElement('td');

			heading_2.textContent = frequencia[j].matematica;
			heading_3.textContent = frequencia[j].portugues;
			heading_4.textContent = frequencia[j].historia;
			heading_5.textContent = frequencia[j].geografia;
			heading_6.textContent = frequencia[j].ingles;
			heading_7.textContent = frequencia[j].desenho;
			heading_8.textContent = frequencia[j].musica;

			row_2.appendChild(heading_2);
			row_2.appendChild(heading_3);
			row_2.appendChild(heading_4);
			row_2.appendChild(heading_5);
			row_2.appendChild(heading_6);
			row_2.appendChild(heading_7);
			row_2.appendChild(heading_8);
			tbodyA.appendChild(row_2);
			}
		}
	}
		
}


	
