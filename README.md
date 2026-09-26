# AP Compressores — landing page

Site de divulgação da **AP Compressores (Alta Pressão Compressores)** — Ciro Borbon,
manutenção, instalação, venda e aluguel de compressores de ar em Itapetininga e região.

- **Endereço oficial:** https://apcompressores.web.app (Firebase Hosting, projeto `apcompressores`,
  conta Google pessoal arnaldo@live.jp, plano gratuito Spark).
- GitHub Pages **desativado** em 2026-09-26 (endereço antigo não funciona mais).
- `qrcode/`: QR Code do endereço oficial (PNG com logo, SVG pra gráfica, cartão 1080x1350). Não é publicado no site.
- Publicar alteração: `firebase deploy --only hosting` nesta pasta.
- HTML/CSS/JS puro, sem build. Fotos em `img/` vieram do Instagram @ap_compressores.
- Logo provisório (manômetro) em `img/logo.svg` — o Instagram não tem logo próprio.
- Contatos no site: WhatsApp (15) 99779-1920, cirooborbon@gmail.com, @ap_compressores.
  (O fixo (15) 3373-6751 da bio do Instagram foi desativado — não usar.)

## Domínio próprio (quando comprar)
No console do Firebase → Hosting → "Adicionar domínio personalizado": ele mostra os registros
DNS pra colocar no painel do Registro.br. Depois trocar a URL do `og:image` no `index.html`.
