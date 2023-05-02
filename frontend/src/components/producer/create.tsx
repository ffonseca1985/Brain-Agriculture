import { TextField, Button, Select, MenuItem, OutlinedInput } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Producer, ProducerType } from './services/types';
import { create } from './services/producer';
import { useEffect, useState } from 'react';
import React from 'react';
import { isCPFValid } from '../../uteis/cpf';
import { isCNPJValid } from '../../uteis/cnpj';
import { getCulture } from './services/cultures';
import { getState } from './services/states';
import { addItens, updateItem } from "../../store/producer/produceSlice"
import { useDispatch } from 'react-redux';
import useProducer from '../../hooks/producerHook';

const initialState: Producer = {
    nomeProdutor: '',
    nomeFazenda: '',
    cidade: '',
    estado: 'Acre',
    id: '',
    culturas: ["Soja"],
    areaTotalAgricultavel: 0,
    areaTotalVegetacao: 0,
    tipo: ProducerType.Phisical
};

const Create = () => {

    const dispath = useDispatch();
    const [producerUpdating] = useProducer<Producer | null>(null);

    const validationSchema = Yup.object({

        id: Yup.string().required().test('customValidation', 'Document invalid', function (value) {

            var element = formik.values.tipo;

            if (element === ProducerType.Phisical) {
                return isCPFValid(value);
            }

            return isCNPJValid(value);

        }),
        nomeProdutor: Yup.string().required('Required'),
        nomeFazenda: Yup.string().required('Required'),
        cidade: Yup.string().required('Required'),
        areaTotalAgricultavel: Yup.number().positive('Value must be greater than zero')
                                           .moreThan(0, 'Value must be greater than zero'),
        areaTotalVegetacao: Yup.number().positive('Value must be greater than zero')
                                           .moreThan(0, 'Value must be greater than zero'),                                   
        estado: Yup.string().required('Required'),
        tipo: Yup.number().required("Required")
    });

    const [creating, setCreating] = useState<boolean>(false);
    const [cultures, setCultures] = useState<Array<string>>([]);
    const [states, setState] = useState<Array<string>>([]);

    useEffect(() => {

        if (producerUpdating){
            formik.setFieldValue("nomeProdutor", producerUpdating.nomeProdutor);
            formik.setFieldValue("nomeFazenda", producerUpdating.nomeFazenda);
            formik.setFieldValue("cidade", producerUpdating.cidade);
            formik.setFieldValue("estado", producerUpdating.estado);
            formik.setFieldValue("id", producerUpdating.id);
            formik.setFieldValue("culturas", producerUpdating.culturas);
            formik.setFieldValue("areaTotalAgricultavel", producerUpdating.areaTotalAgricultavel);
            formik.setFieldValue("areaTotalVegetacao", producerUpdating.areaTotalVegetacao);
            formik.setFieldValue("tipo", producerUpdating.tipo);
        }

    }, [producerUpdating])

    useEffect(() => {

        (async () => {
            const result = await getCulture();
            setCultures(result);
        })();

    }, []);

    useEffect(() => {

        (async () => {
            const result = await getState();
            setState(result)
        })();

    }, []);

    const formik = useFormik({
        initialValues: initialState,
        validationSchema,
        onSubmit: async (producer: Producer) => {
            try {

                setCreating(true);
                await create(producer);
                
                if(producerUpdating) {   
                    dispath(updateItem(producer));
                }
                else{
                    dispath(addItens(producer));
                }

                alert("salvo produtor com sucesso");
                formik.resetForm();

            } catch (error: any) {
                alert("Erro ao salvar produtor");
            }
            finally {
                setCreating(false);
            }
        }
    });

    return (
        <React.Fragment>
            <h3 className='text-primary text-uppercase'>Cadastro De Produtor</h3>
            <form onSubmit={formik.handleSubmit}>
                <Select
                    fullWidth
                    label="Tipo"
                    value={formik.values.tipo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="tipo"
                    variant="standard">
                    <MenuItem key={ProducerType.Phisical}
                        value={ProducerType.Phisical}>
                        Pessoa Fisica

                    </MenuItem>
                    <MenuItem key={ProducerType.Legal}
                        value={ProducerType.Legal}>
                        Pessoa Juridica

                    </MenuItem>
                </Select>
                <TextField
                    fullWidth
                    margin="normal"
                    id="id"
                    name="id"
                    label="CPF/CNPJ"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.id && Boolean(formik.errors.id)}
                    helperText={formik.touched.id && formik.errors.id}
                />
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
                    id="areaTotalAgricultavel"
                    name="areaTotalAgricultavel"
                    label="area Total Agricultavel"
                    value={formik.values.areaTotalAgricultavel}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.areaTotalAgricultavel && Boolean(formik.errors.areaTotalAgricultavel)}
                    helperText={formik.touched.areaTotalAgricultavel && formik.errors.areaTotalAgricultavel}
                />
                
                <TextField
                    fullWidth
                    margin="normal"
                    id="areaTotalVegetacao"
                    name="areaTotalVegetacao"
                    label="area Total Vegetacaol"
                    value={formik.values.areaTotalVegetacao}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.areaTotalVegetacao && Boolean(formik.errors.areaTotalVegetacao)}
                    helperText={formik.touched.areaTotalVegetacao && formik.errors.areaTotalVegetacao}
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
                <Select
                    fullWidth
                    label="culturas"
                    multiple
                    input={<OutlinedInput label={"culturas"} />}
                    value={formik.values.culturas}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="culturas"
                    variant="standard"
                    error={formik.touched.culturas && Boolean(formik.errors.culturas)}>
                    {
                        cultures?.map((x, key) =>
                            <MenuItem key={key}
                                value={x}> {x}
                            </MenuItem>)
                    }
                </Select>

                <Select
                    fullWidth
                    className='mt-2'
                    label="Estado"
                    input={<OutlinedInput label={"Estado"} />}
                    value={formik.values.estado}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="estado"
                    variant="standard"
                    error={formik.touched.estado && Boolean(formik.errors.estado)}>
                    {
                        states?.map((x, key) =>
                            <MenuItem key={key}
                                value={x}>
                                {x}

                            </MenuItem>)
                    }
                </Select>

                <Button type="submit" fullWidth className='mt-3' variant="contained" color="primary">
                    {creating ? "PROCESSANDO" : "SALVAR"}
                </Button>
            </form>
        </React.Fragment>
    );
};

export default Create;
