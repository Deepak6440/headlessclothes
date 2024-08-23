import { useEffect, useState } from 'react';

const LoaderSwiperScript = () => {
    const [swiperKey, setSwiperKey] = useState(0);

    useEffect(() => {
        // Force component to re-render when revisiting the page
        setSwiperKey(prevKey => prevKey + 1);
      }, []);

      
    useEffect(() => {
      const swiperContainer = document.querySelector('.swiper-wrapper');
     
      if (swiperContainer) {
        if (window.Swiper) {
          // Destroy previous Swiper instance if it exists
          if (swiperContainer.swiper) {
            console.log("destry swipper")
            swiperContainer.swiper.destroy(true, true);
          }
          console.log("new swipper")
          // Initialize new Swiper instance
          new window.Swiper('.swiper-wrapper', { 
            // Your Swiper configuration options here
          });
        } else {
          console.error('Swiper script is not loaded.');
        }
      } else {
        console.error('Swiper container not found.');
      }
      
    }, []); // Empty dependency array ensures this runs only when the component mounts
  
    return null;
  };
  

export default LoaderSwiperScript;
