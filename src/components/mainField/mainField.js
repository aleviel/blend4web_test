import {useContext} from "react";

import Field from "../field";

import {ItemsContext} from "../../context/itemsContext";

import Styles from './style.module.css'

export default function MainField() {
    const Context = useContext(ItemsContext);
    return (
        <div id={Styles.field} className={Styles.field}>
            <button className={'main-field-btn'} onClick={Context.resetLocalStorage}>Reset Local Storage</button>
            {Context.allItems.map((elem, i) => {
                return <Field key={Date.now() + Math.random()}
                              id={i}
                              item={elem}/>
            })}
            <button className={'main-field-btn'} onClick={Context.addNewItem}>
                Add New Obj
            </button>
        </div>
    )
}
