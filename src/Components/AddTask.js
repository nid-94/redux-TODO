import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { add } from "./../Redux/actions";

function AddTask() {
    const addRef = useRef();
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(
            add({
                task: addRef.current.value,
                id: Math.random(),
                Done: false,
            })
        );
        addRef.current.value = "";
    };

    return (
        <div>
            <h1>add</h1>
            <input type="text" name="ncn" ref={addRef} />
            <button
                onClick={() =>
                    addRef.current.value == "" ? alert("please right a task to add") : handleAdd()
                }>
                add
            </button>
        </div>
    );
}

export default AddTask;
