import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import UseAxios from "../Hooks/UseAxios";
import UseAuth from "../Hooks/UseAuth";

const WithdrawFrom = ({ setIsOpen }) => {
  const [amount, setAmount] = useState(0);
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading,setIsLoading] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const axios = UseAxios()
  const {user} = UseAuth()


  useEffect(() => {
    if (amount > 0) {
      axios
        .post("/create-payment-intent", { price: amount })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axios, amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
      setIsOpen(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setIsOpen(false);
    }

    const { paymentIntent, error: confirmError } =
    await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymous",
          email: user?.email || "anonymous",
        },
      },
    });

      if(confirmError){
        toast.error(confirmError.message)
      }
      else{
        console.log(paymentIntent.id);
        if (paymentIntent.status === "succeeded") {
          const paymentHistery = {
            paymentId:paymentIntent.id,
            type: 'withdraw',
            amount: amount,
            email: user?.email,
            date: moment().format('lll')
          }
            axios.put(`/withdraw/${user?.email}`,{amount:amount})
            .then(()=>{
              axios.post('/payment',paymentHistery)
              .then(()=>{
                toast.success('Withdraw your money sucessfully')
              })
            })
        }
      }
    
  };

  return (
   <>
      <h1 className="font-semibold text-black mt-5">Ammount</h1>
      <input
        type="number"
        onChange={(e)=>setAmount(parseInt(e.target.value))}
        required
        placeholder="Enter Your Ammount"
        className="bg-white mb-5 text-black border-black border-2 rounded-none px-3 py-1.5 w-full"
      />
     <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="px-5 py-1.5 mt-3 bg-green-600 font-medium text-white rounded-md text-lg"
        type="submit"
        disabled={!stripe || !clientSecret ||  isLoading}
      >
        Withdraw
      </button>
    </form>
   </>
  );
};

export default WithdrawFrom;
