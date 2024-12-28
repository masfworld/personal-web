import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, Linking, TouchableOpacity } from 'react-native';
import { ReactTyped } from 'react-typed';
import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icon library

export default function ProjectsSection() {
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
  // Concatenate all projects into one string with proper formatting
  const projectsString = `
    <span style="font-size:24px; color:${Colors.light.primary}; font-weight:bold;">Projects & Collaborations</span><br><br>
    <span style="color:${Colors.light.primary};">Debezium Contribution</span><br>
    Adding a new feature to Debezium open source: <a href="https://medium.com/engineering-at-birdie/diving-deeper-birdies-latest-contribution-to-debezium-open-source-project-autoset-replica-3fbfb59e58dd" style="color:${Colors.light.primary}; text-decoration:underline;">Read more</a><br><br>
    <span style="color:${Colors.light.primary};">Apache Spark Lecturer</span><br>
    Lecturer for Apache Spark in a master's program at <a href="https://www.datahack.es/cursos/master-experto-big-data-architecture-engineering/" style="color:${Colors.light.primary}; text-decoration:underline;">Datahack</a> company.<br>
  `;

  return (
    <View ref={sectionRef} style={styles.container as ViewStyle} id="projects">
      <View style={styles.content as ViewStyle}>
        {/* Typed Text */}
        {startTyping && (
          <ReactTyped
            strings={[projectsString]}
            typeSpeed={20}
            showCursor={true}
            cursorChar="▋"
            style={styles.typedText as TextStyle}
          />
        )}

        {/* Project Links */}
        <View style={styles.projectLinks}>
          {/* GitHub Repository */}
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/masfworld')}>
            <MaterialCommunityIcons name="github" size={40} color={Colors.light.primary} />
            <Text style={styles.linkText}>GitHub</Text>
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
    fontSize: 20,
    letterSpacing: 0.5,
    color: Colors.light.text,
    textAlign: 'left', // Align text to the left
  } as TextStyle,
  projectLinks: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20, // Space between items
  },
  linkText: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'RobotoMono',
    color: Colors.light.primary,
    textAlign: 'center',
  },
});