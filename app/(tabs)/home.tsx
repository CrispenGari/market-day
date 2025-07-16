import LocalProductsBottomSheet from "@/src/components/BottomSheets/LocalProductsBottomSheet";
import HomeHeader from "@/src/components/Headers/HomeHeader";
import ProductsContainer from "@/src/components/ProductsContainer/ProductsContainer";
import { COLORS, FONTS } from "@/src/constants";
import { useLocationStore } from "@/src/store/locationStore";
import { useSettingsStore } from "@/src/store/settingsStore";
import { onImpact } from "@/src/utils";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Tabs } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Page = () => {
  const { user } = useUser();
  const { settings } = useSettingsStore();
  const [category, setCategory] = React.useState("all");
  const { location } = useLocationStore();
  const localProductsBottomSheetRef = React.useRef<BottomSheetModal>(null);

  return (
    <>
      <Tabs.Screen
        options={{
          header: (props) => (
            <HomeHeader
              {...props}
              category={category}
              setCategory={setCategory}
            />
          ),
        }}
      />
      <LocalProductsBottomSheet ref={localProductsBottomSheetRef} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: 400,
              gap: 10,
            }}
          >
            <View />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                maxWidth: 200,
              }}
              onPress={async () => {
                if (settings.haptics) {
                  await onImpact();
                }
                localProductsBottomSheetRef.current?.present();
              }}
            >
              <Ionicons name="location" size={20} color={COLORS.secondary} />
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: 16,
                  color: COLORS.secondary,
                }}
              >
                {!!!location?.address?.name
                  ? "Loading..."
                  : location.address.name}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 10,
            paddingBottom: 100,
          }}
          style={{ flex: 1, backgroundColor: COLORS.white }}
        >
          {/* <Button title="Hello there" onPress={sendNotification} /> */}
          <ProductsContainer
            category="all"
            header="Newly Listed"
            navigateTo="new"
          />
          <ProductsContainer
            category="all"
            header="Near By"
            navigateTo="near"
          />
          <ProductsContainer category="produce" header="Produce Products" />
          <ProductsContainer category="stock" header="Stock Products" />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;
