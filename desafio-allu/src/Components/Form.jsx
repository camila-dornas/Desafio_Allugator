import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      dataCad: '',
      cargo:'',
      cpf: '',
      nomeCompleto:'',
      ufNasc: '',
      salario: '',
      status: '',
    }
    this.handleForm = this.handleForm.bind(this);
    this.buttonEvent = this.buttonEvent.bind(this);
  }

  handleForm(event) {
    this.setState({
      [event.target.name] : event.target.value,
    })
  }

  buttonEvent(event) {
    event.preventDefault();
    const { addEmployee } = this.props;
    addEmployee(this.state);
    console.log('funcionou')
  }

  render() {
    const { dataCad, cargo, cpf, nomeCompleto, ufNasc, salario, status } = this.state;
    return(
      <form className="addForm">
        <label htmlFor="date">
        Data de cadastro:
          <input type="text" id="date" name="dataCad" value={ dataCad } onChange={ this.handleForm}/>
        </label>
        <label htmlFor="cargo">
        Cargo:
          <input type="text" id="cargo" name="cargo" value={ cargo } onChange={ this.handleForm}/>
        </label>
        <label htmlFor="cpf">
        CPF:
          <input type="text" id="cpf" name="cpf" value={ cpf } onChange={ this.handleForm}/>
        </label>
        <label htmlFor="nome-completo">
        Nome completo:
          <input type="text" id="nome-completo" name="nomeCompleto" value={ nomeCompleto } onChange={ this.handleForm}/>
        </label>
        <label htmlFor="uf">
        UF de nascimento:
          <input type="text" id="uf" name="ufNasc" value={ ufNasc } onChange={ this.handleForm}/>
        </label>
        <label htmlFor="salario">
        Salário:
          <input type="text" id="salario" name="salario" value={ salario } onChange={ this.handleForm}/>
        </label>
        <label htmlFor="status">
        Status:
          <input type="text" id="status" name="status" value={ status } onChange={ this.handleForm}/>
        </label>
        <button onClick={ this.buttonEvent } type="submit">Adicionar</button>
      </form>
    );
  }
}

export default Form;
