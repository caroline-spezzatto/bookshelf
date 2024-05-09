import * as React from 'react'
import { Dialog, Slide, IconButton, Box } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'
import { FullScreenDialogProps } from './interfaces'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export const FullScreenDialog = ({
  open,
  onClose,
  children
}: FullScreenDialogProps) => {
  return (
    <Dialog
      fullScreen
      open={open}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          backgroundColor: '#242424',
          color: '#e1e1e1de'
        }
      }}
    >
      <Box maxWidth={800} display="Grid" alignSelf="center">
        <Box justifySelf="end" mt={2}>
          <IconButton color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box p={3}>{children}</Box>
      </Box>
    </Dialog>
  )
}
export { Dialog }
