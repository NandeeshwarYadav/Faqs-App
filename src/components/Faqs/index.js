// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  state = {originalList: []}

  componentDidMount() {
    const {faqsList} = this.props
    const updatedFaqsList = faqsList.map(each => ({...each, isTrue: false}))

    this.setState(prevState => ({
      originalList: [...prevState.originalList, ...updatedFaqsList],
    }))
  }

  onClickPlusButton = id => {
    const {originalList} = this.state
    this.setState(prevState => ({
      originalList: prevState.originalList.map(each => {
        if (id === each.id) {
          return {...each, isTrue: !each.isTrue}
        }
        return each
      }),
    }))
  }

  render() {
    const {faqsList} = this.props
    const {originalList} = this.state

    return (
      <div className="bg">
        <div className="sub-bg">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list">
            {originalList.map(eachItem => (
              <FaqItem
                item={eachItem}
                key={eachItem.id}
                onClickPlusButton={this.onClickPlusButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
