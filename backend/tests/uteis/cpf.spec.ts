
import { isCPFValid } from "../../src/uteis/validations/cpf";

describe('CPF', () => {

    it('return false when cpf is invalid', () => {

        const invalidCpf = '12345678910';
        const isValid = isCPFValid(invalidCpf);

        expect(isValid).toBe(false);
    })

    it('return true when cpf is invalid', () => {

        const validCpf = '51871850207';
        const isValid = isCPFValid(validCpf);

        expect(isValid).toBe(true);
    });
});