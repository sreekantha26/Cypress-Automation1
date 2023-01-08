///<reference types="cypress" />
import SignupPageActions from "../../pageobjects/pageactions/SignupPageAction"
describe("Signup Testcase",()=>{
    const singUpPage = new SignupPageActions()
    beforeEach(()=>{
        singUpPage.navigateToURL()
    })
    it("verify submitform  of the SignUpPage",()=>{
        singUpPage.submitSignupPageInfo()
        singUpPage.submitAuthorisedSignatoryContact()
    })
})