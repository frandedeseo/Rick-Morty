// React
import { View, TextInput, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { useState } from 'react';

// Components
import Picker from './Picker';

// Styles
import { Styles } from '../styles/FilterStyles';
 
export default function Filter({ filterVisibility, setFilterVisibility, getFilteredCharacters }) {
    const [textInput, setTextInput] = useState('');
    const [inputOption, setInputOption] = useState('name');
    const [genderOption, setGenderOption] = useState('');
    const [statusOption, setStatusOption] = useState('')
    const [moreOptionsVisibility, setMoreOptionsVisibility] = useState(false);

    const handleSubmit = () => {
        getFilteredCharacters({ input: inputOption + '=' + textInput, gender: genderOption, status: statusOption })
        setFilterVisibility(false);
    }

    const handleReset = () => {
        setTextInput('')
        setInputOption('name');
        setGenderOption('');
        setStatusOption('');
    }

    const handleCancel = () => {
        handleReset();
        handleSubmit();
    }

    return (
        <>
        <View style = {Styles.row}>
            {filterVisibility && (
                <View style = {Styles.filter}>
                    <TouchableOpacity onPress = {() => setMoreOptionsVisibility(true)}>
                        <Image style = {{ width: 25, height: 20}} source = {require('../assets/plusIcon.png')} />
                    </TouchableOpacity>

                    <TextInput 
                        style ={Styles.input} 
                        value = {textInput}
                        onChangeText = {setTextInput} 
                        placeholder = "TextFilter"
                    />

                    <TouchableOpacity onPress = {handleSubmit} style = {Styles.sendButton}>
                        <Image style = {{ width: 25, height: 20}} source = {require('../assets/botonEnviar.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {handleCancel} style = {Styles.sendButton}>
                        <Image style = {{ width: 25, height: 20}} source = {require('../assets/cancelIcon.png')} />
                    </TouchableOpacity>
                </View>
            )}

            {!filterVisibility && (
                <TouchableOpacity onPress = {() => setFilterVisibility(true)} style = {Styles.searchButton}>
                    <Image style = {{ width: 25, height: 20}} source = {require('../assets/searchIcon.png')} />
                </TouchableOpacity>
            )}
        </View>

        <Modal transparent visible = {moreOptionsVisibility} animationType = "slide">
            <View style = {Styles.modalView}>
                <Picker options = {['name', 'species', 'type']} filterOptions = {inputOption} setFilterOptions = {setInputOption} />
                <Picker options = {['male', 'female', 'unknown', 'genderless']} filterOptions = {genderOption} setFilterOptions = {setGenderOption} />
                <Picker options = {['alive', 'dead', 'unknown']} filterOptions = {statusOption} setFilterOptions = {setStatusOption} /> 

                <TouchableOpacity style = {Styles.button} onPress = {handleReset}>
                    <Text style = {Styles.buttonText}> Reset </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {Styles.button} onPress = {() => setMoreOptionsVisibility(false)}>
                    <Text style = {Styles.buttonText}> Close </Text>
                </TouchableOpacity>
            </View>
        </Modal>
        </>
    )
}