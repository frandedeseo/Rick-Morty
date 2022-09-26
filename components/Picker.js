// React
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useState } from 'react';

// Styles
import { Styles } from '../styles/PickerStyles';

export default function Picker({ style, options, filterOptions, setFilterOptions }) {
    const [optionsVisibility, setOptionsVisibility] = useState(false);

    const handleOptionPicker = (option) => {
        setFilterOptions(option);
        setOptionsVisibility(false);
    }

    return (
        <View style = {[style, Styles.filterOptions]}>
            <View style = {Styles.row}>
                <Text style= {Styles.text}> {filterOptions} </Text>

                <TouchableOpacity style = {Styles.botonDesplegable} onPress = {() => setOptionsVisibility(prevVisibility => !prevVisibility)}>
                    <Image style = {Styles.moreIcon} source = {require('../assets/moreIcon.png')} />
                </TouchableOpacity> 
            </View>

            {optionsVisibility && (
                <View style = {Styles.optionsBox}>
                    {options.map(option => (
                        <TouchableOpacity key = {option} onPress = {() => handleOptionPicker(option)}><Text style = {Styles.opciones}>{option}</Text></TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    )
}