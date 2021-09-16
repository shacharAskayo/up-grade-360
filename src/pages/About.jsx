import React from 'react'
import AboutHero from '../cmps/svgs/AboutHero'

export default function About() {
    return (
        <div className='about'>
            <div className="main-title-and-svg">
                <div>
                    <pre className='home-main-title'>
                        מה אומרים
                        שנכיר רגע?
                    </pre>
                    <pre className='home-main-subtitle'>
                        חברת UPGRADE360 מתמחה בהתממשקות למערכות CRM
                        ושליחת הודעות ווטצפ אוטומטיות אישיות עם שם הלקוח ועוד פרמטרים רלוונטים לסיטואציות המתרחשות יום יום בעסק,בתזמונים מוגדרים מראש וללא מגע יד אדם!
                        ההתמחות שלנו היא תחום הכושר והFitness!.
                    </pre>
                    <button>
                        חודש ראשון עלינו - אין מה להפסיד!
                    </button>
                </div>
                <AboutHero />
            </div>
        </div>
    )
}
