import { BookStatus, ListUserBooks } from './UserBooks/interfaces'

export const filterBooksByStatus = (
  books: ListUserBooks[],
  status: BookStatus
) => {
  return books?.filter((book: ListUserBooks) => book.status === status)
}
