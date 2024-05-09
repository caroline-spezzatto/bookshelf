import { Box, Typography } from '@mui/material'
import { FullScreenDialog } from '../../../components/Dialog'
import { BookDetailProps } from '../UserBooks/interfaces'

export const BookDetail = ({
  open,
  handleClose,
  selectedBook
}: BookDetailProps) => {
  const { book } = selectedBook || {}

  return (
    <FullScreenDialog open={open} onClose={handleClose}>
      <Box textAlign="center">
        <img
          width={200}
          src={book?.coverImageUrl}
          alt={book?.title}
          style={{ borderRadius: 14 }}
        />
        <Typography variant="h4" mt={2}>
          {book?.title}
        </Typography>
        <Typography variant="h6" mb={2}>
          {book?.author}
        </Typography>
        <Typography variant="body1">
          {book?.publishingCompany} | {book?.publishingYear}
        </Typography>
        <Typography variant="body1">{book?.numberOfPages} páginas</Typography>
      </Box>
      <Box>
        <Typography variant="body1" mt={2}>
          {book?.synopsis}
        </Typography>
      </Box>
    </FullScreenDialog>
  )
}
