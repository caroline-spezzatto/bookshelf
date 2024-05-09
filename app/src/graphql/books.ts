import { gql } from '@apollo/client'

export const LIST_BOOKS = gql`
  query ListBooks {
    listBooks {
      id
      title
      genre
      author
      synopsis
      numberOfPages
      coverImageUrl
      publishingYear
      publishingCompany
    }
  }
`

export const LIST_USER_BOOKS = gql`
  query ListUserBooks($userId: ID!) {
    listUserBooks(userId: $userId) {
      status
      book {
        id
        title
        genre
        author
        synopsis
        numberOfPages
        coverImageUrl
        publishingYear
        publishingCompany
      }
    }
  }
`

export const CREATE_BOOK = gql`
  mutation CreateBook(
    $id: ID!
    $title: String!
    $genre: String!
    $author: String!
    $synopsis: String!
    $numberOfPages: Int!
    $publishingYear: Int!
    $coverImageUrl: String!
    $publishingCompany: String!
  ) {
    createBook(
      id: $id
      title: $title
      genre: $genre
      author: $author
      synopsis: $synopsis
      numberOfPages: $numberOfPages
      coverImageUrl: $coverImageUrl
      publishingYear: $publishingYear
      publishingCompany: $publishingCompany
    ) {
      id
    }
  }
`

export const UPDATE_USER_BOOK_STATUS = gql`
  mutation UpdateUserBookStatus($userId: ID!, $bookId: ID!, $status: Status!) {
    updateUserBookStatus(userId: $userId, bookId: $bookId, status: $status) {
      bookId
      status
    }
  }
`

export const ADD_USER_BOOK = gql`
  mutation AddUserBook($userId: ID!, $bookId: ID!, $status: Status!) {
    addUserBook(userId: $userId, bookId: $bookId, status: $status) {
      bookId
    }
  }
`

export const DELETE_USER_BOOK = gql`
  mutation DeleteUserBook($userId: ID!, $bookId: ID!) {
    deleteUserBook(userId: $userId, bookId: $bookId) {
      bookId
    }
  }
`
