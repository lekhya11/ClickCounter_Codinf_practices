import './index.css'
import Components from 'react'

class ClickCounter extends Components {
  state = {count: 0}
  onClicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="Para"> Click the button to increase the count!</p>
        <button className="button" onClick="onClicked">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
