import { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { UserBooksProps, ListUserBooks } from './interfaces'
import { BookDetail } from './BookDetail'

export const UserBooks = ({ books, label }: UserBooksProps) => {
  const [open, setOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<ListUserBooks>()

  const handleClickOpen = (bookId?: string) => {
    const selectedBook = books?.find(book => book?.book?.id === bookId)

    setSelectedBook({
      book: selectedBook?.book,
      status: selectedBook?.status
    })
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const totalPages = books?.reduce(
    (acc, { book }) => acc + (book?.numberOfPages ?? 0),
    0
  )

  if (books?.length === 0) {
    return (
      <Typography variant="body1" textAlign="center">
        Nenhum livro encontrado.
      </Typography>
    )
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography textAlign="left">
          {label} ({books?.length})
        </Typography>
        {label === 'Lidos' && (
          <Typography textAlign="left">Páginas lidas: {totalPages}</Typography>
        )}
      </Box>
      <Grid container gap={2}>
        {books?.map(({ book }) => (
          <Grid item key={book?.id} onClick={() => handleClickOpen(book?.id)}>
            <img
              width={80}
              height={120}
              alt={book?.title}
              src={book?.coverImageUrl}
              style={{ borderRadius: 14, cursor: 'pointer' }}
            />
          </Grid>
        ))}
      </Grid>
      <BookDetail
        open={open}
        handleClose={handleClose}
        selectedBook={selectedBook}
      />
    </Box>
  )
}
