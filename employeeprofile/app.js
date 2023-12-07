import React from 'react';
import details from './data';
import EmployeeProfile from './employeeprofile';
import Template from './card1';

const App = () => {
  return (
    <div>
      <EmployeeProfile details={details}  />
      <Template/>
    </div>
  );
};

export default App;
