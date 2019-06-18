import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }   

    maisUM = () => {
        this.setState({ numero:this.state.numero + 1 })
   //     this.state.numero = this.state.numero + 1
    }
    menosUM = () => {
        this.setState({ numero:this.state.numero - 1 })
       }
       
     alterarNumero =(diferenca) => {
         this.setState({
             numero: this.state.numero + diferenca
         })
     }  

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementar10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar10</button>
            </div>
        )
    }
}

//Solução 01 -Bind
//constructor(props){
//    super(props)
//    this.maisUM = this.maisUM.bind
//}

//Solução 02 Função Arrow (onclick)
//<button onClick={() => this.maisUm()}>Incrementar</button>


//Solução 03 Função Arrow
//maisUM = () => {
  //  this.props.numero++
//    console.log(this)
//}
