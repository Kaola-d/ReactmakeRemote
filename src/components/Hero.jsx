import desktop from '../../src/assets/png/image-hero-desktop.png'
import data from '../../src/assets/svg/client-databiz.svg'
import audio from '../../src/assets/svg/client-audiophile.svg'
import meet from '../../src/assets/svg/client-meet.svg'
import maker from '../../src/assets/svg/client-maker.svg'
import './Hero.css'

function Hero() {
  return (
    <>
        <div className='hero'>
            <div className='subhero'>
                <h1 className='subh'>Make remote work</h1>
                <p className='subp'>Get your team in sync, no matter your location. Streamline process, create team rituals, and watch productivity soar.</p>

                <button className='subbtn'>Learn more</button>

                <div className='data'>
                    <img src={data} className='data' />
                    <img src={audio} className='data' />
                    <img src={meet} className='data' />
                    <img src={maker} className='data' />
                </div>
               
            </div>

            <div>
                    <img src={desktop} className='deskimg' />
            </div>
        </div>
    </>
  )
}

export default Hero
