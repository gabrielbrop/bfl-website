set -e

yarn run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/gabrielbrop/bfl-website.git master:gh-pages

cd -