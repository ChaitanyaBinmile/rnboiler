import english from '../../../assets/lang/English/LangEnglish';
import { widthPixel, heightPixel, fontPixel } from '../../../theme/Dimension'; 
import HomeActiveSvg from '../../../assets/icons/BottomTabIcons/HomeIconSvg';

export   const formFields = [
    {
      name: 'email',
      label: english.EMAIL_LABEL,  
      placeholder: english.EMAIL_PLACEHOLDER, 
      required: true,
      customContainerStyles: {
        backgroundColor: '#fff',
        borderRadius: widthPixel(5), 
        padding: heightPixel(10),     
      },
      customLabelStyles: {
        color: '#000',
        fontSize: fontPixel(16),      
      },
      customInputStyles: {
        padding: heightPixel(10),     
        borderColor: '#000',
        color: '#000',
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
        backgroundColor: '#fff',
        borderRadius: widthPixel(5),  
        padding: heightPixel(10),     
      },
      customLabelStyles: {
        color: '#000',
        fontSize: fontPixel(16),     
      },
      customInputStyles: {
        padding: heightPixel(10),    
        color: '#000',
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
        backgroundColor: '#fff',
        borderRadius: widthPixel(5),  
        padding: heightPixel(10),     
      },
      customLabelStyles: {
        color: '#000',
        fontSize: fontPixel(16),      
      },
      customInputStyles: {
        padding: heightPixel(10),     
        color: '#000',
        fontSize: fontPixel(16),      
      },
      secureTextEntry: true,
    },
   
  ];