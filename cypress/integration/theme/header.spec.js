/// <reference types="cypress" />

context('Template header.php', () => {
    before(() => {
        cy.visit('https://drunkenux.local');
    });

    beforeEach(() => {
        cy.get('header').as('templateHeader');
    });

    describe('Header Features', () => {
        it('has a meta title', () => {
            cy.get('title')
                .should('contain', 'The Drunken UX Podcast');
        });

        it('has a logo', () => {
            cy.get('@templateHeader')
                .find('#logo')
                .should('exist')
                .should('have.css', 'background-image', 'url("https://drunkenux.local/wp-content/themes/drunken-ux/assets/svg/logo.svg")')
        });

        it('has CTA buttons', () => {
            cy.get('@templateHeader')
                .find('.button-nav > *')
                .should('have.length', 2);
        });

        describe('CTA Buttons', () => {
            it('has a subscribe button', () => {
                cy.get('@templateHeader')
                    .find('.button')
                    .should('have.attr', 'href', 'https://link.chtbl.com/ZLx2VcWd?sid=site.subscribe_button')
                    .should('contain', 'Subscribe');
            });

            it('has a menu button', () => {
                cy.get('@templateHeader')
                    .find('button')
                    .should('contain', 'Menu')
                    .should('have.attr', 'type', 'button')
                    .should('have.attr', 'aria-expanded', 'false');
            });
        });

        describe('Navigation', () => {
            it('loads with menu hidden', () => {
                cy.get('@templateHeader')
                    .find('nav')
                    .should('not.be.visible');
            });

            it('opens and closes from menu button', () => {
                cy.get('@templateHeader')
                    .find('button')
                    .as('menuButton')
                    .click()
                    .should('have.attr', 'aria-expanded', 'true');
                
                cy.get('@templateHeader')
                    .find('nav')
                    .as('menuPanel')
                    .should('be.visible');

                cy.get('@menuButton')
                    .click()
                    .should('have.attr', 'aria-expanded', 'false');
                
                cy.get('@menuPanel')
                    .should('not.be.visible');
            });

            it('has menu items', () => {
                const menu = [
                    'Series',
                    'About',
                    'Contact',
                    'Advertise'
                ];

                cy.get('@templateHeader')
                    .find('nav > ul > li')
                    .should('have.length', 4)
                    .each((navItem, i) => {
                        expect(navItem).to.contain(menu[i])
                    });
            });
        });
    });
});
 