# example deno cli

## run
```sh
deno run 'jsr:@ryoppippi/cli-example/add' 1, 2 # 3
deno run 'jsr:@ryoppippi/cli-example/sub' 1, 2 # -1
deno run 'jsr:@ryoppippi/cli-example' # Hi there!
```

## install
```sh
deno install -n add 'jsr:@ryoppippi/cli-example/add' # jsr:@ryoppippi/cli-example
add 1 2 # 3
```
