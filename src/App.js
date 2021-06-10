import React from "react";
import ReactDOM from "react-dom";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      telefone: null,
      descricao: ""
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let x = [];
    var xMaxValues = 4;
    let email = this.state.email;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let tel = this.state.telefone;
    let valDescricao = this.state.descricao;
    let nome = this.state.username;

    if (nome === "" || nome === null) {
      alert("O campo NOME está vazio");
      return;
    } else if (!String(nome)) {
      alert("O campo só permite letras.");
    } else {
      x[0] = nome;
    }

    if (re.test(email)) {
      x[2] = email;
    } else if (email === "" || email === null) {
      alert("O campo EMAIL está vazio");
      return;
    } else {
      alert("O e-mail não é válido");
    }

    if (tel === "" || tel === null) {
      alert("O campo TELEFONE está vazio");
      return;
    } else if (!Number(tel)) {
      alert("O campo TELEFONE deve conter apenas numeros");
    } else {
      x[1] = tel;
    }

    if (re.test(email)) {
      x[2] = email;
    } else if (email === "" || email === null) {
      alert("O campo EMAIL está vazio");
      return;
    } else {
      alert("O e-mail não é válido");
    }

    if (valDescricao === "" || valDescricao === null) {
      alert("O campo DESCRIÇÃO está vazio");
      return;
    } else {
      x[3] = valDescricao;
    }

    if (x.length === xMaxValues) {
      const listItems = x.map((string) => <li>{string}</li>);
      ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("root"));
    } else {
      alert("Faltam campos a serem preenchidos");
    }
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1> Formulário Cadastro. </h1>
        <h2>Olá {this.state.username}</h2>
        <p>Digite seu nome:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Digite seu email:</p>
        <input type="text" name="email" onChange={this.myChangeHandler} />
        <p>Digite seu telefone:</p>
        <input
          type="text"
          name="telefone"
          maxLength="9"
          minLength="9"
          onChange={this.myChangeHandler}
        />
        <p>Digite sua Descricao:</p>
        <textarea
          type="text"
          name="descricao"
          onChange={this.myChangeHandler}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
export default MyForm;
