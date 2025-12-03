import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function LoginScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  // Estados adicionados
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  // Função de validação
  function handleLogin() {
    setErro("");

    // Validação de email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErro("Digite um email válido.");
      return;
    }

    // Validação de senha
    if (senha.length < 8) {
      setErro("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    // Se tudo OK
    navigation.replace("Main");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SafeWaves</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta!</Text>

      {/* Campos */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      placeholderTextColor= "#d9d9d9"

      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      placeholderTextColor= "#d9d9d9"

      />

      {/* Mensagem de erro */}
      {erro !== "" && <Text style={styles.error}>{erro}</Text>}

      {/* Botão de Login */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      color: theme.title,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: theme.text,
      opacity: 0.7,
      marginBottom: 30,
    },
    input: {
      width: "100%",
      backgroundColor: theme.card,
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      color: theme.text,
      fontSize: 16,
      placeholderTextColor: "#ffff"
    },
    error: {
      color: "red",
      fontSize: 14,
      marginBottom: 10,
      alignSelf: "flex-start",
    },
    button: {
      width: "100%",
      backgroundColor: theme.buttonPrincipal,
      borderRadius: 10,
      padding: 15,
      alignItems: "center",
      marginBottom: 15,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    linkText: {
      color: theme.title,
      fontSize: 14,
      marginTop: 10,
    },
  });
