import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const changeUser = () => {
        console.log('name changed')

    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const changeAge = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
    }

    return (
        <div>
            <textarea onChange={changeUser} onBlur={focusLostHandler}>Dimych</textarea>

            <input onChange={changeAge} type={'number'}/>

            <button name='delete' onClick={deleteUser}>delete</button>
        </div>
    )
}