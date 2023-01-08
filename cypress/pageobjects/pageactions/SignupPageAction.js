///<reference types="cypress" />
import SignupPageElements from "../pageelements/SignupPageElements"
export default class SignupPageActions{
    constructor(){
        globalThis.element = new SignupPageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }
    submitSignupPageInfo(){
        element.billingEntityNamefield().type("QA")
        element.legalEntityID().type("QA GROUP")
        element.addressLine1().type("address1")
        element.addressLine2().type("address2")
        element.addressLine3().type("address3")
        element.city().type("Melbourne")
        element.state().type("VIC")
        element.postcode().type("3977")
        element.mainPhone().type("0432223619")
        element.webUrl().type("https://dev-rhipe-signup.azurewebsites.net/")
        element.email().type("test@test.com")
        element.howDidYouHearAboutRhipe().select('Rhipe Website',{force:true})
        element.industryType().select('IT Consultants',{force:true})
        //verify the field
        element.authorisedSignatoryText().should('be.visible')

    }
    submitAuthorisedSignatoryContact(){
        element.firstNamefield().type("sample")
        element.lastNamefield().type("sampledata")
        element.directPhonefield().type("0432311893")
        element.PrimaryContactEmail().type("test@test.com")
        //verify captcha field 
        element.captcaField().should('be.visible')
        //verify the submit button
        element.submitBtn().should('be.visible')
         
    }
}