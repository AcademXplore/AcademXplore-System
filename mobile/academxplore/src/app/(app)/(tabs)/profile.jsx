import { useAuth } from "@/src/contexts/auth-context";
import { useProfile } from "@/src/hooks/useProfile";
import { useQuantidadeProjetos } from "@/src/hooks/useQuantidadeProjetos";
import { Tabs } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Profile(){
  const {authState} = useAuth()
  const [error, setError] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)
  const [isFormSubmitting, setFormSubmitting] = useState(false)
  const {data, isLoading} = useProfile(authState?.user?.id, "profileByID")
  const [isDialogInsertVisible, setIsDialogInsertVisible] = useState(false)
  const [configDialog, setConfigDialog] = useState({tipo: ""})
  //const {data: dataQuantidadeProjetos, isLoading: isLoadingQuantidadeProjetos} = useQuantidadeProjetos(authState?.user?.id)

  const alterarParaEdicao = () => {
    setIsDisabled(!isDisabled)
  }


  return(
    <ScrollView style={{flex: 1, backgroundColor: '#f3f3f3'}}>
      <View>
        <View>
          {/* <Image style={{width: '100%', height: '100%'}} source={data?.banner} contentFit="fill" /> */}
        </View>
        <View>
          <View></View>
          <View>
            <Text>{data?.nome}</Text>
            <Text>{data?.email}</Text>
            <Text>{data?.banner}</Text>
          </View>
        </View>
      </View>
      <View></View>
    </ScrollView>
  )
}