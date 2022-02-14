import image from "../../assets/images/invasao2.gif";
import image2 from "../../assets/images/areainvasao.png";
import image3 from "../../assets/images/invasao.gif";

const text = `
A falta de **invasão**, também conhecida como *crowd abuse*, consiste na invasão da área da bola por parte da defesa durante uma
descida. Ficar por mais que 3 segundos nessa região sem que nenhum jogador do time ofensivo esteja nela resultará em 10 jardas
de penalidade pro time defensivo.

![Imagem](${image})

## Área da invasão

A área da invasão é um retângulo que avança 10 jardas no campo do time ofensivo e é delimitado nas laterais por uma linha
horizontal imaginária que passa no centro dos *hashes*.

![Imagem](${image2})

## Regras de funcionamento

### Contagem

A contagem da falta de invasão é sempre reiniciada ou desativada quando:
* **Todos** os jogadores invasores deixem a área
* Um jogador do time ofensivo entre na área

### Limites da área

O jogador pode ficar até metade do boneco dentro da área sem estar invadindo. Assim que a maior parte do boneco estiver dentro,
começa a contagem.

## Exemplo de invasão

![Imagem](${image3})
`;

const article = {
    title: "Invasão",
    category: "faltas",
    previewImg: image,
    desc: "A falta de invasão, também conhecida como crowd abuse, consiste na invasão da área da bola por parte da defesa durante uma descida. Ficar por mais que 3 segundos nessa região sem que nenhum jogador do time ofensivo esteja nela resultará em 10 jardas de penalidade pro time defensivo.",
    text
}

export default article;