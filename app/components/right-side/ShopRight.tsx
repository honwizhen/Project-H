import { StyleSheet, Text, View } from 'react-native';
import { useColorScheme } from 'react-native';

export default function ShopRight() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const featuredItems = [
    { name: 'Power Boost', price: '100 Coins' },
    { name: 'Special Skin', price: '250 Coins' },
    { name: 'XP Multiplier', price: '150 Coins' },
  ];

  return (
    <View style={[styles.container, { 
      backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5'
    }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#333' }]}>
        Featured Items
      </Text>
      
      {featuredItems.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={[styles.itemName, { color: isDark ? '#fff' : '#333' }]}>
            {item.name}
          </Text>
          <Text style={[styles.itemPrice, { color: isDark ? '#FFD700' : '#C0A020' }]}>
            {item.price}
          </Text>
        </View>
      ))}

      <View style={styles.balanceContainer}>
        <Text style={{ color: isDark ? '#aaa' : '#666' }}>Your Balance:</Text>
        <Text style={[styles.balance, { color: isDark ? '#FFD700' : '#C0A020' }]}>
          1,750 Coins
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  itemName: {
    fontWeight: '600',
    marginBottom: 4,
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)'
  },
  balance: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  }
});