import { COLORS, FONTS } from "@/src/constants";
import { useSettingsStore } from "@/src/store/settingsStore";
import { onImpact } from "@/src/utils";
import {
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const categories = [
  {
    Icon: <FontAwesome6 name="border-all" size={24} color="black" />,
    category: "all",
  },
  {
    Icon: <FontAwesome5 name="leaf" size={24} color={COLORS.tertiary} />,
    category: "produce",
  },
  {
    Icon: <MaterialCommunityIcons name="pig" size={24} color={"#AA5F48"} />,
    category: "stock",
  },
];
const ItemsCategoryBottomSheet = React.forwardRef<
  BottomSheetModal,
  {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
  }
>(({ category, setCategory }, ref) => {
  const snapPoints = React.useMemo(() => ["35%"], []);

  const { settings } = useSettingsStore();
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      index={0}
      handleComponent={null}
      enablePanDownToClose={false}
      enableOverDrag={false}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
    >
      <BottomSheetView style={{ flex: 1, padding: 20 }}>
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
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONTS.bold,
              marginBottom: 10,
            }}
          >
            Select Product Category
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 80 }}>
          {categories.map((cate) => (
            <TouchableOpacity
              key={cate.category}
              style={{
                width: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  category === cate.category ? COLORS.secondary : COLORS.main,
                borderRadius: 10,
                padding: 10,
                flexDirection: "row",
                flex: 1,
                gap: 10,
              }}
              onPress={async () => {
                if (settings.haptics) {
                  await onImpact();
                }
                setCategory(cate.category);
                dismiss();
              }}
            >
              {cate.Icon}
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {cate.category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default ItemsCategoryBottomSheet;

const styles = StyleSheet.create({
  btn: {
    width: 80,
    height: 80,
    justifyContent: "center",
    padding: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  tag: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    backgroundColor: COLORS.tertiary,
    top: 0,
    borderRadius: 3,
    left: 0,
  },
});
