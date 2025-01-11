import React, { useState, useEffect } from "react";
import CoreContext from "./CoreContext";
import useFilterFinanceiro from '../../hooks/useFilterFinanceiro'
import useFilterOrigem from "../../hooks/useFilterOrigem";
import useFilterStatus from "../../hooks/useFilterStatus";

const CoreProvider: React.FC<any> = ({ children }) => {

  const [visible, setVisible] =  useState(false);
  const [clearAll, setClearAll] =  useState(false);
  const [clearSelectedOrdersAll, setClearSelectedOrdersAll] =  useState(false);

  const { 
    valorPagamento, 
    setValorPagamento,
    descontoComercial, 
    setDescontoComercial,
    descontoFinanceiro,
    setDescontoFinanceiro,
    bonificacao, 
    setBonificacao,
    garantiaDeVenda,
    setGarantiaDeVenda,
    reposicao,
    setReposicao,
    repactuado,
    setRepactuado,
    faturamento, 
    setFaturamento,
    vencimento,
    setVencimento,
    rangePicker,
    setRangePicker,
    filterValor,
    setFilterValor,
    filterTipoNegociacao,
    setFilterTipoNegociacao,
    filterFaturamento,
    setFilterFaturamento,
    debouncedPagamento,
    setChecked,
    checked,
    setPagamento,
    pagamento,
    clearFilterFinanceiro,
    setClearFilterFinanceiro,
    countFilterValor,
    countFilterTipoNegociacao,
    countFilterFaturamento,
    checkedRepactuado,
    checkedReposicao,
    checkedGarantiaDeVenda,
    checkedBonificacao,
    onChangePagamento,
    onChangeVencimento,
    onChangeFaturamento   } = useFilterFinanceiro()

  const { 
    countFilterTipoPedido, 
    countFilterDataPedido,
    countFilterDataFimPedido,
    onChangePedido, 
    onChangePedidoDataFim, 
    onSelect,
    checkedTipoAntecipadoCompra,
    checkedTipoFaltaSugestao,
    checkedTipoSugestao, 
    checkedTipoFaltaAvulso,
    checkedTipoAvulso,
    handleCloseFornecedores,
    handleCloseCompradores,
    handleCloseDepositos,
    handleCloseSubClassificacao,
    clearFilterOrigem, 
    setClearFilterOrigem,
    checkedTipoPedido, 
    setCheckedTipoPedido,
    filterTipoPedido, 
    setFilterTipoPedido,
    fornecedores, 
    setFornecedores,
    filterFornecedores, 
    setFilterFornecedores,
    compradores, 
    setCompradores,
    filterCompradores, 
    setFilterCompradores,
    depositos, 
    setDepositos,
    filterDepositos, 
    setFilterDepositos,
    subclassificacao,
    setSubclassificacao,
    filterSubclassificacao,
    setFilterSubclassificacao,
    dataPicker, 
    setDataPicker,
    dataFimPicker,
    setDataFimPicker} = useFilterOrigem()

  const {
    countFilterSituacao,
    countFilterAnalisador,
    countFilterEnvioEmMassa,
    onChangeStatus,
    onChangeAnalisador,
    checkedStatusCancelado,
    checkedStatusEncerrado,
    checkedStatusPendente,
    checkedStatusFechado,
    checkedStatusAberto,
    clearFilterStatus, 
    setClearFilterStatus,
    checkedStatus, 
    setCheckedStatus,
    checkedAnalisador, 
    setCheckedAnalisador,
    envioEmMassa, 
    setEnvioEmMassa,
    filterSituacao, 
    setFilterSituacao,
    filterAnaliseAutomatica, 
    setFilterAnaliseAutomatica,
    filterEnvioEmMassa, 
    setFilterEnvioEmMassa   } = useFilterStatus();


  useEffect(
    () => {
      if (clearAll) {
        setClearFilterFinanceiro(true);
        setClearFilterOrigem(true);
        setClearFilterStatus(true);
      } 
    },
    [clearAll, setClearFilterFinanceiro, setClearFilterOrigem, setClearFilterStatus]
  );


 
  const value = {
    setVisible,
    visible,
    setClearAll,
    clearAll,
    clearSelectedOrdersAll,
    setClearSelectedOrdersAll,
    valorPagamento, 
    setValorPagamento,
    descontoComercial, 
    setDescontoComercial,
    descontoFinanceiro,
    setDescontoFinanceiro,
    bonificacao, 
    setBonificacao,
    garantiaDeVenda,
    setGarantiaDeVenda,
    reposicao,
    setReposicao,
    repactuado,
    setRepactuado,
    faturamento, 
    setFaturamento,
    vencimento,
    setVencimento,
    rangePicker,
    setRangePicker,
    filterValor,
    setFilterValor,
    filterTipoNegociacao,
    setFilterTipoNegociacao,
    filterFaturamento,
    setFilterFaturamento,
    debouncedPagamento,
    setChecked,
    checked,
    setPagamento,
    pagamento,
    clearFilterFinanceiro,
    setClearFilterFinanceiro,
    countFilterValor,
    countFilterTipoNegociacao,
    countFilterFaturamento,
    checkedRepactuado,
    checkedReposicao,
    checkedGarantiaDeVenda,
    checkedBonificacao,
    onChangePagamento,
    onChangeVencimento,
    onChangeFaturamento,

    countFilterTipoPedido, 
    countFilterDataPedido,
    countFilterDataFimPedido,
    onChangePedido, 
    onChangePedidoDataFim, 
    onSelect,
    checkedTipoAntecipadoCompra,
    checkedTipoFaltaSugestao,
    checkedTipoSugestao, 
    checkedTipoFaltaAvulso,
    checkedTipoAvulso,
    handleCloseFornecedores,
    handleCloseCompradores,
    handleCloseDepositos,
    handleCloseSubClassificacao,
    clearFilterOrigem, 
    setClearFilterOrigem,
    checkedTipoPedido, 
    setCheckedTipoPedido,
    filterTipoPedido, 
    setFilterTipoPedido,
    fornecedores, 
    setFornecedores,
    filterFornecedores, 
    setFilterFornecedores,
    compradores, 
    setCompradores,
    filterCompradores, 
    setFilterCompradores,
    depositos, 
    setDepositos,
    filterDepositos, 
    setFilterDepositos,
    subclassificacao,
    setSubclassificacao,
    filterSubclassificacao,
    setFilterSubclassificacao,
    dataPicker, 
    setDataPicker,
    dataFimPicker,
    setDataFimPicker,

    countFilterSituacao,
    countFilterAnalisador,
    countFilterEnvioEmMassa,
    onChangeStatus,
    onChangeAnalisador,
    checkedStatusCancelado,
    checkedStatusEncerrado,
    checkedStatusPendente,
    checkedStatusFechado,
    checkedStatusAberto,
    clearFilterStatus, 
    setClearFilterStatus,
    checkedStatus, 
    setCheckedStatus,
    checkedAnalisador, 
    setCheckedAnalisador,
    envioEmMassa, 
    setEnvioEmMassa,
    filterSituacao, 
    setFilterSituacao,
    filterAnaliseAutomatica, 
    setFilterAnaliseAutomatica,
    filterEnvioEmMassa, 
    setFilterEnvioEmMassa,

  };

  return (
    <CoreContext.Provider value={value}>
      {children}
    </CoreContext.Provider>
  );
};
export default CoreProvider;

