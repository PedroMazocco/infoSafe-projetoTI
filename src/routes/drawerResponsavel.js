import { createDrawerNavigator } from '@react-navigation/drawer';
import Responsavel from '../pages/responsavel';
import Sobre from '../pages/sobre';
import Perfil from '../pages/perfil';

const Drawer = createDrawerNavigator();

export default function DrawerNavResponsavel() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
            name="denuncias" 
            component={Responsavel} 
            options={{
                title: 'Denúncias',
                headerStyle: {
                    backgroundColor: '#86078f',

                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
                drawerStyle: {
                    backgroundColor: '#696969',
                    width: 240,
                  },

            }} />

            <Drawer.Screen
            name='Sobre o App'
            component={Sobre}
            options={{
                title: 'Sobre o App',
                headerStyle: {
                    backgroundColor: '#86078f',

                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },
                drawerStyle: {
                    backgroundColor: '#696969',
                    width: 240,
                  },

            }}
            />
            
        </Drawer.Navigator>
    );
}
