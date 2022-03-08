import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    height: "100%"
  },
  title: {
      color: '$primaryColor',
      fontSize: 18,
      fontWeight: 'bold'
  },
  greenText: {
      color: '$secondaryColor'
  },
  purpleText: {
      color: '$primaryColor'
  },

  cuponContainer: {
      backgroundColor: '$primaryColor',
      color: 'white',
      padding: 12
  },

  cuponDetails: {
      backgroundColor: '$secondaryColor',
      color: 'white',
      padding: 12
  },
  greeting: {
    color: '$mainColorLight',
    backgroundColor: '$secondaryColor',
    fontSize: '$small',
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: 'bold',
  },
  serviceQuestion: {
    color: '$mainColorLight',
    fontSize: '$xBig',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
  cleaningType: {
    color: '$mainColorLight',
    fontSize: '$small',
    textAlign: 'center',
    marginTop: 2,
  },
  cleaningOptionsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 180,
  },
  cleaningOption: {
    alignItems: 'center',
  },
  cleaningImageContainer: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 38,
    borderColor: '$mainColorLight',
    borderWidth: 3,
    transform: [{ perspective: 1000 }],
  },
  cleaningImage: {
    height: 36,
    width: 36,
  },
  cleaningMainText: {
    color: '$mainColorLight',
    fontSize: '$xxSmall',
    marginTop: 8,
  },
  cleaningDeepText: {
    color: '$mainColorLight',
    fontSize: '$xxSmall',
    fontWeight: 'bold',
  },
  bottomView: {
    flex: 1,
    height: 740,
    justifyContent: 'center',
  },
  frequency: {
    flexDirection: 'row',
    marginHorizontal: 35,
    marginTop: 16,
    height: 50,
    padding: 3,
    backgroundColor: '$primaryColor',
    borderWidth: 3,
    borderColor: '$mainColorLight',
    borderRadius: 25,
    zIndex: 2,
  },
  optionContainer: {
    height: '100%',
    borderRadius: 25,
    justifyContent: 'center',
  },
  frequencyText: {
    color: '$mainColorLight',
    fontSize: '$xSmall',
    textAlign: 'center',
  },
  frequencyInfoContainer: {
    marginTop: -25,
    marginHorizontal: 20,
    backgroundColor: '$mainColorLight',
    borderRadius: 30,
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 30,
    zIndex: 1,
  },
  frequencyOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  frequencyOptionText: {
    fontSize: '$small',
    color: '$greyText',
    fontWeight: 'bold',
  },
  recurrencePickerContainer: {
    marginLeft: 'auto',
    borderWidth: 2,
    borderColor: '$primaryColor',
    height: 22,
    width: 125,
    borderRadius: 13,
  },
  recurrencePicker: {
    height: '100%',
    marginLeft: -40,
    marginRight: -50,
    marginTop: -1,
    transform: [{ scale: 0.6 }],
  },
  dateTimePickerTouchableArea: {
    marginLeft: 'auto',
    width: 125,
    alignItems: 'center',
  },
  dateTimePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTimePickerImage: {
    height: 20,
    width: 20,
  },
  dateTimePickerText: {
    marginLeft: 8,
    color: '$greyText',
    fontSize: '$small',
  },
  placeQuestion: {
    marginTop: 8,
    fontSize: '$medium',
    textAlign: 'center',
    color: '$greyText',
    fontWeight: 'bold',
  },
  placeOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$primaryColor',
    padding: 3,
    marginHorizontal: 20,
    borderRadius: 16,
    marginTop: 9,
  },
  placeOptionImageContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOptionImage: {
    height: 21,
    width: 21,
  },
  placePickerInfoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  placePicker: {
    height: 24,
    marginHorizontal: -28,
    marginTop: -4,
    color: '$mainColorLight',
    transform: [{ scale: 0.8 }],
  },
  placeAddress: {
    color: '$mainColorLight',
    fontSize: '$xxSmall',
  },
  serviceHours: {
    marginTop: 8,
    fontSize: '$small',
    textAlign: 'center',
    color: '$greyText',
    fontWeight: 'bold',
  },
  serviceHoursOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$secondaryColor',
    padding: 2,
    marginHorizontal: 50,
    borderRadius: 15,
    marginTop: 6,
  },
  serviceHoursOptionImageContainer: {
    backgroundColor: '$mainColorLight',
    borderRadius: 14,
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceHoursOptionImage: {
    height: 15,
    width: 15,
  },
  serviceHoursPickerContainer: {
    marginLeft: 4,
    flex: 1,
  },
  serviceHoursPicker: {
    height: 21,
    color: '$mainColorLight',
    marginTop: -2,
    marginRight: -20,
    transform: [{ scale: 0.8 }],
  },
  cardOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  cardOptionImage: {
    height: 18,
    width: 18,
  },
  cardPickerContainer: {
    height: 26,
    width: 190,
  },
  cardPicker: {
    height: 27,
    transform: [{ scale: 0.85 }],
    color: '$greyTextLight',
    marginLeft: -20,
    marginRight: -45,
    marginTop: -2,
  },
  scrollArrow: {
    zIndex: 2,
    position: 'absolute',
    right: 20,
  },
  scrollArrowImage: {
    tintColor: '$primaryColor',
    width: 40,
    height: 25,
  },
  askForButton: {
    top: 290,
    height: 140,
    width: 140,
    backgroundColor: '$primaryColor',

    alignSelf: 'center',
    marginBottom: 300,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  askForButtonPartsContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: 'hidden',
  },
  askForButtonTopPart: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  askForText: {
    color: '$mainColorLight',
    fontSize: '$big',
  },
  now: {
    color: '$mainColorLight',
    fontSize: '$big',
    fontWeight: 'bold',
    lineHeight: '$big',
  },
  askForButtonBottomPart: {
    height: '50%',
    backgroundColor: '$secondaryColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatedPrice: {
    color: '$mainColorLight',
    fontSize: '$huge',
    fontWeight: 'bold',
    lineHeight: '$huge',
  },
  popupContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  popupImgContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    width: '90%',
  },
  popupTouchable: {
    width: '100%',
  },
  popupTextContainer: {
    paddingVertical: 20,
  },
  popupImg: {
    width: 130,
    height: 200,
  },
  messagePopupText: {
    fontSize: '$medium',
    textAlign: 'center',
  },
  okPopupText: {
    color: '$secondaryColor',
    fontWeight: 'bold',
    fontSize: '$xBig',
    textAlign: 'center',
    marginTop: 15,
  },
  lineSeparator: {
    height: 1,
    width: '112%',
    backgroundColor: '$mainColorDark',
  },
  mapContainer: {

    height: '100%',
    width: '100%',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,

    overflow: 'hidden',
    position: 'absolute',
    top: 45,
    right: 0,

  },
  map: {
    flex: 1,
  },
});
