const funcs = {

    // SEARCH (III) - Teste 1 - Elementos Repetidos
    func1: (a) => {
        let array = ['cat', 'dog', 'horse'];

        const newArray = array.filter((v, i) => v !== a);

        newArray.push(a);
        array = newArray;
        return array.filter((item) => item == a).length;
    },

    // SEARCH (III) - Teste 2 - Ordem do Array de Últimas pesquisas
    func2: (a) => {
        const array = ['star wars', 'github', 'trump', 'dumb'];
        array.unshift(a);
        return array.indexOf(a);
    },

    // SEARCH (II) - Dentre as categorias pré-carregadas
    // disponíveis, 8 delas são escolhidas ao acaso
    // para formar as sugestões de busca. Essa
    // lógica de front-end deve ser testável.

    func3: () => {
        const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const shuffled = array.sort(() => 0.5 - Math.random());
        const choices = shuffled.slice(0, 8);
        return choices.toString() !== array.toString() && choices.length === 8;
    },
};

describe('funcao 1', () => {
    it('Deve retornar apenas 1 de length para o elemento adicionado', () => {
        expect(funcs.func1('cat')).toBe(1);
    });
});

describe('funcao 2', () => {
    it('Deve retornar a posição 0 pro elemento novo de pesquisa', () => {
        expect(funcs.func2('the batman')).toBe(0);
    });
});

describe('funcao 3', () => {
    it('Deve retornar 8 elementos aleatórios', () => {
        const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        expect(funcs.func3()).toBe(true);
    });
});
