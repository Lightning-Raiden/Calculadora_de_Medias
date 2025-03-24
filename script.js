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

if(media >=7) {
    alert(aluno + " foi aprovado! Sua média foi: " + media);
} else {
    alert("Reprovado! Sua média foi: " + media);
}

let mapaAluno = aluno;
let mapaNota = nota.map(x => x);

document.writeln(mapaAluno);
document.writeln(mapaNota, media);

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

    if(media >=7) {
        alert(aluno + " foi aprovado! Sua média foi: " + media);
    } else {
        alert("Reprovado! Sua média foi: " + media);
    }

    let mapaAluno = aluno;
    let mapaNota = nota.map(x => x);

    document.writeln(mapaAluno);
    document.writeln(mapaNota, media);
}