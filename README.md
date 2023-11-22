# React 1pay payment SDK

## Install

```bash
npm i @1pay/react-1pay
```

## Usage

```js
import React1pay from "@1pay/react-1pay";

React1pay.initialize("your wallet address");
```

## Example

TODO: Add example and test
More example can be found in [test suite](src/onepay.test.js)

## Reference

#### React1pay.initialize(WALLET_ADDRESS, options)

| Parameter        | Notes                                                            |
| ---------------- | ---------------------------------------------------------------- |
| WALLET_ADDRESS   | `string` Required                                                |
| options.chain    | `array` Currently support `ethereum` `arbitrum` `optimism` `bsc` |
| options.testMode | `boolean` Default false (WIP)                                    |
| options.currency | `array` Currently support `usdt` `usdc` `dai`                    |

#### React1pay.pay(params)

| Parameter        | Notes                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| params.amount    | `number` Required payment value                                        |
| params.token     | `string` Required default payment token value                          |
| params.note      | `string` anything that can help you identify the buyer and the product |
| params.onSuccess | `function` callback when payment succeeded                             |
| params.onError   | `function` callback when payment failed                                |

```js
PaymentResponse : {
  hash: String,     // transaction hash, maybe undefined if payment failed
  success: Boolean, // true if payment success, otherwise false
  network: String,  // blockchain name
  amount: Number,   // transaction value
  token: String,    // token name
  note: String      // transaction note,
  paymentTime: Date // the date time this payment is processed
}
```

For detail documents, please refer to [1pay docs](https://1pay.network/documents)

## License

MIT
