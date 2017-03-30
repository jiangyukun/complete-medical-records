/**
 * Created by jiangyukun on 2017/3/23.
 */

import {dpr} from '../../constants/constants'

export function loadD3AndDraw(svgElement, dataList) {
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

  const startData1 = []

  //

  require.ensure([], require => {
    const screenWidth = window.innerWidth / dpr
    let screenHeight = window.innerHeight / dpr - 10
    if (screenHeight < dataList1.length * 80) {
      screenHeight = dataList1.length * 80
    }

    const d3Array = require('d3-array')
    const d3Shape = require('d3-shape')
    const d3Scale = require('d3-scale')
    const d3Selection = require('d3-selection')
    require('d3-transition')

    const width = 500, height = 330
    const svg = d3Selection.select(svgElement)
    const viewBoxX = 0, viewBoxY = 0, viewBoxWidth = screenWidth - 30, viewBoxHeight = screenHeight - 30

    svg.attr('width', viewBoxWidth * dpr).attr('height', viewBoxHeight * dpr)
      .attr('viewBox', `${viewBoxX} ${viewBoxY} ${viewBoxX + viewBoxWidth} ${viewBoxY + viewBoxHeight}`)
      .attr('class', 'line-chart-view')

    const scaleX = d3Scale.scaleLinear().domain([0, 9]).range([50, viewBoxWidth - 50])
    const scaleY = d3Scale.scaleLinear().domain([0, dataList1.length - 1]).range([75, viewBoxHeight - 40])
    const line = d3Shape.line().x(d => scaleX(d.value)).y(d => scaleY(d.y))
    let area = d3Shape.area().x0(scaleX(0)).x1(d => scaleX(d.value)).y(d => scaleY(d.y))


    drawBackgroundGradientColor()
    drawLines()
    drawLineChart()
    drawAxisText()

    function drawBackgroundGradientColor() {
      if (dataList1.length == 0) return

      //  颜色渐变
      svg.append('path')
        .datum(startData1)
        .attr('class', 'line-for-linear-gradient')
        .style("fill", "url(#linearColor)")
        .attr('d', area)
        .transition()
        .duration((dataList1.length - 1) * 500)
        .attrTween('d', () => curPercent => {
          let curLength = (dataList1.length - 1) * curPercent
          let pointY = d3Array.range(Math.ceil(curLength) + 1)
          return area(pointY.map(i => {
            if (i <= curLength) {
              return {
                value: dataList1[i].value, y: i
              }
            }
            let floorInt = parseInt(curLength)
            return {
              value: dataList1[floorInt].value + (dataList1[floorInt + 1].value - dataList1[floorInt].value) * (curLength % 1),
              y: curLength
            }
          }))
        })
    }

    function drawLines() {
      let xLines = svg.append('g')
      xLines.selectAll('line')
        .data(d3Array.range(dataList1.length))
        .enter()
        .append('line')
        .attr('x1', 50)
        .attr('x2', viewBoxWidth - 50)
        .attr('y1', d => scaleY(d))
        .attr('y2', d => scaleY(d))
        .attr('class', 'x-line')


      let yLines = svg.append('g')
      yLines.selectAll('line')
        .data(d3Array.range(10))
        .enter()
        .append('line')
        .attr('x1', d => scaleX(d))
        .attr('x2', d => scaleX(d))
        .attr('y1', 75)
        .attr('y2', viewBoxHeight - 40)
        .attr('class', 'x-line')
    }

    let circleFlag = {}

    function drawLineChart() {
      if (dataList1.length == 0) return
      //折线
      svg.append('path')
        .datum(startData1)
        .attr('class', 'line')
        .attr('d', line)
        .transition()
        .duration((dataList1.length - 1) * 500)
        .attrTween('d', () => curPercent => {
            let curLength = (dataList1.length - 1) * curPercent
            let pointY = d3Array.range(Math.ceil(curLength) + 1)
            return line(pointY.map(i => {
              if (i <= curLength) {
                if (i == curLength && !circleFlag[i]) {
                  drawCircle(dataList1[i], i)
                  circleFlag[i] = true
                }
                return {
                  value: dataList1[i].value, y: i
                }
              }
              let floorInt = Math.floor(curLength)
              if (!circleFlag[floorInt]) {
                drawCircle(dataList1[floorInt], floorInt)
                circleFlag[floorInt] = true
              }
              return {
                value: dataList1[floorInt].value + (dataList1[floorInt + 1].value - dataList1[floorInt].value) * (curLength % 1),
                y: curLength
              }
            }))
          }
        )
    }

    function drawCircle(dataItem, index) {
      // 圆圈和文字
      let g = svg.append('g')
      g.append('circle')
        .attr('class', 'line-circle-outer')
        .attr('cx', scaleX(dataItem.value))
        .attr('cy', scaleY(index))
        .attr('r', 3)

      g.append('text')
        .attr('x', d => scaleX(dataItem.value) + 10)
        .attr('y', scaleY(index))
        .attr('transform', () => {
          return `rotate(90 ${scaleX(dataItem.value) + 10} ${scaleY(index)})`
        })
        .attr('class', 'current-value-text')
        .text(dataItem.text)

    }

    function drawAxisText() {

      //文字x1
      let xAxisFirstLineText = svg.append('g')
      xAxisFirstLineText.selectAll('text')
        .data(d3Array.range(dataList1.length))
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
        .data(d3Array.range(dataList1.length))
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
        .data(d3Array.range(10))
        .enter()
        .append('text')
        .attr('x', d => scaleX(d) - 3)
        .attr('y', 15)
        .attr('transform', d => {
          return `rotate(90 ${scaleX(d) - 3} 15)`
        })
        .attr('class', 'x-top-line-text')
        .text(d => {
          if (d == 0) return ''
          return '1.00E+0' + d
        })


    }

  })

}
