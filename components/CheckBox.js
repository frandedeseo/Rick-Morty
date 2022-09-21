import { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function CheckBox(name) {
  const [checked, setChecked] = useState(false);

  return (
    <View>
        <Text>{name}</Text>
        <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
            setChecked(!checked);
        }}
        />
    </View>
  )
}
