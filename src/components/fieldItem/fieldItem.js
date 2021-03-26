import {useContext, useState} from 'react';

import {ItemsContext} from '../../context/itemsContext';

import Styles from './style.module.css';
import {SketchPicker} from 'react-color';

export default function FieldItem({item, id}) {
    const label = item[0]
    const value = item[1]
    const Context = useContext(ItemsContext)
    const [itemValue, setItemValue] = useState(value);
    const [isColorPicker, setIsColorPicker] = useState(false);
    const [Color, setColor] = useState('white');

    const onChangeHandler = (event) => {
        setItemValue(event.target.value)
    };

    function showColorPicker() {
        setIsColorPicker(isColorPicker => !isColorPicker)
    }

    function handleChange() {
        console.log('change!')
    };

    function handleClose() {
        setIsColorPicker(false)
    }

    const ourPickerOrInput = label.match(/color/) ? <div onClick={showColorPicker}
                                                         className={Styles.swatchPicker}
                                                         style={{background: Color}}/> :
        <input type='text' className={Styles.itemInput} id={label + id} value={itemValue}
               onInput={onChangeHandler}/>


    return (
        <div className={Styles.group}>
            <label className={Styles.itemLabel} htmlFor={label + id}>{label.toUpperCase()}</label>
            <div className={Styles.inputWrapper}>
                {isColorPicker ?
                    (<div className={Styles.popover}>
                        <div className={Styles.cover} onClick={handleClose}/>
                        <SketchPicker color={Color} onChange={handleChange}/>
                    </div>)
                    : null}
                {ourPickerOrInput}
                <button onClick={() => {
                    Context.updateValue(label, itemValue, id)
                }}>Save
                </button>
            </div>
        </div>
    )
}
