import { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { useMutation, useQuery } from '@apollo/client'
import {
  LIST_BOOKS,
  ADD_USER_BOOK,
  LIST_USER_BOOKS
} from '../../../graphql/books'
import { FullScreenDialog } from '../../../components/Dialog'
import { RegisterBook } from './RegisterBook'
import { Book } from '../UserBooks/interfaces'

export const AddBooks = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const { data } = useQuery(LIST_BOOKS, {
    skip: !open
  })
  const books: Book[] = data?.listBooks

  const [addUserBook] = useMutation(ADD_USER_BOOK, {
    refetchQueries: [
      {
        query: LIST_USER_BOOKS,
        variables: { userId: '123456789' }
      }
    ]
  })

  return (
    <>
      <Button
        variant="text"
        onClick={() => setOpen(true)}
        sx={{ alignSelf: 'center', mt: 3, textTransform: 'none' }}
      >
        Adicionar livro
      </Button>
      <FullScreenDialog open={open} onClose={handleClose}>
        <Grid container gap={2}>
          {books?.map(book => (
            <Grid item display="grid" key={book?.id}>
              <img
                width={80}
                height={120}
                alt={book?.title}
                src={book?.coverImageUrl}
                style={{ borderRadius: 14, cursor: 'pointer' }}
              />
              <Button
                variant="text"
                sx={{ textTransform: 'none' }}
                onClick={() => {
                  addUserBook({
                    variables: {
                      bookId: book?.id,
                      userId: '123456789',
                      status: 'TO_READ'
                    }
                  })
                  handleClose()
                }}
              >
                Quero ler
              </Button>
            </Grid>
          ))}
        </Grid>
        <RegisterBook />
      </FullScreenDialog>
    </>
  )
}
