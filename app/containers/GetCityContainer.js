import React, { PropTypes, Component } from 'react'
import GetCity from '../components/GetCity'

class GetCityContainer extends Component {
  constructor () {
    super()
    this.state = {
      city: ''
    }
  }
  handleSubmitCity (e) {
    e.preventDefault()
    this.context.router.push(`/forecast/${this.state.city}`)
  }
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    })
  }
  render () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={(event) => this.handleSubmitCity(event)}
        onUpdateCity={(event) => this.handleUpdateCity(event)}
        city={this.state.city} />
    )
  }
}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
GetCityContainer.propTypes = {
  direction: PropTypes.string
}
GetCityContainer.defaultProps = {
  direction: 'column'
}

export default GetCityContainer;
