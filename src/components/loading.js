// src/components/loading.js

import React from 'react'

// React Bootstrap
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div>
            <Spinner animation='border' />
            Loading...
        </div>
    )
}

export default Loading