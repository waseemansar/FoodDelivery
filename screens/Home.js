import { StatusBar, SafeAreaView, StyleSheet, ScrollView } from "react-native";

import Brands from "../components/Home/Brands";
import { Colors } from "../constants/theme";
import { BrandsData, foodData } from "../constants/dummy";
import { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import SearchFood from "../components/Home/SearchFood";
import FeaturedRow from "../components/Home/FeaturedRow";

export default function Home() {
    const [selectedBrandId, setSelectedBrandId] = useState("B01");
    const [trendingFood, setTrendingFood] = useState([]);
    const [promotedFood, setPromotedFood] = useState([]);

    useEffect(() => {
        setTrendingFood(foodData.filter((item) => item.trending && item.brandId === selectedBrandId));
        setPromotedFood(foodData.filter((item) => item.promotion && item.brandId === selectedBrandId));
    }, [selectedBrandId]);

    function brandChangeHandler(brandId) {
        setSelectedBrandId(brandId);
    }

    return (
        <>
            <StatusBar animated={true} backgroundColor={Colors.white} barStyle="dark-content" />
            <SafeAreaView style={styles.screen}>
                <Header />
                <SearchFood />
                <ScrollView>
                    <Brands activeBrandId={selectedBrandId} brands={BrandsData} onPress={brandChangeHandler} />
                    <FeaturedRow foodItems={trendingFood} title="Trending Now" description="The food menu based on our data" />
                    <FeaturedRow foodItems={promotedFood} title="Promotion" description="All best deals only for you" />
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
