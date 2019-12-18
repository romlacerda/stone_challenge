import React from 'react';
import renderer from 'react-test-renderer';
import Fact from '../components/Fact';

// FACTS (II) - Nem todos os fatos podem ter uma categoria
//associada. Nesse caso, um label UNCATEGORIZED
//deve ser associado à entrada na lista. Essa lógica de
//front-end deve ser testável.

// FACTS (II) - As entradas da lista podem variar muito com o
// tamanho do fato em si : para isso, você deve adotar
// dois tamanhos de fonte diferentes de acordo com o
// número de caracteres do Chuck Norris Fact. Use 80
// caracteres como critério de decisão. Essa lógica de
// front-end deve ser testável.

describe('Checar CSS da quantidade de caracteres', () => {
  test('snapshot renders', () => {
    const categories = ['DOG'];
    const valor = 'in brightest day in blackest night no evil shall escape my sight let those who worship evils might, beware my power, green lanterns light!';
    const valorMenor = 'Teste'

    const component = renderer.create(<Fact value={valor} categories={categories}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

