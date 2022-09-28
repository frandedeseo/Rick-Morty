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
    const [genderOption, setGenderOption] = useState('None');
    const [statusOption, setStatusOption] = useState('None');
    const [moreOptionsVisibility, setMoreOptionsVisibility] = useState(false);

    const handleSubmit = () => {
        getFilteredCharacters({ input: inputOption + '=' + textInput, gender: genderOption == 'None' ? '' : genderOption, status: statusOption == 'None' ? '' : statusOption })
        setFilterVisibility(false);
    }

    const handleReset = () => {
        setTextInput('');
        setInputOption('name');
        setGenderOption('None');
        setStatusOption('None');
    }

    const handleCancel = () => {
        handleReset();
        handleSubmit();
    }

    return (
        <> 
            {filterVisibility && (
                <View style = {Styles.row}>
                    <TouchableOpacity style = {Styles.plusButton} onPress = {() => setMoreOptionsVisibility(true)}>
                        <Image style = {Styles.plusIcon} source = {require('../assets/plusIcon.png')} />
                    </TouchableOpacity>

                    <Picker style = {Styles.filterText} options = {['name', 'species', 'type']} filterOptions = {inputOption} setFilterOptions = {setInputOption} />

                    <TextInput 
                        style ={Styles.input} 
                        value = {textInput}
                        onChangeText = {setTextInput} 
                        placeholder = "TextFilter"
                    />

                    <TouchableOpacity onPress = {handleSubmit} style = {Styles.sendButton}>
                        <Image style = {Styles.sendIcon} source = {require('../assets/botonEnviar.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {handleCancel} style = {Styles.cancelButton}>
                        <Image style = {Styles.cancelIcon} source = {require('../assets/cancelIcon.png')} />
                    </TouchableOpacity>
                </View>
            )}

        <Modal transparent visible = {moreOptionsVisibility} animationType = "slide">
            <View style = {Styles.modalView}>
                <View style = {Styles.pickers}>
                    <Picker options = {['None','Male', 'Female', 'Unknown', 'Genderless']} style = {Styles.filterGender} filterOptions = {genderOption} setFilterOptions = {setGenderOption} />
                    <Picker options = {['None','Alive', 'Dead', 'Unknown']} style = {Styles.filterStatus} filterOptions = {statusOption} setFilterOptions = {setStatusOption} /> 
                </View>

                <TouchableOpacity style = {Styles.button} onPress = {() => setMoreOptionsVisibility(false)}>
                    <Text style = {Styles.buttonText}> Done </Text>
                </TouchableOpacity>
            </View>
        </Modal>
        </>
    )
}