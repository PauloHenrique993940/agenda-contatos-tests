/// <reference types="cypress"/>

describe('Testando Funcionalidades', () => {
    beforeEach(()=>{
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Adicionando Contatos', () => {
      cy.get('[type="text"]').type("Joao")
      cy.get('[type="email"]').type("joao@teste.com")
      cy.get('[type="tel"]').type("62 9 99999999")
      cy.get('.adicionar').click()
  
      cy.get('[type="text"]').type("Maria")
      cy.get('[type="email"]').type("maria@teste.com")
      cy.get('[type="tel"]').type("62 9 88888888")
      cy.get('.adicionar').click()
  
      cy.get('[type="text"]').type("Pedro")
      cy.get('[type="email"]').type("pedro@teste.com")
      cy.get('[type="tel"]').type("62 9 77777777")
      cy.get('.adicionar').click()
    })
  
    it('Alterando Contatos', () => {
      cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
      cy.get('[type="text"]').clear().type("Joao Barbosa")
      cy.get('.ckeKmo button.alterar').click()
  
      cy.wait(500);
      cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
      cy.get('[type="text"]').clear().type("Maria Fernanda")
      cy.get('.ckeKmo button.alterar').click()
  
      cy.wait(500);
      cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
      cy.get('[type="text"]').clear().type("Pedro Augusto")
      cy.get('.ckeKmo button.alterar').click()
    })
  
    it('Removendo um contato', () => {
      cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
    })
  })

