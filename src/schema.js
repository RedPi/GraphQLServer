const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    Hello: String
}
`

module.exports = typeDefs;