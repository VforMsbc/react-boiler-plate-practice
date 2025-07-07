import { Typography } from '@mui/material';
import { ITypographyProps } from './Typography.types';

const Typo: React.FC<ITypographyProps> = (props) => {
  const { label, variant, style, color, id } = props;
  return (
    <Typography
      variant={variant}
      color={color || 'grey.main'}
      sx={{ ...style }}
      id={id}
    >
      {label}
    </Typography>
  );
};

export default Typo;
