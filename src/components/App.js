import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
    
    render() {
        console.log(this.props)
        return(
            <h1>Remove Vanilla redux</h1>
        )
    }
}

function mapStateToProps({calendar, food}) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return {
        calendar: dayOrder.map(day => ({
            day, 
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals = calendar[meal] ? food[calendar[meal]] : null
                return meals
            }, {})
        }))
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
