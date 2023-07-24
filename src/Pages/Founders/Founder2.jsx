import React from 'react'

// Pages
import Founders from '../../Components/Founders/Founders'

// Images
import FounderImage from "../../Assets/profilethree.png"

const Founder2 = () => {
    window.scroll(0, 0)
    const Data = {
        title: `Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji, President, Adichunchanagiri Shikshana Trust `,
        icon: FounderImage,
        list: [
            ` “I salute to that Sadguru who is the source of eternal bliss, supreme happiness, who has true wisdom, who is beyond the dualities, who is infinite, whose attention is always on the divine, who is unique, eternal, pure, steady, and who sees with the eyes of wisdom who is beyond thoughts and beyond three gunas”.`,
            `The aim of education should be to teach one how to think, rather than what to think. `,
            `“Education would be much more effective if its purpose is to ensure that by the time, they leave school every boy and girl should know how much they do not know and be imbued with a lifelong desire to know it.” BGS Public School has proven its effectiveness in imparting knowledge to each student and built a desire to know what they do not know.  
            `,
            `
            The focus of BGS Public School is to develop the personality of the individual and to make the children understand the significance of their life to themselves and to others. The teachers of this prestigious institution under the support and guidance of their mentors strive hard to make docile and inquisitive citizens who are the Nation Builders. School is driven by the belief that every child deserves a high-quality education, and that educational opportunity is a basic human right. Providing ample educational opportunities is one of the most fundamental obligations each generation owes to the ones that follow. BGS Public School provides a lot of opportunities to students in every field of education to prepare a skillful, wise, intelligent, creative and confident future generation.`,
            `
            The school environment is designed for the 21st century and technology continues to support the students to develop their skills. The dedicated faculties have produced many future leaders, doctors, engineers, politicians etc. Teachers and students are provided with lots of opportunities. Opportunities carry responsibilities. You must accept these responsibilities, seize and grow. In this competitive world, you will be able to make your future bright only with decisive approach, firm determination and committed focus on your set goals.
            `,
            `
            I hope that all of you get lots of fame and achieve greater distinction. Wishing you lots of luck and good wishes for your future.
            `
        ]
    }
    return (
        <div>
            <Founders data={Data} />
        </div>
    )
}

export default Founder2