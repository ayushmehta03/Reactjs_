import React from 'react';

const Middle = (props) => {
  return (
    <div className='second'>
      <img  className='img1' src={props.look} alt="" />
      <div className="rectangles">
        <div className="rectangle1">
        <img  className='img2' src={props.blue} alt="" />
        <span>Overdue</span>
        </div>
        <div className="rectangle2">
        <img src={props.voilet}  className="img2" />
        <span>Soon to be overdue</span>
        </div>
        <div className="rectangle3">
        <img src={props.purple} alt="" className="img2" />
        <span>Need Attention</span>
        </div>
        <div className="rectangle4">

        <img src={props.aqua} alt="" className="img2" />
        <span>lorem ispum</span>
        
        </div>
        </div>
        <div className="data">
          <img className='image3' src={props.cooldata} alt="" />

        </div>

</div>
    
  );
}

export default Middle;
