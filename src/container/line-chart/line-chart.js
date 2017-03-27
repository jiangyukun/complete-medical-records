/**
 * Created by jiangyukun on 2017/3/23.
 */

import {dpr} from "../../constants/constants"

export function loadD3AndDraw(container, dataList) {
  const dataList1 = dataList.map(d => {
    let v = 0
    if (d.value.indexOf('>') != -1) {
      v = 9.5
    } else if (d.value.indexOf('<') != -1) {
      v = 0
    } else {
      v = parseFloat(d.value)
      if (!isNaN(v)) {
        v = Math.log10(v)
      } else {
        v = 0
      }
    }
    return {
      ...d,
      value: v,
      text: d.value
    }
  })

  require.ensure([], require => {
    const screenWidth = window.innerWidth / dpr
    const screenHeight = window.innerHeight / dpr

    const d3 = require('d3')
    const width = 500, height = 330
    const svg = d3.select(container).append('svg')
    const viewBoxX = 0, viewBoxY = 0, viewBoxWidth = screenWidth - 30, viewBoxHeight = screenHeight - 30

    svg.attr('width', viewBoxWidth * dpr).attr('height', viewBoxHeight * dpr)
      .attr('viewBox', `${viewBoxX} ${viewBoxY} ${viewBoxX + viewBoxWidth} ${viewBoxY + viewBoxHeight}`)
      .attr('class', 'line-chart-view')

    const scaleX = d3.scaleLinear().domain([0, 9]).range([50, viewBoxWidth - 50])
    const scaleY = d3.scaleLinear().domain([0, dataList1.length - 1]).range([75, viewBoxHeight - 50])

    let line = d3.line()
      .x(d => scaleX(d.value))
      .y((y, index) => scaleY(index))

    drawBackgroundGradientColor()
    drawLines()
    drawLineChart()
    drawCircle()
    drawAxisText()
    drawCurrentValue()

    function drawBackgroundGradientColor() {

      //  颜色渐变
      let defs = svg.append('defs')
      let linearGradient = defs.append("linearGradient")
        .attr("id", "linearColor")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", 1)
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


      const backgroundData = dataList1.map((d, index) => {
        return {x: d.value, y: index}
      })
      backgroundData.unshift({x: 0, y: 0})
      backgroundData.push({x: 0, y: dataList1.length - 1})

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
        .attr('d', fillLine(backgroundData))

    }


    function drawLines() {

      let xLines = svg.append('g')
      xLines.selectAll('line')
        .data(d3.range(dataList1.length))
        .enter()
        .append('line')
        .attr('x1', 50)
        .attr('x2', viewBoxWidth - 50)
        .attr('y1', d => scaleY(d))
        .attr('y2', d => scaleY(d))
        .attr('class', 'x-line')


      let yLines = svg.append('g')
      yLines.selectAll('line')
        .data(d3.range(10))
        .enter()
        .append('line')
        .attr('x1', d => scaleX(d))
        .attr('x2', d => scaleX(d))
        .attr('y1', 75)
        .attr('y2', viewBoxHeight - 50)
        .attr('class', 'x-line')


    }

    function drawLineChart() {
      //折线
      svg.append('path')
        .attr('class', 'line')
        .attr('d', line(dataList1))

    }

    function drawCircle() {

      //圆圈
      svg.selectAll('circle')
        .data(dataList1)
        .enter()
        .append('g')
        .append('circle')
        .attr('class', 'line-circle-outer')
        .attr('cx', line.x())
        .attr('cy', line.y())
        .attr('r', 3)
    }

    function drawCurrentValue() {
      let currentValues = svg.append('g')
      currentValues.selectAll('text')
        .data(dataList1)
        .enter()
        .append('text')
        .attr('x', d => scaleX(d.value) + 8)
        .attr('y', (d, i) => scaleY(i))
        .attr('transform', (d, i) => {
          return `rotate(90 ${scaleX(d.value) + 8} ${scaleY(i)})`
        })
        .attr('class', 'current-value-text')
        .text(d => d.text)
    }

    function drawAxisText() {

      //文字x1
      let xAxisFirstLineText = svg.append('g')
      xAxisFirstLineText.selectAll('text')
        .data(d3.range(dataList1.length))
        .enter()
        .append('text')
        .attr('x', 30)
        .attr('y', d => scaleY(d))
        .attr('transform', d => {
          return `rotate(90 30 ${scaleY(d)})`
        })
        .attr('class', 'bottom-first-line-text')
        .text(d => dataList1[d].periodName)


      //文字x2
      let xAxisSecondLineText = svg.append('g')
      xAxisSecondLineText.selectAll('text')
        .data(d3.range(dataList1.length))
        .enter()
        .append('text')
        .attr('x', 10)
        .attr('y', d => scaleY(d))
        .attr('transform', d => {
          return `rotate(90 10 ${scaleY(d)})`
        })
        .attr('class', 'bottom-second-line-text')
        .text(d => dataList1[d].date)


      //文字y
      let yAxisText = svg.append('g')
      yAxisText.selectAll('text')
        .data(d3.range(10))
        .enter()
        .append('text')
        .attr('x', d => scaleX(d) - 5)
        .attr('y', 15)
        .attr('transform', d => {
          return `rotate(90 ${scaleX(d) - 5} 15)`
        })
        .attr('class', 'x-top-line-text')
        .text(d => {
          if (d == 0) return ''
          return '1.00E+0' + d
        })


    }

  })

  return {
    update: () => {

    }
  }

}
