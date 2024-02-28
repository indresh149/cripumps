import React from "react";
//import { FaAngleDown } from "react-icons/fa";
import "./App.css";
import logo from "./Assets/logo.png";
import Award from "./Assets/1.png";
import AwardCeremony from "./Assets/2.png";
import Motors from "./Assets/3.png";
import { Card } from 'react-bootstrap';

const App = () => {
  return (
    <div style={{backgroundColor:"#e3d984"}}>
      <div class="center">
        <img src={logo} alt="Logo" class="logo" />
      </div>

      <div class="middle-container">
        <div>
          <img src={Award} alt="Award" class="Award" />
        </div>

        <div class="right-side">
        <h5 style={{fontWeight:'bold'}}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
          <ul class="list-container">
            <li class="normal-text">
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li class="normal-text">
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <Card class="card-container">
            <Card.Body>
            <img src={AwardCeremony} alt="Award-ceremony" class="Award-Ceremony" />
              <Card.Title class="normal-text">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
              </Card.Title>
            </Card.Body>
          </Card>
               
        
        </div>

        <div>
          <h5 class="installed-text">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h5>

          <div>
          <img src={Motors} alt="Motors" class="Motors" />
        </div>
        
          <h4 class = "below-text"> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors</h4>
        </div>
        

        

      </div>
      <hr size="2" color="red" class="hrr"/>

      <div class="footer">
        <h5 class="footer-text">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <h6 class="footer-types">
          CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA
          | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL &
          MINING | FOOD & BEVERAGE | 
        </h6>
        <h6 class="footer-types2">
          PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING |
          AGRICULTURE & RESIDENTIAL
        </h6>
        
        <div class="footer-box">
        <div class="footer-item">
          <div class="caller-container">
            <i class="fa fa-phone iconn"></i>
            <span>Toll-free 1800 200 1234</span>
          </div>
        </div>
        <div class="footer-item">
          <div class="fb-container">
            <i class="fa fa-facebook" style={{marginRight:10,}}></i>
            <span>www.facebook.com</span>
          </div>
        </div>
        <div class="footer-item">
          <div class="web-container">
            <i class="fa fa-globe" style={{marginRight:10}}></i>
            <span>www.crigroups.com</span>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default App;
