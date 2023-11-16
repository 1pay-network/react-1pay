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
  constructor() {
    this.reset();
  }

  reset = () => {
    this.isInitialized = false;
    this._hasLoaded = false;
  };

  _loadScript = (
    wallet,
    network,
    token,
    nonce,
    onepayUrl = "https://1pay.network/onepay.js"
  ) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    if (!this._hasLoaded) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `${onepayUrl}?recipient=${wallet}&network=${network}&token=${token}`;
      if (nonce) {
        script.setAttribute("nonce", nonce);
      }
      document.body.appendChild(script);
      this._hasLoaded = true;
    }
  };

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
  initialize = (WALLET_ADDRESS, options = {}) => {
    if (!WALLET_ADDRESS) {
      throw new Error("Require WALLET_ADDRESS");
    }

    const { chain, currency, nonce, onepayUrl } = options;

    if (!this.initialized) {
      let network = chain ? chain.join(",") : "ethereum,arbitrum,optimism,bsc";
      let token = currency ? currency.join(",") : "usdc,usdt,bnb";
      this._loadScript(WALLET_ADDRESS, network, token, nonce, onepayUrl);
    }
    this.isInitialized = true;
  };

  /**
   * @param {OnePayOptions} options
   */
  pay = ({ amount, token, note, onSuccess = () => {}, onError = () => {} }) => {
    if (!window || !window.onepay) {
      throw new Error("ONEPAY is not initialized");
    }
    window.onepaySuccess = onSuccess;
    window.onePayFail = onError;
    window.onepay(amount, token, note);
  };
}

export default new ONEPAY();
