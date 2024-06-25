import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";


interface ButtonProps extends TouchableOpacityProps {
     title: string
     isLoading?: boolean
     icon: keyof typeof Ionicons.glyphMap
}

export default function Button({ title, isLoading = false, icon, ...rest }: ButtonProps) {
     return (
          <TouchableOpacity disabled={isLoading} style={styles.container} activeOpacity={0.8} {...rest}>
               {
                    isLoading ? <ActivityIndicator  color={"white"}/> :
                         <>
                              <Ionicons name={icon} style={styles.icon} />
                              <Text style={styles.title} >{title}</Text>
                         </>
               }

          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     container: { width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 18, borderRadius: 16, backgroundColor: "#0065FF", },
     title: { color: "#fff", fontSize: 16 },
     icon: { color: "#fff", fontSize: 20}
})