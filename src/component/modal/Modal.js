/**
 * 自己造的对话框
 * Created by jiangyukun on 2017/2/20.
 */
import React, {Component, PropTypes} from 'react'
import {unmountComponentAtNode, unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer} from 'react-dom'
import classnames from 'classnames'

class Modal extends Component {
  onHide = () => {
    this.props.onHide()
    setTimeout(() => this.onExited(), 285)
  }

  onExited = () => {
    this.props.onExited()
  }

  componentWillReceiveProps(newProps) {
    if (this.props.show && !newProps.show) {
      this.onHide()
    }
  }

  _wrapChildren() {
    return (
      <div className="modal">
        <div className={classnames('mask', this.props.show ? 'open' : 'close')} onClick={this.onHide}></div>
        <div className="modal-container">
          <div className={classnames('modal-content', this.props.show ? 'open' : 'close')}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
    renderSubtreeIntoContainer(this, this._wrapChildren(), this.container)
  }

  componentDidUpdate() {
    renderSubtreeIntoContainer(this, this._wrapChildren(), this.container)
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.container)
    document.body.removeChild(this.container)
  }

  render() {
    return null
  }

  getChildContext() {
    return {
      onHide: this.onHide,
      onExited: this.onExited
    }
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onExited: PropTypes.func
}

Modal.childContextTypes = {
  onHide: PropTypes.func,
  onExited: PropTypes.func
}

export default Modal
