# Boas vindas ao Pixels Arts!

Neste projeto, foi desenvolvido um um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco. Este foi o primeiro projeto onde pude praticar e acessar dados do HTML com o JavaScript por meio dos seletores do DOM ( Document Object Model). Tambem utilizei bootstrap junto com css para estilização.

![Project Gif](./images/image-pixel-art.png)

## 🔧 Instalação
Para utilizar o repositório no desenvolvimento, siga os seguintes passos:

1 - Clone o repositório: 
```
git clone git@github.com:Arthutepio/pixels-arts.git
cd pixels-arts
```
2 - Instale as dependências na raiz do projeto:
```
npm install
```
3 - Rode a aplicação com a extensão do Live Server:

[Live Server](https://github.com/ritwickdey/vscode-live-server-plus-plus)


## 🛠️ Desenvolvido com:
* [JavaScript](https://github.com/topics/javascript) - Linguagem de script;
* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - Linguagem de Marcação de HiperTexto;
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)- Estilização em cascata;
* [BOOTSTRAP](https://getbootstrap.com/)- Framework CSS para ser utilizado no front-end de aplicações web;


## Tasks:
Parte do projeto foi desenvolvido pela [Trybe](https://app.betrybe.com/) e me foi solicitado que desenvolvesse os seguintes requisitos:
## 1 - Adicione à página o título "Paleta de Cores".

<details>
  <summary>A página deve conter o título "Paleta de Cores"</summary><br />

- O título deverá ficar dentro de uma tag `h1` com o `ID` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

**O que será testado:**

- O título deve possuir a tag `h1`;
- O título deve possuir o `ID` `title`;
- O título deve ser `Paleta de Cores`.

</details>

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

<details>
  <summary>A página deve conter uma paleta com quatro opções de cores</summary>

- A paleta de cores deve ser um elemento com `ID` denominado `color-palette`, e cada cor individual contida na paleta de cores deve possuir a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não deve conter cores repetidas.

**O que será testado:**

- A paleta de cores deve possuir o `ID` `color-palette`;

- As cores individuais da paleta devem possuir a `classe` `color`;

- A cor de fundo de cada elemento da paleta é a cor que o elemento representa :warning: **A única cor não permitida na paleta é a cor branca** :warning:;

- Os elementos da paleta de cores devem ter borda preta, sólida e com 1 pixel de largura;

- As cores da paleta devem estar lado a lado;

- A paleta de cores deve estar posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não pode conter cores repetidas.

</details>

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

<details>
  <summary>A primeira cor na paleta criada no requisito 2 deve ser preta. As demais cores podem ser escolhidas livremente. </summary><br />

**O que será testado:**

- A primeira cor da paleta deve possuir `background-color ` preto;

</details>

## 4 - Adicione à página um quadro contendo 25 pixels.

<details>
  <summary>Sua página deve conter um quadro de pixels 5x5</summary>

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `ID` denominado `pixel-board`, e cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos "pixels" que compõem o quadro de pixels deve ser branca;

- O quadro de "pixels" deve aparecer abaixo da paleta de cores.

**O que será testado:**

- O quadro de "pixels" deve possuir o `ID` `pixel-board`;

- Cada pixel individual dentro do quadro deve possuir a `classe` `pixel`;

- A cor inicial dos "pixels" dentro do quadro deve ser branca;

- O quadro de "pixels" deve aparecer abaixo da paleta de cores.

</details>


## 5 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

<details>
  <summary>Cada <code>pixel</code> do quadro deve possuir 40px de largura e 40px de altura e uma borda preta sólida de 1px de espessura</summary><br />

**O que será testado:**

- O quadro de "pixels" deve possuir altura e comprimento de 5 elementos;

- Os elementos do quadro devem possuir 40 px de altura e 40 px de largura, incluindo o seu conteúdo e excluindo a borda preta;

- Os elementos do quadro devem possuir borda preta sólida de 1px de espessura.

</details>

## 6 - Defina a cor preta como cor inicial da paleta de cores

<details>
  <summary>A cor preta já deve estar selecionada na paleta para pintar os pixels do quadro ao iniciar a página.</summary>

- O elemento que posteriormente deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

- O elemento da cor preta deve possuir inicialmente a classe `selected`.

**O que será testado:**

- O elemento da cor preta possui, inicialmente, a classe `selected`;

- Nenhuma outra cor da paleta pode ter a classe `selected` ao carregar a página.

</details>

## 7 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.

<details>
  <summary>A cor clicada deve ser selecionada e poderá ser utilizada para preencher os quadros</summary>

- A cor clicada deve receber a `classe` `selected` e a cor previamente selecionada deve perder esta `classe`;

- Somente uma das cores da paleta pode ter a classe `selected` de cada vez;

- Os elementos que deverão receber a `classe` `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será testado:**

- Somente uma cor da paleta de cores pode ter a classe `selected` de cada vez;

- Os pixels dentro do quadro não devem ter a classe `selected` quando são clicados.

</details>

## 8 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

<details>
  <summary>O <code>pixel</code> do quadro clicado deve ter sua cor alterada para a cor selecionada na paleta de cores</summary><br />

**O que será testado:**

- Ao carregar a página deve ser possível pintar os pixels do quadro de preto;

- Após selecionar outra cor na paleta de cores, é possível pintar os pixels do quadro com essa cor;

- Somente o pixel que foi clicado deve ter a cor alterada, sem influenciar na cor dos demais pixels.

</details>

## 9 - Crie um botão que retorne a cor do quadro para a cor inicial.

<details>
  <summary>Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca</summary><br />

**O que será testado:**

- O botão deve possuir o `ID` `clear-board`;

- O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve possuir o texto `Limpar`;

- O botão ao ser clicado, deve deixar todos os pixels do quadro preenchidos de branco.

</details>

# Requisitos Bônus

## 10 - Crie um input que permita à pessoa usuária preencher um novo tamanho para  o quadro de pixels.

<details>
  <summary>A página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels</summary>

- Crie um input com `ID` `board-size` posicionado entre a paleta de cores e o quadro de pixels para receber um valor maior que zero para definir o tamanho do quadro de pixels.

- Crie um botão que deve conter o texto "VQV" e `ID` `generate-board`;

- O botão deve estar posicionado ao lado do input;

- O botão, ao ser clicado, deve alterar o tamanho do quadro para **N** pixels de largura e **N** pixels de altura, em que **N** é o número inserido no input. Ou seja, se o valor passado para o input for igual a 7, ao clicar no botão, será gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

**O que será testado:**

- O input deve possuir o `ID` `board-size`;

- O input deve aceitar apenas números maiores que zero. Essa restrição deve ser feita usando os atributos do elemento `input`;

- O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve possuir o `ID` `generate-board`;

- O botão deve possuir o texto `VQV`;

- O botão deve estar posicionado ao lado direito do input;

- O botão, ao ser clicado, deve mudar o tamanho do board usando o valor do input;

- O botão, ao ser clicado sem valor definido no input, deve emitir um `alert` com o texto: `Board inválido!`;

- O quadro gerado deve ter todos os pixels preenchidos com a cor branca.

</details>

## 11 - Crie uma função que limite o tamanho mínimo e máximo do quadro de pixels.

<details>
  <summary>O quadro não pode ser definido com menos de 5 ou mais de 50 <code>pixels</code></summary>

- Caso o valor digitado no input `board-size` esteja fora do intervalo de 5 a 50, faça:

  1. Para um valor de `board-size` menor que 5, considere 5 `pixels` como o valor padrão;

  2. Para um valor de `board-size` maior que 50, considere 50 `pixels` como o valor padrão.

**O que será testado:**

- A altura do board pode ser igual a 50;

- A altura do board é 5 pixels quando um valor menor que 5 é colocado no input;

- A altura do board é 50 pixels quando um valor maior que 50 é colocado no input.

</details>

## 12 - Crie uma função para gerar as cores aleatoriamente, com exceção da cor preta, ao carregar a página.

<details>
  <summary>A primeira cor da sua paleta deve ser a cor preta, e as outras três cores deve ser geradas aleatoriamente.</summary><br />

**O que será testado:**

- A cor preta é a primeira na sua paleta de cores;

- As cores geradas na paleta são diferentes a cada carregamento da página.

</details>



Criado por [Trybe](https://www.betrybe.com/) e desenvolvido com ❤️ por [Arthur Costa](https://arthutepio-portifolio.vercel.app/) 😊
[![Linkedin](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/arthutepio/) [![Github](https://skillicons.dev/icons?i=github)](https://www.linkedin.com/in/arthutepio/) 
