import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import * as mockApi from '../api/mockApi';

export default function MessagesScreen() {
  const [messages, setMessages] = useState<mockApi.Message[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await mockApi.getMessages();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { id: Date.now().toString(), sender: 'Candidato', text: input }]);
    setInput('');
  };

  const renderItem = ({ item }: { item: mockApi.Message }) => (
    <View style={{ marginVertical: 4, alignSelf: item.sender === 'Candidato' ? 'flex-end' : 'flex-start', backgroundColor: item.sender === 'Candidato' ? '#DCF8C6' : '#ECECEC', padding: 8, borderRadius: 8, maxWidth: '80%' }}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white', padding: 16 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        inverted
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8 }}
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem"
        />
        <Button title="Enviar" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
}
