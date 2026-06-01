const quizData = [
    {
        question: "Qual é o principal objetivo da agricultura sustentável?",
        options: [
            "Maximizar produção sem considerar impactos ambientais",
            "Atender às necessidades atuais de alimento e matérias-primas sem comprometer recursos futuros",
            "Eliminar completamente o uso de tecnologia na agricultura",
            "Reduzir drasticamente a produção agrícola"
        ],
        correct: 1,
        explanation: "A agricultura sustentável busca equilibrar a produção com a preservação ambiental, garantindo alimento e recursos para gerações futuras.",
        info: "A sustentabilidade agrícola é baseada em três pilares: viabilidade econômica, responsabilidade social e proteção ambiental."
    },
    {
        question: "Qual prática agrícola ajuda a reduzir a erosão do solo?",
        options: [
            "Monocultura intensiva",
            "Plantio convencional com revolvimento total do solo",
            "Plantio direto e rotação de culturas",
            "Uso excessivo de pesticidas"
        ],
        correct: 2,
        explanation: "O plantio direto e a rotação de culturas mantêm a estrutura do solo, reduzindo erosão e mantendo a fertilidade.",
        info: "Essas práticas preservam a matéria orgânica do solo e aumentam a biodiversidade microbiana."
    },
    {
        question: "Qual é o impacto ambiental da pecuária convencional em larga escala?",
        options: [
            "Redução de gases de efeito estufa",
            "Emissão de gases de efeito estufa, desmatamento e degradação de solos",
            "Aumento da cobertura vegetal",
            "Melhoria na qualidade da água"
        ],
        correct: 1,
        explanation: "A pecuária em larga escala é responsável por significativas emissões de metano e desmatamento para criação de pastos.",
        info: "O gado produz metano através de processos digestivos, um gás com potencial de aquecimento global 25x maior que o CO₂."
    },
    {
        question: "O que é agricultura orgânica certificada?",
        options: [
            "Qualquer agricultura sem uso de máquinas",
            "Produção de alimentos sem uso de agroquímicos sintéticos, seguindo padrões certificados",
            "Agricultura realizada apenas em pequenas propriedades",
            "Plantio apenas de frutas e verduras"
        ],
        correct: 1,
        explanation: "Agricultura orgânica certificada segue normas rigorosas e é auditada por órgãos certificadores reconhecidos.",
        info: "A certificação garante que nenhum agrotóxico sintético, fertilizante químico ou OGM foi utilizado na produção."
    },
    {
        question: "Qual é a importância da biodiversidade nas áreas agrícolas?",
        options: [
            "Diminui a produtividade das culturas",
            "Aumenta custos de produção desnecessariamente",
            "Melhora a polinização, reduz pragas e aumenta a resiliência do sistema",
            "Não possui importância significativa"
        ],
        correct: 2,
        explanation: "A biodiversidade em áreas agrícolas estimula a polinização natural, controla pragas e fortalece o ecossistema.",
        info: "Áreas com maior biodiversidade são mais resilientes a mudanças climáticas e pragas."
    },
    {
        question: "Qual alternativa representa melhor gestão de água na agricultura?",
        options: [
            "Irrigação por aspersão sem controle em dias quentes",
            "Plantio exclusivamente em períodos de chuva forte",
            "Irrigação por gotejamento e coleta de água da chuva",
            "Não utilizar irrigação em nenhuma circunstância"
        ],
        correct: 2,
        explanation: "Irrigação por gotejamento reduz desperdício em até 60% e sistemas de coleta de chuva otimizam o uso da água.",
        info: "A agricultura consome cerca de 70% da água doce do planeta, tornando a eficiência hídrica crítica."
    },
    {
        question: "O que são 'serviços ecossistêmicos' fornecidos pela agricultura sustentável?",
        options: [
            "Apenas a produção de alimentos",
            "Benefícios fornecidos pela natureza como polinização, purificação de água e sequestro de carbono",
            "Serviços de entrega de produtos agrícolas",
            "Construção de infraestrutura rural"
        ],
        correct: 1,
        explanation: "Serviços ecossistêmicos incluem polinização, ciclagem de nutrientes, regulação climática e purificação de água.",
        info: "Estima-se que serviços ecossistêmicos tenham valor econômico de trilhões de dólares globalmente."
    },
    {
        question: "Como a agroecologia se diferencia da agricultura convencional?",
        options: [
            "Usa mais agroquímicos para maior eficiência",
            "Integra conhecimentos tradicionais com ciência, valorizando ecossistemas naturais",
            "Depende totalmente de máquinas de alta tecnologia",
            "Nega qualquer forma de tecnologia"
        ],
        correct: 1,
        explanation: "A agroecologia busca trabalhar COM a natureza, utilizando princípios ecológicos e conhecimentos locais para produção sustentável.",
        info: "Agroecologia reconhece que agricultores são guardiões do meio ambiente e dos conhecimentos ancestrais."
    },
    {
        question: "Qual impacto do desmatamento relacionado à agricultura?",
        options: [
            "Aumento de biodiversidade",
            "Redução de gases de efeito estufa",
            "Perda de biodiversidade, mudanças climáticas e degradação do solo",
            "Melhoria na qualidade do ar"
        ],
        correct: 2,
        explanation: "O desmatamento para expandir áreas agrícolas reduz sumidouros de carbono e elimina habitats naturais.",
        info: "A Floresta Amazônica, alvo de desmatamento para pecuária, absorve 150 a 200 bilhões de toneladas de carbono."
    },
    {
        question: "O que são 'culturas de cobertura' e qual sua função?",
        options: [
            "Plantas colocadas para sombrear outras culturas",
            "Plantas cultivadas para proteger o solo, fixar nitrogênio e reduzir erosão entre plantios principais",
            "Apenas plantas ornamentais para paisagismo",
            "Coberturas plásticas para proteção de plantações"
        ],
        correct: 1,
        explanation: "Culturas de cobertura como leguminosas fixam nitrogênio no solo, reduzem erosão e melhoram a estrutura do solo.",
        info: "Exemplos incluem trigo, aveia e plantas de cobertura como crotalária e mucuna."
    },
    {
        question: "Como a tecnologia de Inteligência Artificial pode contribuir para agricultura sustentável?",
        options: [
            "Não há aplicações úteis de IA na agricultura",
            "Apenas para aumentar produção sem considerar sustentabilidade",
            "Para otimizar uso de insumos, monitorar saúde de plantas e prever pragas",
            "Apenas para comercializar produtos"
        ],
        correct: 2,
        explanation: "IA permite precisão no uso de água, fertilizantes e pesticidas, reduzindo desperdícios e impactos ambientais.",
        info: "Drones e sensores combinados com IA podem reduzir uso de insumos em até 30% mantendo ou aumentando produtividade."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
let userAnswers = [];

function loadQuestion() {
    const quiz = quizData[currentQuestion];
    const quizContainer = document.getElementById('quizContainer');
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    let optionsHTML = '';
    quiz.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestion] === index;
        optionsHTML += `
            <div class="option ${answered ? (index === quiz.correct ? 'correct' : index === userAnswers[currentQuestion] ? 'incorrect' : '') : ''}">
                <label>
                    <input type="radio" name="option" value="${index}" ${isSelected ? 'checked' : ''} ${answered ? 'disabled' : ''}>
                    <span>${option}</span>
                </label>
            </div>
        `;
    });

    let feedbackHTML = '';
    if (answered) {
        feedbackHTML = `
            <div class="feedback">
                <h3>${userAnswers[currentQuestion] === quiz.correct ? '✓ Resposta Correta!' : '✗ Resposta Incorreta'}</h3>
                <p><strong>Explicação:</strong> ${quiz.explanation}</p>
                <div class="info-box">${quiz.info}</div>
            </div>
        `;
    }

    quizContainer.innerHTML = `
        <div class="question-container">
            <div class="question-number">Pergunta ${currentQuestion + 1} de ${quizData.length}</div>
            <div class="question-text">${quiz.question}</div>
            <div class="options">
                ${optionsHTML}
            </div>
            ${feedbackHTML}
        </div>
    `;

    document.getElementById('nextBtn').disabled = !answered && userAnswers[currentQuestion] === undefined;
}

function nextQuestion() {
    if (!answered) {
        const selected = document.querySelector('input[name="option"]:checked');
        if (!selected) return;
        userAnswers[currentQuestion] = parseInt(selected.value);
        if (userAnswers[currentQuestion] === quizData[currentQuestion].correct) {
            score++;
        }
        answered = true;
        loadQuestion();
    } else {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            answered = false;
            loadQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    const percentage = (score / quizData.length) * 100;
    let message = '';
    let emoji = '';

    if (percentage === 100) {
        message = 'Excelente! Você é um especialista em agricultura sustentável! 🌟';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message = 'Muito bom! Você tem um ótimo conhecimento sobre o tema! 👏';
        emoji = '⭐';
    } else if (percentage >= 60) {
        message = 'Bom desempenho! Continue aprendendo sobre sustentabilidade agrícola. 📚';
        emoji = '✅';
    } else {
        message = 'Continue estudando! A sustentabilidade agrícola é fundamental para nosso futuro. 🌱';
        emoji = '📖';
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `
        <h2>${emoji} Resultado Final</h2>
        <div class="score">${score}/${quizData.length}</div>
        <p style="font-size: 18px; color: #667eea; font-weight: bold;">
            ${percentage.toFixed(1)}%
        </p>
        <p class="result-message">${message}</p>
        <div class="feedback">
            <h3>Resumo do Desempenho:</h3>
            <p><strong>Respostas Corretas:</strong> ${score}</p>
            <p><strong>Respostas Incorretas:</strong> ${quizData.length - score}</p>
            <p><strong>Acurácia:</strong> ${percentage.toFixed(1)}%</p>
        </div>
    `;

    document.getElementById('quizContainer').classList.add('hidden');
    resultContainer.classList.remove('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('resetBtn').innerHTML = 'Fazer Quiz Novamente';
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    userAnswers = [];
    document.getElementById('resultContainer').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('resetBtn').innerHTML = 'Reiniciar';
    loadQuestion();
}

// Inicializar quiz
loadQuestion();
