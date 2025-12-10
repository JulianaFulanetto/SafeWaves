import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useThemeStyles } from "../hooks/useThemeStyles";

export default function CadastroScreen({ navigation }) {
  const styles = createStyles(useThemeStyles());

  // Estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Estado para erros
  const [error, setError] = useState("");

  function validateEmail(text) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(text);
  }

  function handleCadastro() {
    if (nome.trim().length < 3) {
      return setError("O nome deve ter pelo menos 3 caracteres.");
    }

    if (!validateEmail(email)) {
      return setError("Digite um e-mail válido.");
    }

    if (senha.length < 8) {
      return setError("A senha deve ter pelo menos 8 caracteres.");
    }

    setError("");
    alert("Cadastro realizado com sucesso!");
    navigation.replace("Main");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SafeWaves</Text>
      <Text style={styles.subtitle}>Crie sua conta</Text>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      placeholderTextColor= "#d9d9d9"

      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
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
      {error.length > 0 && <Text style={styles.errorText}>{error}</Text>}

      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Link para Login */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
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
    errorText: {
      color: "red",
      marginBottom: 10,
      textAlign: "center",
      fontSize: 14,
    },
  });
