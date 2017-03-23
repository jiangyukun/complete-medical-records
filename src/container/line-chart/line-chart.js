/**
 * Created by jiangyukun on 2017/3/23.
 */

function getPeriodName(index) {
  switch (index) {
    case 0:
      return '孕22周'
    case 1:
      return '孕28周'
    case 2:
      return '孕38周'
    case 3:
      return '产后5周'
    case 4:
      return '产后28周'
    case 5:
      return '产后38周'
    default:
      return '未知'
  }
}

export function loadD3AndDraw(container) {
  require.ensure([], require => {
    const d3 = require('d3')
    const dpr = window.devicePixelRatio

    const width = 500, height = 330

    const data = [100, 500]
    const value = [150, 200, 300, 250, 120, 450]

    const svg = d3.select(container).append('svg')
    svg.attr('width', width * dpr).attr('height', height * dpr).attr('viewBox', '0 0 500 300').attr('class', 'line-chart-view')

    const scaleX = d3.scaleLinear().domain([0, 5]).range([70, width - 50])
    const scaleY = d3.scaleLinear().domain([data[1], 0]).range([10, height - 75])

    /*const xAxis = d3.axisBottom()
     const yAxis = d3.axisLeft()
     xAxis.scale(scaleX).ticks(6).tickFormat((i) => '')
     yAxis.scale(scaleY).tickFormat(i => {
     if (i == 0) return ''
     return i
     })

     svg.append('g')
     .attr('transform', 'translate(0, 265)')
     .call(xAxis)

     svg.append('g')
     .attr('transform', 'translate(70,10)')
     .call(yAxis)*/

    let line = d3.line()
      .x((x, index) => {
        return scaleX(index)
      })
      .y(y => {
        return scaleY(y)
      })

    let path = svg.append('path')
      .attr('class', 'line')
      .attr('d', line(value))

    svg.selectAll('circle')
      .data(value)
      .enter()
      .append('g')
      .append('circle')
      .attr('class', 'line-circle-outer')
      .attr('cx', line.x())
      .attr('cy', line.y())
      .attr('r', 4)

    let xAxisFirstLineText = svg.append('g')
    xAxisFirstLineText.selectAll('text')
      .data(d3.range(6))
      .enter()
      .append('text')
      .attr('x', d => scaleX(d) - 20)
      .attr('y', height - 50)
      .attr('class', 'bottom-first-line-text')
      .text(d => getPeriodName(d))

    let xAxisSecondLineText = svg.append('g')
    xAxisSecondLineText.selectAll('text')
      .data(d3.range(6))
      .enter()
      .append('text')
      .attr('x', d => scaleX(d) - 30)
      .attr('y', height - 30)
      .attr('class', 'bottom-second-line-text')
      .text(d => '2017-02-20')


    let yAxisText = svg.append('g')
    yAxisText.selectAll('text')
      .data(d3.range(10).map(d => d * 50))
      .enter()
      .append('text')
      .attr('x', 15)
      .attr('y', d => scaleY(d))
      .attr('class', 'bottom-second-line-text')
      .text(d => '1.00E+01')


    let xLines = svg.append('g')
    xLines.selectAll('line')
      .data(d3.range(10).map(d => d * 50))
      .enter()
      .append('line')
      .attr('x1', 70)
      .attr('y1', d => height - 65 - scaleY(d))
      .attr('x2', width - 50)
      .attr('y2', d => height - 65 - scaleY(d))
      .attr('class', 'x-line')

    let yLines = svg.append('g')
    yLines.selectAll('line')
      .data(d3.range(6))
      .enter()
      .append('line')
      .attr('x1', d => width + 20 - scaleX(d))
      .attr('y1', d => height - 75)
      .attr('x2', d => width + 20 - scaleX(d))
      .attr('y2', d => 10)
      .attr('class', 'x-line')


  })

}
