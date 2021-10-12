import React from 'react'
import MainHero from '../cmps/svgs/MainHero'
import ipadImg from '../assets/imgs/upgrade-ipad-logo.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home'>

            <div className="home-first-section main-title-and-svg">
                <div>
                    <pre className='home-main-title'>
                        קפיצת
                        המדרגה
                        שלך!
                        קפיצת
                        המדרגה
                        שלך!
                    </pre>
                    <pre className='home-main-subtitle'>
                        תוכנת UPGRADE360 עובדת במקומכם ובשבילכם! <br />
                        תוכנה שפותחה לאחר שנים של נסיון בתחום הכושר והסטודיואים המגישה לכם על מגש של כסף את כל מה שאתם צריכים על מנת להגדיל כמות מתאמנים, לשמר לקוחות קיימים ולמקסם את העסק לרמה הבאה וכל זה תוך חיסכון עצום בזמן, משאבים, עובדים, הכשרות והקניית שקט נפשי לכם שהכל עובד ומתוקתק בשבילכם!
                    </pre>
                    <button>
                        חודש ראשון עלינו - אין מה להפסיד!
                    </button>
                </div>
                <MainHero />
            </div>

            <div className="home-second-section">
                <div className='card-layout'>
                    <p className="home-second-section-title">
                        שימור לקוחות
                    </p>
                    <p className="home-second-section-subtitle">
                        מערך שלם מקיף ומדהים של  שימור<br /> לקוחות מקסימלי וחווית לקוח אישית!
                    </p>
                </div>
                <div className='card-layout'>
                    <p className="home-second-section-title">
                        מטלות יומיות
                    </p>
                    <p className="home-second-section-subtitle">
                        ביצוע מטלות יומיות בצורה איכותית, <br /> מהירה וקלה ומבלי לפספס אף מטלה!
                    </p>
                </div>
                <div className='card-layout'>
                    <p className="home-second-section-title">
                        ניהול מכירה
                    </p>
                    <p className="home-second-section-subtitle">
                        מיקסום תהליכי מכירה והמרת לידים<br /> ללקוחות משלמים!
                    </p>
                </div>
            </div>

            <div className="home-third-section">

                <div className="main-title-and-svg">

                    <div className="text">
                        <span className="title-1">
                            שליחת הודעות וואטצפ אישיות   <br />
                            בקלות ובמהירות! <br />
                        </span>
                        <span className="title-2">
                            זמן שווה כסף.<br />
                            נקודה. <br />
                        </span>
                        <span className="title-3">
                            מספר קליקים בודדים והכל נשלח בצורה<br />
                            אישית כאילו אתם שלחתם בעצמכם!<br />
                            לא תאמינו כמה זה פשוט וקל!<br />
                        </span>
                    </div>

                    <div className="floating-card">
                    </div>


                </div>

                <div className="main-title-and-svg">
                    {/* <img className='home-ipad-img' src="https://app-getwild.ussl.co.il/wp-content/uploads/2021/08/UpGradeH-iPad-Landscape.d110a0.webp" alt="" /> */}
                    <img className='home-ipad-img' src={ipadImg} alt="" />
                    <div className="text">
                        <span className="title-1">
                            התממשקות מלאה למערכת CRM <br />
                            ניהול של הסטודיו שלכם!  <br />
                        </span>
                        <span className="title-2">
                            מתחברים פעם <br />
                            אחת וזהו! <br />
                        </span>
                        <span className="title-3">
                            ההודעות וואטצפ נשלחות אוטומטית <br />
                            בימים ושעות שאתם מגדירים מראש,<br />
                            בצורה אישית כאילו שלחתם בעצמכם.
                        </span>
                    </div>

                </div>

                <div className="main-title-and-svg">
                    <div className="text">
                        <span className="title-1">
                            תזמון התראות  <br />
                        </span>
                        <span className="title-2">
                            צרו עכשיו <br />
                            התראה למחר. <br />
                        </span>
                        <span className="title-3">
                            כך תוכלו ליצור התראות בזמן <br />
                            שמתאים לכם בלי הפרעות ובלי לחץ.
                        </span>
                    </div>
                    <img className='home-bottle-img' src="https://app-getwild.ussl.co.il/wp-content/uploads/2021/08/15483-sport-bottle-31_metal-1024x1024.d110a0.webp" alt="" />

                </div>
            </div>

            <div className="home-fourth-section">
                <div className="text">

                    <span className="title-2">
                        בא לכם לנסות אותנו <span className="title-2" style={{ color: 'white' }}>בחינם?</span>

                    </span>
                    <span className="title-3">
                        30 ימי ניסיון ללא עלות למצטרפים חדשים
                    </span>
                    <button> אני רוצה לנסות</button>
                </div>

            </div>

            <div className="home-fifth-section">
            </div>
        </div>

    )
}
