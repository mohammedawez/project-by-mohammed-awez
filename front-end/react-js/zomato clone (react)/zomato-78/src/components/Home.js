import React from "react";
import '../Style/Home.css';

import Welcome from "./Welcome";
import QuickSearch from "./QuickSearch";
import axios from "axios";


class Home extends React.Component{

  //if you have any dount regarading below given or under standing video recoreding :-30 (24/)

     constructor(){
        super();
        this.state = {
            locations: [],
            mealtype: []  
        }
     }


     componentDidMount(){ 



        axios({
            url: 'http://localhost:5500/locations',
            method: 'GET',
            headers: { 'Content-Type':'application/JSON' }
        })
        .then(res => {
            this.setState({locations:res.data.locations})
        })
        .catch(err => console.log(err))

 

        axios({
            url: 'http://localhost:5500/mealtype',
            method: 'GET',
            headers: { 'Content-Type':'application/JSON' }
        })
        .then(res => {
            this.setState({mealtype:res.data.mealtype})
        })
        .catch(err => console.log(err))






     }


    render(){

        const { locations,mealtype } = this.state;

        return(

            <div>
             
            {/* Welcome part (upper) */}
       
                   <Welcome locationData = { locations } />

            {/* welcome (bottom part) */}
                  
                  <QuickSearch mealtypeData = { mealtype } />


 
            </div>








        )
    }
}

export default Home;



