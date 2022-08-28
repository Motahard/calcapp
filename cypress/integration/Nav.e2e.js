describe('Navbar', () => {
    it('should have a navigation', () => {
        cy.visit('/');
        cy.get('nav > p').should('have.text', 'Calculator App');
        cy.get('#settingspage').should('have.text', 'Settings');

        cy.get('#homepage').should('have.text', 'Home');
    })
    it('should navigate', () => {
        cy.get('#settingspage').should('have.text', 'Settings').click();

        cy.get('h1').should('have.text', 'Settings')
        cy.get('#homepage').should('have.text', 'Home').click();
    })
});
