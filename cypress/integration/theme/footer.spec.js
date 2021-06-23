/// <reference types="cypress" />

context('Template footer.php', () => {
    before(() => {
        cy.visit('https://' + Cypress.env('HOST'));
    });

    beforeEach(() => {
        cy.get('footer').as('templateFooter');
    });

    describe('Footer Features', () => {
        it('has a copyright statement', () => {
            cy.get('@templateFooter')
                .find('.copyright')
                .should('contain', '2018-20')
                .should('contain', 'Fienen, LLC');
        });
    });
});
 