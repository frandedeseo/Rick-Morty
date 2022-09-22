// React
import {View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

// Components
import Filter from './Filter';

// Styles
import { Styles } from '../styles/TopbarStyles';

export default function Topbar({ getFilteredCharacters }) {
    const [filterVisibility, setFilterVisibility] = useState(false);

    return (
        <View style = {Styles.banner}>
            <View style = {Styles.row}>
                {!filterVisibility && <Image style = {Styles.bannerImage} source = {require('../assets/banner.png')} />}
                <Filter filterVisibility = {filterVisibility} setFilterVisibility = {setFilterVisibility} getFilteredCharacters = {getFilteredCharacters} />
            </View>
        </View>
    )
}