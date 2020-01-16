import React from 'react';
import ButtonContainer from './ButtonContainer';


const Dashboard = props => {

    return (
        <ButtonContainer count={props.count} swing={props.swing}/>
    )
}
export default Dashboard;