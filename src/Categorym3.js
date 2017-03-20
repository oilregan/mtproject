import React, { Component } from 'react';
import {Style} from './Style.js';

import myImg13 from '../public/img/train13/nike13.jpg';
import myImg14 from '../public/img/train14/nike14.jpg';
import myImg15 from '../public/img/train15/nike15.jpg';
import myImg16 from '../public/img/train16/nike16.jpg';
import myImg17 from '../public/img/train17/nike17.jpg';
import myImg18 from '../public/img/train18/nike18.jpg';

export class Categorym3 extends Component {

   onClick13 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/train13/nike13.jpg", Color: "#3d4053"},
                        {Path: "./img/train13/nike13-1.jpg", Color: "#a8a7a2"},
                        {Path: "./img/train13/nike13-2.jpg", Color: "#a60013"},
                        {Path: "./img/train13/nike13-3.jpg", Color: "#0f0d0e"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }
  
   onClick14 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/train14/nike14.jpg", Color: "#b1484d"},
                        {Path: "./img/train14/nike14-1.jpg", Color: "#232323"},
                        {Path: "./img/train14/nike14-2.jpg", Color: "#54545c"},
                        {Path: "./img/train14/nike14-3.jpg", Color: "#678b87"},
                        {Path: "./img/train14/nike14-4.jpg", Color: "#23628e"},
                        {Path: "./img/train14/nike14-5.jpg", Color: "#b1484d"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick15 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/train15/nike15.jpg", Color: "#82858e"},
                        {Path: "./img/train15/nike15-1.jpg", Color: "#1b1f22"},
                        {Path: "./img/train15/nike15-2.jpg", Color: "#393c4b"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick16 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/train16/nike16.jpg", Color: "#28282a"},
                        {Path: "./img/train16/nike16-1.jpg", Color: "#4c5b62"},
                        {Path: "./img/train16/nike16-2.jpg", Color: "#b91135"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick17 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/train17/nike17.jpg", Color: "#535296"},
                        {Path: "./img/train17/nike17-1.jpg", Color: "#2b2a26"},
                        {Path: "./img/train17/nike17-2.jpg", Color: "#743445"},
                        {Path: "./img/train17/nike17-3.jpg", Color: "#bbbcc1"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick18 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/train18/nike18.jpg", Color: "#3c3d3f"},
                        {Path: "./img/train18/nike18-1.jpg", Color: "#a12349"},
                        {Path: "./img/train18/nike18-2.jpg", Color: "#a579ae"},
                        {Path: "./img/train18/nike18-3.jpg", Color: "#e16146"},
                        {Path: "./img/train18/nike18-4.jpg", Color: "#0c0f14"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

  render() {
    return (
    <div>
      {/* ROW 5 */}
      <div className="columns">
   
        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE METCON 3</h1>
            <p>รองเท้าเทรนนิ่งบุรุษ<br/> 5,000 THB</p>
            <figure className="image is-3by2">
              <img src={myImg13} alt="nike13" onClick={this.onClick13}/>
            </figure>
          </article>
        </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE TRAIN SPEED 4</h1>
            <p>รองเท้าฝึกซ้อมบุรุษ<br/> 4,200 THB</p>
            <figure className="image is-3by2">
              <img src={myImg14} alt="nike14" onClick={this.onClick14}/>
            </figure>
          </article>
        </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">JORDAN TRAINER PRIME</h1>
            <p>รองเท้าเทรนนิ่งบุรุษ<br/> 4,200 THB</p>
            <figure className="image is-3by2">
              <img src={myImg15} alt="nike15" onClick={this.onClick15}/>
            </figure>
          </article>
        </div>
    </div>

    
      {/* ROW 6 */}
      <div className="columns">

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">JORDAN IMPACT</h1>
            <p>รองเท้าเทรนนิ่งบุรุษ<br/> 3,800 THB</p>
            <figure className="image is-3by2">
              <img src={myImg16} alt="nike16" onClick={this.onClick16}/>
            </figure>
          </article>
        </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">AIR JORDAN TRAINER 1 LOW</h1>
            <p>รองเท้าฝึกซ้อมบุรุษ<br/>4,800 THB</p>
            <figure className="image is-3by2">
              <img src={myImg17} alt="nike17" onClick={this.onClick17}/>
            </figure>
          </article>
        </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE TRAIN ULTRAFAST </h1>
            <p>รองเท้าฝึกซ้อมบุรุษ<br/> 5,500 THB</p>
            <figure className="image is-3by2">
              <img src={myImg18} alt="nike18" onClick={this.onClick18}/>
            </figure>
          </article>
        </div>
    </div>

  </div> 

            
    );
  }
}

