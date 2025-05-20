import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import UserNavigation from './UserNavigation';
import AuthNavigation from './AuthNavigation';

const RootNavigation = () => {
  const [isRole, setIsRole] = useState({
    isguest: false,   // default: not a guest
    isLoggin: false,  // default: not logged in
  });

  const { isguest, isLoggin } = isRole;

  return (
    <>
      {(isLoggin && !isguest) ? <UserNavigation /> : <AuthNavigation />}
    </>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
