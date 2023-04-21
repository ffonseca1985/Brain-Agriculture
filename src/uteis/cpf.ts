

export const isCPFValid = (cpf: string): boolean => {

    cpf = cpf.replace(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que é inválido para um CPF válido
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Cálculo do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) {
        rest = 0;
    }
    if (rest !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Cálculo do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) {
        rest = 0;
    }
    if (rest !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
} 