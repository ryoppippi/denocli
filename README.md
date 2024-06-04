# example deno cli

## run
```sh
deno run 'jsr:@cl1/example/add' 1, 2 # 3
deno run 'jsr:@cl1/example/sub' 1, 2 # -1
deno run 'jsr:@cl1/example' # Hi there!
```

## install
```sh
deno install -n add '@cl1/example/add' # jsr:@ryoppippi/cli-example
add 1 2 # 3
```
