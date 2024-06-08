export default interface Reservation {
    idReservation: number;
    peopleQty: number;
    date: Date;
    isActive: boolean;
    cpfCustomer: string;
    cpfEmployee: string;
    customer: {
        fullName: string;
    }
}