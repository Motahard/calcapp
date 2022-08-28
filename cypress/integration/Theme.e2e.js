describe('Theme', () => {
    it('should have theme selector', () => {
        cy.visit('/settings');
        cy.get('select').should('have.value', 'light');
    })
    it('should switch theme', () => {
        cy.get('select').should('have.value', 'light').select('Dark Theme').should('have.value', 'dark');
        cy.get('#homepage').click();
        cy.get('#settingspage').click();

        cy.get('select').should('have.value', 'dark').select('Colored Theme').should('have.value', 'colored');
        cy.get('#homepage').click();
        cy.get('#settingspage').click();

        cy.get('select').should('have.value', 'colored').select('Light Theme').should('have.value', 'light');
        cy.get('#homepage').click();
        cy.get('#settingspage').click();
    })
});
