// Função principal do jogo
function iniciarJogo() {
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End? Digite 'Front' ou 'Back'");
    
    if (area.toLowerCase() === "front") {
        let tecnologia = prompt("Você quer aprender React ou Vue? Digite 'React' ou 'Vue'");
        alert(`Ótima escolha! ${tecnologia} é muito usado no desenvolvimento moderno.`);
    } else if (area.toLowerCase() === "back") {
        let tecnologia = prompt("Você quer aprender C# ou Java? Digite 'C#' ou 'Java'");
        alert(`Ótima escolha! ${tecnologia} é muito utilizado no backend.`);
    } else {
        alert("Escolha inválida! Reinicie o jogo e tente novamente.");
        return;
    }
    
    let especializacao = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack? Digite 'Especializar' ou 'Fullstack'");
    
    if (especializacao.toLowerCase() === "especializar") {
        alert("Muito bom! Aprofundar seus conhecimentos na área escolhida fará de você um especialista!");
    } else if (especializacao.toLowerCase() === "fullstack") {
        alert("Ótima decisão! Ser Fullstack permite que você tenha uma visão ampla do desenvolvimento de software!");
    } else {
        alert("Escolha inválida! Reinicie o jogo e tente novamente.");
        return;
    }
    
    let tecnologias = [];
    let continuar = true;
    
    while (continuar) {
        let novaTecnologia = prompt("Digite uma tecnologia que você gostaria de aprender:");
        tecnologias.push(novaTecnologia);
        
        continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' para continuar ou qualquer outra tecla para sair.").toLowerCase() === "ok";
    }
    
    alert(`Ótima lista de aprendizado! Você quer aprender: ${tecnologias.join(", ")}. Continue assim e se tornará um grande profissional!`);
}

// Iniciar o jogo
iniciarJogo();
