import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Axios from "axios"
import IndividualActivityForm from "../product"

export default class ActivityReact extends Component {

    state = {
        activities: []
    }

    // GET ALL ACTIVITIES FROM SERVER
    getActivitiesFromServer = () => {
        Axios.get(`/api/activities/`) //get prefix
            .then(results => { //create promise
                this.setState({ activities: results.data.allActivities })
                console.log(results)
                // console.table(results.data.allActivities)
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount() {
        this.getActivitiesFromServer();
    }

    render() {
        return (
            <div className="App">

                <IndividualActivityForm

                    addNewIndividualActivityText={this.addNewActivity}
                    addNewIndividualEnergyLevel={this.addNewEnergyLevel}
                />
                {this.state.activities.map(activity => {
                    return (
                        <div>
                            <ul>
                                <li>
                                    <Link to={`/activities/${activity._id}/users/`}>{activity.activityName}</Link>
                                </li>
                                <li>
                                    {activity.activityLevel}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}