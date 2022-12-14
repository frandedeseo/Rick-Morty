// React
import { StatusBar, View, Modal, SafeAreaView } from 'react-native';
import { useEffect } from 'react';

// Components
import CharacterList from '../components/CharacterList';
import Character from '../components/Character';
import Topbar from '../components/Topbar';

// Hooks
import { useApi } from '../hooks/useApi';

// Styles
import { Styles } from '../AppStyles';

// Redux
import { useSelector } from 'react-redux';

export default function HomeScreen() {
    const modalVisible = useSelector((state) => state.characterModal.value);

    const { getCharactersFromApi } = useApi();

    useEffect(() => {
        getCharactersFromApi();
    }, []);

    return (
        <>
            <View style={Styles.container}>
                <SafeAreaView />
                <StatusBar barStyle='light-content' />

                <Topbar filter={true} />

                <CharacterList />

                {modalVisible && (
                    <Modal
                        transparent
                        visible={modalVisible}
                        animationType='slide'
                    >
                        <Character />
                    </Modal>
                )}
            </View>

            {modalVisible && <View style={Styles.blur} />}
        </>
    );
}
