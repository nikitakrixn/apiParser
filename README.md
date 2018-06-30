# Razrushitelniy-Krug

## Информация о приложении
> Получение актуальных цен с различных криптовалютных сайтов: <br>
-https://exmo.me   <br>
-https://poloniex.com   <br> 

## Установка

``` bash
# Обновите индекс пакетов
$ sudo apt-get update
$ sudo apt-get upgrade -y

# Установить CURL
$ sudo apt-get install curl

# Установить nodejs из репозитории
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs

# Установить mysql
sudo apt install mysql-server
Оставьте пароль для root пустым
sudo apt install mysql-client

# Откройте mysql console
mysql -p -u root

# Создайте базу данных
create database bidlocoin;
quit;

# Установите GIT
sudo apt-get install git

# Скопируйте репозиторий
git clone https://github.com/nikitakrixn/bidlo_nodejs

# Установите зависимости для сервера
npm install

# Установите зависимости для клиента
npm run client-install

# Установите бабель и ORM глобально
npm i -g babel@5 sequelize-cli

# Сделайте миграцию в базу данных
cd Razrushitelniy-Krug
sequelize db:migrate

# Запуск клиентской и серверной части совместно
npm run dev

# Запуск сервера отдельно
npm run server

# Запуск клинской части отдельно
npm run client

# Сервер будет запущен на http://localhost:5000 и клиент на http://localhost:3000
```

### Автор

Nikita Naidenov
(https://vk.com/krixn)

### Версия

0.1.0

### License

This project is licensed under the MIT License
