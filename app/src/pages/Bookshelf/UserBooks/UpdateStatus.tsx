import { useMutation } from '@apollo/client'
import { Box, Chip, Typography } from '@mui/material'
import {
  LIST_USER_BOOKS,
  UPDATE_USER_BOOK_STATUS
} from '../../../graphql/books'
import { BookStatus, UpdateStatusProps } from './interfaces'
import { useState } from 'react'

export const UpdateStatus = ({ bookId, status }: UpdateStatusProps) => {
  const [selectStatus, setSelectStatus] = useState<BookStatus>(
    status || BookStatus.Read
  )
  const [updateUserBookStatus] = useMutation(UPDATE_USER_BOOK_STATUS, {
    refetchQueries: [
      {
        query: LIST_USER_BOOKS,
        variables: { userId: '123456789' }
      }
    ]
  })

  const handleUpdateUserBookStatus = (status: BookStatus) => {
    updateUserBookStatus({
      variables: {
        userId: '123456789',
        bookId,
        status
      }
    })
    setSelectStatus(status)
  }

  const bookStatus = [
    { status: BookStatus.ToRead, label: 'Quero ler' },
    { status: BookStatus.Reading, label: 'Lendo' },
    { status: BookStatus.Read, label: 'Lido' }
  ]

  const variantStatus = (bookStatus: BookStatus) =>
    bookStatus === selectStatus ? 'filled' : 'outlined'

  return (
    <Box mb={4}>
      <Typography marginY={2}>Status da sua leitura</Typography>
      <Box>
        {bookStatus.map(({ status, label }) => (
          <Box marginRight={2} display="inline-flex">
            <Chip
              key={status}
              label={label}
              color="primary"
              variant={variantStatus(status)}
              onClick={() => handleUpdateUserBookStatus(status)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
