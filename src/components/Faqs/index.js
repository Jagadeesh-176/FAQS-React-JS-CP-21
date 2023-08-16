// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    isBtnClicked: false,
  }

  render() {
    const {faqsList} = this.props
    const {isBtnClicked} = this.state

    return (
      <div className="main-con">
        <div className="inner-con">
          <h1 className="heading">FAQs</h1>
          <div className="faqs-con">
            <ul>
              {faqsList.map(eachList => {
                ;<FaqItem isBtnClicked={isBtnClicked} faqsList={eachList} />
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
