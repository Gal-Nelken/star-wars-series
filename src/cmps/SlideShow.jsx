// MODULES
import { useState, useEffect } from "react"


export const SlideShow = () => {
    // ARRAY OF IMAGES TO DISPLAY
    const images = [
        'https://wallpaperaccess.com/full/2101913.jpg',
        'https://cdn.wallpapersafari.com/89/19/vAF5M2.jpg',
        'https://i.redd.it/m182f70smoe51.png',
        'https://wallpaper.dog/large/5482636.jpg',
        'https://www.nawpic.com/media/2020/star-wars-nawpic-23.jpg',
        'https://images4.alphacoders.com/653/thumb-1920-653613.jpg'
    ];

    // CURRENT IMAGE DISPLAYED
    const [image, setImage] = useState(images[0]);

    // GET THE NEXT IMAGE IN THE ARRAY
    const getNextImg = () => {
        setImage(prevImage => {
            let idx = images.findIndex(img => img === prevImage);
            return (idx === -1 || idx === images.length - 1) ?
                images[0] : images[idx + 1];
        })
    }

    // ON MOUNT START 5-SEC INTERVAL TO SLIDE TO THE NEXT IMAGE
    useEffect(() => {
        const imageInterval = setInterval(() => {
            getNextImg()
        }, 5000)
        // REMOVE THE INTERVAL ON DISMOUNT
        return () => clearInterval(imageInterval);
    })

    return (
        // SLIDER CONTAINER
        <section className='slide-show' onClick={() => getNextImg()}>
            <img src={image} alt="STAR-WARS" />
        </section>
    )
}