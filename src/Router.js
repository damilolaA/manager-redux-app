import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar={true}>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please Login" />
				</Scene>
				<Scene key="main">
					<Scene 
						key="employeeList" 
						component={EmployeeList} 
						title="Employees" 
						rightTitle="Add" 
						onRight = { () => console.log('right!!!') }
					/>
				</Scene>
			</Scene>
		</Router>
	);
}

export default RouterComponent;