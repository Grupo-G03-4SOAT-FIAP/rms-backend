import { CPFInvalidoErro } from '../exceptions/cliente.exception';

export class CPF {
  private readonly value: string;

  constructor(valor: string) {
    if (valor) {
      if (!this.isValidCPF(valor)) {
        throw new CPFInvalidoErro('CPF inválido');
      }
    }
    this.value = valor;
  }

  public getValue(): string {
    return this.value;
  }

  private isValidCPF(cpf: string): boolean {
    function isValidLength(cpf: string) {
      return cpf.length !== 11;
    }

    function allDigitsTheSame(cpf: string) {
      return cpf.split('').every((c) => c === cpf[0]);
    }

    function removeNonDigits(cpf: string) {
      return cpf.replace(/\D/g, '');
    }

    function calculateDigit(cpf: string, factor: number) {
      let total = 0;
      for (const digit of cpf) {
        if (factor > 1) total += parseInt(digit) * factor--;
      }
      const rest = total % 11;
      return rest < 2 ? 0 : 11 - rest;
    }

    function validate(cpf: string) {
      cpf = removeNonDigits(cpf);
      if (isValidLength(cpf)) return false;
      if (allDigitsTheSame(cpf)) return false;
      const dg1 = calculateDigit(cpf, 10);
      const dg2 = calculateDigit(cpf, 11);
      const actualCheckDigit = cpf.slice(9);
      const calculatedCheckDigit = `${dg1}${dg2}`;
      return actualCheckDigit === calculatedCheckDigit;
    }

    return validate(cpf);
  }
}
