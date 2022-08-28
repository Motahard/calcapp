describe('Keyboard', () => {
    it('should have buttons', () => {
        cy.visit('/');
        cy.get('#keypad').find('input');
    })
    it('should click buttons', () => {
        cy.get('#keypad').find('input').click({ multiple: true });
    })
});
