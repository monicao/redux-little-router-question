# redux-little-router-question

```
        <Fragment forRoute='/'>
          <div>Home</div>
        </Fragment>
        <Fragment forRoute='/foo'>
          <div>Foo</div>
        </Fragment>
        <Fragment forRoute='/foo/bar'>
          <div>Bar</div>
        </Fragment>

```

```
// routes.js
export default {
  '/': { title: 'Home' },
  '/foo': { title: 'Foo' },
  '/bar': { title: 'Bar' }
}
```

When accessing the `/` route... all good.
![/](https://s3.amazonaws.com/monicao/gist_images/redux_little_router_1.png)
`/foo/bar` renders all fragments... not expecting this.
![/foo/bar](https://s3.amazonaws.com/monicao/gist_images/redux_little_router_2.png)
`/anything` renders the home fragment again.
![/anything](https://s3.amazonaws.com/monicao/gist_images/redux_little_router_3.png)
