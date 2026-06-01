/* BGP BI — gerado por build-data.cjs em 2026-06-01T12:44:08.140Z */
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
  "fetched_at": "2026-06-01T12:44:07.847Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 49,
    "departamentos": 0,
    "clientes": 156
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": 352699.23
  },
  {
    "name": "A receber (futuro)",
    "value": 80171.26
  },
  {
    "name": "A pagar (futuro)",
    "value": 32029.359999999997
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "Compra",
    "value": 99664.76,
    "color": "#2dd4bf"
  },
  {
    "name": "Despesas Diversas (Cartão)",
    "value": 70698.4,
    "color": "#22c55e"
  },
  {
    "name": "Antecipação de Lucros",
    "value": 58850.4,
    "color": "#a78bfa"
  },
  {
    "name": "IRPJ E CSLL",
    "value": 54193.020000000004,
    "color": "#f59e0b"
  },
  {
    "name": "Pis/Cofins",
    "value": 52559.200000000004,
    "color": "#ef4444"
  },
  {
    "name": "Despesas a identificar",
    "value": 50207.04,
    "color": "#6b7686"
  }
];

const SEGMENTS = {
  "realizado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 192282.14000000004,
        "despesa": 152863.34
      },
      {
        "m": "fevereiro",
        "receita": 155790.00999999995,
        "despesa": 82637.71
      },
      {
        "m": "março",
        "receita": 508018.07,
        "despesa": 247015.73999999996
      },
      {
        "m": "abril",
        "receita": 91019.74,
        "despesa": 67348.36
      },
      {
        "m": "maio",
        "receita": 7821.25,
        "despesa": 52366.830000000016
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
        "value": 358130.0099999999,
        "clientes": 12
      },
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 258660.52000000002,
        "clientes": 26
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 143782.34999999998,
        "clientes": 14
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 101588.05,
        "clientes": 23
      },
      {
        "name": "Injetaveis",
        "value": 27071.9,
        "clientes": 18
      },
      {
        "name": "Consulta",
        "value": 14800,
        "clientes": 25
      },
      {
        "name": "ADICIONAL DE TIZERPATIDA",
        "value": 11702.67,
        "clientes": 10
      },
      {
        "name": "Implantes",
        "value": 8530,
        "clientes": 2
      },
      {
        "name": "Suplementos",
        "value": 8280.5,
        "clientes": 45
      },
      {
        "name": "Receita de Serviços - Protocolo Body Reset",
        "value": 6833,
        "clientes": 2
      },
      {
        "name": "Receita de Serviços - Platina",
        "value": 6351.4,
        "clientes": 1
      },
      {
        "name": "Teste Nutrigenetico",
        "value": 3900,
        "clientes": 1
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "Compra",
        "value": 99664.76,
        "fornecedores": 19
      },
      {
        "name": "Despesas Diversas (Cartão)",
        "value": 70698.4,
        "fornecedores": 1
      },
      {
        "name": "Antecipação de Lucros",
        "value": 58850.4,
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
        "name": "Despesas a identificar",
        "value": 50207.04,
        "fornecedores": 1
      },
      {
        "name": "Cursos e Treinamentos",
        "value": 49320.71,
        "fornecedores": 3
      },
      {
        "name": "ISS",
        "value": 41608.19,
        "fornecedores": 3
      },
      {
        "name": "Salários",
        "value": 36660.58,
        "fornecedores": 2
      },
      {
        "name": "Marketing e Publicidade",
        "value": 28000,
        "fornecedores": 4
      },
      {
        "name": "INSS sobre Salários - GPS",
        "value": 12843.699999999999,
        "fornecedores": 1
      },
      {
        "name": "Materiais Aplicados na Prestação de Serviços",
        "value": 12335.029999999999,
        "fornecedores": 4
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "Sem cliente",
        "value": 334256.34
      },
      {
        "name": "MONICA DE OLIVEIRA SILVA FERNANDES",
        "value": 20450
      },
      {
        "name": "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        "value": 19493.989999999998
      },
      {
        "name": "ISABELA CRISTINA FANTI",
        "value": 17620
      },
      {
        "name": "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        "value": 17577.67
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 17350
      },
      {
        "name": "MERIELY RUFINO VAZ MUTZ",
        "value": 17335
      },
      {
        "name": "ALEX MARCHIOLI STEFANON",
        "value": 16433.17
      },
      {
        "name": "ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",
        "value": 16050
      },
      {
        "name": "MAYKE CORREIA DE SOUZA",
        "value": 15877.5
      },
      {
        "name": "LETICIA BATISTA DE MORAES",
        "value": 15680
      },
      {
        "name": "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        "value": 14660
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "Sem cliente",
        "value": 334265.29000000004
      },
      {
        "name": "RECEITA FEDERAL",
        "value": 46393.740000000005
      },
      {
        "name": "O MEDICO EMPRESARIO LTDA",
        "value": 39000
      },
      {
        "name": "BIO MEDS PHARMACEUTICA LTDA",
        "value": 35603.950000000004
      },
      {
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 17100
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
        "name": "RADIO SAO FRANCISCO LTDA",
        "value": 10000
      },
      {
        "name": "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        "value": 8713.39
      },
      {
        "name": "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        "value": 8640
      },
      {
        "name": "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        "value": 7500
      }
    ],
    "EXTRATO": [
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
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
        "Materiais Aplicados na Prestação de Serviços",
        "PIX Marketplace",
        -46.89,
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
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "IRRF",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -41.4,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "PIS/COFINS/CSLL",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -27.6,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
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
        "Suplementos",
        "ANDREA RODRIGUES FERNANDES",
        50,
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
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Materiais de Limpeza e de Higiene",
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
        "Marketing e Publicidade",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -138.3,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -2405.4,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        210,
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
        "Consulta",
        "Lúcia Sodré Moreira",
        650,
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
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -151.3,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        75,
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
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4.92,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4,
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
        "06/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DA PENHA MOURA ROSA",
        75,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "ESTER DE ALMEIDA SANTANA",
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
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        135,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "MERIELY RUFINO VAZ MUTZ",
        135,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "ORLANDA ALVES SALVADOR",
        76,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        550,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        10,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "TAIANE STREY VERONEZE ANDRE",
        300,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Compra",
        "64.659.216 KETELLY ALVES GOULARTE",
        -2600,
        "PAGO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Compra",
        "GOOGLE BRASIL INTERNET LTDA.",
        -2638.5,
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
        "ADICIONAL DE TIZERPATIDA",
        "JULIMAR MARTINS FANTI",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "FLAVYANNE PAULO MORETT AGUIAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "IRINEIA SOUZA PEREIRA SAAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "REINALDO ERMELINDO DE ARAUJO",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "MARLY MARIA ANDRADE DE LAIA",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        377,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        50,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3068,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "NAIR DA SILVA LOPES",
        7000,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Teste Nutrigenetico",
        "ZILDA MARIA MAIA DE CARVALHO",
        3900,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MARIA LEUZINA DE AGUIAR DIAS",
        390,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "DORIETE DE SOUZA",
        1872,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        490,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "DELMA LUCIA MENDES DA CUNHA",
        3100,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ISABELA CRISTINA FANTI",
        8520,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ANTONIO PEREIRA DE ARAUJO",
        6050,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ADELSON ANDRE BAECE STREY",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MAYARA RIBEIRO SIMOES FORTUNA",
        1500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        19750,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        7620.66,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Compra",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2691,
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
        "Compra",
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
        "Compra",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
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
        "25/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Compra",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
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
        "Consulta",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        650,
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
        "Compra",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -88,
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
        "16/04/2026",
        "Operações",
        "Suplementos",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        700,
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
        "Suplementos",
        "BRISA DANIELLE FURTADO CARDOSO",
        350,
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
        "Antecipação de Lucros",
        "ANNA PAULA FERNANDES MARTINS",
        -14100,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -96,
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
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.28,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
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
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Compra",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Compra",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -3000,
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
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Compra",
        "GOOGLE BRASIL INTERNET LTDA.",
        -81.89,
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
        "Implantes",
        "Tomadores Diversos",
        3900,
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
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Compra",
        "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        -8640,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        840,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "SHEILA MARIA NEGRI PONTES",
        3696,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        4274,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "IRINEIA SOUZA PEREIRA SAAR",
        9680.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "DORIETE DE SOUZA",
        1200,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SAYONARIA LOPES EVANGELISTA",
        8045,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        9342,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        9050,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MERIELY RUFINO VAZ MUTZ",
        12450,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        6403,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MAYKE CORREIA DE SOUZA",
        6920,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "LETICIA BATISTA DE MORAES",
        14955,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ADELSON ANDRE BAECE STREY",
        3362,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        11199,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ELIEZER MOURA DE ASSIS",
        7600.87,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SALETTE DE ALMEIDA SANTANA",
        9264,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA LEUZINA DE AGUIAR DIAS",
        185,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "NEILA MARIA DE REZENDE SILVA",
        4697.61,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JULIMAR MARTINS FANTI",
        8200,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TAIANE STREY VERONEZE ANDRE",
        12228,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        6014.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Platina",
        "LEILA DA SILVA DE SOUZA COELHO",
        6351.4,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ADRIANA MOSCONI PAGANI",
        4800,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FÁBIA INACIO DE SOUZA BLESSON",
        5733.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALAETI BRISQUE POEYS",
        4133.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "HAYANE SILVA VALARDAO",
        2500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Implantes",
        "THAIZ LIMA ROCHA DA SILVA",
        4630,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ANTONIO PEREIRA DE ARAUJO",
        1170,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        10632,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALEX MARCHIOLI STEFANON",
        12750,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        13360,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA CRISTINA VIEIRA TEODORO",
        6842.7,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",
        16050,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "FERNANDA RAQUEL TEIXEIRA CHIPOLESC",
        3625,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",
        900,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LEIDIANA FERREIRA RODRIGUES",
        2300,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "WARLLEM FERREIRA COSTA",
        6040,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        12493.99,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "RODRIGO SOARES SIQUEIRA",
        5980,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "CARLA GESIANE CARLASARTE DE SOUZA VIAL",
        7243.44,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        3400,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "EVERALDO DE SOUZA VELTEN SANTIAGO",
        2100,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "STEPHANIE SOLE BARABANI",
        4800,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SEBASTIÃO SATURINO FILHO",
        6500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        4922,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        3436,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Alquimia Ouro",
        "TELMA DOMINGOS DA SILVA",
        1710.11,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ITELVINA FERNANDA DE OLIVEIRA VERLY",
        1400,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LUDIMILA MATIAS CARDOSO PAGANI",
        468,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MARIA ALICE RODRIGUES DE JESUS",
        2570,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "KAMILA QUADRAS CASTILHO",
        1050,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MAGDA CRISTINA ANGELO DE OLIVEIRA",
        500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LIETE VOLPONI FORTUNA",
        1125,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LEDIANA NEIVA ANACLETO OLIVEIRA",
        4965,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ESTER DE ALMEIDA SANTANA",
        3900,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FABRÍCIO RODRIGUES LINHARES",
        3578,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        4246,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ANA PAULA COELHO PORTES MATTOS",
        2300,
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
        "Antecipação de Lucros",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ZILDA MARIA MAIA DE CARVALHO",
        5000,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        193.08,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        389.2,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        435.03,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2243.92,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3914.61,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "Sem cliente",
        -1500,
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
        "Compra",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -1600,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Compra",
        "BIOS FARMACEUTICA LTDA",
        -12500.8,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
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
        "Suplementos",
        "ANDREA RODRIGUES FERNANDES",
        50,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        210,
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
        "Consulta",
        "Lúcia Sodré Moreira",
        650,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        75,
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
        "ADICIONAL DE TIZERPATIDA",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DA PENHA MOURA ROSA",
        75,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "ESTER DE ALMEIDA SANTANA",
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
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        135,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "MERIELY RUFINO VAZ MUTZ",
        135,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "ORLANDA ALVES SALVADOR",
        76,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        550,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        10,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "TAIANE STREY VERONEZE ANDRE",
        300,
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
        "ADICIONAL DE TIZERPATIDA",
        "JULIMAR MARTINS FANTI",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "FLAVYANNE PAULO MORETT AGUIAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "IRINEIA SOUZA PEREIRA SAAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "REINALDO ERMELINDO DE ARAUJO",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "MARLY MARIA ANDRADE DE LAIA",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        377,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        50,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3068,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "NAIR DA SILVA LOPES",
        7000,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Teste Nutrigenetico",
        "ZILDA MARIA MAIA DE CARVALHO",
        3900,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MARIA LEUZINA DE AGUIAR DIAS",
        390,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "DORIETE DE SOUZA",
        1872,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        490,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "DELMA LUCIA MENDES DA CUNHA",
        3100,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ISABELA CRISTINA FANTI",
        8520,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ANTONIO PEREIRA DE ARAUJO",
        6050,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ADELSON ANDRE BAECE STREY",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MAYARA RIBEIRO SIMOES FORTUNA",
        1500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        19750,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        7620.66,
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
        "28/04/2026",
        "Operações",
        "Suplementos",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        185,
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
        "25/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
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
        "Consulta",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        650,
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
        "16/04/2026",
        "Operações",
        "Suplementos",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        700,
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
        "Suplementos",
        "BRISA DANIELLE FURTADO CARDOSO",
        350,
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
        "13/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        582.6,
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
        "07/04/2026",
        "Operações",
        "Suplementos",
        "ROSIANE ALMEIDA COSTA BELING",
        75,
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
        "Implantes",
        "Tomadores Diversos",
        3900,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        840,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "SHEILA MARIA NEGRI PONTES",
        3696,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        4274,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "IRINEIA SOUZA PEREIRA SAAR",
        9680.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "DORIETE DE SOUZA",
        1200,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SAYONARIA LOPES EVANGELISTA",
        8045,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        9342,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        9050,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MERIELY RUFINO VAZ MUTZ",
        12450,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        6403,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MAYKE CORREIA DE SOUZA",
        6920,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "LETICIA BATISTA DE MORAES",
        14955,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ADELSON ANDRE BAECE STREY",
        3362,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        11199,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ELIEZER MOURA DE ASSIS",
        7600.87,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SALETTE DE ALMEIDA SANTANA",
        9264,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA LEUZINA DE AGUIAR DIAS",
        185,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "NEILA MARIA DE REZENDE SILVA",
        4697.61,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JULIMAR MARTINS FANTI",
        8200,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TAIANE STREY VERONEZE ANDRE",
        12228,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        6014.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Platina",
        "LEILA DA SILVA DE SOUZA COELHO",
        6351.4,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ADRIANA MOSCONI PAGANI",
        4800,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FÁBIA INACIO DE SOUZA BLESSON",
        5733.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALAETI BRISQUE POEYS",
        4133.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "HAYANE SILVA VALARDAO",
        2500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Implantes",
        "THAIZ LIMA ROCHA DA SILVA",
        4630,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ANTONIO PEREIRA DE ARAUJO",
        1170,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        10632,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALEX MARCHIOLI STEFANON",
        12750,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        13360,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA CRISTINA VIEIRA TEODORO",
        6842.7,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",
        16050,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "FERNANDA RAQUEL TEIXEIRA CHIPOLESC",
        3625,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",
        900,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "LEIDIANA FERREIRA RODRIGUES",
        2300,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "WARLLEM FERREIRA COSTA",
        6040,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        12493.99,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "RODRIGO SOARES SIQUEIRA",
        5980,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "CARLA GESIANE CARLASARTE DE SOUZA VIAL",
        7243.44,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "THAÍS DAMASCENA DE PAULO HONORATO",
        3400,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "EVERALDO DE SOUZA VELTEN SANTIAGO",
        2100,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "STEPHANIE SOLE BARABANI",
        4800,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SEBASTIÃO SATURINO FILHO",
        6500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        4922,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        3436,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Alquimia Ouro",
        "TELMA DOMINGOS DA SILVA",
        1710.11,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ITELVINA FERNANDA DE OLIVEIRA VERLY",
        1400,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LUDIMILA MATIAS CARDOSO PAGANI",
        468,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MARIA ALICE RODRIGUES DE JESUS",
        2570,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "KAMILA QUADRAS CASTILHO",
        1050,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "MAGDA CRISTINA ANGELO DE OLIVEIRA",
        500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LIETE VOLPONI FORTUNA",
        1125,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "LEDIANA NEIVA ANACLETO OLIVEIRA",
        4965,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ESTER DE ALMEIDA SANTANA",
        3900,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FABRÍCIO RODRIGUES LINHARES",
        3578,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        4246,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ANA PAULA COELHO PORTES MATTOS",
        2300,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ZILDA MARIA MAIA DE CARVALHO",
        5000,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        193.08,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        389.2,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        435.03,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2243.92,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3914.61,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.01,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        607.78,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.14,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "LETICIA BATISTA DE MORAES",
        75,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        75,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        479.8,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        654.92,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "KEILA SOARES RODRIGUES MONTEIRO",
        3500,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        443.04,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1303.95,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Injetaveis",
        "ELIZABETH DE REZENDE ALMEIDA",
        680,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.58,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Injetaveis",
        "LIETE VOLPONI FORTUNA",
        75,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "ANA PAULA COELHO PORTES MATTOS",
        400,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "LINDAURA RODRIGUES BARBOSA ASSIS",
        650,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        750,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TELMELITA SAAR ORECCHIO",
        4782,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "HIGLEST ALVES DE LA SALLE",
        6910,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3830.55,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1621.01,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2053.17,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.39,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        646.35,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        2543.25,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        659.44,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        480.1,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        821.79,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        997.14,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1410.77,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3852.07,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "WARLLEM FERREIRA COSTA",
        1540,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        75,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "HIGLEST ALVES DE LA SALLE",
        2690,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        355.72,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1037.67,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        926.4,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        966.57,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1655.56,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MERIELY RUFINO VAZ MUTZ",
        75,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1368.09,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        5606.07,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        560.8,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        468,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Injetaveis",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        333,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        135,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        350.28,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1608.47,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FABRÍCIO RODRIGUES LINHARES",
        1500,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1700,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "AMANTINO STEFANON",
        2700,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        3000,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        465.98,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        1220.43,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        384.08,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        0.03,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        251.21,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        233.33,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        417.06,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        3492.37,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "Consulta",
        "HIGLEST ALVES DE LA SALLE",
        650,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "Rendimentos de Aplicações",
        "Sem cliente",
        1.25,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        500,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        582.6,
        "PAGO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
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
        "Materiais Aplicados na Prestação de Serviços",
        "PIX Marketplace",
        -46.89,
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
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "IRRF",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -41.4,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "PIS/COFINS/CSLL",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -27.6,
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
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Materiais de Limpeza e de Higiene",
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
        "Marketing e Publicidade",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -138.3,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -2405.4,
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
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -151.3,
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
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4.92,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4,
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
        "06/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Compra",
        "64.659.216 KETELLY ALVES GOULARTE",
        -2600,
        "PAGO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Compra",
        "GOOGLE BRASIL INTERNET LTDA.",
        -2638.5,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Compra",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2691,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Compra",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Compra",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
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
        "Compra",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -88,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Antecipação de Lucros",
        "ANNA PAULA FERNANDES MARTINS",
        -14100,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -96,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.28,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
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
        "Compra",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Compra",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -3000,
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
        "06/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Compra",
        "GOOGLE BRASIL INTERNET LTDA.",
        -81.89,
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
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Compra",
        "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        -8640,
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
        "Antecipação de Lucros",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "Sem cliente",
        -1500,
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
        "Compra",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -1600,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Compra",
        "BIOS FARMACEUTICA LTDA",
        -12500.8,
        "PAGO"
      ],
      [
        "28/03/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
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
        "27/03/2026",
        "Operações",
        "Compra",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
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
        "Antecipação de Lucros",
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
        "Compra",
        "37.901.199 VAGNER LISBOA RIBEIRO",
        -60,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Materiais Aplicados na Prestação de Serviços",
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
        "Cursos e Treinamentos",
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
        "Compra",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Compra",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -91,
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
        "Cursos e Treinamentos",
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
        "Antecipação de Lucros",
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
        "12/03/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -18528.75,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Compra",
        "TOKARSKI COMERCIO INDUSTRIA LTDA",
        -14300.04,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -126.72,
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
        "10/03/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.22,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Operações",
        "Compra",
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
        "Cursos e Treinamentos",
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
        "Compra",
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
        "Compra",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Antecipação de Lucros",
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
        "Serviços de Pessoa Jurídica",
        "Sem cliente",
        -980,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Compra",
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
        "28/02/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -599.9,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Operações",
        "Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Operações",
        "Compra",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
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
        "20/02/2026",
        "Operações",
        "Compra",
        "CONTAAZUL SOFTWARE LTDA",
        -917.64,
        "PAGO"
      ],
      [
        "19/02/2026",
        "Operações",
        "Compra",
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
      ],
      [
        "13/02/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -117.3,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -140.64,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "12/02/2026",
        "Operações",
        "Materiais de Escritório",
        "REIS & SOUZA LIMITADA",
        -5,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Operações",
        "Compra",
        "ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA",
        -7140,
        "PAGO"
      ],
      [
        "10/02/2026",
        "Operações",
        "ISS",
        "Sem cliente",
        -206.07,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Operações",
        "ISS",
        "Sem cliente",
        -2040,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -20606.83,
        "PAGO"
      ],
      [
        "06/02/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "Software / Licença de Uso",
        "Sem cliente",
        -650,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "Cursos e Treinamentos",
        "SEGEX UVV ON",
        -330.75,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2955.54,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -519.57,
        "PAGO"
      ],
      [
        "04/02/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -902.25,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3626.71,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2660,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2299.32,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Despesas Diversas (Cartão)",
        "Sem cliente",
        -1892.78,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -6345.59,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Materiais Aplicados na Prestação de Serviços",
        "HEALTH TECH FARMACIA DE MANIPULACAO LTDA",
        -1060.64,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -1280,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -171,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Tarifas Bancárias",
        "Sem cliente",
        -30.85,
        "PAGO"
      ],
      [
        "29/01/2026",
        "Operações",
        "Telefonia e Internet",
        "Sem cliente",
        -35.88,
        "PAGO"
      ],
      [
        "27/01/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Operações",
        "IRPJ E CSLL",
        "Sem cliente",
        -42976.93,
        "PAGO"
      ],
      [
        "26/01/2026",
        "Operações",
        "Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -200,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Operações",
        "Materiais de Escritório",
        "Sem cliente",
        -53.7,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Operações",
        "Materiais de Escritório",
        "Sem cliente",
        -21.9,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Operações",
        "Lanches e Refeições",
        "Sem cliente",
        -20,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Operações",
        "Pis/Cofins",
        "Sem cliente",
        -27949.26,
        "PAGO"
      ],
      [
        "22/01/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -4057.82,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -671.75,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -517.92,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -86.31,
        "PAGO"
      ],
      [
        "20/01/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2953.74,
        "PAGO"
      ],
      [
        "19/01/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -315,
        "PAGO"
      ],
      [
        "19/01/2026",
        "Operações",
        "Materiais de Escritório",
        "DANILO DE SOUSA ANDRADE 09175677733",
        -53,
        "PAGO"
      ],
      [
        "16/01/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -880,
        "PAGO"
      ],
      [
        "15/01/2026",
        "Operações",
        "Energia Elétrica",
        "EDP ESPIRITO SANTO",
        -680.71,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Operações",
        "Materiais Aplicados na Prestação de Serviços",
        "BIO MEDS PHARMACEUTICA LTDA",
        -7500,
        "PAGO"
      ],
      [
        "14/01/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -79,
        "PAGO"
      ],
      [
        "13/01/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -43,
        "PAGO"
      ],
      [
        "13/01/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -22.92,
        "PAGO"
      ],
      [
        "13/01/2026",
        "Operações",
        "Telefonia e Internet",
        "TELEFONICA BRASIL S.A",
        -22.92,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1085,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1085,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Operações",
        "Materiais de Limpeza e de Higiene",
        "BARUC DETETIZACAO",
        -480,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -50,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Operações",
        "Serviços de Pessoa Jurídica",
        "Sem cliente",
        -650,
        "PAGO"
      ],
      [
        "12/01/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -720,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 954931.21,
      "TOTAL_DESPESA": 602231.98,
      "VALOR_LIQUIDO": 352699.23,
      "MARGEM_LIQUIDA": 36.93451698997251,
      "VALOR_LIQ_SERIES": [
        39418.80000000005,
        73152.29999999994,
        261002.33000000005,
        23671.380000000005,
        -44545.580000000016,
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
      4045.65,
      36403.29,
      10318.26,
      16965.739999999998,
      42826.28,
      27080.980000000003,
      10897.33,
      9090.93,
      21452.809999999998,
      7285,
      12474.330000000002,
      35206.840000000004,
      13535.52,
      2098.87,
      2200.16,
      12855.489999999998,
      10970.49,
      23722.96,
      40574.939999999995,
      25004.170000000002,
      16598.7,
      5207.05,
      42604.99,
      28650.789999999994,
      8490.45,
      27937.12,
      29700.429999999997,
      3202.55,
      6435.5,
      89900.85,
      331192.74000000005
    ],
    "DESPESA_DIA": [
      8930.85,
      25514.349999999995,
      39309.240000000005,
      7548.82,
      12563.25,
      9494.359999999997,
      18101.51,
      34.92,
      29239.960000000003,
      11256.02,
      34145.36000000001,
      55736.46,
      21299.499999999996,
      21775,
      9681.11,
      19782.27,
      1068,
      3075.14,
      2995.74,
      8536.36,
      16579.19,
      32483.079999999998,
      49847.21000000001,
      48435.88,
      0,
      74430.04,
      3286.3,
      1808.02,
      435.78,
      19013.26,
      15825
    ],
    "SALDOS_MES": [
      39418.80000000005,
      112571.09999999999,
      373573.43000000005,
      397244.81000000006,
      352699.23000000004,
      352699.23000000004,
      352699.23000000004,
      352699.23000000004,
      352699.23000000004,
      352699.23000000004,
      352699.23000000004,
      352699.23000000004
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receitas de Serviços a Identificar",
        "values": [
          131441.84,
          101140.14000000001,
          115800.37000000002,
          9747.66,
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
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          30537.63,
          17580,
          189989.73,
          18346.91,
          2206.25,
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
          95514.18,
          32800,
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
          64257.05,
          6075,
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
        "cat": "Injetaveis",
        "values": [
          2100,
          3890.9,
          18311,
          2770,
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
    "FLUXO_DESPESA": [
      {
        "cat": "Compra",
        "values": [
          0,
          -12460.429999999998,
          -58896.06,
          -20374.770000000004,
          -7933.500000000001,
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
        "cat": "Despesas Diversas (Cartão)",
        "values": [
          -2295.41,
          -1892.78,
          -66510.20999999999,
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
      },
      {
        "cat": "Antecipação de Lucros",
        "values": [
          0,
          0,
          -44750.4,
          -14100,
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
        "cat": "IRPJ E CSLL",
        "values": [
          -42976.93,
          0,
          0,
          -11216.09,
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
        "cat": "Pis/Cofins",
        "values": [
          -27949.26,
          0,
          -256.44,
          -16405.95,
          -7947.55,
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
        "d1": 856090.2199999999,
        "d2": 98840.99
      },
      {
        "tipo": "Rendimentos de Aplicações",
        "parent": "Receita",
        "d1": 10.700000000000001,
        "d2": 0
      },
      {
        "tipo": "Receitas de Serviços a Identificar",
        "parent": "Receita",
        "d1": 348382.34999999986,
        "d2": 9747.66
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
        "d2": 4485.5
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 238107.36000000002,
        "d2": 20553.16
      },
      {
        "tipo": "Consulta",
        "parent": "Receita",
        "d1": 10350,
        "d2": 4450
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
        "d1": 95513.05,
        "d2": 6075
      },
      {
        "tipo": "Injetaveis",
        "parent": "Receita",
        "d1": 24301.9,
        "d2": 2770
      },
      {
        "tipo": "Receita de Serviços - Plano Diamante",
        "parent": "Receita",
        "d1": 110982.34999999999,
        "d2": 32800
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
        "tipo": "ADICIONAL DE TIZERPATIDA",
        "parent": "Receita",
        "d1": 1940,
        "d2": 9762.67
      },
      {
        "tipo": "Receita de Serviços - Protocolo Body Reset",
        "parent": "Receita",
        "d1": 6436,
        "d2": 397
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
        "d2": 3900
      },
      {
        "tipo": "Teste Nutrigenetico",
        "parent": "Receita",
        "d1": 0,
        "d2": 3900
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -482516.7900000001,
        "d2": -119715.19
      },
      {
        "tipo": "Despesas Diversas (Cartão)",
        "parent": "Despesa",
        "d1": -70698.4,
        "d2": 0
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -92.55000000000001,
        "d2": -30.85
      },
      {
        "tipo": "Marketing e Publicidade",
        "parent": "Despesa",
        "d1": -16800,
        "d2": -11200
      },
      {
        "tipo": "Lanches e Refeições",
        "parent": "Despesa",
        "d1": -329,
        "d2": 0
      },
      {
        "tipo": "Serviços de Pessoa Jurídica",
        "parent": "Despesa",
        "d1": -4117,
        "d2": -55
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
        "d1": -3736.3,
        "d2": -1456.3
      },
      {
        "tipo": "Despesas a identificar",
        "parent": "Despesa",
        "d1": -50207.04,
        "d2": 0
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": -269.28,
        "d2": 0
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": -916.67,
        "d2": -520.47
      },
      {
        "tipo": "Materiais de Limpeza e de Higiene",
        "parent": "Despesa",
        "d1": -480,
        "d2": -412
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": -32880.600000000006,
        "d2": -8727.59
      },
      {
        "tipo": "Materiais Aplicados na Prestação de Serviços",
        "parent": "Despesa",
        "d1": -12288.14,
        "d2": -46.89
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": -2133.85,
        "d2": -546.33
      },
      {
        "tipo": "Materiais de Escritório",
        "parent": "Despesa",
        "d1": -968.87,
        "d2": 0
      },
      {
        "tipo": "FGTS e Multa de FGTS",
        "parent": "Despesa",
        "d1": -2315.1200000000003,
        "d2": -1096.44
      },
      {
        "tipo": "INSS sobre Salários - GPS",
        "parent": "Despesa",
        "d1": -12843.699999999999,
        "d2": 0
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
        "tipo": "Cursos e Treinamentos",
        "parent": "Despesa",
        "d1": -49320.71,
        "d2": 0
      },
      {
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": -32946.67,
        "d2": -3713.91
      },
      {
        "tipo": "Compra",
        "parent": "Despesa",
        "d1": -71356.49,
        "d2": -28308.270000000004
      },
      {
        "tipo": "Software / Licença de Uso",
        "parent": "Despesa",
        "d1": -1251.25,
        "d2": 0
      },
      {
        "tipo": "Antecipação de Lucros",
        "parent": "Despesa",
        "d1": -44750.4,
        "d2": -14100
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
        "d1": -499.09,
        "d2": -520
      },
      {
        "tipo": "Viagens e Representações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -92.4
      },
      {
        "tipo": "BPO Financeiro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2400
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
        "d2": -7988.95
      },
      {
        "tipo": "PIS/COFINS/CSLL",
        "parent": "Despesa",
        "d1": 0,
        "d2": -27.6
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
        "receita": 11247.789999999999,
        "despesa": 0
      },
      {
        "m": "junho",
        "receita": 15727.2,
        "despesa": 4580.5599999999995
      },
      {
        "m": "julho",
        "receita": 13464.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "agosto",
        "receita": 12764.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "setembro",
        "receita": 9620.769999999999,
        "despesa": 4574.799999999999
      },
      {
        "m": "outubro",
        "receita": 6948.12,
        "despesa": 4574.799999999999
      },
      {
        "m": "novembro",
        "receita": 6323.1,
        "despesa": 4574.799999999999
      },
      {
        "m": "dezembro",
        "receita": 4075.2,
        "despesa": 4574.799999999999
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 35460.5,
        "clientes": 4
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 12417.600000000002,
        "clientes": 3
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 10823.33,
        "clientes": 1
      },
      {
        "name": "ADICIONAL DE TIZERPATIDA",
        "value": 6181.33,
        "clientes": 5
      },
      {
        "name": "Implantes",
        "value": 4900,
        "clientes": 2
      },
      {
        "name": "Teste Nutrigenetico",
        "value": 3900,
        "clientes": 1
      },
      {
        "name": "Receita de Serviços - Protocolo Body Reset",
        "value": 3176,
        "clientes": 1
      },
      {
        "name": "Injetaveis",
        "value": 2835,
        "clientes": 1
      },
      {
        "name": "Suplementos",
        "value": 477.5,
        "clientes": 2
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
        "name": "ISS",
        "value": 5.76,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "MARIA DA PENHA MOURA ROSA",
        "value": 12750.399999999998
      },
      {
        "name": "MARILZA DE AGUIAR DIAS",
        "value": 10891.5
      },
      {
        "name": "BETANIA KINACIA DE SOUZA SATURNINO",
        "value": 10823.33
      },
      {
        "name": "ANA LÚCIA COLOMBEKI SALDANHA",
        "value": 10097.6
      },
      {
        "name": "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        "value": 5840
      },
      {
        "name": "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        "value": 4137.599999999999
      },
      {
        "name": "ESTER DE ALMEIDA SANTANA",
        "value": 4000
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 3900
      },
      {
        "name": "NATALIA PEREIRA MARTINS SILVA",
        "value": 3176
      },
      {
        "name": "NAZARETH ALVES DE ARAÚJO",
        "value": 3125
      },
      {
        "name": "JADER JESUS SILVA",
        "value": 2835
      },
      {
        "name": "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        "value": 2540
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Operações",
        "ISS",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
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
        "ADICIONAL DE TIZERPATIDA",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
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
        "ISS",
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
      "TOTAL_RECEITA": 80171.26,
      "TOTAL_DESPESA": 32029.359999999997,
      "VALOR_LIQUIDO": 48141.899999999994,
      "MARGEM_LIQUIDA": 60.048825476860415,
      "VALOR_LIQ_SERIES": [
        0,
        0,
        0,
        0,
        11247.789999999999,
        11146.640000000001,
        8889.740000000002,
        8189.740000000002,
        5045.969999999999,
        2373.3200000000006,
        1748.300000000001,
        -499.59999999999945
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
      1250,
      625,
      1250,
      0,
      1581.25,
      3162.5,
      1581.25,
      3162.5,
      62154.75999999999,
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
      11247.789999999999,
      22394.43,
      31284.170000000002,
      39473.91,
      44519.880000000005,
      46893.200000000004,
      48641.50000000001,
      48141.90000000001
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          0,
          0,
          0,
          0,
          2856,
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
          2282.2,
          2282.2,
          2282.2,
          2282.2,
          822.2,
          822.2,
          822.2,
          822.2
        ]
      },
      {
        "cat": "Receita de Serviços - Plano Diamante",
        "values": [
          0,
          0,
          0,
          0,
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
        "cat": "ADICIONAL DE TIZERPATIDA",
        "values": [
          0,
          0,
          0,
          0,
          1226.67,
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
          300,
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
        "cat": "ISS",
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
        "d2": 26974.989999999998
      },
      {
        "tipo": "Suplementos",
        "parent": "Receita",
        "d1": 0,
        "d2": 477.5
      },
      {
        "tipo": "Receita de Serviços - Plano Diamante",
        "parent": "Receita",
        "d1": 0,
        "d2": 4329.34
      },
      {
        "tipo": "Receita de Serviços - Protocolo Body Reset",
        "parent": "Receita",
        "d1": 0,
        "d2": 794
      },
      {
        "tipo": "Receita de Serviços - Plano Bronze",
        "parent": "Receita",
        "d1": 0,
        "d2": 4564.4
      },
      {
        "tipo": "ADICIONAL DE TIZERPATIDA",
        "parent": "Receita",
        "d1": 0,
        "d2": 4257.33
      },
      {
        "tipo": "Injetaveis",
        "parent": "Receita",
        "d1": 0,
        "d2": 1417.5
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 0,
        "d2": 7918.25
      },
      {
        "tipo": "Implantes",
        "parent": "Receita",
        "d1": 0,
        "d2": 1266.67
      },
      {
        "tipo": "Teste Nutrigenetico",
        "parent": "Receita",
        "d1": 0,
        "d2": 1950
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
        "tipo": "ISS",
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
        "receita": 155790.00999999995,
        "despesa": 82637.71
      },
      {
        "m": "março",
        "receita": 508018.07,
        "despesa": 247015.73999999996
      },
      {
        "m": "abril",
        "receita": 91019.74,
        "despesa": 67348.36
      },
      {
        "m": "maio",
        "receita": 19069.04,
        "despesa": 52366.830000000016
      },
      {
        "m": "junho",
        "receita": 15727.2,
        "despesa": 4580.5599999999995
      },
      {
        "m": "julho",
        "receita": 13464.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "agosto",
        "receita": 12764.54,
        "despesa": 4574.799999999999
      },
      {
        "m": "setembro",
        "receita": 9620.769999999999,
        "despesa": 4574.799999999999
      },
      {
        "m": "outubro",
        "receita": 6948.12,
        "despesa": 4574.799999999999
      },
      {
        "m": "novembro",
        "receita": 6323.1,
        "despesa": 4574.799999999999
      },
      {
        "m": "dezembro",
        "receita": 4075.2,
        "despesa": 4574.799999999999
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "Receitas de Serviços a Identificar",
        "value": 358130.0099999999,
        "clientes": 12
      },
      {
        "name": "Receita de Serviços - Plano Prata",
        "value": 294121.02,
        "clientes": 28
      },
      {
        "name": "Receita de Serviços - Plano Diamante",
        "value": 154605.68000000002,
        "clientes": 14
      },
      {
        "name": "Receita de Serviços - Plano Bronze",
        "value": 114005.64999999998,
        "clientes": 25
      },
      {
        "name": "Injetaveis",
        "value": 29906.9,
        "clientes": 19
      },
      {
        "name": "ADICIONAL DE TIZERPATIDA",
        "value": 17884,
        "clientes": 11
      },
      {
        "name": "Consulta",
        "value": 14800,
        "clientes": 25
      },
      {
        "name": "Implantes",
        "value": 13430,
        "clientes": 4
      },
      {
        "name": "Receita de Serviços - Protocolo Body Reset",
        "value": 10009,
        "clientes": 2
      },
      {
        "name": "Suplementos",
        "value": 8758,
        "clientes": 45
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
        "name": "Compra",
        "value": 99664.76,
        "fornecedores": 19
      },
      {
        "name": "Despesas Diversas (Cartão)",
        "value": 70698.4,
        "fornecedores": 1
      },
      {
        "name": "Antecipação de Lucros",
        "value": 58850.4,
        "fornecedores": 2
      },
      {
        "name": "Marketing e Publicidade",
        "value": 56700,
        "fornecedores": 4
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
        "name": "Despesas a identificar",
        "value": 50207.04,
        "fornecedores": 1
      },
      {
        "name": "Cursos e Treinamentos",
        "value": 49320.71,
        "fornecedores": 3
      },
      {
        "name": "ISS",
        "value": 41613.950000000004,
        "fornecedores": 3
      },
      {
        "name": "Salários",
        "value": 36660.58,
        "fornecedores": 2
      },
      {
        "name": "INSS sobre Salários - GPS",
        "value": 12843.699999999999,
        "fornecedores": 1
      },
      {
        "name": "Materiais Aplicados na Prestação de Serviços",
        "value": 12335.029999999999,
        "fornecedores": 4
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "Sem cliente",
        "value": 334256.34
      },
      {
        "name": "EDILAINE MARCIA MARCIANO DE SOUZA",
        "value": 21250
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
        "name": "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        "value": 19460.66
      },
      {
        "name": "BETANIA KINACIA DE SOUZA SATURNINO",
        "value": 19110
      },
      {
        "name": "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        "value": 18614.999999999996
      },
      {
        "name": "ANA LÚCIA COLOMBEKI SALDANHA",
        "value": 18018.600000000006
      },
      {
        "name": "ISABELA CRISTINA FANTI",
        "value": 17620
      },
      {
        "name": "MERIELY RUFINO VAZ MUTZ",
        "value": 17335
      },
      {
        "name": "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        "value": 17200
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "Sem cliente",
        "value": 334265.29000000004
      },
      {
        "name": "RECEITA FEDERAL",
        "value": 46393.740000000005
      },
      {
        "name": "O MEDICO EMPRESARIO LTDA",
        "value": 39000
      },
      {
        "name": "BIO MEDS PHARMACEUTICA LTDA",
        "value": 35603.950000000004
      },
      {
        "name": "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        "value": 31800
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
        "name": "PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO",
        "value": 8713.39
      },
      {
        "name": "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        "value": 8640
      },
      {
        "name": "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        "value": 7500
      }
    ],
    "EXTRATO": [
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Operações",
        "ISS",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
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
        "Materiais Aplicados na Prestação de Serviços",
        "PIX Marketplace",
        -46.89,
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
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "IRRF",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -41.4,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "PIS/COFINS/CSLL",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -27.6,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
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
        "Suplementos",
        "ANDREA RODRIGUES FERNANDES",
        50,
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
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Materiais de Limpeza e de Higiene",
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
        "Marketing e Publicidade",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -138.3,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -2405.4,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        210,
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
        "Consulta",
        "Lúcia Sodré Moreira",
        650,
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
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -151.3,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        75,
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
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4.92,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4,
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
        "06/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DA PENHA MOURA ROSA",
        75,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "ESTER DE ALMEIDA SANTANA",
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
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        135,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "MERIELY RUFINO VAZ MUTZ",
        135,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "ORLANDA ALVES SALVADOR",
        76,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        550,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        10,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "TAIANE STREY VERONEZE ANDRE",
        300,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Compra",
        "64.659.216 KETELLY ALVES GOULARTE",
        -2600,
        "PAGO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Compra",
        "GOOGLE BRASIL INTERNET LTDA.",
        -2638.5,
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
        "ADICIONAL DE TIZERPATIDA",
        "JULIMAR MARTINS FANTI",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "FLAVYANNE PAULO MORETT AGUIAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "IRINEIA SOUZA PEREIRA SAAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "REINALDO ERMELINDO DE ARAUJO",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "MARLY MARIA ANDRADE DE LAIA",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        377,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        50,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/06/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
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
        "ADICIONAL DE TIZERPATIDA",
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
        "24/06/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
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
        "ADICIONAL DE TIZERPATIDA",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "BETANIA KINACIA DE SOUZA SATURNINO",
        2164.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SIRLENE KISTER PELANDA",
        305,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        508,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Injetaveis",
        "JADER JESUS SILVA",
        708.75,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "SOLANGE RODRIGUES DE SOUZA PIMENTA",
        517.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        1460,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        1262.2,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Implantes",
        "LETICIA RENATA RODRIGUES SOUZA PIONTI",
        300,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Teste Nutrigenetico",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        975,
        "A_PAGAR"
      ],
      [
        "30/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA DA PENHA MOURA ROSA",
        1593.8,
        "A_PAGAR"
      ],
      [
        "25/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        75,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
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
        "Suplementos",
        "ANDREA RODRIGUES FERNANDES",
        50,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        210,
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
        "Consulta",
        "Lúcia Sodré Moreira",
        650,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "Suplementos",
        "JADER JESUS SILVA",
        75,
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
        "ADICIONAL DE TIZERPATIDA",
        "MARILZA DE AGUIAR DIAS",
        1404,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "MARIA DA PENHA MOURA ROSA",
        75,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Suplementos",
        "ESTER DE ALMEIDA SANTANA",
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
        "05/05/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        135,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Suplementos",
        "MERIELY RUFINO VAZ MUTZ",
        135,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "ORLANDA ALVES SALVADOR",
        76,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "DORLI MARTINS DA SILVA",
        550,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        200,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Suplementos",
        "HIGLEST ALVES DE LA SALLE",
        10,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "TAIANE STREY VERONEZE ANDRE",
        300,
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
        "ADICIONAL DE TIZERPATIDA",
        "JULIMAR MARTINS FANTI",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "FLAVYANNE PAULO MORETT AGUIAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "IRINEIA SOUZA PEREIRA SAAR",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "REINALDO ERMELINDO DE ARAUJO",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Consulta",
        "MARLY MARIA ANDRADE DE LAIA",
        500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        377,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "NEUZA FERNANDES MARTINS",
        50,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "ZILDA MARIA MAIA DE CARVALHO",
        140,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Suplementos",
        "MAYKE CORREIA DE SOUZA",
        197.5,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Protocolo Body Reset",
        "NATALIA PEREIRA MARTINS SILVA",
        397,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        1581.25,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        3068,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "NAIR DA SILVA LOPES",
        7000,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Teste Nutrigenetico",
        "ZILDA MARIA MAIA DE CARVALHO",
        3900,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MARIA LEUZINA DE AGUIAR DIAS",
        390,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "DORIETE DE SOUZA",
        1872,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ORLANDA ALVES SALVADOR",
        200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        518.67,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "RAFAEL CARDOSO DE SOUZA",
        490,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "DELMA LUCIA MENDES DA CUNHA",
        3100,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ISABELA CRISTINA FANTI",
        8520,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ANTONIO PEREIRA DE ARAUJO",
        6050,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "ADICIONAL DE TIZERPATIDA",
        "ADELSON ANDRE BAECE STREY",
        1200,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Injetaveis",
        "MAYARA RIBEIRO SIMOES FORTUNA",
        1500,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        19750,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",
        7620.66,
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
        "28/04/2026",
        "Operações",
        "Suplementos",
        "ANA LÚCIA COLOMBEKI SALDANHA",
        185,
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
        "25/04/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        625,
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
        "Consulta",
        "MARIA DAS GRAÇAS NEVES CALIARI",
        650,
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
        "16/04/2026",
        "Operações",
        "Suplementos",
        "MONICA DE OLIVEIRA SILVA FERNANDES",
        700,
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
        "Suplementos",
        "BRISA DANIELLE FURTADO CARDOSO",
        350,
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
        "13/04/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        582.6,
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
        "07/04/2026",
        "Operações",
        "Suplementos",
        "ROSIANE ALMEIDA COSTA BELING",
        75,
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
        "Implantes",
        "Tomadores Diversos",
        3900,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        840,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "SHEILA MARIA NEGRI PONTES",
        3696,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARILZA DE AGUIAR DIAS",
        4274,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receitas de Serviços a Identificar",
        "Sem cliente",
        581.94,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "IRINEIA SOUZA PEREIRA SAAR",
        9680.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "DORIETE DE SOUZA",
        1200,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SAYONARIA LOPES EVANGELISTA",
        8045,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARLY MARIA ANDRADE DE LAIA",
        9342,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ÉRICA RODRIGUES LIMA BOECHAT",
        9050,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MERIELY RUFINO VAZ MUTZ",
        12450,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ROSIANE ALMEIDA COSTA BELING",
        6403,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "MAYKE CORREIA DE SOUZA",
        6920,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "LETICIA BATISTA DE MORAES",
        14955,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ADELSON ANDRE BAECE STREY",
        3362,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "VALDETE APARECIDA FERREIRA HERMISDOLFE",
        11199,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "ELIEZER MOURA DE ASSIS",
        7600.87,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "SALETTE DE ALMEIDA SANTANA",
        9264,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "MARIA LEUZINA DE AGUIAR DIAS",
        185,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Bronze",
        "NEILA MARIA DE REZENDE SILVA",
        4697.61,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JULIMAR MARTINS FANTI",
        8200,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "TAIANE STREY VERONEZE ANDRE",
        12228,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "NAZARETH ALVES DE ARAÚJO",
        6014.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Platina",
        "LEILA DA SILVA DE SOUZA COELHO",
        6351.4,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ADRIANA MOSCONI PAGANI",
        4800,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "FÁBIA INACIO DE SOUZA BLESSON",
        5733.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALAETI BRISQUE POEYS",
        4133.17,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "HAYANE SILVA VALARDAO",
        2500,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Implantes",
        "THAIZ LIMA ROCHA DA SILVA",
        4630,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Injetaveis",
        "ANTONIO PEREIRA DE ARAUJO",
        1170,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Prata",
        "JOERLAINE DA SILVA OLIVEIRA ELIZEU",
        10632,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "ALEX MARCHIOLI STEFANON",
        12750,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Operações",
        "Receita de Serviços - Plano Diamante",
        "EDILAINE MARCIA MARCIANO DE SOUZA",
        13360,
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
        "ISS",
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
        "28/05/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "CEF MATRIZ",
        -548.22,
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
        "Materiais Aplicados na Prestação de Serviços",
        "PIX Marketplace",
        -46.89,
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
        "IRRF",
        "RECEITA FEDERAL",
        -7947.55,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "IRRF",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -41.4,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Operações",
        "PIS/COFINS/CSLL",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -27.6,
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
        "Serviços de Pessoa Jurídica",
        "AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA",
        -55,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Materiais de Limpeza e de Higiene",
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
        "Marketing e Publicidade",
        "VANESSA CORDOVAL DE BARROS",
        -1500,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -138.3,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -2405.4,
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
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -151.3,
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
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4.92,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -4,
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
        "06/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Operações",
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Operações",
        "Compra",
        "64.659.216 KETELLY ALVES GOULARTE",
        -2600,
        "PAGO"
      ],
      [
        "02/05/2026",
        "Operações",
        "Compra",
        "GOOGLE BRASIL INTERNET LTDA.",
        -2638.5,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Operações",
        "Compra",
        "BIOMA4ME ANALISES CLINICAS S.A.",
        -2691,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Operações",
        "Compra",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Operações",
        "Compra",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
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
        "Compra",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -88,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Antecipação de Lucros",
        "ANNA PAULA FERNANDES MARTINS",
        -14100,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -96,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.28,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -118.08,
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
        "Compra",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Operações",
        "Compra",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -3000,
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
        "06/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -114.9,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Operações",
        "Compra",
        "GOOGLE BRASIL INTERNET LTDA.",
        -81.89,
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
        "Plano de Saúde Colaboradores",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Operações",
        "Compra",
        "KAMILLA PIMENTEL DERMATOLOGIA LTDA",
        -8640,
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
        "Antecipação de Lucros",
        "Sem cliente",
        -15000,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Marketing e Publicidade",
        "Sem cliente",
        -1500,
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
        "Compra",
        "BARRACOPY COMUNICACAO VISUAL LTDA",
        -1600,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Operações",
        "Compra",
        "BIOS FARMACEUTICA LTDA",
        -12500.8,
        "PAGO"
      ],
      [
        "28/03/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -399.9,
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
        "27/03/2026",
        "Operações",
        "Compra",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
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
        "Antecipação de Lucros",
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
        "Compra",
        "37.901.199 VAGNER LISBOA RIBEIRO",
        -60,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Operações",
        "Materiais Aplicados na Prestação de Serviços",
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
        "Cursos e Treinamentos",
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
        "Compra",
        "WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA",
        -2500,
        "PAGO"
      ],
      [
        "19/03/2026",
        "Operações",
        "Compra",
        "NICKSCELL COMERCIO E SERVICOS LTDA",
        -91,
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
        "Cursos e Treinamentos",
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
        "Antecipação de Lucros",
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
        "12/03/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -18528.75,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Compra",
        "TOKARSKI COMERCIO INDUSTRIA LTDA",
        -14300.04,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -126.72,
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
        "10/03/2026",
        "Operações",
        "ISS",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -5.22,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Operações",
        "Compra",
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
        "Cursos e Treinamentos",
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
        "Compra",
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
        "Compra",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Antecipação de Lucros",
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
        "Serviços de Pessoa Jurídica",
        "Sem cliente",
        -980,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Operações",
        "Compra",
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
        "28/02/2026",
        "Operações",
        "Compra",
        "CLOUDIA TECNOLOGIA EM SOFTWARE LTDA",
        -599.9,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Operações",
        "Cursos e Treinamentos",
        "O MEDICO EMPRESARIO LTDA",
        -13000,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Operações",
        "Compra",
        "UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO",
        -260,
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
        "20/02/2026",
        "Operações",
        "Compra",
        "CONTAAZUL SOFTWARE LTDA",
        -917.64,
        "PAGO"
      ],
      [
        "19/02/2026",
        "Operações",
        "Compra",
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
      ],
      [
        "13/02/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -117.3,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Operações",
        "Compra",
        "RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP",
        -140.64,
        "PAGO"
      ],
      [
        "13/02/2026",
        "Operações",
        "Telefonia e Internet",
        "BIZZ INTERNET LTDA",
        -99.9,
        "PAGO"
      ],
      [
        "12/02/2026",
        "Operações",
        "Materiais de Escritório",
        "REIS & SOUZA LIMITADA",
        -5,
        "PAGO"
      ],
      [
        "11/02/2026",
        "Operações",
        "Compra",
        "ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA",
        -7140,
        "PAGO"
      ],
      [
        "10/02/2026",
        "Operações",
        "ISS",
        "Sem cliente",
        -206.07,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Operações",
        "ISS",
        "Sem cliente",
        -2040,
        "PAGO"
      ],
      [
        "09/02/2026",
        "Operações",
        "Despesas a identificar",
        "Sem cliente",
        -20606.83,
        "PAGO"
      ],
      [
        "06/02/2026",
        "Operações",
        "Marketing e Publicidade",
        "52.526.409 WILIAN DE SOUZA OLIVEIRA",
        -2100,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "Honorários Contábeis",
        "DELOGO & SAINTS CONTABILIDADE LTDA",
        -1156.3,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "Software / Licença de Uso",
        "Sem cliente",
        -650,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "Cursos e Treinamentos",
        "SEGEX UVV ON",
        -330.75,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "INSS sobre Salários - GPS",
        "Sem cliente",
        -2955.54,
        "PAGO"
      ],
      [
        "05/02/2026",
        "Operações",
        "FGTS e Multa de FGTS",
        "Sem cliente",
        -519.57,
        "PAGO"
      ],
      [
        "04/02/2026",
        "Operações",
        "Compra",
        "BIO MEDS PHARMACEUTICA LTDA",
        -902.25,
        "PAGO"
      ],
      [
        "03/02/2026",
        "Operações",
        "Marketing e Publicidade",
        "RADIO SAO FRANCISCO LTDA",
        -2000,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -3626.71,
        "PAGO"
      ],
      [
        "02/02/2026",
        "Operações",
        "Salários",
        "Sem cliente",
        -2660,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 1035102.47,
      "TOTAL_DESPESA": 634261.3400000003,
      "VALOR_LIQUIDO": 400841.12999999966,
      "MARGEM_LIQUIDA": 38.72477765413889,
      "VALOR_LIQ_SERIES": [
        39418.80000000005,
        73152.29999999994,
        261002.33000000005,
        23671.380000000005,
        -33297.790000000015,
        11146.640000000001,
        8889.740000000002,
        8189.740000000002,
        5045.969999999999,
        2373.3200000000006,
        1748.300000000001,
        -499.59999999999945
      ]
    },
    "RECEITA_DIA": [
      4045.65,
      36403.29,
      10318.26,
      16965.739999999998,
      44230.28,
      31080.979999999996,
      10897.33,
      9090.93,
      21452.809999999998,
      7285,
      12474.330000000002,
      35206.840000000004,
      13535.52,
      2098.87,
      2200.16,
      12855.489999999998,
      10970.49,
      23722.96,
      40574.939999999995,
      25004.170000000002,
      16598.7,
      6457.05,
      43229.99,
      29900.789999999994,
      8490.45,
      29518.37,
      32862.92999999999,
      4783.8,
      9598,
      152055.61000000002,
      331192.74000000005
    ],
    "DESPESA_DIA": [
      8930.85,
      25514.349999999995,
      39309.240000000005,
      7548.82,
      28383.25,
      25697.960000000006,
      18101.51,
      34.92,
      29239.960000000003,
      11261.78,
      34145.36000000001,
      55736.46,
      21299.499999999996,
      21775,
      9681.11,
      19782.27,
      1068,
      3075.14,
      2995.74,
      8536.36,
      16579.19,
      32483.079999999998,
      49847.21000000001,
      48435.88,
      0,
      74430.04,
      3286.3,
      1808.02,
      435.78,
      19013.26,
      15825
    ],
    "SALDOS_MES": [
      39418.80000000005,
      112571.09999999999,
      373573.43000000005,
      397244.81000000006,
      363947.02,
      375093.66000000003,
      383983.4,
      392173.14,
      397219.11,
      399592.43,
      401340.73,
      400841.13
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "Receitas de Serviços a Identificar",
        "values": [
          131441.84,
          101140.14000000001,
          115800.37000000002,
          9747.66,
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
        "cat": "Receita de Serviços - Plano Prata",
        "values": [
          30537.63,
          17580,
          189989.73,
          18346.91,
          5062.25,
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
          95514.18,
          32800,
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
          64257.05,
          6075,
          2282.2,
          2282.2,
          2282.2,
          2282.2,
          822.2,
          822.2,
          822.2,
          822.2
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
        "cat": "Compra",
        "values": [
          0,
          -12460.429999999998,
          -58896.06,
          -20374.770000000004,
          -7933.500000000001,
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
        "cat": "Despesas Diversas (Cartão)",
        "values": [
          -2295.41,
          -1892.78,
          -66510.20999999999,
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
      },
      {
        "cat": "Antecipação de Lucros",
        "values": [
          0,
          0,
          -44750.4,
          -14100,
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
          -4100,
          -5600,
          -7100,
          -4100,
          -7100,
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
        "cat": "IRPJ E CSLL",
        "values": [
          -42976.93,
          0,
          0,
          -11216.09,
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
        "d1": 856090.2199999999,
        "d2": 125815.98
      },
      {
        "tipo": "Rendimentos de Aplicações",
        "parent": "Receita",
        "d1": 10.700000000000001,
        "d2": 0
      },
      {
        "tipo": "Receitas de Serviços a Identificar",
        "parent": "Receita",
        "d1": 348382.34999999986,
        "d2": 9747.66
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
        "d2": 4963
      },
      {
        "tipo": "Receita de Serviços - Plano Prata",
        "parent": "Receita",
        "d1": 238107.36000000002,
        "d2": 28471.41
      },
      {
        "tipo": "Consulta",
        "parent": "Receita",
        "d1": 10350,
        "d2": 4450
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
        "d1": 95513.05,
        "d2": 10639.400000000001
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
        "d1": 110982.34999999999,
        "d2": 37129.34
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
        "tipo": "ADICIONAL DE TIZERPATIDA",
        "parent": "Receita",
        "d1": 1940,
        "d2": 14020
      },
      {
        "tipo": "Receita de Serviços - Protocolo Body Reset",
        "parent": "Receita",
        "d1": 6436,
        "d2": 1191
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
        "d2": 5166.67
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
        "d1": -482516.7900000001,
        "d2": -124295.74999999999
      },
      {
        "tipo": "Despesas Diversas (Cartão)",
        "parent": "Despesa",
        "d1": -70698.4,
        "d2": 0
      },
      {
        "tipo": "Tarifas Bancárias",
        "parent": "Despesa",
        "d1": -92.55000000000001,
        "d2": -30.85
      },
      {
        "tipo": "Marketing e Publicidade",
        "parent": "Despesa",
        "d1": -16800,
        "d2": -15300
      },
      {
        "tipo": "Lanches e Refeições",
        "parent": "Despesa",
        "d1": -329,
        "d2": 0
      },
      {
        "tipo": "Serviços de Pessoa Jurídica",
        "parent": "Despesa",
        "d1": -4117,
        "d2": -55
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
        "d1": -3736.3,
        "d2": -1456.3
      },
      {
        "tipo": "Despesas a identificar",
        "parent": "Despesa",
        "d1": -50207.04,
        "d2": 0
      },
      {
        "tipo": "Coleta de Resíduos Ambientais",
        "parent": "Despesa",
        "d1": -269.28,
        "d2": 0
      },
      {
        "tipo": "Telefonia e Internet",
        "parent": "Despesa",
        "d1": -916.67,
        "d2": -735.27
      },
      {
        "tipo": "Materiais de Limpeza e de Higiene",
        "parent": "Despesa",
        "d1": -480,
        "d2": -412
      },
      {
        "tipo": "ISS",
        "parent": "Despesa",
        "d1": -32880.600000000006,
        "d2": -8733.35
      },
      {
        "tipo": "Materiais Aplicados na Prestação de Serviços",
        "parent": "Despesa",
        "d1": -12288.14,
        "d2": -46.89
      },
      {
        "tipo": "Energia Elétrica",
        "parent": "Despesa",
        "d1": -2133.85,
        "d2": -546.33
      },
      {
        "tipo": "Materiais de Escritório",
        "parent": "Despesa",
        "d1": -968.87,
        "d2": 0
      },
      {
        "tipo": "FGTS e Multa de FGTS",
        "parent": "Despesa",
        "d1": -2315.1200000000003,
        "d2": -1096.44
      },
      {
        "tipo": "INSS sobre Salários - GPS",
        "parent": "Despesa",
        "d1": -12843.699999999999,
        "d2": 0
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
        "tipo": "Cursos e Treinamentos",
        "parent": "Despesa",
        "d1": -49320.71,
        "d2": 0
      },
      {
        "tipo": "Salários",
        "parent": "Despesa",
        "d1": -32946.67,
        "d2": -3713.91
      },
      {
        "tipo": "Compra",
        "parent": "Despesa",
        "d1": -71356.49,
        "d2": -28308.270000000004
      },
      {
        "tipo": "Software / Licença de Uso",
        "parent": "Despesa",
        "d1": -1251.25,
        "d2": 0
      },
      {
        "tipo": "Antecipação de Lucros",
        "parent": "Despesa",
        "d1": -44750.4,
        "d2": -14100
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
        "d1": -499.09,
        "d2": -780
      },
      {
        "tipo": "Viagens e Representações",
        "parent": "Despesa",
        "d1": 0,
        "d2": -92.4
      },
      {
        "tipo": "BPO Financeiro",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2400
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
        "d2": -7988.95
      },
      {
        "tipo": "PIS/COFINS/CSLL",
        "parent": "Despesa",
        "d1": 0,
        "d2": -27.6
      }
    ]
  }
};

// ALL_TX: lista flat de TODAS as transacoes normalizadas (despesa + receita,
// realizadas + a pagar + canceladas excluidas). Usada pra cross-filter real
// — pagina recalcula KPIs/charts/tabelas em runtime via aggregateTx().
// Cada row eh tupla compacta pra reduzir tamanho do bundle:
// [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, centroCusto, regime]
// regime: 'c' = caixa, 'k' = competencia (compacto pra economizar bytes)
const ALL_TX = [["r","2026-01",2,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","c"],["r","2026-01",2,"Rendimentos de Aplicações","Sem cliente",0.06,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",1967.8,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",1967.8,1,"","","k"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",7887.67,1,"","","c"],["r","2026-01",2,"Receitas de Serviços a Identificar","Sem cliente",7887.67,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2000,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2000,1,"","","k"],["r","2026-01",5,"Receitas a Identificar","Sem cliente",260,1,"","","c"],["r","2026-01",5,"Receitas a Identificar","Sem cliente",260,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","SIMONE ALVES DE SÁ GOMES ASSIS",1021.37,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","SIMONE ALVES DE SÁ GOMES ASSIS",1021.37,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2404.87,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",2404.87,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",4630.48,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",4630.48,1,"","","k"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",6924.37,1,"","","c"],["r","2026-01",5,"Receitas de Serviços a Identificar","Sem cliente",6924.37,1,"","","k"],["r","2026-01",5,"Suplementos","LEILA DA SILVA DE SOUZA COELHO",75,1,"","","c"],["r","2026-04",30,"Suplementos","LEILA DA SILVA DE SOUZA COELHO",75,1,"","","k"],["r","2026-01",5,"Suplementos","KAIKE PIOL",75,1,"","","c"],["r","2026-04",30,"Suplementos","KAIKE PIOL",75,1,"","","k"],["r","2026-01",6,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1500,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",1178.63,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",1178.63,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-01",6,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-01",6,"Suplementos","ANA PAULA COELHO PORTES MATTOS",75,1,"","","c"],["r","2026-04",30,"Suplementos","ANA PAULA COELHO PORTES MATTOS",75,1,"","","k"],["r","2026-01",7,"Suplementos","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","c"],["r","2026-04",30,"Suplementos","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","k"],["r","2026-01",7,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",75,1,"","","c"],["r","2026-04",30,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",75,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","HAYANE SILVA VALARDAO",1500,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","HAYANE SILVA VALARDAO",1500,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",3042.7,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",3042.7,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","k"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",300.32,1,"","","c"],["r","2026-01",7,"Receitas de Serviços a Identificar","Sem cliente",300.32,1,"","","k"],["r","2026-01",8,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1178.63,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SIMONE ALVES DE SÁ GOMES ASSIS",1178.63,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",3666,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",3666,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",1761.19,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",1761.19,1,"","","k"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",2275.11,1,"","","c"],["r","2026-01",8,"Receitas de Serviços a Identificar","Sem cliente",2275.11,1,"","","k"],["r","2026-01",8,"Suplementos","LAYLA TEIXEIRA BARBOSA COSTA",135,1,"","","c"],["r","2026-04",30,"Suplementos","LAYLA TEIXEIRA BARBOSA COSTA",135,1,"","","k"],["r","2026-01",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-01",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",992.1,1,"","","c"],["r","2026-01",9,"Receitas de Serviços a Identificar","Sem cliente",992.1,1,"","","k"],["r","2026-01",12,"Suplementos","EDUARDA CORREA PILKER",75,1,"","","c"],["r","2026-04",30,"Suplementos","EDUARDA CORREA PILKER",75,1,"","","k"],["r","2026-01",12,"Consulta","DORIETE DE SOUZA",500,1,"","","c"],["r","2026-04",30,"Consulta","DORIETE DE SOUZA",500,1,"","","k"],["r","2026-01",12,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","c"],["r","2026-01",12,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",500,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",500,1,"","","k"],["r","2026-01",12,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","k"],["r","2026-01",12,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",6000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",6000,1,"","","k"],["r","2026-01",12,"Descontos financeiros obtidos","Sem cliente",1085,1,"","","c"],["r","2026-01",12,"Descontos financeiros obtidos","Sem cliente",1085,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",1000.22,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",1000.22,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",249.5,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",249.5,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",376.32,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",376.32,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",4777.33,1,"","","c"],["r","2026-01",12,"Receitas de Serviços a Identificar","Sem cliente",4777.33,1,"","","k"],["r","2026-01",13,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-01",13,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",494.88,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",494.88,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",490.21,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",490.21,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","c"],["r","2026-01",13,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","k"],["r","2026-01",13,"Suplementos","NAZARETH ALVES DE ARAÚJO",185,1,"","","c"],["r","2026-04",30,"Suplementos","NAZARETH ALVES DE ARAÚJO",185,1,"","","k"],["r","2026-01",14,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","c"],["r","2026-01",14,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","k"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",1400,1,"","","c"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",1400,1,"","","k"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",623.29,1,"","","c"],["r","2026-01",14,"Receitas de Serviços a Identificar","Sem cliente",623.29,1,"","","k"],["r","2026-01",15,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-01",15,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",1347.71,1,"","","c"],["r","2026-01",15,"Receitas de Serviços a Identificar","Sem cliente",1347.71,1,"","","k"],["r","2026-01",16,"Suplementos","RODRIGO SOARES SIQUEIRA",75,1,"","","c"],["r","2026-04",30,"Suplementos","RODRIGO SOARES SIQUEIRA",75,1,"","","k"],["r","2026-01",16,"Suplementos","JULIMAR MARTINS FANTI",75,1,"","","c"],["r","2026-04",30,"Suplementos","JULIMAR MARTINS FANTI",75,1,"","","k"],["r","2026-01",16,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",1741,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",1741,1,"","","k"],["r","2026-01",16,"Receita de Serviços - Plano Bronze","ORLANDA ALVES SALVADOR",3800,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ORLANDA ALVES SALVADOR",3800,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","k"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-01",16,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-01",19,"Suplementos","TELMELITA SAAR ORECCHIO",75,1,"","","c"],["r","2026-04",30,"Suplementos","TELMELITA SAAR ORECCHIO",75,1,"","","k"],["r","2026-01",19,"Consulta","JOERLAINE DA SILVA OLIVEIRA ELIZEU",700,1,"","","c"],["r","2026-04",30,"Consulta","JOERLAINE DA SILVA OLIVEIRA ELIZEU",700,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","ELIENE PEREIRA SOBRINHO",500,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","ELIENE PEREIRA SOBRINHO",500,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",1133.17,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",1133.17,1,"","","k"],["r","2026-01",19,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",2165,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",2165,1,"","","k"],["r","2026-01",19,"Suplementos","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",135,1,"","","c"],["r","2026-04",30,"Suplementos","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",135,1,"","","k"],["r","2026-01",19,"Receita de Serviços - Plano Bronze","NUBIA SILVA AMARAL STOHEL",2400,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NUBIA SILVA AMARAL STOHEL",2400,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2680.25,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2680.25,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",4983.81,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",4983.81,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2169.27,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",2169.27,1,"","","k"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",6994.02,1,"","","c"],["r","2026-01",19,"Receitas de Serviços a Identificar","Sem cliente",6994.02,1,"","","k"],["r","2026-01",19,"Suplementos","JADER JESUS SILVA",150,1,"","","c"],["r","2026-04",30,"Suplementos","JADER JESUS SILVA",150,1,"","","k"],["r","2026-01",20,"Suplementos","CRISTIANE CANDIDA DA SILVA",210,1,"","","c"],["r","2026-04",30,"Suplementos","CRISTIANE CANDIDA DA SILVA",210,1,"","","k"],["r","2026-01",20,"Rendimentos de Aplicações","Sem cliente",0.11,1,"","","c"],["r","2026-01",20,"Rendimentos de Aplicações","Sem cliente",0.11,1,"","","k"],["r","2026-01",20,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1656,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1656,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",132.89,1,"","","k"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-01",20,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-01",21,"Consulta","MERIELY RUFINO VAZ MUTZ",500,1,"","","c"],["r","2026-04",30,"Consulta","MERIELY RUFINO VAZ MUTZ",500,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",4500,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",4500,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1809.53,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1809.53,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",239.1,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",239.1,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",842.65,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",842.65,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1821.54,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1821.54,1,"","","k"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","c"],["r","2026-01",21,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","k"],["r","2026-01",21,"Suplementos","HAYANE SILVA VALARDAO",135,1,"","","c"],["r","2026-04",30,"Suplementos","HAYANE SILVA VALARDAO",135,1,"","","k"],["r","2026-01",22,"Consulta","ALEX MARCHIOLI STEFANON",500,1,"","","c"],["r","2026-04",30,"Consulta","ALEX MARCHIOLI STEFANON",500,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",1495,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",1495,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","k"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",759.48,1,"","","c"],["r","2026-01",22,"Receitas de Serviços a Identificar","Sem cliente",759.48,1,"","","k"],["r","2026-01",23,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",395,1,"","","c"],["r","2026-04",30,"Suplementos","KEILA SOARES RODRIGUES MONTEIRO",395,1,"","","k"],["r","2026-01",23,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",1500,1,"","","k"],["r","2026-01",23,"Receita de Serviços - Plano Bronze","LUCIMAR MARCHIOLI STEFANON",3500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LUCIMAR MARCHIOLI STEFANON",3500,1,"","","k"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1267.56,1,"","","c"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1267.56,1,"","","k"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","c"],["r","2026-01",23,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","k"],["r","2026-01",26,"Consulta","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Consulta","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-01",26,"Rendimentos de Aplicações","Sem cliente",0.67,1,"","","c"],["r","2026-01",26,"Rendimentos de Aplicações","Sem cliente",0.67,1,"","","k"],["r","2026-01",26,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2865,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2865,1,"","","k"],["r","2026-01",26,"Suplementos","LETICIA RENATA RODRIGUES SOUZA PIONTI",135,1,"","","c"],["r","2026-04",30,"Suplementos","LETICIA RENATA RODRIGUES SOUZA PIONTI",135,1,"","","k"],["r","2026-01",26,"Receita de Serviços - Plano Bronze","ELIZABETH DE REZENDE ALMEIDA",6100,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ELIZABETH DE REZENDE ALMEIDA",6100,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1682.31,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1551.5,1,"","","c"],["r","2026-01",26,"Receitas de Serviços a Identificar","Sem cliente",1551.5,1,"","","k"],["r","2026-01",26,"Consulta","SAYONARIA LOPES EVANGELISTA",500,1,"","","c"],["r","2026-04",30,"Consulta","SAYONARIA LOPES EVANGELISTA",500,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",75,1,"","","k"],["r","2026-01",27,"Injetaveis","WALAS FERNANDES VITAL",1200,1,"","","c"],["r","2026-03",31,"Injetaveis","WALAS FERNANDES VITAL",1200,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1500,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",8100,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",8100,1,"","","k"],["r","2026-01",27,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",2488,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",2488,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2200,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2200,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",1458.45,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",1458.45,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","k"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2203.86,1,"","","c"],["r","2026-01",27,"Receitas de Serviços a Identificar","Sem cliente",2203.86,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",1000,1,"","","k"],["r","2026-01",28,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",900,1,"","","c"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",900,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",682.52,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",682.52,1,"","","k"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-01",28,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","k"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","c"],["r","2026-01",29,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","k"],["r","2026-01",30,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",815,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",815,1,"","","k"],["r","2026-01",30,"Suplementos","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","c"],["r","2026-04",30,"Suplementos","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",4096,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",4096,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",274.99,1,"","","c"],["r","2026-01",30,"Receitas de Serviços a Identificar","Sem cliente",274.99,1,"","","k"],["r","2026-02",2,"Rendimentos de Aplicações","Sem cliente",0.36,1,"","","c"],["r","2026-02",2,"Rendimentos de Aplicações","Sem cliente",0.36,1,"","","k"],["r","2026-02",2,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",3183.17,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",3183.17,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",966.34,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",966.34,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",1421.47,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",1421.47,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",3700.52,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",3700.52,1,"","","k"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",6119.12,1,"","","c"],["r","2026-02",2,"Receitas de Serviços a Identificar","Sem cliente",6119.12,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","k"],["r","2026-02",3,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",600,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",600,1,"","","k"],["r","2026-02",3,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",900,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1672.08,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","k"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","c"],["r","2026-02",3,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","k"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","c"],["r","2026-02",4,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","k"],["r","2026-02",5,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","c"],["r","2026-02",5,"Rendimentos de Aplicações","Sem cliente",0.18,1,"","","k"],["r","2026-02",5,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",1200,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",1200,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",193.98,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",547.09,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",547.09,1,"","","k"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","c"],["r","2026-02",5,"Receitas de Serviços a Identificar","Sem cliente",1256.97,1,"","","k"],["r","2026-02",6,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","c"],["r","2026-02",6,"Rendimentos de Aplicações","Sem cliente",0.02,1,"","","k"],["r","2026-02",6,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",1900,1,"","","k"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",615.8,1,"","","c"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",615.8,1,"","","k"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",365.52,1,"","","c"],["r","2026-02",6,"Receitas de Serviços a Identificar","Sem cliente",365.52,1,"","","k"],["r","2026-02",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-02",9,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-02",9,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",135,1,"","","c"],["r","2026-03",31,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",135,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",1500,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",1500,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",728.25,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",2391.46,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",2391.46,1,"","","k"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",5304.42,1,"","","c"],["r","2026-02",9,"Receitas de Serviços a Identificar","Sem cliente",5304.42,1,"","","k"],["r","2026-02",10,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",935,1,"","","c"],["r","2026-03",31,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",935,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",1810.45,1,"","","c"],["r","2026-02",10,"Receitas de Serviços a Identificar","Sem cliente",1810.45,1,"","","k"],["r","2026-02",10,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",650,1,"","","c"],["r","2026-04",30,"Consulta","ÉRICA RODRIGUES LIMA BOECHAT",650,1,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",550,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",550,1,"","","k"],["r","2026-02",11,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",1000,1,"","","c"],["r","2026-03",31,"Receita de Serviço - alquimia Prata","MARCELO PARANHO",1000,1,"","","k"],["r","2026-02",11,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",1108,1,"","","c"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",1108,1,"","","k"],["r","2026-02",11,"Suplementos","LEDIANA NEIVA ANACLETO OLIVEIRA",75,1,"","","c"],["r","2026-04",30,"Suplementos","LEDIANA NEIVA ANACLETO OLIVEIRA",75,1,"","","k"],["r","2026-02",11,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",4175,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",4175,1,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-02",11,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-02",11,"Suplementos","JOSÉ ESTHEVAN PIRES DA CUNHA",135,1,"","","c"],["r","2026-04",30,"Suplementos","JOSÉ ESTHEVAN PIRES DA CUNHA",135,1,"","","k"],["r","2026-02",12,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",25,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",25,1,"","","k"],["r","2026-02",12,"Consulta","MAYKE CORREIA DE SOUZA",650,1,"","","c"],["r","2026-04",30,"Consulta","MAYKE CORREIA DE SOUZA",650,1,"","","k"],["r","2026-02",12,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",650,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",650,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","c"],["r","2026-02",12,"Receitas de Serviços a Identificar","Sem cliente",847.24,1,"","","k"],["r","2026-02",12,"Consulta","LETICIA BATISTA DE MORAES",650,1,"","","c"],["r","2026-04",30,"Consulta","LETICIA BATISTA DE MORAES",650,1,"","","k"],["r","2026-02",13,"Consulta","EDILAINE MARCIA MARCIANO DE SOUZA",650,1,"","","c"],["r","2026-04",30,"Consulta","EDILAINE MARCIA MARCIANO DE SOUZA",650,1,"","","k"],["r","2026-02",13,"Receitas de Serviços a Identificar","ADMIR CUSTÓDIO DE ALMEIDA JÚNIOR",140,1,"","","c"],["r","2026-02",13,"Receitas de Serviços a Identificar","ADMIR CUSTÓDIO DE ALMEIDA JÚNIOR",140,1,"","","k"],["r","2026-02",13,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","CRISTIANE CANDIDA DA SILVA",4350,1,"","","k"],["r","2026-02",13,"Receitas de Serviços a Identificar","Sem cliente",509.25,1,"","","c"],["r","2026-02",13,"Receitas de Serviços a Identificar","Sem cliente",509.25,1,"","","k"],["r","2026-02",13,"Suplementos","NAZARETH ALVES DE ARAÚJO",75,1,"","","c"],["r","2026-04",30,"Suplementos","NAZARETH ALVES DE ARAÚJO",75,1,"","","k"],["r","2026-02",18,"Consulta","DIVALDO GOMES DE SOUZA FILHO",650,1,"","","c"],["r","2026-04",30,"Consulta","DIVALDO GOMES DE SOUZA FILHO",650,1,"","","k"],["r","2026-02",18,"Consulta","VALDETE APARECIDA FERREIRA HERMISDOLFE",650,1,"","","c"],["r","2026-04",30,"Consulta","VALDETE APARECIDA FERREIRA HERMISDOLFE",650,1,"","","k"],["r","2026-02",18,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",300,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",300,1,"","","k"],["r","2026-02",18,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",1610,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",1610,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",3146.23,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",3146.23,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",73.83,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",73.83,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",2879.49,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",2879.49,1,"","","k"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",10808.37,1,"","","c"],["r","2026-02",18,"Receitas de Serviços a Identificar","Sem cliente",10808.37,1,"","","k"],["r","2026-02",19,"Consulta","FABRÍCIO RODRIGUES LINHARES",650,1,"","","c"],["r","2026-04",30,"Consulta","FABRÍCIO RODRIGUES LINHARES",650,1,"","","k"],["r","2026-02",19,"Rendimentos de Aplicações","Sem cliente",0.21,1,"","","c"],["r","2026-02",19,"Rendimentos de Aplicações","Sem cliente",0.21,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",270,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",1251.57,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",314.42,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",314.42,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",368.56,1,"","","k"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",3937.6,1,"","","c"],["r","2026-02",19,"Receitas de Serviços a Identificar","Sem cliente",3937.6,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1725.49,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",282.73,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",282.73,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",1544.16,1,"","","k"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",2930.31,1,"","","c"],["r","2026-02",20,"Receitas de Serviços a Identificar","Sem cliente",2930.31,1,"","","k"],["r","2026-02",23,"Injetaveis","FERNANDA APARECIDA DE ALMEIDA",1747.9,1,"","","c"],["r","2026-03",31,"Injetaveis","FERNANDA APARECIDA DE ALMEIDA",1747.9,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","k"],["r","2026-02",23,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",7880,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",7880,1,"","","k"],["r","2026-02",23,"Injetaveis","ISABELA CRISTINA FANTI",900,1,"","","c"],["r","2026-03",31,"Injetaveis","ISABELA CRISTINA FANTI",900,1,"","","k"],["r","2026-02",23,"Suplementos","ISABELA CRISTINA FANTI",320,1,"","","c"],["r","2026-04",30,"Suplementos","ISABELA CRISTINA FANTI",320,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",356.47,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",316.78,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",673.18,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3103.5,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3103.5,1,"","","k"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3366.29,1,"","","c"],["r","2026-02",23,"Receitas de Serviços a Identificar","Sem cliente",3366.29,1,"","","k"],["r","2026-02",23,"Suplementos","MARLETE ALVARES CABRAL",50,1,"","","c"],["r","2026-04",30,"Suplementos","MARLETE ALVARES CABRAL",50,1,"","","k"],["r","2026-02",24,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",5000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",5000,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",836.74,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",836.74,1,"","","k"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-02",24,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-02",25,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",150,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",150,1,"","","k"],["r","2026-02",25,"Suplementos","SALETTE DE ALMEIDA SANTANA",135,1,"","","c"],["r","2026-04",30,"Suplementos","SALETTE DE ALMEIDA SANTANA",135,1,"","","k"],["r","2026-02",25,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",600,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",600,1,"","","k"],["r","2026-02",25,"Receitas de Serviços a Identificar","Sem cliente",1108.46,1,"","","c"],["r","2026-02",25,"Receitas de Serviços a Identificar","Sem cliente",1108.46,1,"","","k"],["r","2026-02",26,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",2460,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",2460,1,"","","k"],["r","2026-02",26,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",3900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",3900,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",1698.25,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",1698.25,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",3143.61,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",3143.61,1,"","","k"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","c"],["r","2026-02",26,"Receitas de Serviços a Identificar","Sem cliente",236.1,1,"","","k"],["r","2026-02",27,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",4600,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",4600,1,"","","k"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","c"],["r","2026-02",27,"Receitas de Serviços a Identificar","Sem cliente",1621.2,1,"","","k"],["r","2026-03",2,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",400,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",400,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","SANDRA VIEIRA FARIA",430,1,"","","k"],["r","2026-03",2,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",3340,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",3340,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",216.05,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",622.72,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",1744.02,1,"","","k"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",2800.14,1,"","","c"],["r","2026-03",2,"Receitas de Serviços a Identificar","Sem cliente",2800.14,1,"","","k"],["r","2026-03",3,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","c"],["r","2026-04",30,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","k"],["r","2026-03",3,"Rendimentos de Aplicações","Sem cliente",5.48,1,"","","c"],["r","2026-03",3,"Rendimentos de Aplicações","Sem cliente",5.48,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1159.11,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1159.11,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",1855.91,1,"","","k"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","c"],["r","2026-03",3,"Receitas de Serviços a Identificar","Sem cliente",345.6,1,"","","k"],["r","2026-03",4,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","c"],["r","2026-03",4,"Rendimentos de Aplicações","Sem cliente",0.12,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",1173.42,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",1173.42,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",620.74,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",620.74,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",809.76,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",809.76,1,"","","k"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",4151.32,1,"","","c"],["r","2026-03",4,"Receitas de Serviços a Identificar","Sem cliente",4151.32,1,"","","k"],["r","2026-03",5,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",4500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",4500,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1873.2,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1873.2,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",652.58,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",652.58,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1181.28,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1181.28,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",1186.39,1,"","","k"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","c"],["r","2026-03",5,"Receitas de Serviços a Identificar","Sem cliente",2088.69,1,"","","k"],["r","2026-03",5,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,1,"","","k"],["r","2026-03",5,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",280,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",280,1,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",210,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",210,1,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",2000,1,"","","k"],["r","2026-03",6,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",5000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",5000,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1177.62,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1740.96,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",1920.99,1,"","","k"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","c"],["r","2026-03",6,"Receitas de Serviços a Identificar","Sem cliente",3584.81,1,"","","k"],["r","2026-03",7,"Receita de Serviços - Plano Bronze","ROSANGELA GOMES RIBEIRO FIUZA",3367,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","ROSANGELA GOMES RIBEIRO FIUZA",3367,1,"","","k"],["r","2026-03",7,"ADICIONAL DE TIZERPATIDA","THAÍS DAMASCENA DE PAULO HONORATO",400,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","THAÍS DAMASCENA DE PAULO HONORATO",400,1,"","","k"],["r","2026-03",9,"Consulta","MARILZA DE AGUIAR DIAS",650,1,"","","c"],["r","2026-04",30,"Consulta","MARILZA DE AGUIAR DIAS",650,1,"","","k"],["r","2026-03",9,"Rendimentos de Aplicações","Sem cliente",0.23,1,"","","c"],["r","2026-03",9,"Rendimentos de Aplicações","Sem cliente",0.23,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",368.25,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3011.86,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3011.86,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",547.05,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",2117.6,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",2117.6,1,"","","k"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3018.1,1,"","","c"],["r","2026-03",9,"Receitas de Serviços a Identificar","Sem cliente",3018.1,1,"","","k"],["r","2026-03",9,"Suplementos","SAYONARIA LOPES EVANGELISTA",185,1,"","","c"],["r","2026-04",30,"Suplementos","SAYONARIA LOPES EVANGELISTA",185,1,"","","k"],["r","2026-03",10,"Consulta","NATALIA PEREIRA MARTINS SILVA",650,1,"","","c"],["r","2026-04",30,"Consulta","NATALIA PEREIRA MARTINS SILVA",650,1,"","","k"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",285,1,"","","c"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",285,1,"","","k"],["r","2026-03",10,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",975,1,"","","c"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",975,1,"","","k"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","c"],["r","2026-03",10,"Receitas de Serviços a Identificar","Sem cliente",503.43,1,"","","k"],["r","2026-03",10,"Suplementos","RODRIGO SOARES SIQUEIRA",60,1,"","","c"],["r","2026-04",30,"Suplementos","RODRIGO SOARES SIQUEIRA",60,1,"","","k"],["r","2026-03",10,"Consulta","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","c"],["r","2026-04",30,"Consulta","ANA LÚCIA COLOMBEKI SALDANHA",650,1,"","","k"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","c"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",388,1,"","","k"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","c"],["r","2026-03",11,"Receitas de Serviços a Identificar","Sem cliente",2966.88,1,"","","k"],["r","2026-03",12,"Suplementos","ISADORA DE VETE BOTELHO",75,1,"","","c"],["r","2026-04",30,"Suplementos","ISADORA DE VETE BOTELHO",75,1,"","","k"],["r","2026-03",12,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",4128,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",4128,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",5100,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","NOEME PEDROSA DE SOUZA SATURNINO",5100,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",448.64,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",2377.9,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",2377.9,1,"","","k"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","c"],["r","2026-03",12,"Receitas de Serviços a Identificar","Sem cliente",242.48,1,"","","k"],["r","2026-03",13,"Consulta","HIGLEST ALVES DE LA SALLE",650,1,"","","c"],["r","2026-04",30,"Consulta","HIGLEST ALVES DE LA SALLE",650,1,"","","k"],["r","2026-03",13,"Rendimentos de Aplicações","Sem cliente",1.25,1,"","","c"],["r","2026-03",13,"Rendimentos de Aplicações","Sem cliente",1.25,1,"","","k"],["r","2026-03",13,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",133.85,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",498.23,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",498.23,1,"","","k"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",2228.34,1,"","","c"],["r","2026-03",13,"Receitas de Serviços a Identificar","Sem cliente",2228.34,1,"","","k"],["r","2026-03",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","c"],["r","2026-03",16,"Rendimentos de Aplicações","Sem cliente",0.03,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",233.33,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",417.06,1,"","","k"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",3492.37,1,"","","c"],["r","2026-03",16,"Receitas de Serviços a Identificar","Sem cliente",3492.37,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",1500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",1500,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1700,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1700,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Plano Bronze","AMANTINO STEFANON",2700,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","AMANTINO STEFANON",2700,1,"","","k"],["r","2026-03",17,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3000,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3000,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",465.98,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",1220.43,1,"","","k"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","c"],["r","2026-03",17,"Receitas de Serviços a Identificar","Sem cliente",384.08,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",468,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",468,1,"","","k"],["r","2026-03",18,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",333,1,"","","c"],["r","2026-03",31,"Injetaveis","SOLANGE RODRIGUES DE SOUZA PIMENTA",333,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",135,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",135,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",350.28,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",350.28,1,"","","k"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",1608.47,1,"","","c"],["r","2026-03",18,"Receitas de Serviços a Identificar","Sem cliente",1608.47,1,"","","k"],["r","2026-03",19,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",75,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",1368.09,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",1368.09,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",5606.07,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",5606.07,1,"","","k"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",560.8,1,"","","c"],["r","2026-03",19,"Receitas de Serviços a Identificar","Sem cliente",560.8,1,"","","k"],["r","2026-03",20,"ADICIONAL DE TIZERPATIDA","WARLLEM FERREIRA COSTA",1540,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","WARLLEM FERREIRA COSTA",1540,1,"","","k"],["r","2026-03",20,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",75,1,"","","k"],["r","2026-03",20,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",2690,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",2690,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",355.72,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",355.72,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1037.67,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1037.67,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",926.4,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",966.57,1,"","","k"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1655.56,1,"","","c"],["r","2026-03",20,"Receitas de Serviços a Identificar","Sem cliente",1655.56,1,"","","k"],["r","2026-03",23,"Rendimentos de Aplicações","Sem cliente",0.39,1,"","","c"],["r","2026-03",23,"Rendimentos de Aplicações","Sem cliente",0.39,1,"","","k"],["r","2026-03",23,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",646.35,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",646.35,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",2543.25,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",2543.25,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",659.44,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",480.1,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",821.79,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",997.14,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",997.14,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",1410.77,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",1410.77,1,"","","k"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",3852.07,1,"","","c"],["r","2026-03",23,"Receitas de Serviços a Identificar","Sem cliente",3852.07,1,"","","k"],["r","2026-03",24,"Injetaveis","ELIZABETH DE REZENDE ALMEIDA",680,1,"","","c"],["r","2026-04",30,"Injetaveis","ELIZABETH DE REZENDE ALMEIDA",680,1,"","","k"],["r","2026-03",24,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","c"],["r","2026-03",24,"Rendimentos de Aplicações","Sem cliente",0.58,1,"","","k"],["r","2026-03",24,"Injetaveis","LIETE VOLPONI FORTUNA",75,1,"","","c"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",75,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",400,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",400,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","LINDAURA RODRIGUES BARBOSA ASSIS",650,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","LINDAURA RODRIGUES BARBOSA ASSIS",650,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",750,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",750,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",4782,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","TELMELITA SAAR ORECCHIO",4782,1,"","","k"],["r","2026-03",24,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",6910,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","HIGLEST ALVES DE LA SALLE",6910,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",3830.55,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",3830.55,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",1621.01,1,"","","k"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",2053.17,1,"","","c"],["r","2026-03",24,"Receitas de Serviços a Identificar","Sem cliente",2053.17,1,"","","k"],["r","2026-03",25,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",3500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","KEILA SOARES RODRIGUES MONTEIRO",3500,1,"","","k"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",443.04,1,"","","c"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",443.04,1,"","","k"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",1303.95,1,"","","c"],["r","2026-03",25,"Receitas de Serviços a Identificar","Sem cliente",1303.95,1,"","","k"],["r","2026-03",26,"Rendimentos de Aplicações","Sem cliente",0.14,1,"","","c"],["r","2026-03",26,"Rendimentos de Aplicações","Sem cliente",0.14,1,"","","k"],["r","2026-03",26,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",75,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",75,1,"","","k"],["r","2026-03",26,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","k"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","c"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",479.8,1,"","","k"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",654.92,1,"","","c"],["r","2026-03",26,"Receitas de Serviços a Identificar","Sem cliente",654.92,1,"","","k"],["r","2026-03",26,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,1,"","","k"],["r","2026-03",27,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","c"],["r","2026-03",27,"Rendimentos de Aplicações","Sem cliente",0.01,1,"","","k"],["r","2026-03",27,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","c"],["r","2026-03",27,"Receitas de Serviços a Identificar","Sem cliente",607.78,1,"","","k"],["r","2026-03",30,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ZILDA MARIA MAIA DE CARVALHO",5000,1,"","","k"],["r","2026-03",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",500,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",193.08,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",389.2,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",435.03,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",2243.92,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",2243.92,1,"","","k"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",3914.61,1,"","","c"],["r","2026-03",30,"Receitas de Serviços a Identificar","Sem cliente",3914.61,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",840,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",840,1,"","","k"],["r","2026-03",31,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","c"],["r","2026-03",31,"Receitas de Serviços a Identificar","SHEILA MARIA NEGRI PONTES",3696,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",4274,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",4274,1,"","","k"],["r","2026-03",31,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","c"],["r","2026-03",31,"Receitas de Serviços a Identificar","Sem cliente",581.94,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","IRINEIA SOUZA PEREIRA SAAR",9680.17,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","IRINEIA SOUZA PEREIRA SAAR",9680.17,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",1200,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","DORIETE DE SOUZA",1200,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SAYONARIA LOPES EVANGELISTA",8045,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SAYONARIA LOPES EVANGELISTA",8045,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",9342,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",9342,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ÉRICA RODRIGUES LIMA BOECHAT",9050,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ÉRICA RODRIGUES LIMA BOECHAT",9050,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",12450,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MERIELY RUFINO VAZ MUTZ",12450,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",6403,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ROSIANE ALMEIDA COSTA BELING",6403,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",6920,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","MAYKE CORREIA DE SOUZA",6920,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",14955,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","LETICIA BATISTA DE MORAES",14955,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",3362,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ADELSON ANDRE BAECE STREY",3362,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",11199,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","VALDETE APARECIDA FERREIRA HERMISDOLFE",11199,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",7600.87,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ELIEZER MOURA DE ASSIS",7600.87,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",9264,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","SALETTE DE ALMEIDA SANTANA",9264,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA LEUZINA DE AGUIAR DIAS",185,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NEILA MARIA DE REZENDE SILVA",4697.61,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","NEILA MARIA DE REZENDE SILVA",4697.61,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JULIMAR MARTINS FANTI",8200,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JULIMAR MARTINS FANTI",8200,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TAIANE STREY VERONEZE ANDRE",12228,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TAIANE STREY VERONEZE ANDRE",12228,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",6014.17,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",6014.17,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Platina","LEILA DA SILVA DE SOUZA COELHO",6351.4,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Platina","LEILA DA SILVA DE SOUZA COELHO",6351.4,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ADRIANA MOSCONI PAGANI",4800,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ADRIANA MOSCONI PAGANI",4800,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FÁBIA INACIO DE SOUZA BLESSON",5733.17,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FÁBIA INACIO DE SOUZA BLESSON",5733.17,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALAETI BRISQUE POEYS",4133.17,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALAETI BRISQUE POEYS",4133.17,1,"","","k"],["r","2026-03",31,"Injetaveis","HAYANE SILVA VALARDAO",2500,1,"","","c"],["r","2026-03",31,"Injetaveis","HAYANE SILVA VALARDAO",2500,1,"","","k"],["r","2026-03",31,"Implantes","THAIZ LIMA ROCHA DA SILVA",4630,1,"","","c"],["r","2026-03",31,"Implantes","THAIZ LIMA ROCHA DA SILVA",4630,1,"","","k"],["r","2026-03",31,"Injetaveis","ANTONIO PEREIRA DE ARAUJO",1170,1,"","","c"],["r","2026-03",31,"Injetaveis","ANTONIO PEREIRA DE ARAUJO",1170,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",10632,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","JOERLAINE DA SILVA OLIVEIRA ELIZEU",10632,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",12750,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","ALEX MARCHIOLI STEFANON",12750,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",13360,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","EDILAINE MARCIA MARCIANO DE SOUZA",13360,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA CRISTINA VIEIRA TEODORO",6842.7,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARIA CRISTINA VIEIRA TEODORO",6842.7,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",16050,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","ALANA CAROLINA ELIZEU CERQUEIRA DE CASTRO",16050,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",3625,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","FERNANDA RAQUEL TEIXEIRA CHIPOLESC",3625,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LAUDENICIA ALVES DE OLIVEIRA ZAROWNY",900,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LEIDIANA FERREIRA RODRIGUES",2300,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","LEIDIANA FERREIRA RODRIGUES",2300,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","WARLLEM FERREIRA COSTA",6040,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","WARLLEM FERREIRA COSTA",6040,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",12493.99,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","LETICIA RENATA RODRIGUES SOUZA PIONTI",12493.99,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","RODRIGO SOARES SIQUEIRA",5980,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","RODRIGO SOARES SIQUEIRA",5980,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","CARLA GESIANE CARLASARTE DE SOUZA VIAL",7243.44,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","CARLA GESIANE CARLASARTE DE SOUZA VIAL",7243.44,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","THAÍS DAMASCENA DE PAULO HONORATO",3400,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","THAÍS DAMASCENA DE PAULO HONORATO",3400,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",2100,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","EVERALDO DE SOUZA VELTEN SANTIAGO",2100,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",4800,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","STEPHANIE SOLE BARABANI",4800,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","SEBASTIÃO SATURINO FILHO",6500,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","SEBASTIÃO SATURINO FILHO",6500,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",4922,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","BETANIA KINACIA DE SOUZA SATURNINO",4922,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3436,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Protocolo Body Reset","ANA LÚCIA COLOMBEKI SALDANHA",3436,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",1710.11,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Alquimia Ouro","TELMA DOMINGOS DA SILVA",1710.11,1,"","","k"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",1400,1,"","","c"],["r","2026-03",31,"Injetaveis","ITELVINA FERNANDA DE OLIVEIRA VERLY",1400,1,"","","k"],["r","2026-03",31,"Injetaveis","LUDIMILA MATIAS CARDOSO PAGANI",468,1,"","","c"],["r","2026-03",31,"Injetaveis","LUDIMILA MATIAS CARDOSO PAGANI",468,1,"","","k"],["r","2026-03",31,"Injetaveis","MARIA ALICE RODRIGUES DE JESUS",2570,1,"","","c"],["r","2026-03",31,"Injetaveis","MARIA ALICE RODRIGUES DE JESUS",2570,1,"","","k"],["r","2026-03",31,"Injetaveis","KAMILA QUADRAS CASTILHO",1050,1,"","","c"],["r","2026-03",31,"Injetaveis","KAMILA QUADRAS CASTILHO",1050,1,"","","k"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",500,1,"","","c"],["r","2026-03",31,"Injetaveis","MAGDA CRISTINA ANGELO DE OLIVEIRA",500,1,"","","k"],["r","2026-03",31,"Injetaveis","RAFAEL CARDOSO DE SOUZA",500,1,"","","c"],["r","2026-03",31,"Injetaveis","RAFAEL CARDOSO DE SOUZA",500,1,"","","k"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",1125,1,"","","c"],["r","2026-03",31,"Injetaveis","LIETE VOLPONI FORTUNA",1125,1,"","","k"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",4965,1,"","","c"],["r","2026-03",31,"Injetaveis","LEDIANA NEIVA ANACLETO OLIVEIRA",4965,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ESTER DE ALMEIDA SANTANA",3900,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ESTER DE ALMEIDA SANTANA",3900,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",3578,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Diamante","FABRÍCIO RODRIGUES LINHARES",3578,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",4246,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARLY MARIA ANDRADE DE LAIA",4246,1,"","","k"],["r","2026-03",31,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",2300,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","ANA PAULA COELHO PORTES MATTOS",2300,1,"","","k"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","c"],["r","2026-04",1,"Receitas de Serviços a Identificar","Sem cliente",145.65,1,"","","k"],["r","2026-04",1,"Implantes","Tomadores Diversos",3900,1,"","","c"],["r","2026-04",1,"Implantes","Tomadores Diversos",3900,1,"","","k"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2935.4,1,"","","c"],["r","2026-04",6,"Receitas de Serviços a Identificar","Sem cliente",2935.4,1,"","","k"],["r","2026-04",7,"Suplementos","ROSIANE ALMEIDA COSTA BELING",75,1,"","","c"],["r","2026-04",30,"Suplementos","ROSIANE ALMEIDA COSTA BELING",75,1,"","","k"],["r","2026-04",10,"Suplementos","DORIETE DE SOUZA",75,1,"","","c"],["r","2026-04",30,"Suplementos","DORIETE DE SOUZA",75,1,"","","k"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","c"],["r","2026-04",13,"Receitas de Serviços a Identificar","Sem cliente",582.6,1,"","","k"],["r","2026-04",14,"Suplementos","MARLY MARIA ANDRADE DE LAIA",75,1,"","","c"],["r","2026-04",30,"Suplementos","MARLY MARIA ANDRADE DE LAIA",75,1,"","","k"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","c"],["r","2026-04",15,"Receitas de Serviços a Identificar","Sem cliente",251.21,1,"","","k"],["r","2026-04",15,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",350,1,"","","c"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",350,1,"","","k"],["r","2026-04",16,"Suplementos","MONICA DE OLIVEIRA SILVA FERNANDES",700,1,"","","c"],["r","2026-04",30,"Suplementos","MONICA DE OLIVEIRA SILVA FERNANDES",700,1,"","","k"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","c"],["r","2026-04",20,"Receitas de Serviços a Identificar","Sem cliente",2087.1,1,"","","k"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","c"],["r","2026-04",22,"Receitas de Serviços a Identificar","Sem cliente",456.14,1,"","","k"],["r","2026-04",22,"Consulta","MARIA DAS GRAÇAS NEVES CALIARI",650,1,"","","c"],["r","2026-04",30,"Consulta","MARIA DAS GRAÇAS NEVES CALIARI",650,1,"","","k"],["r","2026-04",25,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,1,"","","k"],["r","2026-04",27,"Receita de Serviços - Plano Bronze","FERNANDA APARECIDA DE ALMEIDA",2975,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","FERNANDA APARECIDA DE ALMEIDA",2975,1,"","","k"],["r","2026-04",28,"Suplementos","ANA LÚCIA COLOMBEKI SALDANHA",185,1,"","","c"],["r","2026-04",30,"Suplementos","ANA LÚCIA COLOMBEKI SALDANHA",185,1,"","","k"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",3289.56,1,"","","c"],["r","2026-04",29,"Receitas de Serviços a Identificar","Sem cliente",3289.56,1,"","","k"],["r","2026-04",29,"Injetaveis","LAUDIANA DANIEL TEIXEIRA FREITAS",390,1,"","","c"],["r","2026-04",30,"Injetaveis","LAUDIANA DANIEL TEIXEIRA FREITAS",390,1,"","","k"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",75,1,"","","c"],["r","2026-04",30,"Suplementos","BRISA DANIELLE FURTADO CARDOSO",75,1,"","","k"],["r","2026-04",30,"Suplementos","TAIANE STREY VERONEZE ANDRE",75,1,"","","c"],["r","2026-04",30,"Suplementos","TAIANE STREY VERONEZE ANDRE",75,1,"","","k"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","JULIMAR MARTINS FANTI",1200,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","JULIMAR MARTINS FANTI",1200,1,"","","k"],["r","2026-04",30,"Consulta","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","c"],["r","2026-04",30,"Consulta","FLAVYANNE PAULO MORETT AGUIAR",500,1,"","","k"],["r","2026-04",30,"Consulta","IRINEIA SOUZA PEREIRA SAAR",500,1,"","","c"],["r","2026-04",30,"Consulta","IRINEIA SOUZA PEREIRA SAAR",500,1,"","","k"],["r","2026-04",30,"Consulta","REINALDO ERMELINDO DE ARAUJO",500,1,"","","c"],["r","2026-04",30,"Consulta","REINALDO ERMELINDO DE ARAUJO",500,1,"","","k"],["r","2026-04",30,"Consulta","MARLY MARIA ANDRADE DE LAIA",500,1,"","","c"],["r","2026-04",30,"Consulta","MARLY MARIA ANDRADE DE LAIA",500,1,"","","k"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",377,1,"","","c"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",377,1,"","","k"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",50,1,"","","c"],["r","2026-04",30,"Suplementos","NEUZA FERNANDES MARTINS",50,1,"","","k"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,1,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,1,"","","k"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,1,"","","c"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,1,"","","k"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ÉRICA RODRIGUES LIMA BOECHAT",3068,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ÉRICA RODRIGUES LIMA BOECHAT",3068,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","NAIR DA SILVA LOPES",7000,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","NAIR DA SILVA LOPES",7000,1,"","","k"],["r","2026-04",30,"Teste Nutrigenetico","ZILDA MARIA MAIA DE CARVALHO",3900,1,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","ZILDA MARIA MAIA DE CARVALHO",3900,1,"","","k"],["r","2026-04",30,"Injetaveis","MARIA LEUZINA DE AGUIAR DIAS",390,1,"","","c"],["r","2026-04",30,"Injetaveis","MARIA LEUZINA DE AGUIAR DIAS",390,1,"","","k"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","DORIETE DE SOUZA",1872,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","DORIETE DE SOUZA",1872,1,"","","k"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ORLANDA ALVES SALVADOR",200,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ORLANDA ALVES SALVADOR",200,1,"","","k"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,1,"","","k"],["r","2026-04",30,"Injetaveis","RAFAEL CARDOSO DE SOUZA",490,1,"","","c"],["r","2026-04",30,"Injetaveis","RAFAEL CARDOSO DE SOUZA",490,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",3100,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","DELMA LUCIA MENDES DA CUNHA",3100,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",8520,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ISABELA CRISTINA FANTI",8520,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",6050,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","ANTONIO PEREIRA DE ARAUJO",6050,1,"","","k"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ADELSON ANDRE BAECE STREY",1200,1,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ADELSON ANDRE BAECE STREY",1200,1,"","","k"],["r","2026-04",30,"Injetaveis","MAYARA RIBEIRO SIMOES FORTUNA",1500,1,"","","c"],["r","2026-04",30,"Injetaveis","MAYARA RIBEIRO SIMOES FORTUNA",1500,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","MONICA DE OLIVEIRA SILVA FERNANDES",19750,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","MONICA DE OLIVEIRA SILVA FERNANDES",19750,1,"","","k"],["r","2026-04",30,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",7620.66,1,"","","c"],["r","2026-03",31,"Receita de Serviços - Plano Prata","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",7620.66,1,"","","k"],["r","2026-05",4,"Suplementos","ORLANDA ALVES SALVADOR",76,1,"","","c"],["r","2026-05",4,"Suplementos","ORLANDA ALVES SALVADOR",76,1,"","","k"],["r","2026-05",4,"Suplementos","DORLI MARTINS DA SILVA",550,1,"","","c"],["r","2026-05",4,"Suplementos","DORLI MARTINS DA SILVA",550,1,"","","k"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",200,1,"","","c"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",200,1,"","","k"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",10,1,"","","c"],["r","2026-05",4,"Suplementos","HIGLEST ALVES DE LA SALLE",10,1,"","","k"],["r","2026-05",4,"ADICIONAL DE TIZERPATIDA","TAIANE STREY VERONEZE ANDRE",300,1,"","","c"],["r","2026-05",4,"ADICIONAL DE TIZERPATIDA","TAIANE STREY VERONEZE ANDRE",300,1,"","","k"],["r","2026-05",5,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,1,"","","k"],["r","2026-05",5,"Suplementos","VALDETE APARECIDA FERREIRA HERMISDOLFE",135,1,"","","c"],["r","2026-05",4,"Suplementos","VALDETE APARECIDA FERREIRA HERMISDOLFE",135,1,"","","k"],["r","2026-05",5,"Suplementos","MERIELY RUFINO VAZ MUTZ",135,1,"","","c"],["r","2026-05",5,"Suplementos","MERIELY RUFINO VAZ MUTZ",135,1,"","","k"],["r","2026-05",6,"ADICIONAL DE TIZERPATIDA","MARILZA DE AGUIAR DIAS",1404,1,"","","c"],["r","2026-05",6,"ADICIONAL DE TIZERPATIDA","MARILZA DE AGUIAR DIAS",1404,1,"","","k"],["r","2026-05",6,"Suplementos","MARIA DA PENHA MOURA ROSA",75,1,"","","c"],["r","2026-05",6,"Suplementos","MARIA DA PENHA MOURA ROSA",75,1,"","","k"],["r","2026-05",6,"Suplementos","ESTER DE ALMEIDA SANTANA",185,1,"","","c"],["r","2026-05",6,"Suplementos","ESTER DE ALMEIDA SANTANA",185,1,"","","k"],["r","2026-05",6,"Consulta","Cristina Siqueira Bragança",650,1,"","","c"],["r","2026-05",6,"Consulta","Cristina Siqueira Bragança",650,1,"","","k"],["r","2026-05",7,"Suplementos","MAULY MARTINS DA SILVA",185,1,"","","c"],["r","2026-05",7,"Suplementos","MAULY MARTINS DA SILVA",185,1,"","","k"],["r","2026-05",8,"Suplementos","JADER JESUS SILVA",75,1,"","","c"],["r","2026-05",8,"Suplementos","JADER JESUS SILVA",75,1,"","","k"],["r","2026-05",11,"Suplementos","MARIA DAS GRAÇAS NEVES CALIARI",210,1,"","","c"],["r","2026-05",11,"Suplementos","MARIA DAS GRAÇAS NEVES CALIARI",210,1,"","","k"],["r","2026-05",11,"Consulta","MARIA DAS GRAÇAS RODRIGUES COELHO",500,1,"","","c"],["r","2026-05",11,"Consulta","MARIA DAS GRAÇAS RODRIGUES COELHO",500,1,"","","k"],["r","2026-05",11,"Consulta","Lúcia Sodré Moreira",650,1,"","","c"],["r","2026-05",11,"Consulta","Lúcia Sodré Moreira",650,1,"","","k"],["r","2026-05",13,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","c"],["r","2026-05",13,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",75,1,"","","k"],["r","2026-05",13,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","c"],["r","2026-05",13,"Suplementos","ÉRICA RODRIGUES LIMA BOECHAT",75,1,"","","k"],["r","2026-05",13,"Suplementos","ANDREA RODRIGUES FERNANDES",50,1,"","","c"],["r","2026-05",13,"Suplementos","ANDREA RODRIGUES FERNANDES",50,1,"","","k"],["r","2026-05",18,"Suplementos","DORLI MARTINS DA SILVA",75,1,"","","c"],["r","2026-05",18,"Suplementos","DORLI MARTINS DA SILVA",75,1,"","","k"],["r","2026-05",25,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,1,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,1,"","","k"],["r","2026-05",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","k"],["r","2026-05",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,0,"","","c"],["r","2026-04",30,"Suplementos","MAYKE CORREIA DE SOUZA",197.5,0,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-05",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-05",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-05",30,"ADICIONAL DE TIZERPATIDA","ORLANDA ALVES SALVADOR",200,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ORLANDA ALVES SALVADOR",200,0,"","","k"],["r","2026-05",30,"ADICIONAL DE TIZERPATIDA","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.67,0,"","","k"],["r","2026-05",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-05",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","k"],["r","2026-05",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-05",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-06",5,"ADICIONAL DE TIZERPATIDA","MARILZA DE AGUIAR DIAS",1404,0,"","","c"],["r","2026-05",6,"ADICIONAL DE TIZERPATIDA","MARILZA DE AGUIAR DIAS",1404,0,"","","k"],["r","2026-06",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-06",24,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-06",29,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-06",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","c"],["r","2026-04",30,"Suplementos","ZILDA MARIA MAIA DE CARVALHO",140,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-06",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-06",30,"ADICIONAL DE TIZERPATIDA","ORLANDA ALVES SALVADOR",200,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","ORLANDA ALVES SALVADOR",200,0,"","","k"],["r","2026-06",30,"ADICIONAL DE TIZERPATIDA","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.66,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","VALDETE APARECIDA FERREIRA HERMISDOLFE",518.66,0,"","","k"],["r","2026-06",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-06",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","k"],["r","2026-06",30,"ADICIONAL DE TIZERPATIDA","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","k"],["r","2026-06",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-06",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-07",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-07",24,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-07",29,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-07",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-07",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-07",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","c"],["r","2026-04",30,"Implantes","LETICIA RENATA RODRIGUES SOUZA PIONTI",300,0,"","","k"],["r","2026-07",30,"ADICIONAL DE TIZERPATIDA","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","THAÍS DAMASCENA DE PAULO HONORATO",400,0,"","","k"],["r","2026-07",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-07",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-08",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-08",23,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-08",28,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.67,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-08",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-08",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","c"],["r","2026-04",30,"Injetaveis","JADER JESUS SILVA",708.75,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","TALITA FABIELLE PEREIRA DA SILVA BITTENCOURT",1460,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-08",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","c"],["r","2026-04",30,"Teste Nutrigenetico","EDILAINE MARCIA MARCIANO DE SOUZA",975,0,"","","k"],["r","2026-08",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-09",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-09",22,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-09",27,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.65,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Diamante","BETANIA KINACIA DE SOUZA SATURNINO",2164.65,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-09",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","c"],["r","2026-04",30,"ADICIONAL DE TIZERPATIDA","JOERLAINE DA SILVA OLIVEIRA ELIZEU",508,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-09",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-10",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.67,0,"","","k"],["r","2026-10",22,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","NAZARETH ALVES DE ARAÚJO",625,0,"","","k"],["r","2026-10",27,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-10",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-11",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.65,0,"","","c"],["r","2026-05",6,"Implantes","ESTER DE ALMEIDA SANTANA",666.65,0,"","","k"],["r","2026-11",26,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARILZA DE AGUIAR DIAS",1581.25,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-11",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2026-12",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Protocolo Body Reset","NATALIA PEREIRA MARTINS SILVA",397,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SIRLENE KISTER PELANDA",305,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2027-01",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Bronze","SOLANGE RODRIGUES DE SOUZA PIMENTA",517.2,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","ANA LÚCIA COLOMBEKI SALDANHA",1262.2,0,"","","k"],["r","2027-02",28,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","c"],["r","2026-04",30,"Receita de Serviços - Plano Prata","MARIA DA PENHA MOURA ROSA",1593.8,0,"","","k"],["d","2026-01",2,"Despesas Diversas (Cartão)","",2295.41,1,"Sem cliente","","c"],["d","2026-01",2,"Despesas Diversas (Cartão)","",2295.41,1,"Sem cliente","","k"],["d","2026-01",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-01",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-01",5,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-01",5,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-01",5,"Lanches e Refeições","",25,1,"Sem cliente","","c"],["d","2026-01",5,"Lanches e Refeições","",25,1,"Sem cliente","","k"],["d","2026-01",5,"Serviços de Pessoa Jurídica","",2067,1,"PARCELAMOS TUDO PONTOCOM","","c"],["d","2026-01",5,"Serviços de Pessoa Jurídica","",2067,1,"PARCELAMOS TUDO PONTOCOM","","k"],["d","2026-01",7,"Telefonia Móvel","",35,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",7,"Telefonia Móvel","",35,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",7,"Honorários Contábeis","",190,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",7,"Honorários Contábeis","",190,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",7,"Despesas a identificar","",825,1,"Sem cliente","","c"],["d","2026-01",7,"Despesas a identificar","",825,1,"Sem cliente","","k"],["d","2026-01",7,"Despesas a identificar","",750,1,"Sem cliente","","c"],["d","2026-01",7,"Despesas a identificar","",750,1,"Sem cliente","","k"],["d","2026-01",7,"Despesas a identificar","",5345.21,1,"Sem cliente","","c"],["d","2026-01",7,"Despesas a identificar","",5345.21,1,"Sem cliente","","k"],["d","2026-01",9,"Coleta de Resíduos Ambientais","",144,1,"Sem cliente","","c"],["d","2026-01",9,"Coleta de Resíduos Ambientais","",144,1,"Sem cliente","","k"],["d","2026-01",9,"Telefonia e Internet","",114.9,1,"Sem cliente","","c"],["d","2026-01",9,"Telefonia e Internet","",114.9,1,"Sem cliente","","k"],["d","2026-01",9,"Telefonia e Internet","",99.9,1,"Sem cliente","","c"],["d","2026-01",9,"Telefonia e Internet","",99.9,1,"Sem cliente","","k"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-01",12,"Honorários Contábeis","",1085,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-01",12,"Materiais de Limpeza e de Higiene","",480,1,"BARUC DETETIZACAO","","c"],["d","2026-01",12,"Materiais de Limpeza e de Higiene","",480,1,"BARUC DETETIZACAO","","k"],["d","2026-01",12,"Despesas a identificar","",50,1,"Sem cliente","","c"],["d","2026-01",12,"Despesas a identificar","",50,1,"Sem cliente","","k"],["d","2026-01",12,"Serviços de Pessoa Jurídica","",650,1,"Sem cliente","","c"],["d","2026-01",12,"Serviços de Pessoa Jurídica","",650,1,"Sem cliente","","k"],["d","2026-01",12,"Despesas a identificar","",720,1,"Sem cliente","","c"],["d","2026-01",12,"Despesas a identificar","",720,1,"Sem cliente","","k"],["d","2026-01",12,"ISS","",30629.31,1,"Sem cliente","","c"],["d","2026-01",12,"ISS","",30629.31,1,"Sem cliente","","k"],["d","2026-01",13,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-01",13,"Telefonia e Internet","",22.92,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-01",14,"Materiais Aplicados na Prestação de Serviços","",7500,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-01",14,"Materiais Aplicados na Prestação de Serviços","",7500,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-01",14,"Despesas a identificar","",79,1,"Sem cliente","","c"],["d","2026-01",14,"Despesas a identificar","",79,1,"Sem cliente","","k"],["d","2026-01",15,"Energia Elétrica","",680.71,1,"EDP ESPIRITO SANTO","","c"],["d","2026-01",15,"Energia Elétrica","",680.71,1,"EDP ESPIRITO SANTO","","k"],["d","2026-01",16,"Despesas a identificar","",880,1,"Sem cliente","","c"],["d","2026-01",16,"Despesas a identificar","",880,1,"Sem cliente","","k"],["d","2026-01",19,"Despesas a identificar","",315,1,"Sem cliente","","c"],["d","2026-01",19,"Despesas a identificar","",315,1,"Sem cliente","","k"],["d","2026-01",19,"Materiais de Escritório","",53,1,"DANILO DE SOUSA ANDRADE 09175677733","","c"],["d","2026-01",19,"Materiais de Escritório","",53,1,"DANILO DE SOUSA ANDRADE 09175677733","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",671.75,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",671.75,1,"Sem cliente","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",517.92,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",517.92,1,"Sem cliente","","k"],["d","2026-01",20,"FGTS e Multa de FGTS","",86.31,1,"Sem cliente","","c"],["d","2026-01",20,"FGTS e Multa de FGTS","",86.31,1,"Sem cliente","","k"],["d","2026-01",20,"INSS sobre Salários - GPS","",2953.74,1,"Sem cliente","","c"],["d","2026-01",20,"INSS sobre Salários - GPS","",2953.74,1,"Sem cliente","","k"],["d","2026-01",22,"Despesas a identificar","",200,1,"Sem cliente","","c"],["d","2026-01",22,"Despesas a identificar","",200,1,"Sem cliente","","k"],["d","2026-01",22,"Materiais de Escritório","",53.7,1,"Sem cliente","","c"],["d","2026-01",22,"Materiais de Escritório","",53.7,1,"Sem cliente","","k"],["d","2026-01",22,"Materiais de Escritório","",21.9,1,"Sem cliente","","c"],["d","2026-01",22,"Materiais de Escritório","",21.9,1,"Sem cliente","","k"],["d","2026-01",22,"Lanches e Refeições","",20,1,"Sem cliente","","c"],["d","2026-01",22,"Lanches e Refeições","",20,1,"Sem cliente","","k"],["d","2026-01",22,"Pis/Cofins","",27949.26,1,"Sem cliente","","c"],["d","2026-01",22,"Pis/Cofins","",27949.26,1,"Sem cliente","","k"],["d","2026-01",22,"INSS sobre Salários - GPS","",4057.82,1,"Sem cliente","","c"],["d","2026-01",22,"INSS sobre Salários - GPS","",4057.82,1,"Sem cliente","","k"],["d","2026-01",26,"IRPJ E CSLL","",42976.93,1,"Sem cliente","","c"],["d","2026-01",26,"IRPJ E CSLL","",42976.93,1,"Sem cliente","","k"],["d","2026-01",26,"Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-01",26,"Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-01",27,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-01",27,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-01",29,"Telefonia e Internet","",35.88,1,"Sem cliente","","c"],["d","2026-01",29,"Telefonia e Internet","",35.88,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",3626.71,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",3626.71,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",2660,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",2660,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",2299.32,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",2299.32,1,"Sem cliente","","k"],["d","2026-02",2,"Despesas Diversas (Cartão)","",1892.78,1,"Sem cliente","","c"],["d","2026-02",2,"Despesas Diversas (Cartão)","",1892.78,1,"Sem cliente","","k"],["d","2026-02",2,"Salários","",6345.59,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",6345.59,1,"Sem cliente","","k"],["d","2026-02",2,"Materiais Aplicados na Prestação de Serviços","",1060.64,1,"HEALTH TECH FARMACIA DE MANIPULACAO LTDA","","c"],["d","2026-02",2,"Materiais Aplicados na Prestação de Serviços","",1060.64,1,"HEALTH TECH FARMACIA DE MANIPULACAO LTDA","","k"],["d","2026-02",2,"Salários","",1280,1,"Sem cliente","","c"],["d","2026-02",2,"Salários","",1280,1,"Sem cliente","","k"],["d","2026-02",2,"Despesas a identificar","",171,1,"Sem cliente","","c"],["d","2026-02",2,"Despesas a identificar","",171,1,"Sem cliente","","k"],["d","2026-02",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-02",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-02",3,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-02",3,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-02",4,"Compra","",902.25,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-02",4,"Compra","",902.25,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-02",5,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-02",5,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-02",5,"Software / Licença de Uso","",650,1,"Sem cliente","","c"],["d","2026-02",5,"Software / Licença de Uso","",650,1,"Sem cliente","","k"],["d","2026-02",5,"Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","c"],["d","2026-02",5,"Cursos e Treinamentos","",330.75,1,"SEGEX UVV ON","","k"],["d","2026-02",5,"INSS sobre Salários - GPS","",2955.54,1,"Sem cliente","","c"],["d","2026-02",5,"INSS sobre Salários - GPS","",2955.54,1,"Sem cliente","","k"],["d","2026-02",5,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","c"],["d","2026-02",5,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","k"],["d","2026-02",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-02",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-02",9,"ISS","",2040,1,"Sem cliente","","c"],["d","2026-02",9,"ISS","",2040,1,"Sem cliente","","k"],["d","2026-02",9,"Despesas a identificar","",20606.83,1,"Sem cliente","","c"],["d","2026-02",9,"Despesas a identificar","",20606.83,1,"Sem cliente","","k"],["d","2026-02",10,"ISS","",206.07,1,"Sem cliente","","c"],["d","2026-02",10,"ISS","",206.07,1,"Sem cliente","","k"],["d","2026-02",11,"Compra","",7140,1,"ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA","","c"],["d","2026-02",11,"Compra","",7140,1,"ELMECO SERVICOS FARMACEUTICOS E TREINAMENTO PROFISSIONAL LTDA","","k"],["d","2026-02",12,"Materiais de Escritório","",5,1,"REIS & SOUZA LIMITADA","","c"],["d","2026-02",12,"Materiais de Escritório","",5,1,"REIS & SOUZA LIMITADA","","k"],["d","2026-02",13,"Telefonia e Internet","",117.3,1,"BIZZ INTERNET LTDA","","c"],["d","2026-02",13,"Telefonia e Internet","",117.3,1,"BIZZ INTERNET LTDA","","k"],["d","2026-02",13,"Compra","",140.64,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-02",10,"Compra","",140.64,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-02",13,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-02",13,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-02",18,"Energia Elétrica","",735.14,1,"EDP ESPIRITO SANTO","","c"],["d","2026-02",18,"Energia Elétrica","",735.14,1,"EDP ESPIRITO SANTO","","k"],["d","2026-02",18,"Marketing e Publicidade","",1500,1,"Sem cliente","","c"],["d","2026-02",18,"Marketing e Publicidade","",1500,1,"Sem cliente","","k"],["d","2026-02",19,"Compra","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-02",19,"Compra","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-02",19,"Telefonia Móvel","",36.74,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-02",19,"Telefonia Móvel","",36.74,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-02",20,"Compra","",917.64,1,"CONTAAZUL SOFTWARE LTDA","","c"],["d","2026-02",20,"Compra","",917.64,1,"CONTAAZUL SOFTWARE LTDA","","k"],["d","2026-02",23,"Software / Licença de Uso","",601.25,1,"BIONEXO S.A","","c"],["d","2026-02",23,"Software / Licença de Uso","",601.25,1,"BIONEXO S.A","","k"],["d","2026-02",23,"Despesas a identificar","",2150,1,"Sem cliente","","c"],["d","2026-02",23,"Despesas a identificar","",2150,1,"Sem cliente","","k"],["d","2026-02",26,"Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-02",26,"Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-02",26,"Compra","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-02",26,"Compra","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-02",28,"Compra","",599.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-02",28,"Compra","",599.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-03",2,"Despesas Diversas (Cartão)","",1069.96,1,"Sem cliente","","c"],["d","2026-03",2,"Despesas Diversas (Cartão)","",1069.96,1,"Sem cliente","","k"],["d","2026-03",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-03",2,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-03",3,"Antecipação de Lucros","",20000,1,"Sem cliente","","c"],["d","2026-03",3,"Antecipação de Lucros","",20000,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",4604.02,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",4604.02,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",4400,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",4400,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",3781.71,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",3781.71,1,"Sem cliente","","k"],["d","2026-03",3,"Salários","",2299.32,1,"Sem cliente","","c"],["d","2026-03",3,"Salários","",2299.32,1,"Sem cliente","","k"],["d","2026-03",3,"Telefonia e Internet","",44.89,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",3,"Telefonia e Internet","",44.89,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",3,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",3,"Telefonia e Internet","",43,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",3,"Serviços de Pessoa Jurídica","",980,1,"Sem cliente","","c"],["d","2026-03",3,"Serviços de Pessoa Jurídica","",980,1,"Sem cliente","","k"],["d","2026-03",3,"Compra","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-02",27,"Compra","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-03",4,"Compra","",100,1,"EXTINSAN EXTINTORES LTDA","","c"],["d","2026-03",2,"Compra","",100,1,"EXTINSAN EXTINTORES LTDA","","k"],["d","2026-03",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-03",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-03",4,"Salários","",1500,1,"Sem cliente","","c"],["d","2026-03",4,"Salários","",1500,1,"Sem cliente","","k"],["d","2026-03",4,"Coleta de Resíduos Ambientais","",125.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-03",4,"Coleta de Resíduos Ambientais","",125.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-03",4,"Seguros","",61.29,1,"PORTO SEGURO COMPANHIA DE SEGUROS GERAIS","","c"],["d","2026-03",4,"Seguros","",61.29,1,"PORTO SEGURO COMPANHIA DE SEGUROS GERAIS","","k"],["d","2026-03",4,"Compra","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-03",26,"Compra","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-03",5,"Plano de Saúde Colaboradores","",499.09,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-03",5,"Plano de Saúde Colaboradores","",499.09,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-03",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-03",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",6,"Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","c"],["d","2026-03",6,"Cursos e Treinamentos","",449.96,1,"SEGEX UVV ON","","k"],["d","2026-03",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-03",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-03",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-03",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-03",9,"Compra","",6116.25,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-03",12,"Compra","",6116.25,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-03",10,"Despesas Diversas (Cartão)","",11039.45,1,"Sem cliente","","c"],["d","2026-03",10,"Despesas Diversas (Cartão)","",11039.45,1,"Sem cliente","","k"],["d","2026-03",10,"ISS","",5.22,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-02",10,"ISS","",5.22,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-03",11,"Compra","",14300.04,1,"TOKARSKI COMERCIO INDUSTRIA LTDA","","c"],["d","2026-03",11,"Compra","",14300.04,1,"TOKARSKI COMERCIO INDUSTRIA LTDA","","k"],["d","2026-03",11,"Compra","",126.72,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-03",11,"Compra","",126.72,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-03",12,"Materiais de Escritório","",98,1,"REIS & SOUZA LIMITADA","","c"],["d","2026-03",12,"Materiais de Escritório","",98,1,"REIS & SOUZA LIMITADA","","k"],["d","2026-03",12,"Compra","",18528.75,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-03",12,"Compra","",18528.75,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-03",13,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","c"],["d","2026-03",13,"FGTS e Multa de FGTS","",519.57,1,"Sem cliente","","k"],["d","2026-03",13,"INSS sobre Salários - GPS","",2876.6,1,"Sem cliente","","c"],["d","2026-03",13,"INSS sobre Salários - GPS","",2876.6,1,"Sem cliente","","k"],["d","2026-03",13,"Pis/Cofins","",199.83,1,"Sem cliente","","c"],["d","2026-03",13,"Pis/Cofins","",199.83,1,"Sem cliente","","k"],["d","2026-03",13,"Despesas Diversas (Cartão)","",582.6,1,"Sem cliente","","c"],["d","2026-03",13,"Despesas Diversas (Cartão)","",582.6,1,"Sem cliente","","k"],["d","2026-03",13,"Despesas Diversas (Cartão)","",10192.32,1,"Sem cliente","","c"],["d","2026-03",13,"Despesas Diversas (Cartão)","",10192.32,1,"Sem cliente","","k"],["d","2026-03",15,"Antecipação de Lucros","",9000.4,1,"Sem cliente","","c"],["d","2026-03",15,"Antecipação de Lucros","",9000.4,1,"Sem cliente","","k"],["d","2026-03",16,"Despesas a identificar","",240,1,"Sem cliente","","c"],["d","2026-03",16,"Despesas a identificar","",240,1,"Sem cliente","","k"],["d","2026-03",16,"Salários","",150,1,"Sem cliente","","c"],["d","2026-03",16,"Salários","",150,1,"Sem cliente","","k"],["d","2026-03",16,"Despesas a identificar","",100,1,"Sem cliente","","c"],["d","2026-03",16,"Despesas a identificar","",100,1,"Sem cliente","","k"],["d","2026-03",16,"Materiais de Escritório","",232.27,1,"Sem cliente","","c"],["d","2026-03",16,"Materiais de Escritório","",232.27,1,"Sem cliente","","k"],["d","2026-03",16,"Cursos e Treinamentos","",9540,1,"Sem cliente","","c"],["d","2026-03",16,"Cursos e Treinamentos","",9540,1,"Sem cliente","","k"],["d","2026-03",16,"Despesas a identificar","",8640,1,"Sem cliente","","c"],["d","2026-03",16,"Despesas a identificar","",8640,1,"Sem cliente","","k"],["d","2026-03",17,"Energia Elétrica","",718,1,"EDP ESPIRITO SANTO","","c"],["d","2026-03",17,"Energia Elétrica","",718,1,"EDP ESPIRITO SANTO","","k"],["d","2026-03",17,"Serviços de Pessoa Jurídica","",350,1,"Sem cliente","","c"],["d","2026-03",17,"Serviços de Pessoa Jurídica","",350,1,"Sem cliente","","k"],["d","2026-03",18,"Honorários Contábeis","",220,1,"Sem cliente","","c"],["d","2026-03",18,"Honorários Contábeis","",220,1,"Sem cliente","","k"],["d","2026-03",18,"Despesas a identificar","",30,1,"Sem cliente","","c"],["d","2026-03",18,"Despesas a identificar","",30,1,"Sem cliente","","k"],["d","2026-03",18,"Despesas a identificar","",190,1,"Sem cliente","","c"],["d","2026-03",18,"Despesas a identificar","",190,1,"Sem cliente","","k"],["d","2026-03",18,"Despesas a identificar","",400,1,"Sem cliente","","c"],["d","2026-03",18,"Despesas a identificar","",400,1,"Sem cliente","","k"],["d","2026-03",19,"Compra","",91,1,"NICKSCELL COMERCIO E SERVICOS LTDA","","c"],["d","2026-03",19,"Compra","",91,1,"NICKSCELL COMERCIO E SERVICOS LTDA","","k"],["d","2026-03",20,"Despesas a identificar","",820,1,"Sem cliente","","c"],["d","2026-03",20,"Despesas a identificar","",820,1,"Sem cliente","","k"],["d","2026-03",20,"Compra","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-03",17,"Compra","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-03",23,"Materiais Aplicados na Prestação de Serviços","",3727.5,1,"FLUKKA FARMA","","c"],["d","2026-03",23,"Materiais Aplicados na Prestação de Serviços","",3727.5,1,"FLUKKA FARMA","","k"],["d","2026-03",23,"Despesas a identificar","",2102.5,1,"Sem cliente","","c"],["d","2026-03",23,"Despesas a identificar","",2102.5,1,"Sem cliente","","k"],["d","2026-03",23,"Despesas a identificar","",60,1,"Sem cliente","","c"],["d","2026-03",23,"Despesas a identificar","",60,1,"Sem cliente","","k"],["d","2026-03",23,"Telefonia e Internet","",35.7,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",23,"Telefonia e Internet","",35.7,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",23,"Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","c"],["d","2026-03",23,"Cursos e Treinamentos","",13000,1,"O MEDICO EMPRESARIO LTDA","","k"],["d","2026-03",24,"Despesas a identificar","",1500,1,"Sem cliente","","c"],["d","2026-03",24,"Despesas a identificar","",1500,1,"Sem cliente","","k"],["d","2026-03",24,"Antecipação de Lucros","",750,1,"Sem cliente","","c"],["d","2026-03",24,"Antecipação de Lucros","",750,1,"Sem cliente","","k"],["d","2026-03",24,"Despesas Diversas (Cartão)","",38625.88,1,"Sem cliente","","c"],["d","2026-03",24,"Despesas Diversas (Cartão)","",38625.88,1,"Sem cliente","","k"],["d","2026-03",24,"Despesas Diversas (Cartão)","",5000,1,"Sem cliente","","c"],["d","2026-03",24,"Despesas Diversas (Cartão)","",5000,1,"Sem cliente","","k"],["d","2026-03",24,"Compra","",60,1,"37.901.199 VAGNER LISBOA RIBEIRO","","c"],["d","2026-03",24,"Compra","",60,1,"37.901.199 VAGNER LISBOA RIBEIRO","","k"],["d","2026-03",26,"Marketing e Publicidade","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-03",26,"Marketing e Publicidade","",1500,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-03",26,"Lanches e Refeições","",284,1,"DON PAGANOTTO LTDA","","c"],["d","2026-03",26,"Lanches e Refeições","",284,1,"DON PAGANOTTO LTDA","","k"],["d","2026-03",26,"Despesas a identificar","",200,1,"Sem cliente","","c"],["d","2026-03",26,"Despesas a identificar","",200,1,"Sem cliente","","k"],["d","2026-03",26,"Despesas a identificar","",800,1,"Sem cliente","","c"],["d","2026-03",26,"Despesas a identificar","",800,1,"Sem cliente","","k"],["d","2026-03",26,"Materiais de Escritório","",160,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","c"],["d","2026-03",26,"Materiais de Escritório","",160,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","k"],["d","2026-03",26,"Despesas a identificar","",2192.5,1,"Sem cliente","","c"],["d","2026-03",26,"Despesas a identificar","",2192.5,1,"Sem cliente","","k"],["d","2026-03",26,"Pis/Cofins","",56.61,1,"Sem cliente","","c"],["d","2026-03",26,"Pis/Cofins","",56.61,1,"Sem cliente","","k"],["d","2026-03",27,"Materiais de Escritório","",115,1,"Sem cliente","","c"],["d","2026-03",27,"Materiais de Escritório","",115,1,"Sem cliente","","k"],["d","2026-03",27,"Despesas a identificar","",15,1,"Sem cliente","","c"],["d","2026-03",27,"Despesas a identificar","",15,1,"Sem cliente","","k"],["d","2026-03",27,"Compra","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-03",27,"Compra","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-03",28,"Compra","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-03",28,"Compra","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-03",30,"Marketing e Publicidade","",1500,1,"Sem cliente","","c"],["d","2026-03",30,"Marketing e Publicidade","",1500,1,"Sem cliente","","k"],["d","2026-03",30,"Telefonia e Internet","",21.56,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-03",30,"Telefonia e Internet","",21.56,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-03",30,"Serviços de Pessoa Jurídica","",70,1,"Sem cliente","","c"],["d","2026-03",30,"Serviços de Pessoa Jurídica","",70,1,"Sem cliente","","k"],["d","2026-03",30,"Materiais de Escritório","",230,1,"ARTCOPIAS","","c"],["d","2026-03",30,"Materiais de Escritório","",230,1,"ARTCOPIAS","","k"],["d","2026-03",30,"Compra","",1600,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","c"],["d","2026-03",30,"Compra","",1600,1,"BARRACOPY COMUNICACAO VISUAL LTDA","","k"],["d","2026-03",30,"Compra","",12500.8,1,"BIOS FARMACEUTICA LTDA","","c"],["d","2026-03",30,"Compra","",12500.8,1,"BIOS FARMACEUTICA LTDA","","k"],["d","2026-03",31,"Despesas a identificar","",825,1,"Sem cliente","","c"],["d","2026-03",31,"Despesas a identificar","",825,1,"Sem cliente","","k"],["d","2026-03",31,"Antecipação de Lucros","",15000,1,"Sem cliente","","c"],["d","2026-03",31,"Antecipação de Lucros","",15000,1,"Sem cliente","","k"],["d","2026-04",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","c"],["d","2026-04",1,"Tarifas Bancárias","",30.85,1,"Sem cliente","","k"],["d","2026-04",1,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-04",4,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-04",1,"Compra","",8640,1,"KAMILLA PIMENTEL DERMATOLOGIA LTDA","","c"],["d","2026-04",1,"Compra","",8640,1,"KAMILLA PIMENTEL DERMATOLOGIA LTDA","","k"],["d","2026-04",2,"Compra","",81.89,1,"GOOGLE BRASIL INTERNET LTDA.","","c"],["d","2026-04",2,"Compra","",81.89,1,"GOOGLE BRASIL INTERNET LTDA.","","k"],["d","2026-04",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-04",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-04",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-04",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-04",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-04",7,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-04",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-04",7,"Compra","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Compra","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-04",7,"Compra","",3000,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-04",7,"Compra","",3000,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-04",9,"Compra","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",9,"Compra","",118.08,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",10,"ISS","",5.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-03",11,"ISS","",5.28,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",14,"Antecipação de Lucros","",14100,1,"ANNA PAULA FERNANDES MARTINS","","c"],["d","2026-04",14,"Antecipação de Lucros","",14100,1,"ANNA PAULA FERNANDES MARTINS","","k"],["d","2026-04",14,"Compra","",96,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",14,"Compra","",96,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-04",22,"Viagens e Representações","",92.4,1,"JUAN CARLOS SOSA","","c"],["d","2026-04",22,"Viagens e Representações","",92.4,1,"JUAN CARLOS SOSA","","k"],["d","2026-04",22,"Compra","",88,1,"NICKSCELL COMERCIO E SERVICOS LTDA","","c"],["d","2026-04",22,"Compra","",88,1,"NICKSCELL COMERCIO E SERVICOS LTDA","","k"],["d","2026-04",23,"IRPJ E CSLL","",11216.09,1,"RECEITA FEDERAL","","c"],["d","2026-04",23,"IRPJ E CSLL","",11216.09,1,"RECEITA FEDERAL","","k"],["d","2026-04",23,"Pis/Cofins","",16405.95,1,"RECEITA FEDERAL","","c"],["d","2026-04",23,"Pis/Cofins","",16405.95,1,"RECEITA FEDERAL","","k"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","c"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","k"],["d","2026-04",24,"Compra","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","c"],["d","2026-04",24,"Compra","",2500,1,"WOLF MENTOR'S SERVICOS DE APOIO ADMINISTRATIVO LTDA","","k"],["d","2026-04",28,"Compra","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-04",28,"Compra","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-04",29,"Compra","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-04",29,"Compra","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-04",30,"Compra","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","c"],["d","2026-04",30,"Compra","",399.9,1,"CLOUDIA TECNOLOGIA EM SOFTWARE LTDA","","k"],["d","2026-04",30,"Compra","",2691,1,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-04",30,"Compra","",2691,1,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",2,"Compra","",2638.5,1,"GOOGLE BRASIL INTERNET LTDA.","","c"],["d","2026-05",2,"Compra","",2638.5,1,"GOOGLE BRASIL INTERNET LTDA.","","k"],["d","2026-05",4,"Compra","",2600,1,"64.659.216 KETELLY ALVES GOULARTE","","c"],["d","2026-05",4,"Compra","",2600,1,"64.659.216 KETELLY ALVES GOULARTE","","k"],["d","2026-05",5,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-05",4,"Marketing e Publicidade","",2000,1,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-05",5,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-05",4,"Plano de Saúde Colaboradores","",260,1,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-05",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-05",6,"Marketing e Publicidade","",2100,1,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-05",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-05",6,"Telefonia e Internet","",114.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-05",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","c"],["d","2026-05",6,"Telefonia e Internet","",99.9,1,"BIZZ INTERNET LTDA","","k"],["d","2026-05",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","c"],["d","2026-05",7,"BPO Financeiro","",2400,1,"ALIADACONT CONTABILIDADE","","k"],["d","2026-05",7,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-05",7,"Honorários Contábeis","",1156.3,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-05",7,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","c"],["d","2026-05",7,"Honorários Contábeis","",300,1,"DELOGO & SAINTS CONTABILIDADE LTDA","","k"],["d","2026-05",8,"Troco","",26,1,"ERICA RODRIGUES DE LIMA","","c"],["d","2026-05",8,"Troco","",26,1,"ERICA RODRIGUES DE LIMA","","k"],["d","2026-05",8,"ISS","",4.92,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",9,"ISS","",4.92,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",8,"ISS","",4,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-04",14,"ISS","",4,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",11,"ISS","",486.47,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",11,"ISS","",486.47,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",11,"Salários","",3713.91,1,"HEMILLY LACERDA BARBOSA","","c"],["d","2026-05",11,"Salários","",3713.91,1,"HEMILLY LACERDA BARBOSA","","k"],["d","2026-05",11,"ISS","",8226.92,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","c"],["d","2026-05",11,"ISS","",8226.92,1,"PREFEITURA MUNICIPAL DE BARRA DE SAO FRANCISCO","","k"],["d","2026-05",11,"Compra","",151.3,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-05",11,"Compra","",151.3,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-05",12,"Compra","",2405.4,1,"BIO MEDS PHARMACEUTICA LTDA","","c"],["d","2026-05",12,"Compra","",2405.4,1,"BIO MEDS PHARMACEUTICA LTDA","","k"],["d","2026-05",13,"Marketing e Publicidade","",1500,1,"VANESSA CORDOVAL DE BARROS","","c"],["d","2026-05",13,"Marketing e Publicidade","",1500,1,"VANESSA CORDOVAL DE BARROS","","k"],["d","2026-05",13,"Serviços de Pessoa Jurídica","",55,1,"AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA","","c"],["d","2026-05",13,"Serviços de Pessoa Jurídica","",55,1,"AGILIZA MEDICINA E SEGURANCA DO TRABALHO LTDA","","k"],["d","2026-05",13,"Materiais de Limpeza e de Higiene","",412,1,"SIDIANARA RODRIGUES DE SOUZA","","c"],["d","2026-05",13,"Materiais de Limpeza e de Higiene","",412,1,"SIDIANARA RODRIGUES DE SOUZA","","k"],["d","2026-05",13,"INSS sobre Pró-labore - GPS","",2876.6,1,"RECEITA FEDERAL","","c"],["d","2026-05",13,"INSS sobre Pró-labore - GPS","",2876.6,1,"RECEITA FEDERAL","","k"],["d","2026-05",13,"Marketing e Publicidade","",1500,1,"VANESSA CORDOVAL DE BARROS","","c"],["d","2026-05",13,"Marketing e Publicidade","",1500,1,"VANESSA CORDOVAL DE BARROS","","k"],["d","2026-05",13,"Compra","",138.3,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-05",13,"Compra","",138.3,1,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-05",20,"IRRF","",41.4,1,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-04",30,"IRRF","",41.4,1,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",20,"PIS/COFINS/CSLL","",27.6,1,"BIOMA4ME ANALISES CLINICAS S.A.","","c"],["d","2026-04",30,"PIS/COFINS/CSLL","",27.6,1,"BIOMA4ME ANALISES CLINICAS S.A.","","k"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-05",21,"Telefonia e Internet","",49,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-05",21,"Materiais Aplicados na Prestação de Serviços","",46.89,1,"PIX Marketplace","","c"],["d","2026-05",21,"Materiais Aplicados na Prestação de Serviços","",46.89,1,"PIX Marketplace","","k"],["d","2026-05",21,"Telefonia e Internet","",41.87,1,"TELEFONICA BRASIL S.A","","c"],["d","2026-05",21,"Telefonia e Internet","",41.87,1,"TELEFONICA BRASIL S.A","","k"],["d","2026-05",21,"Energia Elétrica","",546.33,1,"28.152.650/0001-71","","c"],["d","2026-05",21,"Energia Elétrica","",546.33,1,"28.152.650/0001-71","","k"],["d","2026-05",21,"Pis/Cofins","",7947.55,1,"RECEITA FEDERAL","","c"],["d","2026-05",21,"Pis/Cofins","",7947.55,1,"RECEITA FEDERAL","","k"],["d","2026-05",21,"IRRF","",7947.55,1,"RECEITA FEDERAL","","c"],["d","2026-05",21,"IRRF","",7947.55,1,"RECEITA FEDERAL","","k"],["d","2026-05",28,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","c"],["d","2026-04",23,"FGTS e Multa de FGTS","",548.22,1,"CEF MATRIZ","","k"],["d","2026-06",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-06",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-06",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-06",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-06",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-06",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-06",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-06",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-06",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-06",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-06",10,"ISS","",5.76,0,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","c"],["d","2026-05",13,"ISS","",5.76,0,"RESITECH GERENCIAMENTO AMBIENTAL LTDA EPP","","k"],["d","2026-07",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-07",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-07",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-07",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-07",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-07",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-07",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-07",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-07",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-07",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-08",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-08",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-08",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-08",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-08",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-08",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-08",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-08",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-08",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-08",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-09",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-09",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-09",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-09",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-09",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-09",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-09",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-09",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-09",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-09",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-10",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-10",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-10",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-10",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-10",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-10",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-10",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-10",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-10",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-10",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-11",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-11",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-11",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-11",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-11",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-11",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-11",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-11",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-11",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-11",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-12",5,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","c"],["d","2026-12",4,"Marketing e Publicidade","",2000,0,"RADIO SAO FRANCISCO LTDA","","k"],["d","2026-12",5,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","c"],["d","2026-12",4,"Plano de Saúde Colaboradores","",260,0,"UNIMED NOROESTE CAPIXABA COOPERATIVA DE TRABALHO MEDICO","","k"],["d","2026-12",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","c"],["d","2026-12",6,"Marketing e Publicidade","",2100,0,"52.526.409 WILIAN DE SOUZA OLIVEIRA","","k"],["d","2026-12",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-12",6,"Telefonia e Internet","",114.9,0,"BIZZ INTERNET LTDA","","k"],["d","2026-12",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","c"],["d","2026-12",6,"Telefonia e Internet","",99.9,0,"BIZZ INTERNET LTDA","","k"]];

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
// statusFilter: 'realizado' | 'a_pagar_receber' | 'tudo'
// drilldown: null | { type: 'mes'|'categoria'|'cliente'|'fornecedor', value: ... }
// regime: 'caixa' | 'competencia' | null (null = caixa default)
function filterTx(allTx, statusFilter, drilldown, regime, extraFilters) {
  let out = allTx;
  // Filtro por regime (caixa/competencia) — index [9]: 'c' ou 'k'
  var rg = (regime === 'competencia') ? 'k' : 'c';
  out = out.filter(r => r[9] === rg);
  if (statusFilter === 'realizado') out = out.filter(r => r[6] === 1);
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
