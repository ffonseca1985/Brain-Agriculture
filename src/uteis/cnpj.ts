
export const isCNPJValid = (cnpj: string): boolean => {

    cnpj = cnpj.replace(/[^\d]/g, '');

    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que é inválido para um CNPJ válido
    if (/^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    // Cálculo do primeiro dígito verificador
    let sum = 0;
    let multiplier = 2;
    for (let i = 11; i >= 0; i--) {
        sum += parseInt(cnpj.charAt(i)) * multiplier;
        multiplier = multiplier === 9 ? 2 : multiplier + 1;
    }
    let rest = sum % 11;
    if (rest < 2) {
        rest = 0;
    } else {
        rest = 11 - rest;
    }
    if (rest !== parseInt(cnpj.charAt(12))) {
        return false;
    }

    // Cálculo do segundo dígito verificador
    sum = 0;
    multiplier = 2;
    for (let i = 12; i >= 0; i--) {
        sum += parseInt(cnpj.charAt(i)) * multiplier;
        multiplier = multiplier === 9 ? 2 : multiplier + 1;
    }
    rest = sum % 11;
    if (rest < 2) {
        rest = 0;
    } else {
        rest = 11 - rest;
    }
    if (rest !== parseInt(cnpj.charAt(13))) {
        return false;
    }

    return true;
} 