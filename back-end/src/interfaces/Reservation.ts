export default interface Reservation {
    idReservation?: number;
    peopleQty: number;
    date: Date;
    cpfCustomer: string;
    cpfEmployee: string;
}