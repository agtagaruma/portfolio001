import styled from "styled-components";
import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Terms() {
  return (
    <div>
    <Section id="Terms">
    <div className="maincontainer2">
       
        <div class="container2">
          <div class="py-5 text-center">
            
            <h2>Terms & Conditions</h2>
            <p class="lead">	Lorem ipsum dolor sit amet. Ut corrupti corrupti est veniam facilis hic quaerat facilis. Aut alias quibusdam ut tenetur necessitatibus est consequuntur reiciendis ab quia architecto ea odio aperiam non laborum harum. Sed quas molestiae est repudiandae quia vel obcaecati corrupti? 			Et doloribus aspernatur qui porro possimus id illum libero ut velit odit. Vel debitis eius sit soluta doloremque ad quis quia ad obcaecati commodi ut soluta autem in cupiditate quia. Vel inventore autem qui quod recusandae sed temporibus sint et ducimus neque. Quo iusto dicta et autem iste sed iure tenetur est sint internos vel repellat suscipit. Ea labore odio ut assumenda facilis id provident facere. Hic veritatis sunt quo tempora voluptatem et dolor internos! Quo internos enim eos dicta molestiae et dolores itaque. Sed modi quia est cupiditate quae nam quaerat veritatis et rerum facere. </p>
          </div>

          <div class="py-5 text-center">
            
            <h2>Privacy Policy</h2>
            <p class="lead">	Lorem ipsum dolor sit amet. Ut corrupti corrupti est veniam facilis hic quaerat facilis. Aut alias quibusdam ut tenetur necessitatibus est consequuntur reiciendis ab quia architecto ea odio aperiam non laborum harum. Sed quas molestiae est repudiandae quia vel obcaecati corrupti? 			Et doloribus aspernatur qui porro possimus id illum libero ut velit odit. Vel debitis eius sit soluta doloremque ad quis quia ad obcaecati commodi ut soluta autem in cupiditate quia. Vel inventore autem qui quod recusandae sed temporibus sint et ducimus neque. Quo iusto dicta et autem iste sed iure tenetur est sint internos vel repellat suscipit. Ea labore odio ut assumenda facilis id provident facere. Hic veritatis sunt quo tempora voluptatem et dolor internos! Quo internos enim eos dicta molestiae et dolores itaque. Sed modi quia est cupiditate quae nam quaerat veritatis et rerum facere. </p>
          </div>

          <div class="row">
                  <div class="col-md-6 mb-3">
                  <button class="btn btn-primary btn-lg btn-block" type="button">Close</button>
                  </div>
          </div>      
          </div>
          <br/>
        </div>
     
      
      </Section>
    </div>
  )
}

const Section = styled.section`
html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.maincontainer2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonBelow{
  gap: 1rem;
}

.container2 {
  max-width: 960px;
  
}
.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

`;
