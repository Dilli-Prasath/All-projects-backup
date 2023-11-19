import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes,Route,Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

import { motion } from "framer-motion";
//import "../CSS/UserDetail.css"

const UserDetail=()=>{

    // User Profile code below

    let history = useNavigate(); // Use for Navigate on Previous
    const [data, setData]=useState({
        name:"",
        email:"",
        contact:"",
        table:""
        // age:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value }); 

        //console.log(data)
    }
   
    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
            name:data.name,
            email:data.email,
            contact:data.contact,
            table:data.table
            // age:data.age

        }

        console.log(sendData);

        axios.post('http://localhost/authinMern/profile.php',sendData)
        .then((result)=>{
            if (result.data.Status === 'Invalid') { 
          alert('Invalid User');  
            }
        else  {
           //props.history.push('/Dashboard')  
           //props.history.push('/Dashboard') Redirect
           history(`/Payment`);
        }
      })  
    }

    return(
        <div>
            <div className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
               <center> Welcome Please Enter Your Table Number </center>  
            </div>  

              <div className="main-box" id='UserDetail'> 
        <form  onSubmit={submitForm}>
        <div className="row">
         <div className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
            <center><h1>User Detail</h1></center></div>
        </div>
            <div className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                <div className="col-md-6">Name</div>
                <div className="col-md-6">
                    <input type="text" name="name" className="form-control"
                    onChange={handleChange} value={data.name}
                     />
                </div>
            </div> <br/>

            <div className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="text" name="email" className="form-control" 
                        onChange={handleChange} value={data.email}
                    />
                </div>
            </div> <br/>


            <div className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                <div className="col-md-6">Contact</div>
                <div className="col-md-6">
                    <input type="number" name="contact" className="form-control" 
                         onChange={handleChange} value={data.contact}

                    />
                </div>
            </div> <br/>

            <div className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                <div className="col-md-6">table</div>
                <div className="col-md-6">
                    <input type="text" name="table" className="form-control" 
                         onChange={handleChange} value={data.table}

                    />
                </div>
            </div> <br/>

            {/* <div className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
                <div className="col-md-6">Age</div>
                <div className="col-md-6">
                    <input type="number" name="age" className="form-control" 
                         onChange={handleChange} value={data.age}

                    />
                </div>
            </div> <br/> */}

            <div className="row">

            {/* <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-medium p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              > 
              <Link to="HomeContainer" smooth>
                Food Preparing
                </Link> 
              </motion.button> */}
              
                   {/* <div> */}
                 <motion.button className="w-medium p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg">
                    <input type="submit" name="submit" value="Update profile" className="btn btn-success" /> </motion.button>
                    {/* </div> */}
            </div>
            </form>
        </div>
        </div>

        
    )
}

export default UserDetail;