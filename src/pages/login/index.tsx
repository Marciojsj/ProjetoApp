import React, { useState } from 'react';
import { style } from './style';
import Logo from '../../assets/logo.jpg';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity

} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';

export default function Login() {

    const [email, setEmail] = useState(''); //Hook para conseguir genrenciar variaveis de estado na aplicação 
    const [password, setPassword] = useState('');

    return (
        // <Text>Olá Mundo! 2</Text>
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                // resizeMode='contain'
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>

                <Text style={style.titleInput}>ENDEREÇO DE EMAIL:</Text>

                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <MaterialIcons name="email"
                        size={20}
                        color={themas.colors.gray} />
                </View>
                <Text style={style.titleInput}>SENHA:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password} 
                        onChangeText={(e)=> setPassword(e)}

                        />

                    <MaterialIcons name="remove-red-eye"
                        size={20}
                        color={themas.colors.gray} />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton} > Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom} >Não tem uma conta? <Text style={{ color: themas.colors.primary }}>Crie agora!</Text></Text>

        </View>
    );
}