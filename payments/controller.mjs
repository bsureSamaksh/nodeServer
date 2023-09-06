import axios from "axios";

const clientId = "192681e330bc5d0b61e7de198a186291";
const clientSecret = "d4421c7d9f660c97392ba53748228406dec03fa9";

export async function createOrder(req, res) {
  const { orderAmount, customerId, customerPhone } = req.body;

  const url = "https://sandbox.cashfree.com/pg/orders";
  const headers = {
    accept: "application/json",
    "content-type": "application/json",
    "x-api-version": "2022-09-01",
    "x-client-id": clientId,
    "x-client-secret": clientSecret,
  };

  const data = {
    order_amount: orderAmount,
    order_currency: "INR",
    customer_details: {
      customer_id: customerId,
      customer_email: "samaksh@bsure.live",
      customer_phone: customerPhone,
    },
    order_meta: {
      notify_url: "https://webhook.site/0578a7fd-a0c0-4d47-956c-d02a061e36d3",
    },
  };
  try {
    const response = await axios.post(url, data, { headers });
    // console.log(response.data);
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.log("error", error);
    res.status(400);
    res.end();
  }
}

// import api from "api";
// const sdk = api("@cashfreedocs-new/v3#z7c5zzlkqza7c0");

// sdk
//   .createOrder(
//     {
//       order_id: "100",
//       order_amount: 10.15,
//       order_currency: "INR",
//       customer_details: {
//         customer_id: "7112AAA812234",
//         customer_email: "john@cashfree.com",
//         customer_phone: "9908734801",
//         customer_bank_account_number: "1518121112",
//         customer_bank_ifsc: "CITI0000001",
//         customer_bank_code: 3333,
//       },
//       terminal: {
//         terminal_phone_no: "6309291183",
//         terminal_id: "1",
//         terminal_type: "SPOS",
//       },
//       order_meta: {
//         return_url: "https://b8af79f41056.eu.ngrok.io?order_id={order_id}",
//         notify_url: "https://b8af79f41056.eu.ngrok.io/webhook.php",
//       },
//       // order_expiry_time: "2021-07-29T00:00:00Z",
//       order_note: "Test order",
//       order_tags: { additionalProp: "string" },
//     },
//     {
//       "x-api-version": "2022-09-01",
//       accept: "application/json",
//       "content-type": "application/json",
//       "x-api-version": "2022-09-01",
//       "x-client-id": clientId,
//       "x-client-secret": clientSecret,
//       "x-request-id": "bsure",
//     }
//   )
//   .then(({ data }) => console.log(data))
//   .catch((err) => console.error(err));
