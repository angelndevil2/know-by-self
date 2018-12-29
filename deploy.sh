#!/bin/sh

DIST_DIR="deploy-to-surge"
FIREBASE="firebase-project"

rm -rf "$DIST_DIR"
# mkdir "$DIST_DIR" && cp -R dist/*/* "$DIST_DIR" && cp CNAME "$DIST_DIR" && cd "$DIST_DIR" && surge --domain https://all-apis.surge.sh
mkdir "$DIST_DIR" && cp -R dist/*/* "$DIST_DIR" && cp CNAME.knowbyself "$DIST_DIR"/CNAME && cp dist/*/index.html $DIST_DIR/200.html && cd "$DIST_DIR" && surge # --domain https://knowbyself.ml

cd -
rm -rf "$FIREBASE/public/*"
cp legacy_html/* "$FIREBASE/public" && cp -R dist/*/* "$FIREBASE/public" && cd "$FIREBASE" && firebase deploy
