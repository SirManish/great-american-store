export default function Account() {
  return (
    <main className="page">
      <div className="container narrow">
        <label>MY ACCOUNT</label>
        <h1>Customer Account</h1>

        <p className="muted">
          Login/signup is reserved for the production backend. This page is
          the starting point for order history, saved addresses and wishlist.
        </p>

        <div className="accountBox">
          <h3>Coming in production setup</h3>
          <ul>
            <li>OTP/email login</li>
            <li>Order history</li>
            <li>Saved addresses</li>
            <li>Wishlist</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
