import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    nomeProdutor: Yup.string().required('Required'),
    nomeFazenda: Yup.string().required('Required'),
    cidade: Yup.string().required('Required'),
    estado: Yup.string().required('Required'),
});

const Create = () => {

    const formik = useFormik({
        initialValues: {
            nomeProdutor: '',
            nomeFazenda: '',
            cidade: '',
            estado: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                margin="normal"
                id="nomeProdutor"
                name="nomeProdutor"
                label="Nome do produtor"
                value={formik.values.nomeProdutor}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nomeProdutor && Boolean(formik.errors.nomeProdutor)}
                helperText={formik.touched.nomeProdutor && formik.errors.nomeProdutor}
            />
            <TextField
                fullWidth
                margin="normal"
                id="nomeFazenda"
                name="nomeFazenda"
                label="Nome da Fazenda"
                value={formik.values.nomeFazenda}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nomeFazenda && Boolean(formik.errors.nomeFazenda)}
                helperText={formik.touched.nomeFazenda && formik.errors.nomeFazenda}
            />
            <TextField
                fullWidth
                margin="normal"
                id="cidade"
                name="cidade"
                label="Cidade"
                value={formik.values.cidade}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.cidade && Boolean(formik.errors.cidade)}
                helperText={formik.touched.cidade && formik.errors.cidade}
            />
            <TextField
                fullWidth
                margin="normal"
                id="estado"
                name="estado"
                label="Estado"
                value={formik.values.estado}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.estado && Boolean(formik.errors.estado)}
                helperText={formik.touched.estado && formik.errors.estado}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default Create;
