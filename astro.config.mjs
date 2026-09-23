import { defineConfig } from 'astro/config';

/* ==========================================================================
   ENDEREÇO DO SITE
   --------------------------------------------------------------------------
   Este endereço entra nas tags que o Google lê e na pré-visualização do link
   no WhatsApp. Se estiver errado, o site vai ao ar apontando para um lugar
   que não existe.

   Como ele é definido, na ordem:

   1. Se o Netlify estiver montando o site (publicação ligada ao GitHub),
      ele mesmo informa o endereço certo e nada precisa ser feito aqui.
   2. Se você monta o site no seu computador com `npm run build` e envia a
      pasta `dist` à mão, vale o endereço escrito abaixo. É este que você
      precisa manter atualizado.
   ========================================================================== */

// ⚠️ TROCAR pelo endereço real do site, sem barra no final.
const ENDERECO_DO_SITE = 'https://www.lordautopecas.com.br';

// process.env.URL é preenchido automaticamente pelo Netlify.
const SITE = process.env.URL || ENDERECO_DO_SITE;

export default defineConfig({
  site: SITE,
  build: {
    // Deixa o CSS pequeno embutido no HTML -> menos requisições, carrega mais rápido.
    inlineStylesheets: 'auto',
  },
});
