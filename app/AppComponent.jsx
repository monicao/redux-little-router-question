import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'redux-little-router'

class AppComponent extends Component {
  render () {
    return (
      <Fragment forRoute='/'>
        <div>
          <Fragment forRoute='/'>
            <div>Home</div>
          </Fragment>
          <Fragment forRoute='/foo/bar'>
            <div>Bar</div>
          </Fragment>
          <Fragment forRoute='/foo'>
            <div>Foo</div>
          </Fragment>
          <pre style={{whiteSpace: 'pre-wrap'}}>
            {JSON.stringify(this.props.router)}
          </pre>
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  router: state.router
})

export default connect(mapStateToProps)(AppComponent)
