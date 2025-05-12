import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Modal.setAppElement('#root');

const ScreenshotCarousel = ({ isOpen, onRequestClose, screenshots }) => {
    const [isSliderReady, setIsSliderReady] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);


    useEffect(() => {
        // Small delay to ensure slider initializes properly
        const timer = setTimeout(() => setIsSliderReady(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
        lazyLoad: 'ondemand',
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Screenshot Carousel"
            className="modal"
            overlayClassName="overlay"
        >
            <div className="relative bg-white rounded-lg p-4 w-[80vw]  h-[90vh] flex flex-col justify-center items-center">
                <button
                    onClick={onRequestClose}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 z-10"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                {isSliderReady ? (
                    <Slider {...settings} className="w-full flex-1">
                        {screenshots.map((src, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <div className="h-full flex items-center">
                                    <img
                                        src={src}
                                        alt={`Screenshot ${index + 1}`}
                                
                                        onClick={() => setIsZoomed(!isZoomed)}
                                        className={`max-w-full ${isZoomed ? 'max-h-none cursor-zoom-out' : 'max-h-[75vh] cursor-zoom-in object-contain mx-auto'}`}

                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <div className="animate-pulse text-gray-500">Loading images...</div>
                    </div>
                )}
            </div>
        </Modal>
    );
};

// Custom arrow components (same as before)
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full hover:bg-gray-100 bg-white bg-opacity-70"
            aria-label="Next"
        >
            <ChevronRight size={32} />
        </button>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full hover:bg-gray-100 bg-white bg-opacity-70"
            aria-label="Previous"
        >
            <ChevronLeft size={32} />
        </button>
    );
};

// Add these styles to your CSS
const customStyles = `
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    position: relative;
    outline: none;
    width: 90%;
    max-width: 1200px;
  }
  
  .slick-slider {
    width: 100%;
    height: 100%;
  }
  
  .slick-list {
    height: 100% !important;
  }
  
  .slick-track {
    display: flex;
    height: 100%;
  }
  
  .slick-slide > div {
    height: 100%;
  }
  
  .slick-dots {
    bottom: -25px !important;
  }
  
  .slick-dots li button:before {
    font-size: 12px;
    color: #666;
  }
  
  .slick-dots li.slick-active button:before {
    color: #000;
  }
`;

// Inject styles
if (!document.getElementById('slick-carousel-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'slick-carousel-styles';
    styleElement.innerHTML = customStyles;
    document.head.appendChild(styleElement);
}

export default ScreenshotCarousel;