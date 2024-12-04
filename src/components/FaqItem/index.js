// Write your code here.
import './index.css'

const FaqItem = props => {
  const {item, onClickPlusButton} = props
  const {id, questionText, answerText, isTrue} = item
  const clickPlus = () => {
    onClickPlusButton(id)
  }
  const checkIsTrue = isTrue
  return (
    <li className="card">
      <div className="question">
        <h1 className="qtn">{questionText}</h1>
        <button type="button" className="button" onClick={clickPlus}>
          {checkIsTrue ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
              alt="minus"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
              alt="plus"
            />
          )}
        </button>
      </div>
      {checkIsTrue ? (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      ) : null}
    </li>
  )
}

export default FaqItem
