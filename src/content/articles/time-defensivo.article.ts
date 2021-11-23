import image from "../../assets/images/trad.png";
import image2 from "../../assets/images/2man.png";
import image3 from "../../assets/images/areainvasao.png";
import image4 from "../../assets/images/cornerbacks.png";
import image5 from "../../assets/images/meu-cornerback-favorito.gif";
import image6 from "../../assets/images/4man.png";
import image7 from "../../assets/images/fs1.png";
import image8 from "../../assets/images/fs2.png";
import image9 from "../../assets/images/fs3.png";

const text = `
O **time defensivo** deverá **evitar o avanço** do time ofensivo, isto é, impedir que um WR receba a
bola ou derrubá-lo caso ele conseguia recebê-la.

## Tipos de posicionamento

### Tradicional

Consiste de dois **Corner Backs** (CB) protegendo as laterais, um **Linebacker** (LB) protegendo o meio
 e um **Free Safety** para defender bolas longas e fazer interceptações.

#### Características

* O Free Safety, se for bom, conseguirá fazer interceptações com maior frequência, dando vantagem ao time.
* Arremessos longos são mais frequentes, fazendo com que o time adversário consiga conquistar mais jardas.

![Imagem](${image})

### 2 Man

Diferente da tradicional, a defesa 2 Man possui dois LBs, e nenhum Safety. A ideia é impedir totalmente
bolas longas. Apesar de interceptações serem raras com 2 Man, o time inimigo tende a ganhar menos jardas.

#### Características

* Time ofensivo tende a avançar poucas jardas.
* Como não tem Free Safety, se a bola passar pelo meio (entre os dois LBs) ou entre o CB e o LB, o time adversário
conseguirá facilmente fazer um touchdown.

![Imagem](${image2})

### 4 Man

Posicionamento especial em que todos os jogadores ficam recuados em linha. O objetivo desta defesa é **impedir jogadas longas**,
e acontece principalmente ao final de jogos, quando times que tiverem perdendo tentarão fazer passes longos para rapidamente
conseguir um touchdown e virar a partida.

![Imagem](${image6})

## Área de invasão

O time defensivo deverá evitar a área demarcada na imagem, a não ser que um jogador da ofensiva esteja nela.
Ficar nessa área por mais de 3 segundos sem que ninguém do time ofensivo esteja nela ocorrerá em uma
falta de invasão, também conhecida como crowd abusing, dando ao time ofensivo jardas extras e o direito de repetir a descida.

A falta de invasão será mais aprofundada na seção de faltas.

![Imagem](${image3})
`;

const article = {
    title: "Time Defensivo",
    category: "descidas",
    text
}

export default article;