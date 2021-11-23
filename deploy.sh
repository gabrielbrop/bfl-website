set -e

yarn run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:gabrielbrop/bfl-website.git main:gh-pages

cd -