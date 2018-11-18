# @codingitwrong/react-login

Login form container components for React and React Native.

## Installation

```sh
$ yarn add @codingitwrong/react-login
```

## Usage

The following components are made available:

### <Auth />

```jsx
<Auth
  renderForm={renderForm}
  attemptLogin={attemptLogin}
>
  <p>You are now logged in!</p>
</Auth>

function renderForm({
  username,
  password,
  error,
  handleChange,
  handleLogIn,
}) {
  return (
    <form onSubmit={handleLogIn}>
      {error ? <p>error</p> : null}
      Username: <input type="text" value={username} onChange={handleChange('username')} />
      Password: <input type="password" value={password} onChange={handleChange('password')} />
      <button>Log In</button>
    </form>
  );
}

function attemptLogin({ username, password }) {
  return Promise.resolve(); // login succeeded
}
```

Note that `handleChange()` can also be used for React Native `onChangeText` handlers for `TextInput` and third-party text input components.

### <OAuth />

Instead of implementing your own `attemptLogin` function, if you are connecting to an OAuth 2 API to log in, you can use the `OAuth` component:

```jsx
<OAuth
  httpClient={httpClient}
  path={path}
  handleAccessToken={setToken}
  renderForm={renderForm}
>
  {children}
</OAuth>

const httpClient = axios.create({
  baseURL: 'https://api.example.com',
});

const path = '/path/to/login'; // by default, /oauth/token

function setToken(token) {
  // store it somewhere
}
```

## License

Apache-2.0
