# API de Gerenciamento de Medidas

Esta API fornece funcionalidades para o gerenciamento de medidas de clientes, incluindo a confirmação de leituras e listagem de medidas. A API é construída usando Node.js e TypeScript e está dockerizada para fácil implantação.

## Funcionalidades

- **POST /upload**: Recebe uma imagem em base64, consulta o Google Gemini e retorna a medida lida.
- **PATCH /confirm**: Confirma ou corrige o valor lido pelo LLM.
- **GET /:customerCode/list**: Lista medidas realizadas por um cliente, com opção de filtragem por tipo de medida.

## Requisitos

- [Node.js](https://nodejs.org/) (v18.x ou superior)
- [Docker](https://www.docker.com/products/docker-desktop) (para a execução do container)
- [Docker Compose](https://docs.docker.com/compose/) (para a orquestração de containers)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/salles18/APIREST_Shopper.git
    cd APIREST_Shopper
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

### Variáveis de Ambiente

Certifique-se de configurar as seguintes variáveis de ambiente:

- `GOOGLE_GEMINI_API_KEY`: Sua chave de API para o Google Gemini.
- `DATABASE_URL`: URL de conexão com o banco de dados.

Você pode criar um arquivo `.env` na raiz do projeto para armazenar essas variáveis.

### Docker

Para construir e executar a aplicação usando Docker, siga estes passos:

1. **Construir a imagem Docker**:

    ```bash
    docker build -t my-api .
    ```

2. **Executar a aplicação**:

    ```bash
    docker-compose up
    ```

   Isso iniciará a aplicação e o banco de dados em containers Docker.

## Endpoints

### POST /upload

Recebe uma imagem em base64 e retorna a medida lida.

**Request Body**:
```json
{
  "image_base64": "string"
}
Response:
{
  "image_url": "string",
  "guid": "string",
  "value": number
}
```
PATCH /confirm
Confirma ou corrige o valor lido.

Request Body:
```
{
  "measure_uuid": "string",
  "confirmed_value": integer
}
```
Response:
```
{
  "message": "Measure confirmed successfully"
}
```
GET /
/list
Lista medidas realizadas por um cliente, com opção de filtragem por tipo de medida.

Query Parameters:

measure_type (opcional): Tipo de medida a ser filtrado (WATER ou GAS).
Response:

```
[
  {
    "uuid": "string",
    "customerCode": "string",
    "type": "WATER" | "GAS",
    "value": number,
    "isConfirmed": boolean,
    "date": "string"
  }
]
```
# Testes
Para rodar os testes unitários, use:
```
npm test
```

Contribuição
Faça um fork do repositório.
Crie uma nova branch para sua feature ou correção: git checkout -b feature/nome-da-feature.
Faça commit das suas mudanças: git commit -am 'Add new feature'.
Faça push para a branch: git push origin feature/nome-da-feature.
Crie um pull request.


# Licença
Este projeto está licenciado sob a MIT License.
