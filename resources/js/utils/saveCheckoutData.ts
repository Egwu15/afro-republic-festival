export function saveCheckoutData(data: CheckOutData) {
    localStorage.setItem('checkout_data', JSON.stringify(data));
}

export interface CheckOutData {
    id: number;
    quantity: number;
}

export const getCheckoutData = (): CheckOutData | null => {
    try {
        const checkoutJson = localStorage.getItem('checkout_data');
        if (!checkoutJson) return null;

        const data = JSON.parse(checkoutJson);

        if (typeof data === 'object' && data !== null && typeof data.id === 'number' && typeof data.quantity === 'number') {
            return data as CheckOutData;
        }

        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};
