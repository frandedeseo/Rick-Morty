// React
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { useState } from 'react';

// Styles
import { Styles } from '../styles/PickerStyles';

export default function Picker({ options, filterOptions, setFilterOptions }) {
    const [optionsVisibility, setOptionsVisibility] = useState(false);

    const handleOptionPicker = (option) => {
        setFilterOptions(option);
        setOptionsVisibility(false);
    }

    return (
        <View style = {Styles.filterOptions}>
            <View style = {Styles.row}>
                <Text> {filterOptions} </Text>

                <TouchableOpacity onPress = {() => setOptionsVisibility(prevVisibility => !prevVisibility)}>
                    <Image style = {{ width: 25, height: 20 }} source = {require('../assets/moreIcon.png')} />
                </TouchableOpacity>
            </View>

            {optionsVisibility && (
                <View style = {Styles.optionsBox}>
                    {options.map(option => (
                        <TouchableOpacity key = {option} onPress = {() => handleOptionPicker(option)}><Text>{option}</Text></TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    )
}