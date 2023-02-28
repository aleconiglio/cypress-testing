import { AppointmentConstants } from "./appointment.constants";
import { AppointmentElements } from "./appointment.elements";

export class AppointmentHelper {
    static makeAppointment(){
        AppointmentElements.Facility.select(AppointmentConstants.programs.Medicare);
        AppointmentElements.HospitalReAd.click();
        AppointmentElements.InputProgram.click();
        AppointmentElements.VisitDate.type(AppointmentConstants.validDate);
        AppointmentElements.BookApointment.click();
    }
}