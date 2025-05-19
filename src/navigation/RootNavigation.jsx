import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import UserNavigation from './UserNavigation';
import AuthNavigation from './AuthNavigation';

const RootNavigation = () => {
  const [isRole, setIsRole] = useState({
    userRole: 'user',       // can be 'user' but not needed here anymore
    isguest: false,
    isLoggin: false,
  });

  const { isguest, isLoggin } = isRole;

  const renderNavigation = () => {
    if (isLoggin || isguest) {
      return <UserNavigation />;
    }
    return <AuthNavigation />;
  };


};

export default RootNavigation;

const styles = StyleSheet.create({});
