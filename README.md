# Turtle Clicker

Um simples jogo de clicker baseado Tartarugas de Armadura, desenvolvido com FastAPI para o backend e HTML, CSS e JavaScript para o frontend. O objetivo do jogo é clicar em um botão para ganhar moedas e usar essas moedas para comprar itens que aumentam a recompensa por clique e a renda passiva. ( Ainda em desenvolvimento mais funcionalidades )

## Funcionalidades

- **Clique no botão** para ganhar moedas.
- **Compra de Itens**: Adquira vários itens para melhorar sua eficiência e ganhos:
  - **Centro de Treinamento**: Aumenta a recompensa passiva.
  - **Forja de Armadura**: Aumenta o valor por clique.
  - **Casa do Casco Duro**: Aumenta a recompensa passiva em 3 moedas por segundo.
  - **Casa Do Martelo**: Aumenta o valor por clique em 3 moedas.
  - **Centro de Pesquisa**: Reduz os custos dos próximos upgrades em 10%.
  - **Biblioteca Encantada**: Aumenta a eficiência de todos os upgrades em 15%.
  - **Forno de Diamante**: Aumenta o valor por clique em 10 moedas e a recompensa passiva em 10 moedas por segundo.

## Tecnologias Utilizadas

- **Backend**: FastAPI
- **Frontend**: HTML, CSS, JavaScript
- **Estilo**: CSS para estilização básica
- **Imagens**: Inclui uma imagem de botão personalizada para melhorar a experiência do usuário

## Estrutura do Projeto

- `main.py`: Arquivo principal do FastAPI que configura e serve arquivos estáticos e o HTML do jogo.
- `templates/index.html`: O arquivo HTML principal que define a estrutura e conteúdo do jogo.
- `static/styles.css`: Arquivo CSS que define o estilo visual do jogo.
- `static/script.js`: Arquivo JavaScript que gerencia a lógica do jogo, incluindo cliques, compras e atualizações de exibição.
- `static/image.jpg`: Imagem utilizada como botão de clique.

## Como Executar o Projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/Thiagueraf/turtle-clicker.git
    ```

2. **Navegue para o diretório do projeto:**
    ```bash
    cd turtle-clicker
    ```

3. **Instale as dependências:**
    ```bash
    pip install fastapi uvicorn
    ```

4. **Execute o servidor FastAPI:**
    ```bash
    uvicorn main:app --reload
    ```

5. **Abra o navegador e acesse:**
    ```
    http://127.0.0.1:8000
    ```

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato:

- **Email:** devthiagoap@gmail.com
- **IG:** [@Thiagueraf](https://www.instagram.com/thiagueraf/)
- **GitHub:** [Thiagueraf](https://github.com/Thiagueraf)
