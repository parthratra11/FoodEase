import "./homepage.css";

function NavigationBar() {
  function Greet() {
    return (
      <div className="navItem" id="greet">
        Greet
      </div>
    );
  }
  function SupportMenu() {
    return (
      <div className="navItem" id="supportMenu">
        Support
      </div>
    );
  }
  function BruceBanner() {
    return <div id="banner">Banner</div>;
  }
  function Cart() {
    return (
      <div className="navItem" id="cart">
        Cart
      </div>
    );
  }
  function Logout() {
    return (
      <div className="navItem" id="logout">
        Logout
      </div>
    );
  }

  return (
    <>
      <div className="navBar">
        <Greet />
        <SupportMenu />
        <BruceBanner />
        <Cart />
        <Logout />
      </div>
    </>
  );

  // function globalSearch() {}
}

function Outlets() {}

function Menu() {
  function search() {}
  function Item() {}
}

export default function HomePage() {
  return (
    <>
      <h1 className="homeHeader">This is Homepage !</h1>
      <NavigationBar />
    </>
  );
}
