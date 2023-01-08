///<reference types="cypress" />
import SignupPageElements from "../pageelements/SignupPageElements"
const data =require("../../fixtures/testdata.json")
export default class SignupPageActions{
    constructor(){
        globalThis.element = new SignupPageElements()
    }

    navigateToURL(){
        cy.visit('/')
    }
    submitSignupPageInfo(){
       element.billingEntityNamefield().type(data.billingEntityNamefield)
        element.legalEntityID().type(data.legalEntityID)
        element.addressLine1().type(data.addressLine1)
        element.addressLine2().type(data.addressLine2)
        element.addressLine3().type(data.addressLine3)
        element.city().type(data.city)
        element.state().type(data.state)
        element.postcode().type(data.postcode)
        element.mainPhone().type(data.phone)
        element.webUrl().type(data.webURL)
        element.email().type(data.email)
        element.howDidYouHearAboutRhipe().select(data.howDidYouHearAboutRhipe,{force:true})
        element.industryType().select(data.industryType,{force:true})
        //verify the field
        element.authorisedSignatoryText().should('be.visible')

    }
    submitAuthorisedSignatoryContact(){
        element.firstNamefield().type(data.firstName)
        element.lastNamefield().type(data.lastName)
        element.directPhonefield().type(data.directPhone)
        element.PrimaryContactEmail().type(data.PrimaryContactEmail)
        //verify captcha field 
        element.captcaField().should('be.visible')
        //verify the submit button
        element.submitBtn().should('be.visible')
         
    }
}