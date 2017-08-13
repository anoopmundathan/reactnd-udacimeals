import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    
    render() {
        console.log(this.props)
        return(
            <h1>Remove Vanilla redux</h1>
        )
    }
}

function mapStateToProps(calendar) {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return {
        calendar: dayOrder.map(day => ({
            day, 
            meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                meals = calendar[meal] ? calendar[meal] : null
                return meals
            }, {})
        }))
    }
}

export default connect(mapStateToProps)(App)
