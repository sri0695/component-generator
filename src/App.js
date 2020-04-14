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
          { key: 'Project', label: 'Project Name', type: 'text', props: { required: true } },
          { key: 'DeliveryDate', label: 'Delivery Date', type: 'date', props: { required: true } },
          { key: 'ItemName', label: 'Item Name', type: 'text', props: { required: true } },
          { key: 'ItemNumber', label: 'Item Number', type: 'number', props: { required: true } },
          { key: 'ItemDiv', label: 'Item Division', type: 'text', props: { required: true } },
          {
            key: 'Gender', label: 'Gender', type: 'radio',
            options: [{ key: 'Male', label: 'Male', name: 'Gender', value: 'male' },
            { key: 'Female', label: 'Female', name: 'Gender', value: 'female' }]
          },
          {
            key: 'Warehouse', label: 'Warehouse', type: 'select', value: 'tubet',
            options: [{ key: 'Osaka', label: 'Osaka', name: 'Warehouse', value: 'osaka' },
            { key: 'Tubet', label: 'Tubet', name: 'Warehouse', value: 'tubet' }]
          }
        ]} />

    </div>
  );
}

export default App;
