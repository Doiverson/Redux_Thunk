import React from "react";

const Test = (props) => {

    console.log(props)

    return (
        <button onClick={() => props.action('FETCH_REQUIREMENTS')}>Click Saga</button>
    )

}

export default Test;
