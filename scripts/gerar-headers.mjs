/* ==========================================================================
   GERA OS CABEÇALHOS DE SEGURANÇA (dist/_headers)
   --------------------------------------------------------------------------
   Roda automaticamente depois do `npm run build`.

   Por que é um script e não um arquivo fixo: a Content-Security-Policy
   precisa autorizar os scripts que ficam embutidos no HTML, e a autorização
   é feita pelo hash do conteúdo. Como o hash muda sempre que o código muda,
   escrevê-lo à mão sairia de sincronia sem ninguém perceber — e o site
   quebraria em produção, não no desenvolvimento.

   Aqui o hash é calculado a partir do HTML que acabou de ser gerado, então
   ele está sempre correto.
   ========================================================================== */

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const PAGINA = join(DIST, 'index.html');

if (!existsSync(PAGINA)) {
  console.error(`[headers] ${PAGINA} não encontrado. Rode "astro build" antes.`);
  process.exit(1);
}

const html = readFileSync(PAGINA, 'utf8');

/* Pega o conteúdo de cada <script> sem atributo src (os embutidos) e
   calcula o hash de cada um, no formato que a CSP espera. */
const embutidos = [...html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(
  (m) => m[1]
);

const hashes = embutidos.map(
  (codigo) => `'sha256-${createHash('sha256').update(codigo, 'utf8').digest('base64')}'`
);

/* --- A política ---------------------------------------------------------
   Cada origem liberada abaixo existe por um motivo concreto no site.
   Nada é liberado "por precaução". */
const csp = [
  // Por padrão, nada pode ser carregado de fora.
  `default-src 'self'`,

  // Scripts: só os arquivos do próprio site e os embutidos autorizados
  // pelo hash. Sem 'unsafe-inline' e sem 'unsafe-eval'.
  `script-src 'self' ${hashes.join(' ')}`,

  // CSS: o arquivo do site e a folha de estilo do Google Fonts.
  // 'unsafe-inline' é necessário porque o Astro embute estilos críticos.
  `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,

  // As fontes em si vêm do domínio estático do Google.
  `font-src 'self' https://fonts.gstatic.com`,

  // Imagens: as do site e data: (usado por ícones embutidos).
  `img-src 'self' data:`,

  // O único iframe do site é o mapa do Google.
  `frame-src https://www.google.com`,

  // O site não faz nenhuma chamada de rede por JavaScript.
  `connect-src 'self'`,

  // Não há formulários; nada pode ser enviado para lugar nenhum.
  `form-action 'none'`,

  // Ninguém pode colocar este site dentro de um iframe (clickjacking).
  `frame-ancestors 'none'`,

  // Impede que uma tag <base> injetada redirecione links relativos.
  `base-uri 'self'`,

  // Não existem plugins, applets ou objetos embutidos.
  `object-src 'none'`,

  // Promove qualquer recurso http:// esquecido para https://.
  `upgrade-insecure-requests`,
].join('; ');

const cabecalhos = `# ARQUIVO GERADO AUTOMATICAMENTE — não edite à mão.
# Editar aqui não adianta: o próximo "npm run build" sobrescreve.
# Para mudar as regras, edite scripts/gerar-headers.mjs
#
# Gerado em: ${new Date().toISOString()}

/*
  Content-Security-Policy: ${csp}
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains

# Os arquivos em /_astro/ têm o conteúdo no próprio nome: quando algo muda,
# o nome muda junto. Podem ser guardados para sempre sem risco.
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

# A página nunca é guardada em cache, para que uma correção de telefone
# ou horário apareça na hora para quem já visitou o site.
/index.html
  Cache-Control: public, max-age=0, must-revalidate
`;

writeFileSync(join(DIST, '_headers'), cabecalhos, 'utf8');

console.log(
  `[headers] dist/_headers gerado — ${hashes.length} script(s) embutido(s) autorizado(s) por hash.`
);
