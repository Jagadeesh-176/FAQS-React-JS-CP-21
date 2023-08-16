// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqsList, isBtnClicked} = props
  const {questionText, answerText} = faqsList
  const btnImg = isBtnClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const btnImgAlt = isBtnClicked ? 'puls' : 'minus'

  return (
      { isBtnClicked ? (<li>
                            <div className="faq-item-con">
                                <h1 className="heading">{questionText}</h1>
                                <button type="button" className="plus-btn">
                                    <img src={btnImg} alt={btnImgAlt} />
                                </button>
                            </div>
                            <div className="answer-con">
                                <p className="answer">{answerText}</p>
                            </div>
                        </li>) : (
                        <li>
                            <div className="faq-item-con">
                                <p className="heading">{questionText}</p>
                                <button type="button" className="plus-btn">
                                    <img src={btnImg} alt={btnImgAlt} />
                                </button>
                            </div>
                        </li>)
    }
  )
}

export default FaqItem
