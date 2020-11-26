import React from 'react';
import { Field } from 'formik';
import { useFormikContext } from 'formik';
import { TextField } from 'formik-material-ui';
import { Box } from '@material-ui/core';



const DemanderEpoux = () => {

  const { values} = useFormikContext();

  return (

    <Box>
      <Field
            component={TextField}
            // name={`name`}
            name={`partners[${values.index}].spouse`}
            type="text"
            label="Entrez le nom de l'époux"
          />
       </Box>
  );
}

export default DemanderEpoux;