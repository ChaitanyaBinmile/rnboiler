import english from '../../../assets/lang/English/LangEnglish';
import { widthPixel, heightPixel, fontPixel } from '../../../theme/Dimension'; 
import SearchIconSvg from '../../../assets/images/BottomTabIcons/SearchBar';
import { COLORS } from '../../../theme/theme';
export   const formFields = [
    {
      name: 'email',
      label: english.EMAIL_LABEL,  
      placeholder: english.EMAIL_PLACEHOLDER, 
      required: true,
      customContainerStyles: {
        backgroundColor: COLORS.buttonTextWhite,
        borderRadius: widthPixel(5), 
        padding: heightPixel(10),     
      },
      customLabelStyles: {
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),      
      },
      customInputStyles: {
        padding: heightPixel(10),     
        borderColor: COLORS.defaultBlack,
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),     
      },
      keyboardType: 'email-address' as const,
    },
    {
      name: 'password',
      label: english.PASSWORD_LABEL,  
      placeholder: english.PASSWORD_PLACEHOLDER,
      required: true,
      // icon: <HomeActiveSvg/>,
      iconPosition: 'left' as const,
      customContainerStyles: {
        backgroundColor: COLORS.buttonTextWhite,
        borderRadius: widthPixel(5),  
        padding: heightPixel(10),     
      },
      customLabelStyles: {
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),     
      },
      customInputStyles: {
        padding: heightPixel(10),    
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),      
      },
      secureTextEntry: true,
    },
    {
      name: 'confirmPassword',
      label: english.CONFIRM_PASSWORD_LABEL,  
      placeholder: english.CONFIRM_PASSWORD_PLACEHOLDER,
      required: true,
      // icon: <HomeActiveSvg />,
      iconPosition: 'left' as const,
      customContainerStyles: {
        backgroundColor: COLORS.buttonTextWhite,
        borderRadius: widthPixel(5),  
        padding: heightPixel(10),     
      },
      customLabelStyles: {
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),      
      },
      customInputStyles: {
        padding: heightPixel(10),     
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),      
      },
      secureTextEntry: true,
    },
    {
      name: 'search',
      label: english.SEARCH_LABEL,  
      placeholder: english.SEARCH_PLACEHOLDER,
      required: true,
       icon: <SearchIconSvg />,
      iconPosition: 'left' as const,
      customContainerStyles: {
        backgroundColor: COLORS.buttonTextWhite,
        borderRadius: widthPixel(5),  
        padding: heightPixel(10),     
      },
      customLabelStyles: {
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),      
      },
      customInputStyles: {
        padding: heightPixel(10),     
        color: COLORS.defaultBlack,
        fontSize: fontPixel(16),      
      },
    }
  ];