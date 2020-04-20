import React from 'react';
import './App.css';
import ComponentGenerator from './components/ComponentGenerator/ComponentGenerator';

function App() {
  return (

    <div className="App">
      {/* <JSONparserComponent/> */}
      <ComponentGenerator
        title='Input'
        model={[
          { id: 'project-id', label: 'Project Id', isRequired: true, type: 'text', helperText: 'Enter Project Id', defaultValue: '' },
          { id: 'project-name', label: 'Project Name', isRequired: true, type: 'text', helperText: 'Enter Project Name', defaultValue: '' },
          { id: 'project-no', label: 'Project Number', isRequired: false, type: 'number', helperText: '', defaultValue: '' },
          { id: 'project-date', label: 'Project Date', isRequired: false, type: 'date', helperText: '', defaultValue: '' },
          {
            id: 'project-radio', label: 'Target Achieved', type: 'radio', name: 'targetAchieved', defaultValue: 'above',
            options: [
              { value: 'above', label: 'Above', disabled: false },
              { value: 'inRange', label: 'In Range', disabled: false },
              { value: 'below', label: 'Below', disabled: false }
            ]
          },
          {
            id: 'project-select', label: 'Project Types', type: 'select', defaultValue: '001',
            options: [
              { value: '001', label: 'Project1' },
              { value: '002', label: 'Project2' },
              { value: '003', label: 'project3' }
            ]
          },
          {
            id:'project-table',label:'Project Table',type: 'table',
            headers:[
              {label: 'Header1',align : 'left'},
              {label: 'Header2',align : 'left'},
              {label: 'Header3',align : 'right'},
              {label: 'Header4',align : 'left'},
              {label: 'Header5',align : 'right'}
            ]
          },
          {
            id:'project-button',label: 'ButtonLabel',type:'button', color:'primary',disabled:false
          }



        ]}
      />

    </div>
  );
}

export default App;
