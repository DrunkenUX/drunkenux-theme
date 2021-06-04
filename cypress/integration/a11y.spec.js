/// <reference types="cypress" />

context('Accessibility', () => {
    before(() => {
        cy.visit('https://drunkenux.local');
        cy.injectAxe();
    });

    describe('AXE test suite', () => {
        it('pass AXE test suite', () => {
            cy.checkA11y();
        });
    });
});
 