import image from "../../assets/images/fieldgoal.gif";
import image2 from "../../assets/images/fieldgoal2.gif";

const text = `
**Field goal** (FG) é uma jogada especial em que o time ofensivo chuta a bola em direção ao gol adversário. Caso acerte,
ganhará 3 pontos.

O **field goal** só é possível caso o time ofensivo esteja a, no máximo, uma distância de 47 jardas da endzone adversária,
ou a 57 jardas do gol adversário. Quanto mais longe o FG, mais difícil de acertar.

O **field goal** pode ser invocado pelo comando **!fg**.

## Exemplo

Imagine que você esteja no time blue, atacando, e na seguinte situação:

> 4 & 20 @ Red 30

É improvável que você consiga avançar 20 jardas na última descida. Fazendo um **field goal**, você garantirá 3 pontos
para o seu time.

![Imagem](${image})

## Como acertar um field goal
Para chutar **field goals** longes, é importante conhecer as mecânicas do Haxball.

O mapa de futebol americano possui uma pequena quantidade de *bump*, percebível quando você esbarra em outro jogador
e é empurrado para trás. Ao encostar na bola para realizar o chute, você deve voltar levemente para trás,
esperando um quarto de segundo para então chutá-la de verdade. Isso fará com que o seu chute seja mais forte.

Além disso, é absolutamente crucial que o QB se posicione na mesma altura da bola, para evitar que a bola seja lançada
para a direção errada.

![Imagem](${image2})

`;

const article = {
    title: "Field Goal (Jogada)",
    category: "outras",
    text
}

export default article;