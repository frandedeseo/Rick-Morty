// SearchBar.js
import React, { useState } from "react";
import { TextInput, View, Keyboard, Image, Text, TouchableOpacity} from "react-native";
import { Styles } from '../styles/SearchBarStyles';

const SearchBar = ({ textInput, setTextInput, handleCancel, handleSubmit }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <View style={Styles.container}>
            <View style={Styles.searchBar}>
                <Image 
                    style = {Styles.searchIcon} 
                    source = {require('../assets/lupitaBuscador.png')} 
                />

                <TextInput
                    style = {Styles.input}
                    placeholder = "Search"
                    value = {textInput}
                    onChangeText = {setTextInput}
                    onFocus = {() => setClicked(true)}
                    onSubmitEditing = {handleSubmit}
                />

                {clicked && (
                    <TouchableOpacity 
                        onPress = {() => { 
                            setTextInput("");
                            Keyboard.dismiss();
                        }}
                    >
                        <Image 
                            style = {Styles.cross} 
                            source = {require('../assets/cross-dark.png')}
                        />
                    </TouchableOpacity>
                )}
            </View>

            <TouchableOpacity 
                onPress = {() => {
                    Keyboard.dismiss();
                    handleCancel();
                }}
            >
                <Text style = {Styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SearchBar;


