export class ShippingNoteGenerator {
    generateShippingNote(
        customerFirstName: string,
        customerLastName: string,
        addressLine1: string,
        addressLine2: string | null,
        city: string,
        postcode: string,
        country: string,
        orderId: string,
        itemDescription: string,
        quantity: number
    ): string {

        const fullName = `${customerFirstName} ${customerLastName}`;

        const address = `${addressLine1}, ` +
            (addressLine2 ? `${addressLine2}, ` : "") +
            `${city}, ${postcode}, ${country}`;

        return `SHIPPING NOTE
Order: ${orderId}
Customer: ${fullName}
Ship To: ${address}
Item: ${itemDescription}
Quantity: ${quantity}`;
    }
}