import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material';
import { DialogTransition } from './DialogTransition';
import { SimpleDialogProps } from './SimpleDialog.types';

const SimpleDialog = ({
  open,
  handleClose,
  children,
  title,
  style,
  contentStyle,
  maxWidth,
  showTitleWithCross = true,
}: SimpleDialogProps) => {
  return (
    <Dialog
      open={open}
      id={`dialog-box-${title?.toLowerCase().replace(/\s+/g, '-')}`}
      keepMounted
      maxWidth={maxWidth ?? 'lg'}
      onClose={handleClose}
      PaperComponent={Paper}
      TransitionComponent={DialogTransition}
      PaperProps={{
        sx: (theme) => ({
          borderRadius: '5px',
          minWidth: '50%',
          minHeight: '400px',
          background: '#FFF',
          [theme.breakpoints.down('sm')]: {
            minWidth: 'auto',
          },
          ...style,
        }),
      }}
      aria-describedby="alert-dialog-slide-description"
      sx={{ backdropFilter: 'blur(1px)' }}
    >
      {showTitleWithCross && (
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          typography={'h4'}
          color={'primary'}
        >
          {title ?? ''}
        </DialogTitle>
      )}

      <DialogContent style={{ height: 'auto', ...contentStyle }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export { SimpleDialog };
