import React from 'react';

import { Formik, Form } from 'formik';

import Steps from './Steps';

const FormikForm = () => (
    <Formik
    initialValues={{
      partners: [],
      question: '',
    }}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
  >
    <Form>
<Steps />
</Form>
</Formik>
);


export default FormikForm;

