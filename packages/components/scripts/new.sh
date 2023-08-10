#!/bin/bash

name=$1
if [ -z "$name" ]; then
    echo "Usage: $0 <name>"
    exit 1
fi

if [ -d "../src/$name" ]; then
    echo "Component $name already exists"
    exit 1
fi

cp -r ../src/example ../src/$name
mv ../src/$name/example.vue ../src/$name/$name.vue
sed -i "s/example/$name/g" ../src/$name/$name.vue
sed -i "s/example/$name/g" ../src/$name/type.ts

echo "A new component has been created at src/$name"
echo "Please add the following to src/index.ts"
echo "import $name from './$name'"
echo "// in export default"
echo "  app.component('$name', $name)"
echo "// at the end of the file"
echo "export { $name }"
