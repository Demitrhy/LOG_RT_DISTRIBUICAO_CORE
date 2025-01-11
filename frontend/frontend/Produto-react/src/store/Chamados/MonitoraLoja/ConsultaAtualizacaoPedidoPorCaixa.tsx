export interface PedidoDiretoPorCaixa {
    rota: number,
    filial: number,
    fantasia: string,
    totalCaixas: number,
    dH_ProcessouCaixas: string,
    dhRecebimentoAut: string,
    dhRecebimentoMan: string,
    dhRecebimentoPul: string,
    enviadasAut: number,
    recebidasAut: number,
    enviadasMan: number,
    recebidasMan: number,
    enviadasPulmao: number,
    recebidasPulmao: number,
    dH_Acerto: string,
    dH_GerarDados: string,
    totalNotasLoja: number,
    enviadasNFETot: number,
    enviadasNFEAuto: number,
    impressasDanfe: number,
    texto: string,
    cor: string
}