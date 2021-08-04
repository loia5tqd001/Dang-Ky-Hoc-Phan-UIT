- To change all `jsx` files under `./src` folder to `tsx`

```
find ./src -type f |grep "\.jsx$" | while read line; do git mv -- $line ${line%.jsx}.tsx; done;
```

- To change all `js` files under `./src` folder to `ts`

```
find ./src -type f |grep "\.js$" | while read line; do git mv -- $line ${line%.js}.ts; done;
```
