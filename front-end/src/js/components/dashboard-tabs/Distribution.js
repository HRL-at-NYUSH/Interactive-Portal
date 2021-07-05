import React from 'react'
import Histogram from '../graphs/Histogram'
import BarChart from '../graphs/BarChart'
import Boxplot from '../graphs/Boxplot'

function Distribution() {
    return (
        <div id="Distribution">
            <Histogram />
            <BarChart />
            <Boxplot />
        </div>
    )
}

export default Distribution