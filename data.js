/* BGP BI — gerado por build-data.cjs em 2026-06-09T12:22:28.520Z */
/* Empresa: Aliadacont | Ano ref: 2026 */
const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTHS_FULL = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function fmt(n, opts = {}) {
  const { dec = 2, prefix = "R$", showSign = false } = opts;
  const sign = n < 0 ? "-" : (showSign ? "+" : "");
  const abs = Math.abs(n);
  const parts = abs.toFixed(dec).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${prefix}${parts.join(",")}`;
}
function fmtK(n) {
  return fmt(n, { dec: 0 });
}
function fmtPct(n, dec = 2) {
  const sign = n > 0 ? "+" : (n < 0 ? "-" : "");
  return `${sign}${Math.abs(n).toFixed(dec).replace(".", ",")}%`;
}

const META = {
  "empresa": {
    "nome_fantasia": "Aliadacont"
  },
  "fetched_at": "2026-06-09T12:22:28.260Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 51,
    "departamentos": 0,
    "clientes": 157
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": 85073.35000000021
  },
  {
    "name": "A receber (futuro)",
    "value": 73837.47
  },
  {
    "name": "A pagar (futuro)",
    "value": 32029.359999999997
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "Despesas Diversas (Cartão)",
    "value": 112127.39000000001,
    "color": "#2dd4bf"
  },
  {
    "name": "Salários",
    "value": 100564.92,
    "color": "#22c55e"
  },
  {
    "name": "Retiradas para Sócios",
    "value": 93713.65999999999,
    "color": "#a78bfa"
  },
  {
    "name": "Mentorias, Cursos e Treinamentos",
    "value": 63101.42,
    "color": "#f59e0b"
  },
  {
    "name": "ISS",
    "value": 59845.200000000004,
    "color": "#ef4444"
  },
  {
    "name": "Despesas a identificar",
    "value": 57244.47,
    "color": "#6b7686"
  }
];

const SEGMENTS = {
  "realizado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 190952.14000000004,
        "despesa": 152863.34
      },
      {
        "m": "fevereiro",
        "receita": 154230.00999999995,
        "despesa": 72817.92000000001
      },
      {
        "m": "março",
        "receita": 178485.60000000006,
        "despesa": 198247.00999999998
      },
      {
        "m": "abril",
        "receita": 157368.86999999997,
        "despesa": 158783.96999999997
      },
      {
        "m": "maio",
        "receita": 142902.91000000003,
        "despesa": 156153.94
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receitas de Serviços a Identificar",
        "value": 605882.7900000002,
        "clientes": 16
      },
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 101704.63,
        "clientes": 17
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 48122,
        "clientes": 17
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 20853.17,
        "clientes": 6
      },
      {
        "name": "Consulta",
        "value": 11568,
        "clientes": 20
      },
      {
        "name": "Injetaveis",
        "value": 8833.9,
        "clientes": 11
      },
      {
        "name": "Adicional de Tizerpatida",
        "value": 6244,
        "clientes": 5
      },
      {
        "name": "Receita de Serviços - Protocolo Body Reset",
        "value": 5472,
        "clientes": 1
      },
      {
        "name": "Teste Nutrigenetico",
        "value": 3900,
        "clientes": 1
      },
      {
        "name": "Implantes",
        "value": 3900,
        "clientes": 1
      },
      {
        "name": "Suplementos",
        "value": 3867,
        "clientes": 26
      },
      {
        "name": "Receita de Serviço - alquimia Prata",
        "value": 1935,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Despesas Diversas (Cartão)",
        "value": 112127.39000000001,
        "fornecedores": 1
      },
      {
        "name": "Salários",
        "value": 100564.92,
        "fornecedores": 2
      },
      {
        "name": "Retiradas para Sócios",
        "value": 93713.65999999999,
        "fornecedores": 2
      },
      {
        "name": "Mentorias, Cursos e Treinamentos",
        "value": 63101.42,
        "fornecedores": 3
      },
      {
        "name": "ISS",
        "value": 59845.200000000004,
        "fornecedores": 3
      },
      {
        "name": "Despesas a identificar",
        "value": 57244.47,
        "fornecedores": 2
      },
      {
        "name": "IRPJ E CSLL",
        "value": 54193.020000000004,
        "fornecedores": 2
      },
      {
        "name": "Pis/Cofins",
        "value": 52559.200000000004,
        "fornecedores": 2
      },
      {
        "name": "Marketing e Publicidade",
        "value": 26275,
        "fornecedores": 4
      },
      {
        "name": "Insumos e Materiais Clínicos",
        "value": 24041.839999999997,
        "fornecedores": 6
      },
      {
        "name": "INSS sobre Salários - GPS",
        "value": 18615.829999999998,
        "fornecedores": 1
      },
      {
        "name": "Pró-labore",
        "value": 15000,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "Sem cliente",
        "value": 554586.4600000001
      },
      {
        "name": "ISABELA CRISTINA FANTI",
        "value": 28628
      },
      {
        "name": "ZILDA MARIA MAIA DE CARVALHO",
        "value": 13475
      },
      {
        "name": "SHEILA MARIA NEGRI PONTES",
        "value": 12038
      },
      {
        "name": "KEILA SOARES RODRIGUES MONTEIRO",
        "value": 10930
      },
      {
        "name": "MARIA DAS GRAÇAS NEVES CALIARI",
        "value": 10435
      },
      {
        "name": "HIGLEST ALVES DE LA SALLE",
        "value": 10260
      },
      {
        "name": "CRISTIANE CANDIDA DA SILVA",
        "value": 8985
      },
      {
        "name": "MAYKE CORREIA DE SOUZA",
        "value": 8760
      },
      {
        "name": "TELMELITA SAAR ORECCHIO",
        "value": 8757
      },
      {
        "name": "DORIETE DE SOUZA",
        "value": 8675
      },
      {
        "name": "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        "value": 8040
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "Sem cliente",
        "value": 532288.3099999999
      },
      {
        "name": "O MEDICO EMPRESARIO LTDA",
        "value": 52184.75
      },
      {
        "name": "RECEITA FEDERAL",
        "value": 46393.740000000005
      },
      {
        "name": "ANNA PAULA FERNANDES MARTINS",
        "value": 14100
      },
      {
        "name": "BIO MEDS PHARMACEUTICA LTDA",
        "value": 13616.25
      },
      {
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 13275
      },
      {
        "name": "RADIO SAO FRANCISCO LTDA",
        "value": 10000
      },
      {
        "name": "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        "value": 10000
      },
      {
        "name": "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        "value": 8985.39
      },
      {
        "name": "DELOGO & SAINTS CONTABILIDADE LTDA",
        "value": 8785.2
      },
      {
        "name": "FLUKKA FARMA",
        "value": 3727.5
      },
      {
        "name": "HEMILLY LACERDA BARBOSA",
        "value": 3713.91
      }
    ],
    "EXTRATO": [
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2586.2,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.06,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Exames Médicos",
        "Sem cliente",
        -600,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1256.89,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1621.2,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1800,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Despesas a identificar",
        "O MEDICO EMPRESARIO LTDA",
        -184.75,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -1448.01,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        386.16,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        476.82,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2170.59,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1707.5,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4700,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        607.78,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "CRISTIANE CANDIDA DA SILVA",
        75,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        650,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        5613,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        479.8,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        608.75,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1473.09,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "ISABELA CRISTINA FANTI",
        2808,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1473.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        388.4,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        480.1,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        50,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -480.1,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        456.14,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        846.04,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "PIX Marketplace",
        -46.89,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -41.87,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Energia Elétrica",
        "28.152.650/0001-71",
        -546.33,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Pis/Cofins",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -846.04,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -46.89,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        421.8,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1223.46,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        314.41,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        368.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.08,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -368.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -314.41,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Honorários Consultoria",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Suplementos",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        75,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        351.12,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        926.4,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        966.57,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.01,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -926.4,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -351.12,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -966.57,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -272,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4732.93,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        384.08,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2955,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1000,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4732.93,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2955,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -384.08,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        291,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3709.42,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        75,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3709.42,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -291,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        417.06,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        144.03,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.08,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Pró-labore - GPS",
        "RECEITA FEDERAL",
        -2876.6,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -144.03,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -417.06,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2876.6,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        582.6,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2228.3,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        133.85,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -133.85,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Consulta",
        "Lúcia Sodré Moreira",
        650,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Consulta",
        "MARIA DAS GRAÇAS RODRIGUES COELHO",
        500,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        649.25,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3716.64,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3465.58,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        677.67,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2699.68,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "KEILA SOARES RODRIGUES MONTEIRO",
        1460,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        2690,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "KEILA SOARES RODRIGUES MONTEIRO",
        4000,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        6910,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -486.47,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Salários",
        "HEMILLY LACERDA BARBOSA",
        -3713.91,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -8226.92,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        366.7,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1154.76,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2238.86,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2330,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        3900,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Troco",
        "ERICA RODRIGUES DE LIMA",
        -26,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ALEX MARCHIOLI STEFANON",
        3900,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        542.82,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2117.55,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.02,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        460,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MAULY MARTINS DA SILVA",
        550,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Suplementos",
        "MAULY MARTINS DA SILVA",
        185,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "BPO Financeiro",
        "ALIADACONT CONTABILIDADE",
        -2400,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -300,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1875,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2521.26,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -41.4,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -27.6,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "BPO Financeiro",
        "Sem cliente",
        -2400,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Consulta",
        "Cristina Siqueira Bragança",
        650,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        368.25,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        547.05,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1256.97,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        193.98,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "SEGEX UVV ON",
        -449.96,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1177.62,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        132.89,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4537.69,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        10,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        5000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -2300,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3150,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2299.32,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        1800,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Consulta",
        "MARLY MARIA ANDRADE DE LAIA",
        500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "TAIANE STREY VERONEZE ANDRE",
        300,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1903.43,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3159.48,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3055.03,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4970.45,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        6232.18,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -21318.51,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2570,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -34274.37,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4950,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3626.71,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -1224,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "BRISA DANIELLE FURTADO CARDOSO",
        75,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "TAIANE STREY VERONEZE ANDRE",
        75,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JULIMAR MARTINS FANTI",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        911.74,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1771.36,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -390,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3289.56,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Injetaveis",
        "LAUDIANA DANIEL TEIXEIRA FREITAS",
        390,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4138.68,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1355.02,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Suplementos",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        185,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        2472,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Consulta",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        650,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1621.2,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        435.03,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "FERNANDA APARECIDA DE ALMEIDA",
        2975,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        1000,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        608.75,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1087.58,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        193.08,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2170.59,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.44,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        65,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1200,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3810.3,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        928.23,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4585.47,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1116.43,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "IRPJ E CSLL",
        "RECEITA FEDERAL",
        -11216.09,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Pis/Cofins",
        "RECEITA FEDERAL",
        -16405.95,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2586.2,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.06,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1256.89,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1621.2,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1800,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        386.16,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        476.82,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2170.59,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1707.5,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4700,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        607.78,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "CRISTIANE CANDIDA DA SILVA",
        75,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        650,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        5613,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        479.8,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        608.75,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1473.09,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "ISABELA CRISTINA FANTI",
        2808,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        388.4,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        480.1,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        50,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        456.14,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        846.04,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        421.8,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1223.46,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        314.41,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        368.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.08,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Suplementos",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        75,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        351.12,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        926.4,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        966.57,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.01,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4732.93,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        384.08,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2955,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1000,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        291,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3709.42,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        417.06,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        144.03,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.08,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        582.6,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2228.3,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        133.85,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Consulta",
        "Lúcia Sodré Moreira",
        650,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Consulta",
        "MARIA DAS GRAÇAS RODRIGUES COELHO",
        500,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        649.25,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3716.64,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3465.58,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        677.67,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2699.68,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "KEILA SOARES RODRIGUES MONTEIRO",
        1460,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        2690,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "KEILA SOARES RODRIGUES MONTEIRO",
        4000,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        6910,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        366.7,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1154.76,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2238.86,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2330,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        3900,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ALEX MARCHIOLI STEFANON",
        3900,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        542.82,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2117.55,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.02,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        460,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MAULY MARTINS DA SILVA",
        550,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Suplementos",
        "MAULY MARTINS DA SILVA",
        185,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Consulta",
        "Cristina Siqueira Bragança",
        650,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        368.25,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        547.05,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1256.97,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        193.98,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1177.62,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        132.89,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4537.69,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        10,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        5000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        1800,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Consulta",
        "MARLY MARIA ANDRADE DE LAIA",
        500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "TAIANE STREY VERONEZE ANDRE",
        300,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1903.43,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3159.48,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3055.03,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4970.45,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        6232.18,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.16,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "BRISA DANIELLE FURTADO CARDOSO",
        75,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "TAIANE STREY VERONEZE ANDRE",
        75,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JULIMAR MARTINS FANTI",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        911.74,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1771.36,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3289.56,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Injetaveis",
        "LAUDIANA DANIEL TEIXEIRA FREITAS",
        390,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4138.68,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1355.02,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Suplementos",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        185,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        2472,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Consulta",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        650,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1621.2,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        435.03,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "FERNANDA APARECIDA DE ALMEIDA",
        2975,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        1000,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        608.75,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1087.58,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        193.08,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2170.59,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.44,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        65,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1200,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3810.3,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        928.23,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4585.47,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1116.43,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        456.14,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1800,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        185,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Consulta",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        650,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        388.4,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3537.67,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        821.79,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        480.1,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1042.2,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2087.1,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1002.07,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        926.4,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1841.77,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2837.73,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.02,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2058.08,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1128.76,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.03,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "ISABELA CRISTINA FANTI",
        320,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        465.98,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        384.08,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1985.1,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        251.21,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        395,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        2040,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2593.92,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Suplementos",
        "MARLY MARIA ANDRADE DE LAIA",
        75,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.02,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        582.6,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        144.03,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        837.84,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4606.2,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1517.13,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Suplementos",
        "DORIETE DE SOUZA",
        75,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "ISABELA CRISTINA FANTI",
        7880,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ISABELA CRISTINA FANTI",
        8520,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "DELMA LUCIA MENDES DA CUNHA",
        2100,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        728.25,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        388,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2499.35,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3876.57,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2966.88,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        503.43,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1916.63,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        366.7,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        466.44,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2238.86,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1154.76,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Suplementos",
        "ROSIANE ALMEIDA COSTA BELING",
        75,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.12,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Injetaveis",
        "MARIA LEUZINA DE AGUIAR DIAS",
        390,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        542.82,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2117.55,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2935.4,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "SANDRA VIEIRA FARIA",
        630,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        941.83,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        547.05,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2190.13,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4630.42,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        14985.03,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.04,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "Sem cliente",
        9,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        377,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        50,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Teste Nutrigenetico",
        "ZILDA MARIA MAIA DE CARVALHO",
        3900,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        345.6,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1855.91,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        882,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        145.65,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.26,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Consulta",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        68,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2818.58,
        "PAGO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "29/05/2026",
        "Operações",
        "Exames Médicos",
        "Sem cliente",
        -600,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Despesas a identificar",
        "O MEDICO EMPRESARIO LTDA",
        -184.75,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -1448.01,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1473.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -480.1,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "PIX Marketplace",
        -46.89,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -41.87,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Energia Elétrica",
        "28.152.650/0001-71",
        -546.33,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Pis/Cofins",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -846.04,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -46.89,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -368.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -314.41,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Honorários Consultoria",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -926.4,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -351.12,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -966.57,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -272,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4732.93,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2955,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -384.08,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3709.42,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -291,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Pró-labore - GPS",
        "RECEITA FEDERAL",
        -2876.6,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -144.03,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -417.06,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2876.6,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -133.85,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -486.47,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Salários",
        "HEMILLY LACERDA BARBOSA",
        -3713.91,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -8226.92,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Troco",
        "ERICA RODRIGUES DE LIMA",
        -26,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "BPO Financeiro",
        "ALIADACONT CONTABILIDADE",
        -2400,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -300,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1875,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2521.26,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -41.4,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -27.6,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "BPO Financeiro",
        "Sem cliente",
        -2400,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "SEGEX UVV ON",
        -449.96,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -2300,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3150,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2299.32,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -21318.51,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2570,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -34274.37,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4950,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3626.71,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -1224,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -390,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "IRPJ E CSLL",
        "RECEITA FEDERAL",
        -11216.09,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Pis/Cofins",
        "RECEITA FEDERAL",
        -16405.95,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2895.53,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Viagens e Representações",
        "JUAN CARLOS SOSA",
        -92.4,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Energia Elétrica",
        "EDP ESPIRITO SANTO",
        -745.04,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -705,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -655,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -88,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49.43,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -41.76,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1200,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Honorários Consultoria",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -948,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Retiradas para Sócios",
        "ANNA PAULA FERNANDES MARTINS",
        -14100,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -117.34,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -14100,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -540,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -150.99,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -320,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "ISS",
        "Sem cliente",
        -17979.15,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "BPO Financeiro",
        "Sem cliente",
        -2400,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -3.36,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.28,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -200,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -2591.5,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Sem cliente",
        -3000.3,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "SEGEX UVV ON",
        -330.75,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -300,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -364.91,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2299.32,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1800,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Materiais de Escritório",
        "Sem cliente",
        -7.1,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -1800,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1190,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -575.3,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Lanches e Refeições",
        "Sem cliente",
        -155,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4261,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3746.76,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3710,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -3265.71,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2820,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2800,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -14444.75,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -825,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Pró-labore",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -21.56,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "Sem cliente",
        -70,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Materiais de Escritório",
        "ARTCOPIAS",
        -230,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1500,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Operações",
        "Materiais de Escritório",
        "Sem cliente",
        -115,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -15,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Lanches e Refeições",
        "DON PAGANOTTO LTDA",
        -284,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -200,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -800,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Materiais de Escritório",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -160,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -2192.5,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Pis/Cofins",
        "Sem cliente",
        -56.61,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1500,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -750,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -38625.88,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -5000,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "FLUKKA FARMA",
        -3727.5,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -2102.5,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -60,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -35.7,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -820,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Honorários Consultoria",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Honorários Contábeis",
        "Sem cliente",
        -220,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -30,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -190,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -400,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Energia Elétrica",
        "EDP ESPIRITO SANTO",
        -718,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "Sem cliente",
        -350,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -240,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -150,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -100,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Materiais de Escritório",
        "Sem cliente",
        -232.27,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "Sem cliente",
        -9540,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -8640,
        "PAGO"
      ],
      [
        "15/03/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -9000.4,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -519.57,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2876.6,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "Pis/Cofins",
        "Sem cliente",
        -199.83,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -582.6,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -10192.32,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Operações",
        "Materiais de Escritório",
        "REIS & SOUZA LIMITADA",
        -98,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -11039.45,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -6116.25,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "SEGEX UVV ON",
        -449.96,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -499.09,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Materiais de Escritório",
        "EXTINSAN EXTINTORES LTDA",
        -100,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -125.28,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Seguros",
        "PORTO SEGURO COMPANHIA DE SEGUROS GERAIS",
        -61.29,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -20000,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4604.02,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4400,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3781.71,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2299.32,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -44.89,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -43,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -980,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "02/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -1069.96,
        "PAGO"
      ],
      [
        "02/03/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "23/02/2026",
        "Operações",
        "Software / Licença de Uso",
        "BIONEXO S.A",
        -601.25,
        "PAGO"
      ],
      [
        "23/02/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -2150,
        "PAGO"
      ],
      [
        "19/02/2026",
        "Operações",
        "Honorários Consultoria",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "19/02/2026",
        "Operações",
        "Telefonia Móvel",
        "TELEFONICA BRASIL S.A",
        -36.74,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Operações",
        "Energia Elétrica",
        "EDP ESPIRITO SANTO",
        -735.14,
        "PAGO"
      ],
      [
        "18/02/2026",
        "Operações",
        "Marketing e Publicidade",
        "Sem cliente",
        -1500,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 823939.5300000001,
      "TOTAL_DESPESA": 738866.1799999999,
      "VALOR_LIQUIDO": 85073.35000000021,
      "MARGEM_LIQUIDA": 10.325193403452824,
      "VALOR_LIQ_SERIES": [
        38088.80000000005,
        81412.08999999994,
        -19761.409999999916,
        -1415.1000000000058,
        -13251.02999999997,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      6949.33,
      43822.840000000004,
      10318.26,
      37750.47,
      49238.560000000005,
      54521.09000000001,
      17751.21,
      23098.010000000002,
      23687.87,
      34884.049999999996,
      38398.15,
      38485.990000000005,
      20816.890000000003,
      2598.89,
      10954.5,
      15310.679999999998,
      14157.35,
      32719.97,
      42744.04,
      33940.450000000004,
      18587.670000000002,
      17945.7,
      54260.86000000001,
      28650.789999999994,
      13192.03,
      33757.899999999994,
      44783.44,
      13058.87,
      15499.859999999999,
      22661.870000000003,
      9391.94
    ],
    "DESPESA_DIA": [
      35339.07,
      30620.679999999993,
      39309.240000000005,
      73541.01000000001,
      18052.57,
      12566.979999999998,
      25919.79,
      18325.15,
      29812.870000000003,
      11245.52,
      14545.38,
      34936.159999999996,
      23510.889999999996,
      37496.240000000005,
      13681.53,
      23230.27,
      2268,
      11147.15,
      5420.83,
      10732.69,
      18342.910000000003,
      38724.399999999994,
      52742.740000000005,
      45875.88,
      1473.09,
      74170.04,
      15130,
      1632.76,
      1035.78,
      2211.56,
      15825
    ],
    "SALDOS_MES": [
      38088.80000000005,
      119500.88999999998,
      99739.48000000007,
      98324.38000000006,
      85073.3500000001,
      85073.3500000001,
      85073.3500000001,
      85073.3500000001,
      85073.3500000001,
      85073.3500000001,
      85073.3500000001,
      85073.3500000001
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receitas de Serviços a Identificar",
        "values": [
          131441.84,
          101140.14000000001,
          115800.37000000002,
          128621.93999999999,
          128878.49999999999,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          30537.63,
          17580,
          41027,
          12560,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Bronze",
        "values": [
          21121,
          10135,
          7882,
          5084,
          3900,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Diamante",
        "values": [
          0,
          15468.17,
          4990,
          395,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Consulta",
        "values": [
          2700,
          3250,
          1950,
          1368,
          2300,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Despesas Diversas (Cartão)",
        "values": [
          -2295.41,
          -1892.78,
          -66510.20999999999,
          -3630.62,
          -37798.37,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Salários",
        "values": [
          0,
          -16211.62,
          -17715.05,
          -24832.08,
          -41806.17,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Retiradas para Sócios",
        "values": [
          0,
          0,
          -29750.4,
          -42644.75,
          -21318.51,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Mentorias, Cursos e Treinamentos",
        "values": [
          -13000,
          -13330.75,
          -22989.96,
          -13330.75,
          -449.96,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "ISS",
        "values": [
          -30629.31,
          -2246.07,
          0,
          -17984.43,
          -8985.39,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 523667.7499999999,
        "d2": 300271.78
      },
      {
        "tipo": "Rendimentos de Aplicações",
        "parent": "Receita",
        "d1": 10.700000000000001,
        "d2": 1.34
      },
      {
        "tipo": "Receitas de Serviços a Identificar",
        "parent": "Receita",
        "d1": 348382.34999999986,
        "d2": 257500.44
      },
      {
        "tipo": "Receitas a Identificar",
        "parent": "Receita",
        "d1": 260,
        "d2": 0
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 89144.63,
        "d2": 12560
      },
      {
        "tipo": "Suplementos",
        "parent": "Receita",
        "d1": 2460,
        "d2": 1407
      },
      {
        "tipo": "Consulta",
        "parent": "Receita",
        "d1": 7900,
        "d2": 3668
      },
      {
        "tipo": "Descontos financeiros obtidos",
        "parent": "Receita",
        "d1": 1085,
        "d2": 0
      },
      {
        "tipo": "Receita de Serviços - Plano Bronze",
        "parent": "Receita",
        "d1": 39138,
        "d2": 8984
      },
      {
        "tipo": "Injetaveis",
        "parent": "Receita",
        "d1": 8053.9,
        "d2": 780
      },
      {
        "tipo": "Receita de Serviços - Plano Diamante",
        "parent": "Receita",
        "d1": 20458.17,
        "d2": 395
      },
      {
        "tipo": "Receita de Serviço - alquimia Prata",
        "parent": "Receita",
        "d1": 1935,
        "d2": 0
      },
      {
        "tipo": "Receita de Serviços - Alquimia Ouro",
        "parent": "Receita",
        "d1": 300,
        "d2": 0
      },
      {
        "tipo": "Receita de Serviços - Protocolo Body Reset",
        "parent": "Receita",
        "d1": 3000,
        "d2": 2472
      },
      {
        "tipo": "Adicional de Tizerpatida",
        "parent": "Receita",
        "d1": 1540,
        "d2": 4704
      },
      {
        "tipo": "Teste Nutrigenetico",
        "parent": "Receita",
        "d1": 0,
        "d2": 3900
      },
      {
        "tipo": "Implantes",
        "parent": "Receita",
        "d1": 0,
        "d2": 3900
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -423928.27000000014,
        "d2": -314937.9099999999
      },
      {
        "tipo": "Despesas Diversas (Cartão)",
        "parent": "Despesa",
        "d1": -70698.4,
        "d2": -41428.990000000005
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -92.55000000000001,
        "d2": -2945.91
      },
      {
        "tipo": "Marketing e Publicidade",
        "parent": "Despesa",
        "d1": -16800,
        "d2": -9475
      },
      {
        "tipo": "Lanches e Refeições",
        "parent": "Despesa",
        "d1": -329,
        "d2": -155
      },
      {
        "tipo": "Serviços de Pessoa Jurídica",
        "parent": "Despesa",
        "d1": -3137,
        "d2": -143
      },
      {
        "tipo": "Telefonia Móvel",
        "parent": "Despesa",
        "d1": -71.74000000000001,
        "d2": 0
      },
      {
        "tipo": "Honorários Contábeis",
        "parent": "Despesa",
        "d1": -4892.6,
        "d2": -4112.6
      },
      {
        "tipo": "Despesas a identificar",
        "parent": "Despesa",
        "d1": -50207.04,
        "d2": -7037.43
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": -409.91999999999996,
        "d2": -239.51999999999998
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": -916.67,
        "d2": -663.1
      },
      {
        "tipo": "Serviços e Materiais de Limpeza e de Higiene",
        "parent": "Despesa",
        "d1": -480,
        "d2": -2189
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": -32875.380000000005,
        "d2": -26969.82
      },
      {
        "tipo": "Insumos e Materiais Clínicos",
        "parent": "Despesa",
        "d1": -18404.39,
        "d2": -5637.450000000001
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": -2133.85,
        "d2": -1291.37
      },
      {
        "tipo": "Materiais de Escritório",
        "parent": "Despesa",
        "d1": -1068.87,
        "d2": -7.1
      },
      {
        "tipo": "FGTS e Multa de FGTS",
        "parent": "Despesa",
        "d1": -2315.1200000000003,
        "d2": -1996.23
      },
      {
        "tipo": "INSS sobre Salários - GPS",
        "parent": "Despesa",
        "d1": -12843.699999999999,
        "d2": -5772.13
      },
      {
        "tipo": "Pis/Cofins",
        "parent": "Despesa",
        "d1": -28205.7,
        "d2": -24353.5
      },
      {
        "tipo": "IRPJ E CSLL",
        "parent": "Despesa",
        "d1": -42976.93,
        "d2": -11216.09
      },
      {
        "tipo": "Mentorias, Cursos e Treinamentos",
        "parent": "Despesa",
        "d1": -49320.71,
        "d2": -13780.71
      },
      {
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": -33926.67,
        "d2": -66638.25
      },
      {
        "tipo": "Software / Licença de Uso",
        "parent": "Despesa",
        "d1": -1251.25,
        "d2": -399.9
      },
      {
        "tipo": "Honorários Consultoria",
        "parent": "Despesa",
        "d1": -5000,
        "d2": -5000
      },
      {
        "tipo": "Retiradas para Sócios",
        "parent": "Despesa",
        "d1": -29750.4,
        "d2": -63963.259999999995
      },
      {
        "tipo": "Seguros",
        "parent": "Despesa",
        "d1": -61.29,
        "d2": 0
      },
      {
        "tipo": "Plano de Saúde Colaboradores",
        "parent": "Despesa",
        "d1": -759.0899999999999,
        "d2": -780
      },
      {
        "tipo": "Pró-labore",
        "parent": "Despesa",
        "d1": -15000,
        "d2": 0
      },
      {
        "tipo": "BPO Financeiro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7200
      },
      {
        "tipo": "Viagens e Representações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -92.4
      },
      {
        "tipo": "Troco",
        "parent": "Despesa",
        "d1": 0,
        "d2": -26
      },
      {
        "tipo": "INSS sobre Pró-labore - GPS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2876.6
      },
      {
        "tipo": "IRRF",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7947.55
      },
      {
        "tipo": "Exames Médicos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -600
      }
    ]
  },
  "atrasado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 1330,
        "despesa": 0
      },
      {
        "m": "fevereiro",
        "receita": 1492,
        "despesa": 9559.789999999999
      },
      {
        "m": "março",
        "receita": 321170.8,
        "despesa": 47612.42999999999
      },
      {
        "m": "abril",
        "receita": 60064.75,
        "despesa": 11908.789999999999
      },
      {
        "m": "maio",
        "receita": 25940.039999999997,
        "despesa": 8490.640000000001
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 169411.88999999998,
        "clientes": 23
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 125093.84999999999,
        "clientes": 14
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 59657.25,
        "clientes": 18
      },
      {
        "name": "Injetaveis",
        "value": 18946.75,
        "clientes": 12
      },
      {
        "name": "Implantes",
        "value": 8830,
        "clientes": 3
      },
      {
        "name": "Adicional de Tizerpatida",
        "value": 8785.34,
        "clientes": 8
      },
      {
        "name": "Receita de Serviços - Platina",
        "value": 6351.4,
        "clientes": 1
      },
      {
        "name": "Suplementos",
        "value": 5246,
        "clientes": 26
      },
      {
        "name": "Consulta",
        "value": 3232,
        "clientes": 6
      },
      {
        "name": "Receita de Serviços - Protocolo Body Reset",
        "value": 1758,
        "clientes": 2
      },
      {
        "name": "Receita de Serviços - Alquimia Ouro",
        "value": 1710.11,
        "clientes": 1
      },
      {
        "name": "Teste Nutrigenetico",
        "value": 975,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Insumos e Materiais Clínicos",
        "value": 58619.54,
        "fornecedores": 5
      },
      {
        "name": "Despesas Pessoais dos Sócios",
        "value": 8640,
        "fornecedores": 1
      },
      {
        "name": "Marketing e Publicidade",
        "value": 5320.389999999999,
        "fornecedores": 2
      },
      {
        "name": "Software / Licença de Uso",
        "value": 2317.34,
        "fornecedores": 2
      },
      {
        "name": "Materiais de Escritório",
        "value": 1600,
        "fornecedores": 1
      },
      {
        "name": "FGTS e Multa de FGTS",
        "value": 548.22,
        "fornecedores": 1
      },
      {
        "name": "Coleta de Resíduos Ambientais",
        "value": 361.02,
        "fornecedores": 1
      },
      {
        "name": "Serviços de Pessoa Jurídica",
        "value": 151,
        "fornecedores": 2
      },
      {
        "name": "ISS",
        "value": 14.14,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "MONICA DE OLIVEIRA SILVA FERNANDES",
        "value": 20450
      },
      {
        "name": "ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",
        "value": 16050
      },
      {
        "name": "LETICIA BATISTA DE MORAES",
        "value": 15605
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 13940
      },
      {
        "name": "MARLY MARIA ANDRADE DE LAIA",
        "value": 13588
      },
      {
        "name": "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        "value": 12793.99
      },
      {
        "name": "ALEX MARCHIOLI STEFANON",
        "value": 12750
      },
      {
        "name": "ÉRICA RODRIGUES LIMA BOECHAT",
        "value": 12700
      },
      {
        "name": "MERIELY RUFINO VAZ MUTZ",
        "value": 12585
      },
      {
        "name": "TAIANE STREY VERONEZE ANDRE",
        "value": 12528
      },
      {
        "name": "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        "value": 12371.34
      },
      {
        "name": "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        "value": 11140
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "BIO MEDS PHARMACEUTICA LTDA",
        "value": 21987.7
      },
      {
        "name": "TOKARSKI COMERCIO INDUSTRIA LTDA",
        "value": 14300.04
      },
      {
        "name": "BIOS FARMACEUTICA LTDA",
        "value": 12500.8
      },
      {
        "name": "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        "value": 8640
      },
      {
        "name": "ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA",
        "value": 7140
      },
      {
        "name": "GOOGLE BRASIL INTERNET LTDA.",
        "value": 2720.39
      },
      {
        "name": "BIOMA4ME ANALISES CLINICAS S.A.",
        "value": 2691
      },
      {
        "name": "64.659.216 KETELLY ALVES GOULARTE",
        "value": 2600
      },
      {
        "name": "BARRACOPY COMUNICACAO VISUAL LTDA",
        "value": 1600
      },
      {
        "name": "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        "value": 1399.6999999999998
      },
      {
        "name": "CONTAAZUL SOFTWARE LTDA",
        "value": 917.64
      },
      {
        "name": "CEF MATRIZ",
        "value": 548.22
      }
    ],
    "EXTRATO": [
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "ATRASADO"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "ATRASADO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "SEBASTIÃO SATURINO FILHO",
        270,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Suplementos",
        "ANTONIO PEREIRA DE ARAUJO",
        75,
        "ATRASADO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        75,
        "ATRASADO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        75,
        "ATRASADO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ANDREA RODRIGUES FERNANDES",
        50,
        "ATRASADO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -138.3,
        "ATRASADO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -2405.4,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        210,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        9600,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -151.3,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        75,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4.92,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4,
        "ATRASADO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DA PENHA MOURA ROSA",
        75,
        "ATRASADO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "ESTER DE ALMEIDA SANTANA",
        185,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        135,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "MERIELY RUFINO VAZ MUTZ",
        135,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "ORLANDA ALVES SALVADOR",
        76,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        550,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        200,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "TAIANE STREY VERONEZE ANDRE",
        300,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "64.659.216 KETELLY ALVES GOULARTE",
        -2600,
        "ATRASADO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "GOOGLE BRASIL INTERNET LTDA.",
        -2638.5,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        280,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "FLAVYANNE PAULO MORETT AGUIAR",
        500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "IRINEIA SOUZA PEREIRA SAAR",
        500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "REINALDO ERMELINDO DE ARAUJO",
        500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3068,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "NAIR DA SILVA LOPES",
        7000,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "DORIETE DE SOUZA",
        1872,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        490,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ANTONIO PEREIRA DE ARAUJO",
        6050,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ADELSON ANDRE BAECE STREY",
        1200,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MAYARA RIBEIRO SIMOES FORTUNA",
        1500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        19750,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        5580.66,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "DELMA LUCIA MENDES DA CUNHA",
        1000,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2691,
        "ATRASADO"
      ],
      [
        "25/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Suplementos",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        700,
        "ATRASADO"
      ],
      [
        "15/04/2026",
        "Operações",
        "Suplementos",
        "BRISA DANIELLE FURTADO CARDOSO",
        350,
        "ATRASADO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -96,
        "ATRASADO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Marketing e Publicidade",
        "GOOGLE BRASIL INTERNET LTDA.",
        -81.89,
        "ATRASADO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Implantes",
        "Tomadores Diversos",
        3900,
        "ATRASADO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Despesas Pessoais dos Sócios",
        "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        -8640,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "IRINEIA SOUZA PEREIRA SAAR",
        9680.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "DORIETE DE SOUZA",
        1200,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SAYONARIA LOPES EVANGELISTA",
        8045,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        9342,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        9050,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MERIELY RUFINO VAZ MUTZ",
        12450,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        4403,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MAYKE CORREIA DE SOUZA",
        6920,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "LETICIA BATISTA DE MORAES",
        14955,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ADELSON ANDRE BAECE STREY",
        3362,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        11199,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ELIEZER MOURA DE ASSIS",
        7600.87,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SALETTE DE ALMEIDA SANTANA",
        9264,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA LEUZINA DE AGUIAR DIAS",
        185,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "NEILA MARIA DE REZENDE SILVA",
        4697.61,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JULIMAR MARTINS FANTI",
        8200,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TAIANE STREY VERONEZE ANDRE",
        12228,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        6014.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Platina",
        "LEILA DA SILVA DE SOUZA COELHO",
        6351.4,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ADRIANA MOSCONI PAGANI",
        4800,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FÁBIA INACIO DE SOUZA BLESSON",
        5733.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALAETI BRISQUE POEYS",
        4133.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "HAYANE SILVA VALARDAO",
        2500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Implantes",
        "THAIZ LIMA ROCHA DA SILVA",
        4630,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ANTONIO PEREIRA DE ARAUJO",
        1170,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        10632,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALEX MARCHIOLI STEFANON",
        12750,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        12965,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA CRISTINA VIEIRA TEODORO",
        6842.7,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",
        16050,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "FERNANDA RAQUEL TEIXEIRA CHIPOLESC",
        3625,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",
        900,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LEIDIANA FERREIRA RODRIGUES",
        2300,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "WARLLEM FERREIRA COSTA",
        6040,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        12493.99,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "RODRIGO SOARES SIQUEIRA",
        5980,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "CARLA GESIANE CARLASARTE DE SOUZA VIAL",
        7243.44,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        3400,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "EVERALDO DE SOUZA VELTEN SANTIAGO",
        2100,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "STEPHANIE SOLE BARABANI",
        4800,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SEBASTIÃO SATURINO FILHO",
        6500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        4922,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        964,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Alquimia Ouro",
        "TELMA DOMINGOS DA SILVA",
        1710.11,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ITELVINA FERNANDA DE OLIVEIRA VERLY",
        1400,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LUDIMILA MATIAS CARDOSO PAGANI",
        468,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MARIA ALICE RODRIGUES DE JESUS",
        2570,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "KAMILA QUADRAS CASTILHO",
        1050,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MAGDA CRISTINA ANGELO DE OLIVEIRA",
        500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LIETE VOLPONI FORTUNA",
        1125,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LEDIANA NEIVA ANACLETO OLIVEIRA",
        4965,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ESTER DE ALMEIDA SANTANA",
        3900,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FABRÍCIO RODRIGUES LINHARES",
        3578,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        4246,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ANA PAULA COELHO PORTES MATTOS",
        2300,
        "ATRASADO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Materiais de Escritório",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -1600,
        "ATRASADO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOS FARMACEUTICA LTDA",
        -12500.8,
        "ATRASADO"
      ],
      [
        "28/03/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "ATRASADO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "37.901.199 VAGNER LISBOA RIBEIRO",
        -60,
        "ATRASADO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -91,
        "ATRASADO"
      ],
      [
        "12/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -18528.75,
        "ATRASADO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "TOKARSKI COMERCIO INDUSTRIA LTDA",
        -14300.04,
        "ATRASADO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -126.72,
        "ATRASADO"
      ],
      [
        "10/03/2026",
        "Operações",
        "Suplementos",
        "RODRIGO SOARES SIQUEIRA",
        60,
        "ATRASADO"
      ],
      [
        "10/03/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.22,
        "ATRASADO"
      ],
      [
        "09/03/2026",
        "Operações",
        "Suplementos",
        "SAYONARIA LOPES EVANGELISTA",
        185,
        "ATRASADO"
      ],
      [
        "07/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ROSANGELA GOMES RIBEIRO FIUZA",
        3367,
        "ATRASADO"
      ],
      [
        "28/02/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -599.9,
        "ATRASADO"
      ],
      [
        "23/02/2026",
        "Operações",
        "Suplementos",
        "MARLETE ALVARES CABRAL",
        50,
        "ATRASADO"
      ],
      [
        "20/02/2026",
        "Operações",
        "Software / Licença de Uso",
        "CONTAAZUL SOFTWARE LTDA",
        -917.64,
        "ATRASADO"
      ],
      [
        "13/02/2026",
        "Operações",
        "Suplementos",
        "NAZARETH ALVES DE ARAÚJO",
        75,
        "ATRASADO"
      ],
      [
        "12/02/2026",
        "Operações",
        "Consulta",
        "LETICIA BATISTA DE MORAES",
        650,
        "ATRASADO"
      ],
      [
        "11/02/2026",
        "Operações",
        "Suplementos",
        "JOSÉ ESTHEVAN PIRES DA CUNHA",
        135,
        "ATRASADO"
      ],
      [
        "11/02/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA",
        -7140,
        "ATRASADO"
      ],
      [
        "10/02/2026",
        "Operações",
        "Consulta",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        582,
        "ATRASADO"
      ],
      [
        "04/02/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -902.25,
        "ATRASADO"
      ],
      [
        "26/01/2026",
        "Operações",
        "Consulta",
        "SAYONARIA LOPES EVANGELISTA",
        500,
        "ATRASADO"
      ],
      [
        "21/01/2026",
        "Operações",
        "Suplementos",
        "HAYANE SILVA VALARDAO",
        135,
        "ATRASADO"
      ],
      [
        "19/01/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        150,
        "ATRASADO"
      ],
      [
        "13/01/2026",
        "Operações",
        "Suplementos",
        "NAZARETH ALVES DE ARAÚJO",
        185,
        "ATRASADO"
      ],
      [
        "08/01/2026",
        "Operações",
        "Suplementos",
        "LAYLA TEIXEIRA BARBOSA COSTA",
        135,
        "ATRASADO"
      ],
      [
        "06/01/2026",
        "Operações",
        "Suplementos",
        "ANA PAULA COELHO PORTES MATTOS",
        75,
        "ATRASADO"
      ],
      [
        "05/01/2026",
        "Operações",
        "Suplementos",
        "LEILA DA SILVA DE SOUZA COELHO",
        75,
        "ATRASADO"
      ],
      [
        "05/01/2026",
        "Operações",
        "Suplementos",
        "KAIKE PIOL",
        75,
        "ATRASADO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "ATRASADO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "SEBASTIÃO SATURINO FILHO",
        270,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Suplementos",
        "ANTONIO PEREIRA DE ARAUJO",
        75,
        "ATRASADO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        75,
        "ATRASADO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        75,
        "ATRASADO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ANDREA RODRIGUES FERNANDES",
        50,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        210,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        9600,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        75,
        "ATRASADO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DA PENHA MOURA ROSA",
        75,
        "ATRASADO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "ESTER DE ALMEIDA SANTANA",
        185,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        135,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "MERIELY RUFINO VAZ MUTZ",
        135,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "ORLANDA ALVES SALVADOR",
        76,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        550,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        200,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "TAIANE STREY VERONEZE ANDRE",
        300,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        280,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "FLAVYANNE PAULO MORETT AGUIAR",
        500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "IRINEIA SOUZA PEREIRA SAAR",
        500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "REINALDO ERMELINDO DE ARAUJO",
        500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3068,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "NAIR DA SILVA LOPES",
        7000,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "DORIETE DE SOUZA",
        1872,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        490,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ANTONIO PEREIRA DE ARAUJO",
        6050,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ADELSON ANDRE BAECE STREY",
        1200,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MAYARA RIBEIRO SIMOES FORTUNA",
        1500,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        19750,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        5580.66,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "DELMA LUCIA MENDES DA CUNHA",
        1000,
        "ATRASADO"
      ],
      [
        "25/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Suplementos",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        700,
        "ATRASADO"
      ],
      [
        "15/04/2026",
        "Operações",
        "Suplementos",
        "BRISA DANIELLE FURTADO CARDOSO",
        350,
        "ATRASADO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Implantes",
        "Tomadores Diversos",
        3900,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "IRINEIA SOUZA PEREIRA SAAR",
        9680.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "DORIETE DE SOUZA",
        1200,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SAYONARIA LOPES EVANGELISTA",
        8045,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        9342,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        9050,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MERIELY RUFINO VAZ MUTZ",
        12450,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        4403,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MAYKE CORREIA DE SOUZA",
        6920,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "LETICIA BATISTA DE MORAES",
        14955,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ADELSON ANDRE BAECE STREY",
        3362,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        11199,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ELIEZER MOURA DE ASSIS",
        7600.87,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SALETTE DE ALMEIDA SANTANA",
        9264,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA LEUZINA DE AGUIAR DIAS",
        185,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "NEILA MARIA DE REZENDE SILVA",
        4697.61,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JULIMAR MARTINS FANTI",
        8200,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TAIANE STREY VERONEZE ANDRE",
        12228,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        6014.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Platina",
        "LEILA DA SILVA DE SOUZA COELHO",
        6351.4,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ADRIANA MOSCONI PAGANI",
        4800,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FÁBIA INACIO DE SOUZA BLESSON",
        5733.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALAETI BRISQUE POEYS",
        4133.17,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "HAYANE SILVA VALARDAO",
        2500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Implantes",
        "THAIZ LIMA ROCHA DA SILVA",
        4630,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ANTONIO PEREIRA DE ARAUJO",
        1170,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        10632,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALEX MARCHIOLI STEFANON",
        12750,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        12965,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA CRISTINA VIEIRA TEODORO",
        6842.7,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",
        16050,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "FERNANDA RAQUEL TEIXEIRA CHIPOLESC",
        3625,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",
        900,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LEIDIANA FERREIRA RODRIGUES",
        2300,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "WARLLEM FERREIRA COSTA",
        6040,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        12493.99,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "RODRIGO SOARES SIQUEIRA",
        5980,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "CARLA GESIANE CARLASARTE DE SOUZA VIAL",
        7243.44,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        3400,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "EVERALDO DE SOUZA VELTEN SANTIAGO",
        2100,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "STEPHANIE SOLE BARABANI",
        4800,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SEBASTIÃO SATURINO FILHO",
        6500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        4922,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        964,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Alquimia Ouro",
        "TELMA DOMINGOS DA SILVA",
        1710.11,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ITELVINA FERNANDA DE OLIVEIRA VERLY",
        1400,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LUDIMILA MATIAS CARDOSO PAGANI",
        468,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MARIA ALICE RODRIGUES DE JESUS",
        2570,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "KAMILA QUADRAS CASTILHO",
        1050,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MAGDA CRISTINA ANGELO DE OLIVEIRA",
        500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        500,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LIETE VOLPONI FORTUNA",
        1125,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LEDIANA NEIVA ANACLETO OLIVEIRA",
        4965,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ESTER DE ALMEIDA SANTANA",
        3900,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FABRÍCIO RODRIGUES LINHARES",
        3578,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        4246,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ANA PAULA COELHO PORTES MATTOS",
        2300,
        "ATRASADO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "10/03/2026",
        "Operações",
        "Suplementos",
        "RODRIGO SOARES SIQUEIRA",
        60,
        "ATRASADO"
      ],
      [
        "09/03/2026",
        "Operações",
        "Suplementos",
        "SAYONARIA LOPES EVANGELISTA",
        185,
        "ATRASADO"
      ],
      [
        "07/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ROSANGELA GOMES RIBEIRO FIUZA",
        3367,
        "ATRASADO"
      ],
      [
        "23/02/2026",
        "Operações",
        "Suplementos",
        "MARLETE ALVARES CABRAL",
        50,
        "ATRASADO"
      ],
      [
        "13/02/2026",
        "Operações",
        "Suplementos",
        "NAZARETH ALVES DE ARAÚJO",
        75,
        "ATRASADO"
      ],
      [
        "12/02/2026",
        "Operações",
        "Consulta",
        "LETICIA BATISTA DE MORAES",
        650,
        "ATRASADO"
      ],
      [
        "11/02/2026",
        "Operações",
        "Suplementos",
        "JOSÉ ESTHEVAN PIRES DA CUNHA",
        135,
        "ATRASADO"
      ],
      [
        "10/02/2026",
        "Operações",
        "Consulta",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        582,
        "ATRASADO"
      ],
      [
        "26/01/2026",
        "Operações",
        "Consulta",
        "SAYONARIA LOPES EVANGELISTA",
        500,
        "ATRASADO"
      ],
      [
        "21/01/2026",
        "Operações",
        "Suplementos",
        "HAYANE SILVA VALARDAO",
        135,
        "ATRASADO"
      ],
      [
        "19/01/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        150,
        "ATRASADO"
      ],
      [
        "13/01/2026",
        "Operações",
        "Suplementos",
        "NAZARETH ALVES DE ARAÚJO",
        185,
        "ATRASADO"
      ],
      [
        "08/01/2026",
        "Operações",
        "Suplementos",
        "LAYLA TEIXEIRA BARBOSA COSTA",
        135,
        "ATRASADO"
      ],
      [
        "06/01/2026",
        "Operações",
        "Suplementos",
        "ANA PAULA COELHO PORTES MATTOS",
        75,
        "ATRASADO"
      ],
      [
        "05/01/2026",
        "Operações",
        "Suplementos",
        "LEILA DA SILVA DE SOUZA COELHO",
        75,
        "ATRASADO"
      ],
      [
        "05/01/2026",
        "Operações",
        "Suplementos",
        "KAIKE PIOL",
        75,
        "ATRASADO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "ATRASADO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -138.3,
        "ATRASADO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -2405.4,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -151.3,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4.92,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4,
        "ATRASADO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "64.659.216 KETELLY ALVES GOULARTE",
        -2600,
        "ATRASADO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "GOOGLE BRASIL INTERNET LTDA.",
        -2638.5,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2691,
        "ATRASADO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -96,
        "ATRASADO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Marketing e Publicidade",
        "GOOGLE BRASIL INTERNET LTDA.",
        -81.89,
        "ATRASADO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Despesas Pessoais dos Sócios",
        "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        -8640,
        "ATRASADO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Materiais de Escritório",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -1600,
        "ATRASADO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOS FARMACEUTICA LTDA",
        -12500.8,
        "ATRASADO"
      ],
      [
        "28/03/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "ATRASADO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "37.901.199 VAGNER LISBOA RIBEIRO",
        -60,
        "ATRASADO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -91,
        "ATRASADO"
      ],
      [
        "12/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -18528.75,
        "ATRASADO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "TOKARSKI COMERCIO INDUSTRIA LTDA",
        -14300.04,
        "ATRASADO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -126.72,
        "ATRASADO"
      ],
      [
        "10/03/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.22,
        "ATRASADO"
      ],
      [
        "28/02/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -599.9,
        "ATRASADO"
      ],
      [
        "20/02/2026",
        "Operações",
        "Software / Licença de Uso",
        "CONTAAZUL SOFTWARE LTDA",
        -917.64,
        "ATRASADO"
      ],
      [
        "11/02/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA",
        -7140,
        "ATRASADO"
      ],
      [
        "04/02/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -902.25,
        "ATRASADO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 409997.58999999997,
      "TOTAL_DESPESA": 77571.65,
      "VALOR_LIQUIDO": 332425.93999999994,
      "MARGEM_LIQUIDA": 81.0799741530188,
      "VALOR_LIQ_SERIES": [
        1330,
        -8067.789999999999,
        273558.37,
        48155.96,
        17449.399999999994,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      3900,
      0,
      0,
      1126,
      2001.25,
      335,
      3367,
      210,
      185,
      642,
      9945,
      650,
      385,
      0,
      350,
      700,
      0,
      75,
      150,
      0,
      210,
      0,
      50,
      0,
      1250,
      1395,
      0,
      0,
      0,
      66137.54,
      316933.8
    ],
    "DESPESA_DIA": [
      8640,
      2720.39,
      0,
      3502.25,
      0,
      0,
      0,
      8.92,
      0,
      5.22,
      21718.06,
      20934.15,
      138.3,
      96,
      0,
      0,
      0,
      0,
      91,
      917.64,
      0,
      0,
      0,
      60,
      0,
      0,
      0,
      1548.02,
      0,
      17191.699999999997,
      0
    ],
    "SALDOS_MES": [
      1330,
      -6737.789999999999,
      266820.58,
      314976.54000000004,
      332425.94000000006,
      332425.94000000006,
      332425.94000000006,
      332425.94000000006,
      332425.94000000006,
      332425.94000000006,
      332425.94000000006,
      332425.94000000006
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          0,
          0,
          146962.72999999998,
          7786.91,
          14662.25,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Diamante",
        "values": [
          0,
          0,
          87964.51,
          34964.67,
          2164.67,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Bronze",
        "values": [
          0,
          0,
          56095.05,
          1280,
          2282.2,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Injetaveis",
        "values": [
          0,
          0,
          16248,
          1990,
          708.75,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Implantes",
        "values": [
          0,
          0,
          4630,
          3900,
          300,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Insumos e Materiais Clínicos",
        "values": [
          0,
          -8042.25,
          -45329.59,
          -2691,
          -2556.7000000000003,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Despesas Pessoais dos Sócios",
        "values": [
          0,
          0,
          0,
          -8640,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Marketing e Publicidade",
        "values": [
          0,
          0,
          0,
          -81.89,
          -5238.5,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Software / Licença de Uso",
        "values": [
          0,
          -1517.54,
          -399.9,
          -399.9,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Materiais de Escritório",
        "values": [
          0,
          0,
          -1600,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 323992.8,
        "d2": 86004.79
      },
      {
        "tipo": "Suplementos",
        "parent": "Receita",
        "d1": 1335,
        "d2": 3911
      },
      {
        "tipo": "Consulta",
        "parent": "Receita",
        "d1": 1732,
        "d2": 1500
      },
      {
        "tipo": "Receita de Serviços - Plano Bronze",
        "parent": "Receita",
        "d1": 56095.05,
        "d2": 3562.2
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 146962.72999999998,
        "d2": 22449.16
      },
      {
        "tipo": "Receita de Serviços - Plano Diamante",
        "parent": "Receita",
        "d1": 87964.51,
        "d2": 37129.34
      },
      {
        "tipo": "Receita de Serviços - Platina",
        "parent": "Receita",
        "d1": 6351.4,
        "d2": 0
      },
      {
        "tipo": "Injetaveis",
        "parent": "Receita",
        "d1": 16248,
        "d2": 2698.75
      },
      {
        "tipo": "Implantes",
        "parent": "Receita",
        "d1": 4630,
        "d2": 4200
      },
      {
        "tipo": "Receita de Serviços - Protocolo Body Reset",
        "parent": "Receita",
        "d1": 964,
        "d2": 794
      },
      {
        "tipo": "Receita de Serviços - Alquimia Ouro",
        "parent": "Receita",
        "d1": 1710.11,
        "d2": 0
      },
      {
        "tipo": "Adicional de Tizerpatida",
        "parent": "Receita",
        "d1": 0,
        "d2": 8785.34
      },
      {
        "tipo": "Teste Nutrigenetico",
        "parent": "Receita",
        "d1": 0,
        "d2": 975
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -57172.22,
        "d2": -20399.43
      },
      {
        "tipo": "Insumos e Materiais Clínicos",
        "parent": "Despesa",
        "d1": -53371.84,
        "d2": -5247.700000000001
      },
      {
        "tipo": "Software / Licença de Uso",
        "parent": "Despesa",
        "d1": -1917.44,
        "d2": -399.9
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": -5.22,
        "d2": -8.92
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": -126.72,
        "d2": -234.3
      },
      {
        "tipo": "Serviços de Pessoa Jurídica",
        "parent": "Despesa",
        "d1": -151,
        "d2": 0
      },
      {
        "tipo": "Materiais de Escritório",
        "parent": "Despesa",
        "d1": -1600,
        "d2": 0
      },
      {
        "tipo": "Despesas Pessoais dos Sócios",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8640
      },
      {
        "tipo": "Marketing e Publicidade",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5320.389999999999
      },
      {
        "tipo": "FGTS e Multa de FGTS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -548.22
      }
    ]
  },
  "a_pagar_receber": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "fevereiro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "abril",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "maio",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "junho",
        "receita": 17377.2,
        "despesa": 4580.5599999999995
      },
      {
        "m": "julho",
        "receita": 14008.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "agosto",
        "receita": 13308.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "setembro",
        "receita": 10164.769999999999,
        "despesa": 4574.799999999999
      },
      {
        "m": "outubro",
        "receita": 7492.12,
        "despesa": 4574.799999999999
      },
      {
        "m": "novembro",
        "receita": 6867.1,
        "despesa": 4574.799999999999
      },
      {
        "m": "dezembro",
        "receita": 4619.2,
        "despesa": 4574.799999999999
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 32604.5,
        "clientes": 4
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 14399.400000000001,
        "clientes": 4
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 8658.66,
        "clientes": 1
      },
      {
        "name": "Adicional de Tizerpatida",
        "value": 4954.66,
        "clientes": 5
      },
      {
        "name": "Implantes",
        "value": 4600,
        "clientes": 2
      },
      {
        "name": "Teste Nutrigenetico",
        "value": 2925,
        "clientes": 1
      },
      {
        "name": "Receita de Serviços - Protocolo Body Reset",
        "value": 2779,
        "clientes": 1
      },
      {
        "name": "Injetaveis",
        "value": 2126.25,
        "clientes": 1
      },
      {
        "name": "Consulta",
        "value": 650,
        "clientes": 1
      },
      {
        "name": "Suplementos",
        "value": 140,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Marketing e Publicidade",
        "value": 28700,
        "fornecedores": 2
      },
      {
        "name": "Plano de Saúde Colaboradores",
        "value": 1820,
        "fornecedores": 1
      },
      {
        "name": "Telefonia e Internet",
        "value": 1503.6000000000004,
        "fornecedores": 1
      },
      {
        "name": "Coleta de Resíduos Ambientais",
        "value": 5.76,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "MARIA DA PENHA MOURA ROSA",
        "value": 11156.599999999999
      },
      {
        "name": "MARILZA DE AGUIAR DIAS",
        "value": 10891.5
      },
      {
        "name": "ANA LÚCIA COLOMBEKI SALDANHA",
        "value": 8835.4
      },
      {
        "name": "BETANIA KINACIA DE SOUZA SATURNINO",
        "value": 8658.66
      },
      {
        "name": "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        "value": 4380
      },
      {
        "name": "SAYONARIA LOPES EVANGELISTA",
        "value": 4264
      },
      {
        "name": "ESTER DE ALMEIDA SANTANA",
        "value": 4000
      },
      {
        "name": "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        "value": 3620.3999999999996
      },
      {
        "name": "NAZARETH ALVES DE ARAÚJO",
        "value": 3125
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 2925
      },
      {
        "name": "NATALIA PEREIRA MARTINS SILVA",
        "value": 2779
      },
      {
        "name": "SIRLENE KISTER PELANDA",
        "value": 2135
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 14700
      },
      {
        "name": "RADIO SAO FRANCISCO LTDA",
        "value": 14000
      },
      {
        "name": "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        "value": 1820
      },
      {
        "name": "BIZZ INTERNET LTDA",
        "value": 1503.6000000000004
      },
      {
        "name": "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        "value": 5.76
      }
    ],
    "EXTRATO": [
      [
        "28/04/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "26/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.65,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.65,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.66,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        1000,
        "A_PAGAR"
      ],
      [
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        600,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        50,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.76,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "28/04/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "26/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.65,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.65,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.66,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        1000,
        "A_PAGAR"
      ],
      [
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        600,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        50,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "06/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.76,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 73837.47,
      "TOTAL_DESPESA": 32029.359999999997,
      "VALOR_LIQUIDO": 41808.11,
      "MARGEM_LIQUIDA": 56.62180732898893,
      "VALOR_LIQ_SERIES": [
        0,
        0,
        0,
        0,
        0,
        12796.640000000001,
        9433.740000000002,
        8733.740000000002,
        5589.969999999999,
        2917.3200000000006,
        2292.300000000001,
        44.400000000000546
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      1404,
      4000,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1900,
      625,
      1250,
      0,
      1581.25,
      3162.5,
      5845.25,
      3162.5,
      50906.96999999999,
      0
    ],
    "DESPESA_DIA": [
      0,
      0,
      0,
      0,
      15820,
      16203.599999999995,
      0,
      0,
      0,
      5.76,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "SALDOS_MES": [
      0,
      0,
      0,
      0,
      0,
      12796.640000000001,
      22230.380000000005,
      30964.120000000006,
      36554.090000000004,
      39471.41,
      41763.71000000001,
      41808.11000000001
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          0,
          0,
          0,
          0,
          0,
          5062.25,
          5062.25,
          5062.25,
          5062.25,
          5062.25,
          4437.25,
          2856
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Bronze",
        "values": [
          0,
          0,
          0,
          0,
          0,
          3282.2,
          2826.2,
          2826.2,
          1366.2,
          1366.2,
          1366.2,
          1366.2
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Diamante",
        "values": [
          0,
          0,
          0,
          0,
          0,
          2164.67,
          2164.67,
          2164.67,
          2164.65,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Adicional de Tizerpatida",
        "values": [
          0,
          0,
          0,
          0,
          0,
          3030.66,
          908,
          508,
          508,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Implantes",
        "values": [
          0,
          0,
          0,
          0,
          0,
          966.67,
          966.67,
          666.67,
          666.67,
          666.67,
          666.65,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Marketing e Publicidade",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -4100,
          -4100,
          -4100,
          -4100,
          -4100,
          -4100,
          -4100
        ]
      },
      {
        "cat": "Plano de Saúde Colaboradores",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -260,
          -260,
          -260,
          -260,
          -260,
          -260,
          -260
        ]
      },
      {
        "cat": "Telefonia e Internet",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -214.8,
          -214.8,
          -214.8,
          -214.8,
          -214.8,
          -214.8,
          -214.8
        ]
      },
      {
        "cat": "Coleta de Resíduos Ambientais",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -5.76,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 0,
        "d2": 17377.2
      },
      {
        "tipo": "Adicional de Tizerpatida",
        "parent": "Receita",
        "d1": 0,
        "d2": 3030.66
      },
      {
        "tipo": "Implantes",
        "parent": "Receita",
        "d1": 0,
        "d2": 966.67
      },
      {
        "tipo": "Consulta",
        "parent": "Receita",
        "d1": 0,
        "d2": 650
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 0,
        "d2": 5062.25
      },
      {
        "tipo": "Receita de Serviços - Plano Bronze",
        "parent": "Receita",
        "d1": 0,
        "d2": 3282.2
      },
      {
        "tipo": "Suplementos",
        "parent": "Receita",
        "d1": 0,
        "d2": 140
      },
      {
        "tipo": "Receita de Serviços - Plano Diamante",
        "parent": "Receita",
        "d1": 0,
        "d2": 2164.67
      },
      {
        "tipo": "Receita de Serviços - Protocolo Body Reset",
        "parent": "Receita",
        "d1": 0,
        "d2": 397
      },
      {
        "tipo": "Injetaveis",
        "parent": "Receita",
        "d1": 0,
        "d2": 708.75
      },
      {
        "tipo": "Teste Nutrigenetico",
        "parent": "Receita",
        "d1": 0,
        "d2": 975
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": 0,
        "d2": -4580.5599999999995
      },
      {
        "tipo": "Marketing e Publicidade",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4100
      },
      {
        "tipo": "Plano de Saúde Colaboradores",
        "parent": "Despesa",
        "d1": 0,
        "d2": -260
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": 0,
        "d2": -214.8
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5.76
      }
    ]
  },
  "tudo": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 192282.14000000004,
        "despesa": 152863.34
      },
      {
        "m": "fevereiro",
        "receita": 155722.00999999995,
        "despesa": 82377.71
      },
      {
        "m": "março",
        "receita": 499656.39999999997,
        "despesa": 245859.43999999997
      },
      {
        "m": "abril",
        "receita": 217433.62,
        "despesa": 170692.75999999998
      },
      {
        "m": "maio",
        "receita": 168842.95000000007,
        "despesa": 164644.58000000002
      },
      {
        "m": "junho",
        "receita": 17377.2,
        "despesa": 4580.5599999999995
      },
      {
        "m": "julho",
        "receita": 14008.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "agosto",
        "receita": 13308.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "setembro",
        "receita": 10164.769999999999,
        "despesa": 4574.799999999999
      },
      {
        "m": "outubro",
        "receita": 7492.12,
        "despesa": 4574.799999999999
      },
      {
        "m": "novembro",
        "receita": 6867.1,
        "despesa": 4574.799999999999
      },
      {
        "m": "dezembro",
        "receita": 4619.2,
        "despesa": 4574.799999999999
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receitas de Serviços a Identificar",
        "value": 605882.7900000002,
        "clientes": 16
      },
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 303721.02,
        "clientes": 29
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 154605.68000000002,
        "clientes": 14
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 122178.64999999998,
        "clientes": 28
      },
      {
        "name": "Injetaveis",
        "value": 29906.9,
        "clientes": 19
      },
      {
        "name": "Adicional de Tizerpatida",
        "value": 19984,
        "clientes": 12
      },
      {
        "name": "Implantes",
        "value": 17330,
        "clientes": 5
      },
      {
        "name": "Consulta",
        "value": 15450,
        "clientes": 26
      },
      {
        "name": "Receita de Serviços - Protocolo Body Reset",
        "value": 10009,
        "clientes": 2
      },
      {
        "name": "Suplementos",
        "value": 9253,
        "clientes": 48
      },
      {
        "name": "Teste Nutrigenetico",
        "value": 7800,
        "clientes": 2
      },
      {
        "name": "Receita de Serviços - Platina",
        "value": 6351.4,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Despesas Diversas (Cartão)",
        "value": 112127.39000000001,
        "fornecedores": 1
      },
      {
        "name": "Salários",
        "value": 100564.92,
        "fornecedores": 2
      },
      {
        "name": "Retiradas para Sócios",
        "value": 93713.65999999999,
        "fornecedores": 2
      },
      {
        "name": "Insumos e Materiais Clínicos",
        "value": 82661.37999999999,
        "fornecedores": 9
      },
      {
        "name": "Mentorias, Cursos e Treinamentos",
        "value": 63101.42,
        "fornecedores": 3
      },
      {
        "name": "Marketing e Publicidade",
        "value": 60295.39,
        "fornecedores": 6
      },
      {
        "name": "ISS",
        "value": 59859.340000000004,
        "fornecedores": 3
      },
      {
        "name": "Despesas a identificar",
        "value": 57244.47,
        "fornecedores": 2
      },
      {
        "name": "IRPJ E CSLL",
        "value": 54193.020000000004,
        "fornecedores": 2
      },
      {
        "name": "Pis/Cofins",
        "value": 52559.200000000004,
        "fornecedores": 2
      },
      {
        "name": "INSS sobre Salários - GPS",
        "value": 18615.829999999998,
        "fornecedores": 1
      },
      {
        "name": "Pró-labore",
        "value": 15000,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "Sem cliente",
        "value": 554586.4600000001
      },
      {
        "name": "ISABELA CRISTINA FANTI",
        "value": 28628
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 21325
      },
      {
        "name": "BETANIA KINACIA DE SOUZA SATURNINO",
        "value": 20910
      },
      {
        "name": "MONICA DE OLIVEIRA SILVA FERNANDES",
        "value": 20450
      },
      {
        "name": "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        "value": 20393.989999999998
      },
      {
        "name": "MARILZA DE AGUIAR DIAS",
        "value": 20382
      },
      {
        "name": "ALEX MARCHIOLI STEFANON",
        "value": 20333.17
      },
      {
        "name": "MARIA DAS GRAÇAS NEVES CALIARI",
        "value": 20245
      },
      {
        "name": "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        "value": 19460.66
      },
      {
        "name": "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        "value": 18614.999999999996
      },
      {
        "name": "ANA LÚCIA COLOMBEKI SALDANHA",
        "value": 18018.600000000006
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "Sem cliente",
        "value": 532288.3099999999
      },
      {
        "name": "O MEDICO EMPRESARIO LTDA",
        "value": 52184.75
      },
      {
        "name": "RECEITA FEDERAL",
        "value": 46393.740000000005
      },
      {
        "name": "BIO MEDS PHARMACEUTICA LTDA",
        "value": 35603.950000000004
      },
      {
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 27975
      },
      {
        "name": "RADIO SAO FRANCISCO LTDA",
        "value": 24000
      },
      {
        "name": "TOKARSKI COMERCIO INDUSTRIA LTDA",
        "value": 14300.04
      },
      {
        "name": "ANNA PAULA FERNANDES MARTINS",
        "value": 14100
      },
      {
        "name": "BIOS FARMACEUTICA LTDA",
        "value": 12500.8
      },
      {
        "name": "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        "value": 10000
      },
      {
        "name": "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        "value": 8985.39
      },
      {
        "name": "DELOGO & SAINTS CONTABILIDADE LTDA",
        "value": 8785.2
      }
    ],
    "EXTRATO": [
      [
        "28/04/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "26/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.65,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.65,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.66,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        1000,
        "A_PAGAR"
      ],
      [
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        600,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        50,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.76,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "ATRASADO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2586.2,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.06,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Exames Médicos",
        "Sem cliente",
        -600,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1256.89,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1621.2,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1800,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Despesas a identificar",
        "O MEDICO EMPRESARIO LTDA",
        -184.75,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -1448.01,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "ATRASADO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        386.16,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        476.82,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2170.59,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1707.5,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4700,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        607.78,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "CRISTIANE CANDIDA DA SILVA",
        75,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        650,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        5613,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "SEBASTIÃO SATURINO FILHO",
        270,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        479.8,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        608.75,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1473.09,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "ISABELA CRISTINA FANTI",
        2808,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1473.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        388.4,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        480.1,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        50,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -480.1,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        456.14,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        846.04,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Suplementos",
        "ANTONIO PEREIRA DE ARAUJO",
        75,
        "ATRASADO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "PIX Marketplace",
        -46.89,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -41.87,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Energia Elétrica",
        "28.152.650/0001-71",
        -546.33,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Pis/Cofins",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -846.04,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -46.89,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "28/04/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "26/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.65,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.65,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "22/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "23/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        544,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.66,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "29/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SAYONARIA LOPES EVANGELISTA",
        1000,
        "A_PAGAR"
      ],
      [
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        600,
        "A_PAGAR"
      ],
      [
        "22/06/2026",
        "Operações",
        "Consulta",
        "Débora Eliziário de Oliveira",
        50,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        400,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ORLANDA ALVES SALVADOR",
        200,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "ATRASADO"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "ATRASADO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2586.2,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.06,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1256.89,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1621.2,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1800,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        386.16,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        476.82,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2170.59,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1707.5,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4700,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        607.78,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "CRISTIANE CANDIDA DA SILVA",
        75,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        650,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        5613,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Suplementos",
        "SEBASTIÃO SATURINO FILHO",
        270,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        479.8,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        608.75,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1473.09,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "ISABELA CRISTINA FANTI",
        2808,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "ATRASADO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        388.4,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        480.1,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        50,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        456.14,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        846.04,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Suplementos",
        "ANTONIO PEREIRA DE ARAUJO",
        75,
        "ATRASADO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        421.8,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1223.46,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        314.41,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        368.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.08,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Suplementos",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        75,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        351.12,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        926.4,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        966.57,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.01,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        4732.93,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        384.08,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2955,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1000,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        75,
        "ATRASADO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        291,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3709.42,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        417.06,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        144.03,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.08,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        75,
        "ATRASADO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ANDREA RODRIGUES FERNANDES",
        50,
        "ATRASADO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        582.6,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        984.4,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2228.3,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        133.85,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Consulta",
        "Lúcia Sodré Moreira",
        650,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Consulta",
        "MARIA DAS GRAÇAS RODRIGUES COELHO",
        500,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        649.25,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3716.64,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3465.58,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        677.67,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2699.68,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "KEILA SOARES RODRIGUES MONTEIRO",
        1460,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        2690,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "KEILA SOARES RODRIGUES MONTEIRO",
        4000,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        6910,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        210,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        9600,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        366.7,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1154.76,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2238.86,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2330,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        3900,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        75,
        "ATRASADO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ALEX MARCHIOLI STEFANON",
        3900,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        542.82,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2117.55,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.02,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        460,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "MAULY MARTINS DA SILVA",
        550,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Suplementos",
        "MAULY MARTINS DA SILVA",
        185,
        "PAGO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "06/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.76,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "A_PAGAR"
      ],
      [
        "29/05/2026",
        "Operações",
        "Exames Médicos",
        "Sem cliente",
        -600,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Despesas a identificar",
        "O MEDICO EMPRESARIO LTDA",
        -184.75,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -1448.01,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "ATRASADO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1473.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1432.3,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1262.6,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -870.09,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -480.1,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "PIX Marketplace",
        -46.89,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -41.87,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Energia Elétrica",
        "28.152.650/0001-71",
        -546.33,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Pis/Cofins",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -846.04,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -821.79,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -46.89,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -368.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -314.41,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "Honorários Consultoria",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -926.4,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -351.12,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -966.57,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -272,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4732.93,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2955,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -384.08,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3709.42,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -291,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Pró-labore - GPS",
        "RECEITA FEDERAL",
        -2876.6,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -144.03,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -417.06,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2876.6,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -138.3,
        "ATRASADO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -133.85,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -2405.4,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -486.47,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Salários",
        "HEMILLY LACERDA BARBOSA",
        -3713.91,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "ISS",
        "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        -8226.92,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIO MEDS PHARMACEUTICA LTDA",
        -151.3,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Troco",
        "ERICA RODRIGUES DE LIMA",
        -26,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4.92,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4,
        "ATRASADO"
      ],
      [
        "07/05/2026",
        "Operações",
        "BPO Financeiro",
        "ALIADACONT CONTABILIDADE",
        -2400,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -300,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1875,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2521.26,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -41.4,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -27.6,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "BPO Financeiro",
        "Sem cliente",
        -2400,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "SEGEX UVV ON",
        -449.96,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -2300,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3150,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2299.32,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -21318.51,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2570,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -34274.37,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4950,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3626.71,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -1224,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "64.659.216 KETELLY ALVES GOULARTE",
        -2600,
        "ATRASADO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "GOOGLE BRASIL INTERNET LTDA.",
        -2638.5,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -390,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "ATRASADO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2691,
        "ATRASADO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "IRPJ E CSLL",
        "RECEITA FEDERAL",
        -11216.09,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "Pis/Cofins",
        "RECEITA FEDERAL",
        -16405.95,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2895.53,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Viagens e Representações",
        "JUAN CARLOS SOSA",
        -92.4,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Energia Elétrica",
        "EDP ESPIRITO SANTO",
        -745.04,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -705,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -655,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -88,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -49.43,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -41.76,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1200,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Honorários Consultoria",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -948,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Retiradas para Sócios",
        "ANNA PAULA FERNANDES MARTINS",
        -14100,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -117.34,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -14100,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -96,
        "ATRASADO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -540,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -150.99,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Sem cliente",
        -320,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "ISS",
        "Sem cliente",
        -17979.15,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "BPO Financeiro",
        "Sem cliente",
        -2400,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -3.36,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.28,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -200,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -2591.5,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Sem cliente",
        -3000.3,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
        "SEGEX UVV ON",
        -330.75,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -300,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -364.91,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2299.32,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1800,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Materiais de Escritório",
        "Sem cliente",
        -7.1,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -1800,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1190,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -575.3,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Lanches e Refeições",
        "Sem cliente",
        -155,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Marketing e Publicidade",
        "GOOGLE BRASIL INTERNET LTDA.",
        -81.89,
        "ATRASADO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -4261,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3746.76,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3710,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -3265.71,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2820,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2800,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -14444.75,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Despesas Pessoais dos Sócios",
        "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        -8640,
        "ATRASADO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -825,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Pró-labore",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -21.56,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "Sem cliente",
        -70,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Materiais de Escritório",
        "ARTCOPIAS",
        -230,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1500,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Materiais de Escritório",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -1600,
        "ATRASADO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "BIOS FARMACEUTICA LTDA",
        -12500.8,
        "ATRASADO"
      ],
      [
        "28/03/2026",
        "Operações",
        "Software / Licença de Uso",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "ATRASADO"
      ],
      [
        "27/03/2026",
        "Operações",
        "Materiais de Escritório",
        "Sem cliente",
        -115,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -15,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Lanches e Refeições",
        "DON PAGANOTTO LTDA",
        -284,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -200,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -800,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Materiais de Escritório",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -160,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -2192.5,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Pis/Cofins",
        "Sem cliente",
        -56.61,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1500,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -1500,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Retiradas para Sócios",
        "Sem cliente",
        -750,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -38625.88,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -5000,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "37.901.199 VAGNER LISBOA RIBEIRO",
        -60,
        "ATRASADO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "FLUKKA FARMA",
        -3727.5,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -2102.5,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -60,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -35.7,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 1307774.5900000003,
      "TOTAL_DESPESA": 848467.1900000004,
      "VALOR_LIQUIDO": 459307.3999999999,
      "MARGEM_LIQUIDA": 35.12129716482714,
      "VALOR_LIQ_SERIES": [
        39418.80000000005,
        73344.29999999994,
        253796.96,
        46740.860000000015,
        4198.370000000054,
        12796.640000000001,
        9433.740000000002,
        8733.740000000002,
        5589.969999999999,
        2917.3200000000006,
        2292.300000000001,
        44.400000000000546
      ]
    },
    "RECEITA_DIA": [
      10849.33,
      43822.840000000004,
      10318.26,
      38876.47,
      52643.810000000005,
      58856.090000000004,
      21118.21,
      23308.010000000002,
      23872.87,
      35526.049999999996,
      48343.15,
      39135.990000000005,
      21201.890000000003,
      2598.89,
      11304.5,
      16010.679999999998,
      14157.35,
      32794.97,
      42894.04,
      33940.450000000004,
      18797.670000000002,
      19845.7,
      54935.86000000001,
      29900.789999999994,
      14442.03,
      36734.149999999994,
      47945.94,
      18904.120000000003,
      18662.36,
      139706.38,
      326325.74000000005
    ],
    "DESPESA_DIA": [
      43979.07,
      33341.06999999999,
      39309.240000000005,
      77043.26000000001,
      33872.57,
      28770.580000000016,
      25919.79,
      18334.07,
      29812.870000000003,
      11256.5,
      36263.44000000001,
      55870.31,
      23649.189999999995,
      37592.240000000005,
      13681.53,
      23230.27,
      2268,
      11147.15,
      5511.83,
      11650.33,
      18342.910000000003,
      38724.399999999994,
      52742.740000000005,
      45935.88,
      1473.09,
      74170.04,
      15130,
      3180.7799999999997,
      1035.78,
      19403.26,
      15825
    ],
    "SALDOS_MES": [
      39418.80000000005,
      112763.09999999999,
      366560.06,
      413300.92000000004,
      417499.2900000001,
      430295.9300000001,
      439729.6700000001,
      448463.4100000001,
      454053.38000000006,
      456970.70000000007,
      459263.00000000006,
      459307.4000000001
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receitas de Serviços a Identificar",
        "values": [
          131441.84,
          101140.14000000001,
          115800.37000000002,
          128621.93999999999,
          128878.49999999999,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          30537.63,
          17580,
          187989.73,
          20346.91,
          14662.25,
          5062.25,
          5062.25,
          5062.25,
          5062.25,
          5062.25,
          4437.25,
          2856
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Diamante",
        "values": [
          0,
          15468.17,
          92954.51,
          35359.67,
          2164.67,
          2164.67,
          2164.67,
          2164.67,
          2164.65,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Bronze",
        "values": [
          21121,
          10135,
          63977.05,
          6364,
          6182.2,
          3282.2,
          2826.2,
          2826.2,
          1366.2,
          1366.2,
          1366.2,
          1366.2
        ]
      },
      {
        "cat": "Injetaveis",
        "values": [
          2100,
          3890.9,
          18311,
          2770,
          708.75,
          708.75,
          708.75,
          708.75,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Despesas Diversas (Cartão)",
        "values": [
          -2295.41,
          -1892.78,
          -66510.20999999999,
          -3630.62,
          -37798.37,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Salários",
        "values": [
          0,
          -16211.62,
          -17715.05,
          -24832.08,
          -41806.17,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Retiradas para Sócios",
        "values": [
          0,
          0,
          -29750.4,
          -42644.75,
          -21318.51,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Insumos e Materiais Clínicos",
        "values": [
          -7500,
          -9102.89,
          -55173.34,
          -5691.3,
          -5193.850000000001,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Mentorias, Cursos e Treinamentos",
        "values": [
          -13000,
          -13330.75,
          -22989.96,
          -13330.75,
          -449.96,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 847660.5499999998,
        "d2": 403653.7700000001
      },
      {
        "tipo": "Rendimentos de Aplicações",
        "parent": "Receita",
        "d1": 10.700000000000001,
        "d2": 1.34
      },
      {
        "tipo": "Receitas de Serviços a Identificar",
        "parent": "Receita",
        "d1": 348382.34999999986,
        "d2": 257500.44
      },
      {
        "tipo": "Receitas a Identificar",
        "parent": "Receita",
        "d1": 260,
        "d2": 0
      },
      {
        "tipo": "Suplementos",
        "parent": "Receita",
        "d1": 3795,
        "d2": 5458
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 236107.36000000002,
        "d2": 40071.41
      },
      {
        "tipo": "Consulta",
        "parent": "Receita",
        "d1": 9632,
        "d2": 5818
      },
      {
        "tipo": "Descontos financeiros obtidos",
        "parent": "Receita",
        "d1": 1085,
        "d2": 0
      },
      {
        "tipo": "Receita de Serviços - Plano Bronze",
        "parent": "Receita",
        "d1": 95233.05,
        "d2": 15828.400000000001
      },
      {
        "tipo": "Injetaveis",
        "parent": "Receita",
        "d1": 24301.9,
        "d2": 4187.5
      },
      {
        "tipo": "Receita de Serviços - Plano Diamante",
        "parent": "Receita",
        "d1": 108422.68,
        "d2": 39689.009999999995
      },
      {
        "tipo": "Receita de Serviço - alquimia Prata",
        "parent": "Receita",
        "d1": 1935,
        "d2": 0
      },
      {
        "tipo": "Receita de Serviços - Alquimia Ouro",
        "parent": "Receita",
        "d1": 2010.11,
        "d2": 0
      },
      {
        "tipo": "Receita de Serviços - Protocolo Body Reset",
        "parent": "Receita",
        "d1": 3964,
        "d2": 3663
      },
      {
        "tipo": "Adicional de Tizerpatida",
        "parent": "Receita",
        "d1": 1540,
        "d2": 16520
      },
      {
        "tipo": "Receita de Serviços - Platina",
        "parent": "Receita",
        "d1": 6351.4,
        "d2": 0
      },
      {
        "tipo": "Implantes",
        "parent": "Receita",
        "d1": 4630,
        "d2": 9066.67
      },
      {
        "tipo": "Teste Nutrigenetico",
        "parent": "Receita",
        "d1": 0,
        "d2": 5850
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -481100.4900000001,
        "d2": -339917.89999999985
      },
      {
        "tipo": "Despesas Diversas (Cartão)",
        "parent": "Despesa",
        "d1": -70698.4,
        "d2": -41428.990000000005
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -92.55000000000001,
        "d2": -2945.91
      },
      {
        "tipo": "Marketing e Publicidade",
        "parent": "Despesa",
        "d1": -16800,
        "d2": -18895.39
      },
      {
        "tipo": "Lanches e Refeições",
        "parent": "Despesa",
        "d1": -329,
        "d2": -155
      },
      {
        "tipo": "Serviços de Pessoa Jurídica",
        "parent": "Despesa",
        "d1": -3288,
        "d2": -143
      },
      {
        "tipo": "Telefonia Móvel",
        "parent": "Despesa",
        "d1": -71.74000000000001,
        "d2": 0
      },
      {
        "tipo": "Honorários Contábeis",
        "parent": "Despesa",
        "d1": -4892.6,
        "d2": -4112.6
      },
      {
        "tipo": "Despesas a identificar",
        "parent": "Despesa",
        "d1": -50207.04,
        "d2": -7037.43
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": -536.64,
        "d2": -479.58
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": -916.67,
        "d2": -877.9
      },
      {
        "tipo": "Serviços e Materiais de Limpeza e de Higiene",
        "parent": "Despesa",
        "d1": -480,
        "d2": -2189
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": -32880.600000000006,
        "d2": -26978.739999999998
      },
      {
        "tipo": "Insumos e Materiais Clínicos",
        "parent": "Despesa",
        "d1": -71776.23,
        "d2": -10885.15
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": -2133.85,
        "d2": -1291.37
      },
      {
        "tipo": "Materiais de Escritório",
        "parent": "Despesa",
        "d1": -2668.87,
        "d2": -7.1
      },
      {
        "tipo": "FGTS e Multa de FGTS",
        "parent": "Despesa",
        "d1": -2315.1200000000003,
        "d2": -2544.45
      },
      {
        "tipo": "INSS sobre Salários - GPS",
        "parent": "Despesa",
        "d1": -12843.699999999999,
        "d2": -5772.13
      },
      {
        "tipo": "Pis/Cofins",
        "parent": "Despesa",
        "d1": -28205.7,
        "d2": -24353.5
      },
      {
        "tipo": "IRPJ E CSLL",
        "parent": "Despesa",
        "d1": -42976.93,
        "d2": -11216.09
      },
      {
        "tipo": "Mentorias, Cursos e Treinamentos",
        "parent": "Despesa",
        "d1": -49320.71,
        "d2": -13780.71
      },
      {
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": -33926.67,
        "d2": -66638.25
      },
      {
        "tipo": "Software / Licença de Uso",
        "parent": "Despesa",
        "d1": -3168.69,
        "d2": -799.8
      },
      {
        "tipo": "Honorários Consultoria",
        "parent": "Despesa",
        "d1": -5000,
        "d2": -5000
      },
      {
        "tipo": "Retiradas para Sócios",
        "parent": "Despesa",
        "d1": -29750.4,
        "d2": -63963.259999999995
      },
      {
        "tipo": "Seguros",
        "parent": "Despesa",
        "d1": -61.29,
        "d2": 0
      },
      {
        "tipo": "Plano de Saúde Colaboradores",
        "parent": "Despesa",
        "d1": -759.0899999999999,
        "d2": -1040
      },
      {
        "tipo": "Pró-labore",
        "parent": "Despesa",
        "d1": -15000,
        "d2": 0
      },
      {
        "tipo": "Despesas Pessoais dos Sócios",
        "parent": "Despesa",
        "d1": 0,
        "d2": -8640
      },
      {
        "tipo": "BPO Financeiro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7200
      },
      {
        "tipo": "Viagens e Representações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -92.4
      },
      {
        "tipo": "Troco",
        "parent": "Despesa",
        "d1": 0,
        "d2": -26
      },
      {
        "tipo": "INSS sobre Pró-labore - GPS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2876.6
      },
      {
        "tipo": "IRRF",
        "parent": "Despesa",
        "d1": 0,
        "d2": -7947.55
      },
      {
        "tipo": "Exames Médicos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -600
      }
    ]
  }
};

// ALL_TX: lista flat de TODAS as transacoes normalizadas (despesa + receita,
// realizadas + a pagar + canceladas excluidas). Usada pra cross-filter real
// — pagina recalcula KPIs/charts/tabelas em runtime via aggregateTx().
// Cada row eh tupla compacta pra reduzir tamanho do bundle:
// [kind, mes, dia, categoria, cliente, valor, statusCode, fornecedor, centroCusto, regime]
// statusCode: 1 = realizado, 0 = em aberto, 2 = atrasado
// regime: 'c' = caixa, 'k' = competencia (compacto pra economizar bytes)
const ALL_TX = [["r","2026-01",2,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","c"],["r","2026-01",2,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",1967.8,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",1967.8,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",7887.67,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",7887.67,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2000,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2000,1,"","","k"],["r","2026-01",5,"Receitas a Identificar","Sem cliente",260,1,"","","c"],["r","2026-01",5,"Receitas a Identificar","Sem cliente",260,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","SIMONE ALVES DE SÁ GOMES ASSIS",1021.37,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","SIMONE ALVES DE SÁ GOMES ASSIS",1021.37,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2404.87,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2404.87,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",4630.48,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",4630.48,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",6924.37,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",6924.37,1,"","","k"],["r","2026-01",5,"Suplementos","LEILA DA SILVA DE SOUZA COELHO",75,2,"","","c"],["r","2026-04",30,"Suplementos","LEILA DA SILVA DE SOUZA COELHO",75,2,"","","k"],["r","2026-01",5,"Suplementos","KAIKE PIOL",75,2,"","","c"],["r","2026-04",30,"Suplementos","KAIKE PIOL",75,2,"","","k"],["r","2026-01",6,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1500,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",1178.63,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",1178.63,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-01",6,"Suplementos","ANA PAULA COELHO PORTES MATTOS",75,2,"","","c"],["r","2026-04",30,"Suplementos","ANA PAULA COELHO PORTES MATTOS",75,2,"","","k"],["r","2026-01",7,"Suplementos","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","c"],["r","2026-04",30,"Suplementos","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","k"],["r","2026-01",7,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",75,1,"","","c"],["r","2026-04",30,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",75,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","HAYANE SILVA VALARDAO",1500,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","HAYANE SILVA VALARDAO",1500,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",3042.7,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",3042.7,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",300.32,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",300.32,1,"","","k"],["r","2026-01",8,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1178.63,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1178.63,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",3666,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",3666,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",1761.19,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",1761.19,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",2275.11,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",2275.11,1,"","","k"],["r","2026-01",8,"Suplementos","LAYLA TEIXEIRA BARBOSA COSTA",135,2,"","","c"],["r","2026-04",30,"Suplementos","LAYLA TEIXEIRA BARBOSA COSTA",135,2,"","","k"],["r","2026-01",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-01",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",992.1,1,"","","c"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",992.1,1,"","","k"],["r","2026-01",12,"Suplementos","EDUARDA CORREA PILKER",75,1,"","","c"],["r","2026-04",30,"Suplementos","EDUARDA CORREA PILKER",75,1,"","","k"],["r","2026-01",12,"Consulta","DORIETE DE SOUZA",500,1,"","","c"],["r","2026-04",30,"Consulta","DORIETE DE SOUZA",500,1,"","","k"],["r","2026-01",12,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","c"],["r","2026-01",12,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",500,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",500,1,"","","k"],["r","2026-01",12,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","k"],["r","2026-01",12,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",6000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",6000,1,"","","k"],["r","2026-01",12,"Descontos financeiros obtidos","Sem cliente",1085,1,"","","c"],["r","2026-01",12,"Descontos financeiros obtidos","Sem cliente",1085,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",1000.22,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",1000.22,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",249.5,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",249.5,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",376.32,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",376.32,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",4777.33,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",4777.33,1,"","","k"],["r","2026-01",13,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-01",13,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",494.88,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",494.88,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",490.21,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",490.21,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","k"],["r","2026-01",13,"Suplementos","NAZARETH ALVES DE ARAÚJO",185,2,"","","c"],["r","2026-04",30,"Suplementos","NAZARETH ALVES DE ARAÚJO",185,2,"","","k"],["r","2026-01",14,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","c"],["r","2026-01",14,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","k"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",1400,1,"","","c"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",1400,1,"","","k"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",623.29,1,"","","c"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",623.29,1,"","","k"],["r","2026-01",15,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-01",15,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",1347.71,1,"","","c"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",1347.71,1,"","","k"],["r","2026-01",16,"Suplementos","RODRIGO SOARES SIQUEIRA",75,1,"","","c"],["r","2026-04",30,"Suplementos","RODRIGO SOARES SIQUEIRA",75,1,"","","k"],["r","2026-01",16,"Suplementos","JULIMAR MARTINS FANTI",75,1,"","","c"],["r","2026-04",30,"Suplementos","JULIMAR MARTINS FANTI",75,1,"","","k"],["r","2026-01",16,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",1741,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",1741,1,"","","k"],["r","2026-01",16,"Receita de Serviços - Plano Bronze","ORLANDA ALVES SALVADOR",3800,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ORLANDA ALVES SALVADOR",3800,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-01",19,"Suplementos","TELMELITA SAAR ORECCHIO",75,1,"","","c"],["r","2026-04",30,"Suplementos","TELMELITA SAAR ORECCHIO",75,1,"","","k"],["r","2026-01",19,"Consulta","JOERLAINE DA SILVA OLIVEIRA ELIZEU",700,1,"","","c"],["r","2026-04",30,"Consulta","JOERLAINE DA SILVA OLIVEIRA ELIZEU",700,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","ELIENE PEREIRA SOBRINHO",500,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","ELIENE PEREIRA SOBRINHO",500,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",1133.17,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",1133.17,1,"","","k"],["r","2026-01",19,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",2165,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",2165,1,"","","k"],["r","2026-01",19,"Suplementos","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",135,1,"","","c"],["r","2026-04",30,"Suplementos","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",135,1,"","","k"],["r","2026-01",19,"Receita de Serviços - Plano Bronze","NUBIA SILVA AMARAL STOHEL",2400,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NUBIA SILVA AMARAL STOHEL",2400,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2680.25,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2680.25,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",4983.81,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",4983.81,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2169.27,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2169.27,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",6994.02,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",6994.02,1,"","","k"],["r","2026-01",19,"Suplementos","JADER JESUS SILVA",150,2,"","","c"],["r","2026-04",30,"Suplementos","JADER JESUS SILVA",150,2,"","","k"],["r","2026-01",20,"Suplementos","CRISTIANE CANDIDA DA SILVA",210,1,"","","c"],["r","2026-04",30,"Suplementos","CRISTIANE CANDIDA DA SILVA",210,1,"","","k"],["r","2026-01",20,"Rendimentos de Aplicações","Sem cliente",0.11,1,"","","c"],["r","2026-01",20,"Rendimentos de Aplicações","Sem cliente",0.11,1,"","","k"],["r","2026-01",20,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1656,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1656,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-01",21,"Consulta","MERIELY RUFINO VAZ MUTZ",500,1,"","","c"],["r","2026-04",30,"Consulta","MERIELY RUFINO VAZ MUTZ",500,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",4500,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",4500,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1809.53,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1809.53,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",239.1,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",239.1,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",842.65,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",842.65,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1821.54,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1821.54,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","k"],["r","2026-01",21,"Suplementos","HAYANE SILVA VALARDAO",135,2,"","","c"],["r","2026-04",30,"Suplementos","HAYANE SILVA VALARDAO",135,2,"","","k"],["r","2026-01",22,"Consulta","ALEX MARCHIOLI STEFANON",500,1,"","","c"],["r","2026-04",30,"Consulta","ALEX MARCHIOLI STEFANON",500,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",1495,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",1495,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",759.48,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",759.48,1,"","","k"],["r","2026-01",23,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",395,1,"","","c"],["r","2026-04",30,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",395,1,"","","k"],["r","2026-01",23,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",1500,1,"","","k"],["r","2026-01",23,"Receita de Serviços - Plano Bronze","LUCIMAR MARCHIOLI STEFANON",3500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LUCIMAR MARCHIOLI STEFANON",3500,1,"","","k"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1267.56,1,"","","c"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1267.56,1,"","","k"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","c"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","k"],["r","2026-01",26,"Consulta","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Consulta","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-01",26,"Rendimentos de Aplicações","Sem cliente",0.67,1,"","","c"],["r","2026-01",26,"Rendimentos de Aplicações","Sem cliente",0.67,1,"","","k"],["r","2026-01",26,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2865,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2865,1,"","","k"],["r","2026-01",26,"Suplementos","LETICIA RENATA RODRIGUES SOUZA PIONTI",135,1,"","","c"],["r","2026-04",30,"Suplementos","LETICIA RENATA RODRIGUES SOUZA PIONTI",135,1,"","","k"],["r","2026-01",26,"Receita de Serviços - Plano Bronze","ELIZABETH DE REZENDE ALMEIDA",6100,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ELIZABETH DE REZENDE ALMEIDA",6100,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1551.5,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1551.5,1,"","","k"],["r","2026-01",26,"Consulta","SAYONARIA LOPES EVANGELISTA",500,2,"","","c"],["r","2026-04",30,"Consulta","SAYONARIA LOPES EVANGELISTA",500,2,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","k"],["r","2026-01",27,"Injetaveis","WALAS FERNANDES VITAL",1200,1,"","","c"],["r","2026-03",31,"Injetaveis","WALAS FERNANDES VITAL",1200,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1500,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",8100,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",8100,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",2488,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",2488,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2200,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2200,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",1458.45,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",1458.45,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2203.86,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2203.86,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-01",28,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",900,1,"","","c"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",900,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",682.52,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",682.52,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","k"],["r","2026-01",30,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",815,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",815,1,"","","k"],["r","2026-01",30,"Suplementos","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","c"],["r","2026-04",30,"Suplementos","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",4096,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",4096,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",274.99,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",274.99,1,"","","k"],["r","2026-02",2,"Rendimentos de Aplicações","Sem cliente",0.36,1,"","","c"],["r","2026-02",2,"Rendimentos de Aplicações","Sem cliente",0.36,1,"","","k"],["r","2026-02",2,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",3183.17,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",3183.17,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",966.34,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",966.34,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",1421.47,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",1421.47,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",3700.52,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",3700.52,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",6119.12,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",6119.12,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","k"],["r","2026-02",3,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",600,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",600,1,"","","k"],["r","2026-02",3,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",900,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","k"],["r","2026-02",5,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","c"],["r","2026-02",5,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","k"],["r","2026-02",5,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",1200,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",1200,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",547.09,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",547.09,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","k"],["r","2026-02",6,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-02",6,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-02",6,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1900,1,"","","k"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",615.8,1,"","","c"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",615.8,1,"","","k"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",365.52,1,"","","c"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",365.52,1,"","","k"],["r","2026-02",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-02",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-02",9,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",135,1,"","","c"],["r","2026-03",31,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",135,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",1500,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",1500,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",2391.46,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",2391.46,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",5304.42,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",5304.42,1,"","","k"],["r","2026-02",10,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",935,1,"","","c"],["r","2026-03",31,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",935,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",1810.45,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",1810.45,1,"","","k"],["r","2026-02",10,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",582,2,"","","c"],["r","2026-04",30,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",582,2,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",550,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",550,1,"","","k"],["r","2026-02",11,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",1000,1,"","","c"],["r","2026-03",31,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",1000,1,"","","k"],["r","2026-02",11,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",1108,1,"","","c"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",1108,1,"","","k"],["r","2026-02",11,"Suplementos","LEDIANA NEIVA ANACLETO OLIVEIRA",75,1,"","","c"],["r","2026-04",30,"Suplementos","LEDIANA NEIVA ANACLETO OLIVEIRA",75,1,"","","k"],["r","2026-02",11,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",4175,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",4175,1,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-02",11,"Suplementos","JOSÉ ESTHEVAN PIRES DA CUNHA",135,2,"","","c"],["r","2026-04",30,"Suplementos","JOSÉ ESTHEVAN PIRES DA CUNHA",135,2,"","","k"],["r","2026-02",12,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",25,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",25,1,"","","k"],["r","2026-02",12,"Consulta","MAYKE CORREIA DE SOUZA",650,1,"","","c"],["r","2026-04",30,"Consulta","MAYKE CORREIA DE SOUZA",650,1,"","","k"],["r","2026-02",12,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",650,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",650,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","k"],["r","2026-02",12,"Consulta","LETICIA BATISTA DE MORAES",650,2,"","","c"],["r","2026-04",30,"Consulta","LETICIA BATISTA DE MORAES",650,2,"","","k"],["r","2026-02",13,"Consulta","EDILAINE MARCIA MARCIANO DE SOUZA",650,1,"","","c"],["r","2026-04",30,"Consulta","EDILAINE MARCIA MARCIANO DE SOUZA",650,1,"","","k"],["r","2026-02",13,"Receitas de Serviços a Identificar","ADMIR CUSTÓDIO DE ALMEIDA JÚNIOR",140,1,"","","c"],["r","2026-02",13,"Receitas de Serviços a Identificar","ADMIR CUSTÓDIO DE ALMEIDA JÚNIOR",140,1,"","","k"],["r","2026-02",13,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","k"],["r","2026-02",13,"Receitas de Serviços a Identificar","Sem cliente",509.25,1,"","","c"],["r","2026-02",13,"Receitas de Serviços a Identificar","Sem cliente",509.25,1,"","","k"],["r","2026-02",13,"Suplementos","NAZARETH ALVES DE ARAÚJO",75,2,"","","c"],["r","2026-04",30,"Suplementos","NAZARETH ALVES DE ARAÚJO",75,2,"","","k"],["r","2026-02",18,"Consulta","DIVALDO GOMES DE SOUZA FILHO",650,1,"","","c"],["r","2026-04",30,"Consulta","DIVALDO GOMES DE SOUZA FILHO",650,1,"","","k"],["r","2026-02",18,"Consulta","VALDETE APARECIDA FERREIRA HERMISDOLFE",650,1,"","","c"],["r","2026-04",30,"Consulta","VALDETE APARECIDA FERREIRA HERMISDOLFE",650,1,"","","k"],["r","2026-02",18,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",300,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",300,1,"","","k"],["r","2026-02",18,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",1610,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",1610,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",3146.23,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",3146.23,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",73.83,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",73.83,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",2879.49,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",2879.49,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",10808.37,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",10808.37,1,"","","k"],["r","2026-02",19,"Consulta","FABRÍCIO RODRIGUES LINHARES",650,1,"","","c"],["r","2026-04",30,"Consulta","FABRÍCIO RODRIGUES LINHARES",650,1,"","","k"],["r","2026-02",19,"Rendimentos de Aplicações","Sem cliente",0.21,1,"","","c"],["r","2026-02",19,"Rendimentos de Aplicações","Sem cliente",0.21,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",314.42,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",314.42,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",3937.6,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",3937.6,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",282.73,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",282.73,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",2930.31,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",2930.31,1,"","","k"],["r","2026-02",23,"Injetaveis","FERNANDA APARECIDA DE ALMEIDA",1747.9,1,"","","c"],["r","2026-03",31,"Injetaveis","FERNANDA APARECIDA DE ALMEIDA",1747.9,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","k"],["r","2026-02",23,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",7880,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",7880,1,"","","k"],["r","2026-02",23,"Injetaveis","ISABELA CRISTINA FANTI",900,1,"","","c"],["r","2026-03",31,"Injetaveis","ISABELA CRISTINA FANTI",900,1,"","","k"],["r","2026-02",23,"Suplementos","ISABELA CRISTINA FANTI",320,1,"","","c"],["r","2026-04",30,"Suplementos","ISABELA CRISTINA FANTI",320,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3103.5,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3103.5,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3366.29,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3366.29,1,"","","k"],["r","2026-02",23,"Suplementos","MARLETE ALVARES CABRAL",50,2,"","","c"],["r","2026-04",30,"Suplementos","MARLETE ALVARES CABRAL",50,2,"","","k"],["r","2026-02",24,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",5000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",5000,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",836.74,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",836.74,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-02",25,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",150,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",150,1,"","","k"],["r","2026-02",25,"Suplementos","SALETTE DE ALMEIDA SANTANA",135,1,"","","c"],["r","2026-04",30,"Suplementos","SALETTE DE ALMEIDA SANTANA",135,1,"","","k"],["r","2026-02",25,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",600,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",600,1,"","","k"],["r","2026-02",25,"Receitas de Serviços a Identificar","Sem cliente",1108.46,1,"","","c"],["r","2026-02",25,"Receitas de Serviços a Identificar","Sem cliente",1108.46,1,"","","k"],["r","2026-02",26,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",2460,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",2460,1,"","","k"],["r","2026-02",26,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",3900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",3900,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",1698.25,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",1698.25,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",3143.61,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",3143.61,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","k"],["r","2026-02",27,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",4600,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",4600,1,"","","k"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","c"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","k"],["r","2026-03",2,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",400,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",400,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","k"],["r","2026-03",2,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",3340,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",3340,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",2800.14,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",2800.14,1,"","","k"],["r","2026-03",3,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","c"],["r","2026-04",30,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","k"],["r","2026-03",3,"Rendimentos de Aplicações","Sem cliente",5.48,1,"","","c"],["r","2026-03",3,"Rendimentos de Aplicações","Sem cliente",5.48,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1159.11,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1159.11,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-03",4,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","c"],["r","2026-03",4,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",1173.42,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",1173.42,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",620.74,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",620.74,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",809.76,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",809.76,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",4151.32,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",4151.32,1,"","","k"],["r","2026-03",5,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",4500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",4500,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1873.2,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1873.2,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",652.58,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",652.58,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1181.28,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1181.28,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",280,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",280,2,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",210,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",210,1,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",5000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",5000,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","k"],["r","2026-03",7,"Receita de Serviços - Plano Bronze","ROSANGELA GOMES RIBEIRO FIUZA",3367,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","ROSANGELA GOMES RIBEIRO FIUZA",3367,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,2,"","","k"],["r","2026-03",9,"Consulta","MARILZA DE AGUIAR DIAS",650,1,"","","c"],["r","2026-04",30,"Consulta","MARILZA DE AGUIAR DIAS",650,1,"","","k"],["r","2026-03",9,"Rendimentos de Aplicações","Sem cliente",0.23,1,"","","c"],["r","2026-03",9,"Rendimentos de Aplicações","Sem cliente",0.23,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3011.86,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3011.86,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",2117.6,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",2117.6,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3018.1,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3018.1,1,"","","k"],["r","2026-03",9,"Suplementos","SAYONARIA LOPES EVANGELISTA",185,2,"","","c"],["r","2026-04",30,"Suplementos","SAYONARIA LOPES EVANGELISTA",185,2,"","","k"],["r","2026-03",10,"Consulta","NATALIA PEREIRA MARTINS SILVA",650,1,"","","c"],["r","2026-04",30,"Consulta","NATALIA PEREIRA MARTINS SILVA",650,1,"","","k"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",285,1,"","","c"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",285,1,"","","k"],["r","2026-03",10,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",975,1,"","","c"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",975,1,"","","k"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-03",10,"Suplementos","RODRIGO SOARES SIQUEIRA",60,2,"","","c"],["r","2026-04",30,"Suplementos","RODRIGO SOARES SIQUEIRA",60,2,"","","k"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","c"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","k"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","c"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","k"],["r","2026-03",12,"Suplementos","ISADORA DE VETE BOTELHO",75,1,"","","c"],["r","2026-04",30,"Suplementos","ISADORA DE VETE BOTELHO",75,1,"","","k"],["r","2026-03",12,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",4128,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",4128,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",5100,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",5100,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",2377.9,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",2377.9,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","k"],["r","2026-03",13,"Consulta","HIGLEST ALVES DE LA SALLE",650,1,"","","c"],["r","2026-04",30,"Consulta","HIGLEST ALVES DE LA SALLE",650,1,"","","k"],["r","2026-03",13,"Rendimentos de Aplicações","Sem cliente",1.25,1,"","","c"],["r","2026-03",13,"Rendimentos de Aplicações","Sem cliente",1.25,1,"","","k"],["r","2026-03",13,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",498.23,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",498.23,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",2228.34,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",2228.34,1,"","","k"],["r","2026-03",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-03",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",3492.37,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",3492.37,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",1500,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1700,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1700,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Plano Bronze","AMANTINO STEFANON",2700,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","AMANTINO STEFANON",2700,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3000,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",468,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",468,1,"","","k"],["r","2026-03",18,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",333,1,"","","c"],["r","2026-03",31,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",333,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",135,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",135,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",350.28,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",350.28,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",1608.47,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",1608.47,1,"","","k"],["r","2026-03",19,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",75,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",1368.09,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",1368.09,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",5606.07,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",5606.07,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",560.8,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",560.8,1,"","","k"],["r","2026-03",20,"Adicional de Tizerpatida","WARLLEM FERREIRA COSTA",1540,1,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","WARLLEM FERREIRA COSTA",1540,1,"","","k"],["r","2026-03",20,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",75,1,"","","k"],["r","2026-03",20,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",2690,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",2690,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",355.72,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",355.72,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1037.67,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1037.67,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1655.56,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1655.56,1,"","","k"],["r","2026-03",23,"Rendimentos de Aplicações","Sem cliente",0.39,1,"","","c"],["r","2026-03",23,"Rendimentos de Aplicações","Sem cliente",0.39,1,"","","k"],["r","2026-03",23,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",646.35,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",646.35,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",2543.25,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",2543.25,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",997.14,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",997.14,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",1410.77,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",1410.77,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",3852.07,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",3852.07,1,"","","k"],["r","2026-03",24,"Injetaveis","ELIZABETH DE REZENDE ALMEIDA",680,1,"","","c"],["r","2026-04",30,"Injetaveis","ELIZABETH DE REZENDE ALMEIDA",680,1,"","","k"],["r","2026-03",24,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","c"],["r","2026-03",24,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","k"],["r","2026-03",24,"Injetaveis","LIETE VOLPONI FORTUNA",75,1,"","","c"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",75,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",400,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",400,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","LINDAURA RODRIGUES BARBOSA ASSIS",650,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","LINDAURA RODRIGUES BARBOSA ASSIS",650,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",750,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",750,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",4782,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",4782,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",6910,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",6910,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",3830.55,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",3830.55,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",2053.17,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",2053.17,1,"","","k"],["r","2026-03",25,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",3500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",3500,1,"","","k"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",443.04,1,"","","c"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",443.04,1,"","","k"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",1303.95,1,"","","c"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",1303.95,1,"","","k"],["r","2026-03",26,"Rendimentos de Aplicações","Sem cliente",0.14,1,"","","c"],["r","2026-03",26,"Rendimentos de Aplicações","Sem cliente",0.14,1,"","","k"],["r","2026-03",26,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",75,1,"","","k"],["r","2026-03",26,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","k"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",654.92,1,"","","c"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",654.92,1,"","","k"],["r","2026-03",26,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","k"],["r","2026-03",27,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-03",27,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-03",27,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","c"],["r","2026-03",27,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","k"],["r","2026-03",30,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,1,"","","k"],["r","2026-03",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",2243.92,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",2243.92,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",3914.61,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",3914.61,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",840,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",840,1,"","","k"],["r","2026-03",31,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","c"],["r","2026-03",31,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",4274,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",4274,1,"","","k"],["r","2026-03",31,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-03",31,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","IRINEIA SOUZA PEREIRA SAAR",9680.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","IRINEIA SOUZA PEREIRA SAAR",9680.17,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",1200,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",1200,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SAYONARIA LOPES EVANGELISTA",8045,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SAYONARIA LOPES EVANGELISTA",8045,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",9342,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",9342,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ÉRICA RODRIGUES LIMA BOECHAT",9050,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ÉRICA RODRIGUES LIMA BOECHAT",9050,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",12450,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",12450,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",4403,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",4403,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",6920,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",6920,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",14955,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",14955,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",3362,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",3362,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",11199,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",11199,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",7600.87,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",7600.87,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",9264,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",9264,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",185,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",185,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NEILA MARIA DE REZENDE SILVA",4697.61,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NEILA MARIA DE REZENDE SILVA",4697.61,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JULIMAR MARTINS FANTI",8200,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JULIMAR MARTINS FANTI",8200,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TAIANE STREY VERONEZE ANDRE",12228,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TAIANE STREY VERONEZE ANDRE",12228,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",6014.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",6014.17,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Platina","LEILA DA SILVA DE SOUZA COELHO",6351.4,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Platina","LEILA DA SILVA DE SOUZA COELHO",6351.4,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ADRIANA MOSCONI PAGANI",4800,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ADRIANA MOSCONI PAGANI",4800,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FÁBIA INACIO DE SOUZA BLESSON",5733.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FÁBIA INACIO DE SOUZA BLESSON",5733.17,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALAETI BRISQUE POEYS",4133.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALAETI BRISQUE POEYS",4133.17,2,"","","k"],["r","2026-03",31,"Injetaveis","HAYANE SILVA VALARDAO",2500,2,"","","c"],["r","2026-03",31,"Injetaveis","HAYANE SILVA VALARDAO",2500,2,"","","k"],["r","2026-03",31,"Implantes","THAIZ LIMA ROCHA DA SILVA",4630,2,"","","c"],["r","2026-03",31,"Implantes","THAIZ LIMA ROCHA DA SILVA",4630,2,"","","k"],["r","2026-03",31,"Injetaveis","ANTONIO PEREIRA DE ARAUJO",1170,2,"","","c"],["r","2026-03",31,"Injetaveis","ANTONIO PEREIRA DE ARAUJO",1170,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",10632,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",10632,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",12750,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",12750,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",12965,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",12965,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA CRISTINA VIEIRA TEODORO",6842.7,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA CRISTINA VIEIRA TEODORO",6842.7,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",16050,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",16050,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",3625,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",3625,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",900,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",900,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LEIDIANA FERREIRA RODRIGUES",2300,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LEIDIANA FERREIRA RODRIGUES",2300,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","WARLLEM FERREIRA COSTA",6040,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","WARLLEM FERREIRA COSTA",6040,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",12493.99,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",12493.99,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","RODRIGO SOARES SIQUEIRA",5980,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","RODRIGO SOARES SIQUEIRA",5980,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","CARLA GESIANE CARLASARTE DE SOUZA VIAL",7243.44,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","CARLA GESIANE CARLASARTE DE SOUZA VIAL",7243.44,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","THAÍS DAMASCENA DE PAULO HONORATO",3400,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","THAÍS DAMASCENA DE PAULO HONORATO",3400,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",2100,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",2100,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",4800,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",4800,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","SEBASTIÃO SATURINO FILHO",6500,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","SEBASTIÃO SATURINO FILHO",6500,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",4922,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",4922,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",964,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",964,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",1710.11,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",1710.11,2,"","","k"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",1400,2,"","","c"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",1400,2,"","","k"],["r","2026-03",31,"Injetaveis","LUDIMILA MATIAS CARDOSO PAGANI",468,2,"","","c"],["r","2026-03",31,"Injetaveis","LUDIMILA MATIAS CARDOSO PAGANI",468,2,"","","k"],["r","2026-03",31,"Injetaveis","MARIA ALICE RODRIGUES DE JESUS",2570,2,"","","c"],["r","2026-03",31,"Injetaveis","MARIA ALICE RODRIGUES DE JESUS",2570,2,"","","k"],["r","2026-03",31,"Injetaveis","KAMILA QUADRAS CASTILHO",1050,2,"","","c"],["r","2026-03",31,"Injetaveis","KAMILA QUADRAS CASTILHO",1050,2,"","","k"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",500,2,"","","c"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",500,2,"","","k"],["r","2026-03",31,"Injetaveis","RAFAEL CARDOSO DE SOUZA",500,2,"","","c"],["r","2026-03",31,"Injetaveis","RAFAEL CARDOSO DE SOUZA",500,2,"","","k"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",1125,2,"","","c"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",1125,2,"","","k"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",4965,2,"","","c"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",4965,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ESTER DE ALMEIDA SANTANA",3900,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ESTER DE ALMEIDA SANTANA",3900,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",3578,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",3578,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",4246,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",4246,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",2300,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",2300,2,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-04",1,"Rendimentos de Aplicações","Sem cliente",0.26,1,"","","c"],["r","2026-04",1,"Rendimentos de Aplicações","Sem cliente",0.26,1,"","","k"],["r","2026-04",1,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",68,1,"","","c"],["r","2026-04",30,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",68,1,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2818.58,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2818.58,1,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",1218.29,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",1218.29,1,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2698.55,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2698.55,1,"","","k"],["r","2026-04",1,"Implantes","Tomadores Diversos",3900,2,"","","c"],["r","2026-04",1,"Implantes","Tomadores Diversos",3900,2,"","","k"],["r","2026-04",2,"Rendimentos de Aplicações","Sem cliente",0.04,1,"","","c"],["r","2026-04",2,"Rendimentos de Aplicações","Sem cliente",0.04,1,"","","k"],["r","2026-04",2,"Receita de Serviços - Plano Bronze","Sem cliente",9,1,"","","c"],["r","2026-04",2,"Receita de Serviços - Plano Bronze","Sem cliente",9,1,"","","k"],["r","2026-04",2,"Suplementos","NEUZA FERNANDES MARTINS",377,1,"","","c"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",377,1,"","","k"],["r","2026-04",2,"Suplementos","NEUZA FERNANDES MARTINS",50,1,"","","c"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",50,1,"","","k"],["r","2026-04",2,"Teste Nutrigenetico","ZILDA MARIA MAIA DE CARVALHO",3900,1,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","ZILDA MARIA MAIA DE CARVALHO",3900,1,"","","k"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","c"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","k"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",882,1,"","","c"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",882,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2935.4,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2935.4,1,"","","k"],["r","2026-04",6,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",630,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",630,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",941.83,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",941.83,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2190.13,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2190.13,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",4630.42,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",4630.42,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",14985.03,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",14985.03,1,"","","k"],["r","2026-04",7,"Suplementos","ROSIANE ALMEIDA COSTA BELING",75,1,"","","c"],["r","2026-04",30,"Suplementos","ROSIANE ALMEIDA COSTA BELING",75,1,"","","k"],["r","2026-04",7,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","c"],["r","2026-04",7,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","k"],["r","2026-04",7,"Injetaveis","MARIA LEUZINA DE AGUIAR DIAS",390,1,"","","c"],["r","2026-04",30,"Injetaveis","MARIA LEUZINA DE AGUIAR DIAS",390,1,"","","k"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","c"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","k"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","c"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",466.44,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",466.44,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","k"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",1916.63,1,"","","c"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",1916.63,1,"","","k"],["r","2026-04",10,"Suplementos","DORIETE DE SOUZA",75,1,"","","c"],["r","2026-04",30,"Suplementos","DORIETE DE SOUZA",75,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",7880,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",7880,1,"","","k"],["r","2026-04",10,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",8520,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",8520,1,"","","k"],["r","2026-04",10,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",2100,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",2100,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2499.35,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2499.35,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",3876.57,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",3876.57,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",837.84,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",837.84,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",4606.2,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",4606.2,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",1517.13,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",1517.13,1,"","","k"],["r","2026-04",14,"Suplementos","MARLY MARIA ANDRADE DE LAIA",75,1,"","","c"],["r","2026-04",30,"Suplementos","MARLY MARIA ANDRADE DE LAIA",75,1,"","","k"],["r","2026-04",14,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-04",14,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-04",14,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-04",15,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",395,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",395,1,"","","k"],["r","2026-04",15,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",2040,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",2040,1,"","","k"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",2593.92,1,"","","c"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",2593.92,1,"","","k"],["r","2026-04",15,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",350,2,"","","c"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",350,2,"","","k"],["r","2026-04",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-04",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",320,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",320,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",1985.1,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",1985.1,1,"","","k"],["r","2026-04",16,"Suplementos","MONICA DE OLIVEIRA SILVA FERNANDES",700,2,"","","c"],["r","2026-04",30,"Suplementos","MONICA DE OLIVEIRA SILVA FERNANDES",700,2,"","","k"],["r","2026-04",17,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-04",17,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",2058.08,1,"","","c"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",2058.08,1,"","","k"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",1128.76,1,"","","c"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",1128.76,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1002.07,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1002.07,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1841.77,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1841.77,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2837.73,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2837.73,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",185,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",185,1,"","","k"],["r","2026-04",22,"Consulta","MARIA DAS GRAÇAS NEVES CALIARI",650,1,"","","c"],["r","2026-04",30,"Consulta","MARIA DAS GRAÇAS NEVES CALIARI",650,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",3537.67,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",3537.67,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1042.2,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1042.2,1,"","","k"],["r","2026-04",23,"Rendimentos de Aplicações","Sem cliente",0.44,1,"","","c"],["r","2026-04",23,"Rendimentos de Aplicações","Sem cliente",0.44,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",65,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",65,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1200,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1200,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",3810.3,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",3810.3,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",928.23,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",928.23,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",4585.47,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",4585.47,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1116.43,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1116.43,1,"","","k"],["r","2026-04",25,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","k"],["r","2026-04",27,"Receita de Serviços - Plano Bronze","FERNANDA APARECIDA DE ALMEIDA",2975,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","FERNANDA APARECIDA DE ALMEIDA",2975,1,"","","k"],["r","2026-04",27,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",1000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",1000,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",1087.58,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",1087.58,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-04",28,"Suplementos","ANA LÚCIA COLOMBEKI SALDANHA",185,1,"","","c"],["r","2026-04",30,"Suplementos","ANA LÚCIA COLOMBEKI SALDANHA",185,1,"","","k"],["r","2026-04",28,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",2472,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",2472,1,"","","k"],["r","2026-04",28,"Consulta","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","c"],["r","2026-04",30,"Consulta","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","k"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","c"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","k"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",3289.56,1,"","","c"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",3289.56,1,"","","k"],["r","2026-04",29,"Injetaveis","LAUDIANA DANIEL TEIXEIRA FREITAS",390,1,"","","c"],["r","2026-04",30,"Injetaveis","LAUDIANA DANIEL TEIXEIRA FREITAS",390,1,"","","k"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",4138.68,1,"","","c"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",4138.68,1,"","","k"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",1355.02,1,"","","c"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",1355.02,1,"","","k"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",75,1,"","","c"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",75,1,"","","k"],["r","2026-04",30,"Suplementos","TAIANE STREY VERONEZE ANDRE",75,1,"","","c"],["r","2026-04",30,"Suplementos","TAIANE STREY VERONEZE ANDRE",75,1,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","JULIMAR MARTINS FANTI",1200,1,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JULIMAR MARTINS FANTI",1200,1,"","","k"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",911.74,1,"","","c"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",911.74,1,"","","k"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",1771.36,1,"","","c"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",1771.36,1,"","","k"],["r","2026-04",30,"Consulta","FLAVYANNE PAULO MORETT AGUIAR",500,2,"","","c"],["r","2026-04",30,"Consulta","FLAVYANNE PAULO MORETT AGUIAR",500,2,"","","k"],["r","2026-04",30,"Consulta","IRINEIA SOUZA PEREIRA SAAR",500,2,"","","c"],["r","2026-04",30,"Consulta","IRINEIA SOUZA PEREIRA SAAR",500,2,"","","k"],["r","2026-04",30,"Consulta","REINALDO ERMELINDO DE ARAUJO",500,2,"","","c"],["r","2026-04",30,"Consulta","REINALDO ERMELINDO DE ARAUJO",500,2,"","","k"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","k"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","c"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","ÉRICA RODRIGUES LIMA BOECHAT",3068,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ÉRICA RODRIGUES LIMA BOECHAT",3068,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","NAIR DA SILVA LOPES",7000,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","NAIR DA SILVA LOPES",7000,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","DORIETE DE SOUZA",1872,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","DORIETE DE SOUZA",1872,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","k"],["r","2026-04",30,"Injetaveis","RAFAEL CARDOSO DE SOUZA",490,2,"","","c"],["r","2026-04",30,"Injetaveis","RAFAEL CARDOSO DE SOUZA",490,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",6050,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",6050,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","ADELSON ANDRE BAECE STREY",1200,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ADELSON ANDRE BAECE STREY",1200,2,"","","k"],["r","2026-04",30,"Injetaveis","MAYARA RIBEIRO SIMOES FORTUNA",1500,2,"","","c"],["r","2026-04",30,"Injetaveis","MAYARA RIBEIRO SIMOES FORTUNA",1500,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","MONICA DE OLIVEIRA SILVA FERNANDES",19750,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","MONICA DE OLIVEIRA SILVA FERNANDES",19750,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",5580.66,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",5580.66,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",1000,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",1000,2,"","","k"],["r","2026-05",4,"Adicional de Tizerpatida","BETANIA KINACIA DE SOUZA SATURNINO",1800,1,"","","c"],["r","2026-05",4,"Adicional de Tizerpatida","BETANIA KINACIA DE SOUZA SATURNINO",1800,1,"","","k"],["r","2026-05",4,"Consulta","MARLY MARIA ANDRADE DE LAIA",500,1,"","","c"],["r","2026-04",30,"Consulta","MARLY MARIA ANDRADE DE LAIA",500,1,"","","k"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,1,"","","c"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",1903.43,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",1903.43,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3159.48,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3159.48,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3055.03,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3055.03,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",4970.45,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",4970.45,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",6232.18,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",6232.18,1,"","","k"],["r","2026-05",4,"Rendimentos de Aplicações","Sem cliente",0.16,1,"","","c"],["r","2026-05",4,"Rendimentos de Aplicações","Sem cliente",0.16,1,"","","k"],["r","2026-05",4,"Suplementos","ORLANDA ALVES SALVADOR",76,2,"","","c"],["r","2026-05",4,"Suplementos","ORLANDA ALVES SALVADOR",76,2,"","","k"],["r","2026-05",4,"Suplementos","DORLI MARTINS DA SILVA",550,2,"","","c"],["r","2026-05",4,"Suplementos","DORLI MARTINS DA SILVA",550,2,"","","k"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",200,2,"","","c"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",200,2,"","","k"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,2,"","","c"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,2,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",4537.69,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",4537.69,1,"","","k"],["r","2026-05",5,"Suplementos","HIGLEST ALVES DE LA SALLE",10,1,"","","c"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",10,1,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",5000,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",5000,1,"","","k"],["r","2026-05",5,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","k"],["r","2026-05",5,"Suplementos","VALDETE APARECIDA FERREIRA HERMISDOLFE",135,2,"","","c"],["r","2026-05",4,"Suplementos","VALDETE APARECIDA FERREIRA HERMISDOLFE",135,2,"","","k"],["r","2026-05",5,"Suplementos","MERIELY RUFINO VAZ MUTZ",135,2,"","","c"],["r","2026-05",5,"Suplementos","MERIELY RUFINO VAZ MUTZ",135,2,"","","k"],["r","2026-05",6,"Consulta","Cristina Siqueira Bragança",650,1,"","","c"],["r","2026-05",6,"Consulta","Cristina Siqueira Bragança",650,1,"","","k"],["r","2026-05",6,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,1,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-05",6,"Suplementos","MARIA DA PENHA MOURA ROSA",75,2,"","","c"],["r","2026-05",6,"Suplementos","MARIA DA PENHA MOURA ROSA",75,2,"","","k"],["r","2026-05",6,"Suplementos","ESTER DE ALMEIDA SANTANA",185,2,"","","c"],["r","2026-05",6,"Suplementos","ESTER DE ALMEIDA SANTANA",185,2,"","","k"],["r","2026-05",7,"Receita de Serviços - Plano Bronze","ALEX MARCHIOLI STEFANON",3900,1,"","","c"],["r","2026-05",7,"Receita de Serviços - Plano Bronze","ALEX MARCHIOLI STEFANON",3900,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","k"],["r","2026-05",7,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-05",7,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",460,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",460,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","MAULY MARTINS DA SILVA",550,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","MAULY MARTINS DA SILVA",550,1,"","","k"],["r","2026-05",7,"Suplementos","MAULY MARTINS DA SILVA",185,1,"","","c"],["r","2026-05",7,"Suplementos","MAULY MARTINS DA SILVA",185,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2330,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2330,1,"","","k"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",3900,1,"","","c"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",3900,1,"","","k"],["r","2026-05",8,"Suplementos","JADER JESUS SILVA",75,2,"","","c"],["r","2026-05",8,"Suplementos","JADER JESUS SILVA",75,2,"","","k"],["r","2026-05",11,"Consulta","Lúcia Sodré Moreira",650,1,"","","c"],["r","2026-05",11,"Consulta","Lúcia Sodré Moreira",650,1,"","","k"],["r","2026-05",11,"Consulta","MARIA DAS GRAÇAS RODRIGUES COELHO",500,1,"","","c"],["r","2026-05",11,"Consulta","MARIA DAS GRAÇAS RODRIGUES COELHO",500,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",649.25,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",649.25,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3716.64,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3716.64,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3465.58,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3465.58,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",677.67,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",677.67,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",2699.68,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",2699.68,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",1460,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",1460,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",2690,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",2690,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",4000,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",4000,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",6910,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",6910,1,"","","k"],["r","2026-05",11,"Suplementos","MARIA DAS GRAÇAS NEVES CALIARI",210,2,"","","c"],["r","2026-05",11,"Suplementos","MARIA DAS GRAÇAS NEVES CALIARI",210,2,"","","k"],["r","2026-05",11,"Receita de Serviços - Plano Prata","MARIA DAS GRAÇAS NEVES CALIARI",9600,2,"","","c"],["r","2026-05",11,"Receita de Serviços - Plano Prata","MARIA DAS GRAÇAS NEVES CALIARI",9600,2,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",2228.3,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",2228.3,1,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-05",13,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","c"],["r","2026-05",13,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","k"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","c"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","k"],["r","2026-05",13,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","c"],["r","2026-05",13,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","k"],["r","2026-05",13,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,2,"","","c"],["r","2026-05",13,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,2,"","","k"],["r","2026-05",13,"Suplementos","ANDREA RODRIGUES FERNANDES",50,2,"","","c"],["r","2026-05",13,"Suplementos","ANDREA RODRIGUES FERNANDES",50,2,"","","k"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",291,1,"","","c"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",291,1,"","","k"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",3709.42,1,"","","c"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",3709.42,1,"","","k"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","c"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",4732.93,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",4732.93,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",2955,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",2955,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-05",18,"Suplementos","DORLI MARTINS DA SILVA",75,2,"","","c"],["r","2026-05",18,"Suplementos","DORLI MARTINS DA SILVA",75,2,"","","k"],["r","2026-05",19,"Suplementos","EDILAINE MARCIA MARCIANO DE SOUZA",75,1,"","","c"],["r","2026-05",20,"Suplementos","EDILAINE MARCIA MARCIANO DE SOUZA",75,1,"","","k"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",351.12,1,"","","c"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",351.12,1,"","","k"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","c"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","k"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","c"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","k"],["r","2026-05",19,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-05",19,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",421.8,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",421.8,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",1223.46,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",1223.46,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",314.41,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",314.41,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-05",20,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","c"],["r","2026-05",20,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","k"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","c"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","k"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",846.04,1,"","","c"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",846.04,1,"","","k"],["r","2026-05",21,"Suplementos","ANTONIO PEREIRA DE ARAUJO",75,2,"","","c"],["r","2026-05",21,"Suplementos","ANTONIO PEREIRA DE ARAUJO",75,2,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",870.09,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",870.09,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1262.6,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1262.6,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1432.3,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1432.3,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",50,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",50,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",1473.09,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",1473.09,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",2808,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",2808,1,"","","k"],["r","2026-05",25,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","k"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","c"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","k"],["r","2026-05",26,"Suplementos","CRISTIANE CANDIDA DA SILVA",75,1,"","","c"],["r","2026-05",26,"Suplementos","CRISTIANE CANDIDA DA SILVA",75,1,"","","k"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",650,1,"","","c"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",650,1,"","","k"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",5613,1,"","","c"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",5613,1,"","","k"],["r","2026-05",26,"Suplementos","SEBASTIÃO SATURINO FILHO",270,2,"","","c"],["r","2026-05",26,"Suplementos","SEBASTIÃO SATURINO FILHO",270,2,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",386.16,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",386.16,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",476.82,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",476.82,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",1707.5,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",1707.5,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",4700,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",4700,1,"","","k"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1256.89,1,"","","c"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1256.89,1,"","","k"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","c"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","k"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","c"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","k"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","c"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","k"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",2586.2,1,"","","c"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",2586.2,1,"","","k"],["r","2026-05",29,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","c"],["r","2026-05",29,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","k"],["r","2026-05",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","k"],["r","2026-05",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","c"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","k"],["r","2026-05",30,"Injetaveis","JADER JESUS SILVA",708.75,2,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,2,"","","k"],["r","2026-05",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,2,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,2,"","","k"],["r","2026-05",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,2,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,2,"","","k"],["r","2026-06",5,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,0,"","","k"],["r","2026-06",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-06",22,"Consulta","Débora Eliziário de Oliveira",600,0,"","","c"],["r","2026-05",22,"Consulta","Débora Eliziário de Oliveira",600,0,"","","k"],["r","2026-06",22,"Consulta","Débora Eliziário de Oliveira",50,0,"","","c"],["r","2026-05",22,"Consulta","Débora Eliziário de Oliveira",50,0,"","","k"],["r","2026-06",24,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-06",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",1000,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",1000,0,"","","k"],["r","2026-06",29,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-06",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.66,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.66,0,"","","k"],["r","2026-06",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-06",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","k"],["r","2026-06",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-07",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-07",24,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-07",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-07",29,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-07",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-07",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-07",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","k"],["r","2026-07",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","k"],["r","2026-07",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-08",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-08",23,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-08",28,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-08",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-08",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-08",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-08",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-09",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-09",22,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-09",27,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-09",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.65,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.65,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-09",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-10",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-10",22,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-10",27,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-10",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-11",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.65,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.65,0,"","","k"],["r","2026-11",26,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-11",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-12",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-01",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2027-03",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2027-04",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["d","2026-01",2,"Despesas Diversas (Cartão)","",2295.41,1,"Sem cliente","","c"],["d","2026-01",2,"Despesas Diversas (Cartão)","",2295.41,1,"Sem cliente","","k"],["d","2026-01",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-01",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-01",5,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-01",5,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-01",5,"Lanches e Refeições","",25,1,"Sem cliente","","c"],["d","2026-01",5,"Lanches e Refeições","",25,1,"Sem cliente","","k"],["d","2026-01",5,"Serviços de Pessoa Jurídica","",2067,1,"PARCELAMOS TUDO PONTOCOM","","c"],["d","2026-01",5,"Serviços de Pessoa Jurídica","",2067,1,"PARCELAMOS TUDO PONTOCOM","","k"],["d","2026-01",7,"Telefonia Móvel","",35,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",7,"Telefonia Móvel","",35,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",7,"Honorários Contábeis","",190,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",7,"Honorários Contábeis","",190,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",7,"Despesas a identificar","",825,1,"Sem cliente","","c"],["d","2026-01",7,"Despesas a identificar","",825,1,"Sem cliente","","k"],["d","2026-01",7,"Despesas a identificar","",750,1,"Sem cliente","","c"],["d","2026-01",7,"Despesas a identificar","",750,1,"Sem cliente","","k"],["d","2026-01",7,"Despesas a identificar","",5345.21,1,"Sem cliente","","c"],["d","2026-01",7,"Despesas a identificar","",5345.21,1,"Sem cliente","","k"],["d","2026-01",9,"Coleta de Resíduos Ambientais","",144,1,"Sem cliente","","c"],["d","2026-01",9,"Coleta de Resíduos Ambientais","",144,1,"Sem cliente","","k"],["d","2026-01",9,"Telefonia e Internet","",114.9,1,"Sem cliente","","c"],["d","2026-01",9,"Telefonia e Internet","",114.9,1,"Sem cliente","","k"],["d","2026-01",9,"Telefonia e Internet","",99.9,1,"Sem cliente","","c"],["d","2026-01",9,"Telefonia e Internet","",99.9,1,"Sem cliente","","k"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",12,"Serviços e Materiais de Limpeza e de Higiene","",480,1,"BARUC DETETIZACAO","","c"],["d","2026-01",12,"Serviços e Materiais de Limpeza e de Higiene","",480,1,"BARUC DETETIZACAO","","k"],["d","2026-01",12,"Despesas a identificar","",50,1,"Sem cliente","","c"],["d","2026-01",12,"Despesas a identificar","",50,1,"Sem cliente","","k"],["d","2026-01",12,"Serviços de Pessoa Jurídica","",650,1,"Sem cliente","","c"],["d","2026-01",12,"Serviços de Pessoa Jurídica","",650,1,"Sem cliente","","k"],["d","2026-01",12,"Despesas a identificar","",720,1,"Sem cliente","","c"],["d","2026-01",12,"Despesas a identificar","",720,1,"Sem cliente","","k"],["d","2026-01",12,"ISS","",30629.31,1,"Sem cliente","","c"],["d","2026-01",12,"ISS","",30629.31,1,"Sem cliente","","k"],["d","2026-01",13,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",14,"Insumos e Materiais Clínicos","",7500,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-01",14,"Insumos e Materiais Clínicos","",7500,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-01",14,"Despesas a identificar","",79,1,"Sem cliente","","c"],["d","2026-01",14,"Despesas a identificar","",79,1,"Sem cliente","","k"],["d","2026-01",15,"Energia Elétrica","",680.71,1,"EDP ESPIRITO SANTO","","c"],["d","2026-01",15,"Energia Elétrica","",680.71,1,"EDP ESPIRITO SANTO","","k"],["d","2026-01",16,"Despesas a identificar","",880,1,"Sem cliente","","c"],["d","2026-01",16,"Despesas a identificar","",880,1,"Sem cliente","","k"],["d","2026-01",19,"Despesas a identificar","",315,1,"Sem cliente","","c"],["d","2026-01",19,"Despesas a identificar","",315,1,"Sem cliente","","k"],["d","2026-01",19,"Materiais de Escritório","",53,1,"DANILO DE SOUSA ANDRADE 09175677733","","c"],["d","2026-01",19,"Materiais de Escritório","",53,1,"DANILO DE SOUSA ANDRADE 09175677733","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",671.75,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",671.75,1,"Sem cliente","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",517.92,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",517.92,1,"Sem cliente","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",86.31,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",86.31,1,"Sem cliente","","k"],["d","2026-01",20,"INSS sobre Salários - GPS","",2953.74,1,"Sem cliente","","c"],["d","2026-01",20,"INSS sobre Salários - GPS","",2953.74,1,"Sem cliente","","k"],["d","2026-01",22,"Despesas a identificar","",200,1,"Sem cliente","","c"],["d","2026-01",22,"Despesas a identificar","",200,1,"Sem cliente","","k"],["d","2026-01",22,"Materiais de Escritório","",53.7,1,"Sem cliente","","c"],["d","2026-01",22,"Materiais de Escritório","",53.7,1,"Sem cliente","","k"],["d","2026-01",22,"Materiais de Escritório","",21.9,1,"Sem cliente","","c"],["d","2026-01",22,"Materiais de Escritório","",21.9,1,"Sem cliente","","k"],["d","2026-01",22,"Lanches e Refeições","",20,1,"Sem cliente","","c"],["d","2026-01",22,"Lanches e Refeições","",20,1,"Sem cliente","","k"],["d","2026-01",22,"Pis/Cofins","",27949.26,1,"Sem cliente","","c"],["d","2026-01",22,"Pis/Cofins","",27949.26,1,"Sem cliente","","k"],["d","2026-01",22,"INSS sobre Salários - GPS","",4057.82,1,"Sem cliente","","c"],["d","2026-01",22,"INSS sobre Salários - GPS","",4057.82,1,"Sem cliente","","k"],["d","2026-01",26,"IRPJ E CSLL","",42976.93,1,"Sem cliente","","c"],["d","2026-01",26,"IRPJ E CSLL","",42976.93,1,"Sem cliente","","k"],["d","2026-01",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-01",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-01",27,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-01",27,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-01",29,"Telefonia e Internet","",35.88,1,"Sem cliente","","c"],["d","2026-01",29,"Telefonia e Internet","",35.88,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",3626.71,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",3626.71,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",2660,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",2660,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",2299.32,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",2299.32,1,"Sem cliente","","k"],["d","2026-02",2,"Despesas Diversas (Cartão)","",1892.78,1,"Sem cliente","","c"],["d","2026-02",2,"Despesas Diversas (Cartão)","",1892.78,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",6345.59,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",6345.59,1,"Sem cliente","","k"],["d","2026-02",2,"Insumos e Materiais Clínicos","",1060.64,1,"HEALTH TECH FARMACIA DE MANIPULACAO LTDA","","c"],["d","2026-02",2,"Insumos e Materiais Clínicos","",1060.64,1,"HEALTH TECH FARMACIA DE MANIPULACAO LTDA","","k"],["d","2026-02",2,"Salários","",1280,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",1280,1,"Sem cliente","","k"],["d","2026-02",2,"Despesas a identificar","",171,1,"Sem cliente","","c"],["d","2026-02",2,"Despesas a identificar","",171,1,"Sem cliente","","k"],["d","2026-02",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-02",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-02",3,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-02",3,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-02",4,"Insumos e Materiais Clínicos","",902.25,2,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-02",4,"Insumos e Materiais Clínicos","",902.25,2,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-02",5,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-02",5,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-02",5,"Software / Licença de Uso","",650,1,"Sem cliente","","c"],["d","2026-02",5,"Software / Licença de Uso","",650,1,"Sem cliente","","k"],["d","2026-02",5,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","c"],["d","2026-02",5,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","k"],["d","2026-02",5,"INSS sobre Salários - GPS","",2955.54,1,"Sem cliente","","c"],["d","2026-02",5,"INSS sobre Salários - GPS","",2955.54,1,"Sem cliente","","k"],["d","2026-02",5,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","c"],["d","2026-02",5,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","k"],["d","2026-02",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-02",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-02",9,"ISS","",2040,1,"Sem cliente","","c"],["d","2026-02",9,"ISS","",2040,1,"Sem cliente","","k"],["d","2026-02",9,"Despesas a identificar","",20606.83,1,"Sem cliente","","c"],["d","2026-02",9,"Despesas a identificar","",20606.83,1,"Sem cliente","","k"],["d","2026-02",10,"ISS","",206.07,1,"Sem cliente","","c"],["d","2026-02",10,"ISS","",206.07,1,"Sem cliente","","k"],["d","2026-02",11,"Insumos e Materiais Clínicos","",7140,2,"ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA","","c"],["d","2026-02",11,"Insumos e Materiais Clínicos","",7140,2,"ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA","","k"],["d","2026-02",12,"Materiais de Escritório","",5,1,"REIS & SOUZA LIMITADA","","c"],["d","2026-02",12,"Materiais de Escritório","",5,1,"REIS & SOUZA LIMITADA","","k"],["d","2026-02",13,"Telefonia e Internet","",117.3,1,"BIZZ INTERNET LTDA","","c"],["d","2026-02",13,"Telefonia e Internet","",117.3,1,"BIZZ INTERNET LTDA","","k"],["d","2026-02",13,"Coleta de Resíduos Ambientais","",140.64,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-02",10,"Coleta de Resíduos Ambientais","",140.64,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-02",13,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-02",13,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-02",18,"Energia Elétrica","",735.14,1,"EDP ESPIRITO SANTO","","c"],["d","2026-02",18,"Energia Elétrica","",735.14,1,"EDP ESPIRITO SANTO","","k"],["d","2026-02",18,"Marketing e Publicidade","",1500,1,"Sem cliente","","c"],["d","2026-02",18,"Marketing e Publicidade","",1500,1,"Sem cliente","","k"],["d","2026-02",19,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-02",19,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-02",19,"Telefonia Móvel","",36.74,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-02",19,"Telefonia Móvel","",36.74,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-02",20,"Software / Licença de Uso","",917.64,2,"CONTAAZUL SOFTWARE LTDA","","c"],["d","2026-02",20,"Software / Licença de Uso","",917.64,2,"CONTAAZUL SOFTWARE LTDA","","k"],["d","2026-02",23,"Software / Licença de Uso","",601.25,1,"BIONEXO S.A","","c"],["d","2026-02",23,"Software / Licença de Uso","",601.25,1,"BIONEXO S.A","","k"],["d","2026-02",23,"Despesas a identificar","",2150,1,"Sem cliente","","c"],["d","2026-02",23,"Despesas a identificar","",2150,1,"Sem cliente","","k"],["d","2026-02",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-02",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-02",28,"Software / Licença de Uso","",599.9,2,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-02",28,"Software / Licença de Uso","",599.9,2,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-03",2,"Despesas Diversas (Cartão)","",1069.96,1,"Sem cliente","","c"],["d","2026-03",2,"Despesas Diversas (Cartão)","",1069.96,1,"Sem cliente","","k"],["d","2026-03",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-03",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-03",3,"Retiradas para Sócios","",20000,1,"Sem cliente","","c"],["d","2026-03",3,"Retiradas para Sócios","",20000,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",4604.02,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",4604.02,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",4400,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",4400,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",3781.71,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",3781.71,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",2299.32,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",2299.32,1,"Sem cliente","","k"],["d","2026-03",3,"Telefonia e Internet","",44.89,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",3,"Telefonia e Internet","",44.89,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",3,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",3,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",3,"Salários","",980,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",980,1,"Sem cliente","","k"],["d","2026-03",3,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-02",27,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-03",4,"Materiais de Escritório","",100,1,"EXTINSAN EXTINTORES LTDA","","c"],["d","2026-03",2,"Materiais de Escritório","",100,1,"EXTINSAN EXTINTORES LTDA","","k"],["d","2026-03",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-03",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-03",4,"Salários","",1500,1,"Sem cliente","","c"],["d","2026-03",4,"Salários","",1500,1,"Sem cliente","","k"],["d","2026-03",4,"Coleta de Resíduos Ambientais","",125.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-03",4,"Coleta de Resíduos Ambientais","",125.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-03",4,"Seguros","",61.29,1,"PORTO SEGURO COMPANHIA DE SEGUROS GERAIS","","c"],["d","2026-03",4,"Seguros","",61.29,1,"PORTO SEGURO COMPANHIA DE SEGUROS GERAIS","","k"],["d","2026-03",4,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-03",26,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-03",5,"Plano de Saúde Colaboradores","",499.09,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-03",5,"Plano de Saúde Colaboradores","",499.09,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-03",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-03",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","c"],["d","2026-03",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","k"],["d","2026-03",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-03",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-03",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-03",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-03",9,"Insumos e Materiais Clínicos","",6116.25,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-03",12,"Insumos e Materiais Clínicos","",6116.25,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-03",10,"Despesas Diversas (Cartão)","",11039.45,1,"Sem cliente","","c"],["d","2026-03",10,"Despesas Diversas (Cartão)","",11039.45,1,"Sem cliente","","k"],["d","2026-03",10,"ISS","",5.22,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-02",10,"ISS","",5.22,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-03",11,"Insumos e Materiais Clínicos","",14300.04,2,"TOKARSKI COMERCIO INDUSTRIA LTDA","","c"],["d","2026-03",11,"Insumos e Materiais Clínicos","",14300.04,2,"TOKARSKI COMERCIO INDUSTRIA LTDA","","k"],["d","2026-03",11,"Coleta de Resíduos Ambientais","",126.72,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-03",11,"Coleta de Resíduos Ambientais","",126.72,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-03",12,"Materiais de Escritório","",98,1,"REIS & SOUZA LIMITADA","","c"],["d","2026-03",12,"Materiais de Escritório","",98,1,"REIS & SOUZA LIMITADA","","k"],["d","2026-03",12,"Insumos e Materiais Clínicos","",18528.75,2,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-03",12,"Insumos e Materiais Clínicos","",18528.75,2,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-03",13,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","c"],["d","2026-03",13,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","k"],["d","2026-03",13,"INSS sobre Salários - GPS","",2876.6,1,"Sem cliente","","c"],["d","2026-03",13,"INSS sobre Salários - GPS","",2876.6,1,"Sem cliente","","k"],["d","2026-03",13,"Pis/Cofins","",199.83,1,"Sem cliente","","c"],["d","2026-03",13,"Pis/Cofins","",199.83,1,"Sem cliente","","k"],["d","2026-03",13,"Despesas Diversas (Cartão)","",582.6,1,"Sem cliente","","c"],["d","2026-03",13,"Despesas Diversas (Cartão)","",582.6,1,"Sem cliente","","k"],["d","2026-03",13,"Despesas Diversas (Cartão)","",10192.32,1,"Sem cliente","","c"],["d","2026-03",13,"Despesas Diversas (Cartão)","",10192.32,1,"Sem cliente","","k"],["d","2026-03",15,"Retiradas para Sócios","",9000.4,1,"Sem cliente","","c"],["d","2026-03",15,"Retiradas para Sócios","",9000.4,1,"Sem cliente","","k"],["d","2026-03",16,"Despesas a identificar","",240,1,"Sem cliente","","c"],["d","2026-03",16,"Despesas a identificar","",240,1,"Sem cliente","","k"],["d","2026-03",16,"Salários","",150,1,"Sem cliente","","c"],["d","2026-03",16,"Salários","",150,1,"Sem cliente","","k"],["d","2026-03",16,"Despesas a identificar","",100,1,"Sem cliente","","c"],["d","2026-03",16,"Despesas a identificar","",100,1,"Sem cliente","","k"],["d","2026-03",16,"Materiais de Escritório","",232.27,1,"Sem cliente","","c"],["d","2026-03",16,"Materiais de Escritório","",232.27,1,"Sem cliente","","k"],["d","2026-03",16,"Mentorias, Cursos e Treinamentos","",9540,1,"Sem cliente","","c"],["d","2026-03",16,"Mentorias, Cursos e Treinamentos","",9540,1,"Sem cliente","","k"],["d","2026-03",16,"Despesas a identificar","",8640,1,"Sem cliente","","c"],["d","2026-03",16,"Despesas a identificar","",8640,1,"Sem cliente","","k"],["d","2026-03",17,"Energia Elétrica","",718,1,"EDP ESPIRITO SANTO","","c"],["d","2026-03",17,"Energia Elétrica","",718,1,"EDP ESPIRITO SANTO","","k"],["d","2026-03",17,"Serviços de Pessoa Jurídica","",350,1,"Sem cliente","","c"],["d","2026-03",17,"Serviços de Pessoa Jurídica","",350,1,"Sem cliente","","k"],["d","2026-03",18,"Honorários Contábeis","",220,1,"Sem cliente","","c"],["d","2026-03",18,"Honorários Contábeis","",220,1,"Sem cliente","","k"],["d","2026-03",18,"Despesas a identificar","",30,1,"Sem cliente","","c"],["d","2026-03",18,"Despesas a identificar","",30,1,"Sem cliente","","k"],["d","2026-03",18,"Despesas a identificar","",190,1,"Sem cliente","","c"],["d","2026-03",18,"Despesas a identificar","",190,1,"Sem cliente","","k"],["d","2026-03",18,"Despesas a identificar","",400,1,"Sem cliente","","c"],["d","2026-03",18,"Despesas a identificar","",400,1,"Sem cliente","","k"],["d","2026-03",19,"Serviços de Pessoa Jurídica","",91,2,"NICKSCELL COMERCIO E SERVICOS LTDA","","c"],["d","2026-03",19,"Serviços de Pessoa Jurídica","",91,2,"NICKSCELL COMERCIO E SERVICOS LTDA","","k"],["d","2026-03",20,"Despesas a identificar","",820,1,"Sem cliente","","c"],["d","2026-03",20,"Despesas a identificar","",820,1,"Sem cliente","","k"],["d","2026-03",20,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-03",17,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-03",23,"Insumos e Materiais Clínicos","",3727.5,1,"FLUKKA FARMA","","c"],["d","2026-03",23,"Insumos e Materiais Clínicos","",3727.5,1,"FLUKKA FARMA","","k"],["d","2026-03",23,"Despesas a identificar","",2102.5,1,"Sem cliente","","c"],["d","2026-03",23,"Despesas a identificar","",2102.5,1,"Sem cliente","","k"],["d","2026-03",23,"Despesas a identificar","",60,1,"Sem cliente","","c"],["d","2026-03",23,"Despesas a identificar","",60,1,"Sem cliente","","k"],["d","2026-03",23,"Telefonia e Internet","",35.7,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",23,"Telefonia e Internet","",35.7,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",23,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-03",23,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-03",24,"Despesas a identificar","",1500,1,"Sem cliente","","c"],["d","2026-03",24,"Despesas a identificar","",1500,1,"Sem cliente","","k"],["d","2026-03",24,"Retiradas para Sócios","",750,1,"Sem cliente","","c"],["d","2026-03",24,"Retiradas para Sócios","",750,1,"Sem cliente","","k"],["d","2026-03",24,"Despesas Diversas (Cartão)","",38625.88,1,"Sem cliente","","c"],["d","2026-03",24,"Despesas Diversas (Cartão)","",38625.88,1,"Sem cliente","","k"],["d","2026-03",24,"Despesas Diversas (Cartão)","",5000,1,"Sem cliente","","c"],["d","2026-03",24,"Despesas Diversas (Cartão)","",5000,1,"Sem cliente","","k"],["d","2026-03",24,"Serviços de Pessoa Jurídica","",60,2,"37.901.199 VAGNER LISBOA RIBEIRO","","c"],["d","2026-03",24,"Serviços de Pessoa Jurídica","",60,2,"37.901.199 VAGNER LISBOA RIBEIRO","","k"],["d","2026-03",26,"Lanches e Refeições","",284,1,"DON PAGANOTTO LTDA","","c"],["d","2026-03",26,"Lanches e Refeições","",284,1,"DON PAGANOTTO LTDA","","k"],["d","2026-03",26,"Despesas a identificar","",200,1,"Sem cliente","","c"],["d","2026-03",26,"Despesas a identificar","",200,1,"Sem cliente","","k"],["d","2026-03",26,"Despesas a identificar","",800,1,"Sem cliente","","c"],["d","2026-03",26,"Despesas a identificar","",800,1,"Sem cliente","","k"],["d","2026-03",26,"Materiais de Escritório","",160,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","c"],["d","2026-03",26,"Materiais de Escritório","",160,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","k"],["d","2026-03",26,"Despesas a identificar","",2192.5,1,"Sem cliente","","c"],["d","2026-03",26,"Despesas a identificar","",2192.5,1,"Sem cliente","","k"],["d","2026-03",26,"Pis/Cofins","",56.61,1,"Sem cliente","","c"],["d","2026-03",26,"Pis/Cofins","",56.61,1,"Sem cliente","","k"],["d","2026-03",26,"Marketing e Publicidade","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Marketing e Publicidade","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",27,"Materiais de Escritório","",115,1,"Sem cliente","","c"],["d","2026-03",27,"Materiais de Escritório","",115,1,"Sem cliente","","k"],["d","2026-03",27,"Despesas a identificar","",15,1,"Sem cliente","","c"],["d","2026-03",27,"Despesas a identificar","",15,1,"Sem cliente","","k"],["d","2026-03",28,"Software / Licença de Uso","",399.9,2,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-03",28,"Software / Licença de Uso","",399.9,2,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-03",30,"Telefonia e Internet","",21.56,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",30,"Telefonia e Internet","",21.56,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",30,"Serviços de Pessoa Jurídica","",70,1,"Sem cliente","","c"],["d","2026-03",30,"Serviços de Pessoa Jurídica","",70,1,"Sem cliente","","k"],["d","2026-03",30,"Materiais de Escritório","",230,1,"ARTCOPIAS","","c"],["d","2026-03",30,"Materiais de Escritório","",230,1,"ARTCOPIAS","","k"],["d","2026-03",30,"Marketing e Publicidade","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Marketing e Publicidade","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",30,"Materiais de Escritório","",1600,2,"BARRACOPY COMUNICACAO VISUAL LTDA","","c"],["d","2026-03",30,"Materiais de Escritório","",1600,2,"BARRACOPY COMUNICACAO VISUAL LTDA","","k"],["d","2026-03",30,"Insumos e Materiais Clínicos","",12500.8,2,"BIOS FARMACEUTICA LTDA","","c"],["d","2026-03",30,"Insumos e Materiais Clínicos","",12500.8,2,"BIOS FARMACEUTICA LTDA","","k"],["d","2026-03",31,"Despesas a identificar","",825,1,"Sem cliente","","c"],["d","2026-03",31,"Despesas a identificar","",825,1,"Sem cliente","","k"],["d","2026-03",31,"Pró-labore","",15000,1,"Sem cliente","","c"],["d","2026-03",31,"Pró-labore","",15000,1,"Sem cliente","","k"],["d","2026-04",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-04",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-04",1,"Salários","",4261,1,"Sem cliente","","c"],["d","2026-04",1,"Salários","",4261,1,"Sem cliente","","k"],["d","2026-04",1,"Salários","",3746.76,1,"Sem cliente","","c"],["d","2026-04",1,"Salários","",3746.76,1,"Sem cliente","","k"],["d","2026-04",1,"Salários","",3710,1,"Sem cliente","","c"],["d","2026-04",1,"Salários","",3710,1,"Sem cliente","","k"],["d","2026-04",1,"Despesas Diversas (Cartão)","",3265.71,1,"Sem cliente","","c"],["d","2026-04",1,"Despesas Diversas (Cartão)","",3265.71,1,"Sem cliente","","k"],["d","2026-04",1,"Salários","",2820,1,"Sem cliente","","c"],["d","2026-04",1,"Salários","",2820,1,"Sem cliente","","k"],["d","2026-04",1,"Salários","",2800,1,"Sem cliente","","c"],["d","2026-04",1,"Salários","",2800,1,"Sem cliente","","k"],["d","2026-04",1,"Retiradas para Sócios","",14444.75,1,"Sem cliente","","c"],["d","2026-04",1,"Retiradas para Sócios","",14444.75,1,"Sem cliente","","k"],["d","2026-04",1,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-02",26,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-04",1,"Despesas Pessoais dos Sócios","",8640,2,"KAMILLA PIMENTEL DERMATOLOGIA LTDA","","c"],["d","2026-04",1,"Despesas Pessoais dos Sócios","",8640,2,"KAMILLA PIMENTEL DERMATOLOGIA LTDA","","k"],["d","2026-04",2,"Salários","",2299.32,1,"Sem cliente","","c"],["d","2026-04",2,"Salários","",2299.32,1,"Sem cliente","","k"],["d","2026-04",2,"Salários","",1800,1,"Sem cliente","","c"],["d","2026-04",2,"Salários","",1800,1,"Sem cliente","","k"],["d","2026-04",2,"Materiais de Escritório","",7.1,1,"Sem cliente","","c"],["d","2026-04",2,"Materiais de Escritório","",7.1,1,"Sem cliente","","k"],["d","2026-04",2,"Despesas a identificar","",1800,1,"Sem cliente","","c"],["d","2026-04",2,"Despesas a identificar","",1800,1,"Sem cliente","","k"],["d","2026-04",2,"Salários","",1190,1,"Sem cliente","","c"],["d","2026-04",2,"Salários","",1190,1,"Sem cliente","","k"],["d","2026-04",2,"Despesas a identificar","",575.3,1,"Sem cliente","","c"],["d","2026-04",2,"Despesas a identificar","",575.3,1,"Sem cliente","","k"],["d","2026-04",2,"Lanches e Refeições","",155,1,"Sem cliente","","c"],["d","2026-04",2,"Lanches e Refeições","",155,1,"Sem cliente","","k"],["d","2026-04",2,"Marketing e Publicidade","",81.89,2,"GOOGLE BRASIL INTERNET LTDA.","","c"],["d","2026-04",2,"Marketing e Publicidade","",81.89,2,"GOOGLE BRASIL INTERNET LTDA.","","k"],["d","2026-04",6,"Insumos e Materiais Clínicos","",3000.3,1,"Sem cliente","","c"],["d","2026-04",6,"Insumos e Materiais Clínicos","",3000.3,1,"Sem cliente","","k"],["d","2026-04",6,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-03",27,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-04",6,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","c"],["d","2026-04",6,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","k"],["d","2026-04",6,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-04",6,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-04",6,"Despesas Diversas (Cartão)","",364.91,1,"Sem cliente","","c"],["d","2026-04",6,"Despesas Diversas (Cartão)","",364.91,1,"Sem cliente","","k"],["d","2026-04",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-04",7,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-04",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-04",7,"BPO Financeiro","",2400,1,"Sem cliente","","c"],["d","2026-04",7,"BPO Financeiro","",2400,1,"Sem cliente","","k"],["d","2026-04",7,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-04",28,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-04",7,"Coleta de Resíduos Ambientais","",3.36,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",7,"Coleta de Resíduos Ambientais","",3.36,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",7,"Coleta de Resíduos Ambientais","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",9,"Coleta de Resíduos Ambientais","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",7,"ISS","",5.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-03",11,"ISS","",5.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",7,"Despesas a identificar","",200,1,"Sem cliente","","c"],["d","2026-04",7,"Despesas a identificar","",200,1,"Sem cliente","","k"],["d","2026-04",7,"Despesas a identificar","",2591.5,1,"Sem cliente","","c"],["d","2026-04",7,"Despesas a identificar","",2591.5,1,"Sem cliente","","k"],["d","2026-04",8,"Serviços e Materiais de Limpeza e de Higiene","",320,1,"Sem cliente","","c"],["d","2026-04",8,"Serviços e Materiais de Limpeza e de Higiene","",320,1,"Sem cliente","","k"],["d","2026-04",8,"ISS","",17979.15,1,"Sem cliente","","c"],["d","2026-04",8,"ISS","",17979.15,1,"Sem cliente","","k"],["d","2026-04",9,"Despesas a identificar","",540,1,"Sem cliente","","c"],["d","2026-04",9,"Despesas a identificar","",540,1,"Sem cliente","","k"],["d","2026-04",9,"Despesas a identificar","",150.99,1,"Sem cliente","","c"],["d","2026-04",9,"Despesas a identificar","",150.99,1,"Sem cliente","","k"],["d","2026-04",14,"Retiradas para Sócios","",14100,1,"ANNA PAULA FERNANDES MARTINS","","c"],["d","2026-04",14,"Retiradas para Sócios","",14100,1,"ANNA PAULA FERNANDES MARTINS","","k"],["d","2026-04",14,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-04",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-04",14,"Telefonia e Internet","",117.34,1,"BIZZ INTERNET LTDA","","c"],["d","2026-04",6,"Telefonia e Internet","",117.34,1,"BIZZ INTERNET LTDA","","k"],["d","2026-04",14,"Salários","",1500,1,"Sem cliente","","c"],["d","2026-04",14,"Salários","",1500,1,"Sem cliente","","k"],["d","2026-04",14,"Retiradas para Sócios","",14100,1,"Sem cliente","","c"],["d","2026-04",14,"Retiradas para Sócios","",14100,1,"Sem cliente","","k"],["d","2026-04",14,"Coleta de Resíduos Ambientais","",96,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",14,"Coleta de Resíduos Ambientais","",96,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",16,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-04",24,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-04",16,"Despesas a identificar","",948,1,"Sem cliente","","c"],["d","2026-04",16,"Despesas a identificar","",948,1,"Sem cliente","","k"],["d","2026-04",17,"Honorários Contábeis","",1200,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-04",17,"Honorários Contábeis","",1200,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-04",22,"Viagens e Representações","",92.4,1,"JUAN CARLOS SOSA","","c"],["d","2026-04",22,"Viagens e Representações","",92.4,1,"JUAN CARLOS SOSA","","k"],["d","2026-04",22,"Energia Elétrica","",745.04,1,"EDP ESPIRITO SANTO","","c"],["d","2026-04",22,"Energia Elétrica","",745.04,1,"EDP ESPIRITO SANTO","","k"],["d","2026-04",22,"Salários","",705,1,"Sem cliente","","c"],["d","2026-04",22,"Salários","",705,1,"Sem cliente","","k"],["d","2026-04",22,"Serviços e Materiais de Limpeza e de Higiene","",655,1,"Sem cliente","","c"],["d","2026-04",22,"Serviços e Materiais de Limpeza e de Higiene","",655,1,"Sem cliente","","k"],["d","2026-04",22,"Serviços de Pessoa Jurídica","",88,1,"NICKSCELL COMERCIO E SERVICOS LTDA","","c"],["d","2026-04",22,"Serviços de Pessoa Jurídica","",88,1,"NICKSCELL COMERCIO E SERVICOS LTDA","","k"],["d","2026-04",22,"Telefonia e Internet","",49.43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-04",22,"Telefonia e Internet","",49.43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-04",22,"Telefonia e Internet","",41.76,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-04",22,"Telefonia e Internet","",41.76,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-04",23,"IRPJ E CSLL","",11216.09,1,"RECEITA FEDERAL","","c"],["d","2026-04",23,"IRPJ E CSLL","",11216.09,1,"RECEITA FEDERAL","","k"],["d","2026-04",23,"Pis/Cofins","",16405.95,1,"RECEITA FEDERAL","","c"],["d","2026-04",23,"Pis/Cofins","",16405.95,1,"RECEITA FEDERAL","","k"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","c"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","k"],["d","2026-04",23,"INSS sobre Salários - GPS","",2895.53,1,"Sem cliente","","c"],["d","2026-04",23,"INSS sobre Salários - GPS","",2895.53,1,"Sem cliente","","k"],["d","2026-04",27,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-04",27,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-04",29,"Software / Licença de Uso","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-04",29,"Software / Licença de Uso","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-04",30,"Serviços e Materiais de Limpeza e de Higiene","",390,1,"Sem cliente","","c"],["d","2026-04",30,"Serviços e Materiais de Limpeza e de Higiene","",390,1,"Sem cliente","","k"],["d","2026-04",30,"Software / Licença de Uso","",399.9,2,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-04",30,"Software / Licença de Uso","",399.9,2,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-04",30,"Insumos e Materiais Clínicos","",2691,2,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-04",30,"Insumos e Materiais Clínicos","",2691,2,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",2,"Marketing e Publicidade","",2638.5,2,"GOOGLE BRASIL INTERNET LTDA.","","c"],["d","2026-05",2,"Marketing e Publicidade","",2638.5,2,"GOOGLE BRASIL INTERNET LTDA.","","k"],["d","2026-05",4,"Retiradas para Sócios","",21318.51,1,"Sem cliente","","c"],["d","2026-05",4,"Retiradas para Sócios","",21318.51,1,"Sem cliente","","k"],["d","2026-05",4,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-05",4,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-05",4,"Salários","",2570,1,"Sem cliente","","c"],["d","2026-05",4,"Salários","",2570,1,"Sem cliente","","k"],["d","2026-05",4,"Despesas Diversas (Cartão)","",34274.37,1,"Sem cliente","","c"],["d","2026-05",4,"Despesas Diversas (Cartão)","",34274.37,1,"Sem cliente","","k"],["d","2026-05",4,"Salários","",4950,1,"Sem cliente","","c"],["d","2026-05",4,"Salários","",4950,1,"Sem cliente","","k"],["d","2026-05",4,"Salários","",3626.71,1,"Sem cliente","","c"],["d","2026-05",4,"Salários","",3626.71,1,"Sem cliente","","k"],["d","2026-05",4,"Salários","",1500,1,"Sem cliente","","c"],["d","2026-05",4,"Salários","",1500,1,"Sem cliente","","k"],["d","2026-05",4,"Despesas Diversas (Cartão)","",1224,1,"Sem cliente","","c"],["d","2026-05",4,"Despesas Diversas (Cartão)","",1224,1,"Sem cliente","","k"],["d","2026-05",4,"Marketing e Publicidade","",2600,2,"64.659.216 KETELLY ALVES GOULARTE","","c"],["d","2026-05",4,"Marketing e Publicidade","",2600,2,"64.659.216 KETELLY ALVES GOULARTE","","k"],["d","2026-05",5,"Despesas Diversas (Cartão)","",2300,1,"Sem cliente","","c"],["d","2026-05",5,"Despesas Diversas (Cartão)","",2300,1,"Sem cliente","","k"],["d","2026-05",5,"Salários","",3150,1,"Sem cliente","","c"],["d","2026-05",5,"Salários","",3150,1,"Sem cliente","","k"],["d","2026-05",5,"Salários","",2299.32,1,"Sem cliente","","c"],["d","2026-05",5,"Salários","",2299.32,1,"Sem cliente","","k"],["d","2026-05",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","c"],["d","2026-05",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","k"],["d","2026-05",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","c"],["d","2026-05",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","k"],["d","2026-05",7,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-05",7,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-05",7,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-05",7,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-05",7,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-05",4,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-05",7,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-05",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-05",7,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-05",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-05",7,"Marketing e Publicidade","",1875,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-05",6,"Marketing e Publicidade","",1875,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-05",7,"Insumos e Materiais Clínicos","",2521.26,1,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-05",7,"Insumos e Materiais Clínicos","",2521.26,1,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",7,"Insumos e Materiais Clínicos","",41.4,1,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-04",30,"Insumos e Materiais Clínicos","",41.4,1,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",7,"Insumos e Materiais Clínicos","",27.6,1,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-04",30,"Insumos e Materiais Clínicos","",27.6,1,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",7,"BPO Financeiro","",2400,1,"Sem cliente","","c"],["d","2026-05",7,"BPO Financeiro","",2400,1,"Sem cliente","","k"],["d","2026-05",8,"Troco","",26,1,"ERICA RODRIGUES DE LIMA","","c"],["d","2026-05",8,"Troco","",26,1,"ERICA RODRIGUES DE LIMA","","k"],["d","2026-05",8,"ISS","",4.92,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",9,"ISS","",4.92,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",8,"ISS","",4,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",14,"ISS","",4,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",11,"ISS","",486.47,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",11,"ISS","",486.47,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",11,"Salários","",3713.91,1,"HEMILLY LACERDA BARBOSA","","c"],["d","2026-05",11,"Salários","",3713.91,1,"HEMILLY LACERDA BARBOSA","","k"],["d","2026-05",11,"ISS","",8226.92,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",11,"ISS","",8226.92,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",11,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-05",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-05",11,"Coleta de Resíduos Ambientais","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-05",11,"Coleta de Resíduos Ambientais","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",11,"Insumos e Materiais Clínicos","",151.3,2,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-05",11,"Insumos e Materiais Clínicos","",151.3,2,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-05",12,"Tarifas Bancárias","",133.85,1,"Sem cliente","","c"],["d","2026-05",12,"Tarifas Bancárias","",133.85,1,"Sem cliente","","k"],["d","2026-05",12,"Insumos e Materiais Clínicos","",2405.4,2,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-05",12,"Insumos e Materiais Clínicos","",2405.4,2,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-05",13,"Serviços e Materiais de Limpeza e de Higiene","",412,1,"SIDIANARA RODRIGUES DE SOUZA","","c"],["d","2026-05",13,"Serviços e Materiais de Limpeza e de Higiene","",412,1,"SIDIANARA RODRIGUES DE SOUZA","","k"],["d","2026-05",13,"INSS sobre Pró-labore - GPS","",2876.6,1,"RECEITA FEDERAL","","c"],["d","2026-05",13,"INSS sobre Pró-labore - GPS","",2876.6,1,"RECEITA FEDERAL","","k"],["d","2026-05",13,"Serviços de Pessoa Jurídica","",55,1,"AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA","","c"],["d","2026-05",13,"Serviços de Pessoa Jurídica","",55,1,"AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA","","k"],["d","2026-05",13,"Marketing e Publicidade","",1500,1,"VANESSA CORDOVAL DE BARROS","","c"],["d","2026-05",13,"Marketing e Publicidade","",1500,1,"VANESSA CORDOVAL DE BARROS","","k"],["d","2026-05",13,"Tarifas Bancárias","",144.03,1,"Sem cliente","","c"],["d","2026-05",13,"Tarifas Bancárias","",144.03,1,"Sem cliente","","k"],["d","2026-05",13,"Tarifas Bancárias","",417.06,1,"Sem cliente","","c"],["d","2026-05",13,"Tarifas Bancárias","",417.06,1,"Sem cliente","","k"],["d","2026-05",13,"Serviços e Materiais de Limpeza e de Higiene","",412,1,"Sem cliente","","c"],["d","2026-05",13,"Serviços e Materiais de Limpeza e de Higiene","",412,1,"Sem cliente","","k"],["d","2026-05",13,"INSS sobre Salários - GPS","",2876.6,1,"Sem cliente","","c"],["d","2026-05",13,"INSS sobre Salários - GPS","",2876.6,1,"Sem cliente","","k"],["d","2026-05",13,"Coleta de Resíduos Ambientais","",138.3,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-05",13,"Coleta de Resíduos Ambientais","",138.3,2,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",15,"Salários","",3709.42,1,"Sem cliente","","c"],["d","2026-05",15,"Salários","",3709.42,1,"Sem cliente","","k"],["d","2026-05",15,"Tarifas Bancárias","",291,1,"Sem cliente","","c"],["d","2026-05",15,"Tarifas Bancárias","",291,1,"Sem cliente","","k"],["d","2026-05",18,"Salários","",4732.93,1,"Sem cliente","","c"],["d","2026-05",18,"Salários","",4732.93,1,"Sem cliente","","k"],["d","2026-05",18,"Salários","",2955,1,"Sem cliente","","c"],["d","2026-05",18,"Salários","",2955,1,"Sem cliente","","k"],["d","2026-05",18,"Tarifas Bancárias","",384.08,1,"Sem cliente","","c"],["d","2026-05",18,"Tarifas Bancárias","",384.08,1,"Sem cliente","","k"],["d","2026-05",19,"Salários","",926.4,1,"Sem cliente","","c"],["d","2026-05",19,"Salários","",926.4,1,"Sem cliente","","k"],["d","2026-05",19,"Tarifas Bancárias","",351.12,1,"Sem cliente","","c"],["d","2026-05",19,"Tarifas Bancárias","",351.12,1,"Sem cliente","","k"],["d","2026-05",19,"Salários","",966.57,1,"Sem cliente","","c"],["d","2026-05",19,"Salários","",966.57,1,"Sem cliente","","k"],["d","2026-05",19,"ISS","",272,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",19,"ISS","",272,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",20,"Tarifas Bancárias","",368.56,1,"Sem cliente","","c"],["d","2026-05",20,"Tarifas Bancárias","",368.56,1,"Sem cliente","","k"],["d","2026-05",20,"Tarifas Bancárias","",314.41,1,"Sem cliente","","c"],["d","2026-05",20,"Tarifas Bancárias","",314.41,1,"Sem cliente","","k"],["d","2026-05",20,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-05",20,"Honorários Consultoria","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-05",21,"Insumos e Materiais Clínicos","",46.89,1,"PIX Marketplace","","c"],["d","2026-05",21,"Insumos e Materiais Clínicos","",46.89,1,"PIX Marketplace","","k"],["d","2026-05",21,"IRRF","",7947.55,1,"RECEITA FEDERAL","","c"],["d","2026-05",21,"IRRF","",7947.55,1,"RECEITA FEDERAL","","k"],["d","2026-05",21,"Telefonia e Internet","",41.87,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-05",21,"Telefonia e Internet","",41.87,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-05",21,"Energia Elétrica","",546.33,1,"28.152.650/0001-71","","c"],["d","2026-05",21,"Energia Elétrica","",546.33,1,"28.152.650/0001-71","","k"],["d","2026-05",21,"Pis/Cofins","",7947.55,1,"RECEITA FEDERAL","","c"],["d","2026-05",21,"Pis/Cofins","",7947.55,1,"RECEITA FEDERAL","","k"],["d","2026-05",21,"Salários","",846.04,1,"Sem cliente","","c"],["d","2026-05",21,"Salários","",846.04,1,"Sem cliente","","k"],["d","2026-05",21,"Salários","",821.79,1,"Sem cliente","","c"],["d","2026-05",21,"Salários","",821.79,1,"Sem cliente","","k"],["d","2026-05",21,"Despesas a identificar","",46.89,1,"Sem cliente","","c"],["d","2026-05",21,"Despesas a identificar","",46.89,1,"Sem cliente","","k"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-05",22,"Salários","",1432.3,1,"Sem cliente","","c"],["d","2026-05",22,"Salários","",1432.3,1,"Sem cliente","","k"],["d","2026-05",22,"Salários","",1262.6,1,"Sem cliente","","c"],["d","2026-05",22,"Salários","",1262.6,1,"Sem cliente","","k"],["d","2026-05",22,"Salários","",870.09,1,"Sem cliente","","c"],["d","2026-05",22,"Salários","",870.09,1,"Sem cliente","","k"],["d","2026-05",22,"Tarifas Bancárias","",480.1,1,"Sem cliente","","c"],["d","2026-05",22,"Tarifas Bancárias","",480.1,1,"Sem cliente","","k"],["d","2026-05",25,"Salários","",1473.09,1,"Sem cliente","","c"],["d","2026-05",25,"Salários","",1473.09,1,"Sem cliente","","k"],["d","2026-05",28,"Despesas a identificar","",184.75,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-05",28,"Despesas a identificar","",184.75,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-05",28,"FGTS e Multa de FGTS","",1448.01,1,"Sem cliente","","c"],["d","2026-05",28,"FGTS e Multa de FGTS","",1448.01,1,"Sem cliente","","k"],["d","2026-05",28,"FGTS e Multa de FGTS","",548.22,2,"CEF MATRIZ","","c"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,2,"CEF MATRIZ","","k"],["d","2026-05",29,"Exames Médicos","",600,1,"Sem cliente","","c"],["d","2026-05",29,"Exames Médicos","",600,1,"Sem cliente","","k"],["d","2026-06",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-06",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-06",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-06",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-06",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-06",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-06",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-06",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-06",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-06",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-06",10,"Coleta de Resíduos Ambientais","",5.76,0,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-05",13,"Coleta de Resíduos Ambientais","",5.76,0,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-07",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-07",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-07",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-07",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-07",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-07",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-07",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-07",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-07",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-07",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-08",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-08",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-08",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-08",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-08",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-08",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-08",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-08",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-08",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-08",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-09",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-09",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-09",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-09",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-09",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-09",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-09",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-09",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-09",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-09",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-10",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-10",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-10",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-10",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-10",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-10",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-10",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-10",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-10",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-10",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-11",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-11",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-11",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-11",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-11",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-11",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-11",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-11",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-11",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-11",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-12",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-12",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-12",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-12",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-12",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-12",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-12",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-12",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-12",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-12",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"]];

const REF_YEAR = 2026;
const AVAILABLE_YEARS = [2027,2026];

// aggregateTx: recomputa MONTH_DATA, KPIS, top categorias/clientes/fornecedores
// e EXTRATO a partir de uma lista filtrada de transacoes. Chamada pelas Pages
// quando drilldown ou statusFilter estao ativos.
function aggregateTx(txList, year) {
  year = year || REF_YEAR;
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const MONTH_DATA = months.map(m => ({ m, receita: 0, despesa: 0 }));
  const RECEITA_DIA = Array(31).fill(0);
  const DESPESA_DIA = Array(31).fill(0);
  const recCat = new Map(), despCat = new Map();
  const recCli = new Map(), despForn = new Map();
  const extratoArr = [];
  const extratoRecArr = [], extratoDespArr = [];
  let totalReceita = 0, totalDespesa = 0;

  for (const row of txList) {
    const [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, cc] = row;
    if (!mes) continue;
    const ymonth = mes.slice(0,4);
    if (Number(ymonth) !== year) continue;
    const mIdx = parseInt(mes.slice(5,7), 10) - 1;
    if (mIdx < 0 || mIdx > 11) continue;
    if (kind === 'r') {
      MONTH_DATA[mIdx].receita += valor;
      totalReceita += valor;
      recCat.set(categoria, (recCat.get(categoria) || 0) + valor);
      if (cliente) recCli.set(cliente, (recCli.get(cliente) || 0) + valor);
      if (dia >= 1 && dia <= 31) RECEITA_DIA[dia - 1] += valor;
    } else {
      MONTH_DATA[mIdx].despesa += valor;
      totalDespesa += valor;
      despCat.set(categoria, (despCat.get(categoria) || 0) + valor);
      if (fornecedor) despForn.set(fornecedor, (despForn.get(fornecedor) || 0) + valor);
      if (dia >= 1 && dia <= 31) DESPESA_DIA[dia - 1] += valor;
    }
    // Extrato compacto pra tabela (renomeado pra extRow porque outer for já usa 'row')
    const dataStr = String(dia).padStart(2,'0') + '/' + mes.slice(5,7) + '/' + mes.slice(0,4);
    const extRow = [dataStr, cc || 'Operações', categoria, kind === 'r' ? cliente : fornecedor, kind === 'r' ? valor : -valor, realizado ? 'PAGO' : ''];
    extratoArr.push(extRow);
    if (kind === 'r') extratoRecArr.push(extRow); else extratoDespArr.push(extRow);
  }

  // sort por data desc (string DD/MM/YYYY → Date) — aplica nos 3 arrays
  const sortByDateDesc = (a, b) => {
    const [da,ma,ya] = a[0].split('/').map(Number);
    const [db,mb,yb] = b[0].split('/').map(Number);
    return new Date(yb,mb-1,db) - new Date(ya,ma-1,da);
  };
  extratoArr.sort(sortByDateDesc);
  extratoRecArr.sort(sortByDateDesc);
  extratoDespArr.sort(sortByDateDesc);

  const topN = (mp, n) => Array.from(mp.entries()).map(([name,value]) => ({name,value})).sort((a,b)=>b.value-a.value).slice(0,n);
  const VALOR_LIQUIDO = totalReceita - totalDespesa;
  const MARGEM_LIQUIDA = totalReceita > 0 ? (VALOR_LIQUIDO / totalReceita) * 100 : 0;

  // Saldos acumulados por mês
  const SALDOS_MES = [];
  var _saldo = 0;
  for (var _si = 0; _si < MONTH_DATA.length; _si++) {
    _saldo += MONTH_DATA[_si].receita - MONTH_DATA[_si].despesa;
    SALDOS_MES.push(_saldo);
  }

  return {
    MONTH_DATA,
    RECEITA_CATEGORIAS: topN(recCat, 12),
    DESPESA_CATEGORIAS: topN(despCat, 12),
    RECEITA_CLIENTES: topN(recCli, 12),
    DESPESA_FORNECEDORES: topN(despForn, 12),
    EXTRATO: extratoArr.slice(0, 200),
    EXTRATO_RECEITAS: extratoRecArr.slice(0, 200),
    EXTRATO_DESPESAS: extratoDespArr.slice(0, 200),
    RECEITA_DIA: RECEITA_DIA,
    DESPESA_DIA: DESPESA_DIA,
    SALDOS_MES: SALDOS_MES,
    KPIS: {
      TOTAL_RECEITA: totalReceita,
      TOTAL_DESPESA: totalDespesa,
      VALOR_LIQUIDO,
      MARGEM_LIQUIDA,
      VALOR_LIQ_SERIES: MONTH_DATA.map(m => m.receita - m.despesa),
    },
  };
}

// applyDrilldown: filtra ALL_TX baseado em statusFilter + drilldown + regime.
// statusFilter: 'realizado' | 'atrasado' | 'a_pagar_receber' | 'tudo'
// drilldown: null | { type: 'mes'|'categoria'|'cliente'|'fornecedor', value: ... }
// regime: 'caixa' | 'competencia' | null (null = caixa default)
// statusCode index [6]: 1 = realizado, 0 = em aberto, 2 = atrasado
function filterTx(allTx, statusFilter, drilldown, regime, extraFilters) {
  let out = allTx;
  // Filtro por regime (caixa/competencia) — index [9]: 'c' ou 'k'
  var rg = (regime === 'competencia') ? 'k' : 'c';
  out = out.filter(r => r[9] === rg);
  if (statusFilter === 'realizado') out = out.filter(r => r[6] === 1);
  else if (statusFilter === 'atrasado') out = out.filter(r => r[6] === 2);
  else if (statusFilter === 'a_pagar_receber') out = out.filter(r => r[6] === 0);
  if (drilldown) {
    if (drilldown.type === 'mes') out = out.filter(r => r[1] === drilldown.value);
    else if (drilldown.type === 'categoria') out = out.filter(r => r[3] === drilldown.value);
    else if (drilldown.type === 'cliente') out = out.filter(r => r[0] === 'r' && r[4] === drilldown.value);
    else if (drilldown.type === 'fornecedor') out = out.filter(r => r[0] === 'd' && r[7] === drilldown.value);
    else if (drilldown.type === 'dia') out = out.filter(r => r[2] === drilldown.value + 1);
  }
  // Extra filters: dateFrom, dateTo, categoria
  if (extraFilters) {
    if (extraFilters.dateFrom) {
      // dateFrom format: "YYYY-MM-DD"
      var dfYm = extraFilters.dateFrom.slice(0, 7); // "YYYY-MM"
      var dfDay = parseInt(extraFilters.dateFrom.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] > dfYm) return true;
        if (r[1] < dfYm) return false;
        return r[2] >= dfDay;
      });
    }
    if (extraFilters.dateTo) {
      var dtYm = extraFilters.dateTo.slice(0, 7);
      var dtDay = parseInt(extraFilters.dateTo.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] < dtYm) return true;
        if (r[1] > dtYm) return false;
        return r[2] <= dtDay;
      });
    }
    if (extraFilters.categoria && extraFilters.categoria !== "Todas categorias") {
      out = out.filter(function(r) { return r[3] === extraFilters.categoria; });
    }
    if (extraFilters.diaFrom && extraFilters.diaFrom > 0) {
      out = out.filter(function(r) { return r[2] >= extraFilters.diaFrom; });
    }
    if (extraFilters.diaTo && extraFilters.diaTo > 0) {
      out = out.filter(function(r) { return r[2] <= extraFilters.diaTo; });
    }
  }
  return out;
}

// Sintetiza um BIT "flat" baseado no filtro escolhido (window.BIT_FILTER).
// Default: 'realizado' (PAGO).
function _makeBit(filter) {
  const seg = SEGMENTS[filter] || SEGMENTS.realizado;
  const K = seg.KPIS;
  const indicadores = {
    TOTAL_RECEITA: K.TOTAL_RECEITA,
    TOTAL_DESPESA: K.TOTAL_DESPESA,
    VALOR_LIQUIDO: K.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: K.MARGEM_LIQUIDA,
    IMPOSTOS: 0,
    EBITDA: K.VALOR_LIQUIDO,
    RESULTADO_OPERACIONAL: K.VALOR_LIQUIDO,
    CAPEX: 0,
    MARGEM_CONTRIB: K.MARGEM_LIQUIDA,
    EBITDA_PCT: K.MARGEM_LIQUIDA,
    IMPOSTOS_PCT: 0,
  };
  return Object.assign({
    META, POSICAO_CAIXA, COMPOSICAO_DESPESA,
    MONTHS, MONTHS_FULL, fmt, fmtK, fmtPct,
    SEGMENTS,
    MONTH_DATA: seg.MONTH_DATA,
    RECEITA_CATEGORIAS: seg.RECEITA_CATEGORIAS,
    DESPESA_CATEGORIAS: seg.DESPESA_CATEGORIAS,
    RECEITA_CLIENTES: seg.RECEITA_CLIENTES,
    DESPESA_FORNECEDORES: seg.DESPESA_FORNECEDORES,
    EXTRATO: seg.EXTRATO,
    DIAS: Array.from({ length: 31 }, (_, i) => i + 1),
    RECEITA_DIA: seg.RECEITA_DIA,
    DESPESA_DIA: seg.DESPESA_DIA,
    SALDOS_MES: seg.SALDOS_MES,
    VALOR_LIQ_SERIES: K.VALOR_LIQ_SERIES,
    FLUXO_RECEITA: seg.FLUXO_RECEITA,
    FLUXO_DESPESA: seg.FLUXO_DESPESA,
    COMP_DATA: seg.COMP_DATA,
    RECDESP_AREA: seg.MONTH_DATA.map(m => ({ m: m.m.slice(0,3), receita: m.receita, despesa: m.despesa })),
  }, indicadores);
}

window.BIT = _makeBit(window.BIT_FILTER || 'realizado');
window._makeBit = _makeBit;
window.BIT_SEGMENTS = SEGMENTS;
window.BIT_META = META;
window.ALL_TX = ALL_TX;
window.REF_YEAR = REF_YEAR;
window.AVAILABLE_YEARS = AVAILABLE_YEARS;
window.aggregateTx = aggregateTx;
window.filterTx = filterTx;
// getBit: SEMPRE recomputa via recomputeBit (sem cache de window.BIT).
// Evita lag no toggle Previsto/Realizado e suporta year/month arbitrario.
// month: 0 = ano completo, 1-12 = mes especifico.
// regime: 'caixa' | 'competencia' (default 'caixa')
window.getBit = function (statusFilter, drilldown, year, month, regime, extraFilters) {
  const sf = statusFilter || window.BIT_FILTER || 'realizado';
  const y = year || window.REF_YEAR;
  let dd = drilldown;
  if (!dd && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    const ym = y + '-' + mm;
    dd = { type: 'mes', value: ym, label: ym };
  }
  return window.recomputeBit(sf, dd, y, regime, extraFilters);
};
// Cross-filter helper: combina statusFilter + drilldown + regime e retorna BIT-like
// com KPIs/charts/extrato recalculados em ~10ms (17k rows).
window.recomputeBit = function (statusFilter, drilldown, year, regime, extraFilters) {
  const filtered = filterTx(ALL_TX, statusFilter, drilldown, regime || 'caixa', extraFilters);
  const agg = aggregateTx(filtered, year || REF_YEAR);
  // Mescla com BIT base pra preservar META, helpers (fmt, fmtK), MONTHS etc.
  const base = window.BIT || {};
  return Object.assign({}, base, agg, {
    TOTAL_RECEITA: agg.KPIS.TOTAL_RECEITA,
    TOTAL_DESPESA: agg.KPIS.TOTAL_DESPESA,
    VALOR_LIQUIDO: agg.KPIS.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: agg.KPIS.MARGEM_LIQUIDA,
  });
};
window.BIT_ORCAMENTO = [];
