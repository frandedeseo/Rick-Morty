// React
import { View, Text} from 'react-native';

// Styles
import { Styles } from '../styles/CharacterSummaryStyles';

export default function HistoryItem({ contenido }){

    return (
        <View style= {Styles.container}>
                <View style = {Styles.row}>
                    <Text style = {{color: 'white'}}>{contenido}</Text>
                </View>
        </View>
    );
}






