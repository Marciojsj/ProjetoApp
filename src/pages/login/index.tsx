import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from './style';
import Logo from '../../assets/logo.jpg';
import { themas } from '../../global/themes';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function getlogin() {


        try {
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }
            setTimeout(() => {

                if (email == 'marcio@gmail.com' && password == '123') {
                    Alert.alert('Atenção', 'Login realizado com sucesso!');
                    setLoading(false);
                } else {
                    Alert.alert('Atenção', 'Email ou senha inválidos!');
                    setLoading(false);
                }
            }, 3000)

        } catch (error) {
            console.log('Erro ao realizar login: ', error);
        }


    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE EMAIL:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Digite seu email"
                        placeholderTextColor={themas.colors.gray}
                        returnKeyType="next"
                        enablesReturnKeyAutomatically
                    />
                    <MaterialIcons name="email" size={20} color={themas.colors.gray} />
                </View>

                <Text style={style.titleInput}>SENHA:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                        placeholder="Digite sua senha"
                        placeholderTextColor={themas.colors.gray}
                        returnKeyType="done"
                    />
                    <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.gray} />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getlogin}>
                    {loading ? <ActivityIndicator color={'#FFFFF'} size="small" /> : <Text style={style.textBottom}>Entrar</Text>}
                </TouchableOpacity>
            </View>

            <Text style={style.textBottom}>
                Não tem uma conta? <Text style={{ color: themas.colors.primary }}>Crie agora!</Text>
            </Text>
        </SafeAreaView>
    );
}
