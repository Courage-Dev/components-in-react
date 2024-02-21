
import "./div1.css";
import PropTypes from 'prop-types'
const Div1 = ({wrld, heads,background}) => {
    return (    
        <div style={{background:''}} className='first1'>
            <div className="wrap">
            <div className="images">
                <img src={wrld}/>
            </div>
                <h4>
                    {heads}
                </h4>
              <p>
                Study at the designated institution and complete the specified course of study.
                You are allowed to work part-time during the academic session and full-time during scheduled breaks
              </p>
            </div>
            
        </div>
     )
}

 Div1.propTypes = {
wrld: PropTypes.object,
heads: PropTypes.string,
background:PropTypes.string
 }

export default Div1;



