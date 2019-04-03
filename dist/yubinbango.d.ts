declare module YubinBango {
    type Address = {
        prefecture: string;
        locality: string;
        street: string;
        extended?: string;
    };
    const getAddress: (zipCode: string) => Promise<Address>;
}
export default YubinBango;
