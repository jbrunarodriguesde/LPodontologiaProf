# 🦷 Clínica OdontoSorriso — Landing Page

Site institucional moderno, elegante e responsivo para clínica odontológica de pequeno porte.  
Objetivo principal: **gerar agendamentos pelo WhatsApp** e transmitir credibilidade aos pacientes.

---

## 📁 Estrutura de arquivos

```
📂 Clínica odontológica profissional/
├── index.html      ← Página principal
├── style.css       ← Estilos (Mobile First, Custom Properties)
├── script.js       ← JavaScript vanilla (sem dependências)
├── favicon.svg     ← Ícone do site em SVG
└── README.md       ← Este arquivo
```

---

## 🎨 Identidade Visual

| Elemento | Valor |
|---|---|
| Cor principal | `#0077B6` — Azul odontológico |
| Cor escura | `#023E8A` — Azul escuro |
| Cor de destaque | `#2A9D8F` — Verde suave |
| Fundo | `#F8F9FA` — Cinza claro / `#FFFFFF` — Branco |
| Tipografia | Poppins · Inter (Google Fonts) |

---

## 📄 Seções da página

| # | Seção | Descrição |
|---|---|---|
| 1 | **Hero** | Slogan, subtítulo, botões CTA e estatísticas animadas |
| 2 | **Sobre** | História, missão, valores e diferenciais da clínica |
| 3 | **Serviços** | 9 cards com hover animado e botão de agendamento |
| 4 | **Galeria** | Grid com lightbox e efeito hover |
| 5 | **Depoimentos** | 6 cards com avaliações de pacientes |
| 6 | **Contato** | Endereço, horários, mapa e links de contato |
| 7 | **CTA Final** | Chamada forte para agendamento via WhatsApp |

**Serviços incluídos:** Avaliação Odontológica · Limpeza Dental · Clareamento · Restaurações · Tratamento de Canal · Extrações · Ortodontia · Próteses · Implantes Dentários

---

## ⚙️ Recursos técnicos

- **Responsividade** — Mobile First, funciona em qualquer tela
- **Navbar fixa** — com menu hamburger para mobile
- **Scroll Reveal** — animações suaves via `IntersectionObserver`
- **Contador animado** — estatísticas na seção Hero
- **Lightbox** — visualização de fotos na galeria
- **Botão flutuante** — WhatsApp visível em toda a navegação
- **Lazy Loading** — carregamento otimizado de imagens
- **Sem dependências** — 100% HTML, CSS e JavaScript puro

### SEO implementado
- Meta Title e Meta Description
- Open Graph (Facebook/WhatsApp)
- Twitter Card
- Schema.org `Dentist` + `LocalBusiness`
- HTML semântico com `aria-label` e roles de acessibilidade
- Favicon SVG + ICO

---

## ✏️ Como personalizar

Abra o `index.html` em qualquer editor de texto e substitua os placeholders abaixo:

### 1. Dados da clínica

| Placeholder | Substituir por |
|---|---|
| `OdontoSorriso` | Nome real da clínica |
| `Dr. Carlos Mendes` | Nome do dentista responsável |
| `CRO-SP 12345` | Número do CRO real |
| `[Cidade]` | Nome da cidade |

### 2. Contato

| Placeholder | Substituir por |
|---|---|
| `(11) 99999-9999` | Telefone real |
| `5511999999999` | Número do WhatsApp (com DDI e DDD, sem espaços) |
| `contato@clinicaodontosorriso.com.br` | E-mail real |
| `Rua das Flores, 123 — Sala 201` | Endereço completo |
| `CEP 00000-000` | CEP real |

### 3. Mapa do Google Maps

Na seção `#contato`, localize o comentário:

```html
<!-- INSTRUÇÕES: Substitua o bloco abaixo pelo iframe do Google Maps -->
```

Siga os passos:
1. Acesse [maps.google.com](https://maps.google.com)
2. Busque o endereço da clínica
3. Clique em **Compartilhar → Incorporar mapa**
4. Copie o `<iframe>` e cole no lugar do placeholder

### 4. Redes sociais

Localize os links no rodapé e atualize:

```html
https://instagram.com/clinicaodontosorriso
https://facebook.com/clinicaodontosorriso
```

### 5. Fotos reais

Substitua as divs `.galeria-item` por imagens reais:

```html
<div class="galeria-item">
  <img src="fotos/consultorio.jpg" alt="Consultório da clínica" loading="lazy" />
  <div class="galeria-overlay"><span>Ver foto</span></div>
</div>
```

### 6. SEO

No `<head>` do `index.html`, atualize:

```html
<title>Clínica [Nome] em [Cidade] | Consultas e Tratamentos Dentários</title>
<meta name="description" content="Sua descrição personalizada aqui." />
<link rel="canonical" href="https://www.seudominio.com.br/" />
```

E no bloco `<script type="application/ld+json">`, atualize todos os campos com os dados reais da clínica.

---

## 🚀 Como publicar

O site é estático — não precisa de servidor ou banco de dados.

### Opção 1 — GitHub Pages (gratuito)
1. Crie um repositório no GitHub
2. Suba os arquivos
3. Vá em **Settings → Pages** e ative

### Opção 2 — Netlify (gratuito)
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o painel
3. O site entra no ar em segundos

### Opção 3 — Hospedagem tradicional
1. Contrate um plano de hospedagem com cPanel
2. Faça upload dos arquivos via FTP ou Gerenciador de Arquivos
3. Aponte o domínio para o servidor

---

## 📱 Compatibilidade

| Navegador | Suporte |
|---|---|
| Chrome / Edge | ✅ Total |
| Firefox | ✅ Total |
| Safari | ✅ Total |
| Opera | ✅ Total |
| IE 11 | ⚠️ Não suportado |

---

## 📞 WhatsApp — Mensagem automática

O botão flutuante e todos os CTAs já enviam a mensagem pré-configurada:

> *"Olá! Gostaria de agendar uma consulta."*

Para alterar o texto, edite o parâmetro `text=` nas URLs do WhatsApp:

```html
https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.
```

> Use [URL Encoder](https://www.urlencoder.org/) para codificar mensagens com acentos e espaços.

---

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica e acessível
- **CSS3** — Custom Properties, Flexbox, Grid, animações
- **JavaScript ES6+** — IntersectionObserver, módulos nativos
- **Google Fonts** — Poppins + Inter
- **SVG** — favicon e ícones inline sem dependência externa
