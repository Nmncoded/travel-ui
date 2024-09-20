import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ListingType } from "@/types/listingType";
import listingData from "@/data/destinations.json";
import {
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Animated, {
    SlideInDown,
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset,
} from "react-native-reanimated";
import DecayComponent from "@/components/decayComponent";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ListingDetails = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const listing: ListingType | undefined = (listingData as ListingType[]).find(
        (item) => item.id === id
    );

    console.log(id);


    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);


    const imageAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              scrollOffset.value,
              [-IMG_HEIGHT, 0, IMG_HEIGHT],
              [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
            ),
          },
          {
            scale: interpolate(
              scrollOffset.value,
              [-IMG_HEIGHT, 0, IMG_HEIGHT],
              [2, 1, 1]
            ),
          },
        ],
      };
    });


    console.log(scrollOffset.value); // Check if this value changes as you scroll

    return (
        <>
            <View style={styles.container}>
                <Animated.ScrollView
                    ref={scrollRef}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 150 }}
                >
                    <Animated.Image
                        source={{ uri: listing?.image }}
                        style={[styles.image, imageAnimatedStyle]}
                    />
                    <View style={styles.contentWrapper}>
                        <Text style={styles.listingName}>{listing?.name}</Text>

                        <View style={styles.listingLocationWrapper}>
                            <FontAwesome5
                                name="map-marker-alt"
                                size={18}
                                color={Colors.primaryColor}
                            />
                            <Text style={styles.listingLocationTxt}>{listing?.location}</Text>
                        </View>

                        <View style={styles.highlightWrapper}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.highlightIcon}>
                                    <Ionicons name="time" size={18} color={Colors.primaryColor} />
                                </View>
                                <View>
                                    <Text style={styles.highlightTxt}>Duration</Text>
                                    <Text style={styles.highlightTxtVal}>
                                        {listing?.duration} Days
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.highlightIcon}>
                                    <FontAwesome
                                        name="users"
                                        size={18}
                                        color={Colors.primaryColor}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.highlightTxt}>Person</Text>
                                    <Text style={styles.highlightTxtVal}>{listing?.duration}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={styles.highlightIcon}>
                                    <Ionicons name="star" size={18} color={Colors.primaryColor} />
                                </View>
                                <View>
                                    <Text style={styles.highlightTxt}>Rating</Text>
                                    <Text style={styles.highlightTxtVal}>
                                        {listing?.rating}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.listingDetails}>{listing?.description}</Text>



                    </View>
                </Animated.ScrollView>
            </View>
            {/* <DecayComponent /> */}

            <Animated.View style={styles.footer} entering={SlideInDown.delay(500)}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={[styles.footerBtn, styles.footerBookBtn]}
                >
                    <Text style={styles.footerBtnTxt}>Book Now</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.footerBtn}>
                    <Text style={styles.footerBtnTxt}>${listing?.price}</Text>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
};

export default ListingDetails;

const styles = StyleSheet.create({
    gestureContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    image: {
        width: width,
        height: IMG_HEIGHT,
        // Ensure the image is positioned correctly
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1, // Send image behind other content if necessary
    },
    contentWrapper: {
        padding: 20,
        backgroundColor: Colors.white,
        marginTop: IMG_HEIGHT
    },
    listingName: {
        fontSize: 24,
        fontWeight: "500",
        color: Colors.black,
        letterSpacing: 0.5,
    },
    listingLocationWrapper: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 10,
        alignItems: "center",
    },
    listingLocationTxt: {
        fontSize: 14,
        marginLeft: 5,
        color: Colors.black,
    },
    highlightWrapper: {
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "space-between",
    },
    highlightIcon: {
        backgroundColor: "#F4F4F4",
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8,
        marginRight: 5,
        alignItems: "center",
    },
    highlightTxt: {
        fontSize: 12,
        color: "#999",
    },
    highlightTxtVal: {
        fontSize: 14,
        fontWeight: "600",
    },
    listingDetails: {
        fontSize: 16,
        color: Colors.black,
        lineHeight: 25,
        letterSpacing: 0.5,
    },
    footer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        padding: 20,
        paddingBottom: 30,
        width: width,
    },
    footerBtn: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    footerBookBtn: {
        flex: 2,
        backgroundColor: Colors.primaryColor,
        marginRight: 20,
    },
    footerBtnTxt: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "600",
        textTransform: "uppercase",
    },
});