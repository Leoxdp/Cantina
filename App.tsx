import { SafeAreaProvider } from "react-native-safe-area-context";
import { Menu, MenuItem } from "./src/screens/Menu";
import { Carrinho } from "./src/screens/Carrinho";
import { useState } from "react";


export default function App() {

const [currentScreen, setCurrentScreen] = useState<'Menu' | 'Carrinho'>('Menu');
 const [carrinho, setCarrinho] = useState<MenuItem[]>([])

return (
  <SafeAreaProvider>
    {currentScreen === 'Menu'
      ? <Menu
          onAbrirCarrinho={() => setCurrentScreen('Carrinho')}
          carrinho={carrinho}
          onAdicionarAoCarrinho={(item) => setCarrinho([...carrinho, item])}
        />
      : <Carrinho onFecharCarrinho={() => setCurrentScreen('Menu')} carrinho={carrinho} />}
  </SafeAreaProvider>
);
}

