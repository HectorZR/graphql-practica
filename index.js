'use strict'

const { graphql, buildSchema } = require('graphql');

// definiendo el schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)
// tipos escalares String, Integer, Float & Boolean

// Ejecutar el query hello
graphql(schema, '{ hello }').then(data => {
  console.log(data)
})