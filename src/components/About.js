import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     💻 Hi, I'm a Full Stack developer with skills in Python, JavaScript, PHP, SQL, NodeJS and with frameworks like Angular, Laravel, React and Express.
                     <br />
                        My coding journey began in college, where I dabbled in the world of programming while doing a 2-year term in Systems Engineering. That's when Python first caught my attention. From there, I went the DIY route, delving into docs, forums, YouTube rabbit holes, 
                        and  Udemy courses. This is how I got acquainted with web development with HTML, CSS, JavaScript and many other frameworks.
                     <br />
                     🔸My goal is to continue growing both in work experience and in knowledge of new technologies.
                     <br />
                     🔹I highlight my taste for programming since it helps me overcome obstacles, challenges, learn about new technologies and train myself day by day.
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Contact</h2>
                        <p className="address">
                           <span>
                              {resumeData.address}
                           </span>
                           <br></br>
                           <span>{resumeData.website}</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}