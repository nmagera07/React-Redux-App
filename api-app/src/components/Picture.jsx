import React from 'react';

const Picture = (props) => {
    console.log("second props", props.data)
    return ( 
        <div>
            {props.data.map((pic, i) => {
                return <div key={i}>
                    <img src={pic.url} alt="unsplash pic"></img>
                    <p>{pic.author}</p>
                </div>
            })}
        </div>
     );
}
 
export default Picture;