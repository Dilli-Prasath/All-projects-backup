import '../CSS/Payment.css';
import React,{useState} from 'react';

function Payment() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_9vIEYzXaoATCwA",
        key_secret:"FQnhsyXOU8b7kQVCLenKDOEt",
        amount: amount *100,
        currency:"INR",
        name:"Restaurant",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Dilli",
          email:"dilli.prasath0201@gmail.com",
          contact:"9944670092"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="Payment" id='Payment'>
     <h2>Razorpay Payment Integration Using React</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Payment;