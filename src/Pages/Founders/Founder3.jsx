import React from 'react'

// Pages
import Founders from '../../Components/Founders/Founders'

// Images
import FounderImage from "../../Assets/profileone.png"

const Founder3 = () => {
    window.scroll(0, 0)
    const Data = {
        title: `Sri Sri Dr. Prakashnatha Swamiji, Managing Director, BGS Group of Institutions and Hospitals `,
        icon: FounderImage,
        list: [
            ` “Knowledge gives discipline, from discipline comes worthiness, from worthiness one gets wealth, from wealth (one does) good deeds, from that (comes) joy.”    `,
            `“Education is the most powerful tool so use it wisely”. If you are a privileged person, help others by enlightening them, by teaching them the difference between right and wrong and imparting moral values. If education is based on values and ethics, strengthened by sound moral principles, then our generation will grow up as good human beings.  `,
            ` Education doesn’t come on its own as there has got to be an intermediary who can impart knowledge and show them the right path. This is certainly the role a teacher plays in our lives, and he/she is the one who comes as an experienced person and helps children differentiate between right and wrong. BGS Public School imparts knowledge in various fields and ensures that the students grow up as responsible citizens. The school does not believe in bookish knowledge; it teaches values and helps the students to know how to live their lives with dignity, conduct themselves, how to be humble and how to treat others.   
            `,
            `
            BGS Public School believes in fun filled and stress-free learning. Every single child is given the opportunity to share and express his/her view freely. I noticed in every event, there was maximum participation of the students. The school not just focuses on academics but also takes care of the all-round development of the students. It could be sports, cultural events, competitive exams, etc. Therefore, I believe education is something not just restricted to books or classroom teaching, but it’s about acquiring skills, realizing our inner strengths and polishing those strengths.  `,
            `
            So, it is important to impart good values to our future generation and never lose sight of the primary aim of education, i.e., to become good and responsible global citizens. I wish all the teachers, students and parents of BGS Public School all the best. `
        ]
    }
    return (
        <div>
            <Founders data={Data} />
        </div>
    )
}

export default Founder3