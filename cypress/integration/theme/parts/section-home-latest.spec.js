/// <reference types="cypress" />

context('Template Part parts/section-home-latest.php', () => {
    before(() => {
        cy.visit('https://drunkenux.local');
    });

    describe('Latest Episode Hero Panel', () => {
        it('has a featured episode', () => {
            cy.get('#latest-episode')
                .as('latestEpisode');

            cy.get('@latestEpisode')
                .find('> div')
                .should('have.css', 'background-image');
                
            cy.get('@latestEpisode')
                .find('.banner-image > picture > source')
                .should('have.attr', 'srcset')
                .should('contain', 'https://drunkenux.local/wp-content/uploads')

            cy.get('@latestEpisode')
                .find('.banner-image > picture > img')
                .should('have.attr', 'src')
                .should('contain', 'https://drunkenux.local/wp-content/uploads')

            cy.get('@latestEpisode')
                .find('.title-group')
                .as('titleGroup')
                .find('a')
                .should('have.attr', 'title');
/*
                .and('have.attr', 'href')
                .should('contain', '/podcast/dux')
*/
        });
    });
});