import React from 'react'

// Pages
import Founders from '../../Components/Founders/Founders'

// Images
import FounderImage from '../../Assets/profiletwo.png'
import Yellow from "../../Assets/yellow.png"

const Founder1 = () => {
    window.scroll(0, 0)
    const Data = {
        title: `Bhairavaikya  His Holiness Jagadguru 
        Sri  Sri  Sri Dr. Balagangadharanatha 
        Mahaswamiji   (1954-2013) `,
        icon: FounderImage,
        img: Yellow,
        list: [
            `On 24 Sept 1974 he became the 71st pontiff of the Adichunchanagiri Dharma Peetha and worked tirelessly to realize his vision of revolutionizing Society through Spiritual, Educational, Social, Cultural activities of the Mutt. He travelled all around the world understanding the needs of the people.  `,
            `His Holiness was truly an enlightened and realized soul for he treated all the people alike, without discriminating based on caste, creed, sex or status. His approach towards handling different problems was truly scientific and logical.  `,
            `This led to the establishment of Sri Adichunchanagiri Shikshana Trust.  At present nearly 500 such institutions are functioning across the Nation aiding the Government in educating the rural and semi-rural children. Also, Mahaswamiji has made free boarding and lodging facilities for Civil services aspirants in the premises of the Mutt in Bangalore.   `,
            `Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji not only emphasized modern system of Education but also advocated traditional teaching system.  It is the collective responsibility of the community to continue and preserve the devoted services of His Holiness Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji, during whose era the Mutt reached the maximum grandeur. The consistent efforts of this 71st pontiff should be ideal for the forthcoming successors to work for Humanity selflessly and exhibit more zeal than before in achieving the dreams and visions of the former come to reality. `
        ]
    }
    return (
        <div>
            <Founders data={Data} />
        </div>
    )
}

export default Founder1