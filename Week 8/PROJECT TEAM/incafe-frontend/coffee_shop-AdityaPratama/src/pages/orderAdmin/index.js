import React, { useState, useEffect } from 'react'
import './../orderAdmin/style.css'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/organisme/Navbar'
import Footer from '../../components/templates/Footer'
import {EditText, EditTextarea } from 'react-edit-text'
import axios from 'axios'
import Swal from 'sweetalert'
import { event } from 'jquery'


function OrderAdmin() {

    const [index , setIndex] = useState(0)
    const [data, setData] = useState(null)
    const[order, setOrder] =useState(null)
    const[editing, setEditing] =useState(null)

    useEffect(() => {
        if (!data) {
            console.log('berjalan');
            const url = process.env.REACT_APP_SERVER
            axios.get(`${url}/v1/trx/avail`, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('token')}`}
                    // ${window.localStorage.getItem('token')}`}
            })
                .then((result) => {
                    setData(result.data)
                    setOrder(result.data.data[0].addressUser)
                    console.log(data, order);
                })
                .catch((err) => {
                    console.log(err);
                })
                
        }
    }, [])

    const handelMarkDone = () => {
        
        const url = process.env.REACT_APP_SERVER
        axios.get(`${url}/v1/trx/done/${data.data[index].id}`)
        .then((result)=>{
            Swal('terupdate!')
        })
        .catch((err)=>{
            console.log(err);
        })
        if(!data.data[index+1]){
            Swal('Selesai, Ini data terakhir')
        }else{
            setIndex(index + 1)
        }
    }

    const onSave = val => {
        console.log('Edited Value -> ', val)
      }

    const handleChange =(e)=>{
        console.log(e);
        // console.log(e.target.value);
        // const name = e.target.name
        // const value = e.target.value
        setOrder(e.target.value)
    }

    const handleEdit =()=>{

    }

    console.log(window.localStorage.getItem('token'));
    // console.log(data.data[index].id);
    // console.log(order);
    return (
        <div className="showInAnimation homepageDesktop">
            <Helmet>
                <title>In Cafe - Home</title>
            </Helmet>
            <Navbar />
            <div className="orderContainer">
                {data ?
                    <div className="orderContainerMain">
                        {/* {data.data.map(item=>{return(<> */}
                        <div className="orderMainLeft">
                            <div className="orderTextMainLeft">
                                <p>Finish your customer order now.</p>
                            </div>
                            <div className="orderCardMainLeft">
                                <div className="orderCardContent">
                                    <p className="orderDelivery">{data.data[index].deliveryMethod}</p>
                                    <p>{data.data[index].nameUser}</p>
                                </div>
                                <div className="orderContentListCount">
                                    {data.data[index].ordered_product.map(item =>{ return(<>
                                    <div className="orderContentMenu">
                                        <div className="orderContentMenuImage">
                                            <img src={item.image} alt="image" />
                                        </div>
                                        <div className="orderContentListDetil orderNoMarginBot">
                                            <p>{item.name}</p>
                                            <p>{item.orderItem}</p>
                                            {item.size.map(size=>{return(<>
                                            <p>{size}</p>
                                            </>)})}
                                        </div>
                                        <div className="orderContentTotalDetil">
                                            <p>IDR{item.price}</p>
                                        </div>
                                    </div>
                                        </>)})}
                                </div>
                                <hr />
                                <div className="orderContentDescription">
                                    <div className="orderContentDesc orderNoMarginBot">
                                        <p>SUBTOTAL</p>
                                        <p>TAX & FEES</p>
                                        <p>SHIPPING</p>
                                    </div>
                                    <div className="orderConentValue orderNoMarginBot">
                                        <p>{data.data[index].subTotal}</p>
                                        <p>{data.data[index].tax}</p>
                                        <p>{data.data[index].postageCost}</p>
                                    </div>
                                </div>
                                <div className="orderContentDescription">
                                    <div className="orderContentTotal">
                                        <p>TOTAL</p>
                                    </div>
                                    <div className="orderContentTotal">
                                        <p>{data.data[index].totalPayment}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="orderSwipeUpInstruction ">
                                <p>Swipe up to see upcoming orders</p>
                            </div>
                        </div>
                        <div className="orderMainRight">
                            <div className="orderMainRightObjek">
                                <div>
                                    <div className="orderAddressDetilContent">
                                        <div className="orderAddressItem">
                                            <p>Address Detil</p>
                                        </div>
                                        <div className="orderEditAddress">
                                            <button className='button is-small is-warning'onClick={() => {setEditing(e => !e )}}>Edit</button>
                                        </div>
                                    </div>
                                    <div className="orderAddressDetilCard">
                                        <div className="orderAddressDetilCardContent">
                                            <div className="orderDetilStreet ">
                                                <p><span>Delivery to </span></p>
                                                <hr className="orderNoMargin" />
                                                <textarea type="text" name="data" value={order} editing={editing} onChange={(e)=>handleChange(e)}/>
                                                {/* <input type="text" name="data" value={order} onChange={(e)=>handleChange(e)}/> */}
                                                <hr className="orderNoMargin" />
                                                <p>{data.data[index].phoneUser}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="orderPaymentMethod">
                                    <p><span> Payment method</span></p>
                                    <div className="orderPaymentMethodCard">
                                        <div className="orderPaymentMethodSpace">
                                            <div className="orderPaymentMethodList orderMethodCard">
                                                <div className="oderPaymentInput">
                                                    <input type="radio" id="c1" name="cc" />
                                                </div>
                                                <div className="orderPaymentIconCard" for="c1">
                                                    <img for="c1" src="/card.png" alt="" />
                                                </div>
                                                <div className="orderPaymentName">
                                                    <label for="c1"><span></span>Card</label>
                                                </div>
                                            </div> <hr />
                                            <div className="orderPaymentMethodList orderMethodBank">
                                                <div className="oderPaymentInput">
                                                    <input type="radio" id="c2" name="cc" />
                                                </div>
                                                <div className="orderPaymentIconBank" for="c2">
                                                    <img for="c2" src="/bank.png" alt="" />
                                                </div>
                                                <div className="orderPaymentName">
                                                    <label for="c2"><span></span>Bank Account</label>
                                                </div>
                                            </div> <hr />
                                            <div className="orderPaymentMethodList orderMethodDelivery">
                                                <div className="oderPaymentInput">
                                                    <input type="radio" id="c3" name="cc" />
                                                </div>
                                                <div className="orderPaymentIconDelivery" for="c3">
                                                    <img for="c3" src="/fast-delivery 3.png" alt="" />
                                                </div>
                                                <div className="orderPaymentName">
                                                    <label for="c3"><span></span>Cash on delivery</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    <div className="markAsDone">
                                    <div className="orderButtonDiv" >
                                        <button className="orderButton" onClick={() => { handelMarkDone() }}>Mark as done</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* </> )})} */}
                    </div> :
                    <div className="orderNoOrder">
                    <p className="orderAddressItem">Your transaction is clear</p>
                    </div>
                }
            </div>

            <Footer />
        </div>
    )
}

export default OrderAdmin
