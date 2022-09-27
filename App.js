// React
import { StatusBar, View, Modal, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';

// Components
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import Topbar from './components/Topbar';

// Hooks
import { useApi } from './hooks/useApi';

// Styles
import { Styles } from './AppStyles';

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
            <SafeAreaView>
                <StatusBar  barStyle="light-content"/>
            </SafeAreaView>
            
            <Topbar getFilteredCharacters = {getFilteredCharacters} />
            
            {data && (<CharacterList
                data={data.results}
                handlePress={handlePress}
                handleNextCharacters={getNextCharacters}
            />
            )}

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