/*Referência para o editor de texto reconhecer a sintaxe do Cypress*/
/// <reference types="cypress"/>

/* it() representa o escopo de um teste, sendo reconhecido como um teste individual. 
    o decribe() descreve um grupo de testes*/
it('Um teste externo... ', () => {

})

describe('Agrupador de testes... ', () => {
    describe('Podendo agrupar grupos dentro do grupo raiz.', () => {
        it('Um teste duas pastas adentro da raiz', () => {
            
        })
    })
    describe('Podendo agrupar grupos dentro do grupo raiz.', () => {
        it('Um teste duas pastas adentro da raiz', () => {
            
        })
        it('Quantos testes quiser dentro de cada pasta', () => {
            
        })
    })

    it('E ainda realizar um teste dentro do grupo raiz', () => {

    })
})

it.skip('Um teste duas pastas adentro da raiz', () => {
            /*.skip para pular o teste*/
})
it/*.only*/('Um teste duas pastas adentro da raiz', () => {
            /*.only para ser o único teste executado se houverem
                dois testes com .only, o último será executado*/
})