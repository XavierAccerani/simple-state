import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FormikForm from './components/FormikForm';


const App = () => (
  <Container maxWidth="md">
    <Box my={4} width={1}>
      <Typography variant="h4" component="h1" gutterBottom>
        Flexbox test
      </Typography>
      <FormikForm />
    </Box>
  </Container>
);

export default App;
