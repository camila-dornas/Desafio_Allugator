import React from "react";

class EmployeesList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      employees: props.employees,
    }
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(index) {
    const { employees } = this.state;
    const newEmployees = [...employees]
    newEmployees.splice(index, 1)

    this.setState({
        employees: newEmployees,
    })
}

  render() {
    const { estadoPai, handle } = this.props;
        const { buscar } = estadoPai;
        const { employees } = this.state;
    return(
      <div className='App'>
      <h3 className='Title'> Buscar Funcionários </h3>
      <div className="button-div">
          <button name='buscar' className='Button' onClick={handle}>Buscar</button>
          <input id='buscar-input' type='text' name='buscar-input' />
      </div>
      <p className="subtitle">Clique duas vezes para remover</p>
      <div className='List'>
          {
              employees.filter(({nomeCompleto, cpf, ufNasc, dataCad, cargo, status, salario}) => 
              nomeCompleto.includes(buscar) + cpf.includes(buscar) + ufNasc.includes(buscar) + dataCad.includes(buscar) + cargo.includes(buscar) + status.includes(buscar) + salario.includes(buscar)
              )
              .map((element, index) => <div onDoubleClick={() => this.handleRemove(index)} id='card' className='Card' key={ element.cpf }>
              { element.nomeCompleto } - {element.ufNasc}
              <br />
              CPF: { element.cpf }
              <br />
              Cargo: { element.cargo } - R${element.salario}
              <br />
              Cadastro: { element.dataCad }
              <br />
              Status: {element.status}
              </div>
              )
          }
      </div>
    </div>
    )
  }
}


export default EmployeesList;