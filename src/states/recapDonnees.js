import React from 'react';
import { useFormikContext } from 'formik';

import {Box} from '@material-ui/core';

export default function LayoutTextFields() {

  const { values} = useFormikContext();

  return (
    <Box>
      <pre>
          {values}
      </pre>
    </Box>
  );
}
