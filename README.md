# 📝 Todo-List em JavaScript

Uma aplicação de lista de tarefas desenvolvida com **HTML**, **CSS** e **JavaScript puro**, com foco em uma interface moderna, responsiva e simples de usar.

## 🚀 Funcionalidades

- ➕ Adicionar tarefas
- 📄 Adicionar descrição às tarefas
- ✅ Marcar tarefas como concluídas
- 🗑️ Limpar toda a lista
- 🌙 Alternar entre tema claro e escuro
- 💾 Salvamento automático usando `localStorage`
- 📱 Interface responsiva para mobile e desktop
- 🎨 Design moderno com animações suaves

---

## 📸 Preview

> Você pode adicionar aqui screenshots do projeto depois.

```md
![Preview do Projeto](./preview.png)
```

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage API

---

## 📂 Estrutura do Projeto

```bash
📦 todo-list
 ┣ 📂 css
 ┃ ┣ 📜 style.css
 ┃ ┗ 📜 list.css
 ┣ 📂 js
 ┃ ┣ 📜 script.js
 ┃ ┗ 📜 list.js
 ┣ 📂 icons
 ┣ 📜 index.html
 ┗ 📜 list.html
```

---

## ⚙️ Como Funciona

### Adicionar tarefas

O usuário digita:

- Um título
- Uma descrição

Depois, a tarefa é salva automaticamente no navegador usando:

```js
localStorage.setItem(id, value);
```

---

### Sistema de temas

O projeto possui:

- 🌞 Tema claro
- 🌙 Tema escuro

O tema é salvo automaticamente no navegador.

---

### Persistência de dados

Todas as tarefas permanecem salvas mesmo após atualizar ou fechar a página.

---

## 🎯 Objetivo do Projeto

Este projeto foi criado para praticar:

- Manipulação do DOM
- Eventos em JavaScript
- Uso de `localStorage`
- Responsividade com CSS
- Estruturação de aplicações front-end
- Temas dinâmicos

---

## 📱 Responsividade

A interface foi desenvolvida pensando principalmente em dispositivos móveis, mas também funciona em telas maiores.

---

## ▶️ Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/todo-list.git
```

2. Abra o arquivo:

```bash
index.html
```

---

## 📌 Melhorias Futuras

- [ ] Editar tarefas
- [ ] Sistema de categorias
- [ ] Filtro de tarefas
- [ ] Datas e horários
- [ ] Drag and Drop
- [ ] Integração com banco de dados

---

## 👨‍💻 Autor

Desenvolvido por **Pierry Savio**

```txt
@pierry-savio
```

---

## 📄 Licença

Este projeto está sob a licença MIT.
