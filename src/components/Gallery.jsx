import React from 'react'

const Gallery = () => {
  const gallery = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.jpg",
    "/5.jpg",
    "/7.jpg",
    "/8.png",
    "/10.png",
    "/9.png",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery