/// <reference types="cypress" />

context('Template Part parts/section-home-latest.php', () => {
    before(() => {
        cy.visit('https://' + Cypress.env('HOST'));
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
                .should('contain', 'https://' + Cypress.env('HOST') + '/wp-content/uploads')

            cy.get('@latestEpisode')
                .find('.banner-image > picture > img')
                .should('have.attr', 'src')
                .should('contain', 'https://' + Cypress.env('HOST') + '/wp-content/uploads')

            cy.get('@latestEpisode')
                .find('.title-group')
                .as('titleGroup');

            cy.get('@titleGroup')
                .find('a')
                .then((showLink) => {
                    expect(showLink).to.have.attr('title');
                    expect(showLink).to.have.attr('href')
                        .and.contain('/podcast/dux');
                });
            
            cy.get('@titleGroup')
                .find('.tag-label span')
                .should('have.text', 'Latest Episode');

            cy.get('#player source')
                .should('have.attr', 'src')
                .should('contain', '.mp3');
        });
    });
});