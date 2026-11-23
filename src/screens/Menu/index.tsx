import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { FlatList } from "react-native"; 
import {useState} from "react";



interface onAbrirCarrinhoProps {
  onAbrirCarrinho: () => void;
  onAdicionarAoCarrinho: (item: MenuItem) => void;
  carrinho: MenuItem[];  

}
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}


const menu: MenuItem[] = [
  { id: '1', name: 'X-Salada', description: 'Pão, hambúrguer, queijo e salada', price: 18.90, category: 'Lanches' },
  { id: '2', name: 'Misto quente', description: 'Presunto e queijo na chapa', price: 9.50, category: 'Lanches' },
  { id: '3', name: 'Coxinha', description: 'Frango com catupiry', price: 7.00, category: 'Lanches' },
  { id: '4', name: 'Suco de laranja', description: 'Natural, 400 ml', price: 8.00, category: 'Bebidas' },
  { id: '5', name: 'Refrigerante lata', description: '350 ml', price: 6.00, category: 'Bebidas' },
  { id: '6', name: 'Café expresso', description: 'Xícara pequena', price: 5.00, category: 'Bebidas' },
  { id: '7', name: 'Brigadeiro', description: 'Unidade', price: 3.50, category: 'Doces' },
  { id: '8', name: 'Pudim', description: 'Fatia', price: 7.50, category: 'Doces' },
];


const categories = ['Todos', 'Lanches', 'Bebidas', 'Doces'];
export function Menu({onAbrirCarrinho, onAdicionarAoCarrinho, carrinho}: onAbrirCarrinhoProps) {

 const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
 const [busca, setBusca] = useState('');
 

  const filteredMenu = menu
  .filter((item) => categoriaSelecionada === 'Todos' || item.category === categoriaSelecionada)
  .filter((item) => item.name.toLowerCase().includes(busca.toLowerCase()));

  return (
    <ScreenContainer>
      <Header>
        <HeaderTexts>
          <ScreenTitle>Cantina</ScreenTitle>
          <ScreenSubtitle>O que vai pedir hoje?</ScreenSubtitle>
        </HeaderTexts>
        <CartBadge onPress={onAbrirCarrinho}>
          <CartBadgeText>Carrinho: {carrinho.length}</CartBadgeText>
        </CartBadge>  
      </Header>
              <SearchInput placeholder ="Buscar no cardápio..." value={busca} onChangeText={setBusca} />
      <CategoryList
        data={categories}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            onPress={() => setCategoriaSelecionada(item)}
          >
            <CategoryButtonText>{item}</CategoryButtonText>
          </CategoryButton>
        )}
      />
      <ProductList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard>
            <ProductInfo>
              <ProductName>{item.name}</ProductName>
              <ProductDescription>{item.description}</ProductDescription>
              <ProductPrice>R$ {item.price.toFixed(2).replace('.', ',')}</ProductPrice>
            </ProductInfo>
            <ProductButton onPress={() => onAdicionarAoCarrinho(item)}>
              <ProductButtonText>+</ProductButtonText>
            </ProductButton>
          </ProductCard>
        )}
      />
    </ScreenContainer>
  );
}

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #ffffff;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

`;
const HeaderTexts = styled.View`
`;

const ScreenTitle = styled.Text`
background-color: #a00202;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ScreenSubtitle = styled.Text`
background-color: #a00202;
  font-size: 16px;
  color: #666666;
`;

const CartBadge = styled.TouchableOpacity`
  padding: 8px 16px;
  background-color: #d86213;
  border-radius: 20px;

`;

const CartBadgeText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;  

const SearchInput = styled.TextInput`
  background-color: #f2f2f2;
  margin: 0px 16px;
  height: 48px;
  border-radius: 12px;
  padding: 8px;
`;  

const CategoryList = styled(FlatList<string>)`
  flex-grow: 0;
  flex-shrink: 0;
  margin: 16px 0;
  padding-left: 16px;
`;

const CategoryButton = styled.TouchableOpacity`
  background-color: #f2f2f2;
  padding: 8px 16px;
  border-radius: 20px;
  margin-right: 8px;
`;

const CategoryButtonText = styled.Text`
  font-size: 16px;
  color: #333333;
`;  

const ProductList = styled(FlatList<MenuItem>)`
  flex: 1;
  padding: 0 16px;
`;

const ProductCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ProductDescription = styled.Text`
  font-size: 14px;
  color: #666666;
`;

const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

const ProductButton = styled.TouchableOpacity`
  background-color: #d86213;
  padding: 8px 16px;
  border-radius: 20px;
`;

const ProductButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;  

const ProductInfo = styled.View`
  flex: 1;
`;

