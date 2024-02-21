import Navbar from "../components/Navbar/nav";
import Heading1 from "../components/heading/heading1";
import logo from '../assets/logo.jpg';
// import Sxz from "../components/div1/div1";
import Div1 from "../components/div1/div1";


const Home = () => {
    return ( 
        <div>
            
    <Navbar/>
    <Heading1/>

    <Div1  wrld ={logo}
    background=""
    heads='Choose Destination'
    para='Study at the designated institution and complete the specified course of study.
    You are allowed to work part-time during the academic session and full-time during scheduled breaks' />

   <Div1  wrld ={logo}
    heads='Provide Visa Information'
    p='Study at the designated institution and complete the specified course of study.
    You are allowed to work part-time during the academic session and full-time during scheduled breaks' />

   <Div1  wrld ={logo}
    heads='Submit Required Documents'
    p='Study at the designated institution and complete the specified course of study.
    You are allowed to work part-time during the academic session and full-time during scheduled breaks' />


<Div1  wrld ={logo}
    heads='Visa Approval and Delivery'
    p='Study at the designated institution and complete the specified course of study.
    You are allowed to work part-time during the academic session and full-time during scheduled breaks' />





     
        </div>
     );
}
 
export default Home;