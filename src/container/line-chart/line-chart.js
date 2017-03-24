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

export function loadD3AndDraw(container, dataList) {
  require.ensure([], require => {
    let screenWidth = window.screen.width
    let screenHeight = window.screen.height
    const d3 = require('d3')
    const dpr = window.devicePixelRatio

    const width = 500, height = 330

    const data = [100, 500]
    const value = [150, 200, 300, 250, 120, 450]

    const svg = d3.select(container).append('svg')

    const viewBoxX = 0, viewBoxY = 0

    svg.attr('width', (screenHeight - 30) * dpr).attr('height', (screenWidth - 30) * dpr)
      .attr('viewBox', `${viewBoxX} ${viewBoxY} ${viewBoxX + 500} ${viewBoxY + 300}`)
      .attr('class', 'line-chart-view')

    const scaleX = d3.scaleLinear().domain([0, 5]).range([70, width - 50])
    const scaleY = d3.scaleLinear().domain([data[1], 0]).range([10, height - 75])

    let line = d3.line()
      .x((x, index) => {
        return scaleX(index)
      })
      .y(y => {
        return scaleY(y)
      })

    drawBackgroundGradientColor()
    drawLines()
    drawLineChart()
    drawCircle()
    drawAxisText()

    function drawBackgroundGradientColor() {

      //  颜色渐变
      let defs = svg.append('defs')
      let linearGradient = defs.append("linearGradient")
        .attr("id", "linearColor")
        .attr("x1", 0)
        .attr("y1", 1)
        .attr("x2", 0)
        .attr("y2", 0)

      // let startColor = d3.rgb(83, 194, 253, 0.11)
      let startColor = d3.rgb(236, 245, 254)
      let endColor = d3.rgb(83, 194, 253, 0.73)

      linearGradient.append("stop")
        .attr("offset", 0)
        .style("stop-color", startColor.toString())

      linearGradient.append("stop")
        .attr("offset", 1)
        .style("stop-color", endColor.toString())


      const value1 = [
        {x: 0, y: 0},
        {x: 0, y: 150},
        {x: 1, y: 200},
        {x: 2, y: 300},
        {x: 3, y: 250},
        {x: 4, y: 120},
        {x: 5, y: 450},
        {x: 5, y: 0}
      ]

      let fillLine = d3.line()
        .x((d) => {
          return scaleX(d.x)
        })
        .y(d => {
          return scaleY(d.y)
        })

      //折线
      svg.append('path')
        .attr('class', 'line-for-linear-gradient')
        .style("fill", "url(#linearColor)")
        .attr('d', fillLine(value1))

    }


    function drawLines() {

      let xLines = svg.append('g')
      xLines.selectAll('line')
        .data(d3.range(10).map(d => d * 50))
        .enter()
        .append('line')
        .attr('x1', 70)
        .attr('y1', d => scaleY(d))
        .attr('x2', width - 50)
        .attr('y2', d => scaleY(d))
        .attr('class', 'x-line')

      let yLines = svg.append('g')
      yLines.selectAll('line')
        .data(d3.range(6))
        .enter()
        .append('line')
        .attr('x1', d => scaleX(d))
        .attr('x2', d => scaleX(d))
        .attr('y1', d => height - 75)
        .attr('y2', d => 30)
        .attr('class', 'x-line')

    }

    function drawLineChart() {
      //折线
      svg.append('path')
        .attr('class', 'line')
        .attr('d', line(value))

    }

    function drawCircle() {

      //圆圈
      svg.selectAll('circle')
        .data(value)
        .enter()
        .append('g')
        .append('circle')
        .attr('class', 'line-circle-outer')
        .attr('cx', line.x())
        .attr('cy', line.y())
        .attr('r', 4)
    }

    function drawAxisText() {

      //文字x1
      let xAxisFirstLineText = svg.append('g')
      xAxisFirstLineText.selectAll('text')
        .data(d3.range(6))
        .enter()
        .append('text')
        .attr('x', d => scaleX(d) - 20)
        .attr('y', height - 50)
        .attr('class', 'bottom-first-line-text')
        .text(d => getPeriodName(d))

      //文字x2
      let xAxisSecondLineText = svg.append('g')
      xAxisSecondLineText.selectAll('text')
        .data(d3.range(6))
        .enter()
        .append('text')
        .attr('x', d => scaleX(d) - 30)
        .attr('y', height - 30)
        .attr('class', 'bottom-second-line-text')
        .text(d => '2017-02-20')

      //文字y
      let yAxisText = svg.append('g')
      yAxisText.selectAll('text')
        .data(d3.range(10).map(d => d * 50))
        .enter()
        .append('text')
        .attr('x', 0)
        .attr('y', d => scaleY(d))
        .attr('class', 'bottom-second-line-text')
        .text(d => '1.00E+02')

    }

  })


}
