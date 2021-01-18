import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: -10px;
`;

export const TitleHeader = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonSeeMore = styled.TouchableOpacity`
`;

export const TitleSeeMore = styled.Text`
  color: #10c86e;
  font-size: 16px;
  font-weight: bold; 
`;


export const Card = styled.TouchableOpacity`
  border-radius: 8px;
  margin-top: 15px;
  padding: 15px;
  margin-bottom: -12px;
`;     

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;     

export const Logo = styled.Image``;   

export const Info = styled.View`
  margin-left: 14px;
  flex-direction: column;
`;   

export const TitleCard = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  color: #8E8E93;
  font-size: 12px;
  margin-top: 2px;
`;    
