import React, { useState, useEffect } from 'react'
import './../orderAdmin/style.css'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/organisme/Navbar'
import Footer from '../../components/templates/Footer'
import axios from 'axios'
import Swal from 'sweetalert'


function OrderAdmin() {

    const [index , setIndex] = useState(0)
    const [data, setData] = useState(null)
    useEffect(() => {
        if (!data) {
            console.log('berjalan');
            const url = process.env.REACT_APP_SERVER
            axios.get(`https://api.incafe.xyz/v1/trx/avail`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcklkIjoiNDNkNDQwZGEtMDVlYi00OGZmLTlhY2QtN2ZhNjI0OTk1NWE5IiwiZmlyc3ROYW1lIjoidXNlciIsImxhc3ROYW1lIjoiY2FmZSIsImRpc3BsYXlOYW1lIjoiU3dlZXRlc3QgQ3VzdG9tZXJzIiwiZW1haWwiOiJwcmFzZXRpb2FkQGdtYWlsLmNvbSIsImdlbmRlciI6Im1hbGUiLCJyb2xlIjoiYWRtaW4iLCJhZGRyZXNzIjoiSW5DYWZlIE5vLjMzIiwicGhvbmUiOiIwODk2MzU5NjAwNTMiLCJiaXJ0aGRheSI6IjIwMjEtMDQtMTAiLCJhdmF0YXIiOiJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jb2ZmZWUtbG92ZS1mb2FtLXdpdGgtYmVhbnMtY2FydG9vbi1pY29uLWlsbHVzdHJhdGlvbl8xMzg2NzYtMjU3NS5qcGciLCJhY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMDQtMTBUMDA6MTQ6NDYuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDQtMTBUMDA6MjI6MjMuMDAwWiIsImlhdCI6MTYxODI2OTcwNywiZXhwIjoxNjE4MzU2MTA3fQ.cywg2A0a-wSpcxFTeOieaWg1l3wycHl2v2iSJu7cF_U`}
                    // ${window.localStorage.getItem('token')}`}
            })
                .then((result) => {
                    console.log(result.data);
                    setData(result.data)
                    console.log('berjalan dalam axios');
                })
                .catch((err) => {
                    console.log(err);
                })

        }
    }, [])

    const handelMarkDone = () => {
        const url = process.env.REACT_APP_SERVER
        axios.get(`${url}/v1/trx/done/${index}`)
        .then((result)=>{
            Swal('terupdate!')
        })
        .catch((err)=>{
            console.log(err);
        })
        setIndex(index + 1)
    }


    console.log(data);
    console.log(index);
    return (
        <div className="showInAnimation homepageDesktop">
            <Helmet>
                <title>In Cafe - Home</title>
            </Helmet>
            <Navbar />
            <div className="orderContainer">
                {data &&
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
                                <div className="orderContentMenu">
                                    <div className="orderContentMenuImage">
                                        <img src="/src/assets/image 36.png" alt="image" />
                                    </div>
                                    <div className="orderContentListDetil orderNoMarginBot">
                                        <p>Hazelnut Latte</p>
                                        <p>x1</p>
                                        <p>Regular</p>
                                    </div>
                                    <div className="orderContentTotalDetil">
                                        <p>IDR 24.0</p>
                                    </div>
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
                                            <button>Edit</button>
                                        </div>
                                    </div>
                                    <div className="orderAddressDetilCard">
                                        <div className="orderAddressDetilCardContent">
                                            <div className="orderDetilStreet ">
                                                <p><span>Delivery to </span></p>
                                                <hr className="orderNoMargin" />
                                                <input type="text" value={data.data[index].addressUser}/>
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
                                                <div className="orderPaymentIconCard">
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
                                                <div className="orderPaymentIconBank">
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
                                                <div className="orderPaymentIconDelivery">
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
                    </div>
                }
            </div>

            <Footer />
        </div>
    )
}

export default OrderAdmin
