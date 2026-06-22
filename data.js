/* BGP BI — gerado por build-data.cjs em 2026-06-22T12:06:25.554Z */
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
  "fetched_at": "2026-06-22T12:06:24.061Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 55,
    "departamentos": 0,
    "clientes": 261
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": 120985.90000000014
  },
  {
    "name": "A receber (futuro)",
    "value": 99283.63
  },
  {
    "name": "A pagar (futuro)",
    "value": 27448.799999999996
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "Insumos e Materiais Clínicos",
    "value": 199269.46,
    "color": "#2dd4bf"
  },
  {
    "name": "Mentorias, Cursos e Treinamentos",
    "value": 83500.17,
    "color": "#22c55e"
  },
  {
    "name": "Salários",
    "value": 72452.78,
    "color": "#a78bfa"
  },
  {
    "name": "ISS",
    "value": 59839.920000000006,
    "color": "#f59e0b"
  },
  {
    "name": "Marketing, Publicidade e Eventos",
    "value": 57301.26000000001,
    "color": "#ef4444"
  },
  {
    "name": "IRPJ E CSLL",
    "value": 54193.020000000004,
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
        "receita": 179213.85000000006,
        "despesa": 198975.26
      },
      {
        "m": "abril",
        "receita": 157368.86999999997,
        "despesa": 144683.96999999997
      },
      {
        "m": "maio",
        "receita": 142902.91000000003,
        "despesa": 119310.54000000002
      },
      {
        "m": "junho",
        "receita": 0,
        "despesa": 15030.85
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
        "value": 605275.0100000001,
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
        "name": "Insumos e Materiais Clínicos",
        "value": 199269.46,
        "fornecedores": 33
      },
      {
        "name": "Mentorias, Cursos e Treinamentos",
        "value": 83500.17,
        "fornecedores": 8
      },
      {
        "name": "Salários",
        "value": 72452.78,
        "fornecedores": 7
      },
      {
        "name": "ISS",
        "value": 59839.920000000006,
        "fornecedores": 2
      },
      {
        "name": "Marketing, Publicidade e Eventos",
        "value": 57301.26000000001,
        "fornecedores": 6
      },
      {
        "name": "IRPJ E CSLL",
        "value": 54193.020000000004,
        "fornecedores": 1
      },
      {
        "name": "Pis/Cofins",
        "value": 52559.200000000004,
        "fornecedores": 1
      },
      {
        "name": "INSS sobre Salários - GPS",
        "value": 18615.829999999998,
        "fornecedores": 2
      },
      {
        "name": "Pro-labores e Reembolsos",
        "value": 15000,
        "fornecedores": 1
      },
      {
        "name": "Materiais  de Uso e Consumo",
        "value": 11245.240000000002,
        "fornecedores": 28
      },
      {
        "name": "Software / Licença de Uso",
        "value": 10047.989999999998,
        "fornecedores": 10
      },
      {
        "name": "Honorários Contábeis",
        "value": 9005.2,
        "fornecedores": 2
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "Sem cliente",
        "value": 555314.7100000001
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
        "value": 125429.25000000001
      },
      {
        "name": "RECEITA FEDERAL",
        "value": 122472.52
      },
      {
        "name": "O MEDICO EMPRESARIO LTDA",
        "value": 52184.75
      },
      {
        "name": "Unikka Pharma",
        "value": 48491.100000000006
      },
      {
        "name": "Bio Meds Pharmaceutics",
        "value": 46872.67
      },
      {
        "name": "Bios Farmacêutica",
        "value": 15758.42
      },
      {
        "name": "Facebook",
        "value": 15331.260000000002
      },
      {
        "name": "SAMIRA VIEIRA NEVES",
        "value": 15296.130000000001
      },
      {
        "name": "Bio Meds Pharmaceuti",
        "value": 15000
      },
      {
        "name": "HELOYZA ANDRADE ELIODORIO",
        "value": 14340
      },
      {
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 13275
      },
      {
        "name": "BARBÁRA H SAMPÂIO",
        "value": 11237.61
      }
    ],
    "EXTRATO": [
      [
        "01/06/2026",
        "Operações",
        "Pro-labores e Reembolsos",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
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
        "ASO - Exames Trabalhistas",
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
        "Mentorias, Cursos e Treinamentos",
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
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -41.87,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Operações",
        "Energia Elétrica",
        "EDP ESPIRITO SANTO",
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
        "Insumos e Materiais Clínicos",
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
        "Mentorias, Cursos e Treinamentos",
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
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA SILVA",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "RECEITA FEDERAL",
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
        "Rescisões",
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
        "Marketing, Publicidade e Eventos",
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
        "Despesas Pessoais dos Sócios",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1875,
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
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2590.26,
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
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Sup Princesa Búzios",
        -660.93,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Armação dos Búzios",
        -374.1,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Bellas Búzios LT",
        -372.88,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Auto Posto Schueng MIL",
        -304.29,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Iate LTDA",
        -263.94,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Praia de Camburi",
        -209.76,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Espeluncas Bar",
        -108,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Serra",
        -6.1,
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
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -4113.35,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -1111.92,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -997.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -997.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -750,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Elmeco Com Prod ME",
        -714,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -282.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -282.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -237.31,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -229.45,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Computadores e Periféricos",
        "Lenovo Comercial",
        -203.69,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Computadores e Periféricos",
        "Lenovo Comercial",
        -203.69,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -117.23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -117.23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -96.58,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "LaCasaDeco",
        -66.14,
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
        "Salários",
        "HELOYZA ANDRADE ELIODORIO",
        -4950,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "SAMIRA VIEIRA NEVES",
        -3626.71,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "NEUZA FERNANDES MARTINS",
        -1500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Casa do Cloro",
        -281.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Supermercado C",
        -133.59,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Reis e Souza L",
        -121.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Rosa Linda",
        -115,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Farmácia Alian",
        -89.52,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Manutenção de Equipamentos",
        "DLKNET*AC",
        -83.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Forte Embalagens",
        -74.95,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Mironga",
        -63,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Papelaria Renascer",
        -57.7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Supermercado C",
        -52.7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Daniely Aguia Branca",
        -50,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Brindes para Clientes",
        "O Boticário",
        -35.08,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "MP*TaTyDoces Osasco BR",
        -23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Ki-Pastel",
        -20,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Dinomania Lanches",
        -16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Cozinha da Ivone",
        -7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -6883.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -6176.25,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Farmacia Arte",
        -2383.34,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -2083.47,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -1232.4,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Máquinas, Equipamentos e Instalações",
        "Next Segurança Eletr",
        -1206,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -1158.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Benfeitorias no Imóvel",
        "Debora Nunes",
        -1000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -998.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -810.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -639.18,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -606.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Stin Pharma e Comme",
        -592.66,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bionexo",
        -588.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Cirúrgica Barra",
        -509.55,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -424.07,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Cloudia",
        -399.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -320.1,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Conta Azul",
        -305.88,
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
        "01/06/2026",
        "Operações",
        "Pro-labores e Reembolsos",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "ASO - Exames Trabalhistas",
        "Sem cliente",
        -600,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
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
        "EDP ESPIRITO SANTO",
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
        "Insumos e Materiais Clínicos",
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
        "Mentorias, Cursos e Treinamentos",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
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
        "Marketing, Publicidade e Eventos",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA SILVA",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "RECEITA FEDERAL",
        -2876.6,
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
        "Rescisões",
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
        "Marketing, Publicidade e Eventos",
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
        "Despesas Pessoais dos Sócios",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1875,
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
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2590.26,
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
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Sup Princesa Búzios",
        -660.93,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Armação dos Búzios",
        -374.1,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Bellas Búzios LT",
        -372.88,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Auto Posto Schueng MIL",
        -304.29,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Iate LTDA",
        -263.94,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Praia de Camburi",
        -209.76,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Espeluncas Bar",
        -108,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Serra",
        -6.1,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -4113.35,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -1111.92,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -997.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -997.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -750,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Elmeco Com Prod ME",
        -714,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -282.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -282.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -237.31,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -229.45,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Computadores e Periféricos",
        "Lenovo Comercial",
        -203.69,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Computadores e Periféricos",
        "Lenovo Comercial",
        -203.69,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -117.23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -117.23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -96.58,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "LaCasaDeco",
        -66.14,
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
        "Salários",
        "HELOYZA ANDRADE ELIODORIO",
        -4950,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "SAMIRA VIEIRA NEVES",
        -3626.71,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "NEUZA FERNANDES MARTINS",
        -1500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Casa do Cloro",
        -281.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Supermercado C",
        -133.59,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Reis e Souza L",
        -121.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Rosa Linda",
        -115,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Farmácia Alian",
        -89.52,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Manutenção de Equipamentos",
        "DLKNET*AC",
        -83.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Forte Embalagens",
        -74.95,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Mironga",
        -63,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Papelaria Renascer",
        -57.7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Supermercado C",
        -52.7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Daniely Aguia Branca",
        -50,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Brindes para Clientes",
        "O Boticário",
        -35.08,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "MP*TaTyDoces Osasco BR",
        -23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Ki-Pastel",
        -20,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Dinomania Lanches",
        -16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Cozinha da Ivone",
        -7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -6883.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -6176.25,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Farmacia Arte",
        -2383.34,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -2083.47,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -1232.4,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Máquinas, Equipamentos e Instalações",
        "Next Segurança Eletr",
        -1206,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -1158.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Benfeitorias no Imóvel",
        "Debora Nunes",
        -1000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -998.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -810.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -639.18,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -606.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Stin Pharma e Comme",
        -592.66,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bionexo",
        -588.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Cirúrgica Barra",
        -509.55,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -424.07,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Cloudia",
        -399.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -320.1,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Conta Azul",
        -305.88,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -293.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -293.01,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.95,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.8,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.68,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.66,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.65,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.61,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Sarita Scrubs",
        -263.4,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -258.65,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -258.64,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -243.07,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -229.45,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Marilza Moda Intima",
        -212.66,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -174.82,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Cirúrgica Barra",
        -162.3,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -158.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -120.42,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Adapta",
        -99,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.32,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.25,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.2,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.19,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.19,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.19,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.17,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Brindes para Clientes",
        "O Boticário",
        -59.06,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "OpenAI",
        -51.2,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "OpenAI",
        -50.44,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -50.14,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Mercado Livre",
        -43.35,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -39.89,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -33.88,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -3.56,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA SILVA",
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
        "SARA LOPES DA SILVA",
        -705,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA",
        -655,
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
        "22/04/2026",
        "Operações",
        "Salários",
        "BARBÁRA H SAMPÂIO",
        -88,
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
        "Mentorias, Cursos e Treinamentos",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Taxas e Anuidades - Registro Profissional",
        "Sem cliente",
        -948,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Despesas Pessoais dos Sócios",
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
        "Marketing, Publicidade e Eventos",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceuti",
        -2507.04,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -1746.02,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -1165.59,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bionexo",
        -588.9,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Grupo CMD",
        -539.15,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Grupo CMD",
        -507.95,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -502.03,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -423.48,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -308.41,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Amazon BR",
        -282.98,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -282.78,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -240.45,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -229.45,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -228.2,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Computadores e Periféricos",
        "Lenovo Comercial",
        -203.69,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Móveis, Utensílios e Instalações Administrativos",
        "Estok Distribuidora",
        -192.87,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -117.23,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Viagens e Representações",
        "LATAM AIR",
        -113.8,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -96.58,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "LaCasaDeco",
        -66.14,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Software / Licença de Uso",
        "OpenAI",
        -57.33,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "IOF sobre Compras Internacionais",
        "IOF",
        -6.07,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Viagens e Representações",
        "Sem cliente",
        -540,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Sem cliente",
        -150.99,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA SILVA",
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
        "Marketing, Publicidade e Eventos",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "BPO Financeiro",
        "ALIADACONT CONTABILIDADE",
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
        "Serviços de Pessoa Jurídica",
        "Sem cliente",
        -200,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Coleta de Resíduos Ambientais",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -126.72,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -242.66,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -2348.84,
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
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 824667.7800000001,
      "TOTAL_DESPESA": 703681.88,
      "VALOR_LIQUIDO": 120985.90000000014,
      "MARGEM_LIQUIDA": 14.670865399882619,
      "VALOR_LIQ_SERIES": [
        38088.80000000005,
        81412.08999999994,
        -19761.409999999945,
        12684.899999999994,
        23592.37000000001,
        -15030.85,
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
      39126.4,
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
      50369.92000000001,
      30620.679999999997,
      39309.24,
      73310.09000000003,
      18052.569999999996,
      12566.979999999998,
      23519.79,
      18325.15,
      29812.87,
      11245.519999999999,
      15273.63,
      34802.31,
      19661.199999999997,
      23396.24,
      9681.109999999999,
      23230.27,
      2268,
      3075.14,
      3176.74,
      10049.72,
      8631.64,
      34679.31,
      52742.740000000005,
      45875.87999999998,
      0,
      74170.04,
      15130,
      1632.76,
      1035.78,
      2211.56,
      15825.000000000005
    ],
    "SALDOS_MES": [
      38088.80000000005,
      119500.88999999998,
      99739.48000000004,
      112424.38000000003,
      136016.75000000006,
      120985.90000000005,
      120985.90000000005,
      120985.90000000005,
      120985.90000000005,
      120985.90000000005,
      120985.90000000005,
      120985.90000000005
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receitas de Serviços a Identificar",
        "values": [
          131441.84,
          101140.14000000001,
          115192.59000000003,
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
        "cat": "Insumos e Materiais Clínicos",
        "values": [
          -12398.14,
          -19349.97,
          -92413.21999999997,
          -26106.140000000003,
          -49001.99000000001,
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
          -13200,
          -17204.75,
          -34129.96,
          -15830.75,
          -3134.71,
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
          -20430.08,
          -18096.03,
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
          -17979.15,
          -8985.39,
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
        "cat": "Marketing, Publicidade e Eventos",
        "values": [
          -4100,
          -5600,
          -22948.510000000002,
          -14895.67,
          -9757.080000000002,
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
        "d1": 524395.9999999999,
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
        "d1": 347774.56999999983,
        "d2": 257500.44
      },
      {
        "tipo": "Receitas a Identificar",
        "parent": "Receita",
        "d1": 1596.03,
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
        "d1": -424656.5200000005,
        "d2": -279025.36
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -92.55000000000001,
        "d2": -92.55000000000001
      },
      {
        "tipo": "Lanches, Refeições e Supermercados",
        "parent": "Despesa",
        "d1": -4530.24,
        "d2": -1160.75
      },
      {
        "tipo": "Materiais  de Uso e Consumo",
        "parent": "Despesa",
        "d1": -7620.6900000000005,
        "d2": -3624.549999999999
      },
      {
        "tipo": "Insumos e Materiais Clínicos",
        "parent": "Despesa",
        "d1": -124161.32999999999,
        "d2": -75108.13000000003
      },
      {
        "tipo": "Brindes para Clientes",
        "parent": "Despesa",
        "d1": -1156.3099999999997,
        "d2": -259.02
      },
      {
        "tipo": "Marketing, Publicidade e Eventos",
        "parent": "Despesa",
        "d1": -32648.51000000001,
        "d2": -24652.75
      },
      {
        "tipo": "Serviços de Pessoa Jurídica",
        "parent": "Despesa",
        "d1": -6107,
        "d2": -346
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": -688.7099999999999,
        "d2": -414.3
      },
      {
        "tipo": "Honorários Contábeis",
        "parent": "Despesa",
        "d1": -4892.6,
        "d2": -4112.6
      },
      {
        "tipo": "Software / Licença de Uso",
        "parent": "Despesa",
        "d1": -6401.639999999999,
        "d2": -3646.35
      },
      {
        "tipo": "Serviços e Materiais de Limpeza e de Higiene",
        "parent": "Despesa",
        "d1": -1078.66,
        "d2": -3461.12
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": -409.91999999999996,
        "d2": -244.8
      },
      {
        "tipo": "Despesas Pessoais dos Sócios",
        "parent": "Despesa",
        "d1": -299.70000000000005,
        "d2": -199.8
      },
      {
        "tipo": "ASO - Exames Trabalhistas",
        "parent": "Despesa",
        "d1": -50,
        "d2": -600
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": -32875.380000000005,
        "d2": -26964.54
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": -2133.85,
        "d2": -1291.37
      },
      {
        "tipo": "Rescisões",
        "parent": "Despesa",
        "d1": -880,
        "d2": -3713.91
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
        "tipo": "Mentorias, Cursos e Treinamentos",
        "parent": "Despesa",
        "d1": -64534.71,
        "d2": -18965.46
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
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": -33926.67,
        "d2": -38526.11
      },
      {
        "tipo": "Outras Despesas Administrativas",
        "parent": "Despesa",
        "d1": -171,
        "d2": 0
      },
      {
        "tipo": "Benfeitorias no Imóvel",
        "parent": "Despesa",
        "d1": -7450.000000000001,
        "d2": -1000
      },
      {
        "tipo": "Móveis, Utensílios e Instalações Administrativos",
        "parent": "Despesa",
        "d1": -1975.58,
        "d2": -700.77
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
        "tipo": "Máquinas, Equipamentos e Instalações",
        "parent": "Despesa",
        "d1": -2412,
        "d2": -1206
      },
      {
        "tipo": "Viagens e Representações",
        "parent": "Despesa",
        "d1": -616.9499999999999,
        "d2": -2938.2000000000003
      },
      {
        "tipo": "Combustíveis",
        "parent": "Despesa",
        "d1": -177,
        "d2": 0
      },
      {
        "tipo": "Computadores e Periféricos",
        "parent": "Despesa",
        "d1": -203.69,
        "d2": -814.76
      },
      {
        "tipo": "BPO Financeiro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4800
      },
      {
        "tipo": "IOF sobre Compras Internacionais",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6.07
      },
      {
        "tipo": "Taxas e Anuidades - Registro Profissional",
        "parent": "Despesa",
        "d1": 0,
        "d2": -948
      },
      {
        "tipo": "Manutenção de Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -83.5
      },
      {
        "tipo": "Troco",
        "parent": "Despesa",
        "d1": 0,
        "d2": -26
      },
      {
        "tipo": "Pro-labores e Reembolsos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -15000
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
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 321170.8,
        "despesa": 0
      },
      {
        "m": "abril",
        "receita": 60064.75,
        "despesa": 0
      },
      {
        "m": "maio",
        "receita": 63885.03999999999,
        "despesa": 0
      },
      {
        "m": "junho",
        "receita": 8585.84,
        "despesa": 4759.74
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
        "value": 186544.88999999998,
        "clientes": 27
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 126473.84999999999,
        "clientes": 14
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 71791.25,
        "clientes": 21
      },
      {
        "name": "Implantes",
        "value": 18978.339999999997,
        "clientes": 7
      },
      {
        "name": "Injetaveis",
        "value": 18946.75,
        "clientes": 12
      },
      {
        "name": "Adicional de Tizerpatida",
        "value": 14520.84,
        "clientes": 12
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
        "name": "Marketing, Publicidade e Eventos",
        "value": 4100,
        "fornecedores": 2
      },
      {
        "name": "Plano de Saúde Colaboradores",
        "value": 260,
        "fornecedores": 1
      },
      {
        "name": "Telefonia e Internet",
        "value": 214.8,
        "fornecedores": 1
      },
      {
        "name": "Viagens e Representações",
        "value": 184.94,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "ÉRICA RODRIGUES LIMA BOECHAT",
        "value": 22074
      },
      {
        "name": "MONICA DE OLIVEIRA SILVA FERNANDES",
        "value": 20450
      },
      {
        "name": "LETICIA BATISTA DE MORAES",
        "value": 18411.5
      },
      {
        "name": "ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",
        "value": 16050
      },
      {
        "name": "MARLY MARIA ANDRADE DE LAIA",
        "value": 15388
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 13940
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
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 2100
      },
      {
        "name": "RADIO SAO FRANCISCO LTDA",
        "value": 2000
      },
      {
        "name": "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        "value": 260
      },
      {
        "name": "BIZZ INTERNET LTDA",
        "value": 214.8
      },
      {
        "name": "Sem cliente",
        "value": 184.94
      }
    ],
    "EXTRATO": [
      [
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3600,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "ATRASADO"
      ],
      [
        "07/06/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Viagens e Representações",
        "Sem cliente",
        -184.94,
        "ATRASADO"
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
        "28/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "MARLY MARIA ANDRADE DE LAIA",
        1800,
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
        "26/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MAYKE CORREIA DE SOUZA",
        2806.5,
        "ATRASADO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "LETICIA BATISTA DE MORAES",
        2806.5,
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
        "25/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ISABELA CRISTINA FANTI",
        2808,
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
        "21/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ANTONIO PEREIRA DE ARAUJO",
        1380,
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
        "18/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        1000,
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
        "11/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "KEILA SOARES RODRIGUES MONTEIRO",
        5460,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        1000,
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
        "Receita de Serviços - Plano Bronze",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        1274,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        2330,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        3900,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Implantes",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        4500,
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
        "06/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        380,
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
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        1000,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ZILDA MARIA MAIA DE CARVALHO",
        5000,
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
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
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
    "EXTRATO_RECEITAS": [
      [
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3600,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "ATRASADO"
      ],
      [
        "07/06/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "ATRASADO"
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
        "28/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "MARLY MARIA ANDRADE DE LAIA",
        1800,
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
        "26/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MAYKE CORREIA DE SOUZA",
        2806.5,
        "ATRASADO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "LETICIA BATISTA DE MORAES",
        2806.5,
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
        "25/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ISABELA CRISTINA FANTI",
        2808,
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
        "21/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ANTONIO PEREIRA DE ARAUJO",
        1380,
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
        "18/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        1000,
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
        "11/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "KEILA SOARES RODRIGUES MONTEIRO",
        5460,
        "ATRASADO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        1000,
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
        "Receita de Serviços - Plano Bronze",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        1274,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        2330,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        3900,
        "ATRASADO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Implantes",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        4500,
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
        "06/05/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        380,
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
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        1000,
        "ATRASADO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ZILDA MARIA MAIA DE CARVALHO",
        5000,
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
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
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
        "06/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Viagens e Representações",
        "Sem cliente",
        -184.94,
        "ATRASADO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 456528.43,
      "TOTAL_DESPESA": 4759.74,
      "VALOR_LIQUIDO": 451768.69,
      "MARGEM_LIQUIDA": 98.9574055661769,
      "VALOR_LIQ_SERIES": [
        1330,
        1492,
        321170.8,
        60064.75,
        63885.03999999999,
        3826.1000000000004,
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
      1626,
      9405.25,
      2525.17,
      4248.67,
      16704,
      185,
      642,
      16405,
      650,
      385,
      0,
      350,
      700,
      0,
      1075,
      150,
      0,
      1590,
      0,
      50,
      0,
      4058,
      7008,
      0,
      1800,
      0,
      66137.54,
      316933.8
    ],
    "DESPESA_DIA": [
      0,
      0,
      0,
      0,
      2444.94,
      2314.8,
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
      0,
      0,
      0,
      0,
      0
    ],
    "SALDOS_MES": [
      1330,
      2822,
      323992.8,
      384057.55,
      447942.58999999997,
      451768.68999999994,
      451768.68999999994,
      451768.68999999994,
      451768.68999999994,
      451768.68999999994,
      451768.68999999994,
      451768.68999999994
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          0,
          0,
          146962.72999999998,
          7786.91,
          31105.25,
          690,
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
          3544.67,
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
          10816.2,
          3600,
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
          8700,
          1748.34,
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
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Marketing, Publicidade e Eventos",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -4100,
          0,
          0,
          0,
          0,
          0,
          0
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
          0,
          0,
          0,
          0,
          0,
          0
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
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "Viagens e Representações",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -184.94,
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
        "d2": 132535.63
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
        "d2": 15696.2
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 146962.72999999998,
        "d2": 39582.16
      },
      {
        "tipo": "Receita de Serviços - Plano Diamante",
        "parent": "Receita",
        "d1": 87964.51,
        "d2": 38509.34
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
        "d2": 14348.34
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
        "d2": 14520.84
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
        "d2": -4759.74
      },
      {
        "tipo": "Marketing, Publicidade e Eventos",
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
        "tipo": "Viagens e Representações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -184.94
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": 0,
        "d2": -214.8
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
        "receita": 20240.53,
        "despesa": 0
      },
      {
        "m": "julho",
        "receita": 18657.710000000003,
        "despesa": 4574.799999999999
      },
      {
        "m": "agosto",
        "receita": 17957.710000000003,
        "despesa": 4574.799999999999
      },
      {
        "m": "setembro",
        "receita": 14313.94,
        "despesa": 4574.799999999999
      },
      {
        "m": "outubro",
        "receita": 10997.789999999999,
        "despesa": 4574.799999999999
      },
      {
        "m": "novembro",
        "receita": 10372.75,
        "despesa": 4574.799999999999
      },
      {
        "m": "dezembro",
        "receita": 6743.2,
        "despesa": 4574.799999999999
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 49244.5,
        "clientes": 7
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 14399.400000000001,
        "clientes": 4
      },
      {
        "name": "Adicional de Tizerpatida",
        "value": 9619.16,
        "clientes": 7
      },
      {
        "name": "Implantes",
        "value": 8741.66,
        "clientes": 4
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 8658.66,
        "clientes": 1
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
        "name": "Marketing, Publicidade e Eventos",
        "value": 24600,
        "fornecedores": 2
      },
      {
        "name": "Plano de Saúde Colaboradores",
        "value": 1560,
        "fornecedores": 1
      },
      {
        "name": "Telefonia e Internet",
        "value": 1288.8000000000002,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 14825
      },
      {
        "name": "MARIA DA PENHA MOURA ROSA",
        "value": 12794.599999999999
      },
      {
        "name": "MARILZA DE AGUIAR DIAS",
        "value": 9487.5
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
        "name": "NATALIA PEREIRA MARTINS SILVA",
        "value": 6919
      },
      {
        "name": "ESTER DE ALMEIDA SANTANA",
        "value": 5833.33
      },
      {
        "name": "NARLA MARQUES",
        "value": 4408.33
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
        "name": "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        "value": 3620.3999999999996
      },
      {
        "name": "NAZARETH ALVES DE ARAÚJO",
        "value": 3125
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 12600
      },
      {
        "name": "RADIO SAO FRANCISCO LTDA",
        "value": 12000
      },
      {
        "name": "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        "value": 1560
      },
      {
        "name": "BIZZ INTERNET LTDA",
        "value": 1288.8000000000002
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
        "27/04/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "27/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/03/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/02/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/01/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/12/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "25/11/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/11/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.65,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        4700,
        "A_PAGAR"
      ],
      [
        "25/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "27/04/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "27/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/03/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/02/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/01/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/12/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "25/11/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/11/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.65,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
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
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
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
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
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
        "27/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
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
        "27/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
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
        "27/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        4700,
        "A_PAGAR"
      ],
      [
        "25/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "06/12/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 99283.63,
      "TOTAL_DESPESA": 27448.799999999996,
      "VALOR_LIQUIDO": 71834.83000000002,
      "MARGEM_LIQUIDA": 72.35314623367418,
      "VALOR_LIQ_SERIES": [
        0,
        0,
        0,
        0,
        0,
        20240.53,
        14082.910000000003,
        13382.910000000003,
        9739.140000000001,
        6422.99,
        5797.950000000001,
        2168.4000000000005
      ]
    },
    "RECEITA_DIA": [
      0,
      0,
      0,
      0,
      0,
      7763.83,
      4408.33,
      4540,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      600,
      0,
      0,
      0,
      1900,
      625,
      1250,
      1638,
      1581.25,
      15062.5,
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
      13560,
      13888.799999999996,
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
      20240.53,
      34323.44,
      47706.350000000006,
      57445.490000000005,
      63868.48,
      69666.43000000001,
      71834.83
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
          9762.25,
          7252.25,
          7252.25,
          6952.25,
          6952.25,
          6327.25,
          4746
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
        "cat": "Adicional de Tizerpatida",
        "values": [
          0,
          0,
          0,
          0,
          0,
          1860.6599999999999,
          2285.5,
          1885.5,
          1885.5,
          734,
          734,
          234
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
          300,
          2048.34,
          1748.34,
          1548.34,
          1548.34,
          1548.3,
          0
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
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Marketing, Publicidade e Eventos",
        "values": [
          0,
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
          0,
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
          0,
          -214.8,
          -214.8,
          -214.8,
          -214.8,
          -214.8,
          -214.8
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 0,
        "d2": 20240.53
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
        "d2": 9762.25
      },
      {
        "tipo": "Adicional de Tizerpatida",
        "parent": "Receita",
        "d1": 0,
        "d2": 1860.6599999999999
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
        "tipo": "Implantes",
        "parent": "Receita",
        "d1": 0,
        "d2": 300
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
        "d2": 0
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
        "despesa": 72817.92000000001
      },
      {
        "m": "março",
        "receita": 500384.64999999997,
        "despesa": 198975.26
      },
      {
        "m": "abril",
        "receita": 217433.62,
        "despesa": 144683.96999999997
      },
      {
        "m": "maio",
        "receita": 206787.95000000004,
        "despesa": 119310.54000000002
      },
      {
        "m": "junho",
        "receita": 28826.370000000003,
        "despesa": 19790.59
      },
      {
        "m": "julho",
        "receita": 18657.710000000003,
        "despesa": 4574.799999999999
      },
      {
        "m": "agosto",
        "receita": 17957.710000000003,
        "despesa": 4574.799999999999
      },
      {
        "m": "setembro",
        "receita": 14313.94,
        "despesa": 4574.799999999999
      },
      {
        "m": "outubro",
        "receita": 10997.789999999999,
        "despesa": 4574.799999999999
      },
      {
        "m": "novembro",
        "receita": 10372.75,
        "despesa": 4574.799999999999
      },
      {
        "m": "dezembro",
        "receita": 6743.2,
        "despesa": 4574.799999999999
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receitas de Serviços a Identificar",
        "value": 605275.0100000001,
        "clientes": 16
      },
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 337494.02,
        "clientes": 33
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 155985.68000000002,
        "clientes": 14
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 134312.65000000002,
        "clientes": 31
      },
      {
        "name": "Implantes",
        "value": 31619.999999999985,
        "clientes": 7
      },
      {
        "name": "Adicional de Tizerpatida",
        "value": 30383.999999999996,
        "clientes": 16
      },
      {
        "name": "Injetaveis",
        "value": 29906.9,
        "clientes": 19
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
        "name": "Insumos e Materiais Clínicos",
        "value": 199269.46,
        "fornecedores": 33
      },
      {
        "name": "Marketing, Publicidade e Eventos",
        "value": 86001.26000000001,
        "fornecedores": 6
      },
      {
        "name": "Mentorias, Cursos e Treinamentos",
        "value": 83500.17,
        "fornecedores": 8
      },
      {
        "name": "Salários",
        "value": 72452.78,
        "fornecedores": 7
      },
      {
        "name": "ISS",
        "value": 59839.920000000006,
        "fornecedores": 2
      },
      {
        "name": "IRPJ E CSLL",
        "value": 54193.020000000004,
        "fornecedores": 1
      },
      {
        "name": "Pis/Cofins",
        "value": 52559.200000000004,
        "fornecedores": 1
      },
      {
        "name": "INSS sobre Salários - GPS",
        "value": 18615.829999999998,
        "fornecedores": 2
      },
      {
        "name": "Pro-labores e Reembolsos",
        "value": 15000,
        "fornecedores": 1
      },
      {
        "name": "Materiais  de Uso e Consumo",
        "value": 11245.240000000002,
        "fornecedores": 28
      },
      {
        "name": "Software / Licença de Uso",
        "value": 10047.989999999998,
        "fornecedores": 10
      },
      {
        "name": "Honorários Contábeis",
        "value": 9005.2,
        "fornecedores": 2
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "Sem cliente",
        "value": 555314.7100000001
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 33225
      },
      {
        "name": "ISABELA CRISTINA FANTI",
        "value": 31436
      },
      {
        "name": "ÉRICA RODRIGUES LIMA BOECHAT",
        "value": 22292
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
        "name": "ZILDA MARIA MAIA DE CARVALHO",
        "value": 18970
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "Sem cliente",
        "value": 125614.19000000002
      },
      {
        "name": "RECEITA FEDERAL",
        "value": 122472.52
      },
      {
        "name": "O MEDICO EMPRESARIO LTDA",
        "value": 52184.75
      },
      {
        "name": "Unikka Pharma",
        "value": 48491.100000000006
      },
      {
        "name": "Bio Meds Pharmaceutics",
        "value": 46872.67
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
        "name": "Bios Farmacêutica",
        "value": 15758.42
      },
      {
        "name": "Facebook",
        "value": 15331.260000000002
      },
      {
        "name": "SAMIRA VIEIRA NEVES",
        "value": 15296.130000000001
      },
      {
        "name": "Bio Meds Pharmaceuti",
        "value": 15000
      },
      {
        "name": "HELOYZA ANDRADE ELIODORIO",
        "value": 14340
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
        "27/04/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "27/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/03/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/02/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/01/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/12/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "25/11/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/11/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.65,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "27/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        4700,
        "A_PAGAR"
      ],
      [
        "25/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3600,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "ATRASADO"
      ],
      [
        "07/06/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Viagens e Representações",
        "Sem cliente",
        -184.94,
        "ATRASADO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Pro-labores e Reembolsos",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
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
        "27/04/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "27/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/03/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/03/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/02/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/02/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/01/2027",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/01/2027",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/12/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/12/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
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
        "27/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
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
        "25/11/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
        "A_PAGAR"
      ],
      [
        "08/11/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/11/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.65,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
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
        "27/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/10/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/10/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
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
        "27/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/09/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "07/09/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
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
        "27/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/08/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/08/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
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
        "27/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        1200,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "18/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        300,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "A_PAGAR"
      ],
      [
        "08/07/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "A_PAGAR"
      ],
      [
        "07/07/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
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
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
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
        "27/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        4700,
        "A_PAGAR"
      ],
      [
        "25/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARIA DA PENHA MOURA ROSA",
        234,
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
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3600,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NATALIA PEREIRA MARTINS SILVA",
        690,
        "ATRASADO"
      ],
      [
        "08/06/2026",
        "Operações",
        "Implantes",
        "NUBIA SILVA AMARAL STOHEL",
        200,
        "ATRASADO"
      ],
      [
        "07/06/2026",
        "Operações",
        "Implantes",
        "NARLA MARQUES",
        881.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Implantes",
        "ESTER DE ALMEIDA SANTANA",
        666.67,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ESTER DE ALMEIDA SANTANA",
        500,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "ANA PAULA COELHO PORTES MATTOS",
        643.5,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Adicional de Tizerpatida",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "ATRASADO"
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
        "28/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "MARLY MARIA ANDRADE DE LAIA",
        1800,
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
        "26/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MAYKE CORREIA DE SOUZA",
        2806.5,
        "ATRASADO"
      ],
      [
        "26/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "LETICIA BATISTA DE MORAES",
        2806.5,
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
        "Adicional de Tizerpatida",
        "ISABELA CRISTINA FANTI",
        2808,
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
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "06/12/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "Marketing, Publicidade e Eventos",
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
        "06/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "ATRASADO"
      ],
      [
        "06/06/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "ATRASADO"
      ],
      [
        "05/06/2026",
        "Operações",
        "Viagens e Representações",
        "Sem cliente",
        -184.94,
        "ATRASADO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Pro-labores e Reembolsos",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Operações",
        "ASO - Exames Trabalhistas",
        "Sem cliente",
        -600,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Operações",
        "Mentorias, Cursos e Treinamentos",
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
        "EDP ESPIRITO SANTO",
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
        "Insumos e Materiais Clínicos",
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
        "Mentorias, Cursos e Treinamentos",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
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
        "Marketing, Publicidade e Eventos",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA SILVA",
        -412,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "RECEITA FEDERAL",
        -2876.6,
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
        "Rescisões",
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
        "Marketing, Publicidade e Eventos",
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
        "Despesas Pessoais dos Sócios",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -1875,
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
        "Insumos e Materiais Clínicos",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2590.26,
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
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Sup Princesa Búzios",
        -660.93,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Armação dos Búzios",
        -374.1,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Bellas Búzios LT",
        -372.88,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Auto Posto Schueng MIL",
        -304.29,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Iate LTDA",
        -263.94,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Posto Praia de Camburi",
        -209.76,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Espeluncas Bar",
        -108,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Viagens e Representações",
        "Serra",
        -6.1,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -4113.35,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -1111.92,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -997.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -997.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Drogasil",
        -750,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Elmeco Com Prod ME",
        -714,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -282.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -282.78,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -237.31,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -229.45,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Computadores e Periféricos",
        "Lenovo Comercial",
        -203.69,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Computadores e Periféricos",
        "Lenovo Comercial",
        -203.69,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bot Conversa",
        -129,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -117.23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Injetáveis",
        -117.23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -96.58,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "LaCasaDeco",
        -66.14,
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
        "Salários",
        "HELOYZA ANDRADE ELIODORIO",
        -4950,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "SAMIRA VIEIRA NEVES",
        -3626.71,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Salários",
        "NEUZA FERNANDES MARTINS",
        -1500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Casa do Cloro",
        -281.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Supermercado C",
        -133.59,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Reis e Souza L",
        -121.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Rosa Linda",
        -115,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Farmácia Alian",
        -89.52,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Manutenção de Equipamentos",
        "DLKNET*AC",
        -83.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Forte Embalagens",
        -74.95,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Mironga",
        -63,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Materiais  de Uso e Consumo",
        "Papelaria Renascer",
        -57.7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Supermercado C",
        -52.7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Daniely Aguia Branca",
        -50,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Brindes para Clientes",
        "O Boticário",
        -35.08,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "MP*TaTyDoces Osasco BR",
        -23,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Ki-Pastel",
        -20,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Dinomania Lanches",
        -16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Lanches, Refeições e Supermercados",
        "Cozinha da Ivone",
        -7,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -6883.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -6176.25,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Farmacia Arte",
        -2383.34,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -2083.47,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -1232.4,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Máquinas, Equipamentos e Instalações",
        "Next Segurança Eletr",
        -1206,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bios Farmacêutica",
        -1158.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Benfeitorias no Imóvel",
        "Debora Nunes",
        -1000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -998.85,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -810.46,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceutics",
        -639.18,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -606.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Stin Pharma e Comme",
        -592.66,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Bionexo",
        -588.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Cirúrgica Barra",
        -509.55,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -424.07,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Cloudia",
        -399.9,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -320.1,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Conta Azul",
        -305.88,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -293.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -293.01,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.95,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.93,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.8,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.68,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.66,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.65,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -292.61,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Sarita Scrubs",
        -263.4,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -258.65,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -258.64,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -243.07,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Central Farma",
        -229.45,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "Marilza Moda Intima",
        -212.66,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -174.82,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Cirúrgica Barra",
        -162.3,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Magazine Med",
        -158.5,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -120.42,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "Adapta",
        -99,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.32,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.25,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.24,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.2,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.19,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.19,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.19,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.17,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -67.16,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Brindes para Clientes",
        "O Boticário",
        -59.06,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "OpenAI",
        -51.2,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Software / Licença de Uso",
        "OpenAI",
        -50.44,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -50.14,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Mercado Livre",
        -43.35,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -39.89,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -33.88,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Marketing, Publicidade e Eventos",
        "Facebook",
        -3.56,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA SILVA",
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
        "SARA LOPES DA SILVA",
        -705,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Operações",
        "Serviços e Materiais de Limpeza e de Higiene",
        "SIDIANARA RODRIGUES DE SOUZA",
        -655,
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
        "22/04/2026",
        "Operações",
        "Salários",
        "BARBÁRA H SAMPÂIO",
        -88,
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
        "Mentorias, Cursos e Treinamentos",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Operações",
        "Taxas e Anuidades - Registro Profissional",
        "Sem cliente",
        -948,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Despesas Pessoais dos Sócios",
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
        "Marketing, Publicidade e Eventos",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Unikka Pharma",
        -3435.86,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Insumos e Materiais Clínicos",
        "Bio Meds Pharmaceuti",
        -2507.04,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 1380479.8399999999,
      "TOTAL_DESPESA": 735890.4200000003,
      "VALOR_LIQUIDO": 644589.4199999996,
      "MARGEM_LIQUIDA": 46.69314258149541,
      "VALOR_LIQ_SERIES": [
        39418.80000000005,
        82904.08999999994,
        301409.38999999996,
        72749.65000000002,
        87477.41000000002,
        9035.780000000002,
        14082.910000000003,
        13382.910000000003,
        9739.140000000001,
        6422.99,
        5797.950000000001,
        2168.4000000000005
      ]
    },
    "RECEITA_DIA": [
      10849.33,
      43822.840000000004,
      10318.26,
      39376.47,
      58643.810000000005,
      64810.090000000004,
      26408.209999999992,
      44342.01,
      23872.87,
      35526.049999999996,
      55531.4,
      39135.990000000005,
      21201.890000000003,
      2598.89,
      11304.5,
      16010.679999999998,
      14157.35,
      34394.97,
      42894.04,
      33940.450000000004,
      20177.670000000002,
      19845.7,
      54935.86000000001,
      29900.789999999994,
      18888.03,
      42347.149999999994,
      59845.94,
      20704.120000000003,
      18662.36,
      139706.38,
      326325.74000000005
    ],
    "DESPESA_DIA": [
      50369.92000000001,
      30620.679999999997,
      39309.24,
      73310.09000000003,
      34057.509999999995,
      28770.580000000016,
      23519.79,
      18325.15,
      29812.87,
      11245.519999999999,
      15273.63,
      34802.31,
      19661.199999999997,
      23396.24,
      9681.109999999999,
      23230.27,
      2268,
      3075.14,
      3176.74,
      10049.72,
      8631.64,
      34679.31,
      52742.740000000005,
      45875.87999999998,
      0,
      74170.04,
      15130,
      1632.76,
      1035.78,
      2211.56,
      15825.000000000005
    ],
    "SALDOS_MES": [
      39418.80000000005,
      122322.88999999998,
      423732.2799999999,
      496481.92999999993,
      583959.34,
      592995.12,
      607078.03,
      620460.9400000001,
      630200.0800000001,
      636623.0700000001,
      642421.02,
      644589.42
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receitas de Serviços a Identificar",
        "values": [
          131441.84,
          101140.14000000001,
          115192.59000000003,
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
          31105.25,
          10452.25,
          7252.25,
          7252.25,
          6952.25,
          6952.25,
          6327.25,
          4746
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Diamante",
        "values": [
          0,
          15468.17,
          92954.51,
          35359.67,
          3544.67,
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
          14716.2,
          6882.2,
          2826.2,
          2826.2,
          1366.2,
          1366.2,
          1366.2,
          1366.2
        ]
      },
      {
        "cat": "Implantes",
        "values": [
          0,
          0,
          4630,
          3900,
          12600,
          2048.34,
          2048.34,
          1748.34,
          1548.34,
          1548.34,
          1548.3,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "Insumos e Materiais Clínicos",
        "values": [
          -12398.14,
          -19349.97,
          -92413.21999999997,
          -26106.140000000003,
          -49001.99000000001,
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
        "cat": "Marketing, Publicidade e Eventos",
        "values": [
          -4100,
          -5600,
          -22948.510000000002,
          -14895.67,
          -9757.080000000002,
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
        "cat": "Mentorias, Cursos e Treinamentos",
        "values": [
          -13200,
          -17204.75,
          -34129.96,
          -15830.75,
          -3134.71,
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
          -20430.08,
          -18096.03,
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
          -17979.15,
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
        "d1": 848388.7999999998,
        "d2": 453047.94000000006
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
        "d1": 347774.56999999983,
        "d2": 257500.44
      },
      {
        "tipo": "Receitas a Identificar",
        "parent": "Receita",
        "d1": 1596.03,
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
        "d2": 61904.41
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
        "d2": 27962.4
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
        "d2": 41069.009999999995
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
        "d2": 21085.5
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
        "d2": 18548.339999999997
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
        "d1": -424656.5200000005,
        "d2": -283785.10000000003
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -92.55000000000001,
        "d2": -92.55000000000001
      },
      {
        "tipo": "Lanches, Refeições e Supermercados",
        "parent": "Despesa",
        "d1": -4530.24,
        "d2": -1160.75
      },
      {
        "tipo": "Materiais  de Uso e Consumo",
        "parent": "Despesa",
        "d1": -7620.6900000000005,
        "d2": -3624.549999999999
      },
      {
        "tipo": "Insumos e Materiais Clínicos",
        "parent": "Despesa",
        "d1": -124161.32999999999,
        "d2": -75108.13000000003
      },
      {
        "tipo": "Brindes para Clientes",
        "parent": "Despesa",
        "d1": -1156.3099999999997,
        "d2": -259.02
      },
      {
        "tipo": "Marketing, Publicidade e Eventos",
        "parent": "Despesa",
        "d1": -32648.51000000001,
        "d2": -28752.75
      },
      {
        "tipo": "Serviços de Pessoa Jurídica",
        "parent": "Despesa",
        "d1": -6107,
        "d2": -346
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": -688.7099999999999,
        "d2": -629.1
      },
      {
        "tipo": "Honorários Contábeis",
        "parent": "Despesa",
        "d1": -4892.6,
        "d2": -4112.6
      },
      {
        "tipo": "Software / Licença de Uso",
        "parent": "Despesa",
        "d1": -6401.639999999999,
        "d2": -3646.35
      },
      {
        "tipo": "Serviços e Materiais de Limpeza e de Higiene",
        "parent": "Despesa",
        "d1": -1078.66,
        "d2": -3461.12
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": -409.91999999999996,
        "d2": -244.8
      },
      {
        "tipo": "Despesas Pessoais dos Sócios",
        "parent": "Despesa",
        "d1": -299.70000000000005,
        "d2": -199.8
      },
      {
        "tipo": "ASO - Exames Trabalhistas",
        "parent": "Despesa",
        "d1": -50,
        "d2": -600
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": -32875.380000000005,
        "d2": -26964.54
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": -2133.85,
        "d2": -1291.37
      },
      {
        "tipo": "Rescisões",
        "parent": "Despesa",
        "d1": -880,
        "d2": -3713.91
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
        "tipo": "Mentorias, Cursos e Treinamentos",
        "parent": "Despesa",
        "d1": -64534.71,
        "d2": -18965.46
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
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": -33926.67,
        "d2": -38526.11
      },
      {
        "tipo": "Outras Despesas Administrativas",
        "parent": "Despesa",
        "d1": -171,
        "d2": 0
      },
      {
        "tipo": "Benfeitorias no Imóvel",
        "parent": "Despesa",
        "d1": -7450.000000000001,
        "d2": -1000
      },
      {
        "tipo": "Móveis, Utensílios e Instalações Administrativos",
        "parent": "Despesa",
        "d1": -1975.58,
        "d2": -700.77
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
        "tipo": "Máquinas, Equipamentos e Instalações",
        "parent": "Despesa",
        "d1": -2412,
        "d2": -1206
      },
      {
        "tipo": "Viagens e Representações",
        "parent": "Despesa",
        "d1": -616.9499999999999,
        "d2": -3123.1400000000003
      },
      {
        "tipo": "Combustíveis",
        "parent": "Despesa",
        "d1": -177,
        "d2": 0
      },
      {
        "tipo": "Computadores e Periféricos",
        "parent": "Despesa",
        "d1": -203.69,
        "d2": -814.76
      },
      {
        "tipo": "BPO Financeiro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4800
      },
      {
        "tipo": "IOF sobre Compras Internacionais",
        "parent": "Despesa",
        "d1": 0,
        "d2": -6.07
      },
      {
        "tipo": "Taxas e Anuidades - Registro Profissional",
        "parent": "Despesa",
        "d1": 0,
        "d2": -948
      },
      {
        "tipo": "Manutenção de Equipamentos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -83.5
      },
      {
        "tipo": "Troco",
        "parent": "Despesa",
        "d1": 0,
        "d2": -26
      },
      {
        "tipo": "Pro-labores e Reembolsos",
        "parent": "Despesa",
        "d1": 0,
        "d2": -15000
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
const ALL_TX = [["r","2026-01",2,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","c"],["r","2026-01",2,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",1967.8,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",1967.8,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",7887.67,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",7887.67,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2000,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2000,1,"","","k"],["r","2026-01",5,"Receitas a Identificar","Sem cliente",260,1,"","","c"],["r","2026-01",5,"Receitas a Identificar","Sem cliente",260,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","SIMONE ALVES DE SÁ GOMES ASSIS",1021.37,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","SIMONE ALVES DE SÁ GOMES ASSIS",1021.37,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2404.87,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2404.87,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",4630.48,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",4630.48,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",6924.37,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",6924.37,1,"","","k"],["r","2026-01",5,"Suplementos","LEILA DA SILVA DE SOUZA COELHO",75,2,"","","c"],["r","2026-04",30,"Suplementos","LEILA DA SILVA DE SOUZA COELHO",75,2,"","","k"],["r","2026-01",5,"Suplementos","KAIKE PIOL",75,2,"","","c"],["r","2026-04",30,"Suplementos","KAIKE PIOL",75,2,"","","k"],["r","2026-01",6,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1500,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",1178.63,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",1178.63,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-01",6,"Suplementos","ANA PAULA COELHO PORTES MATTOS",75,2,"","","c"],["r","2026-04",30,"Suplementos","ANA PAULA COELHO PORTES MATTOS",75,2,"","","k"],["r","2026-01",7,"Suplementos","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","c"],["r","2026-04",30,"Suplementos","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","k"],["r","2026-01",7,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",75,1,"","","c"],["r","2026-04",30,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",75,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","HAYANE SILVA VALARDAO",1500,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","HAYANE SILVA VALARDAO",1500,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",3042.7,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",3042.7,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",300.32,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",300.32,1,"","","k"],["r","2026-01",8,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1178.63,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1178.63,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",3666,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",3666,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",1761.19,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",1761.19,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",2275.11,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",2275.11,1,"","","k"],["r","2026-01",8,"Suplementos","LAYLA TEIXEIRA BARBOSA COSTA",135,2,"","","c"],["r","2026-04",30,"Suplementos","LAYLA TEIXEIRA BARBOSA COSTA",135,2,"","","k"],["r","2026-01",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-01",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",992.1,1,"","","c"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",992.1,1,"","","k"],["r","2026-01",12,"Suplementos","EDUARDA CORREA PILKER",75,1,"","","c"],["r","2026-04",30,"Suplementos","EDUARDA CORREA PILKER",75,1,"","","k"],["r","2026-01",12,"Consulta","DORIETE DE SOUZA",500,1,"","","c"],["r","2026-04",30,"Consulta","DORIETE DE SOUZA",500,1,"","","k"],["r","2026-01",12,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","c"],["r","2026-01",12,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",500,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",500,1,"","","k"],["r","2026-01",12,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","k"],["r","2026-01",12,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",6000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",6000,1,"","","k"],["r","2026-01",12,"Descontos financeiros obtidos","Sem cliente",1085,1,"","","c"],["r","2026-01",12,"Descontos financeiros obtidos","Sem cliente",1085,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",1000.22,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",1000.22,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",249.5,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",249.5,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",376.32,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",376.32,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",4777.33,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",4777.33,1,"","","k"],["r","2026-01",13,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-01",13,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",494.88,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",494.88,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",490.21,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",490.21,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","k"],["r","2026-01",13,"Suplementos","NAZARETH ALVES DE ARAÚJO",185,2,"","","c"],["r","2026-04",30,"Suplementos","NAZARETH ALVES DE ARAÚJO",185,2,"","","k"],["r","2026-01",14,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","c"],["r","2026-01",14,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","k"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",1400,1,"","","c"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",1400,1,"","","k"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",623.29,1,"","","c"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",623.29,1,"","","k"],["r","2026-01",15,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-01",15,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",1347.71,1,"","","c"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",1347.71,1,"","","k"],["r","2026-01",16,"Suplementos","RODRIGO SOARES SIQUEIRA",75,1,"","","c"],["r","2026-04",30,"Suplementos","RODRIGO SOARES SIQUEIRA",75,1,"","","k"],["r","2026-01",16,"Suplementos","JULIMAR MARTINS FANTI",75,1,"","","c"],["r","2026-04",30,"Suplementos","JULIMAR MARTINS FANTI",75,1,"","","k"],["r","2026-01",16,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",1741,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",1741,1,"","","k"],["r","2026-01",16,"Receita de Serviços - Plano Bronze","ORLANDA ALVES SALVADOR",3800,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ORLANDA ALVES SALVADOR",3800,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-01",19,"Suplementos","TELMELITA SAAR ORECCHIO",75,1,"","","c"],["r","2026-04",30,"Suplementos","TELMELITA SAAR ORECCHIO",75,1,"","","k"],["r","2026-01",19,"Consulta","JOERLAINE DA SILVA OLIVEIRA ELIZEU",700,1,"","","c"],["r","2026-04",30,"Consulta","JOERLAINE DA SILVA OLIVEIRA ELIZEU",700,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","ELIENE PEREIRA SOBRINHO",500,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","ELIENE PEREIRA SOBRINHO",500,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",1133.17,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",1133.17,1,"","","k"],["r","2026-01",19,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",2165,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",2165,1,"","","k"],["r","2026-01",19,"Suplementos","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",135,1,"","","c"],["r","2026-04",30,"Suplementos","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",135,1,"","","k"],["r","2026-01",19,"Receita de Serviços - Plano Bronze","NUBIA SILVA AMARAL STOHEL",2400,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NUBIA SILVA AMARAL STOHEL",2400,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2680.25,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2680.25,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",4983.81,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",4983.81,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2169.27,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2169.27,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",6994.02,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",6994.02,1,"","","k"],["r","2026-01",19,"Suplementos","JADER JESUS SILVA",150,2,"","","c"],["r","2026-04",30,"Suplementos","JADER JESUS SILVA",150,2,"","","k"],["r","2026-01",20,"Suplementos","CRISTIANE CANDIDA DA SILVA",210,1,"","","c"],["r","2026-04",30,"Suplementos","CRISTIANE CANDIDA DA SILVA",210,1,"","","k"],["r","2026-01",20,"Rendimentos de Aplicações","Sem cliente",0.11,1,"","","c"],["r","2026-01",20,"Rendimentos de Aplicações","Sem cliente",0.11,1,"","","k"],["r","2026-01",20,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1656,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1656,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-01",21,"Consulta","MERIELY RUFINO VAZ MUTZ",500,1,"","","c"],["r","2026-04",30,"Consulta","MERIELY RUFINO VAZ MUTZ",500,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",4500,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",4500,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1809.53,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1809.53,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",239.1,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",239.1,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",842.65,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",842.65,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1821.54,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1821.54,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","k"],["r","2026-01",21,"Suplementos","HAYANE SILVA VALARDAO",135,2,"","","c"],["r","2026-04",30,"Suplementos","HAYANE SILVA VALARDAO",135,2,"","","k"],["r","2026-01",22,"Consulta","ALEX MARCHIOLI STEFANON",500,1,"","","c"],["r","2026-04",30,"Consulta","ALEX MARCHIOLI STEFANON",500,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",1495,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",1495,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",759.48,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",759.48,1,"","","k"],["r","2026-01",23,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",395,1,"","","c"],["r","2026-04",30,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",395,1,"","","k"],["r","2026-01",23,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",1500,1,"","","k"],["r","2026-01",23,"Receita de Serviços - Plano Bronze","LUCIMAR MARCHIOLI STEFANON",3500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LUCIMAR MARCHIOLI STEFANON",3500,1,"","","k"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1267.56,1,"","","c"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1267.56,1,"","","k"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","c"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","k"],["r","2026-01",26,"Consulta","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Consulta","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-01",26,"Rendimentos de Aplicações","Sem cliente",0.67,1,"","","c"],["r","2026-01",26,"Rendimentos de Aplicações","Sem cliente",0.67,1,"","","k"],["r","2026-01",26,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2865,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2865,1,"","","k"],["r","2026-01",26,"Suplementos","LETICIA RENATA RODRIGUES SOUZA PIONTI",135,1,"","","c"],["r","2026-04",30,"Suplementos","LETICIA RENATA RODRIGUES SOUZA PIONTI",135,1,"","","k"],["r","2026-01",26,"Receita de Serviços - Plano Bronze","ELIZABETH DE REZENDE ALMEIDA",6100,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ELIZABETH DE REZENDE ALMEIDA",6100,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1551.5,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1551.5,1,"","","k"],["r","2026-01",26,"Consulta","SAYONARIA LOPES EVANGELISTA",500,2,"","","c"],["r","2026-04",30,"Consulta","SAYONARIA LOPES EVANGELISTA",500,2,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","k"],["r","2026-01",27,"Injetaveis","WALAS FERNANDES VITAL",1200,1,"","","c"],["r","2026-03",31,"Injetaveis","WALAS FERNANDES VITAL",1200,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1500,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",8100,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",8100,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",2488,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",2488,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2200,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2200,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",1458.45,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",1458.45,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2203.86,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2203.86,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-01",28,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",900,1,"","","c"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",900,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",682.52,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",682.52,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","k"],["r","2026-01",30,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",815,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",815,1,"","","k"],["r","2026-01",30,"Suplementos","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","c"],["r","2026-04",30,"Suplementos","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",4096,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",4096,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",274.99,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",274.99,1,"","","k"],["r","2026-02",2,"Rendimentos de Aplicações","Sem cliente",0.36,1,"","","c"],["r","2026-02",2,"Rendimentos de Aplicações","Sem cliente",0.36,1,"","","k"],["r","2026-02",2,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",3183.17,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",3183.17,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",966.34,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",966.34,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",1421.47,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",1421.47,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",3700.52,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",3700.52,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",6119.12,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",6119.12,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","k"],["r","2026-02",3,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",600,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",600,1,"","","k"],["r","2026-02",3,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",900,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","k"],["r","2026-02",5,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","c"],["r","2026-02",5,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","k"],["r","2026-02",5,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",1200,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",1200,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",547.09,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",547.09,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","k"],["r","2026-02",6,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-02",6,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-02",6,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1900,1,"","","k"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",615.8,1,"","","c"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",615.8,1,"","","k"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",365.52,1,"","","c"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",365.52,1,"","","k"],["r","2026-02",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-02",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-02",9,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",135,1,"","","c"],["r","2026-03",31,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",135,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",1500,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",1500,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",2391.46,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",2391.46,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",5304.42,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",5304.42,1,"","","k"],["r","2026-02",10,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",935,1,"","","c"],["r","2026-03",31,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",935,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",1810.45,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",1810.45,1,"","","k"],["r","2026-02",10,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",582,2,"","","c"],["r","2026-04",30,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",582,2,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",550,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",550,1,"","","k"],["r","2026-02",11,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",1000,1,"","","c"],["r","2026-03",31,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",1000,1,"","","k"],["r","2026-02",11,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",1108,1,"","","c"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",1108,1,"","","k"],["r","2026-02",11,"Suplementos","LEDIANA NEIVA ANACLETO OLIVEIRA",75,1,"","","c"],["r","2026-04",30,"Suplementos","LEDIANA NEIVA ANACLETO OLIVEIRA",75,1,"","","k"],["r","2026-02",11,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",4175,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",4175,1,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-02",11,"Suplementos","JOSÉ ESTHEVAN PIRES DA CUNHA",135,2,"","","c"],["r","2026-04",30,"Suplementos","JOSÉ ESTHEVAN PIRES DA CUNHA",135,2,"","","k"],["r","2026-02",12,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",25,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",25,1,"","","k"],["r","2026-02",12,"Consulta","MAYKE CORREIA DE SOUZA",650,1,"","","c"],["r","2026-04",30,"Consulta","MAYKE CORREIA DE SOUZA",650,1,"","","k"],["r","2026-02",12,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",650,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",650,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","k"],["r","2026-02",12,"Consulta","LETICIA BATISTA DE MORAES",650,2,"","","c"],["r","2026-04",30,"Consulta","LETICIA BATISTA DE MORAES",650,2,"","","k"],["r","2026-02",13,"Consulta","EDILAINE MARCIA MARCIANO DE SOUZA",650,1,"","","c"],["r","2026-04",30,"Consulta","EDILAINE MARCIA MARCIANO DE SOUZA",650,1,"","","k"],["r","2026-02",13,"Receitas de Serviços a Identificar","ADMIR CUSTÓDIO DE ALMEIDA JÚNIOR",140,1,"","","c"],["r","2026-02",13,"Receitas de Serviços a Identificar","ADMIR CUSTÓDIO DE ALMEIDA JÚNIOR",140,1,"","","k"],["r","2026-02",13,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","k"],["r","2026-02",13,"Receitas de Serviços a Identificar","Sem cliente",509.25,1,"","","c"],["r","2026-02",13,"Receitas de Serviços a Identificar","Sem cliente",509.25,1,"","","k"],["r","2026-02",13,"Suplementos","NAZARETH ALVES DE ARAÚJO",75,2,"","","c"],["r","2026-04",30,"Suplementos","NAZARETH ALVES DE ARAÚJO",75,2,"","","k"],["r","2026-02",18,"Consulta","DIVALDO GOMES DE SOUZA FILHO",650,1,"","","c"],["r","2026-04",30,"Consulta","DIVALDO GOMES DE SOUZA FILHO",650,1,"","","k"],["r","2026-02",18,"Consulta","VALDETE APARECIDA FERREIRA HERMISDOLFE",650,1,"","","c"],["r","2026-04",30,"Consulta","VALDETE APARECIDA FERREIRA HERMISDOLFE",650,1,"","","k"],["r","2026-02",18,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",300,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",300,1,"","","k"],["r","2026-02",18,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",1610,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",1610,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",3146.23,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",3146.23,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",73.83,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",73.83,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",2879.49,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",2879.49,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",10808.37,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",10808.37,1,"","","k"],["r","2026-02",19,"Consulta","FABRÍCIO RODRIGUES LINHARES",650,1,"","","c"],["r","2026-04",30,"Consulta","FABRÍCIO RODRIGUES LINHARES",650,1,"","","k"],["r","2026-02",19,"Rendimentos de Aplicações","Sem cliente",0.21,1,"","","c"],["r","2026-02",19,"Rendimentos de Aplicações","Sem cliente",0.21,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",314.42,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",314.42,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",3937.6,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",3937.6,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",282.73,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",282.73,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",2930.31,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",2930.31,1,"","","k"],["r","2026-02",23,"Injetaveis","FERNANDA APARECIDA DE ALMEIDA",1747.9,1,"","","c"],["r","2026-03",31,"Injetaveis","FERNANDA APARECIDA DE ALMEIDA",1747.9,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","k"],["r","2026-02",23,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",7880,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",7880,1,"","","k"],["r","2026-02",23,"Injetaveis","ISABELA CRISTINA FANTI",900,1,"","","c"],["r","2026-03",31,"Injetaveis","ISABELA CRISTINA FANTI",900,1,"","","k"],["r","2026-02",23,"Suplementos","ISABELA CRISTINA FANTI",320,1,"","","c"],["r","2026-04",30,"Suplementos","ISABELA CRISTINA FANTI",320,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3103.5,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3103.5,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3366.29,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3366.29,1,"","","k"],["r","2026-02",23,"Suplementos","MARLETE ALVARES CABRAL",50,2,"","","c"],["r","2026-04",30,"Suplementos","MARLETE ALVARES CABRAL",50,2,"","","k"],["r","2026-02",24,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",5000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",5000,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",836.74,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",836.74,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-02",25,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",150,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",150,1,"","","k"],["r","2026-02",25,"Suplementos","SALETTE DE ALMEIDA SANTANA",135,1,"","","c"],["r","2026-04",30,"Suplementos","SALETTE DE ALMEIDA SANTANA",135,1,"","","k"],["r","2026-02",25,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",600,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",600,1,"","","k"],["r","2026-02",25,"Receitas de Serviços a Identificar","Sem cliente",1108.46,1,"","","c"],["r","2026-02",25,"Receitas de Serviços a Identificar","Sem cliente",1108.46,1,"","","k"],["r","2026-02",26,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",2460,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",2460,1,"","","k"],["r","2026-02",26,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",3900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",3900,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",1698.25,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",1698.25,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",3143.61,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",3143.61,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","k"],["r","2026-02",27,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",4600,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",4600,1,"","","k"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","c"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","k"],["r","2026-03",2,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",400,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",400,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","k"],["r","2026-03",2,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",3340,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",3340,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",2800.14,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",2800.14,1,"","","k"],["r","2026-03",3,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","c"],["r","2026-04",30,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","k"],["r","2026-03",3,"Rendimentos de Aplicações","Sem cliente",5.48,1,"","","c"],["r","2026-03",3,"Rendimentos de Aplicações","Sem cliente",5.48,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1159.11,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1159.11,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-03",4,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","c"],["r","2026-03",4,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",1173.42,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",1173.42,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",620.74,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",620.74,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",809.76,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",809.76,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",4151.32,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",4151.32,1,"","","k"],["r","2026-03",5,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",4500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",4500,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1873.2,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1873.2,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",652.58,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",652.58,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1181.28,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1181.28,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",280,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",280,2,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",210,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",210,1,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",5000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",5000,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","k"],["r","2026-03",7,"Receita de Serviços - Plano Bronze","ROSANGELA GOMES RIBEIRO FIUZA",3367,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","ROSANGELA GOMES RIBEIRO FIUZA",3367,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,2,"","","k"],["r","2026-03",9,"Consulta","MARILZA DE AGUIAR DIAS",650,1,"","","c"],["r","2026-04",30,"Consulta","MARILZA DE AGUIAR DIAS",650,1,"","","k"],["r","2026-03",9,"Rendimentos de Aplicações","Sem cliente",0.23,1,"","","c"],["r","2026-03",9,"Rendimentos de Aplicações","Sem cliente",0.23,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3011.86,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3011.86,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",2117.6,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",2117.6,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3018.1,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3018.1,1,"","","k"],["r","2026-03",9,"Suplementos","SAYONARIA LOPES EVANGELISTA",185,2,"","","c"],["r","2026-04",30,"Suplementos","SAYONARIA LOPES EVANGELISTA",185,2,"","","k"],["r","2026-03",10,"Consulta","NATALIA PEREIRA MARTINS SILVA",650,1,"","","c"],["r","2026-04",30,"Consulta","NATALIA PEREIRA MARTINS SILVA",650,1,"","","k"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",285,1,"","","c"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",285,1,"","","k"],["r","2026-03",10,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",975,1,"","","c"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",975,1,"","","k"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-03",10,"Suplementos","RODRIGO SOARES SIQUEIRA",60,2,"","","c"],["r","2026-04",30,"Suplementos","RODRIGO SOARES SIQUEIRA",60,2,"","","k"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","c"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","k"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","c"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","k"],["r","2026-03",11,"Receitas a Identificar","Sem cliente",728.25,1,"","","c"],["r","2026-03",11,"Receitas a Identificar","Sem cliente",728.25,1,"","","k"],["r","2026-03",12,"Suplementos","ISADORA DE VETE BOTELHO",75,1,"","","c"],["r","2026-04",30,"Suplementos","ISADORA DE VETE BOTELHO",75,1,"","","k"],["r","2026-03",12,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",4128,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",4128,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",5100,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",5100,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",2377.9,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",2377.9,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","k"],["r","2026-03",13,"Consulta","HIGLEST ALVES DE LA SALLE",650,1,"","","c"],["r","2026-04",30,"Consulta","HIGLEST ALVES DE LA SALLE",650,1,"","","k"],["r","2026-03",13,"Rendimentos de Aplicações","Sem cliente",1.25,1,"","","c"],["r","2026-03",13,"Rendimentos de Aplicações","Sem cliente",1.25,1,"","","k"],["r","2026-03",13,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",498.23,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",498.23,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",2228.34,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",2228.34,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-03",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-03",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",3492.37,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",3492.37,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",1500,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1700,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1700,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Plano Bronze","AMANTINO STEFANON",2700,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","AMANTINO STEFANON",2700,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3000,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",468,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",468,1,"","","k"],["r","2026-03",18,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",333,1,"","","c"],["r","2026-03",31,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",333,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",135,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",135,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",350.28,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",350.28,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",1608.47,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",1608.47,1,"","","k"],["r","2026-03",19,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",75,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",1368.09,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",1368.09,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",5606.07,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",5606.07,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",560.8,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",560.8,1,"","","k"],["r","2026-03",20,"Adicional de Tizerpatida","WARLLEM FERREIRA COSTA",1540,1,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","WARLLEM FERREIRA COSTA",1540,1,"","","k"],["r","2026-03",20,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",75,1,"","","k"],["r","2026-03",20,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",2690,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",2690,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",355.72,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",355.72,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1037.67,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1037.67,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1655.56,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1655.56,1,"","","k"],["r","2026-03",23,"Rendimentos de Aplicações","Sem cliente",0.39,1,"","","c"],["r","2026-03",23,"Rendimentos de Aplicações","Sem cliente",0.39,1,"","","k"],["r","2026-03",23,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",646.35,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",646.35,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",2543.25,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",2543.25,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",997.14,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",997.14,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",1410.77,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",1410.77,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",3852.07,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",3852.07,1,"","","k"],["r","2026-03",24,"Injetaveis","ELIZABETH DE REZENDE ALMEIDA",680,1,"","","c"],["r","2026-04",30,"Injetaveis","ELIZABETH DE REZENDE ALMEIDA",680,1,"","","k"],["r","2026-03",24,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","c"],["r","2026-03",24,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","k"],["r","2026-03",24,"Injetaveis","LIETE VOLPONI FORTUNA",75,1,"","","c"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",75,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",400,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",400,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","LINDAURA RODRIGUES BARBOSA ASSIS",650,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","LINDAURA RODRIGUES BARBOSA ASSIS",650,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",750,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",750,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",4782,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",4782,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",6910,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",6910,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",3830.55,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",3830.55,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",2053.17,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",2053.17,1,"","","k"],["r","2026-03",25,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",3500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",3500,1,"","","k"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",443.04,1,"","","c"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",443.04,1,"","","k"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",1303.95,1,"","","c"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",1303.95,1,"","","k"],["r","2026-03",26,"Rendimentos de Aplicações","Sem cliente",0.14,1,"","","c"],["r","2026-03",26,"Rendimentos de Aplicações","Sem cliente",0.14,1,"","","k"],["r","2026-03",26,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",75,1,"","","k"],["r","2026-03",26,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","k"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",654.92,1,"","","c"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",654.92,1,"","","k"],["r","2026-03",26,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","k"],["r","2026-03",27,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-03",27,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-03",27,"Receitas a Identificar","Sem cliente",607.78,1,"","","c"],["r","2026-03",27,"Receitas a Identificar","Sem cliente",607.78,1,"","","k"],["r","2026-03",30,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,1,"","","k"],["r","2026-03",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",2243.92,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",2243.92,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",3914.61,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",3914.61,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",840,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",840,1,"","","k"],["r","2026-03",31,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","c"],["r","2026-03",31,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",4274,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",4274,1,"","","k"],["r","2026-03",31,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-03",31,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","IRINEIA SOUZA PEREIRA SAAR",9680.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","IRINEIA SOUZA PEREIRA SAAR",9680.17,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",1200,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",1200,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SAYONARIA LOPES EVANGELISTA",8045,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SAYONARIA LOPES EVANGELISTA",8045,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",9342,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",9342,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ÉRICA RODRIGUES LIMA BOECHAT",9050,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ÉRICA RODRIGUES LIMA BOECHAT",9050,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",12450,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",12450,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",4403,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",4403,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",6920,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",6920,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",14955,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",14955,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",3362,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",3362,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",11199,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",11199,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",7600.87,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",7600.87,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",9264,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",9264,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",185,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",185,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NEILA MARIA DE REZENDE SILVA",4697.61,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NEILA MARIA DE REZENDE SILVA",4697.61,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JULIMAR MARTINS FANTI",8200,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JULIMAR MARTINS FANTI",8200,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TAIANE STREY VERONEZE ANDRE",12228,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TAIANE STREY VERONEZE ANDRE",12228,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",6014.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",6014.17,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Platina","LEILA DA SILVA DE SOUZA COELHO",6351.4,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Platina","LEILA DA SILVA DE SOUZA COELHO",6351.4,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ADRIANA MOSCONI PAGANI",4800,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ADRIANA MOSCONI PAGANI",4800,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FÁBIA INACIO DE SOUZA BLESSON",5733.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FÁBIA INACIO DE SOUZA BLESSON",5733.17,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALAETI BRISQUE POEYS",4133.17,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALAETI BRISQUE POEYS",4133.17,2,"","","k"],["r","2026-03",31,"Injetaveis","HAYANE SILVA VALARDAO",2500,2,"","","c"],["r","2026-03",31,"Injetaveis","HAYANE SILVA VALARDAO",2500,2,"","","k"],["r","2026-03",31,"Implantes","THAIZ LIMA ROCHA DA SILVA",4630,2,"","","c"],["r","2026-03",31,"Implantes","THAIZ LIMA ROCHA DA SILVA",4630,2,"","","k"],["r","2026-03",31,"Injetaveis","ANTONIO PEREIRA DE ARAUJO",1170,2,"","","c"],["r","2026-03",31,"Injetaveis","ANTONIO PEREIRA DE ARAUJO",1170,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",10632,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",10632,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",12750,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",12750,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",12965,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",12965,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA CRISTINA VIEIRA TEODORO",6842.7,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA CRISTINA VIEIRA TEODORO",6842.7,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",16050,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",16050,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",3625,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",3625,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",900,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",900,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LEIDIANA FERREIRA RODRIGUES",2300,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LEIDIANA FERREIRA RODRIGUES",2300,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","WARLLEM FERREIRA COSTA",6040,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","WARLLEM FERREIRA COSTA",6040,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",12493.99,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",12493.99,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","RODRIGO SOARES SIQUEIRA",5980,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","RODRIGO SOARES SIQUEIRA",5980,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","CARLA GESIANE CARLASARTE DE SOUZA VIAL",7243.44,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","CARLA GESIANE CARLASARTE DE SOUZA VIAL",7243.44,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","THAÍS DAMASCENA DE PAULO HONORATO",3400,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","THAÍS DAMASCENA DE PAULO HONORATO",3400,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",2100,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",2100,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",4800,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",4800,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","SEBASTIÃO SATURINO FILHO",6500,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","SEBASTIÃO SATURINO FILHO",6500,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",4922,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",4922,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",964,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",964,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",1710.11,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",1710.11,2,"","","k"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",1400,2,"","","c"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",1400,2,"","","k"],["r","2026-03",31,"Injetaveis","LUDIMILA MATIAS CARDOSO PAGANI",468,2,"","","c"],["r","2026-03",31,"Injetaveis","LUDIMILA MATIAS CARDOSO PAGANI",468,2,"","","k"],["r","2026-03",31,"Injetaveis","MARIA ALICE RODRIGUES DE JESUS",2570,2,"","","c"],["r","2026-03",31,"Injetaveis","MARIA ALICE RODRIGUES DE JESUS",2570,2,"","","k"],["r","2026-03",31,"Injetaveis","KAMILA QUADRAS CASTILHO",1050,2,"","","c"],["r","2026-03",31,"Injetaveis","KAMILA QUADRAS CASTILHO",1050,2,"","","k"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",500,2,"","","c"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",500,2,"","","k"],["r","2026-03",31,"Injetaveis","RAFAEL CARDOSO DE SOUZA",500,2,"","","c"],["r","2026-03",31,"Injetaveis","RAFAEL CARDOSO DE SOUZA",500,2,"","","k"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",1125,2,"","","c"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",1125,2,"","","k"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",4965,2,"","","c"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",4965,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ESTER DE ALMEIDA SANTANA",3900,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ESTER DE ALMEIDA SANTANA",3900,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",3578,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",3578,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",4246,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",4246,2,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",2300,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",2300,2,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-04",1,"Rendimentos de Aplicações","Sem cliente",0.26,1,"","","c"],["r","2026-04",1,"Rendimentos de Aplicações","Sem cliente",0.26,1,"","","k"],["r","2026-04",1,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",68,1,"","","c"],["r","2026-04",30,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",68,1,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2818.58,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2818.58,1,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",1218.29,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",1218.29,1,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2698.55,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",2698.55,1,"","","k"],["r","2026-04",1,"Implantes","Tomadores Diversos",3900,2,"","","c"],["r","2026-04",1,"Implantes","Tomadores Diversos",3900,2,"","","k"],["r","2026-04",2,"Rendimentos de Aplicações","Sem cliente",0.04,1,"","","c"],["r","2026-04",2,"Rendimentos de Aplicações","Sem cliente",0.04,1,"","","k"],["r","2026-04",2,"Receita de Serviços - Plano Bronze","Sem cliente",9,1,"","","c"],["r","2026-04",2,"Receita de Serviços - Plano Bronze","Sem cliente",9,1,"","","k"],["r","2026-04",2,"Suplementos","NEUZA FERNANDES MARTINS",377,1,"","","c"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",377,1,"","","k"],["r","2026-04",2,"Suplementos","NEUZA FERNANDES MARTINS",50,1,"","","c"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",50,1,"","","k"],["r","2026-04",2,"Teste Nutrigenetico","ZILDA MARIA MAIA DE CARVALHO",3900,1,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","ZILDA MARIA MAIA DE CARVALHO",3900,1,"","","k"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","c"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","k"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",882,1,"","","c"],["r","2026-04",2,"Receitas de Serviços a Identificar","Sem cliente",882,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2935.4,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2935.4,1,"","","k"],["r","2026-04",6,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",630,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",630,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",941.83,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",941.83,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2190.13,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2190.13,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",4630.42,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",4630.42,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",14985.03,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",14985.03,1,"","","k"],["r","2026-04",7,"Suplementos","ROSIANE ALMEIDA COSTA BELING",75,1,"","","c"],["r","2026-04",30,"Suplementos","ROSIANE ALMEIDA COSTA BELING",75,1,"","","k"],["r","2026-04",7,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","c"],["r","2026-04",7,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","k"],["r","2026-04",7,"Injetaveis","MARIA LEUZINA DE AGUIAR DIAS",390,1,"","","c"],["r","2026-04",30,"Injetaveis","MARIA LEUZINA DE AGUIAR DIAS",390,1,"","","k"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","c"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","k"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","c"],["r","2026-04",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",466.44,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",466.44,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","k"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","c"],["r","2026-04",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","k"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",1916.63,1,"","","c"],["r","2026-04",9,"Receitas de Serviços a Identificar","Sem cliente",1916.63,1,"","","k"],["r","2026-04",10,"Suplementos","DORIETE DE SOUZA",75,1,"","","c"],["r","2026-04",30,"Suplementos","DORIETE DE SOUZA",75,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",7880,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",7880,1,"","","k"],["r","2026-04",10,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",8520,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",8520,1,"","","k"],["r","2026-04",10,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",2100,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",2100,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2499.35,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2499.35,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",3876.57,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",3876.57,1,"","","k"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","c"],["r","2026-04",10,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",837.84,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",837.84,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",4606.2,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",4606.2,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",1517.13,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",1517.13,1,"","","k"],["r","2026-04",14,"Suplementos","MARLY MARIA ANDRADE DE LAIA",75,1,"","","c"],["r","2026-04",30,"Suplementos","MARLY MARIA ANDRADE DE LAIA",75,1,"","","k"],["r","2026-04",14,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-04",14,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-04",14,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-04",15,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",395,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",395,1,"","","k"],["r","2026-04",15,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",2040,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",2040,1,"","","k"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",2593.92,1,"","","c"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",2593.92,1,"","","k"],["r","2026-04",15,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",350,2,"","","c"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",350,2,"","","k"],["r","2026-04",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-04",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",320,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",320,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",1985.1,1,"","","c"],["r","2026-04",16,"Receitas de Serviços a Identificar","Sem cliente",1985.1,1,"","","k"],["r","2026-04",16,"Suplementos","MONICA DE OLIVEIRA SILVA FERNANDES",700,2,"","","c"],["r","2026-04",30,"Suplementos","MONICA DE OLIVEIRA SILVA FERNANDES",700,2,"","","k"],["r","2026-04",17,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-04",17,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",2058.08,1,"","","c"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",2058.08,1,"","","k"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",1128.76,1,"","","c"],["r","2026-04",17,"Receitas de Serviços a Identificar","Sem cliente",1128.76,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1002.07,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1002.07,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1841.77,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",1841.77,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2837.73,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2837.73,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",185,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",185,1,"","","k"],["r","2026-04",22,"Consulta","MARIA DAS GRAÇAS NEVES CALIARI",650,1,"","","c"],["r","2026-04",30,"Consulta","MARIA DAS GRAÇAS NEVES CALIARI",650,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",3537.67,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",3537.67,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1042.2,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",1042.2,1,"","","k"],["r","2026-04",23,"Rendimentos de Aplicações","Sem cliente",0.44,1,"","","c"],["r","2026-04",23,"Rendimentos de Aplicações","Sem cliente",0.44,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",65,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",65,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1200,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1200,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",3810.3,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",3810.3,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",928.23,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",928.23,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",4585.47,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",4585.47,1,"","","k"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1116.43,1,"","","c"],["r","2026-04",23,"Receitas de Serviços a Identificar","Sem cliente",1116.43,1,"","","k"],["r","2026-04",25,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","k"],["r","2026-04",27,"Receita de Serviços - Plano Bronze","FERNANDA APARECIDA DE ALMEIDA",2975,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","FERNANDA APARECIDA DE ALMEIDA",2975,1,"","","k"],["r","2026-04",27,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",1000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",1000,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",1087.58,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",1087.58,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","k"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-04",27,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-04",28,"Suplementos","ANA LÚCIA COLOMBEKI SALDANHA",185,1,"","","c"],["r","2026-04",30,"Suplementos","ANA LÚCIA COLOMBEKI SALDANHA",185,1,"","","k"],["r","2026-04",28,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",2472,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",2472,1,"","","k"],["r","2026-04",28,"Consulta","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","c"],["r","2026-04",30,"Consulta","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","k"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","c"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","k"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-04",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",3289.56,1,"","","c"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",3289.56,1,"","","k"],["r","2026-04",29,"Injetaveis","LAUDIANA DANIEL TEIXEIRA FREITAS",390,1,"","","c"],["r","2026-04",30,"Injetaveis","LAUDIANA DANIEL TEIXEIRA FREITAS",390,1,"","","k"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",4138.68,1,"","","c"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",4138.68,1,"","","k"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",1355.02,1,"","","c"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",1355.02,1,"","","k"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",75,1,"","","c"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",75,1,"","","k"],["r","2026-04",30,"Suplementos","TAIANE STREY VERONEZE ANDRE",75,1,"","","c"],["r","2026-04",30,"Suplementos","TAIANE STREY VERONEZE ANDRE",75,1,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","JULIMAR MARTINS FANTI",1200,1,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JULIMAR MARTINS FANTI",1200,1,"","","k"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",911.74,1,"","","c"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",911.74,1,"","","k"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",1771.36,1,"","","c"],["r","2026-04",30,"Receitas de Serviços a Identificar","Sem cliente",1771.36,1,"","","k"],["r","2026-04",30,"Consulta","FLAVYANNE PAULO MORETT AGUIAR",500,2,"","","c"],["r","2026-04",30,"Consulta","FLAVYANNE PAULO MORETT AGUIAR",500,2,"","","k"],["r","2026-04",30,"Consulta","IRINEIA SOUZA PEREIRA SAAR",500,2,"","","c"],["r","2026-04",30,"Consulta","IRINEIA SOUZA PEREIRA SAAR",500,2,"","","k"],["r","2026-04",30,"Consulta","REINALDO ERMELINDO DE ARAUJO",500,2,"","","c"],["r","2026-04",30,"Consulta","REINALDO ERMELINDO DE ARAUJO",500,2,"","","k"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","k"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","c"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","ÉRICA RODRIGUES LIMA BOECHAT",3068,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ÉRICA RODRIGUES LIMA BOECHAT",3068,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","NAIR DA SILVA LOPES",7000,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","NAIR DA SILVA LOPES",7000,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","DORIETE DE SOUZA",1872,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","DORIETE DE SOUZA",1872,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","k"],["r","2026-04",30,"Injetaveis","RAFAEL CARDOSO DE SOUZA",490,2,"","","c"],["r","2026-04",30,"Injetaveis","RAFAEL CARDOSO DE SOUZA",490,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",6050,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",6050,2,"","","k"],["r","2026-04",30,"Adicional de Tizerpatida","ADELSON ANDRE BAECE STREY",1200,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ADELSON ANDRE BAECE STREY",1200,2,"","","k"],["r","2026-04",30,"Injetaveis","MAYARA RIBEIRO SIMOES FORTUNA",1500,2,"","","c"],["r","2026-04",30,"Injetaveis","MAYARA RIBEIRO SIMOES FORTUNA",1500,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","MONICA DE OLIVEIRA SILVA FERNANDES",19750,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","MONICA DE OLIVEIRA SILVA FERNANDES",19750,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",5580.66,2,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",5580.66,2,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",1000,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",1000,2,"","","k"],["r","2026-05",4,"Adicional de Tizerpatida","BETANIA KINACIA DE SOUZA SATURNINO",1800,1,"","","c"],["r","2026-05",4,"Adicional de Tizerpatida","BETANIA KINACIA DE SOUZA SATURNINO",1800,1,"","","k"],["r","2026-05",4,"Consulta","MARLY MARIA ANDRADE DE LAIA",500,1,"","","c"],["r","2026-04",30,"Consulta","MARLY MARIA ANDRADE DE LAIA",500,1,"","","k"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,1,"","","c"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",1903.43,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",1903.43,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3159.48,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3159.48,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3055.03,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",3055.03,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",4970.45,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",4970.45,1,"","","k"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",6232.18,1,"","","c"],["r","2026-05",4,"Receitas de Serviços a Identificar","Sem cliente",6232.18,1,"","","k"],["r","2026-05",4,"Rendimentos de Aplicações","Sem cliente",0.16,1,"","","c"],["r","2026-05",4,"Rendimentos de Aplicações","Sem cliente",0.16,1,"","","k"],["r","2026-05",4,"Suplementos","ORLANDA ALVES SALVADOR",76,2,"","","c"],["r","2026-05",4,"Suplementos","ORLANDA ALVES SALVADOR",76,2,"","","k"],["r","2026-05",4,"Suplementos","DORLI MARTINS DA SILVA",550,2,"","","c"],["r","2026-05",4,"Suplementos","DORLI MARTINS DA SILVA",550,2,"","","k"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",200,2,"","","c"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",200,2,"","","k"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,2,"","","c"],["r","2026-05",4,"Adicional de Tizerpatida","TAIANE STREY VERONEZE ANDRE",300,2,"","","k"],["r","2026-05",4,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,2,"","","c"],["r","2026-05",4,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,2,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",4537.69,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",4537.69,1,"","","k"],["r","2026-05",5,"Suplementos","HIGLEST ALVES DE LA SALLE",10,1,"","","c"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",10,1,"","","k"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",5000,1,"","","c"],["r","2026-05",5,"Receitas de Serviços a Identificar","Sem cliente",5000,1,"","","k"],["r","2026-05",5,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,2,"","","k"],["r","2026-05",5,"Suplementos","VALDETE APARECIDA FERREIRA HERMISDOLFE",135,2,"","","c"],["r","2026-05",4,"Suplementos","VALDETE APARECIDA FERREIRA HERMISDOLFE",135,2,"","","k"],["r","2026-05",5,"Suplementos","MERIELY RUFINO VAZ MUTZ",135,2,"","","c"],["r","2026-05",5,"Suplementos","MERIELY RUFINO VAZ MUTZ",135,2,"","","k"],["r","2026-05",5,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",1000,2,"","","c"],["r","2026-05",5,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",1000,2,"","","k"],["r","2026-05",5,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,2,"","","c"],["r","2026-05",5,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,2,"","","k"],["r","2026-05",6,"Consulta","Cristina Siqueira Bragança",650,1,"","","c"],["r","2026-05",6,"Consulta","Cristina Siqueira Bragança",650,1,"","","k"],["r","2026-05",6,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,1,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","k"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-05",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-05",6,"Suplementos","MARIA DA PENHA MOURA ROSA",75,2,"","","c"],["r","2026-05",6,"Suplementos","MARIA DA PENHA MOURA ROSA",75,2,"","","k"],["r","2026-05",6,"Suplementos","ESTER DE ALMEIDA SANTANA",185,2,"","","c"],["r","2026-05",6,"Suplementos","ESTER DE ALMEIDA SANTANA",185,2,"","","k"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",380,2,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",380,2,"","","k"],["r","2026-05",7,"Receita de Serviços - Plano Bronze","ALEX MARCHIOLI STEFANON",3900,1,"","","c"],["r","2026-05",7,"Receita de Serviços - Plano Bronze","ALEX MARCHIOLI STEFANON",3900,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",542.82,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",2117.55,1,"","","k"],["r","2026-05",7,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-05",7,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",460,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","Sem cliente",460,1,"","","k"],["r","2026-05",7,"Receitas de Serviços a Identificar","MAULY MARTINS DA SILVA",550,1,"","","c"],["r","2026-05",7,"Receitas de Serviços a Identificar","MAULY MARTINS DA SILVA",550,1,"","","k"],["r","2026-05",7,"Suplementos","MAULY MARTINS DA SILVA",185,1,"","","c"],["r","2026-05",7,"Suplementos","MAULY MARTINS DA SILVA",185,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",366.7,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",1154.76,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2238.86,1,"","","k"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2330,1,"","","c"],["r","2026-05",8,"Receitas de Serviços a Identificar","Sem cliente",2330,1,"","","k"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",3900,1,"","","c"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",3900,1,"","","k"],["r","2026-05",8,"Suplementos","JADER JESUS SILVA",75,2,"","","c"],["r","2026-05",8,"Suplementos","JADER JESUS SILVA",75,2,"","","k"],["r","2026-05",8,"Receita de Serviços - Plano Bronze","ÉRICA RODRIGUES LIMA BOECHAT",1274,2,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Bronze","ÉRICA RODRIGUES LIMA BOECHAT",1274,2,"","","k"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",2330,2,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",2330,2,"","","k"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",3900,2,"","","c"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",3900,2,"","","k"],["r","2026-05",8,"Implantes","ÉRICA RODRIGUES LIMA BOECHAT",4500,2,"","","c"],["r","2026-05",8,"Implantes","ÉRICA RODRIGUES LIMA BOECHAT",4500,2,"","","k"],["r","2026-05",11,"Consulta","Lúcia Sodré Moreira",650,1,"","","c"],["r","2026-05",11,"Consulta","Lúcia Sodré Moreira",650,1,"","","k"],["r","2026-05",11,"Consulta","MARIA DAS GRAÇAS RODRIGUES COELHO",500,1,"","","c"],["r","2026-05",11,"Consulta","MARIA DAS GRAÇAS RODRIGUES COELHO",500,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",649.25,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",649.25,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3716.64,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3716.64,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3465.58,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",3465.58,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",677.67,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",677.67,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",2699.68,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","Sem cliente",2699.68,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",1460,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",1460,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",2690,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",2690,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",4000,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","KEILA SOARES RODRIGUES MONTEIRO",4000,1,"","","k"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",6910,1,"","","c"],["r","2026-05",11,"Receitas de Serviços a Identificar","MARIA DAS GRAÇAS NEVES CALIARI",6910,1,"","","k"],["r","2026-05",11,"Suplementos","MARIA DAS GRAÇAS NEVES CALIARI",210,2,"","","c"],["r","2026-05",11,"Suplementos","MARIA DAS GRAÇAS NEVES CALIARI",210,2,"","","k"],["r","2026-05",11,"Receita de Serviços - Plano Prata","MARIA DAS GRAÇAS NEVES CALIARI",9600,2,"","","c"],["r","2026-05",11,"Receita de Serviços - Plano Prata","MARIA DAS GRAÇAS NEVES CALIARI",9600,2,"","","k"],["r","2026-05",11,"Receita de Serviços - Plano Bronze","KEILA SOARES RODRIGUES MONTEIRO",5460,2,"","","c"],["r","2026-05",11,"Receita de Serviços - Plano Bronze","KEILA SOARES RODRIGUES MONTEIRO",5460,2,"","","k"],["r","2026-05",11,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",1000,2,"","","c"],["r","2026-05",11,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",1000,2,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",2228.3,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",2228.3,1,"","","k"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-05",12,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-05",13,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","c"],["r","2026-05",13,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","k"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","c"],["r","2026-05",13,"Receitas de Serviços a Identificar","Sem cliente",144.03,1,"","","k"],["r","2026-05",13,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","c"],["r","2026-05",13,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","k"],["r","2026-05",13,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,2,"","","c"],["r","2026-05",13,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,2,"","","k"],["r","2026-05",13,"Suplementos","ANDREA RODRIGUES FERNANDES",50,2,"","","c"],["r","2026-05",13,"Suplementos","ANDREA RODRIGUES FERNANDES",50,2,"","","k"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",291,1,"","","c"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",291,1,"","","k"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",3709.42,1,"","","c"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",3709.42,1,"","","k"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","c"],["r","2026-05",15,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",4732.93,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",4732.93,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",2955,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",2955,1,"","","k"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-05",18,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-05",18,"Suplementos","DORLI MARTINS DA SILVA",75,2,"","","c"],["r","2026-05",18,"Suplementos","DORLI MARTINS DA SILVA",75,2,"","","k"],["r","2026-05",18,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",1000,2,"","","c"],["r","2026-05",18,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",1000,2,"","","k"],["r","2026-05",19,"Suplementos","EDILAINE MARCIA MARCIANO DE SOUZA",75,1,"","","c"],["r","2026-05",20,"Suplementos","EDILAINE MARCIA MARCIANO DE SOUZA",75,1,"","","k"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",351.12,1,"","","c"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",351.12,1,"","","k"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","c"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","k"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","c"],["r","2026-05",19,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","k"],["r","2026-05",19,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-05",19,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",421.8,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",421.8,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",1223.46,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",1223.46,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",314.41,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",314.41,1,"","","k"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-05",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-05",20,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","c"],["r","2026-05",20,"Rendimentos de Aplicações","Sem cliente",0.08,1,"","","k"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","c"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","k"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",846.04,1,"","","c"],["r","2026-05",21,"Receitas de Serviços a Identificar","Sem cliente",846.04,1,"","","k"],["r","2026-05",21,"Suplementos","ANTONIO PEREIRA DE ARAUJO",75,2,"","","c"],["r","2026-05",21,"Suplementos","ANTONIO PEREIRA DE ARAUJO",75,2,"","","k"],["r","2026-05",21,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",1380,2,"","","c"],["r","2026-05",21,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",1380,2,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",388.4,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",870.09,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",870.09,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1262.6,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1262.6,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1432.3,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",1432.3,1,"","","k"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",50,1,"","","c"],["r","2026-05",22,"Receitas de Serviços a Identificar","Sem cliente",50,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",608.75,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",1473.09,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","Sem cliente",1473.09,1,"","","k"],["r","2026-05",25,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",2808,1,"","","c"],["r","2026-05",25,"Receitas de Serviços a Identificar","ISABELA CRISTINA FANTI",2808,1,"","","k"],["r","2026-05",25,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,2,"","","k"],["r","2026-05",25,"Adicional de Tizerpatida","ISABELA CRISTINA FANTI",2808,2,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","ISABELA CRISTINA FANTI",2808,2,"","","k"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","c"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","k"],["r","2026-05",26,"Suplementos","CRISTIANE CANDIDA DA SILVA",75,1,"","","c"],["r","2026-05",26,"Suplementos","CRISTIANE CANDIDA DA SILVA",75,1,"","","k"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",650,1,"","","c"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",650,1,"","","k"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",5613,1,"","","c"],["r","2026-05",26,"Receitas de Serviços a Identificar","Sem cliente",5613,1,"","","k"],["r","2026-05",26,"Suplementos","SEBASTIÃO SATURINO FILHO",270,2,"","","c"],["r","2026-05",26,"Suplementos","SEBASTIÃO SATURINO FILHO",270,2,"","","k"],["r","2026-05",26,"Receita de Serviços - Plano Prata","MAYKE CORREIA DE SOUZA",2806.5,2,"","","c"],["r","2026-05",26,"Receita de Serviços - Plano Prata","MAYKE CORREIA DE SOUZA",2806.5,2,"","","k"],["r","2026-05",26,"Receita de Serviços - Plano Prata","LETICIA BATISTA DE MORAES",2806.5,2,"","","c"],["r","2026-05",26,"Receita de Serviços - Plano Prata","LETICIA BATISTA DE MORAES",2806.5,2,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",386.16,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",386.16,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",476.82,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",476.82,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",2170.59,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",1707.5,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",1707.5,1,"","","k"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",4700,1,"","","c"],["r","2026-05",27,"Receitas de Serviços a Identificar","Sem cliente",4700,1,"","","k"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1256.89,1,"","","c"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1256.89,1,"","","k"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","c"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","k"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","c"],["r","2026-05",28,"Receitas de Serviços a Identificar","Sem cliente",1800,1,"","","k"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","MARLY MARIA ANDRADE DE LAIA",1800,2,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","MARLY MARIA ANDRADE DE LAIA",1800,2,"","","k"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","c"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",984.4,1,"","","k"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",2586.2,1,"","","c"],["r","2026-05",29,"Receitas de Serviços a Identificar","Sem cliente",2586.2,1,"","","k"],["r","2026-05",29,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","c"],["r","2026-05",29,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","k"],["r","2026-05",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,2,"","","k"],["r","2026-05",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","c"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,2,"","","k"],["r","2026-05",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,2,"","","k"],["r","2026-05",30,"Injetaveis","JADER JESUS SILVA",708.75,2,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,2,"","","k"],["r","2026-05",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,2,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,2,"","","k"],["r","2026-05",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,2,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,2,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,2,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,2,"","","k"],["r","2026-06",5,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,2,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","MARILZA DE AGUIAR DIAS",1404,2,"","","k"],["r","2026-06",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,2,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,2,"","","k"],["r","2026-06",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,2,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,2,"","","k"],["r","2026-06",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,2,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,2,"","","k"],["r","2026-06",7,"Implantes","NARLA MARQUES",881.67,2,"","","c"],["r","2026-05",7,"Implantes","NARLA MARQUES",881.67,2,"","","k"],["r","2026-06",8,"Receita de Serviços - Plano Bronze","ÉRICA RODRIGUES LIMA BOECHAT",3600,2,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Bronze","ÉRICA RODRIGUES LIMA BOECHAT",3600,2,"","","k"],["r","2026-06",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,2,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,2,"","","k"],["r","2026-06",8,"Implantes","NUBIA SILVA AMARAL STOHEL",200,2,"","","c"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",200,2,"","","k"],["r","2026-06",22,"Consulta","Débora Eliziário de Oliveira",600,0,"","","c"],["r","2026-05",22,"Consulta","Débora Eliziário de Oliveira",600,0,"","","k"],["r","2026-06",22,"Consulta","Débora Eliziário de Oliveira",50,0,"","","c"],["r","2026-05",22,"Consulta","Débora Eliziário de Oliveira",50,0,"","","k"],["r","2026-06",24,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-06",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2026-06",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",4700,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",4700,0,"","","k"],["r","2026-06",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",1000,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",1000,0,"","","k"],["r","2026-06",29,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-06",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","ORLANDA ALVES SALVADOR",200,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.66,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.66,0,"","","k"],["r","2026-06",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-06",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","k"],["r","2026-06",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","k"],["r","2026-06",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-07",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-07",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","k"],["r","2026-07",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,0,"","","k"],["r","2026-07",7,"Implantes","NARLA MARQUES",881.67,0,"","","c"],["r","2026-05",7,"Implantes","NARLA MARQUES",881.67,0,"","","k"],["r","2026-07",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2026-07",8,"Implantes","NUBIA SILVA AMARAL STOHEL",200,0,"","","c"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",200,0,"","","k"],["r","2026-07",18,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",300,0,"","","c"],["r","2026-05",18,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",300,0,"","","k"],["r","2026-07",24,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-07",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2026-07",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2026-07",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-07",29,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-07",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-07",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-07",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","k"],["r","2026-07",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","k"],["r","2026-07",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-08",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-08",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","k"],["r","2026-08",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,0,"","","k"],["r","2026-08",7,"Implantes","NARLA MARQUES",881.67,0,"","","c"],["r","2026-05",7,"Implantes","NARLA MARQUES",881.67,0,"","","k"],["r","2026-08",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2026-08",8,"Implantes","NUBIA SILVA AMARAL STOHEL",200,0,"","","c"],["r","2026-05",8,"Implantes","NUBIA SILVA AMARAL STOHEL",200,0,"","","k"],["r","2026-08",18,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",300,0,"","","c"],["r","2026-05",18,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",300,0,"","","k"],["r","2026-08",23,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-08",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2026-08",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2026-08",28,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-08",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-08",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-08",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-08",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-09",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-09",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","k"],["r","2026-09",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ANA PAULA COELHO PORTES MATTOS",643.5,0,"","","k"],["r","2026-09",7,"Implantes","NARLA MARQUES",881.67,0,"","","c"],["r","2026-05",7,"Implantes","NARLA MARQUES",881.67,0,"","","k"],["r","2026-09",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2026-09",22,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-09",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2026-09",27,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-09",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2026-09",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.65,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.65,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-09",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"Adicional de Tizerpatida","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-10",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-10",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","k"],["r","2026-10",7,"Implantes","NARLA MARQUES",881.67,0,"","","c"],["r","2026-05",7,"Implantes","NARLA MARQUES",881.67,0,"","","k"],["r","2026-10",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2026-10",22,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-10",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2026-10",27,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-10",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2026-10",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-11",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.65,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.65,0,"","","k"],["r","2026-11",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","c"],["r","2026-05",6,"Adicional de Tizerpatida","ESTER DE ALMEIDA SANTANA",500,0,"","","k"],["r","2026-11",7,"Implantes","NARLA MARQUES",881.65,0,"","","c"],["r","2026-05",7,"Implantes","NARLA MARQUES",881.65,0,"","","k"],["r","2026-11",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2026-11",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2026-11",26,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-11",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2026-11",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-12",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2026-12",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2026-12",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2026-12",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-01",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2027-01",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2027-01",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2027-01",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-02",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2027-02",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2027-02",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2027-03",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","c"],["r","2026-05",8,"Receita de Serviços - Plano Prata","NATALIA PEREIRA MARTINS SILVA",690,0,"","","k"],["r","2027-03",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","c"],["r","2026-05",25,"Adicional de Tizerpatida","MARIA DA PENHA MOURA ROSA",234,0,"","","k"],["r","2027-03",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2027-03",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["r","2027-04",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","c"],["r","2026-05",27,"Receita de Serviços - Plano Prata","EDILAINE MARCIA MARCIANO DE SOUZA",1200,0,"","","k"],["r","2027-04",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","c"],["r","2026-05",28,"Receita de Serviços - Plano Bronze","SAYONARIA LOPES EVANGELISTA",544,0,"","","k"],["d","2026-01",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-01",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",561.51,1,"Supermercado Cardoso LB","","c"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",561.51,1,"Supermercado Cardoso LB","","k"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",293.2,1,"Adega Zero Grau Distr","","c"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",293.2,1,"Adega Zero Grau Distr","","k"],["d","2026-01",2,"Materiais  de Uso e Consumo","",195,1,"Rosa Linda","","c"],["d","2026-01",2,"Materiais  de Uso e Consumo","",195,1,"Rosa Linda","","k"],["d","2026-01",2,"Materiais  de Uso e Consumo","",175,1,"Rosa Linda","","c"],["d","2026-01",2,"Materiais  de Uso e Consumo","",175,1,"Rosa Linda","","k"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",140.44,1,"Atacarejo de Alimentos","","c"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",140.44,1,"Atacarejo de Alimentos","","k"],["d","2026-01",2,"Insumos e Materiais Clínicos","",130,1,"Cia do Cheiro","","c"],["d","2026-01",2,"Insumos e Materiais Clínicos","",130,1,"Cia do Cheiro","","k"],["d","2026-01",2,"Insumos e Materiais Clínicos","",129.48,1,"Farmácia Aliança","","c"],["d","2026-01",2,"Insumos e Materiais Clínicos","",129.48,1,"Farmácia Aliança","","k"],["d","2026-01",2,"Insumos e Materiais Clínicos","",120.49,1,"Cirúrgica Barra LTDA","","c"],["d","2026-01",2,"Insumos e Materiais Clínicos","",120.49,1,"Cirúrgica Barra LTDA","","k"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",115,1,"Atacarejo de Alimentos","","c"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",115,1,"Atacarejo de Alimentos","","k"],["d","2026-01",2,"Materiais  de Uso e Consumo","",86.7,1,"Papelaria Renascer","","c"],["d","2026-01",2,"Materiais  de Uso e Consumo","",86.7,1,"Papelaria Renascer","","k"],["d","2026-01",2,"Insumos e Materiais Clínicos","",83.28,1,"Farmácia Aliança","","c"],["d","2026-01",2,"Insumos e Materiais Clínicos","",83.28,1,"Farmácia Aliança","","k"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",66,1,"Adega Zero Grau Distr","","c"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",66,1,"Adega Zero Grau Distr","","k"],["d","2026-01",2,"Materiais  de Uso e Consumo","",59.33,1,"Papelaria Renascer","","c"],["d","2026-01",2,"Materiais  de Uso e Consumo","",59.33,1,"Papelaria Renascer","","k"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",53,1,"Adega Zero Grau Dist","","c"],["d","2026-01",2,"Lanches, Refeições e Supermercados","",53,1,"Adega Zero Grau Dist","","k"],["d","2026-01",2,"Materiais  de Uso e Consumo","",51.9,1,"Multi Festas","","c"],["d","2026-01",2,"Materiais  de Uso e Consumo","",51.9,1,"Multi Festas","","k"],["d","2026-01",2,"Brindes para Clientes","",35.08,1,"O Boticário","","c"],["d","2026-01",2,"Brindes para Clientes","",35.08,1,"O Boticário","","k"],["d","2026-01",5,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-01",5,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-01",5,"Lanches, Refeições e Supermercados","",25,1,"Sem cliente","","c"],["d","2026-01",5,"Lanches, Refeições e Supermercados","",25,1,"Sem cliente","","k"],["d","2026-01",5,"Serviços de Pessoa Jurídica","",2067,1,"PARCELAMOS TUDO PONTOCOM","","c"],["d","2026-01",5,"Serviços de Pessoa Jurídica","",2067,1,"PARCELAMOS TUDO PONTOCOM","","k"],["d","2026-01",7,"Telefonia e Internet","",35,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",7,"Telefonia e Internet","",35,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",7,"Honorários Contábeis","",190,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",7,"Honorários Contábeis","",190,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",7,"Serviços de Pessoa Jurídica","",825,1,"Sem cliente","","c"],["d","2026-01",7,"Serviços de Pessoa Jurídica","",825,1,"Sem cliente","","k"],["d","2026-01",7,"Serviços de Pessoa Jurídica","",750,1,"Sem cliente","","c"],["d","2026-01",7,"Serviços de Pessoa Jurídica","",750,1,"Sem cliente","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",1158.83,1,"Bios Farmacêutica","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",1158.83,1,"Bios Farmacêutica","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",1145,1,"Unikka Pharma","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",1145,1,"Unikka Pharma","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",598.67,1,"Grupo CMD","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",598.67,1,"Grupo CMD","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","k"],["d","2026-01",7,"Materiais  de Uso e Consumo","",285.9,1,"Mercado Livre","","c"],["d","2026-01",7,"Materiais  de Uso e Consumo","",285.9,1,"Mercado Livre","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","k"],["d","2026-01",7,"Lanches, Refeições e Supermercados","",240.05,1,"Supermercado Cardoso","","c"],["d","2026-01",7,"Lanches, Refeições e Supermercados","",240.05,1,"Supermercado Cardoso","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-01",7,"Software / Licença de Uso","",219.98,1,"Web Diet","","c"],["d","2026-01",7,"Software / Licença de Uso","",219.98,1,"Web Diet","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","k"],["d","2026-01",7,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","c"],["d","2026-01",7,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","k"],["d","2026-01",7,"Software / Licença de Uso","",99,1,"Adapta","","c"],["d","2026-01",7,"Software / Licença de Uso","",99,1,"Adapta","","k"],["d","2026-01",7,"Brindes para Clientes","",95.5,1,"O boticário","","c"],["d","2026-01",7,"Brindes para Clientes","",95.5,1,"O boticário","","k"],["d","2026-01",7,"Materiais  de Uso e Consumo","",90,1,"Forte E-Commerce","","c"],["d","2026-01",7,"Materiais  de Uso e Consumo","",90,1,"Forte E-Commerce","","k"],["d","2026-01",7,"Materiais  de Uso e Consumo","",61,1,"Agro Veterinária","","c"],["d","2026-01",7,"Materiais  de Uso e Consumo","",61,1,"Agro Veterinária","","k"],["d","2026-01",7,"Materiais  de Uso e Consumo","",57.56,1,"Papelaria Renascer","","c"],["d","2026-01",7,"Materiais  de Uso e Consumo","",57.56,1,"Papelaria Renascer","","k"],["d","2026-01",7,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","c"],["d","2026-01",7,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","k"],["d","2026-01",7,"Materiais  de Uso e Consumo","",33,1,"Mercado Livre","","c"],["d","2026-01",7,"Materiais  de Uso e Consumo","",33,1,"Mercado Livre","","k"],["d","2026-01",9,"Coleta de Resíduos Ambientais","",144,1,"Sem cliente","","c"],["d","2026-01",9,"Coleta de Resíduos Ambientais","",144,1,"Sem cliente","","k"],["d","2026-01",9,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-01",9,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-01",9,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-01",9,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",12,"Serviços e Materiais de Limpeza e de Higiene","",480,1,"BARUC DETETIZACAO","","c"],["d","2026-01",12,"Serviços e Materiais de Limpeza e de Higiene","",480,1,"BARUC DETETIZACAO","","k"],["d","2026-01",12,"ASO - Exames Trabalhistas","",50,1,"Sem cliente","","c"],["d","2026-01",12,"ASO - Exames Trabalhistas","",50,1,"Sem cliente","","k"],["d","2026-01",12,"Software / Licença de Uso","",650,1,"GESTAO DA CLINICA","","c"],["d","2026-01",12,"Software / Licença de Uso","",650,1,"GESTAO DA CLINICA","","k"],["d","2026-01",12,"Serviços de Pessoa Jurídica","",720,1,"Sem cliente","","c"],["d","2026-01",12,"Serviços de Pessoa Jurídica","",720,1,"Sem cliente","","k"],["d","2026-01",12,"ISS","",30629.31,1,"Sem cliente","","c"],["d","2026-01",12,"ISS","",30629.31,1,"Sem cliente","","k"],["d","2026-01",13,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",14,"Insumos e Materiais Clínicos","",7500,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-01",14,"Insumos e Materiais Clínicos","",7500,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-01",14,"Brindes para Clientes","",79,1,"Sem cliente","","c"],["d","2026-01",14,"Brindes para Clientes","",79,1,"Sem cliente","","k"],["d","2026-01",15,"Energia Elétrica","",680.71,1,"EDP ESPIRITO SANTO","","c"],["d","2026-01",15,"Energia Elétrica","",680.71,1,"EDP ESPIRITO SANTO","","k"],["d","2026-01",16,"Rescisões","",880,1,"Sem cliente","","c"],["d","2026-01",16,"Rescisões","",880,1,"Sem cliente","","k"],["d","2026-01",19,"Insumos e Materiais Clínicos","",315,1,"Sem cliente","","c"],["d","2026-01",19,"Insumos e Materiais Clínicos","",315,1,"Sem cliente","","k"],["d","2026-01",19,"Materiais  de Uso e Consumo","",53,1,"DANILO DE SOUSA ANDRADE 09175677733","","c"],["d","2026-01",19,"Materiais  de Uso e Consumo","",53,1,"DANILO DE SOUSA ANDRADE 09175677733","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",671.75,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",671.75,1,"Sem cliente","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",517.92,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",517.92,1,"Sem cliente","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",86.31,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",86.31,1,"Sem cliente","","k"],["d","2026-01",20,"INSS sobre Salários - GPS","",2953.74,1,"RECEITA FEDERAL","","c"],["d","2026-01",20,"INSS sobre Salários - GPS","",2953.74,1,"RECEITA FEDERAL","","k"],["d","2026-01",22,"Mentorias, Cursos e Treinamentos","",200,1,"BARBÁRA H SAMPÂIO","","c"],["d","2026-01",22,"Mentorias, Cursos e Treinamentos","",200,1,"BARBÁRA H SAMPÂIO","","k"],["d","2026-01",22,"Materiais  de Uso e Consumo","",53.7,1,"Sem cliente","","c"],["d","2026-01",22,"Materiais  de Uso e Consumo","",53.7,1,"Sem cliente","","k"],["d","2026-01",22,"Materiais  de Uso e Consumo","",21.9,1,"Sem cliente","","c"],["d","2026-01",22,"Materiais  de Uso e Consumo","",21.9,1,"Sem cliente","","k"],["d","2026-01",22,"Lanches, Refeições e Supermercados","",20,1,"Sem cliente","","c"],["d","2026-01",22,"Lanches, Refeições e Supermercados","",20,1,"Sem cliente","","k"],["d","2026-01",22,"Pis/Cofins","",27949.26,1,"RECEITA FEDERAL","","c"],["d","2026-01",22,"Pis/Cofins","",27949.26,1,"RECEITA FEDERAL","","k"],["d","2026-01",22,"INSS sobre Salários - GPS","",4057.82,1,"RECEITA FEDERAL","","c"],["d","2026-01",22,"INSS sobre Salários - GPS","",4057.82,1,"RECEITA FEDERAL","","k"],["d","2026-01",26,"IRPJ E CSLL","",42976.93,1,"RECEITA FEDERAL","","c"],["d","2026-01",26,"IRPJ E CSLL","",42976.93,1,"RECEITA FEDERAL","","k"],["d","2026-01",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-01",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-01",27,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-01",27,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-01",29,"Telefonia e Internet","",35.88,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",29,"Telefonia e Internet","",35.88,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-02",2,"Salários","",3626.71,1,"SAMIRA VIEIRA NEVES","","c"],["d","2026-02",2,"Salários","",3626.71,1,"SAMIRA VIEIRA NEVES","","k"],["d","2026-02",2,"Salários","",2660,1,"SARA LOPES DA SILVA","","c"],["d","2026-02",2,"Salários","",2660,1,"SARA LOPES DA SILVA","","k"],["d","2026-02",2,"Salários","",2299.32,1,"HEMILLY LACERDA BARBOSA","","c"],["d","2026-02",2,"Salários","",2299.32,1,"HEMILLY LACERDA BARBOSA","","k"],["d","2026-02",2,"Salários","",6345.59,1,"BARBÁRA H SAMPÂIO","","c"],["d","2026-02",2,"Salários","",6345.59,1,"BARBÁRA H SAMPÂIO","","k"],["d","2026-02",2,"Insumos e Materiais Clínicos","",1060.64,1,"HEALTH TECH FARMACIA DE MANIPULACAO LTDA","","c"],["d","2026-02",2,"Insumos e Materiais Clínicos","",1060.64,1,"HEALTH TECH FARMACIA DE MANIPULACAO LTDA","","k"],["d","2026-02",2,"Salários","",1280,1,"HELOYZA ANDRADE ELIODORIO","","c"],["d","2026-02",2,"Salários","",1280,1,"HELOYZA ANDRADE ELIODORIO","","k"],["d","2026-02",2,"Outras Despesas Administrativas","",171,1,"Sem cliente","","c"],["d","2026-02",2,"Outras Despesas Administrativas","",171,1,"Sem cliente","","k"],["d","2026-02",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-02",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",328.62,1,"SUPERMERCADO CARDOSO LTDA","","c"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",328.62,1,"SUPERMERCADO CARDOSO LTDA","","k"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",318.85,1,"Atacarejo de Alimentos São Francisco Ltda","","c"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",318.85,1,"Atacarejo de Alimentos São Francisco Ltda","","k"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",195,1,"COMERCIO DE BEBIDAS SCARABELI LTDA","","c"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",195,1,"COMERCIO DE BEBIDAS SCARABELI LTDA","","k"],["d","2026-02",2,"Materiais  de Uso e Consumo","",195,1,"CERIMONIAL ROSA LINDA LTDA ME","","c"],["d","2026-02",2,"Materiais  de Uso e Consumo","",195,1,"CERIMONIAL ROSA LINDA LTDA ME","","k"],["d","2026-02",2,"Materiais  de Uso e Consumo","",175,1,"CERIMONIAL ROSA LINDA LTDA ME","","c"],["d","2026-02",2,"Materiais  de Uso e Consumo","",175,1,"CERIMONIAL ROSA LINDA LTDA ME","","k"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",149.1,1,"Atacarejo de Alimentos São Francisco Ltda","","c"],["d","2026-02",2,"Lanches, Refeições e Supermercados","",149.1,1,"Atacarejo de Alimentos São Francisco Ltda","","k"],["d","2026-02",2,"Materiais  de Uso e Consumo","",135.04,1,"Papelaria Rena","","c"],["d","2026-02",2,"Materiais  de Uso e Consumo","",135.04,1,"Papelaria Rena","","k"],["d","2026-02",2,"Insumos e Materiais Clínicos","",120.49,1,"CIRURGICA BARRA LTDA","","c"],["d","2026-02",2,"Insumos e Materiais Clínicos","",120.49,1,"CIRURGICA BARRA LTDA","","k"],["d","2026-02",2,"Materiais  de Uso e Consumo","",98,1,"FORTE EMBALAGENS LTDA","","c"],["d","2026-02",2,"Materiais  de Uso e Consumo","",98,1,"FORTE EMBALAGENS LTDA","","k"],["d","2026-02",2,"Insumos e Materiais Clínicos","",83.27,1,"AREDES E AREDES LTDA","","c"],["d","2026-02",2,"Insumos e Materiais Clínicos","",83.27,1,"AREDES E AREDES LTDA","","k"],["d","2026-02",2,"Materiais  de Uso e Consumo","",59.33,1,"Papelaria Rena","","c"],["d","2026-02",2,"Materiais  de Uso e Consumo","",59.33,1,"Papelaria Rena","","k"],["d","2026-02",2,"Brindes para Clientes","",35.08,1,"O Boticário","","c"],["d","2026-02",2,"Brindes para Clientes","",35.08,1,"O Boticário","","k"],["d","2026-02",3,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-02",3,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-02",5,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-02",5,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-02",5,"Software / Licença de Uso","",650,1,"GESTAO DA CLINICA","","c"],["d","2026-02",5,"Software / Licença de Uso","",650,1,"GESTAO DA CLINICA","","k"],["d","2026-02",5,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","c"],["d","2026-02",5,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","k"],["d","2026-02",5,"INSS sobre Salários - GPS","",2955.54,1,"RECEITA FEDERAL","","c"],["d","2026-02",5,"INSS sobre Salários - GPS","",2955.54,1,"RECEITA FEDERAL","","k"],["d","2026-02",5,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","c"],["d","2026-02",5,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","k"],["d","2026-02",6,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-02",6,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-02",9,"ISS","",2040,1,"Sem cliente","","c"],["d","2026-02",9,"ISS","",2040,1,"Sem cliente","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",7500,1,"Bio Meds Pharmaceutics","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",7500,1,"Bio Meds Pharmaceutics","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",3030.91,1,"Sgrancio & Souza LTDA","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",3030.91,1,"Sgrancio & Souza LTDA","","k"],["d","2026-02",9,"Benfeitorias no Imóvel","",1483.33,1,"Debora Nunes","","c"],["d","2026-02",9,"Benfeitorias no Imóvel","",1483.33,1,"Debora Nunes","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",1158.83,1,"Bios Farmacêutica","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",1158.83,1,"Bios Farmacêutica","","k"],["d","2026-02",9,"Benfeitorias no Imóvel","",1000,1,"Debora Nunes","","c"],["d","2026-02",9,"Benfeitorias no Imóvel","",1000,1,"Debora Nunes","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",810.45,1,"Bio Meds Pharmaceutics","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",810.45,1,"Bio Meds Pharmaceutics","","k"],["d","2026-02",9,"Mentorias, Cursos e Treinamentos","",797,1,"School Seven","","c"],["d","2026-02",9,"Mentorias, Cursos e Treinamentos","",797,1,"School Seven","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",598.67,1,"Grupo MDV","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",598.67,1,"Grupo MDV","","k"],["d","2026-02",9,"Mentorias, Cursos e Treinamentos","",478,1,"School Seven","","c"],["d","2026-02",9,"Mentorias, Cursos e Treinamentos","",478,1,"School Seven","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-02",9,"Software / Licença de Uso","",219.96,1,"Web Diet","","c"],["d","2026-02",9,"Software / Licença de Uso","",219.96,1,"Web Diet","","k"],["d","2026-02",9,"Lanches, Refeições e Supermercados","",192.21,1,"Supermercado Cardoso","","c"],["d","2026-02",9,"Lanches, Refeições e Supermercados","",192.21,1,"Supermercado Cardoso","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","k"],["d","2026-02",9,"Materiais  de Uso e Consumo","",160,1,"Rosa Linda","","c"],["d","2026-02",9,"Materiais  de Uso e Consumo","",160,1,"Rosa Linda","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","k"],["d","2026-02",9,"Insumos e Materiais Clínicos","",123.52,1,"Farmácia Aliança","","c"],["d","2026-02",9,"Insumos e Materiais Clínicos","",123.52,1,"Farmácia Aliança","","k"],["d","2026-02",9,"Mentorias, Cursos e Treinamentos","",99,1,"Adapta","","c"],["d","2026-02",9,"Mentorias, Cursos e Treinamentos","",99,1,"Adapta","","k"],["d","2026-02",9,"Brindes para Clientes","",95.5,1,"O Boticário","","c"],["d","2026-02",9,"Brindes para Clientes","",95.5,1,"O Boticário","","k"],["d","2026-02",9,"Materiais  de Uso e Consumo","",69.93,1,"SHOPEE La Casa Decora","","c"],["d","2026-02",9,"Materiais  de Uso e Consumo","",69.93,1,"SHOPEE La Casa Decora","","k"],["d","2026-02",9,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","c"],["d","2026-02",9,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","k"],["d","2026-02",9,"Materiais  de Uso e Consumo","",33,1,"Mercado Livre","","c"],["d","2026-02",9,"Materiais  de Uso e Consumo","",33,1,"Mercado Livre","","k"],["d","2026-02",10,"ISS","",206.07,1,"Sem cliente","","c"],["d","2026-02",10,"ISS","",206.07,1,"Sem cliente","","k"],["d","2026-02",12,"Materiais  de Uso e Consumo","",5,1,"REIS & SOUZA LIMITADA","","c"],["d","2026-02",12,"Materiais  de Uso e Consumo","",5,1,"REIS & SOUZA LIMITADA","","k"],["d","2026-02",13,"Telefonia e Internet","",117.3,1,"BIZZ INTERNET LTDA","","c"],["d","2026-02",13,"Telefonia e Internet","",117.3,1,"BIZZ INTERNET LTDA","","k"],["d","2026-02",13,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-02",13,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-02",13,"Coleta de Resíduos Ambientais","",140.64,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-02",13,"Coleta de Resíduos Ambientais","",140.64,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-02",18,"Energia Elétrica","",735.14,1,"EDP ESPIRITO SANTO","","c"],["d","2026-02",18,"Energia Elétrica","",735.14,1,"EDP ESPIRITO SANTO","","k"],["d","2026-02",18,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","c"],["d","2026-02",18,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","k"],["d","2026-02",19,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-02",19,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-02",19,"Telefonia e Internet","",36.74,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-02",19,"Telefonia e Internet","",36.74,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-02",23,"Software / Licença de Uso","",601.25,1,"BIONEXO S.A","","c"],["d","2026-02",23,"Software / Licença de Uso","",601.25,1,"BIONEXO S.A","","k"],["d","2026-02",23,"Insumos e Materiais Clínicos","",2150,1,"Sem cliente","","c"],["d","2026-02",23,"Insumos e Materiais Clínicos","",2150,1,"Sem cliente","","k"],["d","2026-02",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-02",26,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-03",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-03",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-03",2,"Materiais  de Uso e Consumo","",390,1,"CERIMONIAL ROSA LINDA LTDA ME","","c"],["d","2026-03",2,"Materiais  de Uso e Consumo","",390,1,"CERIMONIAL ROSA LINDA LTDA ME","","k"],["d","2026-03",2,"Materiais  de Uso e Consumo","",175,1,"CERIMONIAL ROSA LINDA LTDA ME","","c"],["d","2026-03",2,"Materiais  de Uso e Consumo","",175,1,"CERIMONIAL ROSA LINDA LTDA ME","","k"],["d","2026-03",2,"Materiais  de Uso e Consumo","",135.03,1,"Papelaria Rena","","c"],["d","2026-03",2,"Materiais  de Uso e Consumo","",135.03,1,"Papelaria Rena","","k"],["d","2026-03",2,"Materiais  de Uso e Consumo","",131.6,1,"FORTE EMBALAGENS LTDA","","c"],["d","2026-03",2,"Materiais  de Uso e Consumo","",131.6,1,"FORTE EMBALAGENS LTDA","","k"],["d","2026-03",2,"Insumos e Materiais Clínicos","",83.27,1,"Sem cliente","","c"],["d","2026-03",2,"Insumos e Materiais Clínicos","",83.27,1,"Sem cliente","","k"],["d","2026-03",2,"Materiais  de Uso e Consumo","",70,1,"Comercial V B","","c"],["d","2026-03",2,"Materiais  de Uso e Consumo","",70,1,"Comercial V B","","k"],["d","2026-03",2,"Insumos e Materiais Clínicos","",49.98,1,"CIRURGICA BARRA LTDA","","c"],["d","2026-03",2,"Insumos e Materiais Clínicos","",49.98,1,"CIRURGICA BARRA LTDA","","k"],["d","2026-03",2,"Brindes para Clientes","",35.08,1,"O Boticário","","c"],["d","2026-03",2,"Brindes para Clientes","",35.08,1,"O Boticário","","k"],["d","2026-03",3,"Salários","",4604.02,1,"BARBÁRA H SAMPÂIO","","c"],["d","2026-03",3,"Salários","",4604.02,1,"BARBÁRA H SAMPÂIO","","k"],["d","2026-03",3,"Salários","",4400,1,"HELOYZA ANDRADE ELIODORIO","","c"],["d","2026-03",3,"Salários","",4400,1,"HELOYZA ANDRADE ELIODORIO","","k"],["d","2026-03",3,"Salários","",3781.71,1,"SAMIRA VIEIRA NEVES","","c"],["d","2026-03",3,"Salários","",3781.71,1,"SAMIRA VIEIRA NEVES","","k"],["d","2026-03",3,"Salários","",2299.32,1,"HEMILLY LACERDA BARBOSA","","c"],["d","2026-03",3,"Salários","",2299.32,1,"HEMILLY LACERDA BARBOSA","","k"],["d","2026-03",3,"Telefonia e Internet","",44.89,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",3,"Telefonia e Internet","",44.89,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",3,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",3,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",3,"Salários","",980,1,"SARA LOPES DA SILVA","","c"],["d","2026-03",3,"Salários","",980,1,"SARA LOPES DA SILVA","","k"],["d","2026-03",3,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-02",27,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",4113.35,1,"Unikka Pharma","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",4113.35,1,"Unikka Pharma","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",2916.55,1,"Unikka Pharma","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",2916.55,1,"Unikka Pharma","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",1746.02,1,"Unikka Pharma","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",1746.02,1,"Unikka Pharma","","k"],["d","2026-03",3,"Marketing, Publicidade e Eventos","",1128.56,1,"Facebook","","c"],["d","2026-01",12,"Marketing, Publicidade e Eventos","",1128.56,1,"Facebook","","k"],["d","2026-03",3,"Marketing, Publicidade e Eventos","",1128.16,1,"Facebook","","c"],["d","2026-01",12,"Marketing, Publicidade e Eventos","",1128.16,1,"Facebook","","k"],["d","2026-03",3,"Brindes para Clientes","",662.93,1,"K R Chocolates LTDA","","c"],["d","2026-01",12,"Brindes para Clientes","",662.93,1,"K R Chocolates LTDA","","k"],["d","2026-03",3,"Software / Licença de Uso","",599.9,1,"Cloudia","","c"],["d","2026-01",12,"Software / Licença de Uso","",599.9,1,"Cloudia","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",507.95,1,"Grupo CMD","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",507.95,1,"Grupo CMD","","k"],["d","2026-03",3,"Lanches, Refeições e Supermercados","",368,1,"Distribuidora de Bebid","","c"],["d","2026-01",12,"Lanches, Refeições e Supermercados","",368,1,"Distribuidora de Bebid","","k"],["d","2026-03",3,"Marketing, Publicidade e Eventos","",361.8,1,"Facebook","","c"],["d","2026-01",12,"Marketing, Publicidade e Eventos","",361.8,1,"Facebook","","k"],["d","2026-03",3,"Materiais  de Uso e Consumo","",282.98,1,"Amazon BR","","c"],["d","2026-01",12,"Materiais  de Uso e Consumo","",282.98,1,"Amazon BR","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",263.71,1,"Grupo CMD","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",263.71,1,"Grupo CMD","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",240.45,1,"Magazine Med","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",240.45,1,"Magazine Med","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",237.31,1,"Central Injetáveis","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",237.31,1,"Central Injetáveis","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",222.3,1,"Cirúrgica Barra","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",222.3,1,"Cirúrgica Barra","","k"],["d","2026-03",3,"Móveis, Utensílios e Instalações Administrativos","",192.87,1,"Estok Distribuidora","","c"],["d","2026-01",12,"Móveis, Utensílios e Instalações Administrativos","",192.87,1,"Estok Distribuidora","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",177.68,1,"Central Injetáveis","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",177.68,1,"Central Injetáveis","","k"],["d","2026-03",3,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-01",12,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-03",3,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-01",12,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",99.24,1,"Central Injetáveis","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",99.24,1,"Central Injetáveis","","k"],["d","2026-03",3,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","k"],["d","2026-03",3,"Móveis, Utensílios e Instalações Administrativos","",66.14,1,"LaCasaDeco","","c"],["d","2026-01",12,"Móveis, Utensílios e Instalações Administrativos","",66.14,1,"LaCasaDeco","","k"],["d","2026-03",3,"Lanches, Refeições e Supermercados","",36,1,"Pit Stop Barras","","c"],["d","2026-01",12,"Lanches, Refeições e Supermercados","",36,1,"Pit Stop Barras","","k"],["d","2026-03",4,"Materiais  de Uso e Consumo","",100,1,"EXTINSAN EXTINTORES LTDA","","c"],["d","2026-03",2,"Materiais  de Uso e Consumo","",100,1,"EXTINSAN EXTINTORES LTDA","","k"],["d","2026-03",4,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-03",4,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-03",4,"Salários","",1500,1,"NEUZA FERNANDES MARTINS","","c"],["d","2026-03",4,"Salários","",1500,1,"NEUZA FERNANDES MARTINS","","k"],["d","2026-03",4,"Coleta de Resíduos Ambientais","",125.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-03",4,"Coleta de Resíduos Ambientais","",125.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-03",4,"Seguros","",61.29,1,"PORTO SEGURO COMPANHIA DE SEGUROS GERAIS","","c"],["d","2026-03",4,"Seguros","",61.29,1,"PORTO SEGURO COMPANHIA DE SEGUROS GERAIS","","k"],["d","2026-03",4,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-03",26,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-03",5,"Plano de Saúde Colaboradores","",499.09,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-03",5,"Plano de Saúde Colaboradores","",499.09,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-03",6,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-03",6,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","c"],["d","2026-03",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","k"],["d","2026-03",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-03",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-03",6,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-03",6,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-03",9,"Insumos e Materiais Clínicos","",6116.25,1,"Sem cliente","","c"],["d","2026-03",9,"Insumos e Materiais Clínicos","",6116.25,1,"Sem cliente","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",3030.91,1,"Sgrancio & Souza LTDA","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",3030.91,1,"Sgrancio & Souza LTDA","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","k"],["d","2026-03",10,"Máquinas, Equipamentos e Instalações","",1206,1,"Next Segurança Eletr","","c"],["d","2026-03",13,"Máquinas, Equipamentos e Instalações","",1206,1,"Next Segurança Eletr","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",810.45,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",810.45,1,"Bio Meds Pharmaceutics","","k"],["d","2026-03",10,"Software / Licença de Uso","",599.9,1,"Cloudia","","c"],["d","2026-03",13,"Software / Licença de Uso","",599.9,1,"Cloudia","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",598.65,1,"Grupo CMD","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",598.65,1,"Grupo CMD","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",592.67,1,"Stin Pharma e Comme","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",592.67,1,"Stin Pharma e Comme","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",320.1,1,"Magazine Med","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",320.1,1,"Magazine Med","","k"],["d","2026-03",10,"Lanches, Refeições e Supermercados","",318,1,"49.410.252 Gustavo S Barra de São","","c"],["d","2026-03",13,"Lanches, Refeições e Supermercados","",318,1,"49.410.252 Gustavo S Barra de São","","k"],["d","2026-03",10,"Software / Licença de Uso","",305.88,1,"Conta Azul","","c"],["d","2026-03",13,"Software / Licença de Uso","",305.88,1,"Conta Azul","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-03",10,"Serviços e Materiais de Limpeza e de Higiene","",212.67,1,"Marilza Moda Intima","","c"],["d","2026-03",13,"Serviços e Materiais de Limpeza e de Higiene","",212.67,1,"Marilza Moda Intima","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",197.78,1,"Bios Farmacêutica","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",197.78,1,"Bios Farmacêutica","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","k"],["d","2026-03",10,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","k"],["d","2026-03",10,"Materiais  de Uso e Consumo","",105,1,"Paizante Tem de Tudo","","c"],["d","2026-03",13,"Materiais  de Uso e Consumo","",105,1,"Paizante Tem de Tudo","","k"],["d","2026-03",10,"Software / Licença de Uso","",99,1,"Adapta","","c"],["d","2026-03",13,"Software / Licença de Uso","",99,1,"Adapta","","k"],["d","2026-03",10,"Materiais  de Uso e Consumo","",69.92,1,"SHOPEE*LaCasaDecora","","c"],["d","2026-03",13,"Materiais  de Uso e Consumo","",69.92,1,"SHOPEE*LaCasaDecora","","k"],["d","2026-03",10,"Brindes para Clientes","",59.07,1,"O Boticário","","c"],["d","2026-03",13,"Brindes para Clientes","",59.07,1,"O Boticário","","k"],["d","2026-03",10,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","c"],["d","2026-03",13,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","k"],["d","2026-03",11,"Insumos e Materiais Clínicos","",728.25,1,"Bios Farmacêutica","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",728.25,1,"Bios Farmacêutica","","k"],["d","2026-03",12,"Materiais  de Uso e Consumo","",98,1,"REIS & SOUZA LIMITADA","","c"],["d","2026-03",12,"Materiais  de Uso e Consumo","",98,1,"REIS & SOUZA LIMITADA","","k"],["d","2026-03",13,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","c"],["d","2026-03",13,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","k"],["d","2026-03",13,"INSS sobre Salários - GPS","",2876.6,1,"RECEITA FEDERAL","","c"],["d","2026-03",13,"INSS sobre Salários - GPS","",2876.6,1,"RECEITA FEDERAL","","k"],["d","2026-03",13,"Pis/Cofins","",199.83,1,"RECEITA FEDERAL","","c"],["d","2026-03",13,"Pis/Cofins","",199.83,1,"RECEITA FEDERAL","","k"],["d","2026-03",13,"Insumos e Materiais Clínicos","",232.8,1,"Bios Farmacêutica","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",232.8,1,"Bios Farmacêutica","","k"],["d","2026-03",13,"Benfeitorias no Imóvel","",226.28,1,"Debora Nunes","","c"],["d","2026-03",13,"Benfeitorias no Imóvel","",226.28,1,"Debora Nunes","","k"],["d","2026-03",13,"Insumos e Materiais Clínicos","",123.52,1,"Farmácia Aliança","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",123.52,1,"Farmácia Aliança","","k"],["d","2026-03",13,"Insumos e Materiais Clínicos","",7500,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",7500,1,"Bio Meds Pharmaceutics","","k"],["d","2026-03",13,"Benfeitorias no Imóvel","",1483.33,1,"Debora Nunes","","c"],["d","2026-03",13,"Benfeitorias no Imóvel","",1483.33,1,"Debora Nunes","","k"],["d","2026-03",13,"Benfeitorias no Imóvel","",773.72,1,"Debora Nunes","","c"],["d","2026-03",13,"Benfeitorias no Imóvel","",773.72,1,"Debora Nunes","","k"],["d","2026-03",13,"Insumos e Materiais Clínicos","",243.07,1,"Centra Farma","","c"],["d","2026-03",13,"Insumos e Materiais Clínicos","",243.07,1,"Centra Farma","","k"],["d","2026-03",13,"Lanches, Refeições e Supermercados","",192.2,1,"Supermercado Cardoso","","c"],["d","2026-03",13,"Lanches, Refeições e Supermercados","",192.2,1,"Supermercado Cardoso","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",4992.96,1,"Bio Meds Pharmaceuti","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",4992.96,1,"Bio Meds Pharmaceuti","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",997.91,1,"Drogasil","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",997.91,1,"Drogasil","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",550.3,1,"Elmeco Com Prod ME","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",550.3,1,"Elmeco Com Prod ME","","k"],["d","2026-03",15,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","c"],["d","2026-02",10,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","k"],["d","2026-03",15,"Viagens e Representações","",312.02,1,"GOL Linhas","","c"],["d","2026-03",10,"Viagens e Representações","",312.02,1,"GOL Linhas","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",240.45,1,"Magazine Med","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",240.45,1,"Magazine Med","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",237.31,1,"Central Injetáveis","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",237.31,1,"Central Injetáveis","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",237.31,1,"CENTRAL INJETAVEIS","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",237.31,1,"CENTRAL INJETAVEIS","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-03",15,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-03",10,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-03",15,"Marketing, Publicidade e Eventos","",104.08,1,"Facebook","","c"],["d","2026-02",10,"Marketing, Publicidade e Eventos","",104.08,1,"Facebook","","k"],["d","2026-03",15,"Insumos e Materiais Clínicos","",99.24,1,"Central Injetáveis","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",99.24,1,"Central Injetáveis","","k"],["d","2026-03",15,"Materiais  de Uso e Consumo","",90.23,1,"Mercado Livre","","c"],["d","2026-03",10,"Materiais  de Uso e Consumo","",90.23,1,"Mercado Livre","","k"],["d","2026-03",15,"Materiais  de Uso e Consumo","",90.23,1,"Mercado Livre","","c"],["d","2026-02",10,"Materiais  de Uso e Consumo","",90.23,1,"Mercado Livre","","k"],["d","2026-03",15,"Materiais  de Uso e Consumo","",66.14,1,"LaCasaDeco","","c"],["d","2026-03",10,"Materiais  de Uso e Consumo","",66.14,1,"LaCasaDeco","","k"],["d","2026-03",15,"Software / Licença de Uso","",58,1,"OpenAI","","c"],["d","2026-02",10,"Software / Licença de Uso","",58,1,"OpenAI","","k"],["d","2026-03",15,"Software / Licença de Uso","",57.87,1,"OpenAI","","c"],["d","2026-02",10,"Software / Licença de Uso","",57.87,1,"OpenAI","","k"],["d","2026-03",16,"Serviços de Pessoa Jurídica","",240,1,"Sem cliente","","c"],["d","2026-03",16,"Serviços de Pessoa Jurídica","",240,1,"Sem cliente","","k"],["d","2026-03",16,"Salários","",150,1,"SARA LOPES DA SILVA","","c"],["d","2026-03",16,"Salários","",150,1,"SARA LOPES DA SILVA","","k"],["d","2026-03",16,"Materiais  de Uso e Consumo","",100,1,"Sem cliente","","c"],["d","2026-03",16,"Materiais  de Uso e Consumo","",100,1,"Sem cliente","","k"],["d","2026-03",16,"Materiais  de Uso e Consumo","",232.27,1,"Sem cliente","","c"],["d","2026-03",16,"Materiais  de Uso e Consumo","",232.27,1,"Sem cliente","","k"],["d","2026-03",16,"Mentorias, Cursos e Treinamentos","",9540,1,"SKINCONTOUR ACADEMY LTDA","","c"],["d","2026-03",16,"Mentorias, Cursos e Treinamentos","",9540,1,"SKINCONTOUR ACADEMY LTDA","","k"],["d","2026-03",16,"Mentorias, Cursos e Treinamentos","",8640,1,"Sem cliente","","c"],["d","2026-03",16,"Mentorias, Cursos e Treinamentos","",8640,1,"Sem cliente","","k"],["d","2026-03",17,"Energia Elétrica","",718,1,"EDP ESPIRITO SANTO","","c"],["d","2026-03",17,"Energia Elétrica","",718,1,"EDP ESPIRITO SANTO","","k"],["d","2026-03",17,"Serviços de Pessoa Jurídica","",350,1,"STR COMERCIO EM GERAL E CLIMATIZACAO EIRELI","","c"],["d","2026-03",17,"Serviços de Pessoa Jurídica","",350,1,"STR COMERCIO EM GERAL E CLIMATIZACAO EIRELI","","k"],["d","2026-03",18,"Honorários Contábeis","",220,1,"Sem cliente","","c"],["d","2026-03",18,"Honorários Contábeis","",220,1,"Sem cliente","","k"],["d","2026-03",18,"Materiais  de Uso e Consumo","",30,1,"Sem cliente","","c"],["d","2026-03",18,"Materiais  de Uso e Consumo","",30,1,"Sem cliente","","k"],["d","2026-03",18,"Lanches, Refeições e Supermercados","",190,1,"Sem cliente","","c"],["d","2026-03",18,"Lanches, Refeições e Supermercados","",190,1,"Sem cliente","","k"],["d","2026-03",18,"Materiais  de Uso e Consumo","",400,1,"Sem cliente","","c"],["d","2026-03",18,"Materiais  de Uso e Consumo","",400,1,"Sem cliente","","k"],["d","2026-03",20,"Materiais  de Uso e Consumo","",820,1,"Sem cliente","","c"],["d","2026-03",20,"Materiais  de Uso e Consumo","",820,1,"Sem cliente","","k"],["d","2026-03",20,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-03",17,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-03",23,"Insumos e Materiais Clínicos","",3727.5,1,"FLUKKA FARMA","","c"],["d","2026-03",23,"Insumos e Materiais Clínicos","",3727.5,1,"FLUKKA FARMA","","k"],["d","2026-03",23,"Marketing, Publicidade e Eventos","",2102.5,1,"Sem cliente","","c"],["d","2026-03",23,"Marketing, Publicidade e Eventos","",2102.5,1,"Sem cliente","","k"],["d","2026-03",23,"Serviços de Pessoa Jurídica","",60,1,"Sem cliente","","c"],["d","2026-03",23,"Serviços de Pessoa Jurídica","",60,1,"Sem cliente","","k"],["d","2026-03",23,"Telefonia e Internet","",35.7,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",23,"Telefonia e Internet","",35.7,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",23,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-03",23,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",7500,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",7500,1,"Bio Meds Pharmaceutics","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",6176.25,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",6176.25,1,"Bio Meds Pharmaceutics","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",4534.66,1,"Unikka Pharma","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",4534.66,1,"Unikka Pharma","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",4000,1,"Google ADS","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",4000,1,"Google ADS","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",2083.47,1,"Bios Farmacêutica","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",2083.47,1,"Bios Farmacêutica","","k"],["d","2026-03",24,"Benfeitorias no Imóvel","",1483.34,1,"Debora Nunes","","c"],["d","2026-03",24,"Benfeitorias no Imóvel","",1483.34,1,"Debora Nunes","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",1366.94,1,"Sgrancio & Souza LTDA","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",1366.94,1,"Sgrancio & Souza LTDA","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","k"],["d","2026-03",24,"Máquinas, Equipamentos e Instalações","",1206,1,"Next Segurança Eletr","","c"],["d","2026-03",24,"Máquinas, Equipamentos e Instalações","",1206,1,"Next Segurança Eletr","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",1158.83,1,"Bios Farmacêutica","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",1158.83,1,"Bios Farmacêutica","","k"],["d","2026-03",24,"Benfeitorias no Imóvel","",1000,1,"Debora Nunes","","c"],["d","2026-03",24,"Benfeitorias no Imóvel","",1000,1,"Debora Nunes","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",810.45,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",810.45,1,"Bio Meds Pharmaceutics","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",639.18,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",639.18,1,"Bio Meds Pharmaceutics","","k"],["d","2026-03",24,"Software / Licença de Uso","",599.9,1,"Cloudia","","c"],["d","2026-03",24,"Software / Licença de Uso","",599.9,1,"Cloudia","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",592.67,1,"Stin Pharma e Comme","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",592.67,1,"Stin Pharma e Comme","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","k"],["d","2026-03",24,"Lanches, Refeições e Supermercados","",311.06,1,"Restaurante Vitória","","c"],["d","2026-03",24,"Lanches, Refeições e Supermercados","",311.06,1,"Restaurante Vitória","","k"],["d","2026-03",24,"Software / Licença de Uso","",305.88,1,"Conta Azul","","c"],["d","2026-03",24,"Software / Licença de Uso","",305.88,1,"Conta Azul","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",272.09,1,"Magazine Med","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",272.09,1,"Magazine Med","","k"],["d","2026-03",24,"Viagens e Representações","",252,1,"Hotel Ilha do Boi Vitória","","c"],["d","2026-03",24,"Viagens e Representações","",252,1,"Hotel Ilha do Boi Vitória","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",233.65,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",233.65,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",217.48,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",217.48,1,"Facebook","","k"],["d","2026-03",24,"Serviços e Materiais de Limpeza e de Higiene","",212.67,1,"Marilza Moda Intima","","c"],["d","2026-03",24,"Serviços e Materiais de Limpeza e de Higiene","",212.67,1,"Marilza Moda Intima","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",194.65,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",194.65,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",191.34,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",191.34,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",163.35,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",163.35,1,"Facebook","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",123.52,1,"Farmácia Aliança","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",123.52,1,"Farmácia Aliança","","k"],["d","2026-03",24,"Lanches, Refeições e Supermercados","",118,1,"Don Paganotto","","c"],["d","2026-03",24,"Lanches, Refeições e Supermercados","",118,1,"Don Paganotto","","k"],["d","2026-03",24,"Materiais  de Uso e Consumo","",105,1,"Paizante Tem de Tudo","","c"],["d","2026-03",24,"Materiais  de Uso e Consumo","",105,1,"Paizante Tem de Tudo","","k"],["d","2026-03",24,"Software / Licença de Uso","",99,1,"Adapta","","c"],["d","2026-03",24,"Software / Licença de Uso","",99,1,"Adapta","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",94.62,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",94.62,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",94.55,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",94.55,1,"Facebook","","k"],["d","2026-03",24,"Software / Licença de Uso","",78,1,"OpenAI","","c"],["d","2026-03",24,"Software / Licença de Uso","",78,1,"OpenAI","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",72.87,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",72.87,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",70.71,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",70.71,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",69.45,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",69.45,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",55.88,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",55.88,1,"Facebook","","k"],["d","2026-03",24,"Software / Licença de Uso","",53.22,1,"OpenAI","","c"],["d","2026-03",24,"Software / Licença de Uso","",53.22,1,"OpenAI","","k"],["d","2026-03",24,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","c"],["d","2026-03",24,"Serviços e Materiais de Limpeza e de Higiene","",43.33,1,"Mercado Livre","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",38.02,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",38.02,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",29.29,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",29.29,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",27.46,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",27.46,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",19,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",19,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",16.64,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",16.64,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",16.47,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",16.47,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",14.95,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",14.95,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",14.8,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",14.8,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",12.91,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",12.91,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",12.81,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",12.81,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",12.56,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",12.56,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",11.99,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",11.99,1,"Facebook","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",2383.34,1,"Farmacia Arte","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",2383.34,1,"Farmacia Arte","","k"],["d","2026-03",24,"Software / Licença de Uso","",588.9,1,"Bionexo","","c"],["d","2026-03",24,"Software / Licença de Uso","",588.9,1,"Bionexo","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-03",24,"Combustíveis","",177,1,"Posto Alvorada LTDA","","c"],["d","2026-03",24,"Combustíveis","",177,1,"Posto Alvorada LTDA","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra LTDA","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra LTDA","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",157.56,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",157.56,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",117.47,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",117.47,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",91.47,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",91.47,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",76.03,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",76.03,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",73.39,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",73.39,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",70.64,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",70.64,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",61.85,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",61.85,1,"Facebook","","k"],["d","2026-03",24,"Brindes para Clientes","",59.07,1,"O Boticário","","c"],["d","2026-03",24,"Brindes para Clientes","",59.07,1,"O Boticário","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",52.39,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",52.39,1,"Facebook","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",48.01,1,"Magazine Med","","c"],["d","2026-03",24,"Insumos e Materiais Clínicos","",48.01,1,"Magazine Med","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",37.59,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",37.59,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",26.24,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",26.24,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",19.4,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",19.4,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",19,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",19,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",14.83,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",14.83,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",13.86,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",13.86,1,"Facebook","","k"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",13.74,1,"Facebook","","c"],["d","2026-03",24,"Marketing, Publicidade e Eventos","",13.74,1,"Facebook","","k"],["d","2026-03",24,"Insumos e Materiais Clínicos","",750,1,"Bio Meds Pharmaceuti","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",750,1,"Bio Meds Pharmaceuti","","k"],["d","2026-03",26,"Lanches, Refeições e Supermercados","",284,1,"DON PAGANOTTO LTDA","","c"],["d","2026-03",26,"Lanches, Refeições e Supermercados","",284,1,"DON PAGANOTTO LTDA","","k"],["d","2026-03",26,"Serviços de Pessoa Jurídica","",200,1,"Sem cliente","","c"],["d","2026-03",26,"Serviços de Pessoa Jurídica","",200,1,"Sem cliente","","k"],["d","2026-03",26,"Marketing, Publicidade e Eventos","",800,1,"Sem cliente","","c"],["d","2026-03",26,"Marketing, Publicidade e Eventos","",800,1,"Sem cliente","","k"],["d","2026-03",26,"Materiais  de Uso e Consumo","",160,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","c"],["d","2026-03",26,"Materiais  de Uso e Consumo","",160,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","k"],["d","2026-03",26,"Marketing, Publicidade e Eventos","",2192.5,1,"Sem cliente","","c"],["d","2026-03",26,"Marketing, Publicidade e Eventos","",2192.5,1,"Sem cliente","","k"],["d","2026-03",26,"Pis/Cofins","",56.61,1,"RECEITA FEDERAL","","c"],["d","2026-03",26,"Pis/Cofins","",56.61,1,"RECEITA FEDERAL","","k"],["d","2026-03",26,"Marketing, Publicidade e Eventos","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",27,"Materiais  de Uso e Consumo","",115,1,"Sem cliente","","c"],["d","2026-03",27,"Materiais  de Uso e Consumo","",115,1,"Sem cliente","","k"],["d","2026-03",27,"Lanches, Refeições e Supermercados","",15,1,"Sem cliente","","c"],["d","2026-03",27,"Lanches, Refeições e Supermercados","",15,1,"Sem cliente","","k"],["d","2026-03",30,"Telefonia e Internet","",21.56,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",30,"Telefonia e Internet","",21.56,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",30,"Serviços de Pessoa Jurídica","",70,1,"MH INFOR","","c"],["d","2026-03",30,"Serviços de Pessoa Jurídica","",70,1,"MH INFOR","","k"],["d","2026-03",30,"Materiais  de Uso e Consumo","",230,1,"ARTCOPIAS","","c"],["d","2026-03",30,"Materiais  de Uso e Consumo","",230,1,"ARTCOPIAS","","k"],["d","2026-03",30,"Marketing, Publicidade e Eventos","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",31,"Serviços de Pessoa Jurídica","",825,1,"Sem cliente","","c"],["d","2026-03",31,"Serviços de Pessoa Jurídica","",825,1,"Sem cliente","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",6388.08,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",6388.08,1,"Bio Meds Pharmaceutics","","k"],["d","2026-03",31,"Materiais  de Uso e Consumo","",1310,1,"Duty Paid Congonhas II","","c"],["d","2026-03",10,"Materiais  de Uso e Consumo","",1310,1,"Duty Paid Congonhas II","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",1091.35,1,"Formedica","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",1091.35,1,"Formedica","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",750,1,"Drogasil","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",750,1,"Drogasil","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",750,1,"Drogasil","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",750,1,"Drogasil","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",714,1,"Elmeco Com Prod ME","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",714,1,"Elmeco Com Prod ME","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",507.95,1,"Grupo CMD","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",507.95,1,"Grupo CMD","","k"],["d","2026-03",31,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","c"],["d","2026-04",10,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","k"],["d","2026-03",31,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","c"],["d","2026-03",10,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",288.95,1,"DAC Distribuidora","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",288.95,1,"DAC Distribuidora","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","k"],["d","2026-03",31,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","c"],["d","2026-03",10,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","k"],["d","2026-03",31,"Móveis, Utensílios e Instalações Administrativos","",192.87,1,"Estok Distribuidora","","c"],["d","2026-03",10,"Móveis, Utensílios e Instalações Administrativos","",192.87,1,"Estok Distribuidora","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",163.7,1,"Elmeco Com Prod ME","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",163.7,1,"Elmeco Com Prod ME","","k"],["d","2026-03",31,"Materiais  de Uso e Consumo","",160,1,"Aguinaldo do Nasciment","","c"],["d","2026-03",10,"Materiais  de Uso e Consumo","",160,1,"Aguinaldo do Nasciment","","k"],["d","2026-03",31,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-03",10,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",99.24,1,"CENTRAL INJETAVEIS","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",99.24,1,"CENTRAL INJETAVEIS","","k"],["d","2026-03",31,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","k"],["d","2026-03",31,"Viagens e Representações","",52.93,1,"Decolar","","c"],["d","2026-03",10,"Viagens e Representações","",52.93,1,"Decolar","","k"],["d","2026-04",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-04",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-04",1,"Salários","",4261,1,"SAMIRA VIEIRA NEVES","","c"],["d","2026-04",1,"Salários","",4261,1,"SAMIRA VIEIRA NEVES","","k"],["d","2026-04",1,"Salários","",3746.76,1,"Sem cliente","","c"],["d","2026-04",1,"Salários","",3746.76,1,"Sem cliente","","k"],["d","2026-04",1,"Salários","",3710,1,"HELOYZA ANDRADE ELIODORIO","","c"],["d","2026-04",1,"Salários","",3710,1,"HELOYZA ANDRADE ELIODORIO","","k"],["d","2026-04",1,"Salários","",2820,1,"NEUZA FERNANDES MARTINS","","c"],["d","2026-04",1,"Salários","",2820,1,"NEUZA FERNANDES MARTINS","","k"],["d","2026-04",1,"Salários","",2800,1,"SARA LOPES DA SILVA","","c"],["d","2026-04",1,"Salários","",2800,1,"SARA LOPES DA SILVA","","k"],["d","2026-04",1,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-02",26,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",1440,1,"Barra Copy Gráfica","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",1440,1,"Barra Copy Gráfica","","k"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",175,1,"Adega Zero Grau Distr","","c"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",175,1,"Adega Zero Grau Distr","","k"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",170.24,1,"Supermercado Cardoso","","c"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",170.24,1,"Supermercado Cardoso","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",140,1,"Rosa Linda","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",140,1,"Rosa Linda","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",140,1,"Cerimonial Rosa Linda","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",140,1,"Cerimonial Rosa Linda","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",135.03,1,"Papelaria Renascer","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",135.03,1,"Papelaria Renascer","","k"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",133.59,1,"Supermercado Cardoso","","c"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",133.59,1,"Supermercado Cardoso","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",130,1,"Rosa Linda","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",130,1,"Rosa Linda","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",121.5,1,"Reis e Souza L","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",121.5,1,"Reis e Souza L","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",115,1,"Rosa Linda","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",115,1,"Rosa Linda","","k"],["d","2026-04",1,"Serviços de Pessoa Jurídica","",91,1,"Nickscell","","c"],["d","2026-04",1,"Serviços de Pessoa Jurídica","",91,1,"Nickscell","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",89.52,1,"Farmácia Aliança","","c"],["d","2026-04",1,"Insumos e Materiais Clínicos","",89.52,1,"Farmácia Aliança","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",86.7,1,"Papelaria Renascer","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",86.7,1,"Papelaria Renascer","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",69.99,1,"Comercial V B","","c"],["d","2026-04",1,"Materiais  de Uso e Consumo","",69.99,1,"Comercial V B","","k"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",63.92,1,"Supermercado Cardoso","","c"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",63.92,1,"Supermercado Cardoso","","k"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",52.71,1,"Supermercado Cardoso","","c"],["d","2026-04",1,"Lanches, Refeições e Supermercados","",52.71,1,"Supermercado Cardoso","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",49.97,1,"Cirúrgica Barra","","c"],["d","2026-04",1,"Insumos e Materiais Clínicos","",49.97,1,"Cirúrgica Barra","","k"],["d","2026-04",1,"Brindes para Clientes","",35.08,1,"Boticário","","c"],["d","2026-04",1,"Brindes para Clientes","",35.08,1,"Boticário","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",26.46,1,"Farmácia Aliança","","c"],["d","2026-04",1,"Insumos e Materiais Clínicos","",26.46,1,"Farmácia Aliança","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",6750,1,"Bio Meds Pharmaceuti","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",6750,1,"Bio Meds Pharmaceuti","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",3689.87,1,"Unikka Pharma","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",3689.87,1,"Unikka Pharma","","k"],["d","2026-04",1,"Marketing, Publicidade e Eventos","",1128.14,1,"Facebook","","c"],["d","2026-01",12,"Marketing, Publicidade e Eventos","",1128.14,1,"Facebook","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",867.71,1,"Bios Farmacêutica","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",867.71,1,"Bios Farmacêutica","","k"],["d","2026-04",1,"Software / Licença de Uso","",588.9,1,"Bionexo","","c"],["d","2026-01",12,"Software / Licença de Uso","",588.9,1,"Bionexo","","k"],["d","2026-04",1,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","c"],["d","2026-01",12,"Móveis, Utensílios e Instalações Administrativos","",507.9,1,"Biju Mania","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",275.44,1,"Grupo CMD","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",275.44,1,"Grupo CMD","","k"],["d","2026-04",1,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","c"],["d","2026-01",12,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",150.6,1,"Mercado Livre","","c"],["d","2026-01",12,"Materiais  de Uso e Consumo","",150.6,1,"Mercado Livre","","k"],["d","2026-04",1,"Brindes para Clientes","",129.8,1,"Marilza Moda-CT IMA","","c"],["d","2026-01",12,"Brindes para Clientes","",129.8,1,"Marilza Moda-CT IMA","","k"],["d","2026-04",1,"Materiais  de Uso e Consumo","",90.23,1,"Mercado Livre","","c"],["d","2026-01",12,"Materiais  de Uso e Consumo","",90.23,1,"Mercado Livre","","k"],["d","2026-04",1,"Insumos e Materiais Clínicos","",62.47,1,"Farmácia Ali-CT","","c"],["d","2026-01",12,"Insumos e Materiais Clínicos","",62.47,1,"Farmácia Ali-CT","","k"],["d","2026-04",2,"Salários","",2299.32,1,"HEMILLY LACERDA BARBOSA","","c"],["d","2026-04",2,"Salários","",2299.32,1,"HEMILLY LACERDA BARBOSA","","k"],["d","2026-04",2,"Marketing, Publicidade e Eventos","",1800,1,"Sem cliente","","c"],["d","2026-04",2,"Marketing, Publicidade e Eventos","",1800,1,"Sem cliente","","k"],["d","2026-04",2,"Materiais  de Uso e Consumo","",7.1,1,"Sem cliente","","c"],["d","2026-04",2,"Materiais  de Uso e Consumo","",7.1,1,"Sem cliente","","k"],["d","2026-04",2,"Marketing, Publicidade e Eventos","",1800,1,"Sem cliente","","c"],["d","2026-04",2,"Marketing, Publicidade e Eventos","",1800,1,"Sem cliente","","k"],["d","2026-04",2,"Serviços e Materiais de Limpeza e de Higiene","",1190,1,"Sem cliente","","c"],["d","2026-04",2,"Serviços e Materiais de Limpeza e de Higiene","",1190,1,"Sem cliente","","k"],["d","2026-04",2,"Insumos e Materiais Clínicos","",575.3,1,"Sem cliente","","c"],["d","2026-04",2,"Insumos e Materiais Clínicos","",575.3,1,"Sem cliente","","k"],["d","2026-04",2,"Lanches, Refeições e Supermercados","",155,1,"Sem cliente","","c"],["d","2026-04",2,"Lanches, Refeições e Supermercados","",155,1,"Sem cliente","","k"],["d","2026-04",6,"Insumos e Materiais Clínicos","",3000.3,1,"Sem cliente","","c"],["d","2026-04",6,"Insumos e Materiais Clínicos","",3000.3,1,"Sem cliente","","k"],["d","2026-04",6,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-03",27,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-04",6,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","c"],["d","2026-04",6,"Mentorias, Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","k"],["d","2026-04",6,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-04",6,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-04",6,"Insumos e Materiais Clínicos","",364.91,1,"Sem cliente","","c"],["d","2026-04",6,"Insumos e Materiais Clínicos","",364.91,1,"Sem cliente","","k"],["d","2026-04",6,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-04",4,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-04",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","c"],["d","2026-04",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","k"],["d","2026-04",7,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-04",28,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-04",7,"Serviços de Pessoa Jurídica","",200,1,"Sem cliente","","c"],["d","2026-04",7,"Serviços de Pessoa Jurídica","",200,1,"Sem cliente","","k"],["d","2026-04",7,"Coleta de Resíduos Ambientais","",126.72,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",7,"Coleta de Resíduos Ambientais","",126.72,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",242.66,1,"Facebook","","c"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",242.66,1,"Facebook","","k"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",2348.84,1,"Facebook","","c"],["d","2026-04",7,"Marketing, Publicidade e Eventos","",2348.84,1,"Facebook","","k"],["d","2026-04",8,"Serviços e Materiais de Limpeza e de Higiene","",320,1,"SIDIANARA RODRIGUES DE SOUZA SILVA","","c"],["d","2026-04",8,"Serviços e Materiais de Limpeza e de Higiene","",320,1,"SIDIANARA RODRIGUES DE SOUZA SILVA","","k"],["d","2026-04",8,"ISS","",17979.15,1,"Sem cliente","","c"],["d","2026-04",8,"ISS","",17979.15,1,"Sem cliente","","k"],["d","2026-04",9,"Viagens e Representações","",540,1,"Sem cliente","","c"],["d","2026-04",9,"Viagens e Representações","",540,1,"Sem cliente","","k"],["d","2026-04",9,"Materiais  de Uso e Consumo","",150.99,1,"Sem cliente","","c"],["d","2026-04",9,"Materiais  de Uso e Consumo","",150.99,1,"Sem cliente","","k"],["d","2026-04",14,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-04",6,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-04",14,"Telefonia e Internet","",117.34,1,"BIZZ INTERNET LTDA","","c"],["d","2026-04",6,"Telefonia e Internet","",117.34,1,"BIZZ INTERNET LTDA","","k"],["d","2026-04",14,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","c"],["d","2026-04",14,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",2507.04,1,"Bio Meds Pharmaceuti","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",2507.04,1,"Bio Meds Pharmaceuti","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",1746.02,1,"Unikka Pharma","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",1746.02,1,"Unikka Pharma","","k"],["d","2026-04",14,"Marketing, Publicidade e Eventos","",1165.59,1,"Facebook","","c"],["d","2026-02",10,"Marketing, Publicidade e Eventos","",1165.59,1,"Facebook","","k"],["d","2026-04",14,"Software / Licença de Uso","",588.9,1,"Bionexo","","c"],["d","2026-02",10,"Software / Licença de Uso","",588.9,1,"Bionexo","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",539.15,1,"Grupo CMD","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",539.15,1,"Grupo CMD","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",507.95,1,"Grupo CMD","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",507.95,1,"Grupo CMD","","k"],["d","2026-04",14,"Marketing, Publicidade e Eventos","",502.03,1,"Facebook","","c"],["d","2026-02",10,"Marketing, Publicidade e Eventos","",502.03,1,"Facebook","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",423.48,1,"Unikka Pharma","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",423.48,1,"Unikka Pharma","","k"],["d","2026-04",14,"Marketing, Publicidade e Eventos","",308.41,1,"Facebook","","c"],["d","2026-02",10,"Marketing, Publicidade e Eventos","",308.41,1,"Facebook","","k"],["d","2026-04",14,"Materiais  de Uso e Consumo","",282.98,1,"Amazon BR","","c"],["d","2026-02",10,"Materiais  de Uso e Consumo","",282.98,1,"Amazon BR","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",240.45,1,"Magazine Med","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",240.45,1,"Magazine Med","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",228.2,1,"Magazine Med","","k"],["d","2026-04",14,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","c"],["d","2026-02",10,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","k"],["d","2026-04",14,"Móveis, Utensílios e Instalações Administrativos","",192.87,1,"Estok Distribuidora","","c"],["d","2026-02",10,"Móveis, Utensílios e Instalações Administrativos","",192.87,1,"Estok Distribuidora","","k"],["d","2026-04",14,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-02",10,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-04",14,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-02",10,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","k"],["d","2026-04",14,"Viagens e Representações","",113.8,1,"LATAM AIR","","c"],["d","2026-02",10,"Viagens e Representações","",113.8,1,"LATAM AIR","","k"],["d","2026-04",14,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","c"],["d","2026-02",10,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","k"],["d","2026-04",14,"Materiais  de Uso e Consumo","",66.14,1,"LaCasaDeco","","c"],["d","2026-02",10,"Materiais  de Uso e Consumo","",66.14,1,"LaCasaDeco","","k"],["d","2026-04",14,"Software / Licença de Uso","",57.33,1,"OpenAI","","c"],["d","2026-02",10,"Software / Licença de Uso","",57.33,1,"OpenAI","","k"],["d","2026-04",14,"IOF sobre Compras Internacionais","",6.07,1,"IOF","","c"],["d","2026-02",10,"IOF sobre Compras Internacionais","",6.07,1,"IOF","","k"],["d","2026-04",16,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-04",24,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-04",16,"Taxas e Anuidades - Registro Profissional","",948,1,"Sem cliente","","c"],["d","2026-04",16,"Taxas e Anuidades - Registro Profissional","",948,1,"Sem cliente","","k"],["d","2026-04",17,"Honorários Contábeis","",1200,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-04",17,"Honorários Contábeis","",1200,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-04",22,"Viagens e Representações","",92.4,1,"JUAN CARLOS SOSA","","c"],["d","2026-04",22,"Viagens e Representações","",92.4,1,"JUAN CARLOS SOSA","","k"],["d","2026-04",22,"Energia Elétrica","",745.04,1,"EDP ESPIRITO SANTO","","c"],["d","2026-04",22,"Energia Elétrica","",745.04,1,"EDP ESPIRITO SANTO","","k"],["d","2026-04",22,"Salários","",705,1,"SARA LOPES DA SILVA","","c"],["d","2026-04",22,"Salários","",705,1,"SARA LOPES DA SILVA","","k"],["d","2026-04",22,"Serviços e Materiais de Limpeza e de Higiene","",655,1,"SIDIANARA RODRIGUES DE SOUZA","","c"],["d","2026-04",22,"Serviços e Materiais de Limpeza e de Higiene","",655,1,"SIDIANARA RODRIGUES DE SOUZA","","k"],["d","2026-04",22,"Telefonia e Internet","",49.43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-04",22,"Telefonia e Internet","",49.43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-04",22,"Telefonia e Internet","",41.76,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-04",22,"Telefonia e Internet","",41.76,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-04",22,"Salários","",88,1,"BARBÁRA H SAMPÂIO","","c"],["d","2026-04",22,"Salários","",88,1,"BARBÁRA H SAMPÂIO","","k"],["d","2026-04",23,"IRPJ E CSLL","",11216.09,1,"RECEITA FEDERAL","","c"],["d","2026-04",23,"IRPJ E CSLL","",11216.09,1,"RECEITA FEDERAL","","k"],["d","2026-04",23,"Pis/Cofins","",16405.95,1,"RECEITA FEDERAL","","c"],["d","2026-04",23,"Pis/Cofins","",16405.95,1,"RECEITA FEDERAL","","k"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","c"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","k"],["d","2026-04",23,"INSS sobre Salários - GPS","",2895.53,1,"Sem cliente","","c"],["d","2026-04",23,"INSS sobre Salários - GPS","",2895.53,1,"Sem cliente","","k"],["d","2026-04",27,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-04",27,"Mentorias, Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-04",29,"Software / Licença de Uso","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-04",29,"Software / Licença de Uso","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-04",30,"Serviços e Materiais de Limpeza e de Higiene","",390,1,"SIDIANARA RODRIGUES DE SOUZA SILVA","","c"],["d","2026-04",30,"Serviços e Materiais de Limpeza e de Higiene","",390,1,"SIDIANARA RODRIGUES DE SOUZA SILVA","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",4113.35,1,"Unikka Pharma","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",4113.35,1,"Unikka Pharma","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","c"],["d","2026-05",10,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",3435.86,1,"Unikka Pharma","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",1111.92,1,"Bio Meds Pharmaceutics","","c"],["d","2026-03",10,"Insumos e Materiais Clínicos","",1111.92,1,"Bio Meds Pharmaceutics","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",997.93,1,"Drogasil","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",997.93,1,"Drogasil","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",997.93,1,"Drogasil","","c"],["d","2026-05",10,"Insumos e Materiais Clínicos","",997.93,1,"Drogasil","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",750,1,"Drogasil","","c"],["d","2026-05",10,"Insumos e Materiais Clínicos","",750,1,"Drogasil","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",714,1,"Elmeco Com Prod ME","","c"],["d","2026-05",10,"Insumos e Materiais Clínicos","",714,1,"Elmeco Com Prod ME","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","c"],["d","2026-05",10,"Insumos e Materiais Clínicos","",282.78,1,"Central Injetáveis","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",237.31,1,"Central Injetáveis","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",237.31,1,"Central Injetáveis","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-05",10,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-05",4,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","c"],["d","2026-05",10,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","k"],["d","2026-05",4,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","c"],["d","2026-04",10,"Computadores e Periféricos","",203.69,1,"Lenovo Comercial","","k"],["d","2026-05",4,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-04",10,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-05",4,"Software / Licença de Uso","",129,1,"Bot Conversa","","c"],["d","2026-04",10,"Software / Licença de Uso","",129,1,"Bot Conversa","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","c"],["d","2026-05",10,"Insumos e Materiais Clínicos","",117.23,1,"Central Injetáveis","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","c"],["d","2026-04",10,"Insumos e Materiais Clínicos","",96.58,1,"Central Farma","","k"],["d","2026-05",4,"Materiais  de Uso e Consumo","",66.14,1,"LaCasaDeco","","c"],["d","2026-04",10,"Materiais  de Uso e Consumo","",66.14,1,"LaCasaDeco","","k"],["d","2026-05",4,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-05",4,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-05",4,"Salários","",2570,1,"Sem cliente","","c"],["d","2026-05",4,"Salários","",2570,1,"Sem cliente","","k"],["d","2026-05",4,"Salários","",4950,1,"HELOYZA ANDRADE ELIODORIO","","c"],["d","2026-05",4,"Salários","",4950,1,"HELOYZA ANDRADE ELIODORIO","","k"],["d","2026-05",4,"Salários","",3626.71,1,"SAMIRA VIEIRA NEVES","","c"],["d","2026-05",4,"Salários","",3626.71,1,"SAMIRA VIEIRA NEVES","","k"],["d","2026-05",4,"Salários","",1500,1,"NEUZA FERNANDES MARTINS","","c"],["d","2026-05",4,"Salários","",1500,1,"NEUZA FERNANDES MARTINS","","k"],["d","2026-05",4,"Serviços e Materiais de Limpeza e de Higiene","",281.46,1,"Casa do Cloro","","c"],["d","2026-05",4,"Serviços e Materiais de Limpeza e de Higiene","",281.46,1,"Casa do Cloro","","k"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",133.59,1,"Supermercado C","","c"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",133.59,1,"Supermercado C","","k"],["d","2026-05",4,"Materiais  de Uso e Consumo","",121.5,1,"Reis e Souza L","","c"],["d","2026-05",4,"Materiais  de Uso e Consumo","",121.5,1,"Reis e Souza L","","k"],["d","2026-05",4,"Materiais  de Uso e Consumo","",115,1,"Rosa Linda","","c"],["d","2026-05",4,"Materiais  de Uso e Consumo","",115,1,"Rosa Linda","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",89.52,1,"Farmácia Alian","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",89.52,1,"Farmácia Alian","","k"],["d","2026-05",4,"Manutenção de Equipamentos","",83.5,1,"DLKNET*AC","","c"],["d","2026-05",4,"Manutenção de Equipamentos","",83.5,1,"DLKNET*AC","","k"],["d","2026-05",4,"Materiais  de Uso e Consumo","",74.95,1,"Forte Embalagens","","c"],["d","2026-05",4,"Materiais  de Uso e Consumo","",74.95,1,"Forte Embalagens","","k"],["d","2026-05",4,"Materiais  de Uso e Consumo","",63,1,"Mironga","","c"],["d","2026-05",4,"Materiais  de Uso e Consumo","",63,1,"Mironga","","k"],["d","2026-05",4,"Materiais  de Uso e Consumo","",57.7,1,"Papelaria Renascer","","c"],["d","2026-05",4,"Materiais  de Uso e Consumo","",57.7,1,"Papelaria Renascer","","k"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",52.7,1,"Supermercado C","","c"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",52.7,1,"Supermercado C","","k"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",50,1,"Daniely Aguia Branca","","c"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",50,1,"Daniely Aguia Branca","","k"],["d","2026-05",4,"Brindes para Clientes","",35.08,1,"O Boticário","","c"],["d","2026-05",4,"Brindes para Clientes","",35.08,1,"O Boticário","","k"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",23,1,"MP*TaTyDoces Osasco BR","","c"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",23,1,"MP*TaTyDoces Osasco BR","","k"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",20,1,"Ki-Pastel","","c"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",20,1,"Ki-Pastel","","k"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",16,1,"Dinomania Lanches","","c"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",16,1,"Dinomania Lanches","","k"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",7,1,"Cozinha da Ivone","","c"],["d","2026-05",4,"Lanches, Refeições e Supermercados","",7,1,"Cozinha da Ivone","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",6883.5,1,"Unikka Pharma","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",6883.5,1,"Unikka Pharma","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",6176.25,1,"Bio Meds Pharmaceutics","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",6176.25,1,"Bio Meds Pharmaceutics","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",2383.34,1,"Farmacia Arte","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",2383.34,1,"Farmacia Arte","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",2083.47,1,"Bios Farmacêutica","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",2083.47,1,"Bios Farmacêutica","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",1232.4,1,"Bios Farmacêutica","","k"],["d","2026-05",4,"Máquinas, Equipamentos e Instalações","",1206,1,"Next Segurança Eletr","","c"],["d","2026-05",4,"Máquinas, Equipamentos e Instalações","",1206,1,"Next Segurança Eletr","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",1158.85,1,"Bios Farmacêutica","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",1158.85,1,"Bios Farmacêutica","","k"],["d","2026-05",4,"Benfeitorias no Imóvel","",1000,1,"Debora Nunes","","c"],["d","2026-05",4,"Benfeitorias no Imóvel","",1000,1,"Debora Nunes","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",998.85,1,"Central Farma","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",998.85,1,"Central Farma","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",810.46,1,"Bio Meds Pharmaceutics","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",810.46,1,"Bio Meds Pharmaceutics","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",639.18,1,"Bio Meds Pharmaceutics","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",639.18,1,"Bio Meds Pharmaceutics","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",606.5,1,"Magazine Med","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",606.5,1,"Magazine Med","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",592.66,1,"Stin Pharma e Comme","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",592.66,1,"Stin Pharma e Comme","","k"],["d","2026-05",4,"Software / Licença de Uso","",588.9,1,"Bionexo","","c"],["d","2026-05",4,"Software / Licença de Uso","",588.9,1,"Bionexo","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",509.55,1,"Cirúrgica Barra","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",509.55,1,"Cirúrgica Barra","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",424.07,1,"Central Farma","","k"],["d","2026-05",4,"Software / Licença de Uso","",399.9,1,"Cloudia","","c"],["d","2026-05",4,"Software / Licença de Uso","",399.9,1,"Cloudia","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",320.1,1,"Magazine Med","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",320.1,1,"Magazine Med","","k"],["d","2026-05",4,"Software / Licença de Uso","",305.88,1,"Conta Azul","","c"],["d","2026-05",4,"Software / Licença de Uso","",305.88,1,"Conta Azul","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",293.24,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",293.24,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",293.01,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",293.01,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.95,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.95,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.93,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.93,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.8,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.8,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.68,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.68,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.66,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.66,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.65,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.65,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.61,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",292.61,1,"Facebook","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",263.4,1,"Sarita Scrubs","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",258.65,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",258.65,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",258.64,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",258.64,1,"Facebook","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",243.07,1,"Central Farma","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",229.45,1,"Central Farma","","k"],["d","2026-05",4,"Serviços e Materiais de Limpeza e de Higiene","",212.66,1,"Marilza Moda Intima","","c"],["d","2026-05",4,"Serviços e Materiais de Limpeza e de Higiene","",212.66,1,"Marilza Moda Intima","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",174.82,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",174.82,1,"Facebook","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",162.3,1,"Cirúrgica Barra","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",158.5,1,"Magazine Med","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",120.42,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",120.42,1,"Facebook","","k"],["d","2026-05",4,"Software / Licença de Uso","",99,1,"Adapta","","c"],["d","2026-05",4,"Software / Licença de Uso","",99,1,"Adapta","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.32,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.32,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.25,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.25,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.24,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.24,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.24,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.24,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.24,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.24,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.2,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.2,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.19,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.19,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.19,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.19,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.19,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.19,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.17,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.17,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.16,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.16,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.16,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",67.16,1,"Facebook","","k"],["d","2026-05",4,"Brindes para Clientes","",59.06,1,"O Boticário","","c"],["d","2026-05",4,"Brindes para Clientes","",59.06,1,"O Boticário","","k"],["d","2026-05",4,"Software / Licença de Uso","",51.2,1,"OpenAI","","c"],["d","2026-05",4,"Software / Licença de Uso","",51.2,1,"OpenAI","","k"],["d","2026-05",4,"Software / Licença de Uso","",50.44,1,"OpenAI","","c"],["d","2026-05",4,"Software / Licença de Uso","",50.44,1,"OpenAI","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",50.14,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",50.14,1,"Facebook","","k"],["d","2026-05",4,"Insumos e Materiais Clínicos","",43.35,1,"Mercado Livre","","c"],["d","2026-05",4,"Insumos e Materiais Clínicos","",43.35,1,"Mercado Livre","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",39.89,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",39.89,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",33.88,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",33.88,1,"Facebook","","k"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",3.56,1,"Facebook","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",3.56,1,"Facebook","","k"],["d","2026-05",5,"Salários","",3150,1,"Sem cliente","","c"],["d","2026-05",5,"Salários","",3150,1,"Sem cliente","","k"],["d","2026-05",5,"Salários","",2299.32,1,"Sem cliente","","c"],["d","2026-05",5,"Salários","",2299.32,1,"Sem cliente","","k"],["d","2026-05",5,"Viagens e Representações","",660.93,1,"Sup Princesa Búzios","","c"],["d","2026-05",5,"Viagens e Representações","",660.93,1,"Sup Princesa Búzios","","k"],["d","2026-05",5,"Viagens e Representações","",374.1,1,"Posto Armação dos Búzios","","c"],["d","2026-05",5,"Viagens e Representações","",374.1,1,"Posto Armação dos Búzios","","k"],["d","2026-05",5,"Viagens e Representações","",372.88,1,"Posto Bellas Búzios LT","","c"],["d","2026-05",5,"Viagens e Representações","",372.88,1,"Posto Bellas Búzios LT","","k"],["d","2026-05",5,"Viagens e Representações","",304.29,1,"Auto Posto Schueng MIL","","c"],["d","2026-05",5,"Viagens e Representações","",304.29,1,"Auto Posto Schueng MIL","","k"],["d","2026-05",5,"Viagens e Representações","",263.94,1,"Posto Iate LTDA","","c"],["d","2026-05",5,"Viagens e Representações","",263.94,1,"Posto Iate LTDA","","k"],["d","2026-05",5,"Viagens e Representações","",209.76,1,"Posto Praia de Camburi","","c"],["d","2026-05",5,"Viagens e Representações","",209.76,1,"Posto Praia de Camburi","","k"],["d","2026-05",5,"Lanches, Refeições e Supermercados","",108,1,"Espeluncas Bar","","c"],["d","2026-05",5,"Lanches, Refeições e Supermercados","",108,1,"Espeluncas Bar","","k"],["d","2026-05",5,"Viagens e Representações","",6.1,1,"Serra","","c"],["d","2026-05",5,"Viagens e Representações","",6.1,1,"Serra","","k"],["d","2026-05",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","c"],["d","2026-05",6,"Mentorias, Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","k"],["d","2026-05",7,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-05",7,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-05",7,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-05",7,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-05",7,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-05",4,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-05",7,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-05",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-05",7,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-05",6,"Despesas Pessoais dos Sócios","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-05",7,"Marketing, Publicidade e Eventos","",1875,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-05",6,"Marketing, Publicidade e Eventos","",1875,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-05",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","c"],["d","2026-05",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","k"],["d","2026-05",7,"Insumos e Materiais Clínicos","",2590.26,1,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-05",7,"Insumos e Materiais Clínicos","",2590.26,1,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",8,"Troco","",26,1,"ERICA RODRIGUES DE LIMA","","c"],["d","2026-05",8,"Troco","",26,1,"ERICA RODRIGUES DE LIMA","","k"],["d","2026-05",11,"ISS","",486.47,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",11,"ISS","",486.47,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",11,"Rescisões","",3713.91,1,"HEMILLY LACERDA BARBOSA","","c"],["d","2026-05",11,"Rescisões","",3713.91,1,"HEMILLY LACERDA BARBOSA","","k"],["d","2026-05",11,"ISS","",8226.92,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",11,"ISS","",8226.92,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",11,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-05",4,"Marketing, Publicidade e Eventos","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-05",11,"Coleta de Resíduos Ambientais","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-05",11,"Coleta de Resíduos Ambientais","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",13,"Serviços de Pessoa Jurídica","",55,1,"AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA","","c"],["d","2026-05",13,"Serviços de Pessoa Jurídica","",55,1,"AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA","","k"],["d","2026-05",13,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","c"],["d","2026-05",13,"Marketing, Publicidade e Eventos","",1500,1,"VANESSA CORDOVAL DE BARROS","","k"],["d","2026-05",13,"Serviços e Materiais de Limpeza e de Higiene","",412,1,"SIDIANARA RODRIGUES DE SOUZA SILVA","","c"],["d","2026-05",13,"Serviços e Materiais de Limpeza e de Higiene","",412,1,"SIDIANARA RODRIGUES DE SOUZA SILVA","","k"],["d","2026-05",13,"INSS sobre Salários - GPS","",2876.6,1,"RECEITA FEDERAL","","c"],["d","2026-05",13,"INSS sobre Salários - GPS","",2876.6,1,"RECEITA FEDERAL","","k"],["d","2026-05",19,"ISS","",272,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",19,"ISS","",272,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",20,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-05",20,"Mentorias, Cursos e Treinamentos","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-05",21,"Telefonia e Internet","",41.87,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-05",21,"Telefonia e Internet","",41.87,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-05",21,"Energia Elétrica","",546.33,1,"EDP ESPIRITO SANTO","","c"],["d","2026-05",21,"Energia Elétrica","",546.33,1,"EDP ESPIRITO SANTO","","k"],["d","2026-05",21,"Pis/Cofins","",7947.55,1,"RECEITA FEDERAL","","c"],["d","2026-05",21,"Pis/Cofins","",7947.55,1,"RECEITA FEDERAL","","k"],["d","2026-05",21,"Insumos e Materiais Clínicos","",46.89,1,"Sem cliente","","c"],["d","2026-05",21,"Insumos e Materiais Clínicos","",46.89,1,"Sem cliente","","k"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-05",28,"Mentorias, Cursos e Treinamentos","",184.75,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-05",28,"Mentorias, Cursos e Treinamentos","",184.75,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-05",28,"FGTS e Multa de FGTS","",1448.01,1,"Sem cliente","","c"],["d","2026-05",28,"FGTS e Multa de FGTS","",1448.01,1,"Sem cliente","","k"],["d","2026-05",29,"ASO - Exames Trabalhistas","",600,1,"Sem cliente","","c"],["d","2026-05",29,"ASO - Exames Trabalhistas","",600,1,"Sem cliente","","k"],["d","2026-06",1,"Pro-labores e Reembolsos","",15000,1,"Sem cliente","","c"],["d","2026-06",1,"Pro-labores e Reembolsos","",15000,1,"Sem cliente","","k"],["d","2026-06",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-06",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-06",5,"Marketing, Publicidade e Eventos","",2000,2,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-06",4,"Marketing, Publicidade e Eventos","",2000,2,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-06",5,"Plano de Saúde Colaboradores","",260,2,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-06",4,"Plano de Saúde Colaboradores","",260,2,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-06",5,"Viagens e Representações","",184.94,2,"Sem cliente","","c"],["d","2026-06",5,"Viagens e Representações","",184.94,2,"Sem cliente","","k"],["d","2026-06",6,"Marketing, Publicidade e Eventos","",2100,2,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-06",6,"Marketing, Publicidade e Eventos","",2100,2,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-06",6,"Telefonia e Internet","",114.9,2,"BIZZ INTERNET LTDA","","c"],["d","2026-06",6,"Telefonia e Internet","",114.9,2,"BIZZ INTERNET LTDA","","k"],["d","2026-06",6,"Telefonia e Internet","",99.9,2,"BIZZ INTERNET LTDA","","c"],["d","2026-06",6,"Telefonia e Internet","",99.9,2,"BIZZ INTERNET LTDA","","k"],["d","2026-07",5,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-07",4,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-07",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-07",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-07",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-07",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-07",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-07",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-07",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-07",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-08",5,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-08",4,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-08",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-08",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-08",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-08",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-08",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-08",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-08",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-08",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-09",5,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-09",4,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-09",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-09",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-09",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-09",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-09",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-09",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-09",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-09",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-10",5,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-10",4,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-10",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-10",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-10",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-10",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-10",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-10",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-10",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-10",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-11",5,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-11",4,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-11",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-11",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-11",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-11",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-11",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-11",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-11",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-11",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-12",5,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-12",4,"Marketing, Publicidade e Eventos","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-12",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-12",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-12",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-12",6,"Marketing, Publicidade e Eventos","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-12",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-12",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-12",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-12",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"]];

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
