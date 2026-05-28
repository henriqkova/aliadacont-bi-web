module.exports = {
  cliente: {
    nome: "Aliadacont",
    subdomain: "aliadacont-bi",
    coolify_app_uuid: "q1474bbwbxmcx02btow5kbzc",
    cor_primaria: "#3b82f6",
  },
  fontes: {
    adapters: ["aliadacont-xlsx"],
    aliadacont_xlsx: {
      extrato_file: "extrato_financeiroAliadacont.xlsx",
    },
    drive: {
      base_path: "G:/Meu Drive/BGP/CLIENTES/BI/472. ALIADACONT/BASES",
    },
  },
  pages: {
    geral: {
      overview: "active",
      receita: "active",
      despesa: "active",
      fluxo: "active",
      tesouraria: "active",
      comparativo: "active",
      relatorio: "active",
      valuation: "hidden",
      orcamento: "hidden",
      dre: "hidden",
    },
    outros: {
      indicators: "hidden",
      faturamento_produto: "hidden",
      curva_abc: "hidden",
      marketing: "hidden",
      hierarquia: "hidden",
      detalhado: "hidden",
      profunda_cliente: "hidden",
      crm: "hidden",
    },
  },
  meta: {
    ano_corrente: 2026,
    metas_crm: { mes: 0, ano: 0 },
    valuation_premissas: { wacc: 25, growth_year2: 20, growth_year3: 20, ipca: 4.5, perpetuity_growth: 10 },
  },
  template: { version_when_created: "1.0.0", version_last_synced: "1.0.0" },
};
