import React from 'react';

const Picture = (props) => {
    console.log("second props", props.data)
    return ( 
        <div className="picture">
            {props.data.map((pic, i) => {
                return <div key={i}>
                    <img src={pic.images.downsized_medium.url} alt="unsplash pic"></img>
                    
                </div>
            })}
        </div>
     );
}
 
export default Picture;