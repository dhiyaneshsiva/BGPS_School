import React from 'react'

// Pages
import Founders from '../../Components/Founders/Founders'

// Images
import FounderImage from "../../Assets/profilethree.png"

const Founder2 = () => {
    const Data = {
        title: `Bhairavaikya  His Holiness Jagadguru 
        Sri  Sri  Sri Dr. Balagangadharanatha 
        Mahaswamiji   (1954-2013) `,
        icon: FounderImage,
        list: [
            `It is rightly said that “A dream 
            becomes a goal when action is taken 
            towards its achievement”. In order 
            to achieve this ambitious dream of 
            every child, the facilitators at 
            BGS Public School are committed 
            to take constructive and purposeful 
            actions in order to produce optimistic, 
            independent, compassionate, life-long 
            learners, future leaders and role models 
            of the society. `,
            `Our motto has always been the 3Ds – 
            Determination, Dedication and Discipline 
            in the work you do, in order to ensure an 
            outstanding, enjoyable and conducive 
            learning environment to students. `,
            `Being experienced as an organized 
            professional with proven teaching, 
            guidance and counselling skills, I 
            firmly believe a person should possess 
            both intelligence and virtue and have 
            training in the five aspects of education 
            namely, the moral, the intellectual, 
            physical, social and aesthetic aspects. 
            Only then can students achieve a holistic 
            development before they can contribute 
            to the well-being of the community.  
            `,
            `
            I expect myself to be frank, 
            sincere and modest with others and 
            spare no effort in doing things. 
            Along with this, it is very important 
            to have the spirit of cooperation 
            between the school and the parents, our 
            main stakeholders, to make the upbringing 
            of children beneficial.`
        ]
    }
    return (
        <div>
            <Founders data={Data} />
        </div>
    )
}

export default Founder2