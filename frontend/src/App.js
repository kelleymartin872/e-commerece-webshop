import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
// import HomeScreen from './screens/HomeScreen'
// import ProductScreen from './screens/ProductScreen'
// import CartScreen from './screens/CartScreen'
// import LoginScreen from './screens/LoginScreen'
// import RegisterScreen from './screens/RegisterScreen'
// import ProfileScreen from './screens/ProfileScreen'
// import ShippingScreen from './screens/ShippingScreen'
// import PaymentScreen from './screens/PaymentScreen'
// import PlaceOrderScreen from './screens/PlaceOrderScreen'
// import OrderScreen from './screens/orderScreen'
// import UserListScreen from './screens/UserListScreen'
// import UserEditScreen from './screens/UserEditScreen'
// import ProductListScreen from './screens/ProductListScreen'
// import ProductEditScreen from './screens/ProductEditScreen'
// import OrderListScreen from './screens/OrderListScreen'
const HomeScreen = React.lazy(() => import('./screens/HomeScreen'))
const ProductScreen = React.lazy(() => import('./screens/ProductScreen'))
const CartScreen = React.lazy(() => import('./screens/CartScreen'))
const OrderScreen = React.lazy(() => import('./screens/orderScreen'))
const LoginScreen = React.lazy(() => import('./screens/LoginScreen'))
const RegisterScreen = React.lazy(() => import('./screens/RegisterScreen'))
const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen'))
const ShippingScreen = React.lazy(() => import('./screens/ShippingScreen'))
const PaymentScreen = React.lazy(() => import('./screens/PaymentScreen'))
const PlaceOrderScreen = React.lazy(() => import('./screens/PlaceOrderScreen'))
const UserListScreen = React.lazy(() => import('./screens/UserListScreen'))
const UserEditScreen = React.lazy(() => import('./screens/UserEditScreen'))
const ProductListScreen = React.lazy(() =>
  import('./screens/ProductListScreen')
)
const ProductEditScreen = React.lazy(() =>
  import('./screens/ProductEditScreen')
)
const OrderListScreen = React.lazy(() => import('./screens/OrderListScreen'))

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <React.Suspense fallback={<h1>...loading...</h1>}>
            <Switch>
              <Route path='/order/:id' component={OrderScreen} />
              <Route path='/shipping' component={ShippingScreen} />
              <Route path='/payment' component={PaymentScreen} />
              <Route path='/placeorder' component={PlaceOrderScreen} />
              <Route path='/login' component={LoginScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/product/:id' component={ProductScreen} />
              {/* the qustion mark after id means its optional */}
              <Route path='/cart/:id?' component={CartScreen} />
              <Route path='/admin/userlist' component={UserListScreen} />
              <Route path='/admin/user/:id/edit' component={UserEditScreen} />
              <Route
                path='/admin/productlist'
                component={ProductListScreen}
                exact
              />
              <Route
                path='/admin/productlist/:pageNumber'
                component={ProductListScreen}
                exact
              />
              <Route
                path='/admin/product/:id/edit'
                component={ProductEditScreen}
              />
              <Route path='/admin/orderlist' component={OrderListScreen} />
              <Route path='/search/:keyword' component={HomeScreen} exact />
              <Route path='/page/:pageNumber' component={HomeScreen} exact />
              <Route
                path='/search/:keyword/page/:pageNumber'
                component={HomeScreen}
                exact
              />
              <Route path='/' component={HomeScreen} exact />
            </Switch>
          </React.Suspense>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
