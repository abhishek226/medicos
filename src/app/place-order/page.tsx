"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/navigation'
import React from 'react';
import { Button, Form, Input, InputNumber, Divider, Space, InputNumberProps, Layout, Menu, MenuProps, Spin } from 'antd';
import { useCreditCardValidator, images } from 'react-creditcard-validator';
import { Header } from "antd/es/layout/layout";

import logo from "../../../public/logo.png"
import Image from "next/image";
import Link from "next/link";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const PlaceOrder=()=>{
    const router = useRouter()
    //const navigate = useNavigate();
    const expiry: { mm: any, yyyy: any } = {
        mm: "",
        yyyy: ""
    }
    const card: { card1: any, card2: any, card3: any, card4: any } = {
    card1: 0,
    card2: 0,
    card3: 0,
    card4: 0
    }
    const [mm, setMm] = useState("");
    const [yyyy, setYyyy] = useState("");

    const [cardNumber, setcardNumber] = useState();
    const [card1, setcard1] = useState("");
    const [card2, setcard2] = useState("");
    const [card3, setcard3] = useState("");
    const [card4, setcard4] = useState("");
    const [spinningStatus, setSpinningStatus] = useState(false);
    const [selectedData,setSelectedData]=useState({
            type:"",
            medicine:"",
            Size:"",
            Price:"",
            Quantity:""
    })
    useEffect(() => {
        // Checking if user is not loggedIn
        let data=localStorage.getItem("selected")
        if(data){
            setSelectedData(JSON.parse(data))
        }
        else{
            //navigate("/")
        }
        console.log("Selected dataa",data)
    }, []);
    

    function expDateValidate(month: string, year: string) {
    if (Number(year) > 2035) {
        return 'Expiry Date Year cannot be greater than 2035';
    }
    return;
    }

    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
    };
      const {
        getCardNumberProps,
        getCardImageProps,
        getCVCProps,
        getExpiryDateProps,
        meta: { erroredInputs,cardType,touchedInputs }
      } = useCreditCardValidator({ expiryDateValidator: expDateValidate });

    const onFinish = async (values: any) => {
        console.log(values);
        console.log('expiry', expiry)
        console.log('card', card)
        console.log('mm', mm)
        console.log('yyyy', yyyy)
        console.log('card1', card)
        console.log('card1', card2)

        console.log('card1', card3)
        console.log('card1', card4)
        console.log("cardType",cardType)
        console.log("touchedInputs",touchedInputs)
        console.log("cardNumber",cardNumber)
        setSpinningStatus(true)
        try {
            const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...values.user,...selectedData,cardNumber:cardNumber,month:mm,year:yyyy})
            });
            console.log("response",response)
            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert(responseData['message']);
            router.push('/');
        } catch (err) {
            setSpinningStatus(false)
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    const onChangeMm: InputNumberProps['onChange'] = (value:any) => {
        expiry['mm'] = value
        setMm(value)
    
      }
      const onChangeYyyy: InputNumberProps['onChange'] = (value:any) => {
        expiry['yyyy'] = value
        setYyyy(value)
      }
    
      const onChangeCard1: InputNumberProps['onChange'] = (value:any) => {
        // debugger;
        card['card1'] = value
        setcardNumber(value)
    
      }
      const onChangeCard2: InputNumberProps['onChange'] = (value) => {
        card['card2'] = value
    
      }
      const onChangeCard3: InputNumberProps['onChange'] = (value) => {
        card['card3'] = value
    
      }
      const onChangeCard4: InputNumberProps['onChange'] = (value) => {
        card['card4'] = value
    
      }
      

      const items: MenuProps['items'] = [
        {
          label: 'Medicines',
          key: 'mail',
        },
        {
          label: 'About',
          key: 'app',
        }
      ];
      
      const [current, setCurrent] = useState('');
      const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        if(e.key= 'app'){
          router.push('/about');
        }
        setCurrent(e.key);
      };
    return (
      <div>
        <Layout>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.demo_logo}>
              <Image alt=""  src={logo}  />
              <Link style={{textDecoration:"none"}} href="/" as={`/`}>
                                          <span >Medicos</span>
                                        </Link>
            </div>
            <Menu theme="dark" style={{marginLeft:"20%",display:"flex",justifyContent:"center"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
          </Header>
        </Layout>
        <div className={styles.contact}>
              <section className={styles.get_in_touch}>
                  
                  <h1 className={styles.title}>Place Order</h1>
                  <Container className={styles.itemSelected}>
                      <div><span>Item</span></div>
                      <div className={styles.orderMedicine}>
                          {/* <span>{selectedData?.type}</span> */}
                          <span>{selectedData?.medicine}</span>
                          <span>{selectedData?.Size}</span>
                          <span>${selectedData?.Price}</span>
                          <span>{selectedData?.Quantity}</span>
                      </div>
                  </Container>
                  <section>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true },]}>
            <Input placeholder="Please input your name" value="name" />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', },]}>
            <Input placeholder="Please input your Email" />
          </Form.Item>
          <Form.Item
            name={['user', 'mobile']}
            label="Phone number"

          ><Input placeholder="Please input your phone number" />
          </Form.Item>
          <Form.Item name={['user', 'State']} label="State">
            <Input placeholder="State" />
          </Form.Item>
          <Form.Item
            name={['user', 'City']}
            label="City"
          >
            <Input placeholder="Please input your city" />
          </Form.Item>
          <Form.Item name={['user', 'zip']} label="Zip Code">
            <Input placeholder="Zip Code" />
          </Form.Item>
          <Form.Item name={['user', 'address']} label="Address">
            <Input.TextArea placeholder="Address" />
          </Form.Item>
          <Form.Item name={['user', 'nameCard']} label="Name on Card" rules={[{ required: true },]}>
            <Input placeholder="Name on Card" />
          </Form.Item>
          <Form.Item name={['user', 'CardNumber']} label="Card Number">
            <Space.Compact>
              {/* <InputNumber min={1} maxLength={4} max={10} placeholder="0000" onChange={onChangeCard1} />
              <InputNumber min={1} maxLength={4} max={10} placeholder="0000" onChange={onChangeCard2} />
              <InputNumber min={1} maxLength={4} max={10} placeholder="0000" onChange={onChangeCard3} />
              <InputNumber min={1} maxLength={4} max={10} placeholder="0000" onChange={onChangeCard4} /> */}
              <div>
                <svg className={styles.cardNumberSvg} {...getCardImageProps({ images })} />
                <input className={styles.cardNumberInput}   {...getCardNumberProps()} onChange={e=>onChangeCard1(e.target.value)} />
                {/* <Input {...getCardNumberProps()}  /> */}
              </div>
              <small className={styles.small}>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>
            </Space.Compact>
          </Form.Item>
          <Form.Item name={['user', 'Expiry']} label="Expiration Date">
            <InputNumber min={1} maxLength={2}  placeholder="0000" onChange={onChangeMm} controls={false} />
            <InputNumber min={1} maxLength={4}  placeholder="0000" onChange={onChangeYyyy} controls={false} />
            {/* <InputNumber style={{width: "18%"}} maxLength="2" value={mm} min={1} max={100000} placeholder="MM" onChange={evt => updateInputValue(evt)}  controls={false} />
              <InputNumber style={{width: "18%"}} maxLength="4" value={yyyy}  min={1} max={100000} placeholder="YYYY" onChange={evt => updateInputValue1(evt)}   controls={false} /> */}


          </Form.Item>
          <Form.Item name={['user', 'cvv']} label="CVV2/CVC">
            <InputNumber style={{ width: "18%" }} maxLength={3} min={1} max={100000} placeholder="cvv" controls={false} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >


            <Button type="primary" style={{ "backgroundColor": "#10e7f4" }} htmlType="submit">
            <Spin spinning={spinningStatus} />
            <>{!spinningStatus && <span>Proceed to order</span>}</>
            
            </Button>
          </Form.Item>
        </Form>
      </section>
                  {/* <PersonalForm  /> */}
              </section>
        </div>
      </div>
        
    )
}

export default PlaceOrder;