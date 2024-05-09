export enum BookStatus {
  Read = 'READ',
  ToRead = 'TO_READ',
  Reading = 'READING'
}

export interface Book {
  id: string
  title: string
  genre: string
  author: string
  synopsis: string
  coverImageUrl: string
  numberOfPages: number
  publishingYear: number
  publishingCompany: string
}

export interface ListUserBooks {
  book?: Book
  status?: BookStatus
}

export interface UserBooksProps {
  label: string
  books: ListUserBooks[]
}

export interface BookDetailProps {
  open: boolean
  handleClose: () => void
  selectedBook?: ListUserBooks
}

export interface UpdateStatusProps {
  bookId?: string
  status?: BookStatus
}

export interface RemoveProps {
  bookId?: string
}
