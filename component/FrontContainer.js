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

            <h2>Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
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

            <h2 >Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
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

            <h2>Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
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
