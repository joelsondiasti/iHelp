import { TouchableOpacity, Image, TouchableOpacityProps, Text, StyleSheet, ActivityIndicator, View } from "react-native";


interface ButtonProps extends TouchableOpacityProps {
     title: string
     isLoading?: boolean
     imgUrl: any
}

export default function Button({ title, isLoading = false, imgUrl, ...rest }: ButtonProps) {
     return (
          <TouchableOpacity disabled={isLoading} style={styles.container} activeOpacity={0.8} {...rest}>
               {
                    isLoading ? <ActivityIndicator color={"white"} /> :
                         <>
                              <View style={styles.div}>
                                   <Image source={imgUrl} style={styles.img} />
                                   <Text style={styles.title}>{title}</Text>
                              </View>
                         </>
               }
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     container: {
          width: "100%", flexDirection: 'row', padding: 12, borderWidth: 2, borderRadius: 50, alignItems: 'center',
          borderColor: "#E2E8F0", justifyContent: 'space-evenly',
     },
     title: { fontSize: 18, textAlign: 'left' },
     img: { height: 25, width: 25, objectFit: 'contain' },
     icon: { color: "#000", fontSize: 20 },
     div: { flexDirection: 'row', width: "60%", alignItems: 'center', gap: 13 }
})