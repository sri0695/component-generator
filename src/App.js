import React from 'react';
import './App.css';
import ComponentGenerator from './components/ComponentGenerator/ComponentGenerator';



function App() {
  const modelProps =[
    { id: 'header-label-id',label: 'Header Information', isRequired:true, type:'subHead', disabled:false},
    { id: 'project-id', label: 'Project Id', isRequired: true, type: 'text', helperText: 'Enter Project Id', defaultValue: '',disabled:false },
    { id: 'project-name', label: 'Project Name', isRequired: true, type: 'text', helperText: 'Enter Project Name', defaultValue: '',disabled:false},
    { id: 'project-no', label: 'Project Number', isRequired: false, type: 'number', helperText: '', defaultValue: '' },
    {id: 'project-switch',label:'Switch',disabled:false,type:'switch'},
    { id: 'project-date', label: 'Project Date', isRequired: false, type: 'date', helperText: '', defaultValue: '' },
    {
      id: 'project-radio', label: 'Target Achieved', type: 'radio', name: 'targetAchieved', defaultValue: 'above',
      options: [
        { value: 'above', label: 'Above', disabled: false },
        { value: 'inRange', label: 'In Range', disabled: false },
        { value: 'below', label: 'Below', disabled: false }
      ]
    },
    {id: 'project-checkbox',label:'Project Checkbox',isRequired:true,disabled:false,type:'checkbox'},
    {
      id: 'project-select', label: 'Project Types', type: 'select', defaultValue: '001',
      options: [
        { value: '001', label: 'Project1' },
        { value: '002', label: 'Project2' },
        { value: '003', label: 'project3' }
      ]
    },
    { id: 'header-label-id',label: 'Grid Information', isRequired:true, type:'subHead', disabled:false},
    {
      id:'project-table',label:'Project Table',type: 'table',
      headers:[
        {id:'header1',label: 'Header1',align : 'left',minWidth:'150'},
        {id:'header2',label: 'Header2',align : 'left',minWidth:'150'},
        {id:'header3',label: 'Header3',align : 'left',minWidth:'150'},
        {id:'header4',label: 'Header4',align : 'left',minWidth:'150'},
        {id:'header5',label: 'Header5',align : 'left',minWidth:'150'}
      ],
      datas:[
      {header1:'data1',header2:'data2',header3:'data3',header4:'data4',header5:'data5'},
      {header1:'data1',header2:'data2',header3:'data3',header4:'data4',header5:'data5'},
      {header1:'data1',header2:'data2',header3:'data3',header4:'data4',header5:'data5'}
    ]
    },
    {
      id:'project-button',label: 'ButtonLabel',type:'button', color:'primary',disabled:false
    }
  
  ]

  return (
    <div className="App">
      {/* <JSONparserComponent/> */}
      <ComponentGenerator  model ={modelProps}/>
    </div>
  );
}

export default App;
