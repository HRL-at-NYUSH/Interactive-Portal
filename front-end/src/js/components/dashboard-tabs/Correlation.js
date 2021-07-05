import React from 'react'
import Matrix from '../graphs/CorrelationMatrix'
import Scatter from '../graphs/ScatterPlot'

function Correlation() {
    return (
        <div id="Correlation">
            <Matrix />
            <Scatter />
        </div>
    )
}

export default Correlation