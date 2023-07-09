import React from 'react'
import Items from '../data/Items'

function Body() {
  
  const items =(num)=>{
    let imageLink = Object.values(Items[num].itemLinks)
    // let a = Items[0].itemLinks
    // console.log(imageLink[3])
    return(
      <>
        <div className='w-full h-full bg-white flex-col flex justify-around items-center'>
          {/* heading  */}
          <h1 className='w-11/12 h-8 flex text-md items-center'>{Items[num].heading}</h1>
          {/* firstRow  */}
          <div className='w-11/12 h-32 flex-row flex justify-between first-row'>
              <div className='h-full w-5/12 flex-row justify-center items-center'>
                <div className={`bg-[url('${imageLink[0]}')] bg-whiteShade w-full h-4/5 bg-contain bg-no-repeat`}></div>
                <div className='text-sm'>{Items[num].item1}</div>
              </div>
              <div className='h-full w-5/12'>
                <div className={`bg-[url('${imageLink[1]}')] bg-whiteShade w-full h-4/5 bg-contain bg-no-repeat`}></div>
                <div className='text-sm'>{Items[num].item2}</div>
              </div>
          </div>
          {/* secondRow  */}
          <div className='w-11/12 h-32 flex justify-between second-row'>
            <div className='h-full w-5/12 flex-row justify-center items-center'>
              <div className={`bg-[url('${imageLink[2]}')] bg-whiteShade w-full h-4/5 bg-contain bg-no-repeat`}></div>
              <div className='text-sm'>{Items[num].item3}</div>
            </div>
            <div className='h-full w-5/12'>
              <div className={`bg-[url('${imageLink[3]}')] bg-whiteShade w-full h-4/5 bg-contain bg-no-repeat`}></div>
              <div className='text-sm'>{Items[num].item4}</div>
            </div>
          </div>
        <div><p className='text-sm'>See more...</p></div> 
        </div>
      </>
    )
  }
  return (
    <>
       <div className=''>
        <div className="w-screen h-64 mt-5 rounded-md flex justify-center overflow-hidden">
          <div className="rounded-md bg-[url('https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg')] w-11/12 h-full bg-center bg-no-repeat"></div>
        </div>
        <div className='mt-5 w-screen h-96 collectiveItemsContainer flex justify-center'>
          <div className='w-11/12 h-full collectiveItems grid grid-cols-4 gap-4'>
            <span className='bg-orange'>{items(0)}</span>
            <span className='bg-orange'>{items(1)}</span>
            <span className='bg-white flex-col flex justify-center items-center'>
              <h1 className='w-11/12 h-8 flex text-md items-center'>Shop by category</h1>
              <div className='w-11/12 h-80 bg-whiteShade'></div>
              <div>see more...</div>
            </span>
            <span className='bg-orange'>four</span>
          </div>
        </div>

        {/* list items  */}
        <div className='mt-5 w-screen h-96 flex justify-center itemsList'>
          <h1 className='absolute w-11/12 h-5 mt-5'>Today's deal</h1>
          <div className='w-11/12 h-4/6 mt-20 grid grid-cols-5 gap-5'>
            <span className='bg-white'>A</span>
            <span className='bg-white'>B</span>
            <span className='bg-white'>C</span>
            <span className='bg-white'>D</span>
            <span className='bg-white'>E</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
