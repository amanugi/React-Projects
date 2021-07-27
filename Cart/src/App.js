import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
  constructor() {
    super();        // calling the constructor of parent class first
    this.state = {
        products: [],
        loading: true
    }
    this.db  = firebase.firestore();

    //this.increaseQuantity = this.increaseQuantity.bind(this);;
  }

  handleIncreaseQuantity = (product) => {
      //console.log("Hey increase the qty pls!");
      const { products } = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;

      // this.setState({             // re-render the component
      //     products
      // })

      //updating the products item
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then(() => {
          console.log('Increased successfully');
        })
        .catch((err) => {
          console.log('Error: ', err);
        })
  }

  handleDecreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0)
          return;

      // products[index].qty -= 1;

      // this.setState({
      //     products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(() => {
          console.log('Decreased successfully');
        })
        .catch((err) => {
          console.log('Error : ', err);
        })
  }

  handleDeleteQuantity = (id) => {
      const { products } = this.state;
      
      // const items = products.filter((item) => item.id !== id);
      
      // this.setState({
      //     products: items
      // })

      const docRef = this.db.collection('products').doc(id);

      docRef
        .delete()
        .then(() => {
          console.log('Deleted successfully');
        })
        .catch((err) => {
          console.log('Error : ', err);
        })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    
    let cartTotal = 0;

    products.map((product) => {
      if(product.qty > 0){
        cartTotal += product.qty * product.price;
      }
      return '';
    });
    return cartTotal;
  }

  // Getting products from firebase
  componentDidMount () {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //     const data = doc.data();
        
    //     data['id'] = doc.id;
    //     return data;
    //     });

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    this.db
      .collection('products')
      // .where('price', '==', 99)       // queyring for the data from the database
      // .where('title', '==', 'Mouse')
      .orderBy('price','desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        
        data['id'] = doc.id;
        return data;
        })

        this.setState({
          products,
          loading: false
        })
      })
  }

  // Adding product to the firebase
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        title: 'Laptop',
        price: 100000,
        qty: 5,
        img: 'data:image/jpeg;base64,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'
      })
      .then((docRef) => {
        console.log('Product has been added: ', docRef);
      })
      .catch((err) => {
        console.log('Error: ', err);
      })
  }

  render() {
    const { products, loading } = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} > CART </Navbar>
        {/* <br />
        <br />
        <br /> */}
        {/* <button onClick = {this.addProduct} style= {{padding:20, fontSize: 20}}>Add a product</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity = { this.handleIncreaseQuantity }
          onDecreaseQuantity = { this.handleDecreaseQuantity }
          onDeleteQuantity = { this.handleDeleteQuantity }
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={ {padding: 10,fontSize: 20} }> TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
