import React, { Component } from 'react';
import {Categorym1} from './Categorym1.js';
import {Categorym2} from './Categorym2.js';
import {Categorym3} from './Categorym3.js';
import {Categorywm1} from './Categorywm1.js';
import {Categorywm2} from './Categorywm2.js';
import {Categorywm3} from './Categorywm3.js';
import {Style} from './Style.js';

export class Login extends Component 
{

  state = {
    gender: "",
    type: "",
    styles: []
  }


  onUpdateStyle = (value) => 
  {
    this.setState({styles: value});
  }

  onGenderChange = (event) => {
    this.setState({gender: event.target.value});
  }

  onTypeChange = (event) => {
    this.setState({type: event.target.value});
  }

  render() {

    var renderClass = null;

    if(this.state.gender == "Men")
    {
        if(this.state.type == "Running")
        {
            renderClass = <Categorym1 onUpdateStyle={this.onUpdateStyle}/>
        }
        else if(this.state.type == "Football")
        {
            renderClass = <Categorym2 onUpdateStyle={this.onUpdateStyle}/>
        }
        else if(this.state.type == "Training")
        {
            renderClass = <Categorym3 onUpdateStyle={this.onUpdateStyle}/>
        }
    }
    else if(this.state.gender == "Women")
    {
        if(this.state.type == "Running")
        {
            renderClass = <Categorywm1 onUpdateStyle={this.onUpdateStyle}/>
        }
        else if(this.state.type == "Football")
        {
            renderClass = <Categorywm2 onUpdateStyle={this.onUpdateStyle}/>
        }
        else if(this.state.type == "Training")
        {
            renderClass = <Categorywm3 onUpdateStyle={this.onUpdateStyle}/>
        }
    }

    return (
      <div className="control my-panel">
        <div className="columns">

          <div className="column is-1">
            <center><h4 className="title is-4 my-text-bold" style={{color:'#fff'}}>Select</h4></center>
              <br/>
              <h1 className="my-text-bold">Gender</h1>
                <p className="control">
                  <label className="radio">
                    <input type="radio" name="gender" value="Men" onChange={this.onGenderChange}/> Men </label><br/>
                  <label className="radio">
                    <input type="radio" name="gender" value="Women" onChange={this.onGenderChange}/> Women </label>
                </p>

              <h1 className="my-text-bold">Shoes</h1>
                <p className="control">
                  <label className="radio">
                    <input type="radio" name="shoes" onChange={this.onTypeChange} value="Running"/>Running</label><br/>
                  <label className="radio">
                    <input type="radio" name="shoes" onChange={this.onTypeChange} value="Football"/>Football</label><br/>
                  <label className="radio">
                    <input type="radio" name="shoes" onChange={this.onTypeChange} value="Training"/>Training</label>
                </p>  
          </div>

          <div className="column is-7">
            <center><h4 className="title is-4 my-text-bold " style={{color:'#fff'}}>Collection</h4></center><br/>
            {renderClass}
          </div>

          <div className="column is-4">
            <center><h4 className="title is-4 my-text-bold " style={{color:'#fff'}}>Style</h4></center><br/>
            <Style values={this.state.styles}/>
          </div>
          
      </div>
    
    </div>
    );
  }
}
