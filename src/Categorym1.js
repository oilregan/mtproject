import React, { Component } from 'react';
import {Style} from './Style.js';

import myImg01 from '../public/img/run01/nike01.jpg';
import myImg02 from '../public/img/run02/nike02.jpg';
import myImg03 from '../public/img/run03/nike03.jpg';
import myImg04 from '../public/img/run04/nike04.jpg';
import myImg05 from '../public/img/run05/nike05.jpg';
import myImg06 from '../public/img/run06/nike06.jpg';

export class Categorym1 extends Component {

  onClick1 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/run01/nike01.jpg", Color: "#343231"},
                        {Path: "./img/run01/nike01-1.jpg", Color: "#4e7280"},
                        {Path: "./img/run01/nike01-2.jpg", Color: "#abacae"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

  onClick2 = (event) =>
  {
      var sub_list = [
                        {Path: "./img/run02/nike02.jpg", Color: "#1a1b1f"},
                        {Path: "./img/run02/nike02-1.jpg", Color: "#5f616d"},
                        {Path: "./img/run02/nike02-2.jpg", Color: "#222558"},
                        {Path: "./img/run02/nike02-3.jpg", Color: "#4a4a30"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick3 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/run03/nike03.jpg", Color: "#1d2347"},
                        {Path: "./img/run03/nike03-1.jpg", Color: "#131313"},
                        {Path: "./img/run03/nike03-2.jpg", Color: "#d9dade"},
                        {Path: "./img/run03/nike03-3.jpg", Color: "#913135"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick4 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/run04/nike04.jpg", Color: "#2a3f50"},
                        {Path: "./img/run04/nike04-1.jpg", Color: "#904549"},
                        {Path: "./img/run04/nike04-2.jpg", Color: "#151515"},
                        {Path: "./img/run04/nike04-3.jpg", Color: "#333331"},
                        {Path: "./img/run04/nike04-4.jpg", Color: "#454c76"},
                        {Path: "./img/run04/nike04-5.jpg", Color: "#eb9049"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick5 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/run05/nike05.jpg", Color: "#35381d"},
                        {Path: "./img/run05/nike05-1.jpg", Color: "#2c3757"},
                        {Path: "./img/run05/nike05-2.jpg", Color: "#232323"},
                        {Path: "./img/run05/nike05-3.jpg", Color: "#b1b8c0"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

   onClick6 = (event) => 
  {
      var sub_list = [
                        {Path: "./img/run06/nike06.jpg", Color: "#253570"},
                        {Path: "./img/run06/nike06-1.jpg", Color: "#7b7c81"},
                        {Path: "./img/run06/nike06-2.jpg", Color: "#bb442c"},
                        {Path: "./img/run06/nike06-3.jpg", Color: "#3f7ab6"},
                        {Path: "./img/run06/nike06-4.jpg", Color: "#782e2f"},
                        {Path: "./img/run06/nike06-5.jpg", Color: "#242424"}
                     ];
      
      this.props.onUpdateStyle(sub_list);
  }

  render() {
    return (
      <div>
        {/* ROW 1 */}
        <div className="columns">

          <div className="column">
            <article className="my-nike-item">
              <h1 className="my-text-bold">NIKE FLYKNIT RACER</h1>
              <p>รองเท้าวิ่ง unisex <br/>5,500 THB</p>
              <figure className="image is-3by2">
                <img src={myImg01} alt="nike01" onClick={this.onClick1}/>
              </figure>
            </article>
          </div>

          <div className="column">
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE LUNAREPIC FLYKNIT 2</h1>
                <p>รองเท้าวิ่งบุรุษ<br/> 5,800 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg02} alt="nike02" onClick={this.onClick2}/>
                </figure>
              </article>
          </div>

          <div className="column">            
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE AIR MAX 2017</h1>
                <p>รองเท้าวิ่งบุรุษ <br/> 6,700 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg03} alt="nike03" onClick={this.onClick3}/>
                </figure>
              </article>
          </div>
      </div>
        


        {/* ROW 2 */}
        <div className="columns">

          <div className="column">
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE FREE RN</h1>
                <p>รองเท้าวิ่งบุรุษ<br/> 4,200 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg04} alt="nike04" onClick={this.onClick4}/>
                </figure>
              </article>
          </div>
         
          <div className="column">          
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE RNNIKE VOMERO 12</h1>
                <p>รองเท้าวิ่งบุรุษ <br/>5,200 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg05} alt="nike05" onClick={this.onClick5}/>
                </figure>
              </article>
          </div>
         
          <div className="column">       
              <article className="my-nike-item">
                <h1 className="my-text-bold">NIKE AIR STRUCTURE 20</h1>
                <p>รองเท้าวิ่งบุรุษ <br/> 4,600 THB</p>
                <figure className="image is-3by2">
                  <img src={myImg06} alt="nike06" onClick={this.onClick6}/>
                </figure>
              </article>
          </div>
      </div>
        
    </div>
    );
  }
}

