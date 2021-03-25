import {useContext, useEffect, useState} from 'react';

import {ItemsContext} from '../../context/itemsContext';

import Styles from './style.module.css';

export default function FieldItem({item, id}) {
    const label = item[0]
    const value = item[1]
    const [itemValue, setItemValue] = useState(value);
    const Context = useContext(ItemsContext)
    const onChangeHandler = (event) => {
        setItemValue(event.target.value)
    };

    return (
        <div className={Styles.group}>
            <label className={Styles.itemLabel} htmlFor={label + id}>{label.toUpperCase()}</label>
            <div className={Styles.inputWrapper}>
                <input type='text' className={Styles.itemInput} id={label + id} value={itemValue}
                       onInput={onChangeHandler}/>
                <button onClick={() => {
                    Context.updateValue(label, itemValue, id)
                }}>Save
                </button>
            </div>
        </div>
    )
}
