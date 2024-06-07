export default interface Reservation {
    idReservation?: number;
    peopleQty: number;
    date: Date;
    isActive: Boolean;
    cpfCustomer: string;
    cpfEmployee: string;
}