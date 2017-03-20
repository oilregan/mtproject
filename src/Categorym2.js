import React, { Component } from 'react';
import {Style} from './Style.js';

import myImg07 from '../public/img/ball07/nike07.jpg';
import myImg08 from '../public/img/ball08/nike08.jpg';
import myImg09 from '../public/img/ball09/nike09.jpg';
import myImg10 from '../public/img/ball10/nike10.jpg';
import myImg11 from '../public/img/ball11/nike11.jpg';
import myImg12 from '../public/img/ball12/nike12.jpg';

export class Categorym2 extends Component {

  onClick7 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/ball07/nike07.jpg", Color: "#1a1a18"},
                        {Path: "./img/ball07/nike07-1.jpg", Color: "#80be39"},
                        {Path: "./img/ball07/nike07-2.jpg", Color: "#c63733"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick8 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/ball08/nike08.jpg", Color: "#202020"},
                        {Path: "./img/ball08/nike08-1.jpg", Color: "#a2d056"},                 
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick9 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/ball09/nike09.jpg", Color: "#1c1d1f"},
                        {Path: "./img/ball09/nike09-1.jpg", Color: "#c1ef68"},
                        {Path: "./img/ball09/nike09-2.jpg", Color: "#382d71"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick10 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/ball10/nike10.jpg", Color: "#c74126"},
                        {Path: "./img/ball10/nike10-1.jpg", Color: "#2d2733"},
                        {Path: "./img/ball10/nike10-2.jpg", Color: "#aad35b"},
                        {Path: "./img/ball10/nike10-3.jpg", Color: "#1d2025"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick11 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/ball11/nike11.jpg", Color: "#3d5196"},
                        {Path: "./img/ball11/nike11-1.jpg", Color: "#c55e4d"},
                        {Path: "./img/ball11/nike11-2.jpg", Color: "#288980"},
                        {Path: "./img/ball11/nike11-3.jpg", Color: "#111214"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick12 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/ball12/nike12.jpg", Color: "#cbdd67"},
                        {Path: "./img/ball12/nike12-1.jpg", Color: "#4398d8"},
                        {Path: "./img/ball12/nike12-2.jpg", Color: "#2d3653"},
                        {Path: "./img/ball12/nike12-3.jpg", Color: "#aeb1b6"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

  render() {
    return (
    <div>
      {/* ROW 3 */}
      <div className="columns">

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE PHANTOM 3 DF</h1>
            <p>สำหรับพื้นสนามทั่วไป<br/> 10,000 THB</p>
            <figure className="image is-3by2">
              <img src={myImg07} alt="nike07" onClick={this.onClick7}/>
            </figure>
          </article>
        </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE PHADE 3 FG</h1>
            <p>สำหรับพื้นแข็ง<br/> 2,100 THB</p>
            <figure className="image is-3by2">
              <img src={myImg08} alt="nike08" onClick={this.onClick8}/>
            </figure>
          </article>
        </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE MERCURIAL VICTORY </h1>
            <p>สำหรับพื้นสนามทั่วไป<br/> 3,100 THB </p>
            <figure className="image is-3by2">
              <img src={myImg09} alt="nike09" onClick={this.onClick9}/>
            </figure>
          </article>
        </div>
    </div>

    {/* ROW 4 */}
    <div className="columns">

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE MERCURIALX FINALE II </h1>
            <p>สำหรับสนามในร่ม<br/> 3,800 THB</p>
            <figure className="image is-3by2">
              <img src={myImg10} alt="nike10" onClick={this.onClick10}/>
            </figure>
          </article>
        </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE MAGISTA OPUS II</h1>
            <p>สำหรับพื้นแข็ง<br/> 7,900 THB</p>
            <figure className="image is-3by2">
              <img src={myImg11} alt="nike11" onClick={this.onClick11}/>
            </figure>
          </article>
      </div>

        <div className="column">
          <article className="my-nike-item">
            <h1 className="my-text-bold">NIKE TIEMPO GENIO II </h1>
            <p>สำหรับสนามในร่ม/คอร์ท <br/>2,500 THB</p>
            <figure className="image is-3by2">
              <img src={myImg12} alt="nike12" onClick={this.onClick12}/>
            </figure>
          </article>
      </div>
    </div>

</div>         
    );
  }
}

