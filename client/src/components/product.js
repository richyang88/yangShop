import React, { Component } from 'react';
// import IndividualUserForm from "./user"
import Axios from "axios"

const individualActivity = (text) => {
    return (
        <p>{text}</p>
    )
}

const energyLevel = (text) => {
    return (
        <p>{text}</p>
    )
}

const activityList = (showActivity, activityIndex) => {

    return (
        <div>
            {showActivity.individualActivity.map(individualActivity)}
            {showActivity.energyLevel.map(energyLevel)}
        </div>
    )
}

class IndividualActivityForm extends Component {

    state = {
        activityName: "",
        activityLevel: ""
    }

    handleInputChange = (event) => {
        this.setState({ activityName: event.target.value })
    }

    handleRadioChange = (event) => {
        this.setState({ activityLevel: event.target.value })
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        this.props.addNewIndividualActivityText(this.state.activityName)
        this.props.addNewIndividualEnergyLevel(this.state.activityLevel)
    }

    addActivityToServer = (activityName) => {
        console.log({ activityName })
        console.log(activityName)

        Axios.post("/api/activities/", activityName)
            .then(results => {
                this.setState({ activityName: results.data.allActivities })
                console.log(activityName)

            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmission}>
                <input
                    required
                    type="text"
                    placeholder="New Activity"
                    value={this.state.activityName}
                    onChange={this.handleInputChange}
                />
                <br></br>
                <input
                    type="radio"
                    name="energyLevel"
                    value="Low"
                    checked={this.state.activityLevel === "Low"}
                    onChange={this.handleRadioChange}
                />

                <label>Low</label>
                <input
                    type="radio"
                    name="energyLevel"
                    value="Medium"
                    checked={this.state.activityLevel === "Medium"}
                    onChange={this.handleRadioChange}
                />
                <label>Medium</label>
                <input
                    type="radio"
                    name="energyLevel"
                    value="High"
                    checked={this.state.activityLevel === "High"}
                    onChange={this.handleRadioChange}
                />
                <label>High</label>
                <br></br>
                <input type="submit" value="Add Activity" onClick={() => { this.addActivityToServer(this.state) }} />

            </form>
        )
    }
}

class AppActivity extends React.Component {

    state = {
        activityList: {
            individualActivity: [""],
            energyLevel: [""],
        }
    }

    addNewActivity = (activityName) => {

        let activityList = { ...this.state.activityList }

        activityList.individualActivity.push(activityName)
        this.setState({ activityList })

    }

    addActivityLevel = (activityLevel) => {

        let activityList = { ...this.state.activityList }

        activityList.energyLevel.push(activityLevel)
        this.setState({ activityList })

    }

    render() {
        return (
            <div>
                <h1>Activity</h1>
                <IndividualActivityForm
                    addNewIndividualActivityText={this.addNewActivity}
                    addNewIndividualEnergyLevel={this.addActivityLevel}

                />
                {activityList(this.state.activityList)}
            </div>
        );
    }
}

export default AppActivity;