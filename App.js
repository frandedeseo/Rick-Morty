// React
import { StatusBar, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import Character from './components/Character';
import CharacterList from './components/CharacterList';

// Hooks
import { useApi } from './hooks/useApi';

// Styles
import { Styles } from './AppStyles';
import Filter from './components/Filter';

export default function App() {
    const [character, setCharacter] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const { data, getCharactersFromApi, getNextCharacters, getFilteredCharacters } = useApi();

    useEffect(() => {
        getCharactersFromApi();
    }, [])

    const handlePress = (character) => {
        setModalVisible(true);
        setCharacter(character);
    }

    const handleClose = () => {
        setModalVisible(false);
        setCharacter({});
    }

    return (
        <>
        <View style={Styles.container}>
            <StatusBar />

            <Filter getFilteredCharacters = {getFilteredCharacters} />

            <CharacterList
                data={data.results}
                handlePress={handlePress}
                handleNextCharacters={getNextCharacters}
            />

            <Modal transparent visible = {modalVisible} animationType = "slide">
                <Character
                    character={character}
                    handleClose={handleClose}
                />
            </Modal>
        </View>

        {modalVisible && (
            <View style = {Styles.blur} />
        )}
        </>
    )
}