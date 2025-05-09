# needlee-echo

curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

cd frontend
npm install
npm audit fix
npm fund

apt install make
make prod