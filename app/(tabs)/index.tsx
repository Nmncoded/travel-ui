import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Link, Stack, useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import CategoryButtons from "@/components/categoryButtons";
import { useEffect, useState } from "react";
import Listings from "@/components/listings";
import listingData from '@/data/destinations.json';
import groupData from '@/data/groups.json';
import GroupListings from "@/components/groupListings";

export default function Page() {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");
  const isLoggedin = true;

  const onCatChanged = (category: string) => {
    console.log("Categpry: ", category);
    setCategory(category);
  };

  const router = useRouter();


  if(!isLoggedin){
    router.replace("/login");
  }

  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20, }} >
            <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=female' }} style={{ width: 40, height: 40, borderRadius: 10 }} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 20, backgroundColor: Colors.white, padding: 10, borderRadius: 10, shadowColor: "#171717", shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 10 }} >
            <Ionicons size={20} color={Colors.black} name="notifications" />
          </TouchableOpacity>
        )
      }} />
      <View style={[styles.container, { paddingTop: headerHeight }]} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ 
                  marginRight: 5,
                  paddingTop: 18,
                  paddingLeft: 5, 
                  width: 30,

                }}
                color={Colors.black}
              />
              <TextInput style={{
                flex: 1
              }} placeholder="Search..." />
            </View>
            <TouchableOpacity onPress={() => { }} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <CategoryButtons
          onCagtegoryChanged={onCatChanged} 
          />

          <Listings listings={listingData} category={category} />

          <GroupListings listings={groupData} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 10,
    // padding: 16,
    shadowColor: "#171717", 
    shadowOffset: { width: 2, height: 4 }, 
    // shadowOpacity: 0.2, 
    // shadowRadius: 3,
    elevation: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
})
