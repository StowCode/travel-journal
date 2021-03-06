import './App.css';

export default function Card(props) {
  return (
    <div className='card_container'>
        
        <img className='image' src={props.imageUrl} ></img>

        <div className='info_container'>
            <div className='location_container'>
                <svg className='pin' xmlns="http://www.w3.org/2000/svg" alt='pin' width="512px" height="512px" viewBox="0 0 425.963 425.963"><g>
                    <path d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z" fill=""/></g>
                </svg>

                <h5 className='country'>{props.location}</h5>
                <a className='maps_link' href={props.googleMapsUrl}>View on Google Maps</a>
            </div>

            <h1 className='destination'>{props.title}</h1>
            <h6 className='dates'>{props.startDate} - {props.endDate}</h6>
            <p className='description'>{props.description}</p>
        </div>
    </div>
  );
}
