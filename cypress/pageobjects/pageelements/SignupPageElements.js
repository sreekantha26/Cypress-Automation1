///<reference types="cypress" />
const or =require("../../locators.json")
export default class SignupPageElements{
    
    billingEntityNamefield(){
        return cy.get(or.SignUpPage.billingEntityNamefield);
    }

    legalEntityID(){
        return cy.get(or.SignUpPage.legalEntityID);
    }

    addressLine1(){
        return cy.get(or.SignUpPage.addressLine1);
    }

    addressLine2(){
        return cy.get(or.SignUpPage.addressLine2);
    }

    addressLine3(){
        return cy.get(or.SignUpPage.addressLine3);
    }

    city(){
        return cy.get(or.SignUpPage.city);
    }

    state(){
        return cy.get(or.SignUpPage.state);
    }

    postcode(){
        return cy.get(or.SignUpPage.postcode);
    }

    mainPhone(){
        return cy.get(or.SignUpPage.mainphone);
    }

    webUrl(){
        return cy.get(or.SignUpPage.webUrl);
    }

    email(){
        return cy.get(or.SignUpPage.email);
    }

    howDidYouHearAboutRhipe(){
        return cy.get(or.SignUpPage.howDidYouHearAboutRhipe);

    }

    industryType(){
        return cy.get(or.SignUpPage.industryType);
    }

    authorisedSignatoryText(){
        return cy.get(or.SignUpPage.authorisedSignatoryText);
    }

    firstNamefield(){
        return cy.get(or.SignUpPage.firstNamefield);
    }

    lastNamefield(){
        return cy.get(or.SignUpPage.lastNamefield);
    }

    directPhonefield(){
        return cy.get(or.SignUpPage.directPhonefield);
    }

    PrimaryContactEmail(){
        return cy.get(or.SignUpPage.PrimaryContactEmail);
    }

    captcaField(){
        return cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
    }

    submitBtn(){
        return cy.get(or.SignUpPage.submitBtn);
    }




    


}