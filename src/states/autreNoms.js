import React from 'react';
import { Field } from 'formik';
import { RadioGroup } from 'formik-material-ui';
import {FormControlLabel, Box, Typography, Radio  } from '@material-ui/core';


export default function LayoutTextFields() {

  return (

    <Box>
          <Typography variant="h6">
            Voulez-vous entrer un autre nom ?
          </Typography>
          <Field component={RadioGroup} name="question">
            <FormControlLabel value="oui" control={<Radio />} label="Oui" />
            <FormControlLabel value="non" control={<Radio />} label="Non" />
            </Field>
     </Box>
)
};
