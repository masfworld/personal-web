import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';
import HamburgerButton from './ui/HamburgerButton';

const menuItems = [
  { label: 'Home', href: 'home' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('menuIsOpen');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('menuIsOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  const handleNavigation = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // Close the menu after navigation
    }
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} onPress={() => setIsOpen(!isOpen)} />
      <View style={[styles.container, isOpen ? styles.menuOpen : styles.menuClosed]}>
        <View style={styles.menuContent}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.href}
              style={styles.menuItem}
              onPress={() => handleNavigation(item.href)}
            >
              <ThemedText style={styles.menuText}>{item.label}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Adjusted for React Native
    right: 0,
    top: 0,
    bottom: 0,
    width: 200,
    zIndex: 99,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    shadowColor: '#000',
    shadowOffset: { width: -10, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    transform: [{ translateX: '100%' }],
    transition: 'transform 0.3s ease',
  },
  menuContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  menuOpen: {
    transform: [{ translateX: 0 }],
  },
  menuClosed: {
    transform: [{ translateX: 200 }], // Adjusted for React Native
  },
  menuItem: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    width: 160,
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'RobotoMono',
    fontSize: 18,
    color: Colors.light.primary,
    fontWeight: '500',
    textAlign: 'center',
  },
});