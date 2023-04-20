/// <reference types="cypress" />

describe('Test Elumini', () => {
    it('Acessar "Onde usar meu cartão VR"', () => {
      // 
        cy.visit('https://www.vr.com.br')
        //test address
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
        //Accept terms of use
        cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
        //Button "Para você"
        cy.get('.vr-hero__actions > .vr-button--negative').click()
        //Button "Onde usar meu cartão"
        cy.get('#map').should('be.visible')
        //Check if the map is displayed 
    });
    // it('Acessar seção "Onde usar meu cartão VR"', () => {});
  
    
    })