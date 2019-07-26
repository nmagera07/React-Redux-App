import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Picture from '../components/Picture'

import { fetchData, fetchSearchData } from '../store/actions'

import { Form } from 'semantic-ui-react'

const Pictures = (props) => {
    console.log('props', props.picture)
    const [formInput, setFormInput] = useState({text: ''})

    const searchData = (e) => {
        e.preventDefault()
        setFormInput({ text: ''})
        props.fetchSearchData(formInput.text)
    }

    const handleChanges = e => {
        setFormInput({ [e.target.name]: e.target.value })
    }

    useEffect(() => {
        props.fetchData()
    }, [])

    if (props.isFetching) {
       return <h2>Loading...</h2>
    }
    console.log(formInput)
    return ( 
        <div className="pictures">
            {/* <p>{props.picture.map((pic, i) => {
                return <div key={i}>
                    <img src={pic.url} alt="unsplash pic"></img>
                    <p>{pic.author}</p>
                </div>
            })}</p> */}
            <Form onSubmit={searchData}> 
                <input
                    placeholder="Search for gifs"
                    name="text"
                    onChange={handleChanges}
                    value={formInput.text}
                />
            </Form>
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
    { fetchData , fetchSearchData}
)(Pictures)