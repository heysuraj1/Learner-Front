import React from 'react'
import Image from "next/image";

function FrontExplainer() {
    return (
        <div className='container'>
            <hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-7 p-5">
    <h2 className="featurette-heading">
      We are here to apread tech knowledge in India.
      <span className="text-muted">That will blow your mind.</span>
    </h2>
    <p className="lead">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.

    </p>
  </div>
  <div className="col-md-5">
    
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#eee"></rect>
      <text x="50%" y="50%" fill="#aaa" dy=".3em">
      <Image className='bir' src='/standBoy.png' alt='' height={500} width={500}/>
      </text>
    
  </div>
</div>

<hr className="featurette-divider" />

<div className="row featurette  p-5">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">
      Oh yeah, it’s that good.{" "}
      <span className="text-muted">See for yourself.</span>
    </h2>
    <p className="lead">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
    </p>
  </div>
  <div className="col-md-5 order-md-1">
    
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#eee"></rect>
      <text x="50%" y="50%" fill="#aaa" dy=".3em">
      <Image className='bir' src='/tech.png' alt='' height={500} width={500}/>
      </text>
    
  </div>
</div>

<hr className="featurette-divider" />

<div className="row featurette  p-5">
  <div className="col-md-7">
    <h2 className="featurette-heading">
      And lastly, this one.{" "}
      <span className="text-muted">Checkmate.</span>
    </h2>
    <p className="lead">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos sunt dolor, tenetur illo doloremque, sint aspernatur numquam earum rerum assumenda eum iusto dolore nobis. Recusandae qui sapiente cumque eum eaque.
    </p>
  </div>
  <div className="col-md-5">
    
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#eee"></rect>
      <text x="50%" y="50%" fill="#aaa" dy=".3em">
      <Image className='bir' src='/team.png' alt='' height={500} width={500}/>
      </text>
    
  </div>
</div>

<hr className="featurette-divider" />
        </div>
    )
}

export default FrontExplainer
