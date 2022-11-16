// React
import { View, TouchableOpacity, Image, Animated } from 'react-native';
import { useState, useRef } from 'react';

// Components
import Picker from './Picker';

// Styles
import { Styles } from '../styles/FilterStyles';
import SearchBar from './SearchBar';
import { useApi } from '../hooks/useApi';
 
export default function Filter({ filterVisibility, setFilterVisibility }) {
    const [textInput, setTextInput] = useState('');
    const [inputOption, setInputOption] = useState('name');
    const [genderOption, setGenderOption] = useState('None');
    const [statusOption, setStatusOption] = useState('None');
    const [moreOptionsVisibility, setMoreOptionsVisibility] = useState(false);
    
    const anim = useRef(new Animated.Value(0)).current;
    const { getFilteredCharacters } = useApi();

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
        getFilteredCharacters({ input: 'name=', gender: '', status: '' })
        setFilterVisibility(false);
    }
    const aparecer = () => {
        setMoreOptionsVisibility(true);
        Animated.timing(anim, {
          toValue: 40,
          duration: 500,
          useNativeDriver: false
        }).start();
    };
    
    const desaparecer = () => {
        setMoreOptionsVisibility(false);
        Animated.timing(anim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }).start();
    };

    return (
        <>
        {filterVisibility && (
        <>
            <View style = {Styles.row}>
                {!moreOptionsVisibility && (
                    <TouchableOpacity style = {Styles.plusButton} onPress = {aparecer} >
                        <Image style = {Styles.plusIcon} source = {require('../assets/plusIcon.png')} />
                    </TouchableOpacity>
                )}

                {moreOptionsVisibility && (
                    <TouchableOpacity style = {Styles.plusButton} onPress = {desaparecer} >
                        <Image style = {Styles.substractIcon} source = {require('../assets/substractIcon.png')} />
                    </TouchableOpacity>
                )}

                <Picker 
                    style = {Styles.filterText} 
                    options = {['name', 'species', 'type']} 
                    filterOptions = {inputOption} 
                    setFilterOptions = {setInputOption} 
                />

                <View style = {Styles.line} />

                <SearchBar 
                    textInput = {textInput}  
                    setTextInput = {setTextInput} 
                    handleCancel = {handleCancel} 
                    handleSubmit = {handleSubmit} 
                />
            </View>

            <Animated.View style = {[Styles.modalView, {transform: [{translateY: anim}]}]}>
                <View style = {Styles.pickers}>
                    <Picker 
                        options = {['None','Male', 'Female', 'Unknown', 'Genderless']} 
                        style={Styles.filterGender} 
                        filterOptions = {genderOption} 
                        setFilterOptions = {setGenderOption} 
                    />

                    <Picker 
                        options = {['None','Alive', 'Dead', 'Unknown']} 
                        style = {Styles.filterStatus} 
                        filterOptions = {statusOption} 
                        setFilterOptions = {setStatusOption} 
                    /> 

                    <TouchableOpacity onPress = {handleSubmit}>
                        <Image style = {Styles.sendIcon} source = {require('../assets/boton-enviar.png')} />
                    </TouchableOpacity>
                </View>
            </Animated.View>                                   
        </>
        )}
        </>
    )
}
