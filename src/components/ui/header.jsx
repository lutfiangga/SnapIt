import graduation from '../../assets/images/graduation.png'
import graduation2 from '../../assets/images/wisuda.png'
import graduation3 from '../../assets/images/wisuda-2.png'
import graduation4 from '../../assets/images/wisuda-3.png'
import prewed from '../../assets/images/prewed.png'
import wedding from '../../assets/images/wedding.png'
import wedding2 from '../../assets/images/wedding-2.png'
import wedding3 from '../../assets/images/wedding-4.png'
import wedding4 from '../../assets/images/wedding-6.png'
import wedding5 from '../../assets/images/wedding-7.png'
import produk from '../../assets/images/produk.png'
import produk2 from '../../assets/images/produk-2.png'


const Header = () => {
  return (
    <>
      <div className='banner' id='home'>
        <div className='slider' style={{ '--quantity': 16 }}>
          <div className='item' style={{ '--position': 1 }}>
            <img
              src={graduation}
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 2 }}>
            <img
              src={prewed}
              alt='Prewed'
            />
          </div>
          <div className='item' style={{ '--position': 3 }}>
            <img
              src={wedding}
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 4 }}>
            <img
              src={produk}
              alt='Produk'
            />
          </div>
          <div className='item' style={{ '--position': 5 }}>
            <img
              src={graduation2}
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 6 }}>
            <img
              src={wedding2}
              alt='Wediing'
            />
          </div>
          <div className='item' style={{ '--position': 7 }}>
            <img
              src={produk2}
              alt='Produk'
            />
          </div>
          <div className='item' style={{ '--position': 8 }}>
            <img
              src={graduation3}
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 9 }}>
            <img
              src={wedding3}
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 10 }}>
            <img
              src={wedding4}
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 11 }}>
            <img
              src={graduation4}
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 12 }}>
            <img
              src={prewed}
              alt='Pre wedding'
            />
          </div>
          <div className='item' style={{ '--position': 13 }}>
            <img
              src={wedding2}
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 14 }}>
            <img
              src={graduation4}
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 15 }}>
            <img
              src={produk}
              alt='Produk'
            />
          </div>
          <div className='item' style={{ '--position': 16 }}>
            <img
              src={wedding5}
              alt='Wedding'
            />
          </div>
        </div>

        {/* text */}
        {/* <div className='content'>
          <h1 data-content='CSS ONLY'>CSS ONLY</h1>
          <div className='author'>
            <h2>LUN DEV</h2>
            <p>
              <b>Web Design</b>
            </p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
          <div className='model'></div>
        </div> */}
      </div>
    </>
  )
}

export default Header
