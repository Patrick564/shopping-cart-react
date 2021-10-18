import { Component } from 'react'
import Products from './components/Products.js'
import Layout from './components/Layout.js'
import Title from './components/Title.js'
import Navbar from './components/Navbar.js'

class App extends Component {
    state = {
        products: [
            { name: 'Tomate', price: 1500, img: '/products/tomate.jpg' },
            { name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg' },
            { name: 'Lechuga', price: 500, img: '/products/lechuga.jpg' },
        ],
        cart: [],
        isCartVisible: false,
    }

    addToCart = (product) => {
        const { cart } = this.state

        if (cart.find(x => x.name === product.name)) {
            const newCart = cart.map(x => x.name === product.name ? ({ ...x, quantity: x.quantity + 1 }) : x)

            return this.setState({ cart: newCart })
        }

        return this.setState({
            cart: this.state.cart.concat({
                ...product,
                quantity: 1,
            })
        })
    }

    showCart = () => {
        if (!this.state.cart.length) { return }

        this.setState({ isCartVisible: !this.state.isCartVisible })
    }

    render() {
        const { isCartVisible } = this.state

        return (
            <div>
                <Navbar cart={this.state.cart} isCartVisible={isCartVisible} showCart={this.showCart} />
                <Layout>
                    <Title />
                    <Products
                        addToCart={this.addToCart}
                        products={this.state.products}
                    />
                </Layout>
            </div>
        )
    }
}

export default App;
