import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';

import news_data from './news_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}></FlatList>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'grey'},
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
