const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilos de folha de cascata.",
        "Uma linguagem de programação para desenvolvimento web.",
        "Um banco de dados não relacional.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dados primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade, sem fazer conversões de tipo.",
        "Atribui um valor a uma variável.",
        "Compara dois valores para igualdade, fazendo conversões de tipo se necessário.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar um elemento HTML usando um seletor CSS.",
        "Selecionar um elemento HTML pelo seu ID.",
        "Selecionar um elemento HTML pelo nome da classe.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é chamada dentro de outra função.",
        "Uma função que é executada imediatamente após ser definida.",
        "Uma função que é passada como argumento para outra função, para ser chamada posteriormente.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i <= 5; i++)",
        "loop (i = 0; i <= 5; i++)",
        "for (i <= 5; i++)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Remover um ouvinte de evento de um elemento.",
        "Adicionar um ouvinte de evento a um elemento.",
        "Definir um evento para um elemento.",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array.",
        "Adiciona um elemento ao final do array.",
        "Inverte a ordem dos elementos do array.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
      respostas: [
        "Converte uma string em um número inteiro.",
        "Converte um número em uma string.",
        "Remove espaços em branco de uma string.",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas ) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }  
    
  
      quizItem.querySelector('dl').appendChild(dt)    
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela    
    quiz.appendChild(quizItem)
  }