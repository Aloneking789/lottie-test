import WhatWeDoCard from "./WhatWeDoCard";
// import whatWeDoData from './constants'
import ContentCreation from '../../../../public/ContentCreation.svg'
import './WhatWeDoSection.css'
const whatWeDoData = [
  {
      title: {
        first: 'Content',
        second:'Creation'
      },
      description: 'Vestibulum facilisis sapien et  ultricies hendrerit. Pellentesque vitae metus sed nisl elementum maximus quis a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cardImage: '/ContentCreation.svg' 
  },
  {
    title: {
      first: 'Performance',
      second:'Marketing'
    },
    description: 'Vestibulum facilisis sapien et  ultricies hendrerit. Pellentesque vitae metus sed nisl elementum maximus quis a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cardImage: '/ContentCreation.svg' 
},
{
  title: {
    first: 'SEO and Organic',
    second:'Growth'
  },
  titlFirstLie: 'SEO and Organic',
  titleSecondLine:'Growth',
  description: 'Vestibulum facilisis sapien et  ultricies hendrerit. Pellentesque vitae metus sed nisl elementum maximus quis a erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  cardImage: '/ContentCreation.svg' 
}
]
const WhatWeDoSection = () => {
  console.log(whatWeDoData)
  return (
    <div className="whatwedo-card-rows">
      <div className="whatwedo-card-columns">
        {
          whatWeDoData.map((item, itr)=>(
            <WhatWeDoCard key={itr} cardImage={item.cardImage} title={item.title} description={item.description}/>
          ))
        }
      </div>
      <div className="whatwedo-card-columns">
        {
          whatWeDoData.map((item, itr)=>(
            <WhatWeDoCard key={itr+10} cardImage={item.cardImage} title={item.title} description={item.description}/>
          ))
        }
      </div>
    </div>
  )
}

export default WhatWeDoSection;
