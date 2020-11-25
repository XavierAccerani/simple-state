import React from 'react';
import { Field } from 'formik';
import { useFormikContext } from 'formik';
import { TextField } from 'formik-material-ui';
import { Box } from '@material-ui/core';



const DemanderNom = () => {

  const { values} = useFormikContext();

  return (

    <Box>
      <Field
            component={TextField}
            // name={`name`}
            name={`partners[${values.index}].name`}
            type="text"
            label="Entrez un nom"
          />
       </Box>
  );
}

export default DemanderNom;