import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UpdateForm = (initialValues: {nomeProdutor: string, nomeFazenda: string, cidade: string, estado: string}) => {

  const validationSchema = Yup.object().shape({
    nomeProdutor: Yup.string().required('Nome do produtor é obrigatório'),
    nomeFazenda: Yup.string().required('Nome da fazenda é obrigatório'),
    cidade: Yup.string().required('Cidade é obrigatória'),
    estado: Yup.string().required('Estado é obrigatório'),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    // Call API or perform update logic here
    console.log(values);
    // Reset form after successful submission
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                as={TextField}
                label="Nome do Produtor"
                name="nomeProdutor"
                fullWidth
                error={touched.nomeProdutor && !!errors.nomeProdutor}
                helperText={touched.nomeProdutor && errors.nomeProdutor}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                label="Nome da Fazenda"
                name="nomeFazenda"
                fullWidth
                error={touched.nomeFazenda && !!errors.nomeFazenda}
                helperText={touched.nomeFazenda && errors.nomeFazenda}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                label="Cidade"
                name="cidade"
                fullWidth
                error={touched.cidade && !!errors.cidade}
                helperText={touched.cidade && errors.cidade}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                label="Estado"
                name="estado"
                fullWidth
                error={touched.estado && !!errors.estado}
                helperText={touched.estado && errors.estado}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Atualizar
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateForm;