import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
          margin: 15
      }}
      inputStyle={{
          fontFamily: 'Avenir',
      }}
    />
  );
};

export default MyComponent;