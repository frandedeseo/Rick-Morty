import React, { useState } from "react";
import { TextInput, View, Keyboard, Image, Text, TouchableOpacity} from "react-native";
import { Styles } from '../styles/CommentInputStyles';

const CommentInput = ({ ocultarModal, addCommentToCharacter }) => {
    const [clicked, setClicked] = useState(false);
    const [textInput, setTextInput] = useState('');

    const handleCancel = () => {
        setTextInput('');
        ocultarModal();
    }
    const handleSubmit = () => {
        ocultarModal();
        addCommentToCharacter(textInput);
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.searchBar}>
                <TextInput
                    multiline={true}
                    underlineColorAndroid='transparent'
                    style = {Styles.input}
                    placeholder = "Agregue un comentario..."
                    value = {textInput}
                    onChangeText = {setTextInput}
                    onFocus = {() => setClicked(true)}
                />

                {clicked && (
                    <TouchableOpacity 
                        onPress = {() => { 
                            setTextInput("");
                            Keyboard.dismiss();
                            setClicked(false);
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
            <TouchableOpacity onPress = {handleSubmit}>
                <Image style = {Styles.sendIcon} source = {require('../assets/boton-enviar.png')} />
            </TouchableOpacity>
        </View>
    )
}
export default CommentInput;


