import React from 'react';
import {Controller} from 'react-hook-form';
import InputApp from './InputApp';
import SelectApp from './SelectApp';
import DatePickerApp from './DatePickerApp';
import {Text, View} from 'native-base';
const ControllerTextInput = ({
  rules,
  label,
  placeholder,
  name,
  errors,
  control,
  type,
  items,
  colorScreen,
  iconCollection,
  iconName,
  secureText = false,
  multiple = false,
  navigation,
  titleScreen = 'Select',
  defaultValue = '',
}) => {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => {
          if (type === 'select') {
            return (
              <SelectApp.Default
                colorScreen={colorScreen}
                items={items}
                label={label}
                placeholder={placeholder}
                onBlur={onBlur}
                onSelect={selected => onChange(selected)}
                value={value}
                iconCollection={iconCollection}
                iconName={iconName}
              />
            );
          }

          if (type === 'date') {
            return (
              <DatePickerApp.Default
                colorScreen={colorScreen}
                label={label}
                value={value}
                onChange={selected => onChange(selected)}
                iconCollection={iconCollection}
                iconName={iconName}
              />
            );
          }

          return (
            <InputApp.Default
              label={label}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={text => onChange(text)}
              value={value}
              colorScreen={colorScreen}
              iconCollection={iconCollection}
              iconName={iconName}
              secureText={secureText}
              defaultValue={defaultValue}
            />
          );
        }}
        name={name}
      />
      {errors[name] && (
        <View flexDirection="row" justifyContent="flex-end" mr={2}>
          <Text style={{color: 'red'}}>Información requerida</Text>
        </View>
      )}
    </>
  );
};

export default ControllerTextInput;
