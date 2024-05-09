import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Tab, Tabs } from '@material-ui/core'
import { Box, Stack, Typography } from '@mui/material'
import { LIST_USER_BOOKS } from '../../graphql/books'
import { UserBooks } from './UserBooks'
import { filterBooksByStatus } from './utils'
import { BookStatus } from './UserBooks/interfaces'
import { AddBooks } from './AddBook'

export const Bookshelf = () => {
  const [tabValue, setTabValue] = useState(0)

  const { data } = useQuery(LIST_USER_BOOKS, {
    variables: {
      userId: '123456789'
    }
  })

  const books = data?.listUserBooks
  const readStatus = filterBooksByStatus(books, BookStatus.Read)
  const readingStatus = filterBooksByStatus(books, BookStatus.Reading)
  const toReadStatus = filterBooksByStatus(books, BookStatus.ToRead)
  const labels = ['Quero ler', 'Lendo', 'Lidos']

  const bookshelf = [
    { label: 'Quero ler', books: toReadStatus },
    { label: 'Lendo', books: readingStatus },
    { label: 'Lidos', books: readStatus }
  ]

  const bookshelfByStatus = bookshelf[tabValue]

  return (
    <Stack>
      <Typography variant="h4" mb={3}>
        Minha estante
      </Typography>
      <Box mb={4} display="grid" justifyContent="center">
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          onChange={(_: unknown, newValue: number) => setTabValue(newValue)}
        >
          {labels.map(label => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>
      <UserBooks books={bookshelfByStatus.books} label={bookshelfByStatus.label} />
      {tabValue === 0 && <AddBooks />}
    </Stack>
  )
}
