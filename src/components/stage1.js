import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from 'react-bootstrap';

import { MyContext } from "../context";

const Stage1 = () =>{

    const textInput = useRef();
    const context = useContext(MyContext);
    const [error, setError] = useState([false, ''])

    const handleSubmit= (e) =>{
        e.preventDefault(); 
        const value = textInput.current.value;
        const validate = validateInput(value);

        if(validate){
            //form is valid add player
            setError([false, '']);
            context.addPlayer(value);
            textInput.current.value = '';

        }else{
            
        }

    }

    const validateInput = (value) =>{
        if(value === ''){
            setError([true, 'Sorry, you need to add something']);
            return false;
        }
        if(value.length <= 2){
            setError([true, 'Sorry, you need 3 char at least']);
            return false;
        }
        return true;
    }
    

    return(
        <>
           <Form className="mt-4" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Add player name"
                        name="player"
                        ref={textInput}
                    >
                        
                    </Form.Control>
                </Form.Group>
                {
                error[0] ?
                    <Alert variant="danger" className="mt-2">
                        {error[1]}
                    </Alert>
                    :
                    ''

                }
                <Button className="miami mt-4" variant="primary" type="submit">
                    Add Player
                </Button>

                {
                    context.state.players && context.state.players.length > 0 ?
                    <>
                        <hr/>
                        <div>
                            <ul className="list-group">
                                {
                                    context.state.players.map((item,i)=>(
                                        <li key={i} className="list-group-item d-flex justify-content-between 
                                        align-items-center
                                        list-group-item-action">
                                            {item}
                                            <span 
                                                className="badge badge-danger"
                                                onClick = {()=> context.removePlayer(i)}
                                            >x</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div 
                                className="action_button"
                                onClick={() => context.next()}>
                                NEXT
                            </div>
                        </div>
                    </>
                    :
                    ''
                }
           </Form>


        </>
        
    )
}

export default Stage1;