export const cpfIsInvalid = (cpf) => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, "");

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digito1 = 11 - (soma % 11);
  if (digito1 >= 10) {
    digito1 = 0;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let digito2 = 11 - (soma % 11);
  if (digito2 >= 10) {
    digito2 = 0;
  }

  // Verifica se os dígitos verificadores estão corretos
  if (
    parseInt(cpf.charAt(9)) === digito1 &&
    parseInt(cpf.charAt(10)) === digito2
  ) {
    return true;
  } else {
    return false;
  }
};
