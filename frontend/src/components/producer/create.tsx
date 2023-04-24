import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Producer } from './services/types';
import { create } from './services';
import { useState } from 'react';
import React from 'react';

const validationSchema = Yup.object({
    nomeProdutor: Yup.string().required('Required'),
    nomeFazenda: Yup.string().required('Required'),
    cidade: Yup.string().required('Required'),
    estado: Yup.string().required('Required'),
});

const Create = () => {

    const [load, setLoad] = useState<boolean>(false);

    const initialValue: Producer = {
        nomeProdutor: '',
        nomeFazenda: '',
        cidade: '',
        estado: '',
        id: '',
        areaTotalAgricultavel: 0,
        areaTotalVegetacao: 0,
        tipo: 1
    };

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema,
        onSubmit: async (producer: Producer) => {
            try {
                setLoad(true);
                await create(producer);

                alert("salvo produtor com sucesso");
            } catch (error: any) {

                alert("Erro ao salvar produtor");
                setLoad(true);
            }
            finally {
                setLoad(false);
            }
        }
    });

    return (
        <React.Fragment>
            <h3 className='text-primary text-uppercase'>Cadastro De Produtor</h3>
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
                    {load ? "PROCESSANDO" : "SALVAR"}
                </Button>
            </form>
        </React.Fragment>
    );
};

export default Create;
