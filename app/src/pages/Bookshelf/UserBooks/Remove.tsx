import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Box, Button, Chip, Typography } from '@mui/material'
import { FullScreenDialog } from '../../../components/Dialog'
import { DELETE_USER_BOOK, LIST_USER_BOOKS } from '../../../graphql/books'
import { RemoveProps } from './interfaces'

export const Remove = ({ bookId }: RemoveProps) => {
  const [open, setOpen] = useState(false)

  const [deleteUserBook] = useMutation(DELETE_USER_BOOK, {
    refetchQueries: [
      {
        query: LIST_USER_BOOKS,
        variables: { userId: '123456789' }
      }
    ]
  })

  const handleDeleteUserBook = () => {
    deleteUserBook({
      variables: {
        bookId,
        userId: '123456789'
      }
    })
  }

  return (
    <Box textAlign="center">
      <Chip
        color="error"
        component="button"
        variant="outlined"
        label="Remover da estante"
        onClick={() => setOpen(true)}
      />
      <FullScreenDialog open={open} onClose={() => setOpen(false)}>
        <Box textAlign="center">
          <Typography mb={6}>
            Tem certeza que deseja remove-lo da sua estante?
          </Typography>
          <Button
            onClick={() => {
              handleDeleteUserBook()
              setOpen(false)
            }}
          >
            Sim
          </Button>
          <Button onClick={() => setOpen(false)}>Não</Button>
        </Box>
      </FullScreenDialog>
    </Box>
  )
}
