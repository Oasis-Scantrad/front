export SALT="$(gopass show oasis/salts SALT)"
export SALT2="$(gopass show oasis/salts SALT2)"
export JWT_KEY="$(gopass show oasis/jwt-key -o)"

npm run dev