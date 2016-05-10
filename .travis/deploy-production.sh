#!/bin/sh
eval "$(ssh-agent -s)"

chmod 600 deploy-key.pem
ssh-add deploy-key.pem

git remote add deploy ssh://bithub@production.bithub.com/home/bithub/client.git
# Do not change this line. Travis has the ability push back to the repository
# https://docs.travis-ci.com/user/github-oauth-scopes/
git push -f deploy production:production
