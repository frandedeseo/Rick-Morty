// React
import { View, Image } from 'react-native';
import { useState } from 'react';

// Styles
import { Styles } from '../styles/TopbarStyles';

export default function FavoriteTopbar() {
    const [filterVisibility, setFilterVisibility] = useState(false);

    return (
        <View style = {Styles.banner}>
                {!filterVisibility && (
                    <View style = {Styles.row}>
                        <Image style = {Styles.bannerImage} source = {require('../assets/banner.png')} />
                    </View>
                )}
                
                {filterVisibility && (
                    <Filter filterVisibility = {filterVisibility} setFilterVisibility = {setFilterVisibility} getFilteredCharacters = {getFilteredCharacters} />
                )}  
        </View>
    )
}