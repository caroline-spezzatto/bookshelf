const { gql } = require('apollo-server')

const typeDefs = gql`
  enum Status {
    READ
    READING
    TO_READ
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Book {
    id: ID!
    title: String!
    genre: String!
    author: String!
    synopsis: String!
    numberOfPages: Int!
    publishingYear: Int!
    coverImageUrl: String!
    publishingCompany: String!
  }

  type ListUserBooks {
    book: Book!
    status: Status!
  }

  type UpdateUserBookStatus {
    bookId: ID!
    status: Status!
  }

  type DeleteUserBook {
    bookId: ID!
  }

  type UpdateUserBookStatus {
    bookId: ID!
    status: Status!
  }

  type CreateBook {
    id: ID!
  }

  type Query {
    listBooks: [Book]
    listUserBooks(userId: ID!): [ListUserBooks]
  }

  type Mutation {
    updateUserBookStatus(
      userId: ID!
      bookId: ID!
      status: Status!
    ): UpdateUserBookStatus
    createBook(
      id: ID!
      title: String!
      genre: String!
      author: String!
      synopsis: String!
      numberOfPages: Int!
      publishingYear: Int!
      coverImageUrl: String!
      publishingCompany: String!
    ): CreateBook
    addUserBook(userId: ID!, bookId: ID!, status: Status!): UpdateUserBookStatus
    deleteUserBook(userId: ID!, bookId: ID!): DeleteUserBook
  }
`

module.exports = typeDefs
