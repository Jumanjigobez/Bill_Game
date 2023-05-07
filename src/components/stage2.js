import React, { useContext } from "react";
import { MyContext } from "../context";

const Stage2 = () =>{
    const context = useContext(MyContext);

    return(
        <>
        <div className="result-wrapper mt-3">
            <h3>The Looser is:</h3>
            <div>{context.state.result}</div>
        </div>
        <div
            className="action_button"
            onClick={() => context.resetGame()}
        >
            START OVER
        </div>
        <div
            className="action_button btn_2"
            onClick={()=> context.getNewLooser()}
        >
            GET NEW LOOSER
        </div>
        </>
    )
}

export default Stage2;