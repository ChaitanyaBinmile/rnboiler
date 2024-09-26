import { useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { Alert, Button } from "react-native";
import { Screen } from "react-native-screens";

export default function CheckoutScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);
  
    const fetchPaymentSheetParams = async () => {
        try {
          const response = await fetch(`http://10.10.11.94:3000/payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();

          console.log('res', data);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const { paymentIntent, ephemeralKey, customer } = await data;
      
          return {
            paymentIntent,
            ephemeralKey,
            customer,
          }
        } catch (error) {
          console.error('Error fetching payment sheet params:', error);
          throw error;
        }
      };
      
  
    const initializePaymentSheet = async () => {
     try{ const {
      paymentIntent,
      ephemeralKey,
      customer,
      } = await fetchPaymentSheetParams();
  
      const { error } = await initPaymentSheet({
        merchantDisplayName: "coffee.com",
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: 'Jane Doe',
        },
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
      });
      if (!error) {
        setLoading(true);
      }}catch(e){
        console.log(e,  'error after payment')
      }
    };
  
    const openPaymentSheet = async () => {
        try{const { error } = await presentPaymentSheet();
    
        if (error) {
          Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
          Alert.alert('Success', 'Your order is confirmed!');
        }}catch(e){
          console.log(e, 'error after payment');
        }
      };
  
    useEffect(() => {
      initializePaymentSheet();
    }, []);
  
    return (
      <Screen>
        <Button
          disabled={!loading}
          title="Checkout"
          onPress={openPaymentSheet}
        />
      </Screen>
    );
  }