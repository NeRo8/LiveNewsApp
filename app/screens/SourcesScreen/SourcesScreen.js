import React, { Component } from 'react';
import { View, Text, Button, Picker } from 'react-native';
import { connect } from 'react-redux';
import { getListOfNewsSource, setFilter } from '../../actions/sourcesActions';

class SourcesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        country: '',
        language: '',
        category: ''
      }
    };
  }

  render() {
    const { filters } = this.props;
    return (
      <View>
        <Text>Sources</Text>

        <Button
          onPress={() => this.props.onLoadSources(filters)}
          title='Button'
        />
        <Button
          onPress={() => this.props.setFilters(this.state.filters)}
          title='Check filters'
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  sources: state.sourcesReducers,
  filters: state.sourcesReducers.filters
});

const mapDispatchToProps = dispatch => {
  return {
    onLoadSources: filters => {
      dispatch(getListOfNewsSource(filters));
    },
    setFilters: filters => {
      dispatch(setFilter(filters));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesScreen);
