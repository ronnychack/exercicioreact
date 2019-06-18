import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente' 
//import { CompA,CompB } from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos';
// import FamiliaSilvia from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
//import Pai from './componentes/Pai'
//import ComponenteClasse from './componentes/ComponenteClasse'

import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Contador numeroInicial={100} />
        {/*<ComponenteClasse valor="Sou um componente de classe"/>*/}
        {/*<Pai />*/}
        {/* <ComponenteComFuncao />*/}
        {/* <Familia sobrenome="Pereira">
                <Membro nome="Andre" />
                <Membro nome="Mariana"/>
            </Familia>  */}
        {/* <FamiliaSilvia /> */}
        {/*<MultiElementos></MultiElementos>*/}
        {/* <CompA valor="Olá eu sou A"/>
        <CompB valor="Olá eu sou B"/>*/}
        {/*<PrimeiroComponente valor="Bom dia!" aBcD={123} /> */}
    </div>
, elemento)


//ReactDOM.render(<h1>Olá React</h1>, elemento)