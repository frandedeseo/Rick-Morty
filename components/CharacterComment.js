import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Styles } from "../styles/CharacterCommentStyles";
import { set_comment_modal_visibility } from "../redux/reducers/commentModalSlice";
import { set_character } from "../redux/reducers/onlyCharacterSlice";

export default function CharacterComment() {
    const dispatch = useDispatch()
    const character = useSelector(state => state.onlyCharacter.value);

    const handleClose = () => {
        dispatch(set_comment_modal_visibility(false));
        dispatch(set_character({}))
    }

    return(
        <View style = {Styles.container}>
            {console.log(character)}
            {character.commentary && <Text>character.commentary</Text>}
            {!character.commentary && <Text>No hay comentarios...</Text>}

            <View>
                <TouchableOpacity style = {Styles.button} onPress = {() => handleClose()}>
                    <Text style = {Styles.buttonText}> Close </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}