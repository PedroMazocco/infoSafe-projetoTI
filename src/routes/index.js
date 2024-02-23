import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../pages/login'
import Cadastro from '../pages/cadastro'
import Cadastro2 from '../pages/cadastro2'
import Denuncia from '../pages/denuncia'
import DrawerNav from './drawer'
import Responsavel from '../pages/responsavel'
import LoginResponsavel from '../pages/loginResponsavel'
import DrawerNavResponsavel from './drawerResponsavel'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName='cadastro'>
            <Stack.Screen
            name='cadastro'
            component={Cadastro}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='login'
            component={Login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='cadastro2'
            component={Cadastro2}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='denuncia'
            component={Denuncia}
            options={{
                title: 'Preencher Dados',
                headerStyle: {
                    backgroundColor: '#86078f',

                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },

            }} />

            <Stack.Screen 
            name='aluno'
            component={DrawerNav}
            options={{headerShown:false}}
            />

            <Stack.Screen 
            name='responsavel'
            component={DrawerNavResponsavel}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name='loginResponsavel'
            component={LoginResponsavel}
            options={{headerShown: false}}
            />
            
        </Stack.Navigator>
    )


}