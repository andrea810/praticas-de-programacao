# Lojinha da Unidade

Projeto desenvolvido durante a disciplina de **Práticas de Programação** do curso de **Ciência da Computação**. A linguagem utilizada nesta unidade é o **JavaScript**.

A proposta é uma pequena loja virtual ("lojinha") onde é possível escolher a quantidade de cada produto e acompanhar o valor total da compra sendo atualizado em tempo real.

---

## Sobre o projeto

A página mostra uma tabela com alguns produtos (celular, notebook e televisão), e para cada um deles temos:

- Imagem do produto
- Nome, código e cor
- Preço unitário
- Botões para aumentar (+) ou diminuir (–) a quantidade
- Total daquele produto

No rodapé, é exibido o **Subtotal**, que soma o total de todos os produtos.

A cada clique nos botões, o JavaScript recalcula o valor do produto e o subtotal automaticamente, sem precisar recarregar a página.

---

## Tecnologias utilizadas

- **HTML** — estrutura da página
- **CSS** — estilos personalizados
- **JavaScript** — lógica de cálculo e interatividade
- **Bootstrap 5** — para deixar a tabela e os botões com um visual pronto
- **Bootstrap Icons** — ícones (carrinho, loja, + e –)

---

## Como funciona (de forma simples)

O arquivo `funcoes.js` é responsável por toda a lógica. As principais funções são:

- **`alterarQtd(produto, acao)`** → aumenta ou diminui a quantidade de um produto. Também impede que a quantidade fique menor que zero.
- **`soma()`** → percorre todos os produtos e calcula o subtotal da compra.
- **`somenteNumeros(n)`** → remove o "R$" e outros símbolos, deixando apenas os números (para conseguir fazer as contas).
- **`formatarValor(n)`** → formata o resultado no padrão brasileiro (ex.: `R$1.000`).

---

## Como executar

Por ser um projeto simples, não precisa instalar nada:

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` no seu navegador (Chrome, Firefox, etc.).
3. Use os botões **+** e **–** para alterar as quantidades e veja o subtotal mudar.

   <img width="1916" height="799" alt="image" src="https://github.com/user-attachments/assets/6203d5ed-fb40-4e64-b437-2c74b4e3b4bd" />


---

## Estrutura dos arquivos

```
loja/
├── index.html        # Página principal da loja
├── css/
│   └── style.css     # Estilos da página
├── js/
│   └── funcoes.js    # Funções em JavaScript
└── img/              # Imagens dos produtos
```

---

## O que aprendi neste projeto

- Manipular elementos da página com JavaScript (`getElementById`)
- Trabalhar com eventos de clique (`onclick`)
- Fazer cálculos e formatar valores em dinheiro
- Usar o Bootstrap para acelerar a parte visual
- Organizar o código separando HTML, CSS e JavaScript em arquivos diferentes

---

Projeto acadêmico desenvolvido no 1º período de Ciência da Computação, com fins de estudo e aprendizado.
