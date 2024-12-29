import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { SiApachespark, SiDbt, SiSnowflake, SiGooglecloud, SiAmazonwebservices, SiKubernetes, SiPython, SiScala, SiApachekafka, SiDatabricks } from 'react-icons/si';
import * as Animatable from 'react-native-animatable';

const technologies = [
  { icon: SiApachespark, name: 'Apache Spark' },
  { icon: SiDbt, name: 'DBT' },
  { icon: SiSnowflake, name: 'Snowflake' },
  { icon: SiAmazonwebservices, name: 'AWS' },
  { icon: SiApachekafka, name: 'Kafka' },
  { icon: SiDatabricks, name: 'Databricks' },
  { icon: SiGooglecloud, name: 'Google Cloud' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: SiScala, name: 'Scala' },
  { icon: SiPython, name: 'Python' },
];

export default function TechSection() {
  return (
    <View style={styles.container} id="tech">
      <Text style={styles.title}>Technologies</Text>
      <View style={styles.grid}>
        {technologies.map((tech, index) => (
          <Animatable.View
            key={tech.name}
            animation="fadeIn"
            delay={index * 100}
            style={styles.iconContainer}
          >
            <tech.icon size={48} color={Colors.light.primary} />
            <Text style={styles.iconText}>{tech.name}</Text>
          </Animatable.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      minHeight: '100vh',
      backgroundColor: Colors.light.background,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
  } as unknown as ViewStyle,
  title: {
    fontFamily: 'RobotoMono',
    fontSize: 30,
    color: Colors.light.primary,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  } as TextStyle,
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 1200,
    gap: 30,
  } as ViewStyle,
  iconContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(93, 82, 217, 0.1)',
  } as ViewStyle,
  iconText: {
    fontFamily: 'RobotoMono',
    fontSize: 14,
    color: Colors.light.text,
    marginTop: 10,
    textAlign: 'center',
  } as TextStyle,
});