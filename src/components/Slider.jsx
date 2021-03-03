import { Carousel } from "react-bootstrap";

/*Advertencia: Por lo pronto las imagenes son links, por lo que pueden no verse correctamente en un futuro*/

const Slider = () => {
  return (
    <Carousel className="mb-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-b8d6e55f-f550-4a39-954c-af48678b9d8b.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-1c148b68-052e-45cb-9ae4-f4053bb814aa.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
