import Plot from 'react-plotly.js'

const Histogram = ({ data, xAxisAttribute, title }) => {
  console.log(data)
  let layout = {
    autosize: true,
    // width: 500,
    // height: 500,
    // margin: {
    //   l: 50,
    //   r: 50,
    //   b: 100,
    //   t: 100,
    //   pad: 6,
    // },
    title: title || 'Untitled',
    xaxis: { title: xAxisAttribute },
    yaxis: { title: 'Count' },
  }

  let xData = data.map((d) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === 'NULL') {
      return 'UNKOWN'
    }
    return d[xAxisAttribute]
  })
  console.log(data)
  console.log(xData)

  return (
    <Plot
      className=""
      data={[
        {
          x: xData,
          type: 'histogram',
          marker: {
            color: 'rgba(255, 100, 102, 0.7)',
            line: {
              color: 'rgba(255, 100, 102, 1)',
              width: 1,
            },
          },
          histnorm: 'count',
        },
      ]}
      layout={layout}
    />
  )
}

export default Histogram
