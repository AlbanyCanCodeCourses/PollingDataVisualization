import React, {useState} from 'react'

const head = {
    padding: "0px 20px 0px 20px",
    color: "#4682B4"
}

const content = {
    padding: "0px 20px 0px 20px",
    backgroundColor: "#4682B4",
    color: "white"
}

const ul = {
    listStyleType: "none"
}

const SidebarContent = (props) => {
    const [overall,setOverall] = useState(false)
    const [mulitpleClasses,setMultipleClasses] = useState(false)
    const [singleClass,setSingleClass] = useState(false)
    const [median,setMedian] = useState(false)
    const [unEmployed,setUnemployed] = useState(false)
    const [women,setWomen] = useState(false)
    const [poc,setPOC] = useState(false)

    console.log(props)

    const submitHandler = e => {
        e.preventDefault()
        console.log({overall,mulitpleClasses,singleClass,median,unEmployed,women,poc})
    }

    const toggleOverall = () => {
        setOverall(!overall)
    }

    const toggleMultiClasses = () => {
        setMultipleClasses(!mulitpleClasses)
    }

    const toggleMedian = () => {
        setMedian(!median)
    }

    const toggleUnemployed = () => {
        setUnemployed(!unEmployed)
    }

    const toggleWomen = () => {
        setWomen(!women)
    }

    const togglePOC = () => {
        setPOC(!poc)
    }

    const toggleSingleClass = () => {
        setSingleClass(!singleClass)
    }

    return (
        <>
            <div style={head}>
                <h3><i>Choose your chart options:</i></h3>
                <hr/>
            </div>
            <div style={content}>
                <form onSubmit={e => submitHandler(e)}>
                    <ul style={ul}>
                        <li>
                            <input type="checkbox"
                                   checked={overall}
                                   onChange={toggleOverall}
                            />
                            <label htmlFor="overall">Overall</label>
                        </li>
                        <li>
                            <input type="checkbox"
                                   checked={mulitpleClasses}
                                   onChange={toggleMultiClasses}
                            />
                            <label htmlFor="multi-c">Multiple Classes</label>
                        </li>
                        <li>
                            <input type="checkbox"
                                   checked={median}
                                   onChange={toggleMedian}
                            />
                            <label htmlFor="median">Median</label>
                        </li>
                        <li>
                            <input type="checkbox"
                                   checked={unEmployed}
                                   onChange={toggleUnemployed}
                            />
                            <label htmlFor="unempl">Unemployed</label>
                        </li>
                        <li>
                            <input type="checkbox"
                                   checked={women}
                                   onChange={toggleWomen}
                            />
                            <label htmlFor="women">Women</label>
                        </li>
                        <li>
                            <input type="checkbox"
                                   checked={poc}
                                   onChange={togglePOC}
                            />
                            <label htmlFor="poc">POC</label>
                        </li>
                        <li>
                            <input type="checkbox"
                                   checked={singleClass}
                                   onChange={toggleSingleClass}
                            />
                            <label htmlFor="single-c">Single Class</label>
                        </li>
                        <li><button type="submit" value="submit">Submit</button></li>
                    </ul>
                    
                </form>
            </div>
        </>
    )
}

export default SidebarContent