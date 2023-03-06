import { FC, memo } from 'react';
import Typography from '@mui/material/Typography';

export const NotFound: FC = memo(
  () => {
    return (
      <Typography
        variant="h3"
        component="h2"
        sx={{
          textAlign: 'center'
        }}
      >
        the page is not Found
      </Typography>
    );
  },
);
