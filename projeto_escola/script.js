const aluno =
[
    {"id":"1",
    "nome":"Jose Carlos",
    "celular":"(99)99999999",
    "email":"josecarlos@gmail.com",
    "serie": "7",
    "turma": "7A",
    "grade_regular":
        [
            {"disciplina":"Matemática",
            "conteudo":"conteudo 1",
            "id":"1",
            "alunoId":"1"},

            {"disciplina":"Português",
            "conteudo":"conteudo 1",
            "id":"2",
            "alunoId":"1"},

            {"disciplina":"História",
            "conteudo":"conteudo 1",
            "id":"3",
            "alunoId":"1"},
             
            {"disciplina":"Geografia",
            "conteudo":"conteudo 1",
            "id":"4",
            "alunoId":"1"},
            
            {"disciplina":"Inglês",
            "conteudo":"conteudo 1",
            "id":"5",
            "alunoId":"1"},     
                 
            {"disciplina": "Arte",
            "conteudo":"conteudo 1",
            "id":"6",
            "alunoId":"1"},  

            {"disciplina":"Educação Física",
            "conteudo":"conteudo 1",
            "id":"7",
            "alunoId":"1"},
        ]
    "ativextra":
        [
            {"nome":"Desenho",
            "conteudo":"conteudo 1",
            "id":"1",
            "alunoId":"1"},

            {"nome":"Música",
            "conteudo":"conteudo 2",
            "id":"2",
            "alunoId":"1"},
        ]
    "provas":
        [
            {"id":"1",
            "prova1":"Prova de Matemática 1",
            "prova2":"Prova de Matemática 2",
            "prova3":"Prova de Matemática 3",
            "prova4":"Prova de Matemática 4",
            "alunoId":"1"}

            {"id":"2",
            "prova1":"Prova de Português 1",
            "prova2":"Prova de Português 2",
            "prova3":"Prova de Português 3",
            "prova4":"Prova de Português 4",
            "alunoId":"1"
            }

            {"id":"3",
            "prova1":"Prova de História 1",
            "prova2":"Prova de História 2",
            "prova3":"Prova de História 3",
            "prova4":"Prova de História 4",
            "alunoId":"1"
            }

            {"id":"4",
            "prova1":"Prova de Geografia 1",
            "prova2":"Prova de Geografia 2",
            "prova3":"Prova de Geografia 3",
            "prova4":"Prova de Geografia 4",
            "alunoId":"1"
            }

            {"id":"5",
            "prova1":"Prova de Inglês 1",
            "prova2":"Prova de Inglês 2",
            "prova3":"Prova de Inglês 3",
            "prova4":"Prova de Inglês 4",
            "alunoId":"1"
            }

            {"id":"6",
            "prova1":"Prova de Arte 1",
            "prova2":"Prova de Arte 2",
            "prova3":"Prova de Arte 3",
            "prova4":"Prova de Arte 4",
            "alunoId":"1"
            }

            {"id":"7",
            "prova1":"Prova de Educação Física 1",
            "prova2":"Prova de Educação Física 2",
            "prova3":"Prova de Educação Física 3",
            "prova4":"Prova de Educação Física 4",
            "alunoId":"1"
            }
        ]
    "notas":
        [
            {"id":"1",
            "nota1":"10",
            "nota2":"10",
            "nota3":"10",
            "nota4":"10",
            "provasId":"1",
            "alunoId":"1"}

            {"id":"2",
            "nota1":"10",
            "nota2":"10",
            "nota3":"10",
            "nota4":"10",
            "provasId":"2",
            "alunoId":"1"}

            {"id":"3",
            "nota1":"10",
            "nota2":"10",
            "nota3":"10",
            "nota4":"10",
            "provasId":"3",
            "alunoId":"1"}

            {"id":"4",
            "nota1":"10",
            "nota2":"10",
            "nota3":"10",
            "nota4":"10",
            "provasId":"4",
            "alunoId":"1"}

            {"id":"5",
            "nota1":"10",
            "nota2":"10",
            "nota3":"10",
            "nota4":"10",
            "provasId":"5",
            "alunoId":"1"}

            {"id":"6",
            "nota1":"10",
            "nota2":"10",
            "nota3":"10",
            "nota4":"10",
            "provasId":"6",
            "alunoId":"1"}

            {"id":"7",
            "nota1":"10",
            "nota2":"10",
            "nota3":"10",
            "nota4":"10",
            "provasId":"7",
            "alunoId":"1"}
        ]
    "faltas":
        [
            {"id":"1",
            "faltas":"0",
            "grade_regularId":"1",
            "alunoId":"1"}

            {"id":"2",
            "faltas":"2",
            "grade_regularId":"2",
            "alunoId":"1"}

            {"id":"3",
            "faltas":"2",
            "grade_regularId":"3",
            "alunoId":"1"}

            {"id":"4",
            "faltas":"0",
            "grade_regularId":"4",
            "alunoId":"1"}

            {"id":"5",
            "faltas":"0",
            "grade_regularId":"5",
            "alunoId":"1"}

            {"id":"6",
            "faltas":"0",
            "grade_regularId":"6",
            "alunoId":"1"}

            {"id":"7",
            "faltas":"0",
            "grade_regularId":"7",
            "alunoId":"1"}
        ]   

    } 
]




console.log(aluno);
console.log(typeof aluno);

const jsonData = JSON.stringify(aluno);

console.log(jsonData);
console.log(typeof jsonData);

const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);
