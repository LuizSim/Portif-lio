const dadosProjetos = [
    { imagem: "fotos/duckmafh.png", titulo: "Duck´s Math", descricao: "Jogo matemático interativo para estudos de cálculo avançado.", botaoTexto: "Jogar", link: "https://luizsim.github.io/duck-s-math/menu.html" },
    { imagem: "fotos/calc.png", titulo: "Calculadora de Polinômios", descricao: "Uma calculadora de polinômios que roda exclusivamente para a placa ESP8266. (Código modificado para melhor entendimento.)", botaoTexto: "Ver código", link: "https://github.com/LuizSim/calculadora-de-polin-mio/blob/main/Cpolinomio/main.cpp" },
    { imagem: "fotos/IMC.png", titulo: "Percentual de Água e IMC", descricao: "Um site que calcula aproximadamente seu percentual de água essencial para você e mostra seu IMC.", botaoTexto: "Visitar site", link: "https://luizsim.github.io/IMC/" },
    { imagem: "fotos/resumidor IA.png", titulo: "Resumidor com IA", descricao: "Um software que resume vídeos do YouTube utilizando inteligência artificial e salva o resumo em um arquivo de texto com o resumo.", botaoTexto: "Download", link: "https://drive.usercontent.google.com/download?id=1NNMP5VDBqIjFvsIIhBB97TcBJSnxcmpx&export=download&authuser=1" },
    { imagem: "fotos/dashboard.png", titulo: "DashBoard", descricao: "Um programa que extrai dados de um documento PDF, gera uma planilha no Excel e utiliza a mesma para criar um DashBoard interativo e claro em seus resultados.", botaoTexto: "Ver código", link: "https://github.com/LuizSim/dashboard/blob/main/dashboard/dashboard_dados_pessoas.py" },
    { imagem: "fotos/prt.png", titulo: "Portfolio DEV", descricao: "Meu portfolio de desenvolvedor web, feito exclusivamento com as bases do front-end.", botaoTexto: "Ver código", link: "https://github.com/LuizSim/Portif-lio" }
];

const container = document.querySelector('.projetos-container');

dadosProjetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('projeto-card');
    card.innerHTML = `
        <div class="card-front">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            <h3>${projeto.titulo}</h3>
        </div>
        <div class="card-back">
            <p class="TD">${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank" rel="noopener noreferrer" class="btn">${projeto.botaoTexto}</a>
        </div>
    `;
    container.appendChild(card);
});

const cards = document.querySelectorAll('.projeto-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xRotate = ((y / rect.height) - 0.7) * -22;
        const yRotate = ((x / rect.width) - 0.7) * 22;

        card.style.transform = `scale(1.1) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    });
});
