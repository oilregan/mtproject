import React, { Component } from 'react';
import {Style} from './Style.js';

import myImg25 from '../public/img/woball25/nike25.JPG';
import myImg26 from '../public/img/woball26/nike26.JPG';
import myImg27 from '../public/img/woball27/nike27.JPG';
import myImg28 from '../public/img/woball28/nike28.JPG';
import myImg29 from '../public/img/woball29/nike29.JPG';
import myImg30 from '../public/img/woball30/nike30.jpg';

export class Categorywm2 extends Component {
  
   onClick25 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/woball25/nike25.JPG", Color: "#0875ba"},
                        {Path: "./img/woball25/nike25-1.JPG", Color: "#ef57ac"},
                        {Path: "./img/woball25/nike25-2.JPG", Color: "#fc6202"},
                        {Path: "./img/woball25/nike25-3.JPG", Color: "#fa5f5b"},
                        {Path: "./img/woball25/nike25-4.JPG", Color: "#c3ea06"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

    onClick26 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/woball26/nike26.JPG", Color: "#ad6b2f"},
                        {Path: "./img/woball26/nike26-1.JPG", Color: "#87224e"},
                        {Path: "./img/woball26/nike26-2.JPG", Color: "#690206"},
                        {Path: "./img/woball26/nike26-3.JPG", Color: "#314357"},
                        {Path: "./img/woball26/nike26-4.JPG", Color: "#1b1a53"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

    onClick27 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/woball27/nike27.JPG", Color: "#9fb814"},
                        {Path: "./img/woball27/nike27-1.JPG", Color: "#93010e"},
                        {Path: "./img/woball27/nike27-2.JPG", Color: "#077dad"},
                        {Path: "./img/woball27/nike27-3.JPG", Color: "#014a3f"},
                        {Path: "./img/woball27/nike27-4.JPG", Color: "#d43e09"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

    onClick28 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/woball28/nike28.JPG", Color: "#1a1a1a"},
                        {Path: "./img/woball28/nike28-1.JPG", Color: "#00536d"},
                        {Path: "./img/woball28/nike28-2.JPG", Color: "#055c56"},
                        {Path: "./img/woball28/nike28-3.JPG", Color: "#b20906"},
                        {Path: "./img/woball28/nike28-4.JPG", Color: "#64696f"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

    onClick29 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/woball29/nike29.JPG", Color: "#8b8e95"},
                        {Path: "./img/woball29/nike29-1.JPG", Color: "#181818"},
                        {Path: "./img/woball29/nike29-2.JPG", Color: "#bebcbd"},
                        {Path: "./img/woball29/nike29-3.JPG", Color: "#1c655a"},
                        {Path: "./img/woball29/nike29-4.JPG", Color: "#631b2f"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

    onClick30 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/woball30/nike30.jpg", Color: "#111217"},
                        {Path: "./img/woball30/nike30-1.jpg", Color: "#a8cd01"},
                        {Path: "./img/woball30/nike30-2.jpg", Color: "#757881"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

  render() {
    return (
    <div>
      {/* ROW 9 */}
      <div className="columns">
          
          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE VAPOR XI TECH </h1>
              <p>รองเท้าสตั๊ด<br/> 10,300 THB</p>
              <figure className="image is-3by2">
                <img src={myImg25} alt="nike25" onClick={this.onClick25}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE PHANTOM 3 DF</h1>
              <p>รองเท้าสตั๊ด<br/> 12,900 THB</p>
              <figure className="image is-3by2">
                <img src={myImg26} alt="nike26" onClick={this.onClick26}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE MAGISTA OBRA II </h1>
              <p>รองเท้าสตั๊ด<br/> 13,300 THB</p>
              <figure className="image is-3by2">
                <img src={myImg27} alt="nike27" onClick={this.onClick27}/>
              </figure>
            </article>
          </div>
    </div>

    {/* ROW 10 */}
      <div className="columns">

            <div className="column">
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE SUPERFLY V iD</h1>
                <p>รองเท้าสตั๊ด<br/> 12,900 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg28} alt="nike28" onClick={this.onClick28}/>
                </figure>
              </article>
            </div>

            <div className="column">
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE PROXIMO II iD</h1>
                <p>รองเท้าฟุตบอล<br/> 8,200 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg29} alt="nike29" onClick={this.onClick29}/>
                </figure>
              </article>
            </div>

            <div className="column">
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE TIEMPO LEGEND AG-R </h1>
                <p>สำหรับหญ้าเทียม<br/> 9,500 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg30} alt="nike30" onClick={this.onClick30}/>
                </figure>
              </article>
            </div>
      </div>
 
    
   </div> 
     
          
    );
  }
}

