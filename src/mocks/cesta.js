import logo from '../../assets/img/logo.png'

import tomate from '../../assets/img/frutas/Tomate.png'
import brocolis from '../../assets/img/frutas/Brócolis.png'
import batata from '../../assets/img/frutas/Batata.png'
import pepino from '../../assets/img/frutas/Pepino.png'
import abobora from '../../assets/img/frutas/Abóbora.png'

const cesta = {
  topo: {
    titulo: 'Detalhe da cesta'
  },
  detalhes: {
    nome: 'Cesta de Verduras',
    logoFazenda: logo,
    nomeFazenda: 'Jenny Jack Farm',
    descricao:
      'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
    preco: 'R$ 40,00',
    botao: 'Comprar'
  },
  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: 'Tomate',
        imagem: tomate
      },
      {
        nome: 'Brócolis',
        imagem: brocolis
      },
      {
        nome: 'Batata',
        imagem: batata
      },
      {
        nome: 'Pepino',
        imagem: pepino
      },
      {
        nome: 'Abóbora',
        imagem: abobora
      }
    ]
  }
}

export default cesta
