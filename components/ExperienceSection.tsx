import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, Linking, TouchableOpacity } from 'react-native';
import { ReactTyped } from 'react-typed';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icon library

export default function ExperienceSection() {
  const [startTyping, setStartTyping] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Concatenate all experiences into one string with proper formatting
  const experienceString = `
    <span style="font-size:20px; color:${Colors.light.primary}; font-weight:bold;">Experience</span><br><br>
    <span style="color:${Colors.light.primary};">Big Data Lead</span> at <a href="https://www.opendigitalservices.com/" style="color:${Colors.light.primary}; text-decoration:underline;">ODS</a> (2025 - Present)<br>
    Leading Big Data engineering projects and building scalable data platforms. Apache Spark and AWS<br><br>
    <span style="color:${Colors.light.primary};">Senior Data Engineer Lead</span> at <a href="https://www.birdie.care/" style="color:${Colors.light.primary}; text-decoration:underline;">Birdie</a> (2021 - 2024)<br>
    Developed ETL pipelines and optimized data workflows using DBT, Snowflake, Kafka and AWS.<br><br>
    <span style="color:${Colors.light.primary};">Senior Data Engineer and Tech Lead</span> at <a href="https://www.gft.com" style="color:${Colors.light.primary}; text-decoration:underline;">GFT</a> (2015 - 2021)<br>
    Big Data Architect in projects for the banking sector.<br><br>
  `;

  return (
    <View ref={sectionRef} style={styles.container as ViewStyle} id="experience">
      <View style={styles.content as ViewStyle}>
        
        {startTyping && (
          <ReactTyped
            strings={[experienceString]}
            typeSpeed={20}
            showCursor={true}
            cursorChar="▋"
            style={styles.typedText as TextStyle}
          />
        )}

        {/* Social Links */}
        <View style={styles.socialLinks}>
          {/* LinkedIn */}
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/miguelsotomayorf/')}>
            <MaterialCommunityIcons name="linkedin" size={40} color={Colors.light.primary} />
          </TouchableOpacity>

          {/* GitHub */}
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/masfworld')}>
            <MaterialCommunityIcons name="github" size={40} color={Colors.light.primary} />
          </TouchableOpacity>
        </View>
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
  },
  content: {
    maxWidth: 1200,
    alignSelf: 'flex-start', // Align content to the left
  } as ViewStyle,
  typedText: {
    fontFamily: 'RobotoMono',
    fontSize: 15,
    letterSpacing: 0.5,
    color: Colors.light.text,
    textAlign: 'left', // Align text to the left
  } as TextStyle,
  socialLinks: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 20, // Space between icons
  },
});