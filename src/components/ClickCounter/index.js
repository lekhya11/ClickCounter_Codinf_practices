import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />{' '}
          <span className="span">{count}</span> times
        </h1>
        <p className="Para"> Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onClicked}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
