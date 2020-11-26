import React from 'react';
import { Field } from 'formik';
import { useFormikContext } from 'formik';
import { TextField } from 'formik-material-ui';
// import { Box } from '@material-ui/core';

// ompport pour l'ajout de la checkbox
import {
  FormControlLabel,
  Radio,
  Box,
  Typography,
} from '@material-ui/core';
import { RadioGroup } from 'formik-material-ui';
// fin ajout de la checkbox


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
       {/* </Box> */}

       <Typography variant="h6">
         Y a t-il un mariage ?
       </Typography>

       <Field
         component={RadioGroup}
         defaultValue="non"
        //  name={`partners[${values.index}].mariage`} 
         name= "mariage"
       >
         <FormControlLabel value="oui" control={<Radio />} label="Oui" />
         <FormControlLabel value="non" control={<Radio />} label="Non" />
       </Field>
     </Box>
  );
}

export default DemanderNom;