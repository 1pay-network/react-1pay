/**
 * @typedef OnePayOptions
 * @type {Object}
 * @property {number} amount
 * @property {string} token
 * @property {string} note
 * @property {function} onSuccess
 * @property {function} onError
 */
export class ONEPAY {
    reset: () => void;
    isInitialized: boolean;
    _hasLoaded: boolean;
    _loadScript: (wallet: any, network: any, token: any, nonce: any, onepayUrl?: string) => void;
    /**
     *
     * @param {string} WALLET_ADDRESS
     * @param {Object} [options]
     * @param {string} [options.nonce]
     * @param {boolean} [options.testMode=false]
     * @param {string} [options.onepayUrl=https://1pay.network/onepay.js]
     * @param {string[]} [options.chain]
     * @param {string[]} [options.currency]
     */
    initialize: (WALLET_ADDRESS: string, options?: {
        nonce?: string;
        testMode?: boolean;
        onepayUrl?: string;
        chain?: string[];
        currency?: string[];
    }) => void;
    /**
     * @param {OnePayOptions} options
     */
    pay: ({ amount, token, note, onSuccess, onError }: OnePayOptions) => void;
}
declare const _default: ONEPAY;
export default _default;
export type OnePayOptions = {
    amount: number;
    token: string;
    note: string;
    onSuccess: Function;
    onError: Function;
};
