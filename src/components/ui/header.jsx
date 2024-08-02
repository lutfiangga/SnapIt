const Header = () => {
  return (
    <>
      <div className='banner' id='home'>
        <div className='slider' style={{ '--quantity': 16 }}>
          <div className='item' style={{ '--position': 1 }}>
            <img
              src='/src/assets/images/graduation.png'
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 2 }}>
            <img
              src='/src/assets/images/prewed.png'
              alt='Prewed'
            />
          </div>
          <div className='item' style={{ '--position': 3 }}>
            <img
              src='/src/assets/images/wedding.png'
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 4 }}>
            <img
              src='/src/assets/images/produk.png'
              alt='Produk'
            />
          </div>
          <div className='item' style={{ '--position': 5 }}>
            <img
              src='/src/assets/images/wisuda.png'
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 6 }}>
            <img
              src='/src/assets/images/wedding-2.png'
              alt='Wediing'
            />
          </div>
          <div className='item' style={{ '--position': 7 }}>
            <img
              src='/src/assets/images/produk-2.png'
              alt='Produk'
            />
          </div>
          <div className='item' style={{ '--position': 8 }}>
            <img
              src='/src/assets/images/wisuda-2.png'
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 9 }}>
            <img
              src='/src/assets/images/wedding-3.png'
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 10 }}>
            <img
              src='/src/assets/images/wedding.png'
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 11 }}>
            <img
              src='/src/assets/images/graduation.png'
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 12 }}>
            <img
              src='/src/assets/images/prewed.png'
              alt='Pre wedding'
            />
          </div>
          <div className='item' style={{ '--position': 13 }}>
            <img
              src='/src/assets/images/wedding-6.png'
              alt='Wedding'
            />
          </div>
          <div className='item' style={{ '--position': 14 }}>
            <img
              src='/src/assets/images/wisuda-3.png'
              alt='Graduation'
            />
          </div>
          <div className='item' style={{ '--position': 15 }}>
            <img
              src='/src/assets/images/produk.png'
              alt='Produk'
            />
          </div>
          <div className='item' style={{ '--position': 16 }}>
            <img
              src='/src/assets/images/wedding-7.png'
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
