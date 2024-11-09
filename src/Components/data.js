// export default [
//     {
//         id:1,
//         title:'Mount Fuji',
//         location:"Japan",
//         googleMapsUrl:"https://www.google.com/maps?q=Mount+Fuji&ll=35.3606,138.7274&z=10",
//         startDate: "24 Jan 2012",
//         endDate:"23 Feb 2038",
//         imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Hotel_Mt._Fuji_1999-7-19.jpg",
//         description:"Mount Fuji, Japan's tallest peak at 3,776 meters, is known for its iconic symmetrical cone shape and cultural significance. A popular destination for climbers and tourists, it offers breathtaking views and has inspired countless artists. The mountain is part of the Fuji-Hakone-Izu National Park, attracting visitors year-round."
//     },
//     {
//         id:2,
//         title:'Sydney Opera House',
//         location:"Australia",
//         googleMapsUrl:"https://www.google.com/maps?q=Sydney+Opera+House&ll=-33.8568,151.2153&z=15",
//         startDate: "24 Jan 2012",
//         endDate:"23 Feb 2038",
//         imageUrl:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Sydney_Opera_House_Sails.jpg",
//         description:"The Sydney Opera House is a world-famous architectural landmark in Australia, recognized for its sail-like design. Situated on Sydney Harbour, it hosts diverse performances and cultural events, drawing millions of visitors annually. Its stunning location and unique structure make it a symbol of Australian creativity and artistry."
//     },
//     {
//         id:3,
//         title:'Geirangerfjord',
//         location:"Norway",
//         googleMapsUrl:"https://www.google.com/maps?q=Geirangerfjord,+Norway&ll=62.1048,7.0941&z=11",
//         startDate: "24 Jan 2012",
//         endDate:"23 Feb 2038",
//         imageUrl:" https://upload.wikimedia.org/wikipedia/commons/0/0a/Geirangerfjord%2C_Norway.jpg",
//         description:"Geirangerfjord is a UNESCO World Heritage site in Norway, celebrated for its breathtaking landscapes of steep cliffs and cascading waterfalls. Surrounded by majestic mountains, it offers outdoor activities like hiking and kayaking. The fjord's beauty attracts nature enthusiasts from around the world, showcasing Norway's stunning natural heritage."
//     }
// ]

import image from '../Images/image 12.png';
import image1 from '../Images/wedding-photo.png'
import image2 from '../Images/mountain-bike.png'
export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: image,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: image1,
        stats: {
            rating: 5.0,
            reviewCount: 30
        }, 
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: image2,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]