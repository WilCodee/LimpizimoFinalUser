import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fontSizes from '../../constants/fontSizes';

const { $small } = fontSizes;
const { secondaryColor, mainColorLight } = colors;

export default StyleSheet.create({
        container: {
          backgroundColor: 'white',
          //height: 970
        },
        greeting: {
          color: mainColorLight,
          backgroundColor: secondaryColor,
          fontSize: $small,
          textAlign: 'center',
          paddingVertical: 4,
          fontWeight: 'bold',
        }
})