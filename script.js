let aluno = prompt("Informe o nome do aluno:");
let nota = [];

let promptNota = parseInt(prompt("Informe a nota do aluno:"));
nota.push(promptNota);

while(confirm("Quer adicionar mais notas?") == true) {
    let promptNota2 = parseInt(prompt("Informe a nota do aluno:"));
    nota.push(promptNota2);
}

let soma = 0;

for(let i = 0; i < nota.length; i++) {
    soma += nota[i];
}

let media = soma / nota.length;

let mapaAluno = aluno;
let mapaNota = nota.map(x => x);

document.writeln("Nome do aluno: " + mapaAluno + "<br/>");
document.writeln("Notas do aluno: " + mapaNota + "<br/>");
document.writeln("Média do aluno: " + media + "<br/><br/>");
document.writeln("");

if(media >=7) {
    document.writeln(aluno + " foi aprovado!" + "<br/><br/>");
} else {
    document.writeln("Aluno reprovado!" + "<br/><br/>");
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

    for(let i = 0; i < nota.length; i++) {
        soma += nota[i];
    }

    let media = soma / nota.length;

    let mapaAluno = aluno;
    let mapaNota = nota.map(x => x);

    document.writeln("Nome do aluno: " + mapaAluno + "<br/>");
    document.writeln("Notas do aluno: " + mapaNota + "<br/>");
    document.writeln("Média do aluno: " + media + "<br/><br/>");
    document.writeln("");
    
    if(media >=7) {
        document.writeln(aluno + " foi aprovado! Sua média foi: " + media + "<br/><br/>");
    } else {
        document.writeln("Reprovado! Sua média foi: " + media + "<br/><br/>");
    }
    
    document.writeln("=======================================" + "<br/><br/>");
}