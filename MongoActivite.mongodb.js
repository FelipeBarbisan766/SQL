// 1) Crie um banco de dados no MongoDB chamado “db_atividades”.
// use ('dbAtividade')

// 2) Dentro de “db_atividades”, crie uma collection chamada “contatos”.
// db.createCollection('contatos')

// a) Insira individualmente 3 novos contatos de modo que eles possuam os nomes “Ana Silva”, “Carlos Ferraz” e “Bruno Almeida”, além de valores nos campos “telefone” e “email”.
// db.contatos.insertOne({
//     nome:"Ana Silva",
//     telefone:"12232133",
//     email:"anasilva@gmail.com"
// })
// db.contatos.insertOne({
//     nome:"Carlos Ferraz",
//     telefone:"17676763",
//     email:"carlosferraz@gmail.com"
// })
// db.contatos.insertOne({
//     nome:"Bruno Almeida",
//     telefone:"989878788",
//     email:"brunoalmeida@gmail.com"
// })

// b) Insira de uma vez 4 novos contatos de modo que possuam os nomes “Lucas Oliveira”, “Mateus Ferreira”, “Viviane Santos” e “Franciele Souza”.
// db.contatos.insertMany([
//     {
//     nome:"Lucas Oliveira",
//     telefone:"0987876",
//     email:"lucasoliveira@gmail.com"
//     },
//     {
//     nome:"Mateus Ferreira",
//     telefone:"8767767",
//     email:"mateusferreira@gmail.com"
//     },
//     {
//     nome:"Viviane Santos",
//     telefone:"232321",
//     email:"vivianesantos@gmail.com"
//     },
//     {
//     nome:"Franciele Souza",
//     telefone:"988877",
//     email:"francielesouza@gmail.com"
//     },
// ])

// c) Atualize individualmente os e-mails de Mateus e Viviane.
// db.contatos.updateOne(
//     {nome:"Mateus Ferreira"},
//     {$set: {email:"mateusdograu@hotmail.com"}}
// )
// db.contatos.updateOne(
//     {nome:"Viviane Santos"},
//     {$set: {email:"vividoSanto@yahool.com"}}
// )

// d) Atualize individualmente Ana alterando seu telefone.
// db.contatos.updateOne(
//     {nome:"Ana Silva"}, 
//     {$set: {telefone:"1699746309"}}
// )

// e) Atualize todos os contatos de uma vez de modo que passem a ter um campo chamado “tags” com o valor “faculdade”.
db.contatos.updateMany(
    {},
    {$push: {tag:"faculdade"}}
)


// f) Atualize os contatos de modo que além da tag “faculdade”, Ana e Carlos tenham também a tag “amigo”, Mateus e Lucas tenham a tag “vizinho” e Franciele também tenha a tag “família”.
db.contatos.updateOne(
    {nome:"Ana Silva"},
    {$push: {tag:"amigo"}}
)
db.contatos.updateOne(
    {nome:"Carlos Ferraz"},
    {$push: {tag:"amigo"}}
)
db.contatos.updateOne(
    {nome:"Mateus Ferreira"},
    {$push: {tag:"vizinho"}}
)
db.contatos.updateOne(
    {nome:"Lucas Oliveira"},
    {$push: {tag:"vizinho"}}
)
db.contatos.updateOne(
    {nome:"Franciele Souza"},
    {$push: {tag:"familia"}}
)


// g) Atualize todos de uma vez de modo que o campo “telefone” agora se chame “celular”.
db.contatos.updateMany(
    {},
    {$rename: {"telefone" : "celular" }}
)

// h) Atualize Franciele e Carlos de modo que seja inserido ao final de suas tags o valor “importante”.
db.contatos.updateOne(
    {nome:"Carlos Ferraz"},
    {$push: {tag:"importante"}}
)
db.contatos.updateOne(
    {nome:"Franciele Souza"},
    {$push: {tag:"importante"}}
)

// i) Use um comando que deverá atualizar o número de telefone de Lucas somente se ele já existir, mas caso ele não exista, tal comando deverá criar o novo contato com a estrutura completa esperada.
db.contatos.updateOne(
    {nome:"Lucas Oliveira"},
    {$set: {celular:"19882332"}}
)

// j) Substitua o primeiro documento de contato que possua a tag “amigo” por dados de um contato completamente novo.
db.contatos.replaceOne(
    {tag:"amigo"},
    {
        nome:"Felipe Barbisan",
        celular:"16997206749",
        email:"gamerfelipesi766@gmail.com",
        tag:["amigo","faculdade"]
    }
)

// k) Remova a última tag de Carlos.
db.contatos.updateOne(
    {nome:"Carlos Ferraz"},
    {$pop: {tag: 1}}
)

// l) Remova o terceiro contato.
db.contatos.deleteOne(
    {_id: ObjectId('68db1ecc5373fb54e4091971')}
)

// m) Remova de uma vez todos os contatos que possuírem a tag “vizinho”.
db.contatos.deleteMany(
    {tag: "vizinho"}
)