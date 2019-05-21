import React, {Component} from 'react';
import * as stats from '../../utils/stats'
//import * as d3 from 'd3'; // Uncomment if you're doing the chart logic here or delete this
import axios from 'axios';

class Blank extends Component {
    state ={
        liveData: [],
        hasError: false
    }

    getLiveData = async () => {
        await axios.get('http://graduateportal-dev.tw7ahpynm7.us-east-2.elasticbeanstalk.com/api/graduates/data-visualization')
        .then(resp => {
            this.setState({liveData:[...resp.data.data]})
        })
        .catch(error => this.setState({hasError:true}))
    }

    componentDidMount = () => {
        this.getLiveData()
    }


    render (){
        const {hasError, liveData} = this.state

        /**
         * You should be able to adjust the object below to suit your needs
         */

        const d0 =  {
            "Overall": stats.avg(liveData),
            "Median": stats.calculateMedian(liveData.map(obj => stats.parseCurrency(obj.salarychange))),
            "Multiple Classes": stats.avg(liveData.filter(obj => obj.numberofclasses !== "1")),
            "Men": stats.avg(liveData.filter(obj => obj.gender === "Male")),
            "POC": stats.avg(liveData.filter(obj => obj.demographic !== "W")),
            "Women": stats.avg(liveData.filter(obj => obj.gender === "Female")),
            "Single Class": stats.avg(liveData.filter(obj => obj.numberofclasses === "1")),
            "Veterans": stats.avg(liveData.filter(obj => obj.veteran === "Y"))
        }

        console.log(d0) // Just showing my work Jamal ;)

        /**
         * If there is a network error render the failure else render the blank or chart...
         * Left the inline styles intact for now.
         */

        return hasError? <h2 className="App" 
                             style={{margin:"25px",padding:"8px",backgroundColor:"pink",color:"red"}}>
                                 &#x26A0; A Network Error has occurred - Please try again later
                         </h2>
                    : <h2 className="App">Blank</h2>
    }
}

export default Blank