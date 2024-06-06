export default interface Queue {
    idQueue: number;
    peopleQty: number;
    date: Date;
    isActive: boolean;
    cpfCustomer: string;
    cpfEmployee: string;
    customer: {
        fullName: string;
    }
}