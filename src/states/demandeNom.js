import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Box } from '@material-ui/core';



export default function LayoutTextFields() {

  return (

    <Box>
      <Field
            component={TextField}
            name="name"
            type="text"
            label="Entrez un nom"
          />
       </Box>
  );
}
