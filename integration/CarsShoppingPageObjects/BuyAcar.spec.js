/// <reference types="cypress" />
import Carshopping from '../CarsShoppingPageObjects/Carscom.spec'
const Carshop = new Carshopping

describe('My Car Search', () => {

    it('My First Honda Accord', () => {

        Carshop.VisitUrl()
        Carshop.GetCarDuration()
        Carshop.SelectPriceRange()
        Carshop.SelectMake()
        Carshop.SelectCarDistance()
        Carshop.Selectcarzip()
        Carshop.SelectCarModel()
        Carshop.SearchButton()
        Carshop.CheckAvailabilityButton()
        Carshop.InputFirstName()
        Carshop.InputLastName()
        Carshop.InputEmail()
        Carshop.InputPhoneNumber()
        Carshop.InputSubject()
        Carshop.InputCommet()
        Carshop.SelectTradeInBox()
        Carshop.ChooseAmake()
        Carshop.ChooseAmodel()
        Carshop.SelectCarYear()
        Carshop.SelectCarMileage()
        Carshop.SelectCarColor()
        Carshop.RequestQuote()







    })

































})