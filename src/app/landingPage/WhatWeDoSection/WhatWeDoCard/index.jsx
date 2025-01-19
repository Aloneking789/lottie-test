
import Image from 'next/image';
import './WhatWeDoCard.css'
const WhatWeDoCard = ({cardImage, title, description}) => {
  return (
    <div className="whatwedo-card-container">
        <div className='whatwedo-icon-wrapper'>
            <Image src={cardImage} height={50} width={50} alt="something"/>
        </div>
        <div>
            <div className="whatwedo-title">
                {title.first}
            </div>
            <div className="whatwedo-title">
                {title.second}
            </div>
        </div>
        <div className="whatwedo-description">
            {description}
        </div>
        <div className='whatwedo-card-arrow-container'>
            <Image src={'/Arrow.svg'} width={40} height={20} alt='know more arrow'/>
        </div>
    </div>
  )
}

export default WhatWeDoCard;
