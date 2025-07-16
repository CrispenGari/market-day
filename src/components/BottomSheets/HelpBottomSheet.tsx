import { COLORS, FONTS } from "@/src/constants";
import { useSettingsStore } from "@/src/store/settingsStore";
import { onImpact } from "@/src/utils";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HelpBottomSheet = React.forwardRef<BottomSheetModal, {}>(({}, ref) => {
  const snapPoints = React.useMemo(() => ["50%"], []);
  const { dismiss } = useBottomSheetModal();
  const { settings } = useSettingsStore();
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      index={0}
      enablePanDownToClose={false}
      enableOverDrag={false}
      handleComponent={null}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
    >
      <BottomSheetView
        style={{
          flex: 1,
          padding: 10,
          paddingBottom: 100,
        }}
      >
        <View
          style={{
            alignSelf: "flex-end",
            paddingHorizontal: 20,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              backgroundColor: COLORS.main,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            hitSlop={20}
            onPress={async () => {
              if (settings.haptics) {
                await onImpact();
              }
              dismiss();
            }}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONTS.bold,
              marginBottom: 10,
            }}
          >
            How does Mzansi Mart works?
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: 18,
            }}
          >
            The Mzansi Mart app connects local farmers with nearby consumers by
            using location-based technology, smart recommendations, and
            real-time communication tools. When users open the app, it
            identifies their location to display nearby agricultural products
            sold by local farmers. The app recommends products through three
            filtering methods: demographic filtering (based on user preferences
            and popular items), content-based filtering (suggesting similar
            products using metadata like location and product description), and
            collaborative filtering (using patterns from other users with
            similar interests). Consumers can chat with farmers in real time,
            negotiate prices, and add items to a wishlist, which helps improve
            future recommendations. Push notifications keep users updated on new
            products or special offers, making the buying and selling process
            efficient, personalized, and community-focused.
          </Text>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default HelpBottomSheet;
