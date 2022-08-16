import React from "react";
import Button from "../Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const QuoteContainer = (props) => {
    const{
        author,
        content,
        clickAction,
    }  = props

    return(
        <div
        >
            <p>
                {content}
                <br />
                <small>- {author}</small>
            </p>
            <Button><FontAwesomeIcon
            icon={faCoffee}
            /></Button>
            <Button>Tumblr</Button>
            <Button
            clickAction={clickAction}
            >
                New quote
            </Button>
        </div>
    )
}

export default QuoteContainer