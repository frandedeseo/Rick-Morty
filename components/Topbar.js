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
                {!filterVisibility && (
                    <View style = {Styles.row}>
                        <Image style = {Styles.bannerImage} source = {require('../assets/banner.png')} />
                        <TouchableOpacity onPress = {() => setFilterVisibility(true)} style = {Styles.searchButton}>
                            <Image style = {Styles.searchIcon} source = {require('../assets/searchIcon.jpg')} />
                        </TouchableOpacity>
                    </View>
                )}
                {filterVisibility && (
                    <Filter filterVisibility = {filterVisibility} setFilterVisibility = {setFilterVisibility} getFilteredCharacters = {getFilteredCharacters} />
                )}  
        </View>
    )
}