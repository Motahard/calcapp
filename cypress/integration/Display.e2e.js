describe('Display', () => {
    it('should have display', () => {
        cy.visit('/');
        cy.get('#display').should('have.text', '0')
    })
});
