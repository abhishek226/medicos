"use client"
import Image from "next/image";
import styles from "./page.module.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RightCircleFilled } from "@ant-design/icons";
 import { useRouter,useParams } from 'next/navigation'
//import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import medicines from "../../medicines.json"
import Link from "next/link";
import { Card, Layout, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";

import logo from "../../../../public/logo.png"


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function MedicineDetails() {
    const router = useRouter()
    const [parentMedicineIndex,setParentMedicineIndex]=useState(0);
    const [childMedicineIndex,setchildMedicineIndex]=useState(0);
    
    
    const params = useParams();
    console.log('params',params)
    
    useEffect(()=>{
        if(params.slug){
            //let parsedMedicines=JSON.parse(medicines)
            for(let i=0;i<medicines.length;i++){
                for(let j=0;j<medicines[i].medicines.length;j++){
                    debugger;
                    if(medicines[i].medicines[j].medicine == params.slug){
                        setParentMedicineIndex(i)
                        setchildMedicineIndex(j);
                        break;
                    }
                }
            }
        }
    },[params.slug])
    const redirectToPay =(...data:any)=>{
        console.log("Data",data)
        localStorage.setItem("selected",JSON.stringify({...data[0]}))
        router.push('/place-order');
        // medicine:"Tramadol"
        // type:"Pain Relief",
        return ;
    }
    const medicineType=[
    {
        type:"Pain Relief",
        medicines:[
        {
            medicine:"Tramadol",
            pricing:[
            {
                type:[
                {size:'50mg',price:'219',quantity:'360'
                },
                {
                    size:'50mg',
                    price:'115',
                    quantity:'180'
                }
                ]
            },
            {
                type:[
                {
                    size:'100mg',
                    price:'309',
                    quantity:'360'
                },
                {
                    size:'100mg',
                    price:'199',
                    quantity:'180'
                }
                ]
            },
            {
                type:[
                {
                    size:'150mg',
                    price:'339',
                    quantity:'360'
                },
                {
                    size:'150mg',
                    price:'239',
                    quantity:'180'
                }
                ]
            },
            {
                type:[
                {
                    size:'200mg',
                    price:'369',
                    quantity:'360'
                },
                {
                    size:'200mg',
                    price:'279',
                    quantity:'180'
                }
                ]
            }
            ],
            about:[
            `Tramadol is the most commonly used of the over the counter painkillers and is a popular medication for back pain, colds and cough. Although it has proved to be highly effective in many cases, it is only available as an over the counter medication and as a prescription drug. That is where online pharmacies can make a difference. Because it is prescribed by a doctor online, they have the ability to offer tramadol at very affordable prices and can often give them away at no cost. This is great news for those who need it but cannot afford it.`,
            `When choosing from the many online pharmacies available, you will find that there are numerous benefits in buying them from there rather than going from chemist to chemist. For one thing, you will find that online pharmacy's stock is always kept up to date and will not suffer any shortfalls in supply like those found in a drug store would. Also, you can shop with confidence knowing that you have your order in just a few days so there is no waiting required and you can get back to enjoying your life before you find out the painkillers don't work.`,
            `Online pharmacies also have better deals than their local counterparts. This is because they usually have lower overheads and do not have to bear the cost of the premises themselves. That means that they will offer you much better deals on tramadol than they would in a larger store. As they buy in large quantities, they do not have to compensate for the lower margins with lower price offers. The price on your tramadol purchase is always guaranteed to be the lowest.`,
            `Of course, the best place to buy tramadol at a great price is from online pharmacies. However, if you are unsure whether you will be buying from a reputable dealer, then you can always visit a pharmacy yourself to see what they have in stock. The most important aspect is making sure that you get it from a reputable pharmacy. There are many scams out there, some are legitimate and some are not, so make sure that you know what you are getting yourself into. You do not want to end up with a product that does not live up to its name.`,
            `Tramadol has become a hugely popular treatment for back pain and can reduce the pain and discomfort you are experiencing by as much as 40%. However, you should not buy it just because it's cheap. It can still be dangerous, so read up on everything you can about it and ask your pharmacist if they are able to recommend a good brand that they know of.`,
            `Tramadol is definitely cheaper than other painkillers, but there are risks involved. If you are pregnant, taking any other medicines or have kidney problems, then it is best to discuss this with your pharmacist before starting any new medication.`
            ]
        },
        {
            medicine:"Carisoprodol",
            pricing:[
            {
                type:[
                {size:'350mg',price:'149',quantity:'90'
                },
                {
                    size:'350mg',
                    price:'229',
                    quantity:'180'
                }
                ]
            },
            {
                type:[
                {
                    size:'500mg',
                    price:'249',
                    quantity:'180'
                },
                {
                    size:'500mg',
                    price:'169',
                    quantity:'90'
                }
                ]
            }
            ],
            about:[
            `Carisoprodol is a prescription drug that was originally developed as a medication for depression and is still on the market for this use. Carisoprodol is a sedative and has been used by a number of doctors to control anxiety in patients. It also works well with the symptoms of menopause.`,
            `There have been some concerns over the use of sedatives and how these medications affect the body, but there are no long term or severe side effects associated with them. Many people get some mild side effects from these medications, and they tend to be unpleasant. Carisoprodol is not one of those sedatives and can be a very effective treatment for certain conditions.`,
            `One of the most common side effects from this drug is the loss of sleep, especially if the dose is taken for an extended period of time. If the carisoprodol is taken for too long it can cause a build up of chemicals in the brain. These chemicals are responsible for controlling the panic attacks of sufferers.`,
            `There are also possible side effects like dizziness, fainting, or hallucinations. It is possible for sufferers of these problems to develop some sort of mental disturbance and feel dazed and confused. This does not necessarily mean the drug is causing these problems, but it is a possibility. It is very rare for someone to experience any serious side effects, however.`,
            `Carisoprodol is prescribed to patients who have trouble sleeping and have had episodes of anxiety. For those who are suffering from depression and other psychological conditions, the side effects of this drug can be extremely serious.`,
            `Carisoprodol can be very effective when used as prescribed, but it may not be the best choice for those who suffer from depression or other psychological conditions. If you think that you may have a problem, talk to your doctor or pharmacist to see if there is a safer option available. If the doctor feels that you do, he or she may be able to prescribe an alternative.`,
            `Carisoprodol is available in both prescription and over-the-counter form. Be sure to speak with your doctor before you start taking either of these forms because the over-the-counter version has not been approved by the FDA.`,
            `Some people find that they have difficulty concentrating while using Carisoprodol. There are ways of making it more difficult, but this will vary from person to person. You may find it beneficial to have someone to help you with concentration issues while taking this medication.`,
            `Carisoprodol can be used safely for anyone. The only thing you need to remember is that the more you take it, the more likely it is that you may have an adverse reaction. In general, there are fewer negative side effects associated with this type of medication compared to some other benzodiazepines. If you are not sure about the benefits or risks of taking the drug, talk to your doctor and pharmacist about alternatives.`
            ]
        }
        ]
    },
    {
        type:"Anxiety",
        medicines:[
        {
            medicine:"Xanax",
            pricing:[
            {
                type:[
                {
                    size:'1mg',
                    price:'459',
                    quantity:'360'
                },
                {
                    size:'1mg',
                    price:'359',
                    quantity:'180'
                },
                {
                    size:'1mg',
                    price:'249',
                    quantity:'90'
                },
                {
                    size:'1mg',
                    price:'179',
                    quantity:'60'
                }
                ]
            },
            {
                type:[
                {
                    size:'2mg',
                    price:'499',
                    quantity:'360'
                },
                {
                    size:'2mg',
                    price:'389',
                    quantity:'180'
                },
                {
                    size:'2mg',
                    price:'279',
                    quantity:'90'
                },
                {
                    size:'2mg',
                    price:'219',
                    quantity:'60'
                }
                ]
            }
            ],
            about:[
            `Xanax has been used to treat panic and anxiety disorders that manifest physical symptoms like blushing, hyperventilation, insomnia, flushing, trembling, palpitations, hot flashes, sweating, and restlessness. The reason it is commonly prescribed is that it does not cause any of the unpleasant side effects that are associated with anti-depressant medications like the sedation that can be dangerous for someone who may be driving or operating heavy machinery. These are all the reasons people turn to a more natural option.`,
            `When you are considering to buy Xanax online, you should know your medical history. If you suffer from an addiction to alcohol and abuse of prescription drugs, you should be aware of any health issues you might be dealing with before making the decision to buy it over the counter. The same goes for those who smoke. It is important to keep in mind the potential for addiction and the addictive qualities of many drugs.`,
            `There are some common side effects to Xanax. Some people have trouble falling asleep when they use the drug. Some people experience nausea when using it. Some people experience diarrhea. Other side effects can include muscle weakness and difficulty with the coordination of the body, including the eyes, tongue, mouth, or hands. You should also be aware of the fact that it can increase your heart rate and blood pressure.`,
            `When you buy Xanax, make sure you research how the product is going to be shipped and if you will have a prescription to fill. Many online companies will deliver the product without a prescription. You should also know the possible side effects and how they will interact with other drugs or medications that you might be taking.`,
            `Before buying, you should also know the cost of shipping and handling, if you will need to fill out any paper work or have a prescription filled. If you buy your Xanax online, you should be able to pay for the online purchase and pick up the product right at the pharmacy. If you buy it at a pharmacy and there is a requirement for a prescription, you should know this up front. If you are ordering in bulk, you should know if the price for shipping and handling are included or if they will be added on to the price. If you don't know these things, then you should definitely ask about them before ordering.`,
            `Online pharmacies are a great way to buy this drug. Just make sure you do your research and check for possible scams or if you are dealing with an honest company. Online pharmacies tend to carry the best price because they are able to pass on discounts and offer coupons, so make sure to take advantage of the low prices.`
            ]
            
        },
        {
            medicine:"Diazepam",
            pricing:[
            {
                type:[{
                size:'10mg',
                price:"469",
                quantity:360,
                shipping:20
                },
                {
                    size:'10mg',
                price:"369",
                quantity:180
                },
                {
                    size:'10mg',
                price:"239",
                quantity:90
                },
                {
                    size:'10mg',
                price:"169",
                quantity:60
                }]
            },
            ],
            about:[
            `If you have had problems with insomnia and are not sleeping well, or if you have tried prescription medication and found that you just do not sleep as well as you used to, there is no reason to despair. If you find yourself in this situation, there is a simple and safe way to treat the problem. You can buy Diazepam online and get a much-needed night's sleep at the same time. Here is how you buy Diazepam online and why it is the safest way to go. Buying Diazepam from the drugstore is a good option. In fact, many people prefer to buy Diazepam from the store itself. The problem is, the drugstore employees often do not know what they are talking about. While many people can answer a question or two, there are many more that are not sure what they are talking about. This can leave you, the customer, looking confused and not able to make an informed decision about the product. In addition to that, most drugstore employees are likely not trained to handle the sensitive issues regarding drugs. Even if your doctor recommends this particular drug, chances are good that the drugstore employees do not know enough about the drug to recommend it to you. Even worse, they may just be trying to sell you something to fill their own quota. While they may be helpful at first, the drugstore employees will only increase their sales to their favorite customers. It is important to remember that you are the one who will be taking the drug, and you need a recommendation from someone you trust. Buying Diazepam online is a better choice for many reasons. There is much less chance of getting ripped off by a drugstore employee and there are many more options on the internet. Many people are more comfortable buying products online than in the store, so they choose to purchase products online rather than walk into the store. This also means there is less competition, so prices are often more reasonable. There is also much less competition on the internet because there are so many people searching for the same things. When you purchase Diazepam over the internet, there is even more benefit to consider. With all of the competition, you can usually get an excellent price. When you shop at the drugstore, you are stuck with a bottle of the product. If you are using a coupon website, you can save a great deal of money by using multiple coupons. Buying Diazepam online is a great way to get a night's sleep. No matter how much insomnia you have been fighting, you can find a great option that is going to work.`
            ]
            
        },
        {
            medicine:"Ativan",
            pricing:[
            {
                type:[
                {
                    size:'2mg',
                    price:'459',
                    quantity:'360'
                },
                {
                    size:'2mg',
                    price:'359',
                    quantity:'180'
                },
                {
                    size:'2mg',
                    price:'259',
                    quantity:'90'
                },
                {
                    size:'2mg',
                    price:'189',
                    quantity:'60'
                }
                ]
            }
            ],
            about:[
            `To buy ativan is not that hard anymore because you may find so many stores that sell this product. If you want to purchase Ativan now, you just need a little guidance. It is the best way to save your money because it is not too expensive in comparison to other kinds of drugs. Online pharmacies are now the most common place where you will find the products for the same price or lower price than any street-side pharmacy.`,
            `If you want to buy ativan now, you may find it in any land-based pharmaceutical store and you may also purchase Ativan over the internet. The main thing when you want to buy ativan online is to check out the quality of the drug. In order for you to do so, you must be more careful in picking the right site for the purchase of Ativan.`,
            `Buying Ativan over the internet has its advantages and disadvantages. First of all, the convenience that it brings is really great. You can now buy ativan without leaving your house. You just have to type in the key words that you need and it will direct you to the sites that are selling the Ativan. Also, you just need to wait for the delivery of the pills from the site of the company. Moreover, the prices are the same as they were in the physical stores.`,
            `However, buying the drugs from physical stores is not that easy as what it was before. Aside from that, there are also some risks that are involved when you buy the drugs through the street-side pharmacy. You may have to pay extra for the shipping fees of the product. There are also some risk that you may be scammed if the product is bought through the online store. This is because there are a lot of fake stores that are being sold over the internet.`,
            `So, what are the ways that you may purchase Ativan over the internet? Well, you will see that there are some online stores that can sell you the Ativan pills and they will also provide the instructions to make the purchase online, so that you may take the pills as prescribed by your doctor.`,
            `When you want to purchase Ativan, you should know that there are lots of online pharmacy stores that can give you the best deals on the Ativan and other drugs that are similar to it. So, it is advisable for you to shop around so that you may get the best deal.`
            ]
        },
        {
            medicine:"Klonopin",
            pricing:[
            {
                type:[
                {
                    size:'2mg',
                    price:'479',
                    quantity:'360'
                },
                {
                    size:'2mg',
                    price:'379',
                    quantity:'180'
                },
                {
                    size:'2mg',
                    price:'229',
                    quantity:'90'
                },
                {
                    size:'2mg',
                    price:'179',
                    quantity:'60'
                }
                ]
            }
            ],
            about:[
            `How do you buy clonazepam? Children that have developed postpartum anxiety disorder compared to normal sexual functioning as measured by self-administered sexual functioning tests as per the Journal of Sexual Medicine found those who purchased clonazepam online as soon as a man seems to mention that single mothers still can play an important role. There was no difference in the number of sexual partners in the men's sexual life, but the number of partners that they had and the duration of the relationships were found to be statistically insignificant when compared to normal sexual functioning scores.`,
            `This is not to say that there are no causes of sexual dysfunction in women, as there are. It just means that it is very rare to see such a thing happening in a woman who has been sexually active. Men are the ones who suffer more from sexual dysfunction than women.`,
            `The reasons for sexual dysfunction in women are manifold, including hormonal imbalances, the absence of natural lubrication or low level of estrogen, and pregnancy. When a man is having problems in his sexual life, he often is concerned about whether he will find love again in the future and if he will feel fulfilled in his sexual activity once again. When this is a concern for him, he often wants to make sure that he can handle sex before he is ready to make a commitment.`,
            `When sexual dysfunction occurs, the partner is often left wondering what can be done to get his relationship with his partner back on track. The woman wonders how much more she can give, and the man wonders whether his relationship with his wife can survive. If he feels that he is in love with his wife and wants to commit to her, then he can purchase clonazepam to ensure that he does not have another sexual problem. If he is in the same situation and wonders if he should buy clonazepam, then the best solution for him would be to ask his doctor how to buy clonazepam.`,
            `It is not a very difficult question and it is one that most doctors would be glad to advise as it is a very good solution for most men. sexual dysfunction. Once the doctor has been consulted, the patient should be advised on how to buy clonazepam and be provided with the proper instructions on how to use it.`,
            `A doctor's advice is also helpful when trying to solve a problem like sexual dysfunction in men, since the doctor can help put the patient at ease and give them a sense of confidence that they can be successful in their efforts to solve a problem like this. A doctor can also give advice on how much should be purchased and where to buy it, which can make the task much easier. If the patient buys too much, it may only have a negative effect on the functioning of their sex life, so it is important that the doctor advises the patient to take the recommended dosage as prescribed.`
            ]
        }
        ]
    },
    {
        type:"INSOMNIA",
        medicines:[
        {
            medicine:"Ambien",
            pricing:[
            {
                type:[
                {
                    size:'10mg',
                    price:'469',
                    quantity:'360'
                },
                {
                    size:'10mg',
                    price:'369',
                    quantity:'180'
                },
                {
                    size:'10mg',
                    price:'309',
                    quantity:'120'
                },
                {
                    size:'10mg',
                    price:'239',
                    quantity:'90'
                },
                {
                    size:'10mg',
                    price:'179',
                    quantity:'60'
                }
                ]
            }
            ],
            about:[
            `If you're looking for the best sleep aid available, then the most logical choice may be Ambien. The brand name Zolpidem is the generic name for Ambien, and it is a long-acting drug that are hand in hand to stop snoring, not only make people fall asleep, but also keep them from getting restless. Sleeping disorders generally boot occur for some offbeat kind of reasons within a number of people.`,
            `A number of studies have been conducted on the problem of sleeping disorders and some people suffer from the symptoms of sleeping disorders without knowing it. Some may not even realize that they are not getting a full night's sleep, as sleep deprivation can bring a number of undesirable side effects, such as irritability, a racing heart, headaches and so on. If you think that you may be having any of these symptoms of sleeping disorder, then it would be a great idea to contact your doctor.`,
            `Among the more common problems of sleeping disorders are sleeping pills, which are available over the counter, and also Ambien. There are a number of people who don't want to take prescription sleeping pills, but if you're like many, you may want to get a more natural alternative.`,
            `The brand Zolpidem is the generic name for Ambien. If you want a cheaper and safer solution, it would be a good idea to buy online. There are a number of online drugstores where you can buy cheap Ambien, and there are some who will even give you a free sample of Ambien. You should always make sure that you are buying from a reputable store, as not all of them sell good quality products.`,
            `Buying cheap Ambien doesn't mean that it is inferior. In fact, some people will even say that it has even more therapeutic properties than the more expensive ones. However, you still need to exercise caution when purchasing online. Also, make sure that you are not dealing with a shady online dealer, or site, as there are a number of unscrupulous sites out there.`,
            `Cheap Ambien can come in the form of a pill, a spray, a syrup, an inhaler, nasal spray, gel or foam, etc. If you want to buy it through the Internet, it would be a good idea to look at the websites of different sites and see what sort of product you're looking for, so that you know which one is going to work the best. The more reputable ones will even offer you a free trial, to see what other customers have to say about the product and see if it's suitable for your needs.`
            ]
        }
        ]
    },
    {
        type:"Weight Loss",
        medicines:[
        {
            medicine:"Phentermine",
            pricing:[
            {
                type:[
                {
                    size:'37.5mg',
                    price:'465',
                    quantity:'360'
                },
                {
                    size:'37.5mg',
                    price:'379',
                    quantity:'180'
                },
                {
                    size:'37.5mg',
                    price:'309',
                    quantity:'150'
                },
                {
                    size:'37.5mg',
                    price:'259',
                    quantity:'120'
                },
                {
                    size:'37.5mg',
                    price:'229',
                    quantity:'90'
                }
                ]
            }
            ],
            about:[
            `Adipex is an over-the-counter (OTC) drug that is used to treat obesity. Adipex is taken orally or sublingually through an injection. Adipex is available as generic or brand name medicines. Adipex is used for the treatment of various gastrointestinal, cardiovascular, pulmonary and endocrine disorders, as well as for the treatment of patients suffering from sleep apnea.`,
            `Oral Adipext can help control appetite by reducing the amount of food that we eat. Its effectiveness depends on how well the patient's body processes the chemical. Adipext works by regulating the release of aldosterone in the hypothalamus. Aldosterone is a hormone that stimulates the appetite. By reducing the amount of food that the body can eat, oral Adipext reduces appetite.`,
            `Phentermine is an oral drug that is commonly prescribed for the treatment of sleep apnea, which is a sleep disorder characterized by rapid breathing during sleep. Phentermine helps the brain to reduce the excitability of the central nervous system, resulting in lessened breathing during sleep. Phentermine is typically used in conjunction with oral Adipext.`,
            `Buying Adipex can be easier when you buy Adipex online. Online pharmacies provide low prices on Adipex, especially online where there are usually lower commissions and shipping fees. Online pharmacies do not have to worry about the same regulations that apply to traditional pharmacies.`,
            `Online retailers, such as sites offering Adipex cor phentermine online, do not have to worry about the same regulatory standards that apply to traditional pharmacies. You can buy Adipex and Phentermine online from sites offering Adipex or Phentermine online without any worries. As long as you are buying from a legitimate site that offers online pharmacies with secure transactions and delivery methods, you should have no worries.`,
            `Cheap prices on Adipex do not mean that it is unsafe. It does not make sense to buy Adipex from someone who is offering expensive prices on Adipexc just because they want to sell you the drug.`,
            `Oral Adipex pills may cause certain side effects, particularly if the doses are large. Some people experience nausea, vomiting and diarrhea. These side effects are temporary and will go away after some time.`,
            `However, there are some good oral Adipex pill sellers that give patients information about the potential dangers associated with their product. You can check out these sites before buying oral Adipex. Adipex pill sellers also advise their customers to talk with their doctor or health care provider before taking any oral Adipex pills.`,
            `Many Adipex pills are now available for sale online. You can find them in several forms including, pills, powder, capsules and liquids, each with varying amounts of pills. Before you buy Adipex online, be sure to check the website carefully to determine what type of oral Adipex pills are available for you.`
            ]
        }
        ]
    },
    {
        type:"ADHD",
        medicines:[
        {
            medicine:"Adderall",
            pricing:[
            {
                type:[
                {
                    size:'30mg',
                    price:'459',
                    quantity:'360'
                },
                {
                    size:'30mg',
                    price:'359',
                    quantity:'180'
                },
                {
                    size:'30mg',
                    price:'259',
                    quantity:'90'
                },
                {
                    size:'30mg',
                    price:'189',
                    quantity:'60'
                }
                ]
            }
            ],
            about:[]
        }
        ]
    }
    ]

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
        if(e.keyPath.includes('app')){
            router.push('/about');
          }
          else if(e.keyPath.includes('mail')){
            router.push('/');
          }
        setCurrent(e.key);
      };
    
    return (
        <main className={styles.main}>
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
                    </div>
                    <Menu theme="dark" style={{marginLeft:"20%",display:"flex",justifyContent:"center"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
                </Header>
            </Layout>
            <div className={styles.hero_area}>
                <div className={styles.site_section}>
                    <Container>
                        <Row>
                            <div>
                                <Card  bordered={false} style={{ width: 300 }}>
                                <p style={{fontSize:"18px", fontWeight:"bold"}}>{medicineType[parentMedicineIndex].type} : {medicineType[parentMedicineIndex].medicines[childMedicineIndex].medicine}</p>  
                                </Card>
                            </div>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <>
                                {
                                    medicineType[parentMedicineIndex].medicines[childMedicineIndex].pricing.map(function(price,index) {
                                    return (
                                        <div className={styles.pricing_section} key={index}>
                                        <>
                                            {
                                            price.type.map((type:any,index)=>{
                                                return(
                                                <div key={index}>
                                                    <div>
                                                    <span className={styles.sec1}>{type.size}</span>
                                                    <span className={styles.sec2}>${type.price}</span>
                                                    <span className={styles.sec3}>x {type.quantity}</span>
                                                    <RightCircleFilled onClick={()=>redirectToPay({medicine:medicineType[parentMedicineIndex].medicines[childMedicineIndex].medicine,Size:type.size,Price:type.price,Quantity:type.quantity,type:medicineType[parentMedicineIndex].type})} style={{fontSize:"30px",color:"#51eaea",marginLeft:"10px",cursor:"pointer"}}  />
                                                    
                                                </div>
                                                    {/* <Divider style={{backgroundColor:"red",border:"1px solid"}} /> */}
                                                </div>
                                                )
                                                
                                            })
                                            }
                                        </>
                                        </div>
                                    )
                                    })
                                }
                                </>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={styles.site_section}>
                    <Container style={{width: "87%", fontSize: "14px"}}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                        <>
                            {medicineType[parentMedicineIndex].medicines[childMedicineIndex].about.map((x,index)=>{
                            return (
                                <p key={index}>{x}</p>
                            )
                            })}
                        </>
                        
                        </Col>
                    </Row>
                    </Container>
                </div>
                <div className={styles.site_section}>
                    <Container>
                        <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <>
                            {medicineType.map(function(data,index) {
                                return (
                                <div className={styles.category_section} key={index}>
                                    <div className={styles.medicine_category}>
                                    {data.type}
                                    </div>
                                    <div className={styles.medicineType}>
                                    <>
                                        {
                                        data.medicines.map((medicine,index)=>{
                                            return (
                                            <div className={styles.medicineSubType} key={index}>
                                                <Link style={{textDecoration:"none"}} href="/medicine-details/[id]" as={`/medicine-details/${medicine.medicine}`}>
                                                <span style={{color: "black"}}>{medicine.medicine}</span>
                                                </Link>
                                                
                                            </div>
                                            )
                                        })
                                        }
                                    </>
                                    </div>
                                </div>
                                )
                            })}
                            </>
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
