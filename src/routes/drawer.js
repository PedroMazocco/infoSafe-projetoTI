import { createDrawerNavigator } from '@react-navigation/drawer';
import Aluno from '../pages/aluno';
import Sobre from '../pages/sobre';
import Perfil from '../pages/perfil';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
            name="denuncias" 
            component={Aluno} 
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

            <Drawer.Screen
            name='perfil'
            component={Perfil}
            options={{
                title: 'Perfíl',
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
