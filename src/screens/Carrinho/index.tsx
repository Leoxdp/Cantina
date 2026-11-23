import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { MenuItem } from "../Menu"; 
import { FlatList } from "react-native";

interface CarrinhoProps {
  onFecharCarrinho: () => void;
  carrinho: MenuItem[];
}

export function Carrinho({ onFecharCarrinho, carrinho }: CarrinhoProps) {
  return (
    <ScreenContainer>
      <Header>
        <HeaderTexts>
          <ScreenTitle>Carrinho</ScreenTitle>
        </HeaderTexts>
      </Header>
      <CarrinhoList
        data={carrinho}
        keyExtractor={(item, index) => String(index)}
        renderItem ={({ item }) => (
          <CarrinhoItem>
            <CarrinhoItemName>{item.name}</CarrinhoItemName>
          </CarrinhoItem>
        )}
      />
      <BackButtonCart onPress={onFecharCarrinho}>
        <BackButtonText>Voltar</BackButtonText>
      </BackButtonCart>
    </ScreenContainer>
  );
}

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`;

const HeaderTexts = styled.View``;

const ScreenTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const BackButtonCart = styled.TouchableOpacity`
  align-self: flex-start;
  margin: 16px;
  padding: 8px 16px;
  background-color: #d86213;
  border-radius: 20px;
`;

const BackButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const CarrinhoList = styled(FlatList<MenuItem>)`
  flex: 1;
`;

const CarrinhoItem = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;  

const CarrinhoItemName = styled.Text`
  font-size: 16px;
`;  