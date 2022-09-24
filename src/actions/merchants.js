export const RECEIVE_MERCHANTS = "RECEIVE_MERCHANTS";

export function receiveMerchants (merchants) {
    return {
        type: RECEIVE_MERCHANTS,
        merchants,
    }
}