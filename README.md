# Portfolio - Lucas Albuquerque

Este é um projeto de portfólio pessoal desenvolvido como parte da formação em Desenvolvimento Web Fullstack na **Alpha Edtech**. O objetivo principal foi criar uma aplicação web responsiva, moderna e dinâmica utilizando apenas tecnologias nativas (Vanilla JS), sem dependência de frameworks ou bibliotecas externas.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Estilização avançada com variáveis CSS (`:root`), Flexbox, Grid Layout, animações (`@keyframes`) e media queries para responsividade.
- **JavaScript (ES6+)**: Lógica da aplicação, manipulação do DOM e modularização.
- **Web Components**: Criação de elementos personalizados reutilizáveis (`HTMLElement`) para Skills, Projetos e Experiência.

## ✨ Funcionalidades

- **Design Responsivo**: Layout adaptável para Mobile, Tablet e Desktop.
- **Tema Dark/Light**: Alternância de temas com persistência de dados usando `localStorage`.
- **Animações**:
  - Efeito de digitação/slide no texto principal ("Edtech/Fullstack Developer").
  - Hover effects em cartões e botões.
  - Efeito de Glassmorphism (vidro fosco) nos cartões.
- **Renderização Dinâmica**:
  - Os itens das seções **Skills**, **Projetos** e **Experiência** são renderizados via JavaScript a partir de arrays de objetos, facilitando a manutenção e adição de novo conteúdo.
- **Menu Mobile**: Navegação responsiva com menu "hambúrguer" animado.

## 📂 Estrutura do Projeto

```
portfolio-edtech/
│
├── index.html            # Estrutura principal
├── README.md             # Documentação
│
└── assets/
    ├── css/
    │   ├── global.css    # Estilos globais e imports
    │   ├── header.css    # Estilos do cabeçalho/menu
    │   ├── hero.css      # Estilos da seção inicial
    │   ├── about.css     # Estilos da seção Sobre
    │   ├── skills.css    # Estilos da seção Habilidades
    │   ├── projects.css  # Estilos da seção Projetos
    │   ├── experience.css# Estilos da seção Experiência
    │   └── footer.css    # Estilos do rodapé
    │
    ├── js/
    │   ├── script.js     # Ponto de entrada (Entry point)
    │   ├── theme.js      # Lógica do tema Dark/Light
    │   ├── menu.js       # Lógica do menu mobile
    │   ├── skills.js     # Web Component <skill-item>
    │   ├── projects.js   # Web Component <project-card>
    │   └── experience.js # Web Component <experience-item>
    │
    └── images/           # Recursos de imagem e logotipos
```

## 🔧 Como Acessar

Como o projeto utiliza **ES Modules** (`import`/`export`), ele precisa ser servido através de um servidor HTTP para evitar erros de política de segurança (CORS) do navegador ao acessar via protocolo `file://`.

### Opção 1: Acesso via Github Pages (Recomendado)
1. Acesse o link: https://lucas-albuq.github.io/portfolio-edtech/

### Opção 2: Acesso via Live Server (VS Code)
1. Instale a extensão **Live Server** no VS Code.
2. Abra o arquivo `index.html`.
3. Clique em "Go Live" no canto inferior direito do editor.

## 🎨 Design

O design foi focado em uma estética "clean" e moderna, utilizando uma paleta de cores vibrante (Roxo Elétrico e Índigo Profundo) combinada com espaços em branco (ou escuros no Dark Mode) para garantir boa legibilidade e foco no conteúdo.

---
Desenvolvido por [Lucas Albuquerque](https://github.com/lucas-albuq)
