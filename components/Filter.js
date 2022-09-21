// React
import {Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

import {Picker} from '@react-native-picker/picker';
//import {Picker} from 'react-native-picker';
import { useState } from 'react';

// Styles
import { Styles } from '../styles/FilterStyles';
 
export default function Filter({ getFilteredCharacters }) {
    const [text, setText] = useState("");
    const [filterText, setFilterText] = useState("name");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [visibility, setVisibility] = useState(false);
    const sendForm = () => {
        getFilteredCharacters(JSON.stringify({text: text, filterText: filterText, status: selectedStatus, gender: selectedGender}));
    }
    const displayFilter = () => {
        console.log(visibility);
        setVisibility(true);
    }

    const displayMoreFilter = () => {

    }
/*
    const handleFilterCancel = () => {
        setText("");
        sendForm(filter);
    }ee
    <Button title = "Clear" onPress = {handleFilterCancel} />
                        <CheckBox
                    value={selectedStatus=='alive'}
                    onValueChange={() => {                        
                        if (selectedStatus == 'alive'){
                            setSelectedStatus("");
                        }else{
                            setSelectedStatus('alive');
                        }cc
                    }
*/

    return (
        <View style={Styles.banner}>
            <View style = {Styles.row}>
                <Image style = {Styles.bannerImage} source = {require('../assets/banner.png')} />
                {visibility && (
                    <>
                    <Picker
                        selectedValue={filterText}
                        onValueChange={(itemValue) => setFilterText(itemValue)}
                        mode="dropdown"
                        style={Styles.textPicker}
                    >
                        <Picker.Item label="Name" value="name" />
                        <Picker.Item label="Type" value="type" />
                        <Picker.Item label="Species" value="species" />
                    </Picker>

                    <TextInput 
                        style ={Styles.input} 
                        placeholder = "TextFilter" 
                        onChangeText = {setText} 
                        value = {text}
                        />

                    <TouchableOpacity style = {Styles.moreActionsButton} onPress={displayMoreFilter}>
                        <Image style = {{ width: 30, height: 20,borderBottomRightRadius: 8, borderBottomLeftRadius: 8}} source = {require('../assets/moreIcon.png')} />
                    </TouchableOpacity>
                    </>
                )}

                <TouchableOpacity style = {Styles.backButton} onPress={() => setVisibility(true)}>
                    <Image style = {{ width: 25, height: 20}} source = {require('../assets/searchIcon.png')} />
                </TouchableOpacity>
                {/*
                <Picker
                    selectedValue={selectedStatus}
                    onValueChange={(itemValue) => {
                        setSelectedStatus(itemValue);
                    }}
                    mode="dropdown"
                    style={Styles.picker}
                >
                    <Picker.Item label="None" value="" />
                    <Picker.Item label="Alive" value="alive" />
                    <Picker.Item label="Dead" value="dead" />
                    <Picker.Item label="Unknown" value="unknown" />
                </Picker>
                
                <Picker
                    selectedValue={selectedGender}
                    onValueChange={(itemValue) => setSelectedGender(itemValue) }
                    mode="dropdown"
                    style={Styles.picker}
                >
                    <Picker.Item label="None" value="" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Genderless" value="genderless" />
                    <Picker.Item label="Unknown" value="unknown" />
                </Picker>

                <Button style={Styles.submitButton} title = "Submit" onPress = {sendForm} />
                */}
            </View>
        </View>
    )
}
/*
                        <CheckBox name={'Alive'} getIfCheckedBox={}></CheckBox>
            <CheckBox name={'Dead'} getIfCheckedBox={}></CheckBox>
            <CheckBox name= {'Unknown'} getIfCheckedBox={}></CheckBox>


            <View>
                <Text>Status: </Text>
                    <Text>Alive</Text>
                        <CheckBox style= {Styles.Checkbox}
                        status={(selectedStatus=='alive') ? 'checked' : 'unchecked'} 
                        onPress={() => {
                            if (selectedStatus == 'alive'){
                                setSelectedStatus("");
                            }else{
                                setSelectedStatus('alive');
                            }
                        }}
                        />
                    <Text>Dead</Text>
                    <Checkbox style = {Styles.Checkbox}
                    status={selectedStatus=='dead' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        
                        if (selectedStatus == 'dead'){
                            setSelectedStatus("");
                        }else{
                            setSelectedStatus('dead');
                        }
                    }}
                    />
                    <Text>Unknown</Text>
                    <Checkbox style = {Styles.Checkbox}
                    status={selectedStatus=='unknown' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        if (selectedStatus == 'unknown'){
                            setSelectedStatus("");
                        }else{
                            setSelectedStatus('unknown');
                        }
                    }}
                    />
            </View>
            <View>
                <Text>Gender: </Text>
                    <Text>Female</Text>
                    <Checkbox style = {Styles.Checkbox}
                    status={selectedGender=='female' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        if (selectedGender == 'female'){
                            setSelectedGender("");
                        }else{
                            setSelectedGender('female');
                        }
                    }}
                    />
                    <Text>Male</Text>
                    <Checkbox style = {Styles.Checkbox}
                    status={selectedGender=='male' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        
                        if (selectedGender == 'male'){
                            setSelectedGender("");
                        }else{
                            setSelectedGender('male');
                        }
                    }}
                    />
                    <Text>Genderless</Text>
                    <Checkbox style = {Styles.Checkbox}
                    status={selectedGender=='genderless' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        if (selectedGender == 'genderless'){
                            setSelectedGender("");
                        }else{
                            setSelectedGender('genderless');
                        }
                    }}
                    />
                    <Text>Unknown</Text>
                    <Checkbox style = {Styles.Checkbox}
                    status={selectedGender=='unknown' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        if (selectedGender == 'unknown'){
                            setSelectedGender("");
                        }else{
                            setSelectedGender('unknown');
                        }
                    }}
                    />
            </View>
        */