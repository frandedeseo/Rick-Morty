// React
import {Text, View, TextInput, Button, TouchableOpacity, Image, Switch } from 'react-native';

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
    const [readyForm, setReadyForm] = useState(false);
    const sendForm = () => {
        setVisibility(false);
        getFilteredCharacters(JSON.stringify({text: text, filterText: filterText, status: selectedStatus, gender: selectedGender}));
    }
    const checkIfFormSendable = () => {
        if (text!="" || selectedStatus!="" || selectedGender!=""){
            setReadyForm(true);
        }else{
            setReadyForm(false);
        }
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
                    <Text style={Styles.tx1}>Name</Text>
                    <Switch 
                        style={Styles.sw1}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={filterText=='name' ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={()=> {
                            if (filterText=="name"){
                                setFilterText("");
                            }else{
                                setFilterText("name");
                            }
                            checkIfFormSendable(); 
                        }}
                        value={filterText=='name'}
                    />
                    <Text style={Styles.tx2}>Type</Text>
                    <Switch
                        style={Styles.sw2}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={filterText=='type' ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={()=> {
                            if (filterText=="type"){
                                setFilterText("");
                            }else{
                                setFilterText("type");
                            } 
                            checkIfFormSendable(); 
                        }}
                        value={filterText=='type'}
                    />
                    <Text style={Styles.tx3}>Species</Text>
                    <Switch
                        style={Styles.sw3}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={filterText=='species' ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={()=> {
                            if (filterText=='species'){
                                setFilterText("");
                            }else{
                                setFilterText("species");
                            } 
                            checkIfFormSendable(); 
                        }}
                        value={filterText=='species'}
                    />

                    <TextInput 
                        style ={Styles.input} 
                        placeholder = "TextFilter" 
                        value = {text}
                        onChangeText = {setText}
                        onSubmitEditing = {checkIfFormSendable} 
                    />

                    <TouchableOpacity style = {Styles.moreActionsButton} onPress={displayMoreFilter}>
                        <Image style = {{ width: 30, height: 20,borderBottomRightRadius: 8, borderBottomLeftRadius: 8}} source = {require('../assets/moreIcon.png')} />
                    </TouchableOpacity>
                    </>
                )}

                {(!readyForm || !visibility) && (
                <TouchableOpacity style = {Styles.backButton} onPress={() => setVisibility(true)}>
                    <Image style = {{ width: 25, height: 20}} source = {require('../assets/searchIcon.png')} />
                </TouchableOpacity>
                )}
                {readyForm && visibility && (
                <TouchableOpacity style = {Styles.backButton} onPress={sendForm}>
                    <Image style = {{ width: 25, height: 20}} source = {require('../assets/botonEnviar.png')} />
                </TouchableOpacity>
                )}
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