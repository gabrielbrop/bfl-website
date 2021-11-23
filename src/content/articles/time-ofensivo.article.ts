import image from "../../assets/images/ofensiva.png";
import image2 from "../../assets/images/descida2.gif";

const text = `
O time ofensivo tem direito a **4 descidas**. Nelas, ela deverá avançar **20 jardas** (até a **linha de first down**) para
conseguir mais outras 4 descidas ou um touchdown. Senão, o time adversário se tornará o time ofensivo.

O time ofensivo tem o **Quarterback** (QB), que digitá **hike** e chutará a bola para que os **Wide Receivers** (WR)
a peguem. Assim que um WR pegar a bola, ele deverá correr para a **endzone** adversária para fazer **touchdown**.
Caso ele seja pego antes de chegar na endzone, o time ofensivo avança para a linha onde ele parou e o número
de jardas percorridas durante a descida será adicionada às 20 jardas necessárias.

> ⚠️ O QB tem 15 segundos para dar hike, senão perderá a descida

> ⚠️ O QB jamais deverá carregar a bola, senão será considerado falta

## Posicionamento
Os WRs que ficam em cima e embaixo são chamados de **Corner Wide Receivers** (CWR), enquanto que o que fica mais ao
fundo é chamado de **Deep Wide Receiver** (DWR).

O objetivo dos WRs é achar brechas na defesa para que possam receber a bola do QB.

![Imagem](${image})

## Exemplo
Nesse exemplo, o QB acha uma brecha na formação do time defensivo e joga a bola para o WR pegar e correr para fazer touchdown.

![Imagem](${image2})
`;

const article = {
    title: "Time Ofensivo",
    category: "descidas",
    text
}

export default article;