import { Ionicons } from "@expo/vector-icons";
import {
  Button, Center,
  Container,
  Heading, Icon, Image, Stack, Text
} from "native-base";
import React from "react";
import { ImageBackground, View } from "react-native";
const Player = () => {
  const image = {
    uri: "https://c4.wallpaperflare.com/wallpaper/23/58/521/live-4-music-wallpaper-preview.jpg",
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={image}
        // resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Center
          height={"full"}
          width={{
            base: "full",
            lg: "full",
          }}
        >
          <Container>
            <Center>
              <Image
                source={{
                  uri: "https://c4.wallpaperflare.com/wallpaper/27/451/682/judy-alvarez-cyberpunk-2077-cd-projekt-red-hd-wallpaper-preview.jpg",
                }}
                alt="Alternate Text"
                size="2xl"
                borderRadius={"xl"}
              />
              <Heading mt={5}>
              <Text fontWeight="medium" color={"#fff"}>
                ten bai hat
              </Text>
            </Heading>
            <Stack
              mt={5}
              direction={{
                base: "row",
                md: "row",
              }}
              space={2}
              alignItems={{
                base: "center",
                md: "center",
              }}
            >
              <Button
                borderRadius={"full"}
                width="10"
                height={10}
                startIcon={
                  <Icon
                    as={Ionicons}
                    name="radio"
                    size="lg"
                  />
                }
              ></Button>
              <Button
                borderRadius={"full"}
                width="10"
                height={10}
                startIcon={
                  <Icon as={Ionicons} name="radio" size="lg" />
                }
              ></Button>
              <Button
                borderRadius={"full"}
                width="10"
                height={10}
                startIcon={
                  <Icon as={Ionicons} name="radio" size="lg" />
                }
              ></Button>
            </Stack>
            </Center>
          </Container>
        </Center>
      </ImageBackground>
    </View>
  );
};

export default Player;
