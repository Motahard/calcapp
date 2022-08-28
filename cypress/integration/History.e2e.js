describe('History', () => {
    it('should have history', () => {
        cy.visit('/');
        cy.get('#history').should('have.text', 'History')
    })
    it('should adding to history', () => {
        cy.get('#8').should('have.value', '8').click();
        cy.get('#9').should('have.value', '9').click();
        cy.get('#-').should('have.value', '-').click();
        cy.get('#9').should('have.value', '9').click();
        cy.get('#keypad input').eq(21).should('have.value', '=').click();
        cy.get('#history').should('have.text', 'History89-9');
    })
    it('should show and hide history', () => {
        cy.get('i').click();

        cy.get('i').click();
    })
});
