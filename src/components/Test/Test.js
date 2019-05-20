import React, { useState, useEffect } from 'react'
import * as d3 from '../../../node_modules/d3'
import axios from 'axios'

const Test = (props) =>{
    const [livedata, setLiveData] = useState([])

    const getLiveData = async () => {
        await axios.get('http://graduateportal-dev.tw7ahpynm7.us-east-2.elasticbeanstalk.com/api/graduates/data-visualization')
        .then(resp => console.log(resp))
        .error(error => console.log(error))
    }

    useEffect(() =>{
        setTimeout(() => getLiveData(),1500)
    },[])

    return (
        <div>Test</div>
    )
}

export default Test