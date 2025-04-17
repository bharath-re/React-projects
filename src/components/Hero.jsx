import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const carouselImages = [image1, image2, image3, image4];

function Hero() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">
          Welcome to Our Store
        </h2>
        <p className="text-gray-600 text-lg">
          Check out our featured collections below
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel w-full max-w-lg mx-auto rounded-box shadow-lg">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <img
              src={image}
              className="w-full h-80 object-cover rounded-box"
              alt={`carousel-${index}`}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
              <a
                href={`#slide${
                  (index - 1 + carouselImages.length) % carouselImages.length
                }`}
                className="btn btn-circle bg-white text-black"
              >
                ❮
              </a>
              <a
                href={`#slide${(index + 1) % carouselImages.length}`}
                className="btn btn-circle bg-white text-black"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
