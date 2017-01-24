var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://ja.cantu:jitzsquare@ds033126.mlab.com:33126/jitzsquare');
var products = [
  new Product({
      imagePath: 'https://s27.postimg.org/xzft1nij7/slow_bar.jpg',
      title: 'Slow Bar Coffee',
      category: 'specialties_hot',
      description: 'What is a slow bar? According to Cory Stipp of Quay Coffee, “It is a freshly ground and brewed cup of coffee.”  Your coffee is brewed fresh to order, so it takes about 5 minutes to get your cup of hot coffee.',
      size: '12oz',
      price: 3.50
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/6wi4q8qkz/iced_slow_bar.jpg',
      title: 'Iced Slow Bar Coffee',
      category: 'specialties_iced',
      description: 'What is a slow bar? According to Cory Stipp of Quay Coffee, “It is a freshly ground and brewed cup of coffee.”  Your coffee is brewed fresh to order, so it takes about 5 minutes to get your cup of hot coffee.',
      size: '16oz',
      price: 3.50
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/3mz461d3n/batch_brew.jpg',
      title: 'Batch Brew Coffee',
      category: 'specialties_hot',
      description: 'When you boil it down, batch brewers take hot water, dispense them over coffee grounds, and extract the goodness.',
      size: '12oz',
      price: 2.00
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/3mz461d3n/batch_brew.jpg',
      title: 'Batch Brew Coffee',
      category: 'specialties_hot',
      description: 'When you boil it down, batch brewers take hot water, dispense them over coffee grounds, and extract the goodness.',
      size: '16oz',
      price: 2.50
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/seyqd9uab/americano.jpg',
      title: 'Americano',
      category: 'specialties_hot',
      description: 'An Americano (shortened from Italian: caffè americano or American Spanish: café americano) is a style of coffee prepared by brewing espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee.',
      size: '12oz',
      price: 3.00
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/seyqd9uab/americano.jpg',
      title: 'Americano',
      category: 'specialties_hot',
      description: 'An Americano (shortened from Italian: caffè americano or American Spanish: café americano) is a style of coffee prepared by brewing espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee.',
      size: '16oz',
      price: 3.50
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/j4mm9qjkj/iced_americano.jpg',
      title: 'Iced Americano',
      category: 'specialties_iced',
      description: 'An Iced Americano (shortened from Italian: caffè americano or American Spanish: café americano) is a style of coffee prepared by brewing espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee. This drink is served over ice.',
      size: '16oz',
      price: 3.50
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/ia4o1g13n/latte.jpg',
      title: 'Latte',
      category: 'specialties_hot',
      description: 'A Latte is a Coffee drink, originating from the Italian Peninsula.  It is made half espresso, and half steamed milk, topped off with milk foam.',
      size: '12oz',
      price: 3.75
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/ia4o1g13n/latte.jpg',
      title: 'Latte',
      category: 'specialties_hot',
      description: 'A Latte is a Coffee drink, originating from the Italian Peninsula.  It is made half espresso, and half steamed milk, topped off with milk foam.',
      size: '16oz',
      price: 4.25
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/qpu8iy3yr/iced_latte.jpg',
      title: 'Iced Latte',
      category: 'specialties_iced',
      description: 'A Latte is a Coffee drink, originating from the Italian Peninsula.  It is made half espresso, and half steamed milk, topped off with milk foam.',
      size: '16oz',
      price: 4.50
  }),
  new Product({
      imagePath: 'https://s28.postimg.org/n7g1egbx9/mocha.jpg',
      title: 'Mocha',
      category: 'specialties_hot',
      description: 'Caffè Mocha is based on espresso and hot milk, but with added chocolate.',
      size: '12oz',
      price: 4.00
  }),
  new Product({
      imagePath: 'https://s28.postimg.org/n7g1egbx9/mocha.jpg',
      title: 'Mocha',
      category: 'specialties_hot',
      description: 'Caffè Mocha is based on espresso and hot milk, but with added chocolate.',
      size: '16oz',
      price: 4.50
  }),
  new Product({
      imagePath: 'https://s28.postimg.org/9chqvzhi5/iced_mocha.jpg',
      title: 'Iced Mocha',
      category: 'specialties_iced',
      description: 'Caffè Mocha is based on espresso and milk, but with added chocolate.',
      size: '16oz',
      price: 5.00
  }),
  new Product({
      imagePath: 'https://s30.postimg.org/vql4zzmoh/latte_del_rey.jpg',
      title: 'Latte Del Rey',
      category: 'specialties_hot',
      description: 'The Latte Del Rey is a Jitterz original.  It features the perfect balance of espresso, raw sugar, and cream.',
      size: '12oz',
      price: 3.50
  }),
  new Product({
      imagePath: 'https://s30.postimg.org/vql4zzmoh/latte_del_rey.jpg',
      title: 'Latte Del Rey',
      category: 'specialties_hot',
      description: 'The Latte Del Rey is a Jitterz original.  It features the perfect balance of espresso, raw sugar, and cream.',
      size: '16oz',
      price: 4.00
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/st4nqm3rn/iced_latte_del_rey.jpg',
      title: 'Iced Latte Del Rey',
      category: 'specialties_iced',
      description: 'The Latte Del Rey is a Jitterz original.  It features the perfect balance of espresso, raw sugar, and cream.',
      size: '16oz',
      price: 4.00
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/e0vclj8gj/caramizzle.jpg',
      title: 'Caramizzle',
      category: 'specialties_hot',
      description: 'A Jitterz original, the Caramizzle is a caramel vanilla latte with caramel drizzle.',
      size: '12oz',
      price: 4.00
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/e0vclj8gj/caramizzle.jpg',
      title: 'Caramizzle',
      category: 'specialties_hot',
      description: 'A Jitterz original, the Caramizzle is a caramel vanilla latte with caramel drizzle.',
      size: '16oz',
      price: 4.25
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/nf5vj2e1f/iced_caramizzle.jpg',
      title: 'Iced Caramizzle',
      category: 'specialties_iced',
      description: 'A Jitterz original, the Caramizzle is a caramel vanilla latte with caramel drizzle.',
      size: '16oz',
      price: 5.00
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/7e8oscqs3/hot_chocolate.jpg',
      title: 'Hot Chocolate',
      category: 'non_coffee',
      description: 'Our made-in-house hot cocoa is great any day of the year.',
      size: '12oz',
      price: 3.50
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/7e8oscqs3/hot_chocolate.jpg',
      title: 'Hot Chocolate',
      category: 'non_coffee',
      description: 'Our made-in-house hot cocoa is great any day of the year.',
      size: '16oz',
      price: 4.00
  }),
  new Product({
      imagePath: 'https://s27.postimg.org/trl0swh3n/tea.jpg',
      title: 'Iced Tea',
      category: 'non_coffee',
      description: 'Choose from a variety of seasonal tea flavors.  Available sweetened or unsweetened.',
      size: '16oz',
      price: 2.75
  }),
  new Product({
      imagePath: 'https://www.totaltea.net/assets/images/photo_of_teacup_-_postcard_-_half_size_gdhp.jpg',
      title: 'Tea',
      category: 'non_coffee',
      description: 'Choose from a variety of seasonal tea flavors.  Available sweetened or unsweetened.',
      size: '12oz',
      price: 2.00
  }),
  new Product({
    imagePath: 'https://www.totaltea.net/assets/images/photo_of_teacup_-_postcard_-_half_size_gdhp.jpg',
      title: 'Tea',
      category: 'non_coffee',
      description: 'Choose from a variety of seasonal tea flavors.  Available sweetened or unsweetened.',
      size: '16oz',
      price: 2.50
  }),
  new Product({
    imagePath: 'https://s24.postimg.org/f2dlf94mt/chai_latte.jpg',
      title: 'Chai Latte',
      category: 'non_coffee',
      description: 'Our chai latte features spiced black tea blended with steamed milk.',
      size: '12oz',
      price: 3.50
  }),
  new Product({
    imagePath: 'https://s24.postimg.org/f2dlf94mt/chai_latte.jpg',
      title: 'Chai Latte',
      category: 'non_coffee',
      description: 'Our chai latte features spiced black tea blended with steamed milk.',
      size: '16oz',
      price: 4.00
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/9ziutm5jn/iced_chai.jpg',
      title: 'Iced Chai Latte',
      category: 'non_coffee',
      description: 'Our iced chai latte features spiced black tea blended with milk.',
      size: '16oz',
      price: 4.50
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/7d3ccoec3/oreo_ice_cream_chip.jpg',
      title: 'Frozen Chai',
      category: 'non_coffee',
      description: 'Our frozen chai latte features spiced black tea blended with ice and milk.  Try one today!',
      size: '16oz',
      price: 5.50
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/7d3ccoec3/oreo_ice_cream_chip.jpg',
      title: 'Fruit Smoothie',
      category: 'non_coffee',
      description: 'Assorted fresh fruits blended with milk and ice.',
      size: '16oz',
      price: 6.00
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/7d3ccoec3/oreo_ice_cream_chip.jpg',
      title: 'Ice Cream Latte',
      category: 'blended',
      description: 'Espresso, milk, and ice cream blended to perfection.',
      size: 'one_size',
      price: 6.00
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/4drubtfgz/campfire_mocha.jpg',
      title: 'Frozen Mocha',
      category: 'blended',
      description: 'Espresso, milk, cholate, and ice cream blended until smooth.',
      size: 'one_size',
      price: 6.00
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/7d3ccoec3/oreo_ice_cream_chip.jpg',
      title: 'Oreo Latte',
      category: 'blended',
      description: 'Blended espresso, milk, Oreo cookies, and ice cream.',
      size: 'one_size',
      price: 6.50
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/7d3ccoec3/oreo_ice_cream_chip.jpg',
      title: 'Chocolate Chip',
      category: 'blended',
      description: 'Blended espresso, milk, chocolate chips, and ice cream.',
      size: 'one_size',
      price: 6.50
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/4drubtfgz/campfire_mocha.jpg',
      title: 'Campfire Shake',
      category: 'blended',
      description: 'Enjoy our delicious Campfire Shake with Abuelita chocolate. It just might make your day.',
      size: 'one_size',
      price: 6.50
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/figsx3d77/espresso.jpg',
      title: 'Espresso',
      category: 'espresso_standards',
      description: 'Espresso is coffee brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.',
      size: 'one_size',
      price: 3.00
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/slh0u3ssz/macchiato.jpg',
      title: 'Macchiato',
      category: 'espresso_standards',
      description: 'Our macchiato is an espresso coffee drink with a small amount of foamed milk.',
      size: 'one_size',
      price: 3.50
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/6yxezc4ur/cortado.jpg',
      title: 'Cortado',
      category: 'espresso_standards',
      description: 'A cortado is a beverage that consists of espresso coffee mixed with a roughly equal amount of warm milk to reduce the acidity.',
      size: 'one_size',
      price: 3.50
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/txu4i90ur/cappuccino.jpg',
      title: 'Cappucino',
      category: 'espresso_standards',
      description: 'A cappuccino is an Italian coffee drink that is prepared with double espresso, hot milk, and steamed milk foam.',
      size: 'one_size',
      price: 4.00
  }),
  new Product({
    imagePath: 'https://s27.postimg.org/8vu53wvir/affogato.jpg',
      title: 'Affogato',
      category: 'espresso_standards',
      description: 'An affogato is a coffee-based dessert. It includes a scoop of vanilla ice cream topped or "drowned" with a shot of hot espresso.',
      size: 'one_size',
      price: 4.00
  }),
];


/** Loops through products array */
var done = 0;
for (var i = 0; i < products.length; i++) {

    /** Creates products collection in database */
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
console.log('Your items have been added!')


/** Function to disconnect from database */
function exit() {
    mongoose.disconnect();
}
