const dadosProjetos = [
    { imagem: "fotos/duckmafh.png", titulo: "Duck´s Math", linguagens: ["HTML", "CSS", "JavaScript"], descricao: "Jogo matemático interativo para estudos de cálculo avançado.", botaoTexto: "Jogar", link: "https://luizsim.github.io/duck-s-math/menu.html" },
    { imagem: "fotos/calc.png", titulo: "Calculadora de Polinômios", linguagens: ["C++"], descricao: "Uma calculadora de polinômios que roda exclusivamente para a placa ESP8266. (Código modificado para melhor entendimento.)", botaoTexto: "Ver código", link: "https://github.com/LuizSim/calculadora-de-polin-mio/blob/main/Cpolinomio/main.cpp" },
    { imagem: "fotos/IMC.png", titulo: "Percentual de Água e IMC", linguagens: ["HTML", "CSS", "JavaScript"], descricao: "Um site que calcula aproximadamente seu percentual de água essencial para você e mostra seu IMC.", botaoTexto: "Visitar site", link: "https://luizsim.github.io/IMC/" },
    { imagem: "fotos/resumidor IA.png", titulo: "Resumidor com IA", linguagens: ["Python"], descricao: "Um software que resume vídeos do YouTube utilizando inteligência artificial e salva o resumo em um arquivo de texto.", botaoTexto: "Download", link: "https://drive.google.com/uc?export=download&id=1NNMP5VDBqIjFvsIIhBB97TcBJSnxcmpx" },
    { imagem: "fotos/dashboard.png", titulo: "DashBoard", linguagens: ["Python", "Excel"], descricao: "Um programa que extrai dados de um documento PDF, gera uma planilha no Excel e utiliza a mesma para criar um DashBoard interativo e claro em seus resultados.", botaoTexto: "Ver código", link: "https://github.com/LuizSim/dashboard/blob/main/dashboard/dashboard_dados_pessoas.py" },
    { imagem: "fotos/prt.png", titulo: "Portfolio DEV", linguagens: ["HTML", "CSS", "JavaScript", "React"], descricao: "Meu portfolio de desenvolvedor web, feito exclusivamente com as bases do front-end.", botaoTexto: "Ver código", link: "https://github.com/LuizSim/Portif-lio" },
    { imagem: "fotos/1.png", titulo: "CriptografiAPP", linguagens: ["C#"], descricao: "CriptografiaApp é um software que criptografa e descriptografa arquivos com segurança usando AES, permitindo gerar e armazenar chaves.", botaoTexto: "Download", link: "https://drive.google.com/uc?export=download&id=1p787uec8NQh669X_2jHi7YtXRH43nPQx" },
    { imagem: "fotos/2.png", titulo: "CriptografiAPP versão Python", linguagens: ["Python"], descricao: "Uma versão do software feito em python para moderamento de testes e estudo da lógica do software final.", botaoTexto: "Download", link: "https://drive.google.com/uc?export=download&id=15z4bN0iGsriPopmcUIJFcynnLcB0vXuS" }
];

const container = document.querySelector('.projetos-container');

dadosProjetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('projeto-card');
    const linguagensHTML = projeto.linguagens.map(linguagem => {
        const linguagemFormatada = linguagem.replace("C++", "cpp").replace("C#", "cs").toLowerCase();
        return `<span class="linguagem ${linguagemFormatada}" style="opacity: 0; transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; transform: translateY(-20px);">${linguagem}</span>`;
    }).join('');
    card.innerHTML = `
        <div class="card-front">
            <img src="${projeto.imagem}" alt="${projeto.titulo}">
            <div class="titulo-linguagem">${linguagensHTML}</div>
            <h3>${projeto.titulo}</h3>
        </div>
        <div class="card-back">
            <p class="TD">${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank" rel="noopener noreferrer" class="btn">${projeto.botaoTexto}</a>
        </div>
    `;
    card.addEventListener('mouseenter', () => {
        card.querySelectorAll('.linguagem').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });
    card.addEventListener('mouseleave', () => {
        card.querySelectorAll('.linguagem').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-20px)';
        });
    });
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
