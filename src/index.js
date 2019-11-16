import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routers';

export default function App() {
    return (
        <>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <Routes />
        </>
    );
}
