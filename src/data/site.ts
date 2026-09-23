/* ==========================================================================
   LORD AUTO PEÇAS — ARQUIVO DE CONTEÚDO
   --------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa abrir para mudar textos,
   telefone, endereço, horário e redes sociais do site.

   Regra simples: altere apenas o que está entre aspas '...'.
   Não apague vírgulas, chaves { } nem colchetes [ ].

   Campos marcados com "⚠️ PREENCHER" estão vazios de propósito.
   Enquanto estiverem vazios ('') eles NÃO aparecem no site publicado —
   assim o site nunca mostra uma informação errada ou inventada.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. IDENTIDADE DA EMPRESA
   -------------------------------------------------------------------------- */
export const empresa = {
  nome: 'Lord Auto Peças',
  desde: '1989',
  // Frase curta que aparece no rodapé e nas buscas do Google.
  assinatura: 'Lord Auto Peças — desde 1989',
};

/* --------------------------------------------------------------------------
   2. CONTATO
   -------------------------------------------------------------------------- */
export const contato = {
  whatsapp: {
    // Como o número aparece escrito na tela:
    exibicao: '(51) 92000-8033',

    // Mesmo número no formato internacional, só dígitos: 55 + DDD + número.
    // Ex.: (51) 92000-8033  ->  5551920008033
    numeroInternacional: '5551920008033',

    // Mensagem que já vem escrita quando o cliente abre a conversa.
    mensagem: 'Olá! Vim pelo site da Lord Auto Peças e gostaria de falar com vocês.',
  },

  // ⚠️ PREENCHER — endereço completo da loja.
  // Ex.: 'Av. Exemplo, 1234 — Bairro, Cidade/RS'
  endereco: 'Travessa da Ponte, 438 - Vila Anair, Cachoeirinha/RS',

  // ⚠️ PREENCHER — horário de funcionamento.
  // Use uma linha por item. Ex.:
  // horarios: ['Segunda a sexta: 8h às 18h', 'Sábado: 8h às 12h'],
  horarios: ['Segunda: 7h às 19h', 'Terça: 7h às 19h', 'Quarta: 7h às 19h', 'Quinta: 7h às 19h', 'Sexta: 7h às 19h', 'Sábado: 7h às 19h', "Domingo: Fechado"] as string[],

  /* --- Campos técnicos: não aparecem na tela ---------------------------
     Servem só para o Google entender a loja na busca e no mapa.
     Se mudar o endereço ou o horário acima, atualize aqui também. */

  // Cidade e estado, separados.
  cidade: 'Cachoeirinha',
  uf: 'RS',

  /* Horário no formato que o Google lê. Dias em inglês abreviado:
     Mo Tu We Th Fr Sa Su — e horas em 24h.
     'Segunda a sábado, 7h às 19h'  ->  'Mo-Sa 07:00-19:00'
     Para vários blocos, use vírgula: 'Mo-Fr 08:00-18:00, Sa 08:00-12:00' */
  horarioGoogle: 'Mo-Sa 07:00-19:00',
};

/* --------------------------------------------------------------------------
   3. REDES SOCIAIS
   -------------------------------------------------------------------------- */
export const redes = {
  // Apenas o nome de usuário, SEM o @.
  instagram: 'lordautopecas',
};

/* --------------------------------------------------------------------------
   4. MAPA
   --------------------------------------------------------------------------
   ⚠️ PREENCHER — para colocar o mapa da loja:
   1. Abra o Google Maps e procure o endereço da loja.
   2. Clique em "Compartilhar" > aba "Incorporar um mapa" > "Copiar HTML".
   3. No texto copiado, pegue SÓ o endereço que está dentro de src="..."
      e cole entre as aspas abaixo.
   Enquanto ficar vazio, a área do mapa não aparece no site.
   -------------------------------------------------------------------------- */
export const mapa = {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.220188432918!2d-51.08454212369846!3d-29.915562574988734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973ce9e361dbf%3A0x95e9fd834f8c2f3e!2sNara%20Lord%20Auto%20Pe%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1790125782126!5m2!1spt-BR!2sbr',
};

/* --------------------------------------------------------------------------
   5. MENU DE NAVEGAÇÃO
   -------------------------------------------------------------------------- */
export const menu = [
  { texto: 'Início', href: '#inicio' },
  { texto: 'Sobre Nós', href: '#sobre' },
  { texto: 'O que você encontra aqui', href: '#servicos' },
  { texto: 'Contato', href: '#contato' },
];

/* --------------------------------------------------------------------------
   6. TEXTOS DAS SEÇÕES
   -------------------------------------------------------------------------- */

// --- Apresentação principal (topo da página) ---
export const hero = {
  titulo: `Autopeças, chapeação e pintura automotiva desde ${empresa.desde}`,
  texto:
    'Atendemos motoristas, oficinas e profissionais de chapeação e pintura.',
  botaoPrincipal: 'Falar no WhatsApp',
};

// --- Sobre nós ---
export const sobre = {
  titulo: 'Sobre nós',
  paragrafos: [
    'A Lord Auto Peças está em atividade desde 1989, atendendo quem precisa de peças e materiais para o veículo.',
    'A loja atende motoristas, oficinas e profissionais de chapeação e pintura, com autopeças, materiais para funilaria, tintas e produtos para pintura automotiva.',
    'Você não precisa saber o nome exato da peça. Descreva o que está acontecendo com o veículo e a equipe ajuda a identificar o que você precisa.',
  ],
  pilares: [
    {
      titulo: 'Experiência',
      texto: 'Mais de três décadas no ramo de autopeças e pintura automotiva.',
    },
    {
      titulo: 'Atendimento',
      texto: 'A equipe ajuda a identificar a peça ou o material certo para cada caso.',
    },
    {
      titulo: 'Tudo no mesmo lugar',
      texto: 'Peças, materiais de chapeação e tintas na mesma loja.',
    },
  ],
};

// --- O que você encontra aqui ---
export const servicos = {
  titulo: 'O que você encontra aqui',
  texto:
    'A loja atende tanto quem precisa manter o carro rodando quanto quem trabalha com reparo e pintura.',
  /* O campo "icone" escolhe o desenho. Valores possíveis:
     'pistao' | 'martelo' | 'leque' | 'pistola'  (veja IconeArea.astro) */
  itens: [
    {
      icone: 'pistao',
      titulo: 'Autopeças',
      texto: 'Peças para manutenção e reparo de veículos, para motoristas e oficinas.',
    },
    {
      icone: 'martelo',
      titulo: 'Chapeação',
      texto: 'Materiais para funilaria e recuperação da lataria do veículo.',
    },
    {
      icone: 'leque',
      titulo: 'Tintas automotivas',
      texto: 'Tintas para pintura de veículos, com orientação sobre qual usar em cada caso.',
    },
    {
      icone: 'pistola',
      titulo: 'Materiais para pintura',
      texto: 'Produtos de preparação e acabamento usados nas etapas da pintura.',
    },
  ],
  // Aviso honesto no fim da seção.
  rodape:
    'Para consultar itens específicos, disponibilidade e preços, fale com a gente pelo WhatsApp.',
};

// --- Contato e localização ---
export const contatoSecao = {
  titulo: 'Fale com a Lord Auto Peças',
  texto: 'Mande uma mensagem pelo WhatsApp contando o que você precisa.',
  botao: 'Chamar no WhatsApp',
};

/* --------------------------------------------------------------------------
   7. SEO — como o site aparece no Google e ao compartilhar um link
   -------------------------------------------------------------------------- */
export const seo = {
  titulo: 'Lord Auto Peças — Autopeças, itens para chapeação e pintura automotiva desde 1989',
  descricao:
    'Desde 1989, a Lord Auto Peças atende quem procura autopeças, materiais para chapeação, tintas e produtos para pintura automotiva. Fale conosco pelo WhatsApp.',
  // Palavras que descrevem o negócio (ajudam buscadores a entender o site).
  palavrasChave:
    'auto peças, autopeças, chapeação, funilaria, tinta automotiva, pintura automotiva, Lord Auto Peças',
};

/* ==========================================================================
   DAQUI PARA BAIXO É CÓDIGO — não precisa mexer.
   ========================================================================== */

/** Monta o link que abre a conversa no WhatsApp já com a mensagem escrita. */
export function linkWhatsapp(mensagem: string = contato.whatsapp.mensagem): string {
  const numero = contato.whatsapp.numeroInternacional.replace(/\D/g, '');
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

/** Link do perfil no Instagram (vazio quando o usuário não foi preenchido). */
export function linkInstagram(): string {
  const user = redes.instagram.replace(/^@/, '').trim();
  return user ? `https://instagram.com/${user}` : '';
}
