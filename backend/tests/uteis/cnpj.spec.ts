
import { isCNPJValid } from "../../src/uteis/validations/cnpj";

describe('CPF', () => {

    test('return false when cpf is invalid', () => {

        const invalidCnpj = '12345678910';
        const isValid = isCNPJValid(invalidCnpj);

        expect(isValid).toBe(false);
    })

    test('return true when cpf is invalid', () => {

        const validCpf = '53518040000196';
        const isValid = isCNPJValid(validCpf);

        expect(isValid).toBe(true);
    });
});