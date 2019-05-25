'use strict'

const { graphql, buildSchema } = require('graphql');

// definiendo el schema
const schema = buildSchema(`
  type Query {
    hello: String
    saludo: String
  }
`)
// tipos escalares String, Integer, Float & Boolean

// Configura los resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  saludo: () => {
    return 'Hola a todos'
  }
}

// Ejecutar el query hello
graphql(schema, '{ saludo }', resolvers).then(data => {
  console.log(data)
})