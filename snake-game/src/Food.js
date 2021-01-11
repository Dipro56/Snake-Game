import React from "react";

export default (props) => {

    return (
        <div>
            {props.food.map((dot, i) => {
                const style = {
                    left: dot[0],
                }
                return (
                    <div className="snake-food" key={i} style={style}> </div>

                )
            })}

        </div>


    )

}