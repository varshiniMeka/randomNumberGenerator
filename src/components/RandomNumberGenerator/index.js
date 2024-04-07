import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {Count: 0}

  onGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    // eslint-disable-next-line
    this.setState(PrevState => ({Count: randomNumber}))
  }

  render() {
    const {Count} = this.state
    return (
      <div>
        <h1>Random number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" onClick={this.onGenerate}>
          Generate
        </button>
        <p>{Count}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator
