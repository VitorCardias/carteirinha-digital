import { SafeAreaView, View, ActivityIndicator } from "react-native"
import Routes from "./src/routes"
import RoutesAuth from "./src/routesAuth"
import { useEffect, useState } from "react";

import { auth } from "./src/services/api";
import { COLORS } from "./src/constants/theme";
import { onAuthStateChanged } from "firebase/auth";
import { UserProvider } from "./src/services/UserContext";

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) =>{
      setUser(_user);
      if(initializing) {
        setInitializing(false);
      }
    })

    return unsubscribe;
  }, [])

  if(initializing) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: "auto"}}>
        <ActivityIndicator size="large" color={COLORS.blue} />
      </View>
    );
  }

  return (
    <UserProvider>
      <SafeAreaView style={{flex: 1}}>
        {user ? <RoutesAuth /> : <Routes /> }
      </SafeAreaView>
    </UserProvider>
  );
}