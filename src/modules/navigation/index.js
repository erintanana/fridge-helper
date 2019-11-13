import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//constants
import * as COLORS from '../../constants/colors';
import * as ROUTES from '../../constants/routes';

//screens
import Loading from '../../screens/loading';
import Dashboard from '../../screens/dashboard';
import Settings from '../../screens/settings';
import AddProduct from "../../screens/add-products/add-product";

const MainNavigator = createStackNavigator(
  {
    [ROUTES.LOADING]: {screen: Loading},
    [ROUTES.SETTINGS]: {screen: Settings},
    [ROUTES.DASHBOARD]: {screen: Dashboard},
      [ROUTES.ADD_PRODUCT]: {screen: AddProduct}
  },
  {
    initialRouteName: ROUTES.LOADING,
    defaultNavigationOptions: {header: null},
    cardStyle: {backgroundColor: COLORS.WHITE},
  },
);

const App = createAppContainer(MainNavigator);

export default App;
