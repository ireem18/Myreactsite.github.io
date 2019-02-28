import React, { Component } from 'react'
import resim from './images/yeni.png'; //#a0ac48



class Header extends Component {
  render() {
    return (
      <div className=" jumbotron jumbotron-fluid ortala " style={{ backgroundColor: 'black ', height:350 }}>
        <div className="container " >
          <img src={resim} className="rounded-circle" alt="" width="125" height="110" />
          <p className="is-size-20 animated  fadeInDown" >
            <h4 className="display-4 "><strong>İrem Demiröz</strong></h4>
          </p>
          <p className="lead"><strong>Studying Computer Engineering at Karabuk University</strong></p>


          <div className="jumbotron-footer mt-5">
            <a href="#aboutme"  >
              About me <i className="fas fa-hand-point-down"></i>
            </a>
          </div>
        </div>
      </div>
      

    );
  }
}

export default Header;
/* <a href={'https://github.com/ireem18/'} target="_blank">
          <i className="fab fa-github fa-2x" />
         </a>

         


         */