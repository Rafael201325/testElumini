/// <reference types="cypress" />

describe('Test Elumini', () => {
  it('Go to "Onde usar meu cartão VR"', () => {
    // 
      cy.visit('https://www.vr.com.br')
      //Endereço do site cliente
      cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
      //Aceitar termos de uso
      cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
      //Botão "Para você"
      cy.get('.vr-hero__actions > .vr-button--negative').click()
      //Botão "Onde usar meu cartão"
      cy.get('#map').should('be.visible')
      //Verificar se o map foi exibido 
  });
  // it('Acessar seção "Onde usar meu cartão VR"', () => {});

  
  });