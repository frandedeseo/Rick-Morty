// React
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

// Styles
import { Styles } from '../styles/CharacterStyles';

import CommentInput from './CommentInput';

const status = {
    "Alive": '#55cc44',
    "Dead": 'red',
    "unknown": '#9e9e9e'
}

export default function FavoriteCharacter({ character, addCommentToCharacter, handleClose }) {
    const [modalVisible, setModalVisible] = useState(false);

    const ocultarModal = () => {
        setModalVisible(false);
    }

    return (
        <View style = {Styles.modalView}>
            <Image style = {Styles.image} source = {{ uri: character.image }} />

            <View style = {Styles.data}>
    
                <Text style = {[Styles.text, Styles.name]}>{character.name}</Text>

                <View style = {Styles.line} />

                <View style = {Styles.row}>
                    <View>
                        <View style = {Styles.row}>
                            <Text style = {{ ...Styles.status, backgroundColor: status[character.status]}} />
                            <Text style = {Styles.text}>{character.status} - </Text>
                            <Text style = {Styles.text}>{character.species}</Text>
                        </View>

                        <View style = {Styles.genderRow}>
                            {character.gender === 'Male' && <Image style = {Styles.genderImage} source = {require('../assets/Male.png')} />}
                            {character.gender === 'Female' && <Image style = {Styles.genderImage} source = {require('../assets/Female.png')} />}
                            {character.gender === 'unknown' && <Image style = {Styles.genderImage} source = {require('../assets/unknown.png')} />}
                            <Text style = {Styles.text}>{character.gender} </Text>
                        </View>

                        <Text style = {Styles.greyText}>Type:</Text>
                        {character.type && <Text style = {Styles.text}>{character.type}</Text>}
                        {!character.type && <Text style = {Styles.text}>{'Normal ' + character.species}</Text>}
                        <Text style = {Styles.greyText}>Origin:</Text>
                        <Text style = {Styles.text}>{character.origin.name}</Text>
                    </View>
                </View>
                <Modal transparent visible = {modalVisible} animationType = "slide">
                    <CommentInput ocultarModal={ocultarModal} addCommentToCharacter={addCommentToCharacter}/>
                </Modal>
                <TouchableOpacity onPress= {() => setModalVisible(true)}>
                    <Text style = {Styles.buttonText}> Add Comment </Text>
                </TouchableOpacity>
                
            </View>
            


            <View>
                <TouchableOpacity style = {Styles.button} onPress= {handleClose}>
                    <Text style = {Styles.buttonText}> Close </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}