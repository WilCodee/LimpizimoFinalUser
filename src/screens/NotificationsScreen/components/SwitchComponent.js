import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import TextApp from '../../../components/TextApp';
import colors from '../../../constants/colors';

const SwitchComponent = ({title}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: colors.textInputColor,
        paddingHorizontal: 20,
        paddingBottom: 10,
        marginBottom: 15,
      }}>
      <TextApp.Default
        fontSize={20}
        value={title}
        color={colors.mainColorDark}
      />

      <Switch
        trackColor={{false: '#76757', true: colors.primaryColor}}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchComponent;
