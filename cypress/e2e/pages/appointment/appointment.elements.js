export class AppointmentElements {
    static get Facility(){
        return cy.get('select#combo_facility');
    }
    static get HospitalReAd(){
        return cy.get('input#chk_hospotal_readmission');
    }
    static get InputProgram(){
        return cy.get('input#radio_program_medicare');
    }
    static get VisitDate(){
        return cy.get('input#txt_visit_date');
    }
    static get BookApointment(){
        return cy.get('button#btn-book-appointment');
    }
}