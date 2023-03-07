import { memo, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { getAuth } from 'firebase/auth';
import { app } from '../firebase/index'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logIn, setUser } from '../redux/state/UserSlice';

const theme = createTheme();

export const AuthPage = memo(
  () => {
    const auth = getAuth(app);
    const { user } = useAppSelector(stste => stste.userInfo);
    const dispatch = useAppDispatch();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      dispatch(logIn())
    };

    useEffect(() => {
      auth.onAuthStateChanged(authorizedUser => {
        if (authorizedUser) {
          dispatch(setUser(authorizedUser));
        }
      })
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            height: 'calc(100vh - 65px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: 'translateY(-50%)'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src={user?.photoURL || ''}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                log in through Google
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  },
);