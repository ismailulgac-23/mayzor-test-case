Yapılacaklar:

- npm install --global yarn
- Projede .env dosyası oluşturun ve içerisine aşağıdaki kodları yerleştirin;
  PORT=4000
  DATABASE_URL="file:./dev.db"

- Komut satırına sırasıyla şu kodları çalıştırın;
  yarn prisma:migrate
  yarn seed:init

- Son olarak projeyi ayağa kaldırın;
  yarn start:dev
