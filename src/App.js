import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";

function App() {

  const sneakerses = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: '/img/sneakers/1.jpg',
    },
    {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg'},
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: '/img/sneakers/3.jpg',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: '/img/sneakers/4.jpg',
    },
  ];

  return (
    <div className="wrapper clear">
      <Cart/>
      <Header/>
      <main className="content p-40">
        <div className={'d-flex align-center justify-between mb-40'}>
          <h1 className={''}>Все кроссовки</h1>
          <div className={'search-block d-flex'}>
            <img src="/img/search.svg" alt="search"/>
            <input placeholder={'Поиск...'} type="text"/>
          </div>
        </div>
        <div className={'card__wrapper'}>
          {sneakerses.map(item =>
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
