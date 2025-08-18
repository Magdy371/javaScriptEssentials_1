const React = require('react');

function Index({ name }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome {name}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <nav>
            <h1>My SSR App</h1>
          </nav>
        </header>

        <main>
          <section>
            <h2>Hello, {name} 👋</h2>
            <p>Welcome to our server-rendered React application. This page was rendered on the server using Express and React Views.</p>
          </section>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Magdy Dev Studio</p>
        </footer>
      </body>
    </html>
  );
}

module.exports = Index;