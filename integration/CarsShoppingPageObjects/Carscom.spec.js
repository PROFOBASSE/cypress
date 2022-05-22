class Carshopping {
    VisitUrl() {
        return cy.visit('https://www.cars.com/shopping/')
    }

    GetCarDuration() {
        return cy.get('[id="make-model-search-stocktype"]').select('new') //Type what model you want in the select method,that will be select by value or number by index
    }

    SelectPriceRange() {
        return cy.get('[id="make-model-max-price"]').select('30000') // Same comment as above 
    }

    SelectMake() {
        return cy.get('[id="makes"]').select('Honda')
    }

    SelectCarDistance() {
        return cy.get('[id="make-model-maximum-distance"]').select('50')
    }

    Selectcarzip() {
        return cy.get('[id="make-model-zip"]').type('75252')
    }

    SelectCarModel() {
        return cy.get('#models').select('Accord')
    }

    SearchButton() {
        return cy.xpath('//*[@id="by-make-tab"]/div/div[7]/button').click()
    }

    CheckAvailabilityButton() {
        return cy.contains('Check availability').click({ force: true })
    }

    InputFirstName() {
        return cy.get('.first-name').type('PTA')
    }

    InputLastName() {
        return cy.get('.last-name').type('ALLIANCE')
    }

    InputEmail() {
        return cy.get('[name="lead[email]"]').type('johnmartins2005b@gmail.com')
    }

    InputPhoneNumber() {
        return cy.get('.phone').type('5053012189')
    }

    InputSubject() {
        return cy.get('[name="lead[subject]"]').select('Get a price quote')
    }

    InputCommet() {
        return cy.get('.comments').type('Want To Know The Price For This Car')
    }

    SelectTradeInBox() {
        return cy.contains('I have a trade in').click()
    }

    ChooseAmake() {
        cy.get('#fields-srp-lead-form-modal > section > div > div.sds-field-group > div.sds-field.trade-in > div.sds-field-group.trade-in-form > div.make > div > select').select('Mazda')
    }

    ChooseAmodel() {
        cy.get('[name="lead[trade_in][model]"]').select('Mazda5')
    }

    SelectCarYear() {
        return cy.get('[name="lead[trade_in][year]"]').select('2013')
    }

    SelectCarMileage() {
        return cy.get('[name="lead[trade_in][mileage_string]"]').type('13,100')
    }

    SelectCarColor() {
        return cy.get('[name="lead[trade_in][color]"]').type('Brown And Black')
    }

    RequestQuote() {
        return cy.xpath('//*[@id="fields-srp-lead-form-modal"]/section/div/div[2]/button').click()

    }



}
export default Carshopping