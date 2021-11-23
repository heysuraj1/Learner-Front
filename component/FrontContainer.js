import React from 'react'
import Image from "next/image";


function FrontContainer() {
    return (
        <div>
            <div className="container marketing mt-5 ">
        <div className="row mt-5">
          <div className="col-lg-4 ">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
            <div className='henta'>
              <Image className='senta border border-info border-1 ' src="/multitask.png" alt="" height={140} width={140} />
              </div>
            </text>

            <h2>Get New Tech Update</h2>
            <p>
              At learnerboy we are working for you so you get updated from all the latest technologies. This is the only place for tech enthusiasts.
            </p>
            <p>
              
            </p>
          </div>
          <div className="col-lg-4 ">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
              <div className='henta'>
              <Image className='senta border border-info border-1' src="/marketting.png" alt="" height={140} width={140} />
              </div>
            </text>

            <h2 >Trending Technologies</h2>
            <p>
              Find great articles about new tech inventions, Latest gadgets in market , Some ungorgatable fact about technoloies, lots more at just one place.
            </p>
            <p>
             
            </p>
          </div>
          <div className="col-lg-4 ">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">
            <div className='henta'>
              <Image className='senta  border border-info border-1' src="/people.png" alt="" height={140} width={140} />
              </div>
            </text>

            <h2>Community Support</h2>
            <p>
              At learnerboyu we belive that teamwork and community support is a very essential thing. So we are helping you over emai. 
            </p>
            <p>
              
            </p>
          </div>
        </div>

        
      </div>
        </div>
    )
}

export default FrontContainer
