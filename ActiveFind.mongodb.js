// Nome: Felipe Adrian Lourenço Barbisan            Curso: 4 AMS (ADS)

// 1) Use o banco chamado “db_atividades” (Crie-o caso ainda não o tenha).
use ('dbAtividade')

// 2) Dentro de “db_atividades”, crie uma collection chamada “feedbackUsuarios”.
db.createCollection('feedbackUsuarios')

// 3) Manipulando a collection “feedbackUsuarios”, faça:

// a) Insira no banco de dados os 20 feedbacks fornecidos através do link do GitHub do professor https://github.com/mauricioodian/Amostras-MongoDB/tree/main .
db.feedbackUsuarios.insertMany([
    {
        usuarioId: 1,
        avaliacao: 5,
        comentario: "Excelente atendimento e entrega rápida.",
        tags: ["elogio", "entrega", "atendimento"],
        dataFeedback: ISODate("2025-07-25T10:00:00Z")
    },
    {
        usuarioId: 2,
        avaliacao: 2,
        comentario: "Demorou demais para chegar.",
        tags: ["reclamação", "entrega"],
        dataFeedback: ISODate("2025-07-24T15:30:00Z")
    },
    {
        usuarioId: 3,
        avaliacao: 4,
        comentario: "Gostei muito da qualidade do produto.",
        tags: ["elogio", "produto", "qualidade"],
        dataFeedback: ISODate("2025-07-25T10:00:00Z")
    },
    {
        usuarioId: 4,
        avaliacao: 1,
        comentario: "Produto veio quebrado.",
        tags: ["reclamação", "produto", "qualidade"],
        dataFeedback: ISODate("2025-07-26T09:00:00Z")
    },
    {
        usuarioId: 5,
        avaliacao: 3,
        comentario: "Ok, mas poderia ser mais rápido.",
        tags: ["neutro", "entrega"],
        dataFeedback: ISODate("2025-07-27T13:20:00Z")
    },
    {
        usuarioId: 6,
        avaliacao: 5,
        comentario: "Recomendo a todos!",
        tags: ["elogio", "recomendação", "atendimento"],
        dataFeedback: ISODate("2025-07-25T10:00:00Z")
    },
    {
        usuarioId: 7,
        avaliacao: 4,
        comentario: "Bom custo-benefício.",
        tags: ["elogio", "produto", "preço"],
        dataFeedback: ISODate("2025-07-28T11:10:00Z")
    },
    {
        usuarioId: 8,
        avaliacao: 2,
        comentario: "Atendimento ruim e sem retorno.",
        tags: ["reclamação", "atendimento"],
        dataFeedback: ISODate("2025-07-24T15:30:00Z")
    },
    {
        usuarioId: 9,
        avaliacao: 5,
        comentario: "Tudo perfeito!",
        tags: ["elogio", "produto", "entrega"],
        dataFeedback: ISODate("2025-07-25T10:00:00Z")
    },
    {
        usuarioId: 10,
        avaliacao: 1,
        comentario: "Não recebi o que pedi.",
        tags: ["reclamação", "entrega", "produto"],
        dataFeedback: ISODate("2025-07-26T09:00:00Z")
    },
    {
        usuarioId: 11,
        avaliacao: 3,
        comentario: "Mais ou menos, mas funcionou.",
        tags: ["neutro", "produto"],
        dataFeedback: ISODate("2025-07-27T13:20:00Z")
    },
    {
        usuarioId: 12,
        avaliacao: 4,
        comentario: "Bom serviço e entrega dentro do prazo.",
        tags: ["elogio", "entrega"],
        dataFeedback: ISODate("2025-07-28T11:10:00Z")
    },
    {
        usuarioId: 13,
        avaliacao: 2,
        comentario: "A embalagem estava rasgada.",
        tags: ["reclamação", "produto", "embalagem"],
        dataFeedback: ISODate("2025-07-25T10:00:00Z")
    },
    {
        usuarioId: 14,
        avaliacao: 5,
        comentario: "Muito bom, superou as expectativas.",
        tags: ["elogio", "produto"],
        dataFeedback: ISODate("2025-07-25T10:00:00Z")
    },
    {
        usuarioId: 15,
        avaliacao: 3,
        comentario: "Precisa melhorar o suporte.",
        tags: ["neutro", "atendimento"],
        dataFeedback: ISODate("2025-07-24T15:30:00Z")
    },
    {
        usuarioId: 16,
        avaliacao: 4,
        comentario: "Chegou rápido e em perfeito estado.",
        tags: ["elogio", "entrega"],
        dataFeedback: ISODate("2025-07-26T09:00:00Z")
    },
    {
        usuarioId: 17,
        avaliacao: 1,
        comentario: "Não gostei do produto.",
        tags: ["reclamação", "produto"],
        dataFeedback: ISODate("2025-07-28T11:10:00Z")
    },
    {
        usuarioId: 18,
        avaliacao: 5,
        comentario: "Tudo certo, ótimo atendimento.",
        tags: ["elogio", "atendimento"],
        dataFeedback: ISODate("2025-07-25T10:00:00Z")
    },
    {
        usuarioId: 19,
        avaliacao: 4,
        comentario: "Muito bom, só o preço poderia ser melhor.",
        tags: ["elogio", "preço"],
        dataFeedback: ISODate("2025-07-27T13:20:00Z")
    },
    {
        usuarioId: 20,
        avaliacao: 2,
        comentario: "Suporte não respondeu.",
        tags: ["reclamação", "atendimento"],
        dataFeedback: ISODate("2025-07-24T15:30:00Z")
    },
    {
        usuarioId: 21,
        avaliacao: 5,
        comentario: "Sistema rápido e muito funcional.",
        tags: ["velocidade", "funcionalidade", "satisfação"],
        dataFeedback: ISODate("2025-07-02T10:10:00Z")
    },
    {
        usuarioId: 22,
        avaliacao: 3,
        comentario: "Interface confusa, mas atende bem.",
        tags: ["interface", "usabilidade"],
        dataFeedback: ISODate("2025-07-03T14:30:00Z")
    },
    {
        usuarioId: 23,
        avaliacao: 4,
        comentario: "Muito bom no celular, ótima responsividade.",
        tags: ["mobile", "responsividade", "experiência"],
        dataFeedback: ISODate("2025-07-04T09:15:00Z")
    },
    {
        usuarioId: 24,
        avaliacao: 2,
        comentario: "Vários bugs encontrados na versão web.",
        tags: ["bug", "web", "estabilidade"],
        dataFeedback: ISODate("2025-07-05T11:00:00Z")
    },
    {
        usuarioId: 25,
        avaliacao: 5,
        comentario: "Atendimento ao cliente excelente!",
        tags: ["atendimento", "satisfação"],
        dataFeedback: ISODate("2025-07-06T15:45:00Z")
    },
    {
        usuarioId: 26,
        avaliacao: 4,
        comentario: "Recurso novo de relatórios é ótimo.",
        tags: ["relatórios", "novidade", "funcionalidade"],
        dataFeedback: ISODate("2025-07-06T15:45:00Z")
    },
    {
        usuarioId: 27,
        avaliacao: 1,
        comentario: "Não consegui acessar com meu login.",
        tags: ["acesso", "login", "problema"],
        dataFeedback: ISODate("2025-07-07T08:00:00Z")
    },
    {
        usuarioId: 28,
        avaliacao: 4,
        comentario: "Boa integração com outros sistemas.",
        tags: ["integração", "eficiência", "API"],
        dataFeedback: ISODate("2025-07-08T10:00:00Z")
    },
    {
        usuarioId: 29,
        avaliacao: 5,
        comentario: "Muito intuitivo e moderno.",
        tags: ["design", "interface", "satisfação"],
        dataFeedback: ISODate("2025-07-08T10:00:00Z")
    },
    {
        usuarioId: 30,
        avaliacao: 2,
        comentario: "Lento ao carregar dados.",
        tags: ["velocidade", "performance"],
        dataFeedback: ISODate("2025-07-09T13:30:00Z")
    },
    {
        usuarioId: 31,
        avaliacao: 3,
        comentario: "Erro ao exportar relatórios.",
        tags: ["erro", "relatórios", "exportação"],
        dataFeedback: ISODate("2025-07-10T16:10:00Z")
    },
    {
        usuarioId: 32,
        avaliacao: 4,
        comentario: "Muito bom para uso em equipe.",
        tags: ["colaboração", "produtividade"],
        dataFeedback: ISODate("2025-07-11T09:45:00Z")
    },
    {
        usuarioId: 33,
        avaliacao: 5,
        comentario: "Gostei das atualizações recentes.",
        tags: ["atualizações", "novidade", "usabilidade"],
        dataFeedback: ISODate("2025-07-11T09:45:00Z")
    },
    {
        usuarioId: 34,
        avaliacao: 1,
        comentario: "Falta suporte ao idioma português.",
        tags: ["idioma", "suporte"],
        dataFeedback: ISODate("2025-07-12T08:20:00Z")
    },
    {
        usuarioId: 35,
        avaliacao: 4,
        comentario: "Consegui resolver meus problemas com facilidade.",
        tags: ["usabilidade", "eficiência"],
        dataFeedback: ISODate("2025-07-13T18:00:00Z")
    },
    {
        usuarioId: 36,
        avaliacao: 2,
        comentario: "A documentação está desatualizada.",
        tags: ["documentação", "problema", "API"],
        dataFeedback: ISODate("2025-07-14T07:40:00Z")
    },
    {
        usuarioId: 37,
        avaliacao: 5,
        comentario: "Tudo funciona perfeitamente, parabéns!",
        tags: ["satisfação", "funcionalidade", "elogio"],
        dataFeedback: ISODate("2025-07-14T07:40:00Z")
    },
    {
        usuarioId: 38,
        avaliacao: 3,
        comentario: "Sistema bom, mas poderia ser mais leve.",
        tags: ["performance", "design"],
        dataFeedback: ISODate("2025-07-15T12:30:00Z")
    },
    {
        usuarioId: 39,
        avaliacao: 4,
        comentario: "Gostei muito das notificações personalizadas.",
        tags: ["notificações", "personalização"],
        dataFeedback: ISODate("2025-07-16T14:00:00Z")
    },
    {
        usuarioId: 40,
        avaliacao: 1,
        comentario: "Muitos erros ao salvar as configurações.",
        tags: ["bug", "erro", "configuração"],
        dataFeedback: ISODate("2025-07-17T19:30:00Z")
    }
])

// b) Busque pelos documentos com avaliações maiores ou igual a 4 estrelas.
db.feedbackUsuarios.find({avaliacao: {$gte: 4}})

// c) Busque pelos documentos com avaliação inferiores a 3 estrelas.
db.feedbackUsuarios.find({avaliacao: {$lt: 3}})

// d) Busque pelos documentos com a tag “performance”.
db.feedbackUsuarios.find({tags: "performance"})

// e) Busque por documentos que contenham as tags “elogio” e “produto”.
db.feedbackUsuarios.find({tags: {$in: ["elogio", "produto"]}})

// f) Busque pelo primeiro que possui as tags “produto” e “qualidade”.
db.feedbackUsuarios.findOne({tags: {$in: ["produto", "qualidade"]}})

// g) Busque por documentos que contenham as tags “reclamação” e “produto”.
db.feedbackUsuarios.find({tags: {$in: ["reclamação", "produto"]}})

// h) Busque pelo primeiro que possui as tags “produto” e “entrega”.
db.feedbackUsuarios.findOne({tags: {$in: ["produto", "entrega"]}})

// i) Busque pelos documentos que contenham ao menos uma das seguintes tags: “erro”, “problema” e “bug”.
db.feedbackUsuarios.find({tags: {$in: ["erro", "problema", "bug"]}})

// j) Busque por todos em que os campos “tags” ou “comentario” não existam.
db.feedbackUsuarios.find({
    $or: [
        {tags: {$exists: false}},
        {comentario: {$exists: false}}
    ]
})

// k) Busque por todos com data de feedback realizado no dia 24/07/2025.
db.feedbackUsuarios.find({
    dataFeedback: {
        $gte: ISODate("2025-07-24T00:00:00Z"),
        $lt: ISODate("2025-07-25T00:00:00Z")
    }
})

// l) Busque por todos que possuírem as tags “produto” e “reclamação” e que foram realizados entre os dias 25/07/2025 e 28/07/2025.
db.feedbackUsuarios.find({
    tags: {$in: ["produto", "reclamação"]},
    dataFeedback: {
        $gte: ISODate("2025-07-25T00:00:00Z"),
        $lt: ISODate("2025-07-29T00:00:00Z")
    }
})