import React from 'react'
import Image from "next/image";

function FrontExplainer() {
    return (
        <div className='container'>
            <hr className="featurette-divider" />

<div className="row featurette">
  <div className="col-md-7 p-5 mt-5">
    <h2 className="featurette-heading">
      We are here to apread tech knowledge in India.
      <span className="text-muted">That will blow your mind.</span>
    </h2>
    <p className="lead m-3">
      hey i am Suraj Singh founder of this website. I and my team is working 24/7 for you. You can find latest trending tech related items here. We always active here so you can find Latest technology terms here.


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

<div className="row featurette  p-5 mt-5">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading">
      Meet New Technologies.
      <span className="text-muted">Which you never know before</span>
    </h2>
    <p className="lead m-5">
    At learnerboy we always try to introduce you with latest Technologies which cloud add some value in your life. Here at blogs section you will find greatest creations of todays era. 
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

<div className="row featurette  p-5 mt-5">
  <div className="col-md-7">
    <h2 className="featurette-heading">
      Team Work is always the priority.
      <span className="text-muted">So you can Checkmate all the issues.</span>
    </h2>
    <p className="lead m-5">
    At learnerboy we always work in team work so that we can serve you more. We are fetching all the latest news and Technologies from over the world so you could be aware what happening in tech industries now. 
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
