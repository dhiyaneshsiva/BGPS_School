import React, { useEffect } from 'react'
import "./Accolades.css"


// Images
import Award from "../../Assets/award.png"

const Accolades = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div>
            <div className='Accolades-page'>

                {/* Section1 */}
                <div className='Accolades-sec-1-container'>
                    <div className='Accolades-sec-1-content'>
                        <div className='Accolades-sec-1-content-left'>
                            <h1>
                                Accolades
                            </h1>
                            <p>
                                BGS Public School motivates the students to
                                participate in various events and competitions
                                and encourages them to create impressions of
                                their footprints in this competitive world.
                                Our students have brought glory to the school
                                by winning awards and medals in various competitions
                                during this term. August and September months.BGS
                                Public School motivates the students to participate
                                in various events and competitions and encourages
                                them to create impressions of their footprints in
                                this competitive world. Our students have brought
                                glory to the school by winning awards and medals
                                in various competitions during this term. August
                                and September months.
                            </p>
                        </div>
                        <div className='Accolades-sec-1-content-right'>
                            <img src={Award} alt='Award' />
                        </div>
                    </div>
                </div>
                {/* Section1 */}


                {/* Sectio2 */}
                
                    <div className='Accolades-sec-2-container'>
                        <h1>
                            Accolades
                        </h1>
                        <div className='Accolades-sec-2-container-para'>
                            <p>
                                Parikshit from grade VII has graduated in SIP
                                abacus and won a trophy as the first runner up.
                                Additionally, Adhitri R Kiran from Grade VI has
                                participated in 1st level abacus and has been
                                awarded with the position of third runner up.
                                And Krithi K Gowda from Grade VI has completed
                                her 7th level abacus and won the Championship trophy.
                            </p>
                            <p>
                                As a young leader in the making, Harshitha from grade
                                7 has won a Champions trophy in regional state competition
                                conducted by ‘Brain O Brain’
                            </p>
                        </div>
                    </div>
                
                {/* Sectio2 End */}

            </div>
        </div>
    )
}

export default Accolades
