import React from 'react'

const CompA  =props =>
    <h1>Primeiro diz: {props.valor}</h1>
const CompB  =props =>
    <h1>Segundo diz: {props.valor}</h1>

// poder exporta algo anonimo se utilizar palavra defaut, mas em default gera erro no codigo
// export default function(){
  //  return <p>teste</p>
//}

export { CompA,CompB }