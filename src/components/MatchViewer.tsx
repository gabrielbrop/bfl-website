import React from 'react';

import { useParams } from "react-router-dom";
import MaterialTable from "material-table";

const style: React.CSSProperties = {
    paddingTop: "5%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "20vw",
    paddingLeft: "5%",
    position: "absolute",
    wordBreak: "break-word",
    maxHeight: "96%",
    overflowY: "auto"
}

const styleMobile: React.CSSProperties = {
    paddingTop: "20%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    paddingLeft: "5%",
    position: "absolute",
    wordBreak: "break-word",
    maxHeight: "96%",
    overflowY: "auto"
}

const portugueseLocalization: typeof MaterialTable["prototype"]["props"]["localization"] = {
    body: {
        emptyDataSourceMessage: 'Nenhum registro para exibir'
    },
    toolbar: {
        searchTooltip: 'Pesquisar',
    },
    pagination: {
        labelRowsSelect: 'linhas',
        labelDisplayedRows: '{count} de {from}-{to}',
        firstTooltip: 'Primeira página',
        previousTooltip: 'Página anterior',
        nextTooltip: 'Próxima página',
        lastTooltip: 'Última página'
    }
};

interface MatchViewerProps {
    mobile: boolean;
}

export default function MatchViewer({ mobile }: MatchViewerProps) {
    const { info } = useParams();

    const matchInfoStr = Buffer.from(info, "base64").toString("utf-8");

    try {
        const matchInfo = JSON.parse(matchInfoStr);

        const dataRed = {
            name: matchInfo.redName,
            goals: matchInfo.redGoals,
            players: matchInfo.teamsHistory.filter((p: any) => p.team === 1)
        }

        const dataBlue = {
            name: matchInfo.blueName,
            goals: matchInfo.blueGoals,
            players: matchInfo.teamsHistory.filter((p: any) => p.team === 2)
        }

        const dataPlayers = [
            ...dataRed.players.map((p: any) => {
                return {
                    name: p.name,
                    team: `Red (${dataRed.name})`,
                    id: p.id,
                    reg: p.registered,
                    playedFor: p.timeLeft - p.timeJoin
                }
            }),
            ...dataBlue.players.map((p: any) => {
                return { name: p.name, team: `Blue (${dataBlue.name})` }
            })
        ];

        const dataStats = matchInfo.stats.map((p: any) => {
            return {
                name: p.playerName,
                id: p.playerId,
                ...p.stats
            }
        });

        const maxWidth = mobile ? "100%" : "80%";

        return (
            <div style={mobile ? styleMobile : style}>
                <div style={{ maxWidth, paddingBottom: "2em" }}>
                    <MaterialTable
                        columns={[
                            { title: `Nome`, field: "name" },
                            { title: `Time`, field: "team" },
                            { title: `ID`, field: "id" },
                            { title: `Registrado`, field: "reg", type: "boolean" },
                            { title: `Jogou`, field: "playedFor", type: "numeric", render: (row) => Math.round(row.playedFor) + "s" }

                        ]}
                        data={dataPlayers}
                        options={{
                            headerStyle: {
                                whiteSpace: 'nowrap'
                            }
                        }}
                        title={`Partida #${matchInfo.id} (Red ${dataRed.goals} • ${dataBlue.goals} Blue)`}
                        localization={portugueseLocalization}
                    />
                </div>

                <div style={{ maxWidth }}>
                    <MaterialTable
                        columns={[
                            { title: `Nome`, field: "name", type: "string" },
                            { title: `ID`, field: "id", type: "numeric" },
                            { title: `J. Recebidas`, field: "jardasRecebidas", type: "numeric" },
                            { title: `J. Corridas`, field: "jardasCorridas", type: "numeric" },
                            { title: `Recepções`, field: "recepcoes", type: "numeric" },
                            { title: `Corridas`, field: "corridas", type: "numeric" },
                            { title: `TD Recebidos`, field: "touchdownRecebidos", type: "numeric" },
                            { title: `TD Corridos`, field: "touchdownCorridos", type: "numeric" },
                            { title: `J. Retornadas`, field: "jardasRetornadas", type: "numeric" },
                            { title: `TD Retornados`, field: "touchdownRetornados", type: "numeric" },
                            { title: `Passes Bloqueados`, field: "passesBloqueados", type: "numeric" },
                            { title: `Tackles`, field: "tackles", type: "numeric" },
                            { title: `Sacks`, field: "sacks", type: "numeric" },
                            { title: `Interceptações`, field: "interceptacoes", type: "numeric" },
                            { title: `Pick Six`, field: "pickSix", type: "numeric" },
                            { title: `Corridas QB`, field: "corridasQb", type: "numeric" },
                            { title: `J. Lançadas`, field: "jardasLancadas", type: "numeric" },
                            { title: `Passes`, field: "passes", type: "numeric" },
                            { title: `Passes pra TD`, field: "passesPraTouchdown", type: "numeric" },
                            { title: `J. Field Goal`, field: "fieldGoalJardas", type: "numeric" }
                        ]}
                        data={dataStats}
                        options={{
                            headerStyle: {
                                whiteSpace: 'nowrap'
                            }
                        }}
                        title={`Stats #${matchInfo.id}`}
                        localization={portugueseLocalization}
                    />
                </div>
            </div>
        );
    } catch (err) {
        return (
            <h1 style={mobile ? styleMobile : style}>
                Partida inválida.
            </h1>
        );
    }
}