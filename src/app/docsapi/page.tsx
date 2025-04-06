import Container from "@/components/Container";

export default function ApiDocumentationPage() {
    return (
        <Container className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
             <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h3 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            <span className="text-primary">Documentação</span> da API 
                        </h3>
                        <p className="mt-2 text-lg/8 text-gray-600">
                            Confira os relatos enviados pela comunidade sobre a malária.
                        </p>
                    </div>
        
            <p className="text-lg mb-8">
                A API do Mapazzz fornece dados sobre reportagens de riscos e zonas de risco. Abaixo estão as rotas disponíveis e exemplos de uso.
            </p>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Listar todas as reportagens</h2>
               
                    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"> 
                        GET https://mapazzz-api.vercel.app/api/reportagens/
                        </pre>
                
                <p className="mb-4">
                    Retorna uma lista de todas as reportagens cadastradas.
                </p>
                <pre className="bg-gray-100 p-4 rounded">
                    {`Exemplo de resposta:
[
    {
        "id": 1,
        "title": "Reportagem sobre zona de risco",
        "description": "Descrição da reportagem",
        "riskLevel": 2,
        "location": "Localização da reportagem",
        "imageUrl": "https://example.com/image.jpg"
    },
    ...
]`}
                </pre>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Listar todas as zonas de risco</h2>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"> 
                   GET https://mapazzz-api.vercel.app/api/reportagens/zonas
                </pre>
                <p className="mb-4">
                    Retorna uma lista de zonas de risco com informações detalhadas.
                </p>
                <pre className="bg-gray-100 p-4 rounded">
                    {`Exemplo de resposta:
[
    {
        "id": 1,
        "zoneName": "Zona Norte",
        "riskLevel": 1,
        "description": "Zona de baixo risco",
        "latitude": "-3.71722",
        "longitude": "-38.5433"
    },
    ...
]`}
                </pre>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Buscar reportagem por título</h2>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto"> 
                   GET https://mapazzz-api.vercel.app/api/reportagens/buscar/:title
                </pre>
                <p className="mb-4">
                    Retorna uma reportagem específica com base no título fornecido.
                </p>
                <pre className="bg-gray-100 p-4 rounded">
                    {`Exemplo de requisição:
GET https://mapazzz-api.vercel.app/api/reportagens/buscar/Reportagem%20sobre%20zona%20de%20risco

Exemplo de resposta:
{
    "id": 1,
    "title": "Reportagem sobre zona de risco",
    "description": "Descrição da reportagem",
    "riskLevel": 2,
    "location": "Localização da reportagem",
    "imageUrl": "https://example.com/image.jpg"
}`}
                </pre>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Notas</h2>
                <ul className="list-disc pl-6">
                    <li className="mb-2">
                        Certifique-se de que os parâmetros enviados nas requisições estão corretos para evitar erros.
                    </li>
                    <li className="mb-2">
                        A API pode retornar códigos de erro HTTP, como `404` para recursos não encontrados ou `500` para erros internos.
                    </li>
                    <li>
                        Para mais informações ou suporte, entre em contato com a equipe do Mapazzz.
                    </li>
                </ul>
            </div></div></div>
        </Container>
    );
}