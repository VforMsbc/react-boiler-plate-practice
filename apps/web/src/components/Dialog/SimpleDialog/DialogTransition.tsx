import { Slide } from '@mui/material';
import { ReactElement, Ref, forwardRef } from 'react';
import { TransitionProps } from 'react-transition-group/Transition';

export const DialogTransition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
