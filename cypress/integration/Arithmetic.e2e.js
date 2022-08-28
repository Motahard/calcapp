describe('Arithmetic', () => {
    it('should have default value', () => {
        cy.visit('/');
        cy.get('#display').should('have.text', '0')
    })
    it('should summ numbers', () => {
        cy.get('#1').should('have.value', '1').click();
        cy.get('#keypad > input').eq(10).should('have.value', '+').click();
        cy.get('#2').should('have.value', '2').click();
        cy.get('#keypad > input').eq(21).should('have.value', '=').click();
        cy.get('#display').should('have.text', '3');
        cy.get('#keypad > input').eq(19).should('have.value', 'CE').click();
    })
    it('should substract numbers', () => {
        cy.get('#1').should('have.value', '1').click();
        cy.get('#keypad > input').eq(5).should('have.value', '-').click();
        cy.get('#2').should('have.value', '2').click();
        cy.get('#keypad > input').eq(21).should('have.value', '=').click();
        cy.get('#display').should('have.text', '-1')
        cy.get('#keypad > input').eq(19).should('have.value', 'CE').click();
    })
    it('should multiply numbers', () => {
        cy.get('#1').should('have.value', '1').click();
        cy.get('#keypad > input').eq(4).should('have.value', '*').click();
        cy.get('#2').should('have.value', '2').click();
        cy.get('#keypad > input').eq(21).should('have.value', '=').click();
        cy.get('#display').should('have.text', '2')
        cy.get('#keypad > input').eq(19).should('have.value', 'CE').click();
    })
    it('should divide numbers', () => {
        cy.get('#1').should('have.value', '1').click();
        cy.get('#keypad > input').eq(9).should('have.value', '/').click();
        cy.get('#2').should('have.value', '2').click();
        cy.get('#keypad > input').eq(21).should('have.value', '=').click();
        cy.get('#display').should('have.text', '0.5')
        cy.get('#keypad > input').eq(19).should('have.value', 'CE').click();
    })
    it('should calculate expressions', () => {
        cy.get('#1').should('have.value', '1').click();
        cy.get('#keypad > input').eq(4).should('have.value', '*').click();

        cy.get('#keypad > input').eq(16).should('have.value', '(').click();
        cy.get('#1').should('have.value', '1').click();
        cy.get('#keypad > input').eq(10).should('have.value', '+').click();
        cy.get('#2').should('have.value', '2').click();
        cy.get('#keypad > input').eq(18).should('have.value', ')').click();

        cy.get('#keypad > input').eq(21).should('have.value', '=').click();
        cy.get('#display').should('have.text', '3')
        cy.get('#keypad > input').eq(19).should('have.value', 'CE').click();
    })
    it('should clear history', () => {
        cy.visit('/settings');
        cy.get('button').should('have.text', 'Clear All History').click();
        cy.visit('/');
    })
});
