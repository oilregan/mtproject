import React, { Component } from 'react';
import {Style} from './Style.js';

import myImg19 from '../public/img/worun19/nike19.jpg';
import myImg20 from '../public/img/worun20/nike20.jpg';
import myImg21 from '../public/img/worun21/nike21.jpg';
import myImg22 from '../public/img/worun22/nike22.jpg';
import myImg23 from '../public/img/worun23/nike23.jpg';
import myImg24 from '../public/img/worun24/nike24.jpg';

export class Categorywm1 extends Component {

   onClick19 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/worun19/nike19.jpg", Color: "#110f10"},
                        {Path: "./img/worun19/nike19-1.jpg", Color: "#60626e"},
                        {Path: "./img/worun19/nike19-2.jpg", Color: "#7ac084"},
                        {Path: "./img/worun19/nike19-3.jpg", Color: "#cc9479"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }
  
   onClick20 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/worun20/nike20.jpg", Color: "#7c2c5f"},
                        {Path: "./img/worun20/nike20-1.jpg", Color: "#222222"},
                        {Path: "./img/worun20/nike20-2.jpg", Color: "#7894c3"},
                        {Path: "./img/worun20/nike20-3.jpg", Color: "#666a6b"},
                        {Path: "./img/worun20/nike20-4.jpg", Color: "#999a9c"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick21 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/worun21/nike21.jpg", Color: "#222b34"},
                        {Path: "./img/worun21/nike21-1.jpg", Color: "#18191e"},
                        {Path: "./img/worun21/nike21-2.jpg", Color: "#818898"},
                        {Path: "./img/worun21/nike21-3.jpg", Color: "#536071"},
                        {Path: "./img/worun21/nike21-4.jpg", Color: "#b77880"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick22 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/worun22/nike22.jpg", Color: "#3d3d3b"},
                        {Path: "./img/worun22/nike22-1.jpg", Color: "#17181a"},
                        {Path: "./img/worun22/nike22-2.jpg", Color: "#272e48"},
                        {Path: "./img/worun22/nike22-3.jpg", Color: "#66284d"},
                        {Path: "./img/worun22/nike22-4.jpg", Color: "#435b5d"},
                        {Path: "./img/worun22/nike22-5.jpg", Color: "#292823"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick23 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/worun23/nike23.jpg", Color: "#b5b5bd"},
                        {Path: "./img/worun23/nike23-1.jpg", Color: "#3f7cd5"},
                        {Path: "./img/worun23/nike23-2.jpg", Color: "#afd28e"},
                        {Path: "./img/worun23/nike23-3.jpg", Color: "#c5565f"},
                        {Path: "./img/worun23/nike23-4.jpg", Color: "#12151c"},
                        {Path: "./img/worun23/nike23-5.jpg", Color: "#a84981"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick24 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/worun24/nike24.jpg", Color: "#e84f52"},
                        {Path: "./img/worun24/nike24-1.jpg", Color: "#8194be"},
                        {Path: "./img/worun24/nike24-2.jpg", Color: "#c7e340"},
                        {Path: "./img/worun24/nike24-3.jpg", Color: "#1d1e20"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

  render() {
    return (
    <div>
    {/* ROW 7 */}
      <div className="columns">

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE LUNAREPIC FLYKNIT 2</h1>
              <p>รองเท้าวิ่งผู้หญิง <br/> 5,800 THB</p>
              <figure className="image is-3by2">
                <img src={myImg19} alt="nike19" onClick={this.onClick19}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE AIR MAX 2017</h1>
              <p>รองเท้าวิ่งสตรี <br/> 6,700 THB</p>
              <figure className="image is-3by2">
                <img src={myImg20} alt="nike20" onClick={this.onClick20}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE FREE RN FLYKNIT</h1>
              <p>รองเท้าวิ่งสตรี<br/> 5,000 THB</p>
              <figure className="image is-3by2">
                <img src={myImg21} alt="nike21" onClick={this.onClick21}/>
              </figure>
            </article>
        </div>
    </div>

    {/* ROW 8 */}
      <div className="columns">

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE AIR STRUCTURE 20</h1>
              <p>รองเท้าวิ่งสตรี<br/> 4,600 THB THB</p>
              <figure className="image is-3by2">
                <img src={myImg22} alt="nike22" onClick={this.onClick22}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE AIR PEGASUS 33</h1>
              <p>รองเท้าวิ่งสตรี<br/> 4,600 THB THB</p>
              <figure className="image is-3by2">
                <img src={myImg23} alt="nike23" onClick={this.onClick23}/>
              </figure>
            </article>
          </div>

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE AIR ZOOM ELITE 9</h1>
              <p>รองเท้าวิ่งสตรี<br/> 4,600 THB</p>
              <figure className="image is-3by2">
                <img src={myImg24} alt="nike24" onClick={this.onClick24}/>
              </figure>
            </article>
          </div> 
      </div>

  </div>    
          
    );
  }
}

