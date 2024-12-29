export interface ProdutosResposta {
    id: string
    title: string
    price: string
    image: string
    category: string
    rating: {
        count: string
        rate: string
    }
}
