import React from "react";
import Styles from "./Navbar.module.css";
const pathimg ="https://res.cloudinary.com/dtsuedlmt/image/upload/a_hflip,c_scale,q_auto,r_6,w_42/a_29/v1699990460/travelwebsite/travel-bag_kk1nsk.png";
const Navbar = () => {
   return (
     <div className={Styles.navbar_container}>
       <div className={Styles.navbar_heading}>
         <div className={Styles.navbar_imgicon}>
           <img loading="lazy" src={pathimg}></img>
         </div>
         <div>
           <h2>Vacation tour</h2>
         </div>
       </div>
       <div className={Styles.navbar_content}>
         <navlink to="/destination" className={Styles.navbar_dest}>
           <h3>destination</h3>
         </navlink>

         <navlink to="/about-us" className={Styles.navbar_about}>
           <h3> about</h3>
         </navlink>

         <navlink to="/contact-us" className={Styles.navbar_contact}>
           <h3> contact</h3>
         </navlink>
       </div>
     </div>
   );
};
export default Navbar;
