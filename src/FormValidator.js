import validador from 'validator';

class FormValidator {
  constructor(validacao) {
    this.validacao = validacao;
  }

  valida(state) {
    const campoValor = state[this.validacao.campo.toString()];
    const metodoValidacao = validador[this.validacao.metodo];

    if (metodoValidacao(campoValor, [], state)) {
      console.log("Formulario invalido");
      return false;
    }
    console.log("Formulario Valido")
    return true;
  }
}
export default FormValidator;