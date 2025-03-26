let aluno = prompt("Informe o nome do aluno:");
let nota = [];

let promptNota = parseInt(prompt("Informe a nota do aluno:"));
nota.push(promptNota);

while(confirm("Quer adicionar mais notas?") == true) {
    let promptNota2 = parseInt(prompt("Informe a nota do aluno:"));
    nota.push(promptNota2);
}

let soma = 0;

soma = nota.reduce((diariodenotas, nota) => diariodenotas + nota)

let media = soma / nota.length;

let mapaAluno = aluno;
let mapaNota = nota.map(x => x);

document.writeln("Nome do aluno: " + mapaAluno + "<br/>");
document.writeln("Notas do aluno: " + mapaNota + "<br/>");
document.writeln("Média do aluno: " + media + "<br/><br/>");
document.writeln("");

if(media >=7) {
        document.writeln(aluno + " aprovado! A média foi: " + media + "<br/><br/>");
    } else {
        document.writeln(aluno + " reprovado! A média foi: " + media + "<br/><br/>");
    }

document.writeln("=======================================" + "<br/><br/>");

while(confirm("Quer adicionar mais alunos?") == true) {
    let aluno = prompt("Informe o nome do aluno:");
    let nota = [];

    let promptNota = parseInt(prompt("Informe a nota do aluno:"));
    nota.push(promptNota);

    while(confirm("Quer adicionar mais notas?") == true) {
        let promptNota2 = parseInt(prompt("Informe a nota do aluno:"));
        nota.push(promptNota2);
    }

    let soma = 0;

    let soma = nota.reduce((diariodenotas, nota) => diariodenotas + nota)

    let media = soma / nota.length;

    let mapaAluno = aluno;
    let mapaNota = nota.map(x => x);

    document.writeln("Nome do aluno: " + mapaAluno + "<br/>");
    document.writeln("Notas do aluno: " + mapaNota + "<br/>");
    document.writeln("Média do aluno: " + media + "<br/><br/>");
    document.writeln("");
    
    if(media >=7) {
        document.writeln(aluno + " aprovado! A média foi: " + media + "<br/><br/>");
    } else {
        document.writeln(aluno + " reprovado! A média foi: " + media + "<br/><br/>");
    }
    
    document.writeln("=======================================" + "<br/><br/>");
}
