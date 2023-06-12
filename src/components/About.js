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
                     Llevo más de 3 años estudiando programación, mis primeras interacciones con la profesión fueron en la universidad donde aprendí a programar con  Python, a partir de allí empecé a estudiar de manera autodidacta mediante plataformas de cursos, JavaScript. Luego de los años de puro aprendizaje, conseguí mi primer  trabajo en KeyData.
                     <br />
                     Destaco mucho mi habilidad de amoldarme a las tecnologías gracias a mi gran conocimiento en JavaScript (lenguaje que utilizó hace más de 1 año), tengo proyectos personales donde utilizó el stack “MERN” y cuento con experiencia laboral en ReactJS y Angular.
                     En la empresa Key Data tuve la oportunidad de trabajar en el área de Back-end y Front-end con el lenguaje de programación PHP, utilizando el framework Laravel y Livewire.
                     En dicha empresa también comencé a interactuar con las bases de datos SQL y MongoDB.
                     <br />
                     El comenzar a utilizar el lenguaje PHP y las bases de datos fue un desafío en el que aprendí cómo afrontarse hacia nuevas tecnologías y lo más importante la comunicación con mis compañeros e investigar sobre los desconocimientos que se me dispongan en el momento de trabajar.
                     <br />
                     El gusto que obtengo hacía la programación, me ayuda a atravesar obstáculos, desafíos y aprender sobre nuevas tecnologías.
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