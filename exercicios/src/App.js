import React from 'react'
import { SafeAreaView , StyleSheet } from 'react-native'


import Mega from './components/mega/Mega'

//import FlexBoxV4 from './components/layout/FlexBoxV4'
//import FlexBoxV3 from './components/layout/FlexBoxV3'
//import FlexBoxV2 from './components/layout/FlexBoxV2'
//import FlexBoxV1 from './components/layout/FlexBoxV1'
//import Quadrado from './components/layout/Quadrado'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import UsuarioLogado from './components/UsuarioLogado'
//import Pai from './components/relacao/Pai'
//import Filho from './components/relacao/Filho'
//import ParImpar from './components/ParImpar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Aleatorio from './components/Aleatorio'
//mport Titulo from './components/Titulo'
//import MinMax from './components/MinMax'
//import CompPadrao, { Comp1, Comp2} from './components/Multi'
//import Primeiro from './components/Primeiro'


export default () => (
    <SafeAreaView style={style.App}>

        <Mega />


        {/*<Contador inicial={100} passo={13}/>
        <FlexBoxV4 />  


        <FlexBoxV3 />  
        <FlexBoxV2 />  
        <FlexBoxV1 />
        <Quadrado cor='#ff801a' />        
        <Quadrado cor='#50d1f6' />
        <Quadrado cor='#dd22c1' />
        <Quadrado cor='#8312ed' />        
        <Quadrado cor='#36c9a7' />
        <DigiteSeuNome />
        <UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@gui.com'} }/>
        <UsuarioLogado usuario={ {nome: 'Paulo', email: ''} }/>
        <Pai>
            <Filho nome="Bia" sobrenome="Arruda" />
            <Filho nome="Carlos" sobrenome="Arruda" />
        </Pai>
        <Pai>
            <Filho nome="Ana" sobrenome="Silva" />
            <Filho nome="Julia" sobrenome="Silva" />
        </Pai>
        <ContadorV2 />
        <Pai />
        <Contador />
     <Botao />

        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro de Produto" />
        
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        
        <MinMax min={3} max={10}/>

        <MinMax min={1} max={50}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})