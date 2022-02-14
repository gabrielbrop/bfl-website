import React from 'react';

import { useParams } from "react-router-dom";
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';

import Pako from 'pako';

const style: React.CSSProperties = {
    right: "0",
    left: "0",
    position: "absolute",
    wordBreak: "break-word",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const styleMobile: React.CSSProperties = {
    paddingTop: "5%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingBottom: "2em",
    position: "absolute",
    wordBreak: "break-word",
    maxHeight: "100%",
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

    try {
        const matchInfoStr = Pako.ungzip(Buffer.from(info, "base64"), { to: 'string' });
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
                const playerFor = p.timeLeft - p.timeJoin;

                return {
                    name: p.name,
                    team: `Red (${dataRed.name})`,
                    id: p.id,
                    reg: p.registered,
                    playedFor: !Number.isNaN(playerFor) ? playerFor : "0"
                }
            }),
            ...dataBlue.players.map((p: any) => {
                const playerFor = p.timeLeft - p.timeJoin;

                return {
                    name: p.name,
                    team: `Red (${dataRed.name})`,
                    id: p.id,
                    reg: p.registered,
                    playedFor: !Number.isNaN(playerFor) ? playerFor : "0"
                }
            })
        ];

        const dataStats = matchInfo.stats.map((p: any) => {
            return {
                name: p.playerName,
                id: p.playerId,
                ...p.stats
            }
        });

        const width = mobile ? "100%" : "80%";

        return (
            <div style={mobile ? styleMobile : style}>
                <div style={{ width, paddingBottom: "2em", paddingTop: "5%" }}>
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
                            },
                            rowStyle: {
                                whiteSpace: 'nowrap'
                            },
                            paging: false
                        }}
                        title={`Partida #${matchInfo.id} (Red ${dataRed.goals} • ${dataBlue.goals} Blue)`}
                        localization={portugueseLocalization}
                    />
                </div>

                <div style={{ width, paddingBottom: "5%" }}>
                    <MaterialTable
                        columns={[
                            { title: `Nome`, field: "name", removable: false, type: "string" },
                            { title: `ID`, field: "id", type: "numeric", hidden: true, hiddenByColumnsButton: false },
                            { title: `J. Recebidas`, field: "jardasRecebidas", type: "string", align: "center" },
                            { title: `J. Corridas`, field: "jardasCorridas", type: "string", align: "center" },
                            { title: `Recepções`, field: "recepcoes", type: "string", align: "center" },
                            { title: `Corridas`, field: "corridas", type: "string", align: "center" },
                            { title: `TD Recebidos`, field: "touchdownRecebidos", type: "string", align: "center" },
                            { title: `TD Corridos`, field: "touchdownCorridos", type: "string", align: "center" },
                            { title: `J. Retornadas`, field: "jardasRetornadas", type: "string", align: "center" },
                            { title: `TD Retornados`, field: "touchdownRetornados", type: "string", align: "center" },
                            { title: `Passes Bloqueados`, field: "passesBloqueados", type: "string", align: "center" },
                            { title: `Tackles`, field: "tackles", type: "string", align: "center" },
                            { title: `Sacks`, field: "sacks", type: "string", align: "center" },
                            { title: `Interceptações`, field: "interceptacoes", type: "string", align: "center" },
                            { title: `Pick Six`, field: "pickSix", type: "string", align: "center" },
                            { title: `Corridas QB`, field: "corridasQb", type: "string", align: "center" },
                            { title: `J. Lançadas`, field: "jardasLancadas", type: "string", align: "center" },
                            { title: `Passes Tentados`, field: "passesTentados", type: "string", align: "center" },
                            { title: `Passes Completos`, field: "passesCompletos", type: "string", align: "center" },
                            { title: `Passes pra TD`, field: "passesPraTouchdown", type: "string", align: "center" },
                            { title: `J. Field Goal`, field: "fieldGoalJardas", type: "string", align: "center" }
                        ]}
                        data={dataStats}
                        options={{
                            headerStyle: {
                                whiteSpace: 'nowrap'
                            },
                            rowStyle: {
                                whiteSpace: 'nowrap'
                            },
                            exportMenu: [{
                                label: 'Exportar como PDF',
                                exportFunc: (cols, datas) => ExportPdf(cols, datas, matchInfo.id)
                            }, {
                                label: 'Exportar como CSV',
                                exportFunc: (cols, datas) => ExportCsv(cols, datas, matchInfo.id)
                            }],
                            paginationType: "stepped",
                            paging: false,
                            columnsButton: true,
                            searchAutoFocus: true,

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