import React from 'react'
import { ScrollView, Text, View, FlatList, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CastActions from '../../Stores/CastStore'
import Style from './ExampleScreenStyle'
import { ApplicationStyles, Helpers, Metrics, Fonts } from 'App/Theme'

function ExampleScreen(props) {
  return (
    <ScrollView contentContainerStyle={[Helpers.fill, Helpers.rowMain]}>
      {props.castLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <View style={Style.logoContainer}>
            <Image
              style={Style.logoContainer}
              source={{
                uri:
                  'https://image.tmdb.org/t/p/w600_and_h900_bestv2/MoEKaPFHABtA1xKoOteirGaHl1.jpg',
              }}
            />
          </View>
          <FlatList
            testID="FlatList"
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
            data={props.cast.cast}
            renderItem={renderItem}
          />
        </ScrollView>
      )}
    </ScrollView>
  )
}

const renderItem = ({ item }) => {
  const characterImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + item.profile_path
  return (
    <View style={[Helpers.fillRow, Metrics.smallHorizontalMargin, Metrics.smallVerticalMargin]}>
      <Image
        style={Style.imageCharacter}
        source={{
          uri: characterImage,
        }}
      />
      <View>
        <Text style={[Fonts.normal, { width: 250, padding: 10 }]}>{item.character}</Text>
        <Text style={{ width: 200, paddingLeft: 10 }}>{item.name}</Text>
      </View>
    </View>
  )
}

ExampleScreen.propTypes = {
  fetchCast: PropTypes.func,
  castLoading: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  cast: state.cast.payload,
  castLoading: state.cast.fetching,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCast: () => dispatch(CastActions.CastRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleScreen)
