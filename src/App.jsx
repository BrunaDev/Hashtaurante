import { useState } from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import './App.css';

import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

export function App(){

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, setPaginaSelecionada] = useState(0);

  return <>
    <img src={Hashtaurante} alt="" className='capa'/>
    <Navegacao setPaginaSelecionada={setPaginaSelecionada}/>
    <div className='menu'>
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
    </div>
  </>
}