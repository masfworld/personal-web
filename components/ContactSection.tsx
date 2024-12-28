import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await emailjs.send(
        process.env.EXPO_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.EXPO_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.EXPO_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setCaptchaVerified(false);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container as ViewStyle} id="contact">
      <Text style={styles.title as TextStyle}>Contact Me</Text>
      <Text style={styles.description as TextStyle}>
        I’d love to hear from you! Please fill out the form below.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor={Colors.light.textSecondary}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor={Colors.light.textSecondary}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          placeholderTextColor={Colors.light.textSecondary}
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <View style={styles.captcha}>
          <ReCAPTCHA
            sitekey={process.env.EXPO_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleCaptchaChange}
            theme="light"
            size="normal"
          />
        </View>
        <Button
          title={loading ? "Sending..." : "Send Message"}
          onPress={handleSubmit}
          disabled={!captchaVerified || loading}
          color={Colors.light.primary}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        {success && (
          <Text style={styles.success}>Message sent successfully!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    height: '100vh',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: 40,
    backgroundColor: Colors.light.background,
  } as ViewStyle,
  title: {
    fontFamily: 'RobotoMono',
    fontSize: 30,
    color: Colors.light.primary,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  } as TextStyle,
  description: {
    fontFamily: 'RobotoMono',
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 40,
    textAlign: 'center',
  } as TextStyle,
  form: {
    maxWidth: 500,
    alignSelf: 'center',
  } as ViewStyle,
  input: {
    fontFamily: 'RobotoMono',
    fontSize: 16,
    borderColor: Colors.light.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: Colors.light.text,
  } as TextStyle,
  textArea: {
    height: 100,
  } as TextStyle,
  captcha: {
    alignItems: 'center',
    marginBottom: 20,
  } as ViewStyle,
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  } as TextStyle,
  success: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  } as TextStyle,
});