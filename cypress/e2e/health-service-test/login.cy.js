import { AppointmentHelper } from "../pages/appointment/appointment.helpers";
import { CommonHelper } from "../pages/common/common.helper";
describe('Cura HealthCare TEST', () => {
    
    beforeEach('Get into site', () => {
        CommonHelper.navigateToApp();
        cy.contains('h1', 'CURA Healthcare Service').should('be.visible');

    })
    it('1) log in', () => {
        CommonHelper.login();
        cy.contains('h2', 'Make Appointment').should('be.visible');
    });
    it('2) appointment', () => {
        CommonHelper.login();
        cy.contains('h2', 'Make Appointment').should('be.visible');
        AppointmentHelper.makeAppointment();
        cy.contains('h2', 'Appointment Confirmation').should('be.visible');
    })
});

