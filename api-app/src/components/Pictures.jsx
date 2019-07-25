import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Picture from '../components/Picture'

import { fetchData } from '../store/actions'

const Pictures = (props) => {
    console.log('props', props.picture)
    const [pictures, setPictures] = useState()

    const getPictures = e => {
        e.preventDefault()
        props.fetchData()
    }

    useEffect(() => {
        props.fetchData()
    }, [])

    if (props.isFetching) {
       return <h2>Loading...</h2>
    }

    return ( 
        <div className="pictures">
            {/* <p>{props.picture.map((pic, i) => {
                return <div key={i}>
                    <img src={pic.url} alt="unsplash pic"></img>
                    <p>{pic.author}</p>
                </div>
            })}</p> */}
            <Picture data={props.picture} />
        </div>
     );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        isFetching: state.isFetching,
        picture: state.picture
    }
}

export default connect(
    mapStateToProps,
    { fetchData }
)(Pictures)