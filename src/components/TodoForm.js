import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      titulo: '',
      responsavel: '',
      descricao: '',
      prioridade: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      titulo: '',
      responsavel: '',
      descricao: '',
      prioridade: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
          <img src="http://portal.utfpr.edu.br/icones/cabecalho/logo-utfpr/@@images/image.png" class="card-img-top" alt="..."></img>
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              value={this.state.titulo}
              onChange={this.handleInputChange}
              placeholder="titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsavel"
              className="form-control"
              value={this.state.responsavel}
              onChange={this.handleInputChange}
              placeholder="responsavel"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descricao"
              className="form-control"
              value={this.state.descricao}
              onChange={this.handleInputChange}
              placeholder="descricao"
              />
          </div>
          <div className="form-group">
            <select
                name="prioridade"
                className="form-control"
                value={this.state.prioridade}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;