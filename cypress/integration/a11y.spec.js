/// <reference types="cypress" />

context('Accessibility', () => {
    before(() => {
        
    });

    describe('AXE test suite', () => {
        it('homepage passes AXE test suite', () => {
            cy.visit('https://drunkenux.local');
            cy.injectAxe();
            cy.checkA11y();
        });

        it('shownotes pass AXE test Suite', () => {
            cy.get('#latest-episode .title-group a')
            .click()
            .injectAxe()
            .checkA11y();
        });
    });
});
 