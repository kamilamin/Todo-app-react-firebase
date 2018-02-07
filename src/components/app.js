import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddGoal from './AddGoal.js'
import { firebaseApp } from '../firebase.js'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'


class app extends Component{
    signOut(){
        firebaseApp.auth().signOut();
    }
    
    render(){
        return (
            <div>
                <h3>Goal Coach</h3>
                <AddGoal />
                <hr/>
                <h4>Goals</h4>
                <GoalList />
                <hr/>
                <h4>Complete Goal list</h4>
                <CompleteGoalList />
                <hr/>
                <button className='btn btn-danger' onClick={ () => this.signOut() }>Sign Out</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null) (app);
