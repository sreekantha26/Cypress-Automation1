//cypress- Spec fil
/// <reference types="Cypress" />
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://dev-rhipe-signup.azurewebsites.net/")
//cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('#CustomerName').type("QA")
cy.get('#RegistrationNumber').type("QA GROUP")
cy.get('#Street1').type('38 Grange road')
cy.get('#Street2').type('unit 3')
cy.get('#Street3').type('Carnegie')
cy.get('#City').type('Melbourne')
cy.get('#City')
cy.get('#State').type('Vic')
cy.get('#Postcode').type('3163')
cy.get('#MainPhone').type('03 0431123620')
cy.get('#WebUrl').type('https://dev-rhipe-signup.azurewebsites.net/')
cy.get('#Email').type('test@test.com')
//dropdown selection
cy.get('#Source:visible').select('Rhipe Website',{force:true})
cy.get('#IndustryType').select('IT Consultants',{force:true})

//verify the field
cy.get('#onboarding-form > :nth-child(7) > h3').should('be.visible')
//Authorised Signatory Contact(Person who will sign the Terms of Trade and respective Vendor agreements)
cy.get('#PrimaryContactFirstName').type('sample')
cy.get('#PrimaryContactLastName').type('test')
cy.get('#PrimaryContactPhone').type('0432311893')
cy.get('#onboarding-form > :nth-child(8) > tbody > :nth-child(2) > :nth-child(4)')
cy.get('#PrimaryContactEmail').type('test@test.com')
//verifying the captcha code element however we are not doing any action here
cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
//submit the button here we are not clicking just verifying button as mentioned in Use case
cy.get('#submitbutton')






}  )
 
 
 
}  )