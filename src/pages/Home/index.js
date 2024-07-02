import Carousel from "react-bootstrap/Carousel";
import Shopping from "../../components/Shopping";
import carouselItems from "../../data/carousel";
import products from "../../data/products";

function Home() {
  return (
    <main>
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="w-100"
              src={item.src}
              alt={item.alt}
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Shopping
        title="Novidades e Destaques"
        products={products.filter((item) => item.featured || item.isNew)}
      />
    </main>
  );
}

export default Home;
