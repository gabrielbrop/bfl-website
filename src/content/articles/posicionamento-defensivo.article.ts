import image from "../../assets/images/posdef.png";
import image4 from "../../assets/images/cornerbacks.png";
import image5 from "../../assets/images/meu-cornerback-favorito.gif";
import image7 from "../../assets/images/fs1.png";
import image8 from "../../assets/images/fs2.png";
import image9 from "../../assets/images/fs3.png";
import image10 from "../../assets/images/posicionamento.gif";

const text = `
É **absolutamente essencial** a todos que estão começando a jogar que conhecam as posições básicas de defesa e como agir
durante o jogo. 

São três posições básica: Linebacker (LB), Corner Back (CB), Free Safety (FS).

![Imagem](${image})

## Corner Back

O objetivo do **Corner Back** (CB) é **bloquear os ângulos** de ataque do QB.

Os CBs devem ficar em cima das linhas horizontais (as *hashes*), bloqueando o ângulo do QB.

CBs não devem recuar para trás, e jamais deverão ficar atrás ou ao lado de um WR - lembre-se, o objetivo do CB é
bloquear totalmente o ângulo.

**Em hipótese alguma os CBs devem ficar "colados" a um jogador**, seguindo a movimentação dele. CBs que fizerem isso
poderão ser facilmente enganados pelo time ofensivo a abrir brechas.

Além disso, os CBs também são responsáveis por sacar o QB após os 12 segundos iniciais da descida.

Vejam como os CBs se posicionam de maneira a bloquear totalmente qualquer lançamento por parte do QB.

![Imagem](${image4})

### Exemplo de movimentação

Vejam como o CB marca os ângulos de ataque do QB de maneira que qualquer bola lançada possa ser defendida por ele.

![Imagem](${image5})

## Free Safety

O Free Safety (FS), mais comumente chamado somente de Safety, é um posicionamento um tanto singular. O seu objetivo principal é
evitar passes longos e fazer *interceptações*.

O Safety deve ficar sempre atrás do DWR, empurrando-o para o lado do LB. O Safety também deve ficar no lado oposto ao LB e ter
atenção máxima para *straights* (passes retos para o CB entre o CB e o LB).

### Exemplo 1

Posicionamento comum, FS levemente atrás do DWR, empurrando-o para o lado do LB, protegendo o buraco embaixo. Caso o QB
chute para o lado do FS, ele poderá facilmente bloquear o passe ou fazer uma *interceptação*.

![Imagem](${image7})

### Exemplo 2

Nesse exemplo o DWR está mais adiantado, disputando espaço com o LB. O FS deve, nesse caso, ficar no lado oposto do LB,
tampando o buraco entre ele e o CB.

O FS fica **no fundo, bem atrás**, e jamais muito perto do LB. Assim ele poderá bloquear passes longos tanto em cima quanto embaixo
e fazer interceptações.

![Imagem](${image8})

### Exemplo 3

Nesse exemplo o DWR está junto ao CWR, mais em cima. É um caso bem comum que confude um FS inexperiente.

O FS deve ficar centralizado, defendendo o buraco que o LB vai abrir para bloquear o DWR. E ele deve ficar **no fundo**,
literalmente bem atrás, para bloquear ou interceptar passes longos em ambos os lados.

**O FS JAMAIS deverá ficar mais adiantado que um DWR!**

![Imagem](${image9})

## Linebacker

O objetivo do Linebacker (LB) é marcar o jogador que estiver no meio.

O LB deve estar em sincronização com o FS para evitar passes longos, assim como sincronizar com o CB para tentar defender
*straights*.

### Animação ilustrativa

![Imagem](${image10})

`;

const article = {
    title: "Posicionamento Defensivo",
    category: "descidas",
    previewImg: image,
    desc: "É absolutamente essencial a todos que estão começando a jogar que conhecam as posições básicas de defesa e como agir durante o jogo.  São três posições básica: Linebacker (LB), Corner Back (CB), Free Safety (FS).",
    text
}

export default article;