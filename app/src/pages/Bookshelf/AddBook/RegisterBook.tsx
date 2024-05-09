import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { Box, Button, TextField, Typography } from '@mui/material'
import { CREATE_BOOK, LIST_BOOKS } from '../../../graphql/books'
import { FullScreenDialog } from '../../../components/Dialog'

export const RegisterBook = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const { handleSubmit, register, reset } = useForm()

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [
      {
        query: LIST_BOOKS
      }
    ]
  })

  return (
    <Box mt={3} textAlign="center">
      <Button sx={{ textTransform: 'none' }} onClick={() => setOpen(true)}>
        Cadastrar livro
      </Button>
      <FullScreenDialog open={open} onClose={handleClose}>
        <Box textAlign="center">
          <Typography mb={3} textAlign="start">
            Cadastro de livro
          </Typography>
          <form
            action="submit"
            onSubmit={handleSubmit(data => {
              createBook({
                variables: {
                  id: uuidv4(),
                  genre: data.genre,
                  title: data.title,
                  author: data.author,
                  synopsis: data.synopsis,
                  coverImageUrl: data.coverImageUrl,
                  publishingCompany: data.publishingCompany,
                  numberOfPages: parseInt(data.numberOfPages),
                  publishingYear: parseInt(data.publishingYear)
                }
              })
              reset()
              handleClose()
            })}
          >
            <TextField
              required
              fullWidth
              label="Título"
              sx={{ mb: 1 }}
              variant="outlined"
              {...register('title')}
            />
            <TextField
              required
              fullWidth
              label="Autor"
              sx={{ mb: 1 }}
              variant="outlined"
              {...register('author')}
            />
            <TextField
              required
              fullWidth
              sx={{ mb: 1 }}
              label="Editora"
              variant="outlined"
              {...register('publishingCompany')}
            />
            <TextField
              required
              fullWidth
              type="number"
              sx={{ mb: 1 }}
              variant="outlined"
              {...register('publishingYear')}
              label="Ano de publicação"
            />
            <TextField
              required
              fullWidth
              sx={{ mb: 1 }}
              label="Gênero"
              variant="outlined"
              {...register('genre')}
            />
            <TextField
              sx={{ mb: 1 }}
              required
              fullWidth
              type="number"
              variant="outlined"
              {...register('numberOfPages')}
              label="Número de páginas"
            />
            <TextField
              required
              fullWidth
              sx={{ mb: 1 }}
              label="Sinopse"
              variant="outlined"
              {...register('synopsis')}
            />
            <TextField
              required
              fullWidth
              sx={{ mb: 1 }}
              variant="outlined"
              label="Link da imagem"
              {...register('coverImageUrl')}
            />
            <Button sx={{ textTransform: 'none', mt: 2 }} type="submit">
              Cadastrar
            </Button>
          </form>
        </Box>
      </FullScreenDialog>
    </Box>
  )
}
