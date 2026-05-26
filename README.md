# Pedro Lyra — Portfólio Pessoal Dark Cyber

Um site estático de página única (Single-Page Application) desenvolvido com uma estética premium e minimalista de ficção científica digital (**Dark Cyber**). Este projeto serve como o espaço digital pessoal do Pedro Lyra para compartilhar aprendizados, projetos concluídos e o seu laboratório experimental em cibersegurança, automação, Linux e desenvolvimento backend.

---

## ⚡ Funcionalidades Principais

- **Visual Dark Cyber Premium**: Interface futurista baseada em tons escuros profundos (`#090A0F`), orbes de luz neon desfocados via CSS puro e um padrão de grade cibernética no background.
- **Glassmorphism de Alta Performance**: Cards translúcidos com efeito de desfoque pesado (`backdrop-filter`) e bordas ultrafinas brilhantes que respondem dinamicamente ao passar o mouse (hover).
- **Sistema de Modais Interativos**: Visualização detalhada e contextualizada de projetos sem a necessidade de redirecionamento imediato. Conta com animação suave de *Scale-in*, acessibilidade aprimorada (fechamento via clique fora do modal, botão X, tecla `ESC` ou botão de fechamento inferior) e travamento automático do scroll do corpo da página.
- **Suporte Bilíngue Dinâmico (i18n)**: Tradução instantânea de todo o site entre **Português do Brasil (PT-BR)** e **Inglês (EN)** com apenas um clique, salvando a preferência do usuário no `localStorage`.
- **Foco em Acessibilidade e Performance**: Desenvolvido em HTML5 sem frameworks pesados, garantindo carregamento instantâneo, responsividade completa (Mobile-First) e links amigáveis.
- **Link de Contato Direto**: E-mail universal clicável (`mailto:`) em fonte mono-espaçada estilizada para facilitar a comunicação de recrutadores.

---

## 🛠️ Tecnologias Utilizadas

- **Estruturação**: HTML5 Semântico
- **Estilização**: Tailwind CSS (carregado via CDN oficial com configurações personalizadas em tempo de execução) e CSS3 puro para animações de brilho e efeitos visuais
- **Comportamento & i18n**: JavaScript Vanilla (ES6+) para manipulação dinâmica do DOM, controle de estado dos modais e dicionário de tradução local
- **Tipografia**: Google Fonts (*Outfit* para títulos e badges amplas, *Plus Jakarta Sans* para leitura confortável do corpo de texto) e *JetBrains Mono* para elementos de código e console

---

## 📁 Estrutura do Repositório

O projeto é mantido de forma extremamente leve e autossuficiente em arquivo único principal:
```bash
├── index.html   # Arquivo principal do site contendo HTML, estilizações CSS incorporadas e scripts JS
└── README.md    # Documentação explicativa do projeto
```

---

## 🚀 Como Executar Localmente

Como o projeto é construído em cima de tecnologias puras da web (HTML, CSS e JavaScript sem necessidade de compilação), executá-lo é extremamente simples:

1. Clone o repositório ou faça download dos arquivos:
   ```bash
   git clone https://github.com/LyraPedroDev/Portifolio-PedroLyra.git
   ```
2. Abra a pasta do projeto:
   ```bash
   cd Portifolio-PedroLyra
   ```
3. Dê dois cliques no arquivo `index.html` ou use uma extensão de servidor local (como *Live Server* no VS Code) para abrir o projeto diretamente no seu navegador de preferência.

---

## 🌐 Hospedagem no Netlify

Este portfólio está configurado com as tags necessárias para ser hospedado no Netlify de forma simples:

### Método 1: Integração Contínua (Recomendado)
1. Crie uma conta no [Netlify](https://www.netlify.com/).
2. Clique em **Add new site** > **Import an existing project**.
3. Conecte sua conta do GitHub e selecione o repositório deste portfólio.
4. Como é um site estático sem build step, deixe as configurações padrão em branco:
   - **Build Command**: *Vazio*
   - **Publish directory**: *Vazio ou `.`*
5. Clique em **Deploy site**. Toda vez que você der um `git push` no GitHub, o Netlify atualizará seu portfólio automaticamente.

### Método 2: Netlify Drop (Sem Git)
1. Acesse o [Netlify Drop](https://app.netlify.com/drop).
2. Arraste e solte a pasta do seu projeto contendo o `index.html` diretamente na tela.
3. O site estará online em menos de 10 segundos!
