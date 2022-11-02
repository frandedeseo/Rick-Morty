// React
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Styles
import { Styles } from '../styles/CharacterSummaryStyles';

const status = {
    "Alive": '#55cc44',
    "Dead": 'red',
    "unknown": '#9e9e9e'
}

export default function CharacterSummary({ item: character, handlePress, icon, handlePressIcon }){

    return (
        <View style = {Styles.container}>
            <TouchableOpacity onPress = {() => handlePress(character)}>
                <View style = {Styles.row}>
                    <Image style = {Styles.image} source = {{ uri: character.image }} />
                    
                    <View style = {Styles.info}>
                        <View style = {Styles.row}>
                            <Text style = {{ ...Styles.status, backgroundColor: status[character.status] }} />
                            <Text style = {Styles.name}> {character.name} </Text>

                            <TouchableOpacity style = {Styles.iconWrap} onPress = {() => handlePressIcon(character)}>
                                <Image style = {Styles.icon} source = {icon} />
                            </TouchableOpacity>
                        </View>

                        <View style = {Styles.line} />

                        <View style = {Styles.row}>
                            {character.gender === 'Male' && <Image style = {Styles.genderImage} source = {require('../assets/Male.png')} />}
                            {character.gender === 'Female' && <Image style = {Styles.genderImage} source = {require('../assets/Female.png')} />}
                            {character.gender === 'unknown' && <Image style = {Styles.genderImage} source = {require('../assets/unknown.png')} />}
                            <Text style = {Styles.text1}>{character.gender} </Text>
                            <Text style = {Styles.text2}>{character.species}</Text>
                        </View>
                        
                        {character.type && <Text style = {Styles.type}>{character.type}</Text>}
                        {!character.type && <Text style = {Styles.type}>{'Normal ' + character.species}</Text>}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}