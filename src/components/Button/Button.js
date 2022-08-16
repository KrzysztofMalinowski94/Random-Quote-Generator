import React from "react";

export const Button = (props) => {
    const{
        className,
        children,
        clickAction
    }  = props

    return(
        <button
        className={className}
        onClick={clickAction}
        >
            {children}
        </button>
    )
}

export default Button