import React from "react";
import '../Style/Home.css';
import QuickSearchItems from "./QuickSearchItems";

class Quick extends React.Component{

    render(){

        const { mealtypeData } = this.props;

        return(

            <div>
             

                     {/* <!--Quick Searches Part (lower)--> */}

                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div>
                            <h3 className="heading">Quick Searches</h3>
                            <p className="subheading">Discover restaurants by type of meal</p>
                        </div>
                    </div>
                    
                    {/* <!--First Line--> */}
                    <div className="d-flex flex-wrap">

                        <QuickSearchItems data = { mealtypeData }   />
                        
                    </div>

                </div>

                       
                       
                  
 
            </div>








        )
    }
}

export default Quick;