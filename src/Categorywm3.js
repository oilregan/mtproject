import React, { Component } from 'react';
import {Style} from './Style.js';

import myImg31 from '../public/img/wotrain31/nike31.jpg';
import myImg32 from '../public/img/wotrain32/nike32.jpg';
import myImg33 from '../public/img/wotrain33/nike33.jpg';
import myImg34 from '../public/img/wotrain34/nike34.jpg';
import myImg35 from '../public/img/wotrain35/nike35.jpg';
import myImg36 from '../public/img/wotrain36/nike36.jpg';

export class Categorywm3 extends Component {
  
    onClick31 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/wotrain31/nike31.jpg", Color: "#202123"},
                        {Path: "./img/wotrain31/nike31-1.jpg", Color: "#5b5b5d"},
                        {Path: "./img/wotrain31/nike31-2.jpg", Color: "#aeaeb6"},
                        {Path: "./img/wotrain31/nike31-3.jpg", Color: "#324f61"},
                        {Path: "./img/wotrain31/nike31-4.jpg", Color: "#f6fbff"},
                        {Path: "./img/wotrain31/nike31-5.jpg", Color: "#e88e6b"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

      onClick32 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/wotrain32/nike32.jpg", Color: "#44569e"},
                        {Path: "./img/wotrain32/nike32-1.jpg", Color: "#7797a2"},
                        {Path: "./img/wotrain32/nike32-2.jpg", Color: "#d6dbdf"},
                        {Path: "./img/wotrain32/nike32-3.jpg", Color: "#6b6c6e"},
                        {Path: "./img/wotrain32/nike32-4.jpg", Color: "#161817"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

      onClick33 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/wotrain33/nike33.jpg", Color: "#7797a2"},
                        {Path: "./img/wotrain33/nike33-1.jpg", Color: "#252523"},
                        {Path: "./img/wotrain33/nike33-2.jpg", Color: "#94999f"},
                        {Path: "./img/wotrain33/nike33-3.jpg", Color: "#c1c2c4"},
                        {Path: "./img/wotrain33/nike33-4.jpg", Color: "#252523"},
                        {Path: "./img/wotrain33/nike33-5.jpg", Color: "#4d5c5f"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

      onClick34 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/wotrain34/nike34.jpg", Color: "#c4c5c7"},
                        {Path: "./img/wotrain34/nike34-1.jpg", Color: "#6a6a6c"},
                        {Path: "./img/wotrain34/nike34-2.jpg", Color: "#232321"},
                        {Path: "./img/wotrain34/nike34-3.jpg", Color: "#2d3645"},
                        {Path: "./img/wotrain34/nike34-4.jpg", Color: "#657876"},
                        {Path: "./img/wotrain34/nike34-5.jpg", Color: "#d4887a"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

      onClick35 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/wotrain35/nike35.jpg", Color: "#202123"},
                        {Path: "./img/wotrain35/nike35-1.jpg", Color: "#c1c2c4"},
                        {Path: "./img/wotrain35/nike35-2.jpg", Color: "#71713b"},
                        {Path: "./img/wotrain35/nike35-3.jpg", Color: "#728d98"},
                        {Path: "./img/wotrain35/nike35-4.jpg", Color: "#ca5c5f"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

      onClick36 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/wotrain36/nike36.jpg", Color: "#f78850"},
                        {Path: "./img/wotrain36/nike36-1.jpg", Color: "#cbccd1"},
                        {Path: "./img/wotrain36/nike36-2.jpg", Color: "#100e13"},
                        {Path: "./img/wotrain36/nike36-3.jpg", Color: "#8b8d5c"},
                        {Path: "./img/wotrain36/nike36-4.jpg", Color: "#a0c400"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }
  
  render() {
    return (
    <div>
    {/* ROW 11 */}
      <div className="columns">

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE METCON 3</h1>
              <p>รองเท้าเทรนนิ่งสตรี<br/> 5,000 THB</p>
              <figure className="image is-3by2">
                <img src={myImg31} alt="nike31" onClick={this.onClick31}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE FEARLESS FLYKNIT</h1>
              <p>รองเท้าเทรนนิ่งผู้หญิง<br/> 5,200 THB</p>
              <figure className="image is-3by2">
                <img src={myImg32} alt="nike32" onClick={this.onClick32}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE FREE CONNECT</h1>
              <p>รองเท้าเทรนนิ่งสตรี<br/> 3,800 THB</p>
              <figure className="image is-3by2">
                <img src={myImg33} alt="nike33" onClick={this.onClick33}/>
              </figure>
            </article>
          </div>
    </div>

    {/* ROW 12 */}
      <div className="columns">

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE AIR ZOOM STRONG</h1>
              <p>รองเท้าเทรนนิ่งสตรี<br/> 4,600 THB</p>
              <figure className="image is-3by2">
                <img src={myImg34} alt="nike34" onClick={this.onClick34}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE TR FOCUS FLYKNIT</h1>
              <p>รองเท้าเทรนนิ่งผู้หญิง<br/> 5,000 THB</p>
              <figure className="image is-3by2">
                <img src={myImg35} alt="nike35" onClick={this.onClick35}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE METCON DSX FLYKNIT</h1>
              <p>รองเท้าเทรนนิ่งสตรี<br/> 6,000 THB</p>
              <figure className="image is-3by2">
                <img src={myImg36} alt="nike36" onClick={this.onClick36}/>
              </figure>
            </article>
          </div>
      </div>

   </div>
      
          
    );
  }
}

