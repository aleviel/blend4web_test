import {useContext, useEffect, useState} from 'react';

import FieldItem from '../fieldItem/fieldItem';

import {ItemsContext} from '../../context/itemsContext';

import Styles from './style.module.css'

export default function Field({id, item}) {
    const [idColor, setIdColor] = useState(Object.entries(item).length - 2)
    const [elem, setElem] = useState(item)

    const onAddClickBtn = () => {
        const name = `color${idColor}`;
        setElem(prev => ({...prev, [name]: '#'}))
        setIdColor(prev => prev + 1)
    }

    const onDelClickBtn = () => {
        const name = `color${idColor - 1}`
        const copy = {...elem}
        delete copy[name]
        setElem(copy)
        setIdColor(prev => prev < 1 ? 1 : prev - 1)
    }

    const Context = useContext(ItemsContext);
    return (
        <div className={Styles.field}>
            {
                Object.entries(elem).map((elem) => {
                    return (
                        <FieldItem
                            key={Date.now() + Math.random()}
                            id={id}
                            item={elem}/>)
                })
            }
            <div className={Styles.btnGroup}>
                <button onClick={() => {
                    Context.deleteItem(id)
                }}>Remove Field
                </button>
                <button onClick={() => {
                    onAddClickBtn()
                }}> Add New Color
                </button>
                <button disabled={idColor === 1 ? true : false} onClick={() => {
                    onDelClickBtn()
                }}> Remove Color
                </button>
                <button onClick={() => {
                    Context.updateAllItems(id, elem)
                }}> Save Changes
                </button>
            </div>

        </div>
    )
}
