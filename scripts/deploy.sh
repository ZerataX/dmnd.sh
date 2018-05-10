rsync -e "ssh -o StrictHostKeyChecking=no" -r --delete-after --quiet $TRAVIS_BUILD_DIR/dist $SERVER_USER@$SERVER:$SERVER_DIR
ssh  -o "StrictHostKeyChecking no" $SERVER_USER@$SERVER chmod 0755 $SERVER_DIR -R
