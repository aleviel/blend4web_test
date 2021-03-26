import {useEffect, useState} from 'react';

import MainField from '../mainField';
import {ItemsContext} from '../../context/itemsContext';

import './App.css';

function App() {
    const template = {name: '#', type: '#', color: '#'}
    const initData = [
        {name: 'name1', type: 'main', color: '#f4f4f4'},
        {name: 'name2', type: 'side', color: '#000000'},]
    const [allOptions, setAllOptions] = useState(JSON.parse(localStorage.getItem('outData')) || initData)

    useEffect(() => {
        const val = JSON.stringify(allOptions)
        localStorage.setItem('outData', val)
    }, [allOptions])

    const resetData = () => {
        localStorage.clear()
        setAllOptions(initData)
    }

    function updateData(id, elem) {
        console.log(elem)
        const copy = [...allOptions]
        copy.splice(id, 1, elem)
        setAllOptions(copy)
    }

    function updateValueInInput(label, value, id) {
        const copy = [...allOptions]
        copy[id][label] = value;
        console.log(copy)
        setAllOptions(copy)
    }

    function addNewObj() {
        setAllOptions(prev => ([
            ...prev, template
        ]))
    }

    function deleteObj(id) {
        const copy = [...allOptions]
        copy.splice(id, 1)
        setAllOptions(copy)
    }

    return (
        <>
            <ItemsContext.Provider value={
                {
                    allItems: allOptions,
                    addNewItem: addNewObj,
                    deleteItem: deleteObj,
                    resetLocalStorage: resetData,
                    updateAllItems: updateData,
                    updateValue: updateValueInInput
                }
            }>
                <h1 className='head-title'>blend4web_test_project</h1>
                <div className="wrapper">
                    <MainField/>
                </div>
                <footer className='footer'>Footer</footer>
            </ItemsContext.Provider>
        </>
    );
}

export default App;
