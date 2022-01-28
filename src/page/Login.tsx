import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth={false}>
      <Box height="100vh" textAlign="center">
        <Grid container spacing={3} justifyContent={"center"} alignItems={"center"}>
          <Grid item xs="auto">
            <Typography variant="h5" component="h1" gutterBottom>
              Log in via Github
            </Typography>
            <Link
              href={`https://github.com/login/oauth/authorize?client_id=b1bd2dfb1d172d1f1589`}
              color="textPrimary"
              data-testid="login-link"
              aria-label="Login Link"
            >
              {/* <GitHubIcon fontSize="large" /> */}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Login;
