import React from 'react'
import "./Staff.css"


// Images
import Staff1 from "../../Assets/Staff/1.jpg"
import Staff2 from "../../Assets/Staff/2.jpg"
import Staff3 from "../../Assets/Staff/3.jpg"
import Staff4 from "../../Assets/Staff/4.jpg"
import Staff9 from "../../Assets/Staff/9.jpg"
import Staff10 from "../../Assets/Staff/10.jpg"
import Staff11 from "../../Assets/Staff/11.jpg"
import Staff12 from "../../Assets/Staff/12.jpg"
import Staff13 from "../../Assets/Staff/13.jpg"
import Staff14 from "../../Assets/Staff/14.jpg"
import Staff15 from "../../Assets/Staff/15.jpg"
import Staff16 from "../../Assets/Staff/16.jpg"
import Staff17 from "../../Assets/Staff/17.jpg"
import Staff18 from "../../Assets/Staff/18.jpg"
import Staff19 from "../../Assets/Staff/19.jpg"
import Staff20 from "../../Assets/Staff/20.jpg"
import Staff21 from "../../Assets/Staff/21.jpg"
import Staff22 from "../../Assets/Staff/22.jpg"
import Staff23 from "../../Assets/Staff/23.jpg"
import Staff24 from "../../Assets/Staff/24.jpg"
import Staff25 from "../../Assets/Staff/25.jpg"
import Staff26 from "../../Assets/Staff/26.jpg"
import Staff27 from "../../Assets/Staff/27.jpg"
import Staff28 from "../../Assets/Staff/28.jpg"
import Staff29 from "../../Assets/Staff/29.jpg"
import Staff30 from "../../Assets/Staff/30.jpg"
import Staff31 from "../../Assets/Staff/31.jpg"
import Staff32 from "../../Assets/Staff/32.jpg"
import Staff33 from "../../Assets/Staff/33.jpg"
import Staff34 from "../../Assets/Staff/34.jpg"
import Staff35 from "../../Assets/Staff/35.jpg"
import Staff36 from "../../Assets/Staff/36.jpg"
import Staff37 from "../../Assets/Staff/37.jpg"
import Staff38 from "../../Assets/Staff/38.jpg"
import Staff39 from "../../Assets/Staff/39.jpg"
import Staff40 from "../../Assets/Staff/40.jpg"
import Staff41 from "../../Assets/Staff/41.jpg"
import Staff42 from "../../Assets/Staff/42.jpg"
import Staff43 from "../../Assets/Staff/43.jpg"
import Staff44 from "../../Assets/Staff/44.jpg"
import Staff45 from "../../Assets/Staff/45.jpg"
import Staff46 from "../../Assets/Staff/46.jpg"
import Staff47 from "../../Assets/Staff/47.jpg"
import Staff48 from "../../Assets/Staff/48.jpg"
import Staff49 from "../../Assets/Staff/49.jpg"
import Staff50 from "../../Assets/Staff/50.jpg"


// Mantine Ui
import { Card } from '@mantine/core'

const Staff = () => {

    const ImageData = [
        {
            name: `Deepa Rani (Principal)`,
            degree: `M.Sc, B.Ed, MBA`,
            image: Staff1
        },
        {
            name: `Dhanalakshmi R
           `,
            degree: ` MA, B.Ed`,
            image: Staff2
        },
        {
            name: `Chandrakala B N`,
            degree: `MA, B.Ed, R.I.E`,
            image: Staff3
        },
        {
            name: `Thimmalegowda `,
            degree: `BA, M.P.Ed.`,
            image: Staff4
        },
        {
            name: `Suchitra. G.K`,
            degree: `MA, NTT`,
            image: Staff9
        },
        {
            name: `Meera. B.L`,
            degree: `MA, B.Ed.`,
            image: Staff10
        },
        {
            name: `Vani. D.N`,
            degree: `MA, B.Ed.`,
            image: Staff11
        },
        {
            name: `Bharathi. K
           `,
            degree: ` M.Sc, B.Ed. MA, R.I.E`,
            image: Staff12
        },
        {
            name: `Kalpana Meyyappan
            `,
            degree: `M.Sc, B.Ed.`,
            image: Staff13
        },
        {
            name: `Latha B S
           `,
            degree: ` DCS, BCA`,
            image: Staff14
        },
        {
            name: `Archana. V Channi
          `,
            degree: `  MA, B.Ed.`,
            image: Staff15
        },
        {
            name: `Rajiv. A (Music Teacher)  
           `,
            degree: ` B.com/ Junior in Music`,
            image: Staff16
        },
        {
            name: `Sunitha. B.N
           `,
            degree: ` B.Sc, B.Ed.`,
            image: Staff17
        },
        {
            name: `Ashwini K H
           `,
            degree: ` M.Sc, B.Ed.`,
            image: Staff18
        },
        {
            name: `Sajna S
           `,
            degree: ` MA, B.Ed.`,
            image: Staff19
        },
        {
            name: `Shubha H M
           `,
            degree: ` M.Sc, B.Ed.`,
            image: Staff20
        },
        {
            name: `Alka Hans
            `,
            degree: `B.Sc, B.Ed.`,
            image: Staff21
        },
        {
            name: `Deepa U N
            `,
            degree: `B.Sc, M.Ed.`,
            image: Staff22
        },
        {
            name: `Shubha Srinivasan
           `,
            degree: ` BA, B.Ed, NPTT`,
            image: Staff23
        },
        {
            name: `Heera Ram
          `,
            degree: `  MA, B.Ed.`,
            image: Staff24
        },
        {
            name: `Uma S
            `,
            degree: `MA, B.Ed.`,
            image: Staff25
        },
        {
            name: `Sharmila J
           `,
            degree: ` MA, B.Ed.`,
            image: Staff26
        },
        {
            name: `Vasudha Harish
            `,
            degree: `BA, B.Ed, R.I.E`,
            image: Staff27
        },
        {
            name: `Shantha S. Muthathi
            `,
            degree: `B.Sc, B.Ed.`,
            image: Staff28
        },
        {
            name: `Uma L. V.
            `,
            degree: `B.A, NTT`,
            image: Staff29
        },
        {
            name: `Madhuri Ramesh Magadum
           `,
            degree: ` BE, B.Ed.`,
            image: Staff30
        },
        {
            name: `Manu K H
            `,
            degree: `MA, B.Ed.`,
            image: Staff31
        },
        {
            name: `Padmashree
            `,
            degree: `MA, B.Ed.`,
            image: Staff32
        },
        {
            name: `Chethana Ankola
            `,
            degree: `B.Sc, B.Ed`,
            image: Staff33
        },
        {
            name: `Thanuja D
           `,
            degree: ` M.Sc, B.Ed.`,
            image: Staff34
        },
        {
            name: `Roopa S
          `,
            degree: `  M.Sc, B.Ed.`,
            image: Staff35
        },
        {
            name: `Krishnamurthy Bhat
            `,
            degree: `MA, B.Ed.`,
            image: Staff36
        },
        {
            name: `Prathibha B
            `,
            degree: `M.Sc, B.Ed.`,
            image: Staff37
        },
        {
            name: `Rashmi
            `,
            degree: `B.com, ECCEd.`,
            image: Staff38
        },
        {
            name: `Kavitha Prabhu
           `,
            degree: ` B.com, B.Ed.
            
            `,
            image: Staff39
        },
        {
            name: `Brunda 
           `,
            degree: ` M.Sc, B.Ed.`,
            image: Staff40
        },
        {
            name: `Savitha S
            `,
            degree: `MSc, B.Ed.`,
            image: Staff41
        },
        {
            name: `Amisha Kumari
            `,
            degree: `B.A, B.Ed.`,
            image: Staff42
        },
        {
            name: `Lohith S
            `,
            degree: `M.Sc, B.Ed.`,
            image: Staff43
        },
        {
            name: `Anupama Pandith K
           `,
            degree: ` M.Sc`,
            image: Staff44
        },
        {
            name: `Varun G S
            `,
            degree: `M.Com , B.Ed`,
            image: Staff45
        },
        {
            name: `Deepa Dinesh Shirodkar
           `,
            degree: ` M.A, B.Ed, PGDFN`,
            image: Staff46
        },
        {
            name: `Ramya H R
           `,
            degree: ` BBM, B.Ed.`,
            image: Staff47
        },
        {
            name: `Bhagyashri Kulkarni
           `,
            degree: ` Vidwan in Hindi`,
            image: Staff48
        },
        {
            name: `Vidya Sriram
           `,
            degree: ` B.A, NTT`,
            image: Staff49
        },
        {
            name: `Prince Singh
           `,
            degree: ` B.A, B.Ed.`,
            image: Staff50
        },
    ]
    return (
        <div>
            <div className="staffdetails-page">
                <div className="staffdetails-container">
                    <div className="staffdetails-grid">
                        {
                            ImageData?.map((value, index) => {
                                return (
                                    <Card className="staffdetails-grid-card">
                                        <Card.Section>
                                            <img src={value?.image} alt='Staff-Image' />
                                        </Card.Section>
                                        <h3>
                                            {value?.name}
                                        </h3>
                                        <p>
                                            {value?.degree}
                                        </p>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff