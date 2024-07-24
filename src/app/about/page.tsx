"use client"
// @ts-nocheck
import Image from "next/image";
import styles from "./page.module.css";
import logo from "../../../public/logo.png"

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RightCircleFilled } from "@ant-design/icons";
import { useRouter } from 'next/navigation'
import Link from "next/link";
// import Header from "@/components/Header/Header";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import { useState } from "react";

const { Header, Content, Footer } = Layout;


const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export default function Home() {
  const router = useRouter()
  
  const items: MenuProps['items'] = [
    {
      label: 'Medicines',
      key: 'mail',
    },
    {
      label: 'About',
      key: 'about',
    }
  ];
  const [current, setCurrent] = useState('about');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    if(e.keyPath.includes('about')){
      router.push('/about');
    }
    else if(e.keyPath.includes('mail')){
      router.push('/');
    }
    setCurrent(e.key);
  };
  return (
    <main className={styles.main}>
      {/* <div className="header-area">
          <header className="header_section">
        
          </header>
      </div> */}
      <header id="header-top" className={styles.headerTop}>
        <ul className={styles.pullRight}>
          <li className={styles.pullRight}>
            <div className={styles.headerTopRight}>
              <ul>
                <li className={styles.mobile}>
                  +1 222 777 6565
                </li>
                <li>
                  <div className={styles.middle}></div>
                </li>
                <li className={styles.email}>
                  abcfgksj@gmail.com
                </li>
              </ul>
            </div>
          </li>
        </ul>
            
      </header>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.demo_logo}>
            <Image alt=""  src={logo}  />
            <Link style={{textDecoration:"none"}} href="/" as={`/`}>
                                          <span >Meds24x</span>
                                        </Link>
            {/* <span>Medicos</span> */}
          </div>
          <Menu theme="dark" style={{marginLeft:"20%",display:"flex",justifyContent:"center"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
        </Header>
      </Layout>

      <div className={styles.hero_area}>
          <div className={styles.site_section}>
            <Container style={{width: "80%",fontSize:"16px"}}>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <div>
                    <h2>ABOUT US</h2>
                    <p>
                    U.S. Pills Online  is an US-based online pharmacy company which serves in multiple locations in USA mostly in all the states of USA so if any of our customer is located in any state you don’t need to worry about anything he can just order their medication in our pharmacy and he will get their package within next few days only on their doorstep without any shipping or handing charges the price they will pay is only for the medication and they don’t need to pay any extra charges for the medication and the best part of a pharmacy is that we have both the blister pack and the loose pills of all the medications available so it’s up to our customers which one they want if they want the blister pack they will get the blister pack medication and if they want the loose pills they will get the loose pills 
        
                    Usually other pharmacies shipped their packages through overseas shipment which takes around 25 to 30 days to get the package delivered but in many cases in overseas shipment the pills gets broken and the quality also is not to the point as compared to the US to US shipment that’s why we have the US to US shipment also available in a pharmacy and if a customer wants US to US shipment he can let us know and we can ship the packages through US TO US shipment and then the package will get delivered in just 3 to 4 business days only and the customer can get the medication more faster.
        
                    </p>
                  </div>
                  <div>
                    <h2>Why should you choose us</h2>
                    <p>
                        There are many pharmacy’s and websites which offer the Medications to you sir but there is a little difference between them and us. We deliver our medications in all the states of United states including Alabama  Alaska Arizona Arkansas California Colorado Connecticut Delaware Florida Georgia and many more.
                        Other pharmacy’s gives you the Medications through overseas shipment and it takes about 25 to 30 days to get your medication deliver and many times during shipping the pills got broken and the quality also is not so good but like we told you there is a difference between them and us so the difference is that if you order your medication with us we promise our customers that they will get their medication within 3 to 4 working days US to US only and the second main thing is about the quality of Medications and we also promise our customers that the quality which we will provide them will be the best quality available in US and they will love the quality of the medication and if due to some issues there is some problem with the medication or shipping we are not like others as many other pharmacy don’t give customer their money back but we are not like them if customer has some problem and he wants the refund then we accept it and we refund their all the money back. For refund and shipping related details you can directly check our refund policy and shipping and handling policy, you can get all the information from their and I can promise you, you will be happy seeing our policies because we have created them for our customers only because our first priority is customer satisfaction, if the customer is happy then we are also happy.

                        And one more thing sir we have all the Medications available US TO US and you can order any Medications with us and you will get it within 3 to 4 working days only with the best quality meds. And we also offer one thing to our customers that if they want any meds which is not available in our pharmacy we can arrange them for you within 5 to 6 days only and it will be delivered on your doorstep.
                        We are not saying that others pharmacy are bad but we are telling the differences only between them and us because our first priority in this business is customer satisfaction and all our customers are very happy with our services. And not only service but the quality of Medications is also the best quality available in US so if you willing to order your medication then don’t think and order with our pharmacy and one thing we can promise you that we will not let you down and you will get your meds within the given time with the best quality.

                    </p>
                  </div>
                  <div>
                    <h2>Why you worried about your Pills stock?</h2>
                    <p>
                        We deliver medications in all the states of America so now all our customers don’t need to worry about their pills stock because we ship our medications US to US and also overseas if any customer thinks his medication is going to over soon so they can text us any time or call us and place their order with us and we will ship it by the next day or if possible same day only and it will be delivered very soon to our all customers and they can get the medication before running out of stock

                        We always have the best quality medication available in both Blister pack and loose pills also so all our customers don’t need to worry about the quality of the medication because we deliver only the best quality medications to all our customers and all our customers like the quality that’s why they order with us again and again and we promise you if you order once with us you Will order only with us

                        Other pharmacies charges a very high cost for shipping the medication naming that price as a shipping charges but that’s the plus point in your pharmacy that we don’t charge any shipping charges the price for the medication includes all the shipping and handling charges in it and the customer can get all the medications at a very reasonable price from us 
                        So what are you waiting for just go on our website and go ahead and place your orders we are waiting to ship you your best quality medication.

                    </p>
                  </div>
                  <div>
                    <h2>Amazing Customer Service</h2>
                    <p>
                    We always try your best to satisfy all your customers completely because we also know that if customers are happy with us and they are satisfied with your service then they will order with us again in future. We always tell your customers honestly that how much time will be taken to get the package delivered on their doorstep and we give them  their tracking numbers also so that they can track their packages and know each and every update for their package.
                    </p>
                  </div>
                  <div>
                    <h2>NO CUSTOMS OR DUTY FEES!</h2>
                    <p>
                    We don’t take any extra charges from our customers. We always take the reasonable prices for their medications without any shipping and handling charges because the price for the medication includes all the shipping and handling charges in it so all your customers don’t need to pay us any single extra amount other than the price of medication and they also don’t need to pay any charges for duty fees or customs
                     </p>
                  </div>
                  <div>
                    <h2>Contact Us</h2>
                    <p>
                      Please contact us at +911234567890
                    </p>
                  </div>
                </Col>
              </Row>
              
            </Container>
          </div>
        
          {/* <Container>
            <Row>
              <div className={`${styles.title_section} ${styles.text_center} ${styles.col_12} ${styles.mb_5}}`}>
                <h2 className="text-uppercase">Testimonials</h2>
              </div>
            </Row>
            <Row>
              <Col md={{span: 3, offset: 1}}>
                <div className="testimony">
                  <blockquote>
                    <img src="images/person_1.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                    <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                      obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                      unde.”</p>
                  </blockquote>
                
                  <p>— Andrew Neel</p>
                </div>
              </Col>
              <Col md={{span: 3, offset: 1}}>
                <div className="testimony">
                  <blockquote>
                    <img src="images/person_2.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                    <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                      obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                      unde.”</p>
                  </blockquote>
                
                  <p>— Andrew Neel</p>
                </div>
              </Col>
              <Col md={{span: 3, offset: 1}}>
                <div className="testimony">
                  <blockquote>
                    <img src="images/person_3.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                    <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                      obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                      unde.”</p>
                  </blockquote>
                
                  <p>— Andrew Neel</p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="site-section bg-secondary bg-image" style={{backgroundImage: `url('images/bg_2.jpg')`}}>
            <Container>
              <Row>
                <Col md={{span: 5, offset: 1}}>
                  <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: `url('images/bg_1.jpg')`}}>
                    <div className="banner-1-inner align-self-center">
                      <h2>Pharma Products</h2>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                      </p>
                    </div>
                  </a>
                </Col>
                <Col md={{span: 5, offset: 1}}>
                  <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: `url('images/bg_2.jpg')`}}>
                    <div className="banner-1-inner ml-auto  align-self-center">
                      <h2>Rated by Experts</h2>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                      </p>
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
            </div> */}
        </div>
      
    </main>
  );
}
