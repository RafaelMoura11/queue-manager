export default interface Reservation {
    idReservation: number;
    nickname: string;
    phone: string;
    peopleQty: number;
    date: Date;
    isActive: boolean;
    cpfEmployee: string;
}