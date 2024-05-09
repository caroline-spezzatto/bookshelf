const { books, listUserBooks } = require('./mock.js')

const resolvers = {
  Query: {
    listBooks: () => books,
    listUserBooks: (_, { userId }) => {
      const userBooks = listUserBooks.filter(
        userBook => userBook.userId === userId
      )

      return userBooks.map(userBook => {
        const book = books.find(book => book.id === userBook.bookId)

        return { book, status: userBook.status }
      })
    }
  },

  Mutation: {
    updateUserBookStatus: (_, { userId, bookId, status }) => {
      const userBookIndex = listUserBooks.findIndex(
        userBook => userBook.userId === userId && userBook.bookId === bookId
      )

      if (userBookIndex !== -1) {
        listUserBooks[userBookIndex].status = status
        return {
          bookId,
          status
        }
      }

      return null
    },
    addUserBook: (_, { userId, bookId, status }) => {
      const book = books.find(book => book.id === bookId)

      if (book) {
        listUserBooks.push({ userId, bookId, status })

        return {
          bookId,
          status
        }
      }

      return null
    },
    deleteUserBook: (_, { userId, bookId }) => {
      const userBookIndex = listUserBooks.findIndex(
        userBook => userBook.userId === userId && userBook.bookId === bookId
      )

      if (userBookIndex !== -1) {
        const deletedBook = listUserBooks.splice(userBookIndex, 1)[0]

        return {
          bookId: deletedBook.bookId
        }
      }

      return null
    },
    createBook: (
      _,
      {
        id,
        title,
        genre,
        author,
        synopsis,
        numberOfPages,
        coverImageUrl,
        publishingYear,
        publishingCompany
      }
    ) => {
      const book = {
        id,
        title,
        genre,
        author,
        synopsis,
        coverImageUrl,
        numberOfPages,
        publishingYear,
        publishingCompany
      }

      books.push(book)

      return book
    }
  }
}

module.exports = resolvers
