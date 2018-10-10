import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome'

describe('components/welcome', () =>{
    it('should render without crash',() =>{
        const div = document.createElement('div');
        ReactDOM.render(<Welcome name="Edgar" />, div);
        ReactDOM.unmountComponentAtNode(div);        
    })
})