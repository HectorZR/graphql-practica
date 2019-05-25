'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')


const app = express()
const port = process.env.port || 3000

// definiendo el schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)
// tipos escalares String, Integer, Float & Boolean

// Configura los resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  }
}

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})