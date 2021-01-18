import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
      paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background: #1e222b;
  width: 112px;
  height: 90px;
  border-radius: 8px;
  padding: 16px;
  margin-right: 8px;
`;

export const IconCard = styled.Text`
  margin-top: -4px;
  margin-left: -4px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  padding-top: 16px;
  margin-left: -4px;
  font-weight: bold;
`;

export const CardBody = styled.ScrollView.attrs(() => ({
  vertical: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
      paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const OptionBody = styled.TouchableOpacity`
  background: #1e222b;
  width: 95%;
  height: 90px;
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 8px;
`;

export const IconCardBody = styled.Text`
  margin-top: 36px;
  margin-left: 18px;
  position: absolute;
`;

export const TitleBody = styled.Text`
  color: #fff;
  font-size: 16px;
  padding-top: 24px;
  font-weight: bold;
  margin-left: 50px;
  position: absolute;
`;

export const SubTitle = styled.Text`
  color: #fff;
  font-size: 14px;
  position: absolute;
  padding-top: 48px;
  margin-left: 50px;
`;

export const Img = styled.Image`
  width: 92%;
  height: 90px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
  margin-top: -4px;
  margin-left: 16px;
`;

export const TextFooter = styled.Text`
  color: #fff;
  font-size: 18px;
  padding-left: 16px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: -16px;
`;


export const OptionFooter = styled.TouchableOpacity`
  background: #1e222b;
  width: 110px;
  height: 90px;
  border-radius: 8px;
  padding: 16px;
  margin-right: 8px;
`;

export const CardFooter = styled.Text`
  background: #1e222b;
  width: 112px;
  height: 90px;
  border-radius: 8px;
  padding: 16px;
  margin-right: 8px;
`;




