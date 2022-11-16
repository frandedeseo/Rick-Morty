//React
import { TextInput, View, Keyboard, Image, Text, TouchableOpacity} from "react-native";
import { useState } from "react";

//Styles
import { Styles } from '../styles/CommentInputStyles';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { set_character } from '../redux/reducers/onlyCharacterSlice';
import { set_comment_input_modal_visibility } from '../redux/reducers/commentInputModalSlice';
import { add_commentary_firebase } from "../redux/reducers/favoriteCharactersSlice";

// Firebase
import { database } from '../firebase/config';
import { ref, set} from 'firebase/database';

const CommentInput = () => {
    const [clicked, setClicked] = useState(false);
    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();
    const character = useSelector(state => state.onlyCharacter.value);

    const handleCancel = () => {
        setTextInput('');
        dispatch(set_comment_input_modal_visibility(false));
        dispatch(set_character({}));

    }
    const handleSubmit = () => {
        addComment();
        dispatch(set_comment_input_modal_visibility(false));
        dispatch(set_character({}));
        setTextInput('');
    }
    const addComment = () => {
        set(ref(database, 'favoriteCharacters/' + character.id), {
            character: {...character, commentary: textInput}
        });
        dispatch(add_commentary_firebase({...character, commentary: textInput}));
        
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


