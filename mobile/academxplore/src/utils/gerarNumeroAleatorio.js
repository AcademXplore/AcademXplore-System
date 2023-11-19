export const gerarNumeroAleatorio = () => {
  const numeroAleatorio = Math.random();

  const numeroEntreZeroE255 = Math.floor(numeroAleatorio * 256);

  return numeroEntreZeroE255;
};