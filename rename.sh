for file in ./src/components/partials/**/*.jsx
do
  mv "$file" "${file%.jsx}.tsx"
done