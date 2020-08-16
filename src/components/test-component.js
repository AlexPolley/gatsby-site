import React from "react"

import headerimg from "../Assets/images/header-image.png"
import walletimg from "../Assets/images/wallet.svg"
import arrowimg from "../Assets/images/arrow.svg"

import "./test-component.css"

class TestComp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch("https://react-test.free.beeceptor.com/wallet")
      .then(response => response.json())
      .then(data =>
        this.setState({
          walletValue: data.walletValue,
          walletTarget: data.walletTarget,
          firstName: data.firstName,
        })
      )
  }

  render() {
    const { walletTarget, walletValue, firstName } = this.state
    return (
      <div className="test-component" style={{ fontFamily: "ProbaPro" }}>
        <div className="header"></div>
        <div className="container">
          <div className="text">
            <div className="card-name">
              <b>Welcome {firstName} </b>
            </div>
            <b className="title">
              More cash in your wallet from everday shopping
            </b>
            <p>
              Shop for things you'd buy anyway with over 3,000 brands-online
              <br /> and in store- and watch the cash stack up in your wallet.
            </p>
            <button className="activate" style={{ fontWeight: "bold" }}>
              Activate now
              <img
                src={arrowimg}
                alt="arrow"
                style={{ marginTop: 30, marginLeft: 10 }}
              />
            </button>
          </div>
          <img className="headerimg" src={headerimg} alt="HeaderImg" />
        </div>

        <div className="wallet">
          <img src={walletimg} alt="walletimg" />
          <div className="card-value">
            <h1>£{walletValue}</h1>
          </div>
          <div className="card-target">
            <b>Goal: £{walletTarget}</b>
          </div>
        </div>

        <div className="footer"></div>
      </div>
    )
  }
}

export { TestComp }
